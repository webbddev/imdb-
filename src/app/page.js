import Results from '@/components/Results';

const API_KEY = process.env.API_TMDB_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${
        genre === 'fetchTrending' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
        {/* {results.map((result) => (
          <div key={result.id}>
            <h2>{result.original_title}</h2>
          </div>
        ))} */}
      </div>
    );
  } catch (error) {
    console.error('An error occurred:', error);
    return (
      <div>
        <p>An error occurred while fetching data.</p>
      </div>
    );
  }
}
