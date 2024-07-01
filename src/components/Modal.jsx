import { Modal as ModalB } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { openCloseAddTweetModalAction } from "../actions"


export default function Modal(props) {
  const {children} = props

  const dispatch = useDispatch() // Dispatch para ejecutar nuestras acciones y que estás accedan al estado global (store)
  const isOpenModal = useSelector((state)=> state.modals.stateModalAddTweet)  // useSelector para vigilar un valor en el estado global (store)


  return (
    <ModalB
      show={isOpenModal}
      size="lg"
      aria-labelledby=""
      centered
      onHide={ ()=> dispatch(openCloseAddTweetModalAction(false)) }
    >
      {children}      
    </ModalB>
  )
}