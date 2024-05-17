import { useEffect } from 'react'
import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import Bio from './Bio'
import Slider from './Slider'
import Section from './Section'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/sobre-gabby`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Sobre Gabby'
  }, [])

  const colors = [
    {
      bgColor: '#94b0b6',
      color: 'white'
    },
    {
      bgColor: '#aacad0',
      color: 'text-black'
    },
    {
      bgColor: '#bee2e9',
      color: 'text-black'
    },
    {
      bgColor: '#bee2e9',
      color: 'text-black'
    },
    {
      bgColor: '#bee2e9',
      color: 'text-black'
    }
  ]

  return (
    <Layout>
      <Submenu>
        <div className='text-primary uppercase flex flex-wrap lg:gap-x-4 [&>a:last-child::after]:content-[]'>
          {menu[0].sections.map((item, index) => (
            <a
              key={index}
              href={'#section' + index}
              className='hover:text-black scroll split'
            >
              {item}
            </a>
          ))}
        </div>
      </Submenu>
      {loading ? (
        <Loader />
      ) : (
        <section
          className='fade-in'
          id='top'
        >
          <Bio text={data[0].text} />
          <Slider />
          {data.slice(1).map((item, index) => (
            <Section
              key={index}
              data={item}
              index={index + 1}
              colors={colors}
            />
          ))}
        </section>
      )}
    </Layout>
  )
}

export default Index
