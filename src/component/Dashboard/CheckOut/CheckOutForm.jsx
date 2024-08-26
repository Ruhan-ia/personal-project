import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useCart from '../../../Hook/useCart';
import useToys from '../../../Hook/useToys';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId]= useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cart, refetch] =useCart();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, toy)=> total + toy.price, 0)

    useEffect(() =>{

      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then(res =>{
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
      })
      }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event)=>{

        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message)
        }
        else{
            console.log("payment Method", paymentMethod);
            setError('')
        }
        // confirm card payment

        const {paymentIntent, error: confirmError}=await stripe.confirmCardPayment(clientSecret, {
          payment_method:{
            card: card,
            billing_details:{
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
            }
          }

         
         
          
        })
        if(confirmError){
          console.log('confirmError')
        }
        else{
          console.log('payment Intent', paymentIntent)
          if(paymentIntent.status === 'succeeded'){
            console.log('paymentIntent Id', paymentIntent.id)
            setTransactionId(paymentIntent.id)

            const payment = {
              transactionId: paymentIntent.id,
              email: user?.email,
              price: totalPrice,
              date: new Date(),
              cartIds: cart.map(item => item._id),
              toyIds: cart.map(toy => toy.name),
              status:'pending'
            }

            const res = await axiosSecure.post('/payments', payment);
            console.log('payment-saved', res.data)
            refetch();
              if(res.data?.result?.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name}successfully added to cart!!`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate('/dashBoard/paymentHistory')
              }
            
          }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm btn-outline rounded mt-5 ' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-500 font-semibold'>{error}</p>
      {transactionId && <p className='text-green-500 font-bold'>Your Transaction Id:{transactionId}</p>}
      
    </form>
        </div>
    );
};

export default CheckOutForm;