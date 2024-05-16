import { Link } from 'wouter'
import Nav from './Nav'
import NavMobile from './NavMobile'
import { Bars } from '../components/icons'

const Header = () => {
  const handleMenu = () => {
    const nav = document.getElementById('nav-mobile')
    nav.classList.toggle('hidden')
  }

  return (
    <header
      className='sticky top-0 bg-white z-50 border-b border-black'
      id='header'
    >
      <div className='border-b h-10 border-black'></div>
      <div className='w-full max-w-7xl m-auto flex justify-between items-center gap-x-3 px-6 py-4'>
        <div className='-mt-1'>
          <Link to='/'>
            <span className='text-4xl lg:text-[2.5rem] font-bold hover:opacity-80 font-secondary'>Gabby De Cicco</span>
          </Link>
        </div>
        <div className='hidden lg:block'>
          <Nav />
        </div>

        <button
          className='cursor-pointer hover:opacity-80 block lg:hidden'
          onClick={handleMenu}
        >
          <Bars />
        </button>
      </div>
      <NavMobile />
    </header>
  )
}

export default Header
