import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>} />
//       <Route path ='about' element={<About/>} />
//       <Route path='contact' element={<Contact/>} />
//       <Route path='user/:userid' element={<User/>} />
//       <Route path='github' element={<Github />} loader={githubInfoLoader} />
//     </Route>
//   )
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     
//   </React.StrictMode>,
// )
