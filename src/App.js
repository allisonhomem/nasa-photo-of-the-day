import React, {  useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [ apodData, setApodData ] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=xQXySdxom5h6szZtFdwgAqy78wLBXaylm2DpxbDm')
         .then(res => {
           setApodData(res.data);
         })
         .catch(err => {
           console.error('failed to get data')
         })
  }, []);

  console.log(apodData);

  return (
    <div className="App">
     <Header />
     <Body />
     <p> This is working </p>
    </div>
  );
}

export default App;
