const Header = () => {
  return (
    <nav className="relative flex flex-row justify-items-start space-x-4 items-start px-0 pb-0 mb-10">
        <a
          className="flex text-white hover:underline hover:antialiased decoration-neutral-400 decoration-2 underline-offset-4"
          href="/"
        >
          home
        </a>
        {/* <a
          className="flex text-white hover:underline decoration-neutral-400 decoration-2 underline-offset-4"
          href="/projects"
        >
          projects
        </a> */}
        <a
          className="flex text-white hover:underline hover:antialiased decoration-neutral-400 decoration-2 underline-offset-4"
          href="/bookshelf"
        >
          bookshelf
        </a>
                <a
          className="flex text-white hover:underline hover:antialiased decoration-neutral-400 decoration-2 underline-offset-4"
          href="/blogs"
        >
          blogs
        </a>
      </nav>
    
  );
};
export default Header;
