import React, { Component } from 'react';

import Post from '../../components/post/Post';

class App extends Component {
	render() {
		return (
			<div>
				<h1>
					App Header
				</h1>
				<Post/>
			</div>
		);
	}
}

export default App;
