import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="wrapper relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-3xl font-bold mb-2">404</h2>
        <h3 className="text-5xl font-extrabold mb-4">Not Found</h3>
        <Link href="/" className="text-xl font-medium underline">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
