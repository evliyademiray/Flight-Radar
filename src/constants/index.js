export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "35.197795",
    bl_lng: "26.151043",
    tr_lat: "42.235147",
    tr_lng: "45.193447",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "4a33083243mshd021647818f6392p16c21cjsne7d5015d461b",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
export const options2 = {
  headers: {
    "X-RapidAPI-Key": "4a33083243mshd021647818f6392p16c21cjsne7d5015d461b",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
