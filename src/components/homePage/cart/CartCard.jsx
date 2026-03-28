import React from "react";

const CartCard = ({ cart , handleDelete}) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl md:rounded-3xl p-4 flex justify-between items-center gap-5  shadow-sm hover:shadow transition-all duration-200">
      <div className="flex justify-between items-center gap-2">
        {/* Grok Logo */}
        <div className="w-14 md:w-24 h-14 md:h-24 bg-white rounded-lg flex items-center justify-center shrink-0 p-2 md:p-2.5">
          <div className="w-12 md:w-20 h-12 md:h-20 flex justify-center items-center">
            <img src={cart.image} alt={cart.title} />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{cart.title}</h3>
          <p className="text-gray-400 text-sm hidden md:block leading-tight mt-1.5">
            {cart.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 w-full md:w-fit">
        {/* Price */}
        <div className="text-right shrink-0 flex flex-col justify-center items-center">
          <div className="text-xl md:text-4xl font-bold text-gray-900">${cart.price}</div>
          <div className="text-sm text-gray-500 mt-0.5">per month</div>
        </div>

        {/* Close Icon */}
        <button
          className="ml-2 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
          aria-label="Close"
          onClick={() => handleDelete(cart)}
          
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartCard;
