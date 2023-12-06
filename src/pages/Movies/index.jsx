import api from 'api/api';
import useRequest from 'hooks/useRequest';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'styles/components.styled';
import SearchForm from 'components/MoviesSearch/SearchForm';
import MoviesSearch from 'components/MoviesSearch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { isLoading, setIsLoading, error, setError } = useRequest();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    const searchParams = search.toString();
    if (searchParams) {
      setIsLoading(true);
      setError(null);
      const searchMovies = async () => {
        try {
          const { results: movies } = await api.searchMovies(searchParams);
          setMovies(movies);
        } catch ({ message }) {
          setError(message);
        } finally {
          setIsLoading(false);
        }
      };
      searchMovies();
    }
  }, [search, setError, setIsLoading]);

  const handleSearch = query => {
    if (query) setSearch(`query=${query}`);
  };

  return (
    <Container>
      <SearchForm handleSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movies.length > 0 && <MoviesSearch movies={movies} search={search} />
      )}
    </Container>
  );
};

export default Movies;
