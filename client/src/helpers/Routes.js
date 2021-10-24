const overview = () => ({
  router: '/',
  link: () => '/',
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
  community,
  login,
  register,
};

export default Routes;