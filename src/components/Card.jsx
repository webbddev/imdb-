import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-teal-400 sm:shadow-md border sm:border-gray-200 sm:m-2 dark:border-gray-700 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={result.original_title}
          width={500}
          height={500}
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
        />
      </Link>
      <div className='p-2'>
        <h3 className='text-ld font-bold truncate dark:text-slate-200'>
          {result.title || result.original_name}
        </h3>
        <p className='line-clamp-2 text-sm md:text-md mb-2 dark:text-slate-100'>
          {result.overview}
        </p>
        <p className='text-sm flex items-center'>
          Released: {result.release_date || result.first_air_date}
          <div className='flex text-amber-600 dark:text-amber-400'>
            <FiThumbsUp className='h-5 mr-1 ml-3 ' />
            {result.vote_count}
          </div>
        </p>
      </div>
    </div>
  );
}
