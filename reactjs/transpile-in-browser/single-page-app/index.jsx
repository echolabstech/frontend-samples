class Home extends React.Component {
	render() {
		return (
			<div>
				<h2>Home</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam iusto pariatur quos dicta aspernatur soluta minus, eveniet voluptates eaque delectus quo, possimus sunt, voluptatibus. Unde magnam tempora et! Eum, nemo!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam iusto pariatur quos dicta aspernatur soluta minus, eveniet voluptates eaque delectus quo, possimus sunt, voluptatibus. Unde magnam tempora et! Eum, nemo!
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam iusto pariatur quos dicta aspernatur soluta minus, eveniet voluptates eaque delectus quo, possimus sunt, voluptatibus. Unde magnam tempora et! Eum, nemo!
				</p>
			</div>
		);
	}
}

class Stuff extends React.Component {
	render() {
		return (
			<div>
				<h2>Stuff</h2>
				<p>Get down on it...</p>
			</div>
		);
	}
}

class Contact extends React.Component {
	render() {
		return (
			<div>
				<h2>Contact</h2>
				<p>How you gonna know if you really don't want to dance...</p>
			</div>
		);
	}
}

const [Router, Route, Link] = [ReactRouter.Router, ReactRouter.Route, ReactRouterDOM.Link];
const browserHistory = History.createBrowserHistory();
class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<div>
					<h1>Simple SPA</h1>
					<ul className='header'>
						<li><Link to='/single-page-app/'>Home</Link></li>
						<li><Link to='/single-page-app/stuff'>Stuff</Link></li>
						<li><Link to='/single-page-app/contact'>Contact</Link></li>
					</ul>
					<div className='content'>
						<Route exact path='/single-page-app/' component={Home} />
						<Route exact path='/single-page-app/stuff' component={Stuff} />
						<Route exact path='/single-page-app/contact' component={Contact} />
					</div>
				</div>
  			</Router>
		);
	}
}

const mountPoint = document.querySelector('#mount-point');
ReactDOM.render(
	<App />,
	mountPoint
);
