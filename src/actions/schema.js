import { schema } from 'normalizr';

export const posts = new schema.Entity('posts');
export const arrayOfPosts = new schema.Array(posts);

export const users = new schema.Entity('users');
export const arrayOfUsers = new schema.Array(users);

export const comments = new schema.Entity('comments');
export const arrayOfComments = new schema.Array(comments);