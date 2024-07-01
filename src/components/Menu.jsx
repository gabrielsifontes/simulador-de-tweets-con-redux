import { Container, Navbar, Button } from "react-bootstrap";
import LogoRedux from "../assets/redux.png"
import { useDispatch } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions"



export default function Menu() {
  const dispatch = useDispatch() // Dispatch para ejecutar nuestras acciones y que estás accedan al estado global (store)


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Container hace que el contenido del Navbar no ocupe el 100%, sino que quede centrado */}
        <Navbar.Brand>
          <img 
            src={LogoRedux} 
            alt="Tweets Simulator Redux" 
            width={30}
            height={30}
            className="d-inline-block align-top mr-4"
          />
          Tweets Simulator Redux
        </Navbar.Brand>


        <Button variant="outline-success"
          onClick={ ()=> dispatch(openCloseAddTweetModalAction(true)) }
          // El dispatch directamente ejecuta una funcion que hace conexion con los reducers, y estos reducers a su vez hacen la conexion con el store
        >
          Nuevo tweet
        </Button>
      </Container>
    </Navbar>
  )
}