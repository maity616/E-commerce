
import { useCart } from '../Data/CartContext';
const Cart=()=> {
  const { cart, removeFromCart, clearCart } = useCart()

  console.log("cart" + cart)
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item,id) => (
            <div key={id} className="flex justify-between items-center border-b py-2">
                 <div className="relative mx-auto w-1/3" >
                            <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                                <div className="shadow p-4 rounded-lg bg-white">
                                    
                                        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                                            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                                <div className="absolute inset-0 ">
                                                    <img src={item.image} alt="" className="w-72 h-full" />
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="mt-4">
                                        <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                                            <p>{item.title}</p>
                                        </h2>
                                        <p class="mt-2 text-sm text-gray-800 line-clamp-1" >
                                            {item.description}
                                        </p>
                                    </div>

                                   


                                    <div className="flex items-center">


                                        <h1 className="ml-2 text-red-500 line-clamp-1">
                                            <p> Category : {item.category} </p>
                                        </h1>
                                    </div>

                                    <div className="grid grid-cols-2 mt-8">
                                        {/* <div className="flex items-center">


                                            <p className="ml-2 text-red-500 line-clamp-1">
                                                <button onClick={() => addToCart(data)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
                                            </p>
                                        </div> */}

                                        <div className="flex justify-end">
                                            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                                                <span className="text-lg text-black">Price: {item.price}</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
   
  );
}
export default Cart;