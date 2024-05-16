import { Route, Switch } from 'wouter'
import Home from './pages/home'
import SobreGabby from './pages/sobre-gaby'
import Publicaciones from './pages/publicaciones'
import PublicacionesDetalles from './pages/publicaciones/Detalles'
import Talleres from './pages/talleres'
import Videos from './pages/videos'
import Prensa from './pages/prensa'
import Contacto from './pages/contacto'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/sobre-gabby'
        component={SobreGabby}
      />
      <Route
        path='/publicaciones'
        component={Publicaciones}
      />
      <Route
        path='/publicaciones/:id'
        component={PublicacionesDetalles}
      />
      <Route
        path='/talleres'
        component={Talleres}
      />
      <Route
        path='/videos'
        component={Videos}
      />
      <Route
        path='/prensa'
        component={Prensa}
      />
      <Route
        path='/contacto'
        component={Contacto}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
