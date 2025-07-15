
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Footer from './components/Footer/index'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation';
import Home from './pages/Blog/Home';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navigation/>
      </div>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
