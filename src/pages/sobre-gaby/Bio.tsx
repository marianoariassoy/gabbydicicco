import { Down } from '../../components/icons'
import HTML from '../../hooks/useHTML'

const Bio = ({ text }) => {
  return (
    <section
      className='mb-12'
      id='section0'
    >
      <div className='w-full max-w-7xl m-auto px-6 gap-y-6 flex flex-col-reverse lg:flex-row items-center'>
        <div className='lg:w-2/6'>
          <h2 className='text-3xl lg:text-6xl lg:text-right font-secondary italic font-bold text-black/50 lg:pr-12'>
            “Lo personal-poético es político”
          </h2>
        </div>
        <div className='lg:w-4/6 flex flex-col gap-y-3'>
          <div className='text-primary mb-3'>
            <Down />
          </div>
          <div className='text-sm lg:text-base flex flex-col gap-y-3'>
            <HTML text={text} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
