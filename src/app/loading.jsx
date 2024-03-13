import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex justify-center mt-14'>
      <Image src='/spinner.svg' alt='loading...' width={70} height={70} />
    </div>
  );
}
