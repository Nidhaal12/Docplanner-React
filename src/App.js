import React from 'react';
import './App.css';
import Header from './header'
import Galerie from './galerie'
import Main from './main'
import Statistic from './statistic'
import Footer from './footer'

const logo = "https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
const list = [
  {
    item: "About us",
    colored: "a1",
    lien: "About Us"
  },
  {
    item: "Career",
    lien: "Career"
  },
  {
    item: "Departments",
    lien: "Departments",
    sub: ['Marketing & PR', 'Customer uccess & sales', 'IT,Product,Design & UX', 'Finance & Administration', 'HR more']
  }
]
let galerie = [
  {
    city: "Warsaw",
    image: "https://www.docplanner.com/images/warsaw.png"
  },
  {
    city: "Barcelona",
    image: "https://www.docplanner.com/images/barcelona.png"
  },
  {
    city: "Istanbul",
    image: "https://www.docplanner.com/images/istanbul.png"
  },
  {
    city: "Rome",
    image: "https://www.docplanner.com/images/rome.png"
  },
  {
    city: "Mexico Sity",
    image: "https://www.docplanner.com/images/mexico-city.png"
  },
  {
    city: "Curitiba",
    image: "https://www.docplanner.com/images/curitiba.png"
  }
]

function App() {
  return (
    <div className="App">
      <Header logo={logo} list={list} />
      <Main />
      <Statistic />
      <Galerie galerie={galerie} />
      <Footer />

    </div>
  );
}

export default App;