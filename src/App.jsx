// Proyecto construidos desde 2024-06-09 y terminado en 2024-06-19 por Gabriel Sifontes

import { Container } from "react-bootstrap"
import Menu from "./components/Menu"
import Modal from "./components/Modal"
import FormAddTweet from "./components/FormAddTweet"
import TweetList from "./components/TweetList"

// Redux
import store from "./store"
import { Provider } from "react-redux"



export default function App() {

  return (
    <Provider store={store}>
      {/* El provider es el elemento que hace posible que todos los componentes de la aplicacion puedan tener acceso al store */}
      
      <Menu></Menu>

      <Container className="mt-5">
        <h1 className="text-center">TWEETS</h1>

        <TweetList></TweetList>
      </Container>

      <Modal>
        <FormAddTweet></FormAddTweet>
      </Modal>
    </Provider>
  )
}
