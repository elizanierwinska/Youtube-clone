import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

// Implement paths by creating Routes element and writing Route element within it
// In Route element specify path you want and the component
const App = () => {
  //initialize state to add functionality to the sidebar
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video />}></Route>
      </Routes>
    </div>
  )
}

export default App;