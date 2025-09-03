import axios from "axios"
import { Alert } from "bootstrap"
import { useState } from "react"
function App() {

  // axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts").then(resp => {
  //   console.log(resp.data)
  // })


  //creo la funzione che mi permette di inviare i dati dei campi imput
  const handleChange = (e) => {
    console.log(e.target.value)
  }


  //creo una funzione per gestire l'invio del pulsante
  const handleClick = (e) => {
    e.preventDefault();
    alert("Post Aggiunto con Successo");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="mb-3">
              <label className="form-label">Autore</label>
              <input
                type="text"
                className="form-control"
                id="InputAuthor"
                name="author"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Titolo</label>
              <input
                type="text"
                className="form-control"
                id="InputTitle"
                name="title"
                onChange={handleChange}
              />


            </div>
            <div className="mb-3">
              <label className="form-label">Testo</label>
              <input
                type="text"
                className="form-control"
                id="InputText"
                name="text"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkPublic"
                name="public"
                onChange={handleChange}
              />
              <label className="form-check-label">Rendi Pubblico</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Invia</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default App
