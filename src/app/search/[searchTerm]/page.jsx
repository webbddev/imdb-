import Results from '@/components/Results';

export default async function SearchPage({ params }) {
  try {
    const searchTerm = params.searchTerm;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_TMDB_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    const results = data.results;
    // console.log(data.results);

    return (
      <div>
        {results.length === 0 ? (
          <h1 className='text-center pt-6'>No results found</h1>
        ) : (
          <Results results={results} />
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <h1 className='text-center pt-6'>Error fetching data</h1>;
  }
}
