
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
        <main className="app-main">
          <p>This is a simple React application.</p>
          <p>Feel free to explore and modify it!</p>
        </main>

      </div>
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} />  */}
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
