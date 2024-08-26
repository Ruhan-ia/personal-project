import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
const [axiosSecure] = useAxiosSecure();
const {data: payments = []} =useQuery({
    queryKey:['payments', user?.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data;
    }
})
    return (
        <div>
            <h2>Total:{payments.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>TransactionID</th>
        <th>Status</th>
      </tr>
      
    </thead>
    <tbody>
      {payments.map((payment, index) =><tr key={payment._id}>
        <th>{index +1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
      </tr>)}
      
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;