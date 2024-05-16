import { useEffect } from 'react'
import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import Item from './Item'
import { Down } from '../../components/icons'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Publicaciones'
  }, [])

  const data = [
    {
      id: 1,
      title: 'Bebo de mis manos',
      year: '2022',
      image:
        'https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 2,
      title: 'Bebo de mis manos',
      year: '2022',
      image:
        'https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 3,
      title: 'Bebo de mis manos',
      year: '2022',
      image:
        'https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 4,
      title: 'Bebo de mis manos',
      year: '2022',
      image:
        'https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 5,
      title: 'Bebo de mis manos',
      year: '2022',
      image:
        'https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
  ]

  return (
    <Layout>
      <Submenu>
        <div className='text-primary uppercase flex flex-wrap gap-x-3 lg:gap-x-4'>
          {menu[1].sections.map((item, index) => (
            <a
              key={index}
              href={item}
              className='hover:text-black'
            >
              {item}
            </a>
          ))}
        </div>
      </Submenu>
      <div className='w-full max-w-7xl m-auto px-6'>
        <div className='flex'>
          <div className='lg:w-2/6'></div>
          <div className='text-primary mb-6'>
            <Down />
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pb-12'>
          {data.map((item, index) => (
            <Item
              key={index}
              data={item}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Index
