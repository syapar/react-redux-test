import React from 'react';

const Post = (data) => (
    <div className="post">
        <p>
			{JSON.stringify(data)}
        </p>
    </div>
);

export default Post;
