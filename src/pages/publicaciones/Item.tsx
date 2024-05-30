import Image from '../../components/Image'
import { Link } from 'wouter'

const Item = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3 '>
      <Link to={`/publicaciones/${data.id}`}>
        <div className='aspect-[5/7] relative'>
          <div className='z-30 absolute w-full h-full top-0 right-0 bg-secondary opacity-0 hover:opacity-60 transition-all'></div>
          <Image
            src={data.image}
            alt={data.title}
          />
        </div>
      </Link>

      <div>
        <span className='font-bold italic'>{data.title}, </span>
        <span>{data.year}</span>
      </div>
    </article>
  )
}

export default Item
