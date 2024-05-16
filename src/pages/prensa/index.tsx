import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Item from './Item'
import Top from '../../components/Top'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Prensa'
  }, [])

  const data = [
    {
      id: 1,
      title: 'Prensa 1',
      url: 'https://www.pagina12.com.ar/231306-escribir-porque-es-necesario'
    },
    {
      id: 6,
      title: 'Prensa 2',
      url: 'https://www.pagina12.com.ar/231306-escribir-porque-es-necesario'
    },
    {
      id: 8,
      title: 'Prensa 2',
      url: 'https://www.pagina12.com.ar/231306-escribir-porque-es-necesario'
    },
    {
      id: 29,
      title: 'Prensa 2',
      url: 'https://www.pagina12.com.ar/231306-escribir-porque-es-necesario'
    },
    {
      id: 3,
      title: 'Prensa 3',
      url: 'https://www.pagina12.com.ar/231306-escribir-porque-es-necesario'
    }
  ]
  return (
    <Layout>
      <Top />
      <div className='w-full max-w-7xl m-auto [&>a:last-child]:border-0'>
        {data.map(item => (
          <Item
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Index
