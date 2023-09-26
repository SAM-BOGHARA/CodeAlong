import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import EditorPage from './pages/EditorPage.jsx'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
function App() {

  return (
    <>
      <div>
        <Toaster
        position='top-center' toastOptions={{
          success: {
            theme:{
              primary: '#4aed88'
            },
          },
        }}></Toaster>
      </div>
      <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route exact path="/" element={<Home/>}></Route>
        {/* Editor Page */}
        <Route exact path="/editor/:roomID" element={<EditorPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
