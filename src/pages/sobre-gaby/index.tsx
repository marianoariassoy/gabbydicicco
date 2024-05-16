import { useEffect } from 'react'
import { menu } from '../../components/data'
import Layout from '../../layout/Layout'
import Submenu from '../../components/Submenu'
import Bio from './Bio'
import Slider from './Slider'
import Section from './Section'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Sobre Gabby'
  }, [])

  const data = [
    {
      title: 'Traducciones',
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus 
      ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo 
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra 
      quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
      
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
      bgColor: '#94b0b6',
      color: 'white'
    },
    {
      title: 'Tutorías',
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus 
      ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo 
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra 
      quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
      
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
      bgColor: '#aacad0',
      color: 'text-black'
    },
    {
      title: 'Clínica de obra',
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus 
      ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo 
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra 
      quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
      
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
      bgColor: '#bee2e9',
      color: 'text-black'
    }
  ]
  return (
    <Layout>
      <Submenu>
        <div className='text-primary uppercase flex flex-wrap gap-x-3 lg:gap-x-4'>
          {menu[0].sections.map((item, index) => (
            <a
              key={index}
              href={item}
              className='hover:text-black'
            >
              {item}
            </a>
          ))}
        </div>
      </Submenu>
      <Bio />
      <Slider />
      {data.map((item, index) => (
        <Section
          key={index}
          data={item}
        />
      ))}
    </Layout>
  )
}

export default Index
