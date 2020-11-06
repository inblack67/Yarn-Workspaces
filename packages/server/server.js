const { greetings, getPosts } = require('@yarn/common');

const main = async () => {
	console.log(greetings());
	const posts = await getPosts();
	console.log(posts);
};

main().catch((err) => console.error(err));
