import { Down } from '../../components/icons'

const Bio = () => {
  return (
    <section className='mb-12'>
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
            <p>
              <strong> Gabby De Cicco</strong> nació en Rosario, Santa Fe, Argentina, en 1965. Su lema es Lo
              personal-poético es político, y se describe como unx poeta no binarie lesbo feminista. Es Licenciade en
              Letras por la Universidad Nacional de Rosario. <br />
              Publicó siete libros de poemas: Bebo de mis manos el delirio (1987), Jazz me blues (1989), La duración
              (1994), Diario de estos días (1998), Queerland (2011), La tierra de los mil caballos (2016) y Transgénica
              - Obra reunida (2019), estos dos últimos títulos aparecieron por Baltasara Editora.
            </p>
            <p>
              <strong> Sus artículos han aparecido en</strong> Feminaria, Debate Feminista, Enlaces de AWID, Democracia
              Abierta, revista REA, en los suplementos culturales de los diarios La Capital y El Litoral, y en Las12,
              Rosario/12 y suplemento Soy de Página 12.
            </p>
            <p>
              <strong> Desde 1990 coordina talleres y clínicas de escritura y lectura de poesía,</strong> y de
              comunicación feminista. Participó en varios proyectos culturales y de militancia lésbico feminista. En
              1985 creó Spectrum Ediciones y dirigió la revista literaria Rayuela (1985-1989). En 2000 co-fundó, junto a
              Irene Ocampo, RIMA - Red Informativa de Mujeres de Argentina, y en 2005 crearon Hipólita Ediciones. En
              radio hizo los programas El infierno musical, Thelma y Louise, Con el agua al cuello, y formó parte de
              Blues Mundano y Les impertinentes. Recibió en dos oportunidades el Premio Juana Manso por el trabajo
              feminista radial y por RIMA.
            </p>
            <p>
              <strong>Ha dictado talleres</strong>
              en el marco del Festival Internacional de Poesía de Rosario, el Festival de Poesía de Gualeguaychú, el
              Taller Chiquero en el Centro Cultural Parque de España de Rosario, Taller de poesía en el Laburatorio
              Trans del Centro Cultural Kirchner, entre otros. Ha dado charlas en Sala Lavardén, la Biblioteca de
              Maestras y Maestros y el MALBA, Festival de Poesía de La Habana.
            </p>
            <p>
              De septiembre a noviembre de 2023 formó parte de la residencia artística que se realiza anualmente en Can
              Serrat, El Bruc, Cataluña.
            </p>
            <p>
              <strong>Sus poemas</strong>
              han sido incluídos en las antologías y libros colectivos: Agua de beber (Nusud, 2001), Poetas argentinas
              (1961-1980) (Ediciones del Dock, 2007), Gordx el que lee - Lecturas urgentes sobre disidencia corporal y
              sexual (co-edición Editorial Brandon y La mariposa y la iguana, 2017), Proyecto NUM (Madreselva, 2017),
              Atlas de la poesía argentina II (EUDLP, 2017), Los reinos de la poesía (Casagrande Editorial, 2018),
              Poliamor - Anfibia papel (2018), Con estas bocas, en este mundo - Antología 8M (co-edición Rumiar y Poetas
              por el aborto legal, 2019), catálogo de la muestra Revolucionistas (2019), Las cenizas llegaron a mi patio
              (Brumana, 2021), Antología degenerada - Una cartografía del lenguaje inclusivo (Biblioteca Nacional
              Mariano Moreno, 2021), entre otros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
