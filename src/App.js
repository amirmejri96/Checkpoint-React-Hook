import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Data } from './Data';
import { useState } from 'react';
import Form from './components/Form';

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
      <Main Movie={Movie} nameSearch={nameSearch} />
      <Form addMovie={addMovie} />
      <Footer />
    </div>
  );
}

export default App;
