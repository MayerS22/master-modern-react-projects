import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import focaccia from './pizzas/focaccia.jpg';
import margherita from './pizzas/margherita.jpg';
import salamino from './pizzas/salamino.jpg';
import prosciutto from './pizzas/prosciutto.jpg';
import funghi from './pizzas/funghi.jpg';
import spinaci from './pizzas/spinaci.jpg';


function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />

    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza imageUrl={focaccia} name="Focaccia" ingredients="Bread with italian olive oil and rosemary" />
      <Pizza imageUrl={margherita} name="Margherita" ingredients="Tomato and mozarella" />
      <Pizza imageUrl={salamino} name="Salamino" ingredients="Tomato, mozarella, pepperoni, onions" />
      <Pizza imageUrl={prosciutto} name="Prosciutto" ingredients="Tomato, mozarella, prosciutto, onions" />
      <Pizza imageUrl={funghi} name="Funghi" ingredients="Tomato, mushrooms" />
      <Pizza imageUrl={spinaci} name="spinaci" ingredients="Tomato, spinach, mozarella" />
    </main>
  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? <p>We're currently open!</p> : <p>We're currently closed!</p>}
      <p>Copyright 2025 Fast React Pizza Co.</p>
    </footer>
  )
}



function Pizza({...props}) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}