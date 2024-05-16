const Submenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='border-b border-black flex items-center min-h-8 py-2 bg-white'>
      <div className='w-full max-w-7xl m-auto px-6 flex flex-col lg:flex-row items-start justify-between'>
        <div className='lg:w-2/6'></div>
        <div className='lg:w-4/6 text-sm'>{children}</div>
      </div>
    </section>
  )
}

export default Submenu
