import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../Components/CartItem";

function Cart(){
    const {cart} = useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount( cart.reduce((acc,curr) => acc + curr.price , 0));
    },[cart])
    return (
        <div className="mb-10">
            {
                cart.length === 0 ?
                (<div className=" min-h-[80vh] flex flex-col items-center justify-center">
                    <p className="text-gray-700 font-semibold text-xl mb-2 ">Your cart is empty!</p>
                    <Link to="/">
                        <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-slate-100 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
                            Shop Now
                        </button>
                    </Link>
                </div>) :
                (<div className="flex justify-center max-w-6xl gap-x-5 mx-auto">
                    <div className="w-[90%] flex flex-col p-2">
                        {
                          cart.map((item,index) =>(
                            <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                          ))  
                        }
                    </div>
                    <div className="w-[50%] mt-5 flex flex-col h-[100%] justify-center">
                        <div className="flex flex-col h-[100%] p-5 gap-5 my-14">
                            <div className="flex flex-col gap-5">
                                    <p className="font-semibold text-xl text-green-800">Your Cart</p>
                                    <h1 className="font-semibold text-5xl text-green-700 -mt-5">Summary</h1>
                                    <p className="text-xl text-gray-700 font-semibold">Total Items. <span>{cart.length}</span></p>
                            </div>
                            
                            <div className="flex flex-col">
                                <p className="text-xl font-bold text-gray-700 font-semibold">Total Amount: ${totalAmount}</p>
                                <button className="bg-green-700 hover:bg-slate-100 rounded-lg text-white transition duration-300 ease-liner mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                                    Checkout Now
                                </button>
                            </div>

                        </div>
                    </div>
                    </div>
                    )
            }
        </div>
    )
}

export default Cart;