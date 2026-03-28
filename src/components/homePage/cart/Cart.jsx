import React from "react";
import CartCard from "./CartCard";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  // console.log(carts , "cart");

  const totalPrice = carts.reduce((acc, cart) => acc + cart.price, 0);

  const handleDelete = (item) => {
    // console.log("delete");

    const filterCarts = carts.filter((cart) => cart.id !== item.id);

    setCarts(filterCarts);
    toast.warning("Item Deleted !", {
      description: "This product is already in your cart",
      duration: 4000,
      position: "top-right",
      icon: "⚠️",
      style: {
        background: "#1e293b",
        color: "#fde68a",
        border: "1px solid #f59e0b",
        borderRadius: "14px",
        padding: "18px 22px",
        boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)",
      },
    });
  };

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!", {
      description: "Your subscription has been activated",
      duration: 4000,
      position: "top-right",
      icon: "💳",
      style: {
        background: "#0f172a",
        color: "#dcfce7", // light green text
        border: "1px solid #22c55e",
        borderRadius: "14px",
        padding: "18px 22px",
        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
      },
      className: "font-medium",
    });
  };

  return (
    // <div className="max-w-4xl mx-auto my-10 space-y-10 px-5">
    //   <h1 className="text-3xl  md:text-5xl font-bold"> Your Cart</h1>

    //   {carts.length === 0 ? (
    //     <div className="h-[30vh]  flex justify-center items-center">
    //       <h1 className="text-xl md:text-3xl text-black/40 ">Cart is empty</h1>
    //     </div>
    //   ) : (
    //     <div className="space-y-10">
    //       <div className="space-y-5">
    //         {carts.map((cart) => (
    //           <CartCard key={cart.id} cart={cart} handleDelete={handleDelete} />
    //         ))}
    //       </div>

    //       <div className="flex justify-between items-center text-xl md:text-3xl p-7 font-bold rounded-2xl bg-black">
    //         <h2 className="text-white">Total</h2>
    //         <p className="text-red-500">${totalPrice}</p>
    //       </div>

    //       <button
    //         onClick={handlePayment}
    //         className=" text-xl md:text-3xl text-white p-5 font-bold rounded-2xl bg-red-600 shadow-md shadow-red-400 w-full"
    //       >
    //         Proceed to Checkout
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="max-w-4xl mx-auto my-12 px-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Your Cart
        </h1>
        <div className="text-sm md:text-base text-gray-500 font-medium">
          {carts.length} {carts.length === 1 ? "item" : "items"}
        </div>
      </div>

      {carts.length === 0 ? (
        /* Empty Cart State - Beautiful */
        <div className="h-[50vh] flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl">🛒</span>
          </div>
          <h2 className="text-3xl font-semibold text-gray-400 mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-500 max-w-xs">
            Looks like you haven't added anything yet. Start exploring our
            plans!
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Cart Items */}
          <div className="space-y-6">
            {carts.map((cart) => (
              <CartCard key={cart.id} cart={cart} handleDelete={handleDelete} />
            ))}
          </div>

          {/* Total & Checkout Section */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl sticky bottom-6 md:static">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Total Amount
              </h2>
              <div className="text-right">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                  ${totalPrice}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Including all taxes
                </p>
              </div>
            </div>

            {/* Proceed to Checkout Button - Pro Style */}
            <button
              onClick={handlePayment}
              className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 
                     transition-all duration-300 text-white text-xl md:text-2xl 
                     font-semibold py-5 rounded-2xl shadow-lg shadow-red-500/30 
                     hover:shadow-xl hover:shadow-red-500/40 active:scale-[0.985]"
            >
              Proceed to Checkout
            </button>

            <p className="text-center text-xs text-gray-400 mt-6">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
