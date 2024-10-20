function Header() {
    return (
      <div className="w-full h-16 bg-purple-900 text-white px-5">
        <header className="w-full h-full flex items-center justify-between">
          <h1 className="text-2xl font-bold">Age Calculator</h1>
          <nav>
            <ul className="flex justify-between items-center gap-4">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition duration-300 ease-in-out hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition duration-300 ease-in-out hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition duration-300 ease-in-out hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
  
  export default Header;
  