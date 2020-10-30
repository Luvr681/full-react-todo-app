import React from 'react';

const version = '1.0.42';
function About() {
	return (
		<div className="jumbotron">
		  <div className="container">
		    <h1 className="display-4">Лучшее react приложение</h1>
		    <p className="lead">Версия приложения <strong>{ version }</strong> </p>
		  </div>
		</div>
	);
}

export default About;
