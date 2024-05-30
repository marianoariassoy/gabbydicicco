import { useEffect, useState } from 'react'
import { Down, Up } from '../../components/icons'
import HTML from '../../hooks/useHTML'
import scroll from './scroll'

const Section = ({ data, index, colors, title }) => {
  const [color, setColor] = useState('')
  const [bgColor, setbgColor] = useState('')

  useEffect(() => {
    if (colors.length > 0) {
      setColor(colors[index].color)
      setbgColor(colors[index].bgColor)
    }
    scroll()
  }, [colors, index])

  return (
    <section
      className={`border-t-2 border-primary ${color}`}
      style={{ backgroundColor: `${bgColor}` }}
      id={'section' + index}
    >
      <div className='w-full max-w-7xl m-auto px-6 flex flex-col gap-y-6 lg:gap-y-12'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/6'></div>
          <div className='lg:w-4/6 text-primary'>
            <Down />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row mb-6'>
          <div className='lg:w-1/4 mb-6'>
            <h2 className='text-3xl lg:text-4xl font-secondary italic font-bold text-black'>{title}</h2>
          </div>
          <div className='lg:w-3/4 mb-6 text-sm lg:text-base'>
            <HTML text={data.text} />
          </div>
        </div>
      </div>
      <div className='flex justify-end px-6'>
        <a
          href='#section0'
          className='a-main text-white transition-all scroll'
        >
          <Up />
        </a>
      </div>
    </section>
  )
}

export default Section
