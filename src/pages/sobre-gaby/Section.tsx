import { Down, Up } from '../../components/icons'

const Section = ({ data }) => {
  return (
    <section
      className='border-t-2 border-primary'
      style={{ backgroundColor: `${data.bgColor}`, color: `${data.color}` }}
      id={data.title.split(' ')[0]}
    >
      <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-12'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/6'></div>
          <div className='lg:w-4/6 text-primary'>
            <Down />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row mb-6'>
          <div className='lg:w-1/4 mb-6'>
            <h2 className='text-3xl lg:text-4xl font-secondary italic font-bold text-black'>{data.title}</h2>
          </div>
          <div className='lg:w-3/4 mb-6 text-sm lg:text-base'>
            <p>{data.text}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-end px-6'>
        <a
          href='#Bio'
          className='a-main text-white transition-all scroll'
        >
          <Up />
        </a>
      </div>
    </section>
  )
}

export default Section
