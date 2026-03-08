const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Movies Backdrop  */}
      <div
        className={`absolute inset-0 bg-neutral-900 bg-cover bg-center transition-all duration-700`}
      >
        {/* Gradient overlay  */}
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20" />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900 to-transparent" />
      </div>
      {/* Content  */}
      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Movies info  */}
          <div className={`transition-all duration-700`}>
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-purple-500/50 text-white text-sm font-semibold px-2 py-1 rounded-sm">
                FEATURED
              </span>
              {/* conditional rendering  */}
              <div className="flex items-center">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>

                <span>Movie Voting Average</span>
              </div>
              {/* conditional rendering close  */}
              <span className="text-neutral-400">.</span>
              <span className="text-neutral-300 text-sm">
                Movie Release Date
              </span>
              {/* conditional rendering  */}
              <>
                <span className="text-neutral-400">.</span>
                <span className="bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5">
                  18+
                </span>
              </>
              {/* conditional rendering close  */}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Movie Title
            </h1>
            <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
              Movie Overview
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                Watch Now
              </button>
              <button className="bg-neutral-800/50 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {/* conditional rendering  */}
        <button className={`h-1.5 rounded-full transition-all`}></button>
      </div>
    </div>
  );
};

export default HeroSection;
