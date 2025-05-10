import Link from 'next/link';

const stories = [
  { id: '1', title: 'Migrating to Next.js 14', excerpt: 'Why I switched from React to Next.js' },
  { id: '2', title: 'SSR vs CSR', excerpt: 'A deep dive into rendering strategies' },
];

export default function Stories() {
  return (
    <div className="page">
      <h1>My Dev Stories</h1>
      <div className="stories-list">
        {stories.map((story) => (
          <Link href={`/stories/${story.id}`} key={story.id} className="story-link">
            <h3>{story.title}</h3>
            <p>{story.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}