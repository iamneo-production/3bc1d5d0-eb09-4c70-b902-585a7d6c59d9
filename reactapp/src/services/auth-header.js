export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`
    
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }
  
