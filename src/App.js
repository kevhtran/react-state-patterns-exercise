import './App.css';
import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import FilterDogDetails from './FilterDogDetails';
import DogList from './DogList';
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import duke from "./imgs/duke.jpg";
import perry from "./imgs/perry.jpg";


function App({ dogs }) {
  return (
    <BrowserRouter>
      <NavBar dogs={dogs} />
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name" >
          <FilterDogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  )
}

export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
]

App.defaultProps = { dogs };
export default App;
