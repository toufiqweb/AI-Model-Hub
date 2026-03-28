import React from "react";

const CartCard = ({cart}) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-3xl p-4 flex items-center gap-5  shadow-sm hover:shadow transition-all duration-200">
      {/* Grok Logo */}
      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shrink-0 p-2.5">
        <div className="w-20 h-20 flex justify-center items-center">
          <img src={cart.image} alt={cart.title} />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-semibold text-gray-900">{cart.title}</h3>
        <p className="text-gray-400 text-[15px] leading-tight mt-1.5">{cart.description}</p>
      </div>

      {/* Price */}
      <div className="text-right shrink-0">
        <div className="text-4xl font-bold text-gray-900">${cart.price}</div>
        <div className="text-sm text-gray-500 mt-0.5">per month</div>
      </div>

      {/* Close Icon */}
      <button
        className="ml-2 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default CartCard;
