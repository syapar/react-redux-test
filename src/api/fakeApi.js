import { get } from '../utils/httpRequests';

let users;
const postLimit=10;


export const fetchPosts = (page) =>
	get('https://jsonplaceholder.typicode.com/posts',{ _start:(page-1)*postLimit, _limit:postLimit});

export const fetchUsers = () =>
	new Promise((resolve, reject)=>{
		if (users) {
			resolve(users);
		}else{
			get('https://jsonplaceholder.typicode.com/users').then((response) => {
				users = response;
				resolve(users);
			}).catch(e => {
				reject(e);
			});
		}
	});
