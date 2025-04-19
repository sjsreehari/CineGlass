import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook to navigate back to the home page

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center my-8 text-indigo-600 dark:text-indigo-400 animate-pulse">Loading...</p>;
  if (!movie) return <p className="text-center my-8 text-gray-600 dark:text-gray-400">Movie not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0f0f11] dark:to-[#1a1a1d] text-[#222] dark:text-[#eee] font-[Inter] transition-colors duration-300">
      {/* Header with Back to Home Button on the same line */}
      <header className="backdrop-blur bg-white/10 dark:bg-white/5 border-b border-gray-300/20 dark:border-gray-700/30 sticky top-0 z-10 shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Title and Back Button on the same line */}
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
              CineGlass
            </h1>
            <button
              onClick={() => navigate('/')} // Navigate back to home page
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl px-6 py-2 hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Back to Home
            </button>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
          {/* Movie Poster */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
              alt={movie.Title}
              className="rounded-xl shadow-lg max-w-full"
            />
          </div>

          {/* Movie Details */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{movie.Title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Released: {movie.Released}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Genre: {movie.Genre}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Rating: ⭐ {movie.imdbRating}</p>

            {/* Glassmorphism Section */}
            <div className="bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{movie.Plot}</p>
              {movie.Website && movie.Website !== 'N/A' && (
                <a
                  href={movie.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Watch Trailer
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
