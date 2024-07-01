import { combineReducers } from "redux";


const initialState1 = {
  stateModalAddTweet: false
}

function modalsReducer(state = initialState1, action) {
  switch(action.type) {
    case "STATE_ADD_TWEET_MODAL":
      return {
        ...state, // Esto hace que otras propiedades que traiga el state se copien de nuevo para que se conserven dentro de este nuevo state
        // Importante que la copia de propiedades sea la primera sentencia antes que las propiedades nuevas
        stateModalAddTweet: action.payload // Esta propiedad dice si el modal va a estar abierto o cerrado, con boleanos
      }
    default:
      return state // En caso de que no haya un tipo de acción nueva, se retornará el mismo state tal cual como vino
  }
}


const initialState2 = {
  errorFormAddTweet: false
}

function validationsReducer(state = initialState2, action) {
  switch(action.type) {
    case "VALIDATION_FORM_ADD_TWEET":
      return {
        ...state, 
        errorFormAddTweet: action.payload
      }
    default:
      return state
  }
}


const initialState3 = {
  tweets: []
}

function tweetsReducer(state = initialState3, action) {
  switch(action.type) {
    case "ADD_TWEET":
      return {
        ...state, 
        tweets: [...state.tweets, action.payload] // El payload sería el nuevo tweet
      }
      break;
    case "DELETE_TWEET":
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
      }
      break;
    default:
      return state
  }
}

export default combineReducers({
  modals: modalsReducer,
  validations: validationsReducer,
  tweets: tweetsReducer
})