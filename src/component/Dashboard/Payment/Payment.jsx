import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckOut/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Payment_Gateway);
const Payment = () => {
    return (
        <div className="text-center my-10 ">
            <h1 className="text-4xl font-bold font-spaceGrotest ">Payment</h1>
            <p>Please payment to play</p>

                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
        </div>
    );
};

export default Payment;