import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { Bars, Icon } from '../components/icons'

const Nav = () => {
  const [location] = useLocation()

  const handleMenu = () => {
    const bars = document.getElementById('bars')
    const icon = document.getElementById('icon')
    const nav = document.getElementById('nav')
    bars.classList.toggle('hidden')
    nav.classList.toggle('hidden')
    icon.classList.toggle('hidden')
  }

  return (
    <div className='flex items-center justify-between gap-x-8'>
      <nav id='nav'>
        <ul className='flex flex-wrap gap-x-12 items-center uppercase font-secondary text-[1.1rem] font-medium'>
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>
                <span className={`${location === item.url ? 'text-primary' : 'a-main'}`}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button
          onClick={handleMenu}
          id='icon'
          className='a-main'
        >
          <Icon />
        </button>

        <button
          className='cursor-pointer hover:opacity-80 hidden'
          onClick={handleMenu}
          id='bars'
        >
          <Bars />
        </button>
      </div>
    </div>
  )
}

export default Nav
