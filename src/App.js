import React, {useState, useEffect} from "react";
import NasaCard from "./Components/nasaCard";
import axios from "axios";
import "./App.css";

function App() {
  const [Data, setData] = useState(0);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(nasaResponse => {
            console.log(nasaResponse.data)
            setData(nasaResponse.data);
        })
        .catch(error => {
            console.log('nah nah')
        })
    }, []);

    console.log(Data.service_version);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1> Nasa World </h1>
      <NasaCard date = {Data.date} image = {Data.hdurl} title = {Data.title} explanation = {Data.explanation} />
    </div>
  );
}

export default App;
