import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constants";
import axios from "axios";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  //1-API isteği at
  const res = await axios.request(options);

  //2-Gelen veriyi formatla
  const refinedData = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
  }));

  //3-Veriyi slice'a aktar.
  return refinedData
});
