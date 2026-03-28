import React from "react";

const CartCard = ({ cart, handleDelete }) => {
  return (
    // <div className="bg-gray-100 border border-gray-200 rounded-xl md:rounded-3xl p-4 flex justify-between items-center gap-5  shadow-sm hover:shadow transition-all duration-200">
    //   <div className="flex justify-between items-center gap-2">
    //     {/* Grok Logo */}
    //     <div className="w-14 md:w-24 h-14 md:h-24 bg-white rounded-lg flex items-center justify-center shrink-0 p-2 md:p-2.5">
    //       <div className="w-12 md:w-20 h-12 md:h-20 flex justify-center items-center">
    //         <img src={cart.image} alt={cart.title} />
    //       </div>
    //     </div>

    //     {/* Text Content */}
    //     <div className="flex-1 min-w-0">
    //       <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{cart.title}</h3>
    //       <p className="text-gray-400 text-sm hidden md:block leading-tight mt-1.5">
    //         {cart.description}
    //       </p>
    //     </div>
    //   </div>

    //   <div className="flex justify-between items-center gap-2 w-full md:w-fit">
    //     {/* Price */}
    //     <div className="text-right shrink-0 flex flex-col justify-center items-center">

    //       <span
    //         className={`text-xl md:text-4xl font-bold  ${cart.price === 0 ? "text-green-400" : "text-black/80"}`}
    //       >
    //         {cart.price === 0 ? "free" : `$${cart.price}`}
    //       </span>
    //       <span className="text-gray-500 text-sm mt-0.5"> {cart.price === 0 ? "" : "per month"}</span>
    //     </div>

    //     {/* Close Icon */}
    //     <button
    //       className="ml-2 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
    //       aria-label="Close"
    //       onClick={() => handleDelete(cart)}

    //     >
    //       ×
    //     </button>
    //   </div>
    // </div>

    <div
      className="group bg-white border border-gray-200 rounded-xl md:rounded-3xl p-5 md:p-6 
                flex flex-col md:flex-row justify-between items-start md:items-center gap-6 
                shadow-sm hover:shadow-2xl hover:border-gray-300 
                transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] 
                cursor-pointer overflow-hidden relative"
    >
      <div className="flex items-start gap-5 w-full md:w-auto">
        {/* Logo / Image Container */}
        <div
          className="w-16 md:w-28 h-16 md:h-28 bg-white border border-gray-100 rounded-2xl 
                    flex items-center justify-center shrink-0 p-3 md:p-4 
                    transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 
                    group-hover:shadow-xl overflow-hidden"
        >
          <div
            className="w-12 md:w-20 h-12 md:h-20 flex items-center justify-center 
                      transition-transform duration-700 group-hover:scale-125"
          >
            <img
              src={cart.image}
              alt={cart.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pt-1">
          <h3
            className="text-lg md:text-2xl font-semibold text-gray-900 
                     group-hover:text-black transition-colors duration-300"
          >
            {cart.title}
          </h3>
          <p
            className="text-gray-500 text-sm md:text-base leading-tight mt-2 line-clamp-2 
                    group-hover:text-gray-600 transition-colors duration-300 hidden md:block"
          >
            {cart.description}
          </p>
        </div>
      </div>

      {/* Right Section - Price + Delete */}
      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-8 md:gap-6">
        {/* Price Section with hover lift */}
        <div className="text-right transition-all duration-300 group-hover:-translate-y-1">
          <span
            className={`text-2xl md:text-4xl font-bold tracking-tighter transition-all duration-300
        ${cart.price === 0 ? "text-emerald-500" : "text-gray-900 group-hover:text-black"}`}
          >
            {cart.price === 0 ? "Free" : `$${cart.price}`}
          </span>
          <span className="block text-gray-500 text-sm mt-1">
            {cart.price === 0 ? "" : "per month"}
          </span>
        </div>

        {/* Delete Button - Enhanced hover */}
        <button
          onClick={() => handleDelete(cart)}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-2xl 
                 text-gray-400 hover:text-red-500 hover:bg-red-50 
                 rounded-2xl transition-all duration-300 active:scale-90 
                 group-hover:text-gray-500 hover:shadow-md"
          aria-label="Remove"
        >
          ×
        </button>
      </div>

      {/* Pro Shine Effect */}
      <div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/70 to-transparent 
                  -skew-x-12 -translate-x-full group-hover:translate-x-[200%] 
                  transition-transform duration-1000 opacity-0 group-hover:opacity-100 
                  pointer-events-none"
      ></div>

      {/* Subtle Neon Glow Border */}
      <div
        className="absolute -inset-0.5 rounded-[22px] md:rounded-[28px] 
                  bg-linear-to-br from-blue-400 via-purple-400 to-pink-400 
                  opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"
      ></div>
    </div>
  );
};

export default CartCard;
