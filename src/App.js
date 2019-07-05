import React, { Component } from "react";

// Import the flwww Button and message
import { Modal, Button, Input, message } from "flwww";

class App extends Component {
	state = {
	    modalIsVisible: false,  // This control if the modal is visible or not
			username: "",
			password: "",
			isLoading: false,
		}

	  toggleModal = () => {
	    // This function change the state of the modal visibility (e.g. this.state.modalIsVisible)
	    this.setState(prevState => ({ modalIsVisible: !prevState.modalIsVisible }));
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
			if(username.length < 1){
				message("You need to add a usernamme!", "error");
			}
			else if(password.length < 1){
				message("You need to add a password!", "error");
			}
			else {
				// Make a fake API call
				this.setState({ isLoading: true });
				setTimeout(() => {
					// End the loading and close the modal
					this.setState({
						isLoading: false,
						modalIsVisible: false,
					});
					// Send a success message when the user have log in
					message(`Welcome back ${ username }!`, "success");
				}, 1000);
			}
		}

	  render(){
	    const { modalIsVisible, username, password } = this.state;

	    return (
	      <div>
	        <Button
						onClick={ this.toggleModal }
						style={{ margin: "2rem" }}>Sign in</Button>

	        <Modal
	          isVisible={ modalIsVisible }
	          toggleModal={ this.toggleModal }>
								<SigninModal
									toggleModal={ this.toggleModal } />
	        </Modal>
	      </div>
	    )
	  }
}

export default App;


class SigninModal extends Component {
	state = {
			username: "",
			password: "",
			isLoading: false,
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
			if(username.length < 1){
				message("You need to add a usernamme!", "error");
			}
			else if(password.length < 1){
				message("You need to add a password!", "error");
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
	    const { username, password } = this.state;

	    return (
	      <div>
					<h2 style={{ marginTop: "0" }}>Sign in</h2>

					<label>Username:</label>
					<Input
						value={ username }
						name="username"
						onChange={ this.handleChange }
						style={{ margin: ".7rem 0" }}
						type="text"
						placeholder="Enter your username here" />
					<label>Password:</label>
					<Input
						value={ password }
						name="password"
						onChange={ this.handleChange }
						style={{ margin: ".7rem 0 1.5rem" }}
						type="password"
						placeholder="Enter your password" />
					<Button
						loading={ this.state.isLoading }
						onClick={ this.handleSubmit }
						type="primary">Submit</Button>
	      </div>
	    )
	  }
}
