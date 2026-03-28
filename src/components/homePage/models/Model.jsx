import React, { useState } from "react";

const Model = ({ model,  carts , setCarts }) => {
  //   console.log(model);

  const [isSubscribe , setIsSubscribe] = useState(false)

  const handleSubscribe = () => {

    !setIsSubscribe(true)

    const isFound = carts.find(item => item.id === model.id);

    if (isFound) {
      alert("item already added")
      return
    }

    setCarts([...carts , model])

  }

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
    <div className=" bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gray-100 pt-8 pb-6 flex justify-center relative">
        <div
          //   className={`absolute top-6 right-6 text-white
          //     ${model.status === "popular" && "bg-red-500"}
          //     ${model.status === "favorite" && "bg-orange-500"}
          //     ${model.status === "mostwanted" && "bg-yellow-500"}
          //     text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md uppercase`}

          className={`absolute top-6 right-6 text-white ${currentStatus.color} 
            text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md uppercase`}
        >
          {/* {model.status === "popular" && "🔥  "}
          {model.status === "favorite" && "❤️  "}
          {model.status === "mostwanted" && "⭐  "} */}

          {currentStatus.icon}
          {model.status}

        </div>

        <div className="w-28 h-28 rounded-2xl flex items-center justify-center">
          <img src={model.image} alt="" />
        </div>
      </div>

      <div className="px-8 py-5 ">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          {model.title}
        </h2>

        <p className="text-gray-600 text-sm mb-6">{model.description}</p>

        <div className="mb-8">
          <span
            className={`text-3xl font-bold ${model.price === 0 ? "text-green-600" : "text-black/80"}`}
          >
            {model.price === 0 ? "free" : `$${model.price}`}
          </span>
          <span className="text-gray-500 text-lg"> {model.price === 0 ? "" : "/month"}</span>
        </div>

        <button onClick={handleSubscribe} className="w-full bg-red-500 hover:bg-red-600 transition-all text-white font-semibold py-4 rounded-2xl text-lg shadow-lg active:scale-95">
          {
            isSubscribe ? "Subscribed" : "Subscribe Now"
          }
        </button>
      </div>
    </div>
  );
};

export default Model;
