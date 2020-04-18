import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// How I'd call this regiter method:
// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })
