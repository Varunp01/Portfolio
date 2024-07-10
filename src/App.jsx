import './App.css'
import 'react-loader-spinner';
import Home from './Home';
import About from './About';
import Project from './Project';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { MutatingDots } from 'react-loader-spinner';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>} />
            <Route path='/about' element={<About></About>} />
            <Route path='/projects' element={<Project></Project>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Loader type='TailSpin' color="#00BFFF" height={100} width={100} timeout={3000}></Loader> */}
      {/* <MutatingDots visible={true} height="100" width="100" color='#4fa94d' secondaryColor='#4fa94d' ariaLabel='mutating-dots-loading' wrapperClass='MutatingDots'></MutatingDots> */}
    </>
  )
}

export default App
