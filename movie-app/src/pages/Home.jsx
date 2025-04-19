import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (searchTerm = 'popular', pageNum = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&page=${pageNum}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
      if (response.data.Search) {
        setMovies((prev) => (pageNum === 1 ? response.data.Search : [...prev, ...response.data.Search]));
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies('popular', 1);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setMovies([]);
      setPage(1);
      fetchMovies(search, 1);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(search || 'popular', nextPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0f0f11] dark:to-[#1a1a1d] text-[#222] dark:text-[#eee] font-[Inter] transition-colors duration-300">
      <header className="backdrop-blur bg-white/10 dark:bg-white/5 border-b border-gray-300/20 dark:border-gray-700/30 sticky top-0 z-10 shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">CineGlass</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <form onSubmit={handleSearch} className="mb-10">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find your next movie..."
              className="w-full bg-white dark:bg-[#111418] text-sm sm:text-base text-gray-700 dark:text-gray-100 border border-transparent dark:border-[#2a2d33] rounded-full px-5 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
          </div>
        </form>

        {movies.length === 0 && !loading && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
            <p className="text-xl">😔 No movies found</p>
            <p className="text-sm">Try searching something else</p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie, index) => (
            <div key={movie.imdbID} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {loading && (
          <div className="text-center my-10 text-cyan-600 dark:text-cyan-400 animate-pulse">
            Loading movies...
          </div>
        )}

        {!loading && movies.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg transition-all"
            >
              Load More 🎬
            </button>
          </div>
        )}
      </main>

    </div>
  );
}

export default Home;
