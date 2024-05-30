import { Link } from 'wouter'
import useFetch from '../../hooks/useFetch'

const ExtrasItem = ({ id }: { id: string }) => {
  const { data, loading } = useFetch(`/extras/${id}`)

  return (
    <ul className='mt-6'>
      {loading ? (
        <li></li>
      ) : (
        data.map(item => (
          <li key={item.id}>
            <Link
              to={`/publicaciones/extras/${id}/${item.id}`}
              className={'hover:underline'}
            >
              {item.title}
            </Link>
          </li>
        ))
      )}
    </ul>
  )
}

export default ExtrasItem
