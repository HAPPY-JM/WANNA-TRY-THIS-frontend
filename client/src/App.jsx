import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './page/Main';
import Result from './page/Result';
import NotFound from './page/NotFound';
import Survey from './page/Survey';
import Loading from './page/Loading';
import MyPage from './page/MyPage';
import EmptyPage from './page/EmptyPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './GlobalStyle';
export const AnswerDataContext = createContext();
const quertClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 1000,
    },
  },
});

const App = () => {
  const [answerData, setAnswerData] = useState({
    mood: '',
    age: '',
    money: '',
    ingredient: '',
  });
  const [barcount, setBarcount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <AnswerDataContext.Provider
        value={{
          answerData,
          setAnswerData,
          barcount,
          setBarcount,
          isOpen,
          setIsOpen,
        }}
      >
        <QueryClientProvider client={quertClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/Survey" element={<Survey />}></Route>
              <Route path="/Result" element={<Result />}></Route>
              <Route path="/Loading" element={<Loading />}></Route>
              <Route path="/MyPage" element={<MyPage />}></Route>
              <Route path="/EmptyPage" element={<EmptyPage />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
          <GlobalStyle />
        </QueryClientProvider>
      </AnswerDataContext.Provider>
    </div>
  );
};

export default App;
