import React, {useState} from 'react';
import Inputbook from './components/InputBook/InputBook';
import BookList from './components/BookList/BookList';
import './App.css';

function App() {
  const [state, setState] = useState(false);


  return (
    <div className="App">

      <div className="header">
          <h1>BOOKS READER</h1>
          <button onClick={()=>setState(true)}>ADICIONAR LIVRO</button>
      </div>

      <Inputbook trigger={state} setTrigger={setState}/>
      <BookList/>

    </div>
  );
}

export default App;
