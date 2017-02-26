'use strict';

class LoginController {
  constructor() {
    this.submitted = false;
    this.user = {
      email: '',
      password: ''
    };
  }

  login(form) {
    console.log(this.user);
    // alert('hello');
  }
}

export default LoginController;
