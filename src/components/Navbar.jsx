const Navbar = () => {
  return (
    <header className={`flex w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-purple-500 font-bold text-3xl">
                Cine <span className="text-white">Mix</span>
              </span>
            </a>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#trending"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Top Rated
            </a>
          </nav>
          {/* Desktop search */}
          <div className="hidden md:block relative search-container">
            <div className="relative">
              <input
                type="text"
                placeholder="search movies...."
                className="bg-neutral-800/50 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              {/* conditional rendering */}
              <div className="absolute top-2.5 right-3">
                <svg
                  className="w-4 h-4 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 12h4zm2 0 5.291A7.962 7.962 0 01412H0c0 3.04 1.135 5.824 3 7.93813-2.647z"
                  ></path>
                </svg>
              </div>
              {/* else */}
              <svg
                className="h-4 w-4 absolute right-3 top-3 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            {/* search result dropdown conditional rendering */}

            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg overflow-hidden z-50">
              <ul className="divide-y divide-neutral-700">
                <li className="hover:bg-neutral-700">
                  <button className="flex items-center p-3 w-full text-left">
                    <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden shrink-0">
                      {/* conditional rendering */}
                      <img
                        src=""
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      {/* else */}
                      <div className="w-full h-full flex items-center justify-center text-neutral-500 test-sm">
                        No Image
                      </div>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white truncate">
                        Movie Title
                      </p>
                      <p className="text-xs text-neutral-400">
                        Movie Release Date
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            {/* conditional rendering  */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              <div className="p-4 text-center text-neutral-400 text-sm">
                No Movies found matching....
              </div>
            </div>
          </div>
          <button className="md:hidden text-white">
            {/* conditional rendering  */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            {/* else  */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        {/* mobile navigation conditional rendering  */}
        <div className="mt-4 pb-4 space-y-4 md:hidden">
          <a href="#" className="block text-white hover:text-purple-400">
            Home
          </a>
          <a
            href="#trending"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Trending
          </a>
          <a
            href="#popular"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Popular
          </a>
          <a
            href="#top-rated"
            className="text-white hover:text-purple-400 transition-all font-medium"
          >
            Top Rated
          </a>
          <div className="relative mt-3 search-container">
            <input
              type="text"
              placeholder="search movies...."
              className="bg-neutral-800/50 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            {/* conditional rendering */}
            <div className="absolute right-3 top-2 5">
              <svg
                className="w-4 h-4 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 12h4zm2 0 5.291A7.962 7.962 0 01412H0c0 3.04 1.135 5.824 3 7.93813-2.647z"
                ></path>
              </svg>
              {/* else  */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              {/* mobile search result  conditional rendering*/}
              <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  {/* map method  */}
                  <li className="hover:bg-neutral-700">
                    <button className="flex items-center p-3 w-full text-left">
                      <div className="w-10 h-14 bg-neutral-700 rounded-full overflow-hidden shrink-0">
                        {/* conditional rendering  */}
                        <img
                          src=""
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        {/* else  */}
                        <div className="w-full h-full flex items-center justify-center text-sm text-neutral-500">
                          No Image
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm text-medium text-white truncate">
                          Movie Title
                        </p>
                        <p className="text-sm text-neutral-400">
                          Movie release date
                        </p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              {/* conditional rendering  */}
              <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-neutral-400 text-sm">
                  No Movies found matching....
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
