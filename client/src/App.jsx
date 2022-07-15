import React ,{useState,createContext }from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './page/Main';
import Result from './page/Result'
import NotFound from './page/NotFound';
import Survey from './page/Survey';
import Footer from './components/Footer'
import  {questionList,answerList} from './data/initialState';


export const AppContext = createContext();



const App = () => {
  console.log(questionList[0])
  console.log("----------------")
  const [question] = useState(questionList);
  const [answer] = useState(answerList);
console.log(question,answer)
	return (
    <div className='App'>
      <AppContext.Provider value={{question,answer}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/Survey" element={<Survey/>}></Route>
          <Route path="/Result" element={<Result />}></Route>
          <Route path="*" element ={<NotFound />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
	</div>
	);
}

export default App;
