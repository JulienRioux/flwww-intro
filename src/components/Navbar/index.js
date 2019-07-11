import React, { Component } from "react";
import SigninModal from "../SigninModal";
// Import the flwww Button and message
import { Modal, Button, Container } from "flwww";

import "./Navbar.css";

class Navbar extends Component {
	state = {
	    modalIsVisible: false,  // This control if the modal is visible or not
			isLoading: false,
		}

	  toggleModal = () => {
	    // This function change the state of the modal visibility (e.g. this.state.modalIsVisible)
	    this.setState(prevState => ({ modalIsVisible: !prevState.modalIsVisible }));
	  }


	  render(){
	    const { modalIsVisible, username, password } = this.state;

	    return (
	      <div>
					<div className="navbarWrapper">

		        <Container>
							<div className="navbar">
								<span className="logo">Themed app</span>

								<Button
									type="primary"
									onClick={ this.toggleModal }>Sign in</Button>
							</div>
						</Container>
					</div>

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

export default Navbar;
