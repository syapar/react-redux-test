import React from 'react';
import Comment from '../comment/Comment';
import commentIcon from '../../images/ICN_Comment.svg';
import profileImage from '../../images/download.png';

const Post = ({userData, data, onCommentsClicked, comments, isCommentsVisible}) => (
    <div className={`post ${isCommentsVisible ? 'post--extended' : ``}`}>
		<div className="post__container">
			<div className="post__user-profile">
				<img src={profileImage} alt="profilePicture"/>
				<h2>
					{userData.name}
				</h2>
			</div>
			<h3>
				{data.title}
			</h3>
			<p>
				{data.body}
			</p>
			<div className="post__seperator"/>
			<div className="post__comments-button" onClick={() => onCommentsClicked(data.id)}>
				<img src={commentIcon} alt="commentIcon"/>
				Comments
			</div>
		</div>
		<div>
			{comments && isCommentsVisible ? comments.map((comment) => <Comment key={`comment ${comment.id}`} data={comment}/>) : ''}
		</div>
    </div>
);

export default Post;
