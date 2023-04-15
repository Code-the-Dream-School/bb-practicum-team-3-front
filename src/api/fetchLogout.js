export default async function fetchLogout() {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const returnMessage = await res.json();
  return returnMessage;
}
