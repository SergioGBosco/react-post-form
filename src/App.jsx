import axios from "axios"
import { useState } from "react"
function App() {

  // axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts").then(resp => {
  //   console.log(resp.data)
  // })

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="mb-3">
              <label className="form-label">Autore</label>
              <input type="text" className="form-control" id="InputAuthor" />
            </div>
            <div className="mb-3">
              <label className="form-label">Titolo</label>
              <input type="text" className="form-control" id="InputTitle" />
            </div>
            <div className="mb-3">
              <label className="form-label">Testo</label>
              <input type="text" className="form-control" id="InputText" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="checkPublic" />
              <label className="form-check-label">Rendi Pubblico</label>
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default App
