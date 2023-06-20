import React from "react";
import {Route, Routes} from 'react-router-dom';

import Header from "./components/Header";

import Blogs  from "./pages/Blogs";
import Projects from "./pages/Projects";
import Books from "./pages/Books";

import './index.css' 

const App:React.FC = () => {
  return (
    <>
    <div className="mx-auto max-w-3xl">
      <Header />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
    </>
  )
};
 
export default App;
