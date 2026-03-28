
const Tabs = ({activeTab,setActiveTab}) => {
 

  return (
    <div className="tabs tabs-box justify-center items-center bg-transparent  gap-10 pt-10">
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab rounded-full px-5 w-50 ${activeTab === "model" && "bg-linear-to-r from-pink-500 to-red-500 text-white"}`}
        aria-label="Models"
        defaultChecked
        onClick={() => setActiveTab("model")}
      />
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab rounded-full px-5 w-50 ${activeTab === "cart" && "bg-linear-to-r from-pink-500 to-red-500 text-white"}`}
        aria-label="Cart"
        onClick={() => setActiveTab("cart")}
      />
    </div>
  );
};

export default Tabs;

// {/* name of each tab group should be unique */}
{
  /* <div class="tabs tabs-box bg-transparent gap-4 justify-center items-center ">
        <input
          type="radio"
          name="my_tabs_1"
          class="tab rounded-full px-5"
          aria-label="Models"
          checked="checked"
        />
        <input
          type="radio"
          name="my_tabs_1"
          class="tab rounded-full px-5"
          aria-label="Cart"
        />
      </div> */
}
