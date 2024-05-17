import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import { Down } from '../../components/icons'
import ReactPlayer from 'react-player'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/videos`)
  const [itemSelected, setItemSelected] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Videos'
    const body = document.querySelector('body')
    body?.classList.add('bg-black')
    return () => body?.classList.remove('bg-black')
  }, [])

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Submenu>
            <div className='flex text-primary [&>a:last-child::after]:content-[]'>
              {data.map((item, index) => (
                <a
                  key={index}
                  href='#'
                  className={`hover:text-primary uppercase hover:text-black split ${
                    index === itemSelected ? 'text-black' : 'text-primary'
                  }`}
                  onClick={() => setItemSelected(index)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </Submenu>
          <div className='w-full max-w-7xl m-auto px-6 flex flex-col gap-y-12'>
            <div className='flex'>
              <div className='lg:w-2/6'></div>
              <div className='lg:w-4/6 text-primary'>
                <Down />
              </div>
            </div>
            <div className='flex flex-col gap-y-6 text-white mb-12'>
              <div className='aspect-video'>
                <ReactPlayer
                  width='100%'
                  height='100%'
                  url={data[itemSelected].url}
                />
              </div>
              <div className='whitespace-break-spaces'>{data[itemSelected].text}</div>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default Index
