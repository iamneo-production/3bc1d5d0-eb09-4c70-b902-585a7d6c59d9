import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("loanId");
  }

  register(username, email,  password, mobileNumber) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      mobileNumber
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
