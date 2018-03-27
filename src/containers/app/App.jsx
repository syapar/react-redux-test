import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostContainer from '../post/PostContainer';
import Paging from '../../components/paging/Paging';
import { fetchUsers } from '../../actions/userActions';
import { fetchPosts } from '../../actions/postActions';
import { fetchComments } from '../../actions/commentActions';
import { getUserById, getIsUserRequested, getPostById, getIsPostsRequested, getPosts, getCurrentPage, getComments, getCommentById} from '../../reducers';

class App extends Component {
	constructor(props) {
		super(props);
		const { fetchUsers, fetchPosts } = this.props;
		fetchUsers();
		fetchPosts(1);
		this.onPageClicked = this.onPageClicked.bind(this);
		this.onCommentsClicked = this.onCommentsClicked.bind(this);
	}

	getPostsElements(){
		const {userById, postById, posts, isUserRequested, isPostsRequested, commentsByPostId, commentById} = this.props;

		if(isUserRequested || isPostsRequested || !posts){
			return (
				<div className="loading-container">
					Loading...
				</div>
			);
		}

		return posts.map(
			(postId) => {
				const postData = postById(postId);
				const userData = userById(postData.userId);
				let comments;
				const commentArray = commentsByPostId(postId);
				if(commentArray && commentArray.length>0) comments = commentsByPostId(postId).map((commentId) => commentById(commentId));
				const key = `post-${postId}`;
				return (
					<PostContainer
						userData={userData}
						postData={postData}
						comments={comments}
						key={key}
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

	onCommentsClicked(postId) {
		const { fetchComments } = this.props;
		fetchComments(postId);
	}

	render() {
		const {currentPage} = this.props;

		return (
			<div>
				<h1>
					TEST APPLICATION
				</h1>
				<Paging currentPage={currentPage} onPageClicked={this.onPageClicked}/>
				{this.getPostsElements()}
			</div>
		);
	}
}

const mapStateToProps =  (state) => ({
	userById:(id) => getUserById(state,id),
	isUserRequested:getIsUserRequested(state),
	postById:(id) => getPostById(state,id),
	isPostsRequested:getIsPostsRequested(state),
	posts:getPosts(state),
	currentPage:getCurrentPage(state),
	commentsByPostId:(postId) => getComments(state, postId),
	commentById:(id) => getCommentById(state, id),
});

const mapDispatchToProps = {
	fetchUsers,
	fetchPosts,
	fetchComments,
};

export default App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
