import React from 'react';
import CartCard from './CartCard';

const Cart = ({carts,setCarts}) => {

    // console.log(carts , "cart");
    
    const totalPrice = carts.reduce((acc , cart) => acc + cart.price , 0)

    return (
        <div className='w-4xl mx-auto my-10 space-y-10'>
            <h1 className='text-5xl font-bold'> Your Cart</h1>

            <div className='space-y-5'>
                
                {
                    carts.map(cart => <CartCard key={cart.id} cart={cart}/>)
                }
                
            </div>

            <div className='flex justify-between items-center text-3xl p-7 font-bold rounded-2xl bg-black'>
                <h2 className='text-white'>Total</h2>
                <p className='text-red-500'>${totalPrice}</p>
            </div>

            <button onClick={() => setCarts([])} className='text-3xl text-white p-5 font-bold rounded-2xl bg-red-600 shadow-md shadow-red-400 w-full'>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;