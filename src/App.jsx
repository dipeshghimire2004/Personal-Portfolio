import React from 'react';
import { BrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import EducationSection from './components/EducationSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Github from './components/GIthub';

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Github/>} loader={GithubInfoLoader}/>

//   )
// )

function App() {
  return (
    
      <div className='relative h-full overflow-y-auto antialiased'>
        <div className='fixed inset-0 bg-fixedbg-cover bg-center bg-img'></div>
        <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
          <Navbar />

          <Hero/>
          <Project />
          <Bio />
          <Skills />
          <Experiences />
          <EducationSection />
          <Github/>
          <Contact />
          <Footer />
        </div>
      </div>
   
  );
}

export default App;
