import React from 'react';

import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

function Form() {
	const [value, setValue] = React.useState('');
	const alert = React.useContext(AlertContext);
	const firebase = React.useContext(FirebaseContext);

	const submitHandler = event => {
		event.preventDefault();

		if (value.trim()) {
			firebase.addNote(value.trim()).then(() => {
				alert.show('Заметка была создана!', 'success');
			}).catch(() => {
				alert.show('Что-то пошло не так', 'danger');
			})
			setValue('');
		} else {
			alert.show('Введите название заметки');
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<input
					value={value}
					type="text" 
					onChange={e => setValue(e.target.value)} 
					className="form-control" 
					placeholder="Введите название заметки" 
				/>
			</div>
		</form>
	);
}

export default Form;
