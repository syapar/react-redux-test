import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/Post';
import { fetchUsers } from '../../actions/userActions';
import { fetchPosts } from '../../actions/postActions';
import { getUserById, getIsUserRequested, getPostById, getIsPostsRequested, getPosts, getCurrentPage} from '../../reducers';

class App extends Component {
	constructor(props) {
		super(props);
		const { fetchUsers, fetchPosts } = this.props;
		fetchUsers();
		fetchPosts(2);
	}

	render() {
		const { isUserRequested, postById, isPostsRequested, posts, currentPage} = this.props;

		if(isUserRequested || isPostsRequested || !posts){
			return (
				<div>
					Loading...
				</div>
			);
		}

		return (
			<div>
				<h1>
					CURRENT PAGE => {currentPage}
				</h1>
				{posts.map((postId) => <Post data={postById(postId)} key={postId}/>)}
				{JSON.stringify(posts)}
			</div>
		);
	}
}

const mapStateToProps =  (state) => ({
	userById:(id) => getUserById(state,id),
	isUserRequested:getIsUserRequested(state),
	postById:(id) => getPostById(state,id),
	isPostsRequested:getIsPostsRequested(state),
	posts:getPosts(state,2),
	currentPage:getCurrentPage(state),
});

const mapDispatchToProps = {
	fetchUsers,
	fetchPosts,
};

export default App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
