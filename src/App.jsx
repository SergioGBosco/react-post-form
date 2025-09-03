import axios from "axios"
import { Alert } from "bootstrap"
import { useState } from "react"
function App() {
  const [newPost, SetNewPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  })
  const [Alert, SetAlert] = useState({
    show: false,
    status: "",
    text: "",
  })

  //creo la funzione che mi permette di inviare i dati dei campi imput
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ?
        e.target.checked : e.target.value;

    console.log(e.target.value)
    SetNewPost((newPost) => ({
      ...newPost,
      [e.target.name]: value,
    }))
  }


  //creo una funzione per gestire l'invio del pulsante
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", newPost)
      .then(resp => {
        console.log("Post Aggiunto con Successo");
        console.log(resp.data)
        SetNewPost(newPost)
        SetAlert({ show: true, status: "success", text: "Aggiunto con Successo" })
      })
      .catch((err) => {
        console.log("errore nell'invio dei dati" + err);
        SetAlert({ show: true, status: "danger", text: "il Testo non è stato Aggiunto" })
      })

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {Alert.show && (
            <div className={`alert alert-${Alert.status}`}>{Alert.text}</div>
          )}
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
                name="body"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                checked={newPost.public}
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
