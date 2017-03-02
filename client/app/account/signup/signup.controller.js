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
    alert('Design this part yourself!');
  }
}

export default SignupController;
