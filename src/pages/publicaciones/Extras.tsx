import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import { Down, Back, Up } from '../../components/icons'
import Image from '../../components/Image'
import { Link, useParams } from 'wouter'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'
import { useEffect, useState } from 'react'

const Detalles = () => {
  const [extraSelected, setExtraSelected] = useState(null)
  const { id, id2 } = useParams() as { id: string; id2: string }
  const { data, loading } = useFetch(`/libros/${id}`)
  const { data: extras, loading: loadingExtra } = useFetch(`/extras/${id}`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Extras'
    if (extras) {
      const extraSelected = extras.find(extra => extra.id === parseInt(id2))
      setExtraSelected(extraSelected)
    }
  }, [extras, id2])

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
        extraSelected && (
          <div
            className='w-full max-w-7xl m-auto lg:px-6 flex flex-col-reverse lg:flex-row fade-in mt-9'
            id='top'
          >
            <div className='lg:w-2/6 p-6 lg:p-12'>
              <article className='flex flex-col gap-y-3 max-w-64 lg:max-w-none'>
                <div className='aspect-[5/7] hover:opacity-80 transition-all'>
                  {extraSelected.image && (
                    <Image
                      src={extraSelected.image}
                      alt={extraSelected.title}
                    />
                  )}
                </div>
              </article>
            </div>
            <div className='bg-secondary lg:w-4/6 flex flex-col gap-y-6 px-6 font-secondary '>
              <div className='text-primary'>
                <Down />
              </div>
              <div className='flex justify-between'>
                <div>
                  <h1 className='font-bold text-xl'>{extraSelected.title}</h1>
                  <h2 className='font-bold'>{data[0].title}</h2>
                </div>
                <div>
                  <Link to={`/publicaciones/${data[0].id}`}>
                    <span className='text-primary hover:text-black transition-all'>
                      <Back />
                    </span>
                  </Link>
                </div>
              </div>

              <div>
                <HTML text={extraSelected.text} />
              </div>
            </div>
          </div>
        )
      )}
    </Layout>
  )
}

export default Detalles
