
import Navbar from "./navbar/navbar"
import Navbar2 from "./navbar2/navbar2"
import Image from 'next/image'
function Header(){
return (
    <>
    <header>
    <Navbar/>
    <Navbar2/>
      <div className="relative" > 
    <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/slideshow-1.jpg?v=1632195167&width=1370" alt="girl" />
    <div className="absolute left-28 top-1/4 w-30% flex flex-col items-center"> 
        <h2 className="text-logoColor text-5xl font-bold">COSMOPOLIS</h2>
        <div className="w-11 h-0.5 bg-logoColor my-2 "></div>
        <p className="my-4 text-silver text-center text-sm">Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous</p>
        <button className="mt-12 transition duration-500 ease-in-out bg-siteDark text-white font-semibold border-2 border-siteDark px-12 py-3 hover:bg-white hover:text-black ">SHOP NOW</button>
    </div>
      </div>
    </header>


    </>
)
}

export default Header