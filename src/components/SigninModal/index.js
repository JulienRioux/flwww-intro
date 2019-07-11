import React, { Component } from 'react';
// Import the flwww Button, Input and message
import { Button, Input, message } from "flwww";


class SigninModal extends Component {
	state = {
			username: "",
			password: "",
			isLoading: false,
			authError: false,
		}

		handleChange = (e) => {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}

		// handle signup submit signin form
		handleSubmit = () => {
			const { password, username } = this.state;
			// Form validation
			if(username.length < 1 && password.length < 1){
				message("You need to add a usernamme and a password!", "error");
				this.setState({ authError: true });
			}
			else if(username.length < 1){
				message("You need to add a usernamme!", "error");
				this.setState({ authError: true });
			}
			else if(password.length < 1){
				message("You need to add a password!", "error");
				this.setState({ authError: true });
			}
			else {
				// Make a fake API call
				this.setState({ isLoading: true });
				setTimeout(() => {
					// Close the modal
					this.props.toggleModal();
					// Send a success message when the user have log in
					message(`Welcome back ${ username }!`, "success");
				}, 1000);
			}
		}

	  render(){
	    const { username, password, authError } = this.state;

	    return (
	      <div>
					<h2 style={{ margin: "1rem 0 0" }}>Welcome back!</h2>
					<h4 className="modalSubTitle">Sign in to continue</h4>

					<label>Username:</label>
					<Input
					  autoFocus
						value={ username }
						name="username"
						onChange={ this.handleChange }
						style={{ margin: ".3rem 0 1rem" }}
						type="text"
						error={ authError && username.length < 1 }
						placeholder="Enter your username here" />

					<label>Password:</label>
					<Input
						value={ password }
						name="password"
						onChange={ this.handleChange }
						style={{ margin: ".3rem 0 1rem" }}
						type="password"
						error={ authError && password.length < 1 }
						placeholder="Enter your password" />

					<div className="signinBtnDiv">
						<Button
							loading={ this.state.isLoading }
							onClick={ this.handleSubmit }
							type="primary">Submit</Button>
					</div>
	      </div>
	    )
	  }
}


export default SigninModal;
