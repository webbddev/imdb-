'use client';

export default function error({ error, reset }) {
  return (
    <main className='text-center mt-10'>
      <h2 className='text-2xl mb-4'>
        Oh No! Something went wrong. Please try again later.
      </h2>
      {/* <p>{error.message}</p> */}
      <button
        onClick={reset}
        className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded'
      >
        Try Again
      </button>
    </main>
  );
}
