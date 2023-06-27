import React from 'react'

import blogs from '../utils/blogs.json';

const Blogs:React.FC = () => {

  return (
    <div className='p-2'>
      <ul className='"space-y-4 list-disc list-inside dark:text-gray-400"'>
        {blogs.blogs.map((blog: any, i: any) => (
          <li key={i}>{blog.name} {blog.date}</li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs;
