
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Footer from './components/Footer/index'
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import Header from './components/Header/Header';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="app">
        <Header/>
      </div>

        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>

        
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
