// El store es como el ejecutador de Redux en el proyecto
import { createStore } from "redux";
import reducer from "./reducers"


// UTILS -----------------------------
function getStateLocalStorage() {
  const tweetStorage = localStorage.getItem("tweets")

  if(tweetStorage == null) return undefined

  return JSON.parse(tweetStorage)
}

function setStateLocalStorage(state) {
  localStorage.setItem("tweets", JSON.stringify(state))
}
// -----------------------------

const localStorageState = getStateLocalStorage()
 


const store = createStore(
  // Create store hace que podamos crear un state global en el proyecto, o sea, va a ser un sitio donde se guarda variables necesarias, para que se puedan acceder desde distintos componentes.
  reducer, 
  localStorageState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Condición necesaria para que se pueda abrir las extensiones del navegador de Redux
)

store.subscribe( ()=> {
  // El método subscribe de Redux se utiliza para escuchar los cambios en el store. Cada vez que el estado del store se actualiza, todos los suscriptores son notificados y pueden ejecutar alguna lógica en respuesta, como actualizar la UI. Es parte del patrón de diseño Observer, donde los suscriptores se “suscriben” para observar cambios en el objeto que desean monitorear.
  
  setStateLocalStorage({
    tweets: store.getState().tweets
  })
  // El método getState de Redux se utiliza para obtener el estado actual del store. Cuando lo invocas, te devuelve el objeto de estado actual, lo que te permite acceder a cualquier parte del estado de la aplicación en ese momento específico.
})

export default store