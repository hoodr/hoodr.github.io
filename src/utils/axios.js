import axios from "axios";

// /spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}
// baseURL: "https://cdn.contentful.com",

// const Axios = () => (
//   axios.create({
//     baseURL: "https://cdn.contentful.com/spaces/ds37lnllczh9/environments/master/",
//     responseType: "json"
//   })
// );
//
// class Request {
//   constructor() {
//     this.axios_client = axios.create({
//       baseURL: "https://raw.githubusercontent.com/hoodr/hoodr.github.io/master/src/",
//       responseType: "json"
//     })
//   };
//
//   makeRequest(url) {
//     return false
//   }
// }

// export default Axios;

export default axios.create({
  baseURL: "https://cdn.contentful.com/spaces/ds37lnllczh9/environments/master/",
  responseType: "json"
});
