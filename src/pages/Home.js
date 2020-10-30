import React from 'react';

import { Form, Notes, Loader } from '../components';
import { FirebaseContext } from '../context/firebase/firebaseContext';

function Home() {	
	const { loading, notes, fetchNotes, removeNote } = React.useContext(FirebaseContext);

	React.useEffect(() => {
		fetchNotes();
	}, []);

  if (!notes.length) {
    return (
      <div>
        <Form />
        <hr />
        <p>Задач пока нет</p>
      </div>
    );
  }

	return (
		<div>
			<Form />
		  <hr/> 
      { 
        loading 
        ? <Loader /> 
        : <Notes notes={notes} onRemove={removeNote}/> 
      }
		</div>
	);
}

export default Home;



