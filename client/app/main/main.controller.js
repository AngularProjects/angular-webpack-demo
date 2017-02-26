'use strict';

class MainController {

  constructor(MainService) {
    this.welcomeText = 'Hello, this is a demo of angular with webpack';
    this.MainService = MainService;
    this.users = [];
  }

  getUserData() {
    this.MainService.getExampleData()
      .then((res) => {
        this.users = res.data;
      })
      .catch((err) => {

      });
  }
}

MainController.$inject = ['MainService'];

export default MainController;
