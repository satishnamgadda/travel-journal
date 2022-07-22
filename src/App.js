import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Destination from "./components/Destination"
import Footer from "./components/Footer"
import data from "./data"

function App() {
  const destinations = data.map(destination => {
    return (
      <Destination
        key={destination.title}
        destination={destination}
      />
    )
  })
  return (
   <div className="wrapper">
      <Navbar />
      {destinations}
      <Footer />
   </div>
  );
}

export default App;
