import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './page/Main';
import Result from './page/Result';
import NotFound from './page/NotFound';
import Survey from './page/Survey';

export const AnswerDataContext = createContext();

const App = () => {
  const [answerData, setAnswerData] = useState([]);

  return (
    <div className="App">
      <AnswerDataContext.Provider value={{ answerData, setAnswerData }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Survey" element={<Survey />}></Route>
            <Route path="/Result" element={<Result />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AnswerDataContext.Provider>
    </div>
  );
};

export default App;
