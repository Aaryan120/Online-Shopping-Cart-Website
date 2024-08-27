import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";


function CartItem({item,itemIndex}){
    
    
    const dispatch = useDispatch();
    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Removed From Cart");
    }
    return (
        <div className="flex justify-between items-center border-b-[3px] mt-2 mb-2 border-slate-500 p-5 mx-5">
            <div className="flex p-3 gap-5">
                <div className="w-[30%]">
                    <img src={item.image} className="object-cover"/>
                </div>
                <div className="w-[70%] self-start space-y-5 ml-5">
                    <h1 className="text-xl text-slate-700 font-semibold">
                        {item.title}
                    </h1>
                    <h1 className=" text-base font-medium text-slate-700">
                        {item.description}
                    </h1>
                    <div className="flex justify-between items-center">
                        <p className="text-green-600 font-bold text-lg">${item.price}</p>
                        <button
                        onClick={removeFromCart}
                        className="rounded-full bg-red-200 p-3 mr-3 group hover:bg-red-400 transition-transform duration-300">
                            <MdDelete color="red"/>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem;