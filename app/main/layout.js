import Nav from '../(Navigation)/nav/Nav'

//unique layout for all children in the main directory

const Layout = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row w-full h-full'>
        <Nav />
        <div className='md:w-[85%] ml-auto'>
        {children}
        </div>
    </div>
  )
}

export default Layout
