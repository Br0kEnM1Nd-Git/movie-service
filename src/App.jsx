import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import routes from 'routes';
import PageLoader from 'components/helpers/PageLoader';

const Layout = lazy(() => import('Layout'));
const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const { HOME, MOVIES, MOVIEDETAILS, CAST, REVIEWS } = routes;

export const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={MOVIES} element={<Movie />} />
          <Route path={MOVIEDETAILS} element={<MovieDetails />}>
            <Route path={CAST} element={<Cast />} />
            <Route path={REVIEWS} element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
