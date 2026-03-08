const GenreSection = () => {
  return (
    <section className="py-12 bg-neutral-900/50">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Browse by Genre
        </h2>
        {/* genre tabs  */}
        <div className="mb overflow-x-auto pb-2">
          <div className="flex space-x-2 min-2-max">
            {/* conditional rendering  */}
            <button
              className={`px-4 py-2 rounded-md transition-colors text-sm`}
            >
              Genre Name
            </button>
          </div>
        </div>
        {/* conditional rendering  */}
        <div className="h-64 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        {/* else  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {/* map method  */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden bg-neutral-800">
              <div className="aspect-[2/3]">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35 "
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 via-neutral-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4 text-yellow-400 "
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
                      <span className="text-yellow-400 text-sm font-medium">
                        Movie Vote Average
                      </span>
                    </div>
                    <span className="text-neutral-400 text-sm">
                      Movie Release Date
                    </span>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
                    <svg
                      class="w-4 h-4"
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
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-white text-sm font-medium truncate">
              Movie Title
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <svg
                  class="w-3 h-3 text-yellow-400 "
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
                <span className="text-neutral-400 text-xs">
                  Movie Average Rating
                </span>
              </div>
              <span className="text-neutral-500 text-xs">
                Movie Release Date
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
