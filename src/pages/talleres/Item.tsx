import Submenu from '../../components/Submenu'
import { Down } from '../../components/icons'

const Item = () => {
  return (
    <article className='pb-12'>
      <Submenu>
        <h1 className='font-bold text-primary'>TALLER ÁRBOL DE DIANA</h1>
      </Submenu>
      <div className='w-full max-w-7xl m-auto px-6 flex flex-col-reverse lg:flex-row mb-6'>
        <div className='lg:w-2/6 pt-6 lg:pt-12 lg:pr-12 flex justify-end'>
          <div className='font-bold italic lg:text-right text-xl max-w-64'>
            Desde 1990 leyendo, escribiendo y difundiendo poesía
          </div>
        </div>
        <div className='lg:w-4/6 flex flex-col gap-y-6 text-white'>
          <div className='text-black'>
            <Down />
          </div>
          <div className='max-w-md'>
            <h2 className='font-bold italic'>Duración</h2>
            De marzo a noviembre. Comienza la primera semana de marzo. Podés preguntar durante todo el año si hay
            vacantes para sumarte.
          </div>
          <div className='max-w-md'>
            <h2 className='font-bold italic'>Los horarios y días disponibles</h2>
            Miércoles: 18:30 a 20:30 Jueves: 14:30 a 16:30
            <br />
            <br />
            Los encuentros son virtuales vía Zoom.
          </div>
          <hr className='border-black' />
        </div>
      </div>
      <div className='w-full max-w-7xl m-auto px-6 flex flex-col-reverse lg:flex-row text-white'>
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
          Los encuentros del taller grupal de escritura y lectura de poesía son semanales. Durante las dos horas que
          compartimos exploramos diferentes territorios poéticos a partir de la lectura de poemas seleccionados
          especialmente. También leeremos textos críticos que nos ayudarán a sumergirnos en la cocina de la escritura y
          lectura de poesía. Los intercambios que surgen en este espacio nos permiten crear un ambiente inspirador donde
          nuestras reflexiones se entrelazan, formando constelaciones de ideas en torno a nuestro proceso creativo.
          <br />
          <br />
          El taller se caracteriza por el tiempo que le dedicamos a los poemas que traigan les, las, los participantes.
          Este momento de clínica grupal nos pide poner en práctica atención, cuidado y escucha profunda para poder dar
          las devoluciones.
          <br />
          <br />
          Entre lo lúdico y las reflexiones vamos armando trama poética, que quizá, si hay alguien que no escribe (aún)
          y solo lee, quizá… quizá… quién te dice algo comienza a surgir. Para esto daremos rienda suelta a nuestra
          escritura, descubriremos recursos, herramientas que impulsen, despierten nuestra propia creación. Los
          disparadores provienen de distintos campos artísticos: fotografía, música, películas, documentales, collages,
          etc.
          <br />
          <br />
          <strong>
            Pienso y siento el taller como espacio de encuentro, de pensamiento, de agenciamientos creativos, y como
            práctica social colectiva de lectura y escritura.{' '}
          </strong>
          <br />
          <br />
          ¡Espero que puedas sumarte! ¡Saludos poéticos!
        </div>
      </div>
    </article>
  )
}

export default Item
