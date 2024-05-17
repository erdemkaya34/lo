import logo from "./logo.png"
import "./App.css"

function App() {
  return (
    <div className='bg-green-400 w-2/5  flex h-full'>
    <div className='h-full flex justify-center items-center'>
          <div className="mt-9 ml-28">
            <div className=' p-24  flex border border-gray-300 mb-36  shadow-2xl' >
              <div className='mr-66 mt-14 '><img src={logo} alt='asda' className='w-72 mr-96'  /></div>
              <div className='mt-20 mr-30   '>
                <div className="mr-12 mb-16 ">
                <h1 className='text-center ml-28 text-6xl font-bold text-gray-700' >LOGIN</h1>
                <input type="text" placeholder='Username' class=" mt-5 border ml-32 border-gray-300  shadow-lg px-8 py-2 focus:outline-none focus:border-blue-500 w-80"/><br></br>
                <input type="password" placeholder='Password' class= " mt-5 border ml-32 border-gray-300  shadow-sm px-8 py-2 focus:outline-none focus:border-blue-500 w-80"/>
                <div className="flex mr-6 gap-8" >
                <button className=' bg-green-400 ml-32 text-white mt-5 border border-gray-300  shadow-2xl px-4 py-2 focus:outline-none focus:border-blue-500 w-40 border-spacing-x-2.5'>LOGIN</button>
                <a href='/#' className='block mt-6 flex justify-end ml-20 text-xs'>Forgot password register</a>
                </div>  
              </div>              
              </div>
            </div>
        
          </div>        
    </div>
    </div>
  )
}

export default App