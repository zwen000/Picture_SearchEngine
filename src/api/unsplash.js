import axios from "axios";

//"axios.create" creates an instance of the Axios client with a couple of defaulted properties
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Opoepv22dLpTlpkf9sk10Bh-gHUiRKB13OYR0A1MaA8",
  },
});


