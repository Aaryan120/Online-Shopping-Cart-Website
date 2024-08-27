import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";

function Product({item}){
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    function addToCart(){
        dispatch(add(item));
        toast.success("Item Added To Cart");
    }
    
    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Item Removed From Cart");
    }

    let title = item.title;
    let category = item.category;
    let description = item.description;
    let price = item.price;
    let rating = item.rating;
    let image = item.image;
    return (
        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 gap-3 p-4 mt-10 ml-5 rounded-xl ease-in hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{`${description.split(" ").slice(0,10).join(" ")}...`}</p>
            </div>
            <div className="h-[180px]">
                <img src={image} className="h-full w-full"/>
            </div>
            {/* <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-center">
                    {category}
                </p>
            </div> */}
            <div className="flex justify-between gap-12 items-center w-full mt-5"> 
                <div>
                    <p className="text-green-600 font-semibold">${price}</p>
                </div>
                <div>
                    {
                        cart.some((p) => p.id == item.id) ? 
                        (<button
                        onClick={removeFromCart}
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                            Remove Item
                        </button>) :
                        (<button
                        onClick={addToCart}
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                            Add Item
                        </button>)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Product;