import { Forward } from '../../components/icons'

const Item = ({ data }) => {
  return (
    <a
      href={data.url}
      target='_blank'
      rel='noopener noreferrer'
      className='border-b border-primary block fade-in'
    >
      <div className='flex items-center gap-x-6 hover:bg-black/10 a-main transition-all cursor-pointer text-sm lg:text-base lg:gap-x-12 p-6 lg:p-12'>
        <div className='text-primary'>
          <Forward />
        </div>
        <div>{data.url}</div>
      </div>
    </a>
  )
}

export default Item
