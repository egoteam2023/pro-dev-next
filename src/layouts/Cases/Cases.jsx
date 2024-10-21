import './Cases.scss';
import { ProjectsList } from './data';
import Link from 'next/link';
import Image from 'next/image';
import CasesAnime from './CasesAnime';

const Cases = () => {
  return (
    <div
      id="cases"
      className="container mx-auto bg-transparent py-6 sm:py-8 lg:py-12"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <CasesAnime />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {ProjectsList.map((item) => (
            <Link
              key={`project_${item.id}`}
              href="#"
              className={`border-2 border-solid border-white group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.style}`}
            >
              <Image
                src={item.projectScreen}
                width={650}
                height={300}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
