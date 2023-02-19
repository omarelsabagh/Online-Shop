import Navbar from "./navbar/navbar";
import Navbar2 from "./navbar2/navbar2";

function Header() {
  return (
    <>
      <header>
        <Navbar />
        <Navbar2 />
        <div className="relative">
          <img
            className="sm:hidden"
            src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/slideshow-1.jpg?v=1632195167&width=1370"
            alt="girl"
          />
          <img
            className="mn:hidden"
            src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/slide1-mb-min.jpg?v=1661416101&width=375"
            alt="girl"
          />
          <div className="absolute left-28 sm:left-10 top-1/4 w-30% sm:w-3/4 flex flex-col items-center ">
            <h2 className="text-logoColor sm:text-white text-5xl sm:text-2xl font-bold">
              VENOM
            </h2>
            <div className="w-11 h-0.5 bg-logoColor sm:bg-white my-2 "></div>
            <p className="my-4 text-silver sm:text-white text-center text-sm">
              It can be difficult to articulate the power of style and fashion
              through words, but these icons managed to do so with quote-worthy,
              inspiring words of wisdom to live by. From the greatest fashion
              designers to legendary models and stylists, get inspired by these
              87 quotes that will never go out of style.
            </p>
            <button className="mt-12 sm:mt-8 transition duration-500 ease-in-out bg-siteDark text-white font-semibold border-2 border-siteDark px-12 py-3 hover:bg-white hover:text-black ">
              SHOP NOW
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
