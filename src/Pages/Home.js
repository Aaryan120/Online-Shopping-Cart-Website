import React, { useEffect, useState } from "react";
import Product from "../Components/Product.js";
import Spinner from "../Components/Spinner.js";
function Home(){
    const API_URL = "https://fakestoreapi.com/products";

    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(false);
    async function fetchProductData(){
        setLoading(true);

        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            setItems(data);
        }
        catch(error){
            console.log("Error could not fetch data",error);
            setItems([]);
        }
    
        setLoading(false);
    }

    useEffect(() =>{
        fetchProductData();
        
    },[]);
    return (
        <div>
            {
                loading ? <Spinner ></Spinner> : 
                items.length === 0 ? 
                (<div className="flex justify-center items-center">
                    <p>
                        No Data Found
                    </p>
                </div>) :
                (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                        items.map((item) =>{
                            return <Product key={item.id} item={item}></Product>
                        })
                    }
                </div>)
                
            }
        </div>
    )
}

export default Home;