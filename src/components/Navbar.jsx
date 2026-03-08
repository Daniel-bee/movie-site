const Navbar =
  () => {
    return (
      <header
        className={`z-50 flex w-full transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center"
              >
                <span className="text-3xl font-bold text-purple-500">
                  Cine{' '}
                  <span className="text-white">
                    Mix
                  </span>
                </span>
              </a>
            </div>
            {/* Desktop navigation */}
            <nav className="hidden space-x-8 md:flex">
              <a
                href="#"
                className="font-medium text-white transition-all hover:text-purple-400"
              >
                Home
              </a>
              <a
                href="#trending"
                className="font-medium text-white transition-all hover:text-purple-400"
              >
                Trending
              </a>
              <a
                href="#popular"
                className="font-medium text-white transition-all hover:text-purple-400"
              >
                Popular
              </a>
              <a
                href="#top-rated"
                className="font-medium text-white transition-all hover:text-purple-400"
              >
                Top
                Rated
              </a>
            </nav>
            {/* Desktop search */}
            <div className="search-container relative hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search movies...."
                  className="w-48 rounded-full bg-neutral-800/50 px-4 py-2 text-sm text-white transition-all duration-300 focus:w-64 focus:ring-2 focus:ring-purple-500/50 focus:outline-none"
                />
                {/* conditional rendering */}
                <div className="absolute top-2.5 right-3">
                  <svg
                    className="h-4 w-4 text-neutral-400"
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
                  className="absolute top-3 right-3 h-4 w-4 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={
                      2
                    }
                    d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>

              {/* search result dropdown conditional rendering */}

              <div className="absolute z-50 mt-2 w-72 overflow-hidden rounded-lg bg-neutral-800">
                <ul className="divide-y divide-neutral-700">
                  <li className="hover:bg-neutral-700">
                    <button className="flex w-full items-center p-3 text-left">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-neutral-700">
                        {/* conditional rendering */}
                        <img
                          src=""
                          alt=""
                          className="h-full w-full object-cover"
                        />
                        {/* else */}
                        <div className="test-sm flex h-full w-full items-center justify-center text-neutral-500">
                          No
                          Image
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="truncate text-sm font-medium text-white">
                          Movie
                          Title
                        </p>
                        <p className="text-xs text-neutral-400">
                          Movie
                          Release
                          Date
                        </p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              {/* conditional rendering  */}
              <div className="absolute z-50 mt-2 w-72 overflow-hidden rounded-lg bg-neutral-800 shadow-lg">
                <div className="p-4 text-center text-sm text-neutral-400">
                  No
                  Movies
                  found
                  matching....
                </div>
              </div>
            </div>
            <button className="text-white md:hidden">
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
                  strokeWidth={
                    2
                  }
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
                  strokeWidth={
                    2
                  }
                  d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          {/* mobile navigation conditional rendering  */}
          <div className="mt-4 space-y-4 pb-4 md:hidden">
            <a
              href="#"
              className="block text-white hover:text-purple-400"
            >
              Home
            </a>
            <a
              href="#trending"
              className="font-medium text-white transition-all hover:text-purple-400"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="font-medium text-white transition-all hover:text-purple-400"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="font-medium text-white transition-all hover:text-purple-400"
            >
              Top
              Rated
            </a>
            <div className="search-container relative mt-3">
              <input
                type="text"
                placeholder="search movies...."
                className="w-48 rounded-full bg-neutral-800/50 px-4 py-2 text-sm text-white transition-all duration-300 focus:w-64 focus:ring-2 focus:ring-purple-500/50 focus:outline-none"
              />
              {/* conditional rendering */}
              <div className="5 absolute top-2 right-3">
                <svg
                  className="h-4 w-4 text-neutral-400"
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
                    strokeWidth={
                      2
                    }
                    d="M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                {/* mobile search result  conditional rendering*/}
                <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg bg-neutral-800">
                  <ul className="divide-y divide-neutral-700">
                    {/* map method  */}
                    <li className="hover:bg-neutral-700">
                      <button className="flex w-full items-center p-3 text-left">
                        <div className="h-14 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-700">
                          {/* conditional rendering  */}
                          <img
                            src=""
                            alt=""
                            className="h-full w-full object-cover"
                          />
                          {/* else  */}
                          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                            No
                            Image
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-medium truncate text-sm text-white">
                            Movie
                            Title
                          </p>
                          <p className="text-sm text-neutral-400">
                            Movie
                            release
                            date
                          </p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
                {/* conditional rendering  */}
                <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg bg-neutral-800 shadow-lg">
                  <div className="p-4 text-center text-sm text-neutral-400">
                    No
                    Movies
                    found
                    matching....
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

export default Navbar
