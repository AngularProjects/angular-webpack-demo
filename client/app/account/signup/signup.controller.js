'use strict';

class SignupController {
  constructor() {
    this.user = {
      name: '',
      email: '',
      password: ''
    };
    this.errors = {};
    this.submitted = false;
  }

  register() {
    alert('hello');
  }
}

export default SignupController;
