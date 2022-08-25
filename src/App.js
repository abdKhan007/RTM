// import Context
import Context from './context/Context'

// import Browser router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// importt Skeleton
import { SkeletonTheme } from 'react-loading-skeleton'

// import Pages
import Home from './pages/Home'
// Spinners
import FadeLoader from 'react-spinners/FadeLoader'
import { useEffect, useState } from 'react';
import RegisterLogin from './components/registerLogin/RegisterLogin';



function App() {


  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },2555)
  },[])

  
  const [auth, setAuth] = useState(false);
  const currentLogin = 'Intellect'
  const currentPassword = '13113133'

  return (
    <div className="App">
      {
        loading ? <div className='loading'><FadeLoader color='#59443F' size={100} loading={loading}/></div> :      
      <SkeletonTheme baseColor='#808080'>
          <Context.Provider value={{auth, setAuth, currentLogin, currentPassword}}>
            <BrowserRouter>
              <Navbar/>
                <Routes>
                  {
                    auth ? 
                    <>
                      <Route path='/' element={
                        <Home/>
                      }/>
                    </>:
                    <>
                      <Route path='*' element={
                        <RegisterLogin/>
                      }/>
                    </>
                  }
                 
                </Routes>
              <Footer/>
            </BrowserRouter>
          </Context.Provider>
      </SkeletonTheme>
      }

    </div>
  );
}

export default App;
