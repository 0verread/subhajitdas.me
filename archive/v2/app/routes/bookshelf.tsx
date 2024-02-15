import Header from "~/components/Header";

import bookshelf from "~/utils/bookshelf";

export default function Bookshelf(){
  return(
    <div className="mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col">
      <Header/>
      <p className=" text-white mb-4">
        <span>i like to read, in general. i have been reading biography and science books ever since i was a kid. often times, i read some blogs or newsletters.</span>
      </p>
      <span className="text-white">here is the list of all the books i've read so far.</span>
      <div className="mt-4">
        <ul className="list-disc ml-6">
          {bookshelf.map(book => 
            <li className="text-white" key={book.no}>
              <span className="">{book.name}</span> by <span className="">{book.author}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}