
const overview = () => ({
  router: '/',
  link: () => '/',
});

const favourites = () => ({
  router: '/favourites',
  link: () => '/favourites',
});

const community = () => ({
  router: '/community',
  link: () => '/community',
});

const login = () => ({
  router: '/login',
  link: () => '/login',
});

const register = () => ({
  router: '/register',
  link: () => '/register',
});

const Routes = {
  overview,
  favourites,
  community,
  login,
  register,
};

export default Routes;