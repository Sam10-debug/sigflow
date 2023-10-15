import Nav from '../(Navigation)/nav/Nav'

//unique layout for all children in the main directory

const Layout = ({children}) => {
  return (
    <div className='flex w-full h-full'>
        <Nav />
        <div className='lg:w-[85%] ml-auto'>
        {children}
        </div>
    </div>
  )
}

export default Layout
