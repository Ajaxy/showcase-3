import cookies from 'js-cookie';

export function setCredentials(credentials) {
  cookies.set('credentials', credentials);
}

export function getCredentials() {
  return cookies.getJSON('credentials');
}

export function hasCredentials() {
  return !!getCredentials();
}

export function deleteCredentials() {
  return cookies.remove('credentials');
}