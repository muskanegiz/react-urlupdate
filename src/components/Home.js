import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Home = (props) => {
    console.log(props);
    return (
        <>
            <div className="mt-2 flex justify-center">
                <div>
                    <h1 className="font-bold flex align-center text-center text-xl">Home Component </h1>
                </div>
                <div className="ml-96">
                    <ShoppingCartIcon className="w-9 flex"/>
                    <span>{props.data.length}</span>
                </div>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://photos5.appleinsider.com/gallery/41117-79579-210401-iPhone12ProMax-xl.jpg" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">I-phone</div>
                        <p className="text-gray-700 text-base">
                            Price: $1000.00
                        </p>
                        <div className="flex justify-between">
                            <button type="button" className="inline-block px-6 py-2.5 mt-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={() => { props.addToCartHandler({ name: "i-phone", price: "$1000" }) }}> Add to Cart</button>
                            <button type="button" className="inline-block px-6 py-2.5 mt-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={() => { props.removeToCartHandler()}}> Remove to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;