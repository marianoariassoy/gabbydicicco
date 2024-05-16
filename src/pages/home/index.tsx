import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/portada`)

  useEffect(() => {
    window.scrollTo(0, 0)
    const header = document.getElementById('header')
    const headerTop = document.querySelector('header div')
    const bars = document.getElementById('bars')
    const icon = document.getElementById('icon')
    const nav = document.getElementById('nav')
    const navMobile = document.getElementById('nav-mobile')
    nav.classList.add('hidden')
    icon.classList.add('hidden')
    bars.classList.remove('hidden')
    header.classList.remove('bg-white')
    header.classList.remove('border-black')
    headerTop.classList.remove('border-black')
    header.classList.add('bg-transparent')
    header.classList.add('text-white')
    header.classList.add('border-white')
    headerTop.classList.add('border-white')
    navMobile.classList.remove('border-black')
    navMobile.classList.add('border-white')
  }, [])

  return (
    <Layout>
      <section className='w-full border-b border-white h-8 absolute top-30 z-40'></section>
      <section className='w-screen h-screen fixed top-0 bg-black/80'>
        {loading ? <Loader /> : <Slider data={data} />}
      </section>
    </Layout>
  )
}

export default Index
