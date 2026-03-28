import React, { useState } from "react";
import { toast } from "react-toastify";

const Model = ({ model, carts, setCarts }) => {
  //   console.log(model);

  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubscribe = () => {
    !setIsSubscribe(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item is already in your cart!", {
        duration: 4000,
        position: "top-right",
        icon: "⛔",
        style: {
          background: "#1f2937",
          color: "#f3f4f6",
          border: "1px solid #ef4444",
          borderRadius: "14px",
          padding: "16px 20px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
        },
      });
      return;
    }

    setCarts([...carts, model]);

    toast.success("Added to cart!", {
      description: "You can view it in your cart",
      duration: 4000,
      position: "top-right",
      icon: "✅",
      style: {
        background: "#0f172a",
        color: "#e2e8f0",
        border: "1px solid #22c55e",
        borderRadius: "14px",
        padding: "18px 22px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
      },
      className: "font-medium",
      success: {
        iconTheme: {
          primary: "#22c55e",
          secondary: "#0f172a",
        },
      },
    });
  };

  const status = {
    popular: {
      color: "bg-red-500",
      icon: "🔥",
    },
    favorite: {
      color: "bg-orange-500",
      icon: "❤️",
    },
    mostwanted: {
      color: "bg-yellow-500",
      icon: "⭐",
    },
  };

  const currentStatus = status[model.status];

  // console.log(currentStatus.color);

  return (
    // <div className=" bg-white rounded-3xl shadow-xl overflow-hidden    ">
    //   <div className="bg-gray-100 pt-8 pb-6 flex justify-center relative">
    //     <div
    //       //   className={`absolute top-6 right-6 text-white
    //       //     ${model.status === "popular" && "bg-red-500"}
    //       //     ${model.status === "favorite" && "bg-orange-500"}
    //       //     ${model.status === "mostwanted" && "bg-yellow-500"}
    //       //     text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md uppercase`}

    //       className={`absolute top-6 right-6 text-white ${currentStatus.color}
    //         text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md uppercase`}
    //     >
    //       {/* {model.status === "popular" && "🔥  "}
    //       {model.status === "favorite" && "❤️  "}
    //       {model.status === "mostwanted" && "⭐  "} */}

    //       {currentStatus.icon}
    //       {model.status}

    //     </div>

    //     <div className="w-28 h-28 rounded-2xl flex items-center justify-center">
    //       <img src={model.image} alt="" />
    //     </div>
    //   </div>

    //   <div className="px-8 py-5  ">
    //     <h2 className="text-3xl font-semibold text-gray-900 mb-2">
    //       {model.title}
    //     </h2>

    //     <p className="text-gray-600 text-sm mb-6">{model.description}</p>

    //     <div className="mb-8">
    //       <span
    //         className={`text-3xl font-bold ${model.price === 0 ? "text-green-400" : "text-black/80"}`}
    //       >
    //         {model.price === 0 ? "free" : `$${model.price}`}
    //       </span>
    //       <span className="text-gray-500 text-lg"> {model.price === 0 ? "" : "/month"}</span>
    //     </div>

    //     <button onClick={handleSubscribe} className="w-full bg-red-500 hover:bg-red-600 transition-all text-white font-semibold py-4 rounded-2xl text-lg shadow-lg active:scale-95">
    //       {
    //         isSubscribe ? "Subscribed" : "Subscribe Now"
    //       }
    //     </button>
    //   </div>
    // </div>

    <div
      className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 
                hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
    >
      {/* Top Image Section */}
      <div className="bg-gray-100 pt-8 pb-6 flex justify-center relative overflow-hidden">
        {/* Status Badge */}
        <div
          className={`absolute top-6 right-6 text-white ${currentStatus.color} 
      text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md uppercase 
      transition-all duration-300 group-hover:scale-110`}
        >
          {currentStatus.icon} {model.status}
        </div>

        {/* Image Container with Zoom Effect */}
        <div
          className="w-28 h-28 rounded-2xl flex items-center justify-center 
                    transition-transform duration-700 group-hover:scale-110"
        >
          <img
            src={model.image}
            alt={model.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Subtle Shine Overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent 
                    -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 
                    opacity-0 group-hover:opacity-100 pointer-events-none"
        ></div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-5 transition-all duration-500 group-hover:bg-gray-50">
        <h2
          className="text-3xl font-semibold text-gray-900 mb-2 
                   group-hover:text-gray-800 transition-colors"
        >
          {model.title}
        </h2>

        <p
          className="text-gray-600 text-sm mb-6 line-clamp-2 
                  group-hover:text-gray-700 transition-colors"
        >
          {model.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <span
            className={`text-3xl font-bold transition-colors duration-300
        ${model.price === 0 ? "text-green-500" : "text-gray-900 group-hover:text-black"}`}
          >
            {model.price === 0 ? "Free" : `$${model.price}`}
          </span>
          <span className="text-gray-500 text-lg">
            {" "}
            {model.price === 0 ? "" : "/month"}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleSubscribe}
          className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 
                 transition-all duration-300 text-white font-semibold py-4 rounded-2xl 
                 text-lg shadow-lg active:scale-95 group-hover:shadow-xl"
        >
          {isSubscribe ? "Subscribed ✓" : "Subscribe Now"}
        </button>
      </div>

      {/* Neon Glow Border Effect */}
      <div
        className="absolute inset-0 rounded-3xl border-2 border-transparent 
                  group-hover:border-red-400/30 transition-all duration-500 pointer-events-none"
      ></div>
    </div>
  );
};

export default Model;
