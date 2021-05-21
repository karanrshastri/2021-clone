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
			<p>This month was about goodbyes. I spent a lot of time reflecting on my work and the past few months. I'm grateful and proud of what I've accomplished and can't wait to see whats next. Until then.</p>
			<p>What I've been listening/reading/watching in April 2021.</p>

			

			<ul>
				<li>Music: More life (Drake), Culture II (Migos), Lush (Snail Mail), Superclean Vol. II (The Marias), Insomnia (Skepta)</li>
				<li>TV: New Girl, Futurama</li>
				<li>Film: Full Metal Jacket</li>
				<li>Books: A Little Life, Remote, Research Practice</li>
			</ul>

		
		`,
  },

  {
    title: 'May 2021',
    slug: 'May 2021',
    html: `
		<p>What I've been listening/reading/watching in May 2021.</p>

<ul>
				<li>Music: Oncle Jazz (Men I Trust), Yasuke (Flying Lotus), Pray for Paris (Westside Gunn), If Beale Street Could Talk OST (Nicholas Britell), This Thing of Ours (The Alchemist), My Beautiful Dark Twisted Fantasy (Kanye West) </li>
				<li>TV: Jerrod Carmichael's Home Videos</li>
				<li>Film: Promising Young Woman</li>
				<li>Books: Billion Dollar Loser, Sprint</li>
			</ul>

		`,
  },

  
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
