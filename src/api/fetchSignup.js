export default async function fetchSignup(signUpData) {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(signUpData),
  });
  console.log(JSON.stringify(signUpData));

  const returnMessage = await res.json();
  return returnMessage;
}
