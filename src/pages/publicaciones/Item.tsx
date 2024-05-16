import Image from '../../components/Image'
import { Link } from 'wouter'

const Item = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-3'>
      <Link to={`/publicaciones/${data.id}`}>
        <div className='aspect-[5/7] hover:opacity-80 transition-all'>
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
