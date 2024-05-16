import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'
import { Back, Forward, Up } from '../../components/icons'

const Slider = () => {
  const data = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Slide 1'
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/22941109/pexels-photo-22941109/free-photo-of-faro-en-menorca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Slide 2'
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/22873741/pexels-photo-22873741/free-photo-of-cuchara-capuchino-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Slide 3'
    }
  ]

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
        <Slide {...sliderProperties}>
          {data.map(item => (
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
          ))}
        </Slide>
      </div>
      <div className='w-full flex justify-end px-6'>
        <button className='a-main transition-all'>
          <Up />
        </button>
      </div>
    </section>
  )
}

export default Slider
