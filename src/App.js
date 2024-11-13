import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Data } from './Data';
import { useState } from 'react';
import Form from './components/Form';
import Description from './Description';
import {Routes, Route} from 'react-router-dom';


function App() {
  const [Movie, setMovie] = useState(Data);
  
  // Add Movie
  const addMovie = (newMovie) => {
    setMovie([...Movie, newMovie]);
  };

  // Search Bar
  const [nameSearch, setNameSearch] = useState(""); // Initialize with an empty string

  return (
    <div>
      <Header setNameSearch={setNameSearch} />
      <Routes>
       <Route path='/' element={      <Main Movie={Movie} nameSearch={nameSearch} />} /> 
      <Route path='/add' element={<Form addMovie={addMovie} />} />
      <Route path='/trailer/:id' element={<Description/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
