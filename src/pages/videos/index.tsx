import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import { Down } from '../../components/icons'
import ReactPlayer from 'react-player'

const Index = () => {
  const [itemSelected, setItemSelected] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Videos'
    const body = document.querySelector('body')
    body?.classList.add('bg-black')
    return () => body?.classList.remove('bg-black')
  }, [])

  const data = [
    {
      title: 'Rinconcito',
      url: 'https://youtu.be/-aK7cAV-6O0?si=I9ih-bvU_r2yJm9J'
    },
    {
      title: 'Video 2',
      url: 'https://youtu.be/4Sjs5hbWTZc?si=acjIRpzvz-WtumyW'
    },
    {
      title: 'Video 3',
      url: 'https://youtu.be/f5iGdcFDCMQ?si=nolsMfyn9ckX73uZ'
    }
  ]

  return (
    <Layout>
      <Submenu>
        <div className='flex gap-x-3 text-primary'>
          {data.map((item, index) => (
            <button
              key={index}
              className={`hover:text-primary uppercase hover:text-black ${
                index === itemSelected ? 'text-black' : 'text-primary'
              }`}
              onClick={() => setItemSelected(index)}
            >
              {item.title}
            </button>
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
          <div>{data[itemSelected].title}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
