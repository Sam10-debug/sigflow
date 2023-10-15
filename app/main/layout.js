
import Nav from '../(Navigation)/nav/Nav'

const Layout = ({children}) => {
  return (
    <div className='flex w-full h-full'>
        <Nav />
        <div className='w-[85%] ml-auto'>
        {children}
        </div>
    </div>
  )
}

export default Layout
