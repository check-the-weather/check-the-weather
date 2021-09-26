import wretch from 'wretch';

// Sets up a wretch request that can be used for authenticated requests internally
function authedRequester(url) {
  const jwt = localStorage.token
  
  return wretch(url).accept('application/json').headers({ token: jwt })
}

// Sets up a wretch request for unathenticated requests (external API's)
function unauthedRequester(url) {
  return wretch(url).accept('application/json')
}

export { authedRequester, unauthedRequester };