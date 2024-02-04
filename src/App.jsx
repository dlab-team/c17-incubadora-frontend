import './App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import  Router  from './router/Router';
import NavBar from './components/navbar/Navbar';



function App() {


  return (
    <>

    <BrowserRouter>
        <NavBar />
        <Router />
    </BrowserRouter>

    </>
  )
}

export default App
