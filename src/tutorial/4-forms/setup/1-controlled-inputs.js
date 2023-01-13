import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		// stop browser form trying to submit the form
		// and refreshing the page
		e.preventDefault();
		console.log(firstName, email);
	};

	return (
		<article>
			{/* deal with action on our end */}
			{/* could also put onClick={handleSubmit} on button  */}
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="firstName">Name: </label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit">add person</button>
			</form>
		</article>
	);
};

export default ControlledInputs;
