// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: 'April 2021',
    slug: 'April 2021',
    html: `
			<p>What I've been listening/reading/watching in April 2021.</p>

			

			<ul>
				<li>Music: More life (Drake), Culture III (Migos), Lush (Snail Mail), Superclean Vol. II (The Marias), Insomnia (Skepta)</li>
				<li>TV: New Girl, Futurama</li>
				<li>Film: Full Metal Jacket</li>
				<li>Books: A Little Life, Remote, Research Practice</li>
			</ul>

		
		`,
  },

  {
    title: 'placeholder',
    slug: 'how-to-use-sapper',
    html: `
			


		`,
  },

  
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
