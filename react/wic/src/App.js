import { createContext, useState } from "react";

import { Routes, Route } from 'react-router-dom'

import Pere from "./components/Pere";
import Navigation from "./components/Navigation";
import Compteur from "./components/Compteur";
import second from "./components/Personne";
import Form from "./components/Form";
import ChangeTitle from "./components/ChangeTitle";
import "./app.css";
import Personne from "./components/Personne";
import PersonneEffect from "./components/PersoneEffect";
import CompteurAuto from "./components/CompteurAuto";
import ListeVoiture from "./components/ListeVoiture";
import Comp1 from "./components/Comp1";
import TodoApp from "./components/todo/TodoApp";
import ArticlesList from "./components/CRUD/ArticlesList";
import Home from "./components/Home";
import ArticleItem from "./components/ArticleItem";

import Exam from './components/Exam'



export const MyContext = createContext("");
export const PainerContext = createContext([]);

function App() {
  const [hello, setHello] = useState("HELLO");
  const [panier, setPanier] = useState([]);

  return (
    <MyContext.Provider value={{ hello, setHello }}>
      <PainerContext.Provider value={{panier, setPanier}}>
        <Navigation/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<TodoApp/>}/>
            <Route path="/compteur" element={<CompteurAuto/>}/>
            <Route path="/article/:id" element={<ArticleItem/>}/>
            <Route path="/exam" element={<Exam/>}/>
          </Routes>
        </div>

        {/* <Compteur  /> */}
        {/* <Personne/> */}
        {/* <Form/> */}
        {/* <ChangeTitle/> */}
        {/* <PersonneEffect/> */}
        {/* <CompteurAuto /> */}
        {/* <ListeVoiture/> */}
        {/* <Comp1 /> */}
        {/* <TodoApp/> */}
        {/* <ArticlesList/> */}
      </PainerContext.Provider>
    </MyContext.Provider>
  );
}

export default App;
