import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './page/Main';
import Result from './page/Result'
import NotFound from './page/NotFound';
import Survey from './page/Survey';
// import Footer from './components/Footer'





const App = () => {

	return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/Survey" element={<Survey/>}></Route>
          <Route path="/Result" element={<Result />}></Route>
          <Route path="*" element ={<NotFound />} ></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
	</div>
	);
}

export default App;
