import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import { Back, Forward, Up } from '../../components/icons'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Slider = () => {
  const { data, loading } = useFetch(`/imagenes`)

  const sliderProperties = {
    autoplay: false,
    indicators: false,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    prevArrow: (
      <div className='hover:text-black text-primary transition-all'>
        <Back />
      </div>
    ),
    nextArrow: (
      <div className='hover:text-black text-primary transition-all'>
        <Forward />
      </div>
    )
  }

  return (
    <section>
      <div className='max-w-4xl m-auto w-screen lg:w-full '>
        <Fade {...sliderProperties}>
          {loading ? (
            <Loader />
          ) : (
            data.map(item => (
              <div
                key={item.id}
                className='w-full m-auto max-w-xl flex flex-col gap-y-3'
              >
                <div className='aspect-[4/5] overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className='text-primary text-center'>{item.title}</div>
              </div>
            ))
          )}
        </Fade>
      </div>
      <div className='w-full flex justify-end px-6'>
        <a
          href='#section0'
          className='a-main transition-all scroll'
        >
          <Up />
        </a>
      </div>
    </section>
  )
}

export default Slider
