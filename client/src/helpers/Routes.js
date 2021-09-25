
const dashboard = () => ({
  router: '/',
  link: () => '/',
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
  dashboard,
  login,
  register,
};

export default Routes;