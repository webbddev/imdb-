import Results from '@/components/Results';
import { Suspense } from 'react';
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTrending' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.API_TMDB_KEY}&language=en-US&page=1`
    // { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Results results={results} />
      </div>
    </Suspense>
  );
}
