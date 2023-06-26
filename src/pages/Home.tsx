import React, { useEffect, useState } from 'react';

import ReactMarkdown from "react-markdown"

import aboutMe from '../contents/aboutMe.md';



const Home:React.FC = () => {
  return (
    <div className='p-2'>
      <ReactMarkdown children={aboutMe} />
    </div>
  )
}

export default Home;