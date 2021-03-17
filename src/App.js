import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import ExerciseList from "./components/ExerciseList";
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/NewUser';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create" component={CreateExercise}/>
        <Route path="/new-user" component={CreateUser}/>
      </div>
    </BrowserRouter>
  )
}
