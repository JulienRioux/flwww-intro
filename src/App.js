import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SigninModal from "./components/SigninModal";
import "./App.css";

// Import the flwww Button and message
import { Container, Row, Col, Button } from "flwww";

const App = (props) => {
	return (
		<div>
			
		  <Navbar />

			<Container>
				<div className="">
				  <Row>
					  <Col grid="md-6">
						  <div className="mainContent">
								<h1>Let's customize your app!</h1>
								<p style={{ marginTop: "-.8rem", opacity: .7 }}>Getting your app the color you want is really easy using the ThemeCustomization component. Click Sign in to see it in action ☝️</p>
								<a
								  href="https://ui.flawwwless.com/customize-theme"
									target="_blank"
									rel="noopener noreferrer">
									<Button
									  outlined
									  // round
									  type="primary">
										See documentation
									</Button>
								</a>
							</div>

						</Col>

						<Col grid="md-6">
							<div className="mainContent">
								<img src="https://images.unsplash.com/photo-1500042221431-070712d92035?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="colorImg" alt="Photo by Daniele Levis Pelusi"/>

								<div className="imageLinkDiv">
									<a
									className="imageLink"
									href="https://unsplash.com/photos/5ycZbC_V3qA"
									target="_blank"
									rel="noopener noreferrer">Photo by Daniele Levis Pelusi</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	)
}

export default App;
