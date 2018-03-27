import React, { Component } from 'react';
import Post from '../../components/post/Post';

class PostContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCommentsVisible: false,
		}
		this.onCommentsClicked = this.onCommentsClicked.bind(this);
	}

	onCommentsClicked(postId){
		const { onCommentsClicked } = this.props;
		this.setState((prevState) => {
			if (!prevState.isCommentsVisible){
				onCommentsClicked(postId);
			}
			return {isCommentsVisible: !prevState.isCommentsVisible};
		});
	}

	render() {
		const { userData, postData, comments} = this.props;

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

export default PostContainer;
