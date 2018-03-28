import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../../components/post/Post';
import { fetchComments } from '../../actions/commentActions';
import { getUserById, getPostById, getComments, getCommentById} from '../../reducers';

class PostContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCommentsVisible: false,
		};
		this.onCommentsClicked = this.onCommentsClicked.bind(this);
	}

	onCommentsClicked(postId){
		const { fetchComments } = this.props;
		this.setState((prevState) => {
			if (!prevState.isCommentsVisible){
				fetchComments(postId);
			}
			return {isCommentsVisible: !prevState.isCommentsVisible};
		});
	}

	render() {
		const {postId, userById, postById, commentsByPostId, commentById} = this.props;
		const postData = postById(postId);
		const userData = userById(postData.userId);
		let comments;
		const commentArray = commentsByPostId(postId);
		if(commentArray && commentArray.length>0) comments = commentsByPostId(postId).map((commentId) => commentById(commentId));
		return (
			<Post
				userData={userData}
				data={postData}
				comments={comments}
				onCommentsClicked={this.onCommentsClicked}
				isCommentsVisible={this.state.isCommentsVisible}
			/>
		);
	}
}

const mapStateToProps =  (state) => ({
	userById:(id) => getUserById(state,id),
	postById:(id) => getPostById(state,id),
	commentsByPostId:(postId) => getComments(state, postId),
	commentById:(id) => getCommentById(state, id),
});

const mapDispatchToProps = {
	fetchComments,
};

export default PostContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostContainer);
