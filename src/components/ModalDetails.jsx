const MovieDetails = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[900hv] overflow-hidden">
        {/* close button  */}
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600">
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
            />
          </svg>
        </button>
        {/* conditional rendering  */}
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse">
            <div className="w-16 h-16 border border-purple-500 border-t-transparent rounded-full animate-spin">
              <p>Loading Details.....</p>
            </div>
          </div>
          {/* If  */}
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <svg
                class="w-16 h-16 text-red-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4">
                Failed to load movie details
              </h2>
              <p className="mt-2 text-neutral-400">Error</p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
                Close
              </button>
            </div>
          </div>
          {/* Else  */}
          <div>
            {/* backdrop header  */}
            <div className="relative h-72 md:h-96 w-full">
              {/* conditional rendering  */}
              <img src="" alt="" className="w-full h-full object-cover" />
              {/* Else */}
              <div className="w-full h-full bg-neutral-700"></div>
              {/* Gradient Overlay  */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>
            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                {/* poster  */}
                <div className="w-32 md:w-64 shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hi  shadow-lg border border-neutral-400">
                    {/* conditional rendering  */}
                    <img src="" alt="" className="w-full h-auto" />
                    {/* else  */}
                    <div className="w-full aspect-2/3 bg-neutral-700 flex items-center items-center ">
                      No Poster Available
                    </div>
                  </div>
                </div>
                {/* Movie Info  */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Movie Title
                    {/* conditional rendering  */}
                    <span className="text-neutral-400 font-normal ml-2"></span>
                  </h1>
                  {/* Rating and other meta  */}
                  <div className="flex flex-wrap gap-x-4 gapy-2 text-sm items-center">
                    {/* conditional rendering  */}
                    <div className="flex items-center">
                      <svg
                        class="w-5 h-5 text-yellow-400 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      <span className="ml-1 font-medium">
                        Movies Vote Average
                      </span>
                    </div>
                    {/* Else  */}
                    <span className="text-neutral-300"> Movie Runtime </span>
                    {/* conditional rendering  */}
                    <span className="text-neutral-300">Movie Release Date</span>
                    <span className="bg-red-500/90 text-white text-xs px-2 py-0.5 rounded">
                      18+
                    </span>
                  </div>
                  {/* Genre  */}
                  {/* conditional Rendering  */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                      Genre Name
                    </span>
                  </div>
                  {/* Tagline  */}
                  <div className="mt-4 text-neutral-400 italic">
                    Movie Tagline
                  </div>
                  {/* Overview  */}
                  <div className="mt-6">
                    <h2 className="text-white mb-2 text-xl font-semibold">
                      Overview
                    </h2>
                    <p className="text-neutral-300">Movie Overview </p>
                  </div>
                  {/* Button  */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white x-6 py-6 rounded-lg flex items-center gap-2 transition-colors">
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      Watch Now
                    </button>
                    <div className="bg-purple-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      Add to watch list
                    </div>
                  </div>
                </div>
                {/* additional details  */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h1 className="text-xl font-semibold text-white mb-4">
                      Details
                    </h1>
                    <div className="space-y-4">
                      {/* conditional rendering  */}
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Production Companies
                        </h3>
                        <p className="text-white">Movie production countries</p>
                      </div>

                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Language
                        </h3>
                        <p className="text-white">Language</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Movie Budget
                        </h3>
                        <p className="text-white">Movie Budget</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Review
                        </h3>
                        <p className="text-white">Review</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Status
                        </h3>
                        <p className="text-white">Status</p>
                      </div>
                      <div className="text-neutral-400 text-sm mb-1">
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Original Language
                        </h3>
                        <p className="text-white">Original Language</p>
                      </div>
                    </div>
                  </div>
                  {/* Right column  */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Rating
                    </h2>
                    {/* conditional Render  */}
                    <div className="flex items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-purple-50 flex items-center justify-center mr-4">
                        <span className="text-3xl font-bold">
                          Movie Average
                        </span>
                      </div>
                      <div>
                        <p className="text-neutral-300">Votes</p>
                        <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                          <div className="bg-purple-600 h-2.5 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* else  */}
                    <p className="text-neutral-400">No Rating Available</p>
                  </div>
                  {/* IMDB and home page link  */}
                  <div className="mt-8 space-y-4">
                    {/* conditional rendering  */}
                    <a
                      href=""
                      className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      Official Website
                    </a>
                    {/* conditional rendering  */}
                    <a
                      href=""
                      className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                      </svg>
                      View On IMDB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
