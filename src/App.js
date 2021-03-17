import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={ExercisesList}
      <Route path="/edit/:id" component={EditExercise}
      <Route path="/create" component={CreateExercise}
      <Route path="/new-user" component={CreateUSer}
    </BrowserRouter>
  )
}
