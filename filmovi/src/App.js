import './App.css';
import Filmovi from './data/Filmovi';
import { FcFilmReel } from 'react-icons/fc';
import { FaAward } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [trenutniFilm, podesiFilm]=useState(0)
  
const prev=()=>{
let sada=trenutniFilm-1;
if(sada<0){
  sada=Filmovi.length-1;
}
podesiFilm(sada);
}
const next=()=>{
  let sada=trenutniFilm+1;
  if(sada>Filmovi.length-1){
    sada=0;
  }
  podesiFilm(sada);
  }
const {img, title, desc, year, rating}=Filmovi[trenutniFilm];
  return (
    <div className="App">
      <div className="film">
        <div className="container">
      <div className="card">
  <img src={img} className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><FcFilmReel/> snimljeno: {year}</li>
    <li className="list-group-item"><FaAward/> ocena: {rating}</li>

  </ul>
  <div className="card-body btn-group">
<button className='btn btn-success btn-sm' onClick={prev}>Levo</button>
<button className='btn btn-primary btn-sm' onClick={next}>Desno</button>
  </div>
</div>      
</div>
</div>
    </div>
  );
}

export default App;
