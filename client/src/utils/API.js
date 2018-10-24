import axios from "axios";

export default {
  getService: function(){
    return axios.get("/api/service/all");
  },
  getZipCode: function(){
    return axios.get("/api/location/dataZip");
  }
};
