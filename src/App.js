import {React} from "react"
import './App.css';
import {BrowserRouter ,Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Article from './pages/Article';
import Synonyms from './pages/Synonyms';
import RightformVerb from './pages/RightformVerb';
import Tense from './pages/Tense';
import Antonyms from './pages/Antonyms';
import Pronoun from './pages/Pronoun';
import Misc from "./pages/Misc"
import Preposition from "./pages/Preposition";
function App() {
 
    const data = localStorage.getItem("username");
  

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Article' element={<Article name ={data} />}></Route>
        <Route path='/Synonyms' element={<Synonyms name ={data} />}></Route>
        <Route path='/RightformVerb' element={<RightformVerb name ={data} />}></Route>
        <Route path='/Tense' element={<Tense name ={data} />}></Route>
        <Route path='/Antonyms' element={<Antonyms name ={data} />}></Route>
        <Route path='/Pronoun' element={<Pronoun name ={data} />}></Route>
        <Route path='/Misc' element={<Misc name ={data} />}></Route>
        <Route path='/Prepositions' element={<Preposition name ={data} />}></Route>
      </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
