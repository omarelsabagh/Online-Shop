import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Navbar() {
  return (
    <>
      <nav className="shadow-md p-2">
        <div className="flex items-center justify-between mx-6">
          <h1 className="text-logoColor text-5xl font-dancing">Vënom</h1>
          <ul className="flex gap-x-3 text-silver">
            <li className="flex items-center cursor-pointer group ">
              <LocalMallOutlinedIcon className="scale-75 group-hover:scale-100 transition duration-500 ease-in-out" />
              <span className="mx-1 text-sm ">Shopping Cart</span>
              <div className="w-5 h-5 bg-myPink rounded-full flex justify-center items-center">
                <span>0</span>
              </div>
            </li>
            <li className="flex items-center cursor-pointer group ">
              <FavoriteBorderIcon className="scale-75 group-hover:scale-100 transition duration-500 ease-in-out" />
              <span className="mx-1 text-sm">My Wish List</span>
            </li>
            <li className="flex items-center group ">
              <span className="text-sm cursor-pointer">Sign In</span>
              <span className="mx-1">or</span>
              <span className="text-sm cursor-pointer">Create an Account</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
