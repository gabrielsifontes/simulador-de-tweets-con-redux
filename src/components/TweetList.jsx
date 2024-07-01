import { Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteTweetAction } from "../actions"


export default function TweetList() {
  const tweets = useSelector( (state)=> state.tweets.tweets )
  console.log(tweets);

  return tweets.map( (tweet)=> 
    <Tweet
      key={tweet.id}
      tweet={tweet}
    ></Tweet>
  )
}



function Tweet(props) {
  const { tweet } = props
  const dispatch = useDispatch()



  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title> {tweet.name} </Card.Title>
        <Card.Text> {tweet.tweet} </Card.Text>

        <Button 
          variant="danger"
          onClick={ ()=> dispatch(deleteTweetAction(tweet.id))
          }
        > 
          Eliminar 
        </Button>
      </Card.Body>
    </Card>
  )
}