import './App.css';
import Filmovi from './data/Filmovi';
import { FcFilmReel } from 'react-icons/fc';
import { FaAward } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [trenutniFilm, podesiFilm] = useState(0);
  const validateNum = (n) => {
    if (n === trenutniFilm) {
      n = n + 1;
    }
    if (n < 0) {
      return Filmovi.length - 1;
    }
    if (n > Filmovi.length - 1) {
      return 0;
    }
    return n;
  }
  const prev = () => {
    let sada = trenutniFilm - 1;
    podesiFilm(validateNum(sada));
  }
  const next = () => {
    let sada = trenutniFilm + 1;
    podesiFilm(validateNum(sada));
  }
  const randomFilm = () => {
    return Math.floor(Math.random() * Filmovi.length);
  }

  const random = () => {
    podesiFilm(validateNum(randomFilm()));
    console.log(trenutniFilm);
  }
  const { img, title, desc, year, rating } = Filmovi[trenutniFilm];
  return (
    <div className="App">
      <div className="film">
        <div className="container">
          <div className="card">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><FcFilmReel /> snimljeno: {year}</li>
              <li className="list-group-item"><FaAward /> ocena: {rating}</li>

            </ul>
            <div className="card-body btn-group">
              <button className='btn btn-success btn-sm' onClick={prev}>Prethodni</button>
              <button className='btn btn-primary btn-sm' onClick={next}>Sledeći</button>
            </div>
            <button className='btn' onClick={random}>Daj nasumičan film</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
