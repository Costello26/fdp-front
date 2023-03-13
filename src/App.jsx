import { Topbar } from './components/topbar'
import { Sidebar } from './components/sidebar/sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharterListPage } from './pages/chartersList';
import { SingleCharterPage } from './pages/singleCharter';

function App() {
  return (
    <div className="App">
      <Topbar />
      <section className='app-inner flex mx-auto'>
        <Sidebar/>
        <section className='content-section w-[80%] h-full flex items-center justify-center'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<h1>123</h1>}/>
              <Route path="charter/" element={<CharterListPage/>}>
                 <Route path="new/" element={<SingleCharterPage/>}/>
              </Route>
             
              
            </Routes>
          </BrowserRouter>
        </section>
      </section>
    </div>
  )
}

export default App
