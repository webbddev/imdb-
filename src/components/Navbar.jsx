'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const links = [
  { title: 'Trending', param: 'fetchTrending' },
  { title: 'Top Rated', param: 'fetchTopRated' },
];

export default function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='flex dark:bg-teal-700 bg-teal-400 p-4 lg:text-lg justify-center gap-6 tracking-wide'>
        {links.map((link, index) => (
          <div key={index}>
            {/* Dynamically style the links based on the 'genre' query parameter value */}
            <Link
              className={`hover:text-amber-500 font-semibold ${
                genre === link.param &&
                'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
              }`}
              href={`/?genre=${link.param}`}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
