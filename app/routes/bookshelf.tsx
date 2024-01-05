import Header from "~/components/Header";

export default function Bookshelf(){
  return(
    <div className="mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col">
      <Header/>
      <p className=" text-white mb-4">
        <span>i like to read, in general. i have been reading biography and science books ever since i was a kid. often times, i read some blogs or newsletter. here is the list of all the books i have read so far.</span>
      </p>
      <div className="text-white"> working on it</div>
    </div>
  );
}