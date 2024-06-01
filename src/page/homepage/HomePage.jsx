import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
import { Toggle } from "../../components/DarkMode/Toggle";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/user/userSlice";
import PopUpContent from "../../components/PopUpContent/PopUpContent";
import { ViewOrder } from "../../components/ViewOrder/ViewOrder";

export const HomePage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Spider",
      price: "$100",
      date: "24/5/2024 (11:07 PM)"
    },
    {
      id: 2,
      name: "Spider",
      price: "$200",
      date: "24/5/2024 (11:30 PM)"
    }
  ]);
  const [orderSelection, setOrderSelection] = useState(false);
  const [orderDetailsView, setOrderDetailsView] = useState(false)
  const [orderCount, setOrderCount] = useState(orders.length + 1); // Initialize counter based on existing orders
  const dispatch = useDispatch();
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const handleSignout = () => {
    localStorage.removeItem("token");
    dispatch(signOut());
    window.location.href = '/signin'; 
  };

  const handleOnClick = () => {
    setOrderSelection(true);
  }

  const handleOnClickClose = () => {
    setOrderSelection(false);
  }

  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
    setOrderCount(orderCount + 1); // Increment counter
  }

  const handleOrderClick = () => {
    setOrderDetailsView(true)
  }

  const handleOrderClickClose = () => {
    setOrderDetailsView(false)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) {
      window.location.href = '/signin'
    }
  }, [])

  return (
    <div className="relative">
      {orderSelection && <PopUpContent onClick={handleOnClickClose} addOrder={handleAddOrder} orderCount={orderCount} />}
      {orderDetailsView && <ViewOrder onClick={handleOrderClickClose} />}
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <div>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </div>
        <div className="pt-14">
          <button className="ml-10 bg-red-500 rounded-xl p-3 text-white hover:underline" onClick={handleSignout}>Sign Out</button>
        </div>
        <div className="m-48">
          <div className={`flex justify-between rounded-xl px-4 ${isDark ? "text-white" : "text-black"}`}>

            <div className="flex justify-between">
              <div>
                <button className={`transition duration-700 ease-in-out transform hover:scale-105 hover:underline border p-5 rounded-xl ${isDark ? "border-white" : "border-black"}`}>Active Sales Order</button>
              </div>

              <div className="ml-10">
                <button className={`transition duration-700 ease-in-out transform hover:scale-105 hover:underline border p-5 rounded-xl ${isDark ? "border-white" : "border-black"}`}>Completed Sales Order</button>
              </div>
            </div>

            <div>
              <button className={`transition duration-700 ease-in-out transform hover:scale-105 hover:underline border p-5 rounded-xl ${isDark ? "border-white" : "border-black"}`} onClick={handleOnClick}>+ Sale Order</button>
            </div>

          </div>

          <div>
            {orders.map((order) => (
              <div className={`transition duration-700 ease-in-out transform hover:scale-105 hover:border-white flex pt-5 justify-between bg-slate-200 rounded-2xl p-2 m-3 ${isDark ? "text-white bg-slate-900" : "text-black bg-slate-200"}`} key={order.id}>
                <div>{order.id}</div>
                <div className="-mr-36 -mt-2">
                  <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
                <div>{order.name}</div>
                <div>{order.price}</div>
                <div>{order.date}</div>
                <div onClick={handleOrderClick} className="mr-10 hover:cursor-pointer">
                  <svg fill={isDark ? "#ffffff" : "#000000"} height="20px" width="20px" id="Layer_1" data-name="Layer 1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="cls-1" d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
