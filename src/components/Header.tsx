import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-200 py-4 relative">
      
      <div className=" flex justify-center">
        <img src={logo} alt="Star Wars Logo" className="h-16" />
      </div>
  
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-4">
        <button className="text-sm hover:text-gray-400">Log In</button>
        <button className="text-sm hover:text-gray-400">Sign Up</button>
      </div>
    </header>
  );
  
};



export default Header;
