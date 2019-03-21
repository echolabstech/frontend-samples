import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Onboarding from './Onboarding';

class RegistrationAndLogin extends Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/onboarding">
						<p>registration | login</p>
					</Link>
					<Route path="/onboarding" component={Onboarding} />
				</div>
			</Router>
		);
	}
}
export default RegistrationAndLogin;