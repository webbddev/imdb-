import Image from 'next/image';

export default async function MoviePage({ params: { movieId } }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_TMDB_KEY}`
  );
  const movie = await res.json();

  return (
    <div className='w-full'>
      <div className='flex flex-col content-center md:flex-row p-4 md:pt-8 max-w-7xl mx-auto md:space-x-6'>
        {/* Displaying the movie's backdrop or poster image */}
        <Image
          src={`
        https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }
        `}
          alt={movie.title}
          width={500}
          height={300}
          className='rounded-lg border-4 border-teal-600'
          style={{ maxWidth: '100%', height: '100%' }}
        />
        {/* Displaying the movie's title, overview, release date, and rating */}
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}
