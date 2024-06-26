import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import { Down, Back, Up } from '../../components/icons'
import Image from '../../components/Image'
import { Link, useParams } from 'wouter'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'
import ExtrasItem from './ExtrasItem'

const Detalles = () => {
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/libros/${id}`)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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

      {loading ? (
        <Loader />
      ) : (
        <div
          className='w-full max-w-7xl m-auto lg:px-6 flex flex-col-reverse lg:flex-row fade-in mt-9'
          id='top'
        >
          <div className='lg:w-2/6 p-6 lg:p-12'>
            <article className='flex flex-col gap-y-3 max-w-64 lg:max-w-none'>
              <div className='aspect-[5/7] hover:opacity-80 transition-all'>
                <Image
                  src={data[0].image}
                  alt={data[0].title}
                />
              </div>
              <div>
                <ExtrasItem id={data[0].id} />
              </div>
            </article>
          </div>
          <div className='bg-secondary lg:w-4/6 flex flex-col gap-y-6 px-6 font-secondary '>
            <div className='text-primary'>
              <Down />
            </div>
            <div className='flex justify-between'>
              <div>
                <h1 className='font-bold  text-xl'>{data[0].title}</h1>
              </div>
              <div>
                <Link to='/publicaciones'>
                  <span className='text-primary hover:text-black transition-all'>
                    <Back />
                  </span>
                </Link>
              </div>
            </div>

            <span className='italic text-xl whitespace-break-spaces'>{data[0].credits}</span>

            <div className='flex justify-end'>
              <div className='text-right max-w-32 opacity-70 whitespace-break-spaces'>{data[0].verse}</div>
            </div>

            <div>
              <HTML text={data[0].text} />
            </div>
            <div className='flex w-full justify-end'>
              <button
                onClick={goToTop}
                className='a-main text-white transition-all scroll'
              >
                <Up />
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Detalles
