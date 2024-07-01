// Los actions son como mensajeros (objetos) que llegan al reducer para saber qué hacer en diversos casos, y así hacer los ca,bios en el estado global (store)

export const openCloseAddTweetModalAction = booleanState => {
  return {
    type: "STATE_ADD_TWEET_MODAL",
    payload: booleanState
  }
}

export const validationFormAddTweetAction = booleanState => {
  return {
    type: "VALIDATION_FORM_ADD_TWEET",
    payload: booleanState
  }
}

export const addTweetAction = newTweet => {
  return {
    type: "ADD_TWEET",
    payload: newTweet
  }
}

export const deleteTweetAction = id => {
  return {
    type: "DELETE_TWEET",
    payload: id
  }
}