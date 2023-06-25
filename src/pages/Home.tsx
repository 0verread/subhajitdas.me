import React, { useEffect, useState } from 'react';

import ReactMarkdown from "react-markdown"

import aboutMe from '../contents/aboutMe.md';

import Content from '../components/Content';


const Home:React.FC = () => {
  const [homeContent, setHomeContent] = useState("")
  useEffect(() => {
    fetch(aboutMe).then(res => res.text()).then((text) => setHomeContent(text))
    console.log(homeContent)
  })

  return (
    <div className='p-2'>
      <ReactMarkdown children={homeContent} />``
    </div>
  )
}

export default Home;