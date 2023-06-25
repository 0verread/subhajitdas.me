import React from "react";
import { Link } from "react-router-dom";

const Header:React.FC = () => {
    return (
    <nav className="bg-white border-gray-200 mt-12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 mb-4">
        <Link to="/">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Subhajit Das</span>
          </a>
        </Link>
      </div>
      <hr className="h-px bg-gray-600 border-0 dark:bg-gray-700"></hr>
      <div className="p-2 hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white">
            <Link to="/">
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                                      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 
                                      dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
              </li>
            </Link>
            <Link to="/writing/">
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                                      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 
                                      dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Writing</a>
              </li>
            </Link>
            <Link to="/projects/">
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                                      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 
                                      dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </li>
            </Link>
            <Link to='/reading/'>
            <li>
              <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
                                     md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                                     dark:text-black md:dark:hover:text-blue-500
                                     dark:hover:text-white md:dark:hover:bg-transparent">Reading</a>
            </li>
            </Link>

          </ul>
        </div>
    </nav>
    )
    
}

export default Header;