import GenreSection from './GenreSection';
import HeroSection from './HeroSection';
import MovieDetails from './ModalDetails';
import MovieSlider from './MovieSlider';

const MovieContent = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950">
        <MovieSlider />
        <GenreSection />
      </div>
      {/* conditional rendering   */}
      {/* <MovieDetails /> */}
    </>
  );
};

export default MovieContent;
