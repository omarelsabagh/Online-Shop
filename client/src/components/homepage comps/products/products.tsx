import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Products() {
  return (
    <>
      <section>
        <div className="grid grid-cols-4 sm:grid-cols-1 sm:gap-5 justify-items-center mt-10 mx-6 gap-6">
          <div className="relative text-center w-11/12 group">
            <img
              className="cursor-pointer"
              src="https://cdn.shopify.com/s/files/1/0081/3305/0458/products/image18xxl_841882af-a3f0-455b-8d81-e9049437c6b3_775x.jpg?v=1658136587"
              alt="girl1"
            />
            <button className="absolute left-0 bottom-24 w-full group-hover:translate-y-btn opacity-0 group-hover:opacity-100  transition duration-500 ease-in-out text-siteDark bg-white font-semibold border border-siteDark px-12 py-3 hover:bg-siteDark hover:text-white ">
              QUICK ADD
            </button>
            <h2 className="text-sm opacity-60 mt-3 ">DAVENTRY MEERS</h2>
            <p className="text-xs  my-1 opacity-90 hover:underline cursor-pointer">
              (Product 16) Sample - Clothing And Accessory Boutiques For Sale{" "}
            </p>
            <h3 className="font-bold text-logoColor">$16.99</h3>
            <button className="bg-red-800 border  rounded-r-full rounded-l-full border-black">Add to Wishlist <FavoriteBorderIcon className="bg-black rounded-full text-2xl"/></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
