import './App.css';
import { useState } from 'react';
import Note from './Note';
import Result from './Result';
function App() {
  const[notes,setNotes] = useState([]);
  const addNote = (newNote) =>{
      setNotes([...notes,newNote]);
  }

  return (
    <div className="App">
      <Note onAdd={addNote} />
     {notes.map((first,second) => <Result key={second} title={first.title} content={first.content} /> )}
    </div>
  );
}

export default App;
