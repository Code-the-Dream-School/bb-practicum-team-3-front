export default async function fetchRooms(searchData) {
  const searchParams = new URLSearchParams(searchData);

  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/booking/hotelrooms?${searchParams}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
