const Header = () => {
  return (
    <div className="">
      <nav className="relative flex flex-row justify-items-start space-x-4 items-start px-0 pb-0 mb-10 antialiased">
        <a className="flex text-white" href="/">home</a>
        <a className="flex text-white" href="/projects">projects</a>
        <a className="flex text-white" href="/blogs">blogs</a>
      </nav>
    </div>
  )
}
export default Header