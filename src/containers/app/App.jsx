import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostContainer from '../post/PostContainer';
import Paging from '../../components/paging/Paging';
import { fetchUsers } from '../../actions/userActions';
import { fetchPosts } from '../../actions/postActions';
import { getIsUserRequested, getIsPostsRequested, getPosts, getCurrentPage} from '../../reducers';

class App extends Component {
	constructor(props) {
		super(props);
		const { fetchUsers, fetchPosts } = this.props;
		fetchUsers();
		fetchPosts(1);
		this.onPageClicked = this.onPageClicked.bind(this);
	}

	getPostsElements(){
		const {posts, isUserRequested, isPostsRequested} = this.props;
		if(isUserRequested || isPostsRequested || !posts){
			return (
				<div className="loading-container">
					Loading...
				</div>
			);
		}
		return posts.map(
			(postId) => {
				const key = `post-${postId}`;
				return (
					<PostContainer postId={postId} key={key}
						onCommentsClicked={this.onCommentsClicked}
					/>
				);
			}
		);
	}

	 onPageClicked(index) {
		 const { fetchPosts } = this.props;
		 fetchPosts(index);
	}

	render() {
		const {currentPage} = this.props;
		return (
			<div>
				<h1>
					TEST APPLICATION
				</h1>
				<Paging
					currentPage={currentPage}
					onPageClicked={this.onPageClicked}
					lastPageIndex={10}
				/>
				{this.getPostsElements()}
			</div>
		);
	}
}

const mapStateToProps =  (state) => ({
	isUserRequested:getIsUserRequested(state),
	isPostsRequested:getIsPostsRequested(state),
	posts:getPosts(state),
	currentPage:getCurrentPage(state),
});

const mapDispatchToProps = {
	fetchUsers,
	fetchPosts,
};

export const AppBase = App;

export default App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


