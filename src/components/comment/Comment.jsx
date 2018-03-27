import React from 'react';
import profileImage from '../../images/download.png';

const Comment = ({data}) => (
	<div className="comment">
		<div className="comment__user-profile">
			<img src={profileImage} alt="profilePicture"/>
			<div>
				<h4>
					{data.name}
				</h4>
				<h5>
					{data.email}
				</h5>
			</div>
		</div>
		<p>
			{data.body}
		</p>
	</div>
);

export default Comment;
