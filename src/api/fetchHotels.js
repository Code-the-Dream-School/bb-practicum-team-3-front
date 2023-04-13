export default async function fetchHotels(searchData) {
  const searchParams = new URLSearchParams(searchData);
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/booking/hotelsbylocation?${searchParams}`,
    {
      method: 'GET',

      credentials: 'include',
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
