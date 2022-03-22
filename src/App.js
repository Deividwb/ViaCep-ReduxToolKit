import NavBar from './components/NavBar'
import Router from './Router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { CepProvider } from './controllers/cepContext'

function App() {
  return (
    <>
      <CepProvider>
        <NavBar />
        <Router />
      </CepProvider>
    </>
  )
}

export default App
