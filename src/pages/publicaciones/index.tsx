import { useEffect } from 'react'
import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import Item from './Item'
import { Down } from '../../components/icons'
import useFetch from '../../hooks/useFetch'

const Index = () => {
  const { data, loading } = useFetch(`/libros`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Publicaciones'
  }, [])

  return (
    <Layout>
      <Submenu>
        <div className='text-primary uppercase flex flex-wrap [&>a:last-child::after]:content-[]'>
          {menu[1].sections.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='hover:text-black split'
            >
              {item.title}
            </a>
          ))}
        </div>
      </Submenu>
      <section className='w-full max-w-7xl m-auto px-6 mt-9'>
        <div className='flex'>
          <div className='lg:w-2/6'></div>
          <div className='text-primary mb-6'>
            <Down />
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pb-12'>
          {!loading &&
            data.map((item, index) => (
              <Item
                key={index}
                data={item}
              />
            ))}
        </div>
      </section>
    </Layout>
  )
}

export default Index
