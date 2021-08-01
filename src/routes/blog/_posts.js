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
		slug: 'april-2021',
		html: `
			<p>This month was about goodbyes. I spent a lot of time reflecting on my work and the past few months. I'm grateful and proud of what I've accomplished and can't wait to see whats next. Until then.</p>
			<p>What I've been listening/reading/watching in April 2021.</p>

			

			<ul>
				<li>Music: More life (Drake), Culture II (Migos), Lush (Snail Mail), Superclean Vol. II (The Marias), Insomnia (Skepta)</li>
				<li>TV: New Girl, Futurama</li>
				<li>Film: Full Metal Jacket</li>
				<li>Books: A Little Life, Remote, Research Practice</li>
			</ul>


			
		`
	},

	{
		title: 'May 2021',
		slug: 'may-2021',
		html: `
			<p>Started a new job this month which I'm very, very excited about. A lot going on this month. Vaccine (first shot), moving apartments are also major milestones. Feels likes the perfect start to Spring/Summer. Until then.</p>
		<p>What I've been listening/reading/watching in May 2021.</p>

<ul>
				<li>Music: Oncle Jazz (Men I Trust), Yasuke (Flying Lotus), Pray for Paris (Westside Gunn), If Beale Street Could Talk OST (Nicholas Britell), This Thing of Ours (The Alchemist), My Beautiful Dark Twisted Fantasy (Kanye West) </li>
				<li>TV: Jerrod Carmichael's Home Videos</li>
				<li>Film: Promising Young Woman</li>
				<li>Books: Billion Dollar Loser, Sprint</li>
			</ul>
			
		`
	},

	{
		title: 'June 2021',
		slug: 'june-2021',
		html: `
			<p>Starting to arrange and curate pieces for new apartment. Nothing much to add, bust with work, as usual. Until then.</p>
			
			<ul> 
				<li>Music: Still Striving (A$AP Ferg), Call Me If You Get Lost (Tyler, The Creator), Pray for Haiti (Mach-Hommy, Cinema (The Marias) </li>
				<li>TV: Succession (Rewatching)</li>
				<li>Film: None </li>
				<li>Books: Stoner</li>
			</ul>

			
		`
	}
{
		title: 'July 2021',
		slug: 'july-2021',
		html: `
			<p>Things are opening-up in Toronto. Spending some quality time with friends. I need to consider fixing my bike, the gears seem a bit off. Month started off a bit wonky but I feel like I'm getting my groove back! Started climbing again, hopefully I maintain the momentum. Until next time.</p>
			
			<ul>
				<li>Music: Vince Staples (Vince Staples), The Asymptotical World (Yves Tumor), Comedown Machine (The Strokes) </li>
				<li>TV: Seinfeld, Ted Lasso</li>
				<li>Film: Shiva Baby</li>
				<li>Books: Stoner</li>
			</ul>

			
		`
	}
	
	
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
