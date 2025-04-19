import { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const truncateTitle = (title, maxLength = 22) => {
    return title.length <= maxLength ? title : title.slice(0, maxLength) + '...';
  };

  return (
    <Link to={`/movie/${movie.imdbID}`} className="block transition-transform hover:scale-[1.02]">
      <div className="backdrop-blur-sm bg-white/10 dark:bg-black/30 border border-white/20 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center text-center p-4 space-y-4 transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-md">
        
        <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
          {!imageError && movie.Poster !== 'N/A' ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="object-cover w-full h-full"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white">
              <span className="text-sm opacity-70">Image Unavailable</span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-base md:text-lg font-bold text-white drop-shadow-sm">
            {truncateTitle(movie.Title)}
          </h3>
          <p className="text-sm text-gray-300">{movie.Year}</p>
        </div>

        <div className="bg-yellow-300 text-black text-xs font-medium px-3 py-1 rounded-full">
          ⭐ {movie.imdbRating || 'N/A'}
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
