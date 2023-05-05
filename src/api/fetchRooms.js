export default async function fetchRooms(searchData) {
  const searchParams = new URLSearchParams(searchData);

  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/booking/hotelrooms/?hotelId=58758&checkinDate=2023-08-03&checkoutDate=2023-08-10&adultNumber=2`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
