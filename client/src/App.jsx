import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Result from './page/Result';
import NotFound from './page/NotFound';
import Survey from './page/Survey';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import styled from 'styled-components';
export const AnswerDataContext = createContext();
const quertClient = new QueryClient();

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [barcount, setBarcount] = useState(0);

  const [answerData, setAnswerData] = useState({
    mood: '',
    age: '',
    money: '',
    ingredient: '',
  });

  return (
    <>
      <Container className="App">
        <AnswerDataContext.Provider
          value={{ answerData, setAnswerData, barcount, setBarcount }}
        >
          <QueryClientProvider client={quertClient}>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Survey" element={<Survey />}></Route>
                <Route path="/Result" element={<Result />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </BrowserRouter>
            <GlobalStyle />
          </QueryClientProvider>
        </AnswerDataContext.Provider>
      </Container>
    </>
  );
};

export default App;
