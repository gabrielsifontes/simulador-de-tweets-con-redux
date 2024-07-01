import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions"
import { addTweetAction } from "../actions"
import { v4 as uuidv4 } from "uuid"
import moment from "moment";
 


export default function FormAddTweet() {
	const [formValue, setFormValue] = useState({
		name: "",
		tweet: "",
	})

  const dispatch = useDispatch() // Dispatch para ejecutar nuestras acciones y que estás accedan al estado global (store)

	const errorFormValue = useSelector( (state)=> state.validations.errorFormAddTweet) // useSelector para vigilar un valor en el estado global (store)


	return (
		<Form 
			className="m-3"
			onChange={ (e)=> setFormValue({
				...formValue, 
				[e.target.name]: e.target.value
			}) }
			onSubmit={ function uploadValuesToState(e) {
					e.preventDefault()
					
					if(!formValue.name || !formValue.tweet) {
						dispatch(validationFormAddTweetAction(true))

					} else {
						dispatch(validationFormAddTweetAction(false))
						dispatch(addTweetAction({
							id: uuidv4(),
							name: formValue.name, 
							tweet: formValue.tweet,
							date: moment()
						}))
					}
			 	}
			}
		>
			<Form.Group className="text-center">
				<h1>Nuevo tweet</h1>
			</Form.Group>

			
			<Form.Group>
				<Form.Control
					type="text" 
					name="name" 
					placeholder="Escribe tu nombre"
				></Form.Control>			
			</Form.Group>


			<Form.Group>
				<Form.Control
					as={"textarea"}
					name="tweet"
					rows={3}
					placeholder="Escribe lo que quieres comunicar..."
				></Form.Control>
			</Form.Group>


			<Button 
				variant="primary" 
				type="submit"
			>
				Enviar tweet
			</Button>


			{errorFormValue && (
				<Alert 
					variant="danger" 
					className="mt-4"
				>
					Todos los campos son obligatorios
				</Alert>				
			)}

		</Form>
	)
}