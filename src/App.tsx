import React from "react";

import Header from "./components/Header";

import './index.css' 

const App:React.FC = () => {
  return (
    <>
      <section className="section flex items-center justify-center h-screen md:flex md:justify-center overflow-y-hidden">
        <Header />
      </section>
    </>
  )
};
 
export default App;