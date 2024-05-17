import Submenu from '../../components/Submenu'
import { Down } from '../../components/icons'
import HTML from '../../hooks/useHTML'

const Item = ({ data }) => {
  return (
    <article className='pb-12'>
      <Submenu>
        <h1 className='font-bold text-primary uppercase'>{data.title}</h1>
      </Submenu>
      <div className='w-full max-w-7xl m-auto px-6 flex flex-col-reverse lg:flex-row mb-6 fade-in'>
        <div className='lg:w-2/6 pt-6 lg:pt-12 lg:pr-12 flex justify-end'>
          <div className='font-bold italic lg:text-right text-xl w-full'>
            Desde 1990 leyendo, escribiendo <br /> y difundiendo poesía
          </div>
        </div>
        <div className='lg:w-4/6 flex flex-col gap-y-6 text-white'>
          <div className='text-black'>
            <Down />
          </div>
          <div className='max-w-md'>
            <h2 className='font-bold italic'>Duración</h2>
            <div className='whitespace-break-spaces'>{data.duration}</div>
          </div>
          <div className='max-w-md'>
            <h2 className='font-bold italic'>Los horarios y días disponibles</h2>
            <div className='whitespace-break-spaces'>{data.hours}</div>
          </div>
          <hr className='border-black' />
        </div>
      </div>
      <div className='w-full max-w-7xl m-auto px-6 flex flex-col-reverse lg:flex-row text-white fade-in'>
        <div className='lg:w-2/6 lg:pr-12 flex flex-col gap-y-12 font-secondary text-right items-end'>
          <div className='max-w-sm'>
            “¿Cuáles son las palabras que todavía no tenés? <br /> ¿Qué necesitás decir?”
            <br /> Audre Lorde
          </div>
          <div>
            “¿Cómo sostener un colectivo que preserve la dimensión de la singularidad? ¿Cómo crear espacios
            heterogéneos, con tonalidades propias, atmósferas distintas, en los que cada une se enganche a su modo?
            ¿Cómo mantener una disponibilidad que propicie los encuentros, pero que no los imponga, una atención que
            permita el contacto y preserve la alteridad? ¿Cómo dar lugar al azar, sin programarlo? ¿Cómo sostener una
            "gentileza" que permita la emergencia de un hablar allí donde crece el desierto afectivo?”
            <br />
            <br />
            Peter Pál Pelbart
          </div>
        </div>

        <div className='lg:w-4/6'>
          <HTML text={data.text} />
        </div>
      </div>
    </article>
  )
}

export default Item
