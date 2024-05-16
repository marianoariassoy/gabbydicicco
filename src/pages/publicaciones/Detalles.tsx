import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import { Down, Back } from '../../components/icons'
import Image from '../../components/Image'
import { Link } from 'wouter'

const Detalles = () => {
  return (
    <Layout>
      <Submenu>
        <div className='text-primary uppercase flex flex-wrap lg:gap-x-4 [&>a:last-child::after]:content-[]'>
          {menu[1].sections.map((item, index) => (
            <a
              key={index}
              href={item}
              className='hover:text-black split'
            >
              {item}
            </a>
          ))}
        </div>
      </Submenu>

      <div className='w-full max-w-7xl m-auto lg:px-6 flex flex-col-reverse lg:flex-row h-full fade-in'>
        <div className='lg:w-2/6 p-6 lg:p-12'>
          <article className='flex flex-col gap-y-3 max-w-64 lg:max-w-none'>
            <div className='aspect-[5/7] hover:opacity-80 transition-all'>
              <Image
                src='https://images.pexels.com/photos/21287054/pexels-photo-21287054/free-photo-of-comida-ciudad-vacaciones-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt=''
              />
            </div>
            <div>
              <span className='font-bold italic'>Bebo de mis manos, </span>
              <span>1980</span>
            </div>
          </article>
        </div>
        <div className='bg-secondary lg:w-4/6 flex flex-col gap-y-6 h-full px-6 font-secondary'>
          <div className='text-primary'>
            <Down />
          </div>
          <div className='flex justify-between'>
            <div>
              <h1 className='font-bold  text-xl'>Bebo de mis manos el delirio</h1>
            </div>
            <div>
              <Link to='/publicaciones'>
                <span className='text-primary hover:text-black transition-all'>
                  <Back />
                </span>
              </Link>
            </div>
          </div>

          <span className='italic text-xl'>
            Ediciones Spectrum, Colección Carrousel. <br /> Rosario, noviembre de 1987.
          </span>
          <div className='flex justify-end'>
            <div className='text-right max-w-32 opacity-70'>
              "tu beso es para ellos un signo de traición…"
              <br /> Olga Broumas
            </div>
          </div>
          <div className='max-w-sm'>
            Sirvieron el fuego a cuatro manos descansaron bajo la lluvia y celebraron el eterno holocausto del
            descubrimiento bebiéndose en miradas transformándose en cíclopes extraña simetría de senos y cinturas donde
            la tarde dibuja vientos entre dos pájaros Voy alisando mi cuerpo extendiéndolo hacia nuevas caricias
            borrando a fuerza de golpes y humo sus pliegues anacrónicos y huidizos.
            <br />
            <br />
            Voy como cualquiera en el letargo de un tren del cual no bajarás y será tan sólo un aluvión sudoroso de
            esperanzas y soledades.
            <br />
            <br />
            Voy abriéndome a otras miradas a otras muecas de ternura triste como esa que se grita desde un teléfono a
            mil por hora antes de marcar la tarjeta del olvido.
            <br />
            <br />
            Los perros empujan hacia la noche los restos de lo que no fui. Me arrancan el humo de los ojos. Alucinación
            salvaje donde como arlequín translúcido grito como gritan los que no tienen voz.
            <br />
            <br />
            El viento sabe a eucaliptus y me extraña la paciente persistencia de mis manos en un dibujo de aire.
            <br />
            <br />
            Camino bajo la lluvia que descansa mis pasos buscando brillos alucinógenos en cualquier rostro,
            <br />
            <br />y mis manos, tan lejanas, persisten en ese dibujo que desconozco tanto como a mi raíz de sangre.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Detalles
