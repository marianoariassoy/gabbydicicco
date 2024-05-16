import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'

const NavMobile = () => {
  const [location] = useLocation()

  return (
    <nav
      className='border-t border-black p-6 mt-4 hidden'
      id='nav-mobile'
    >
      <div className='flex flex-col gap-y-1'>
        {menu.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className={`${location === item.url ? 'text-primary' : ''}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavMobile
