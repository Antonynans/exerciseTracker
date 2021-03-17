import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={ExercisesList}
    </BrowserRouter>
  )
}
