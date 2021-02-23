import Api from './Api'
export default {
  register (credentials) {
    // Awordane API wa ba .post axios azafeh kardan be page REGISTER wa parametre dowom aan credentials
    return Api().post('register', credentials)
  }
}

// Call kardan
// AuthenticationService.register({
//   email: 'test@testi.com',
//   password: 1234567
// })
