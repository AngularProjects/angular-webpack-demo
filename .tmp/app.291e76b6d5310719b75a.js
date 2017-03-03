webpackJsonp([0],[,,,,,,,function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_angularUiRouter=__webpack_require__(1),_angularUiRouter2=_interopRequireDefault(_angularUiRouter),_account=__webpack_require__(18),_account2=_interopRequireDefault(_account),_login=__webpack_require__(19),_login2=_interopRequireDefault(_login),_signup=__webpack_require__(21),_signup2=_interopRequireDefault(_signup);exports.default=_angular2.default.module("app.account",[_angularUiRouter2.default,_login2.default,_signup2.default]).config(_account2.default).name},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_main=__webpack_require__(24),_main2=_interopRequireDefault(_main),_main3=__webpack_require__(23),_main4=_interopRequireDefault(_main3),_main5=__webpack_require__(25),_main6=_interopRequireDefault(_main5);exports.default=_angular2.default.module("app.main",["ui.router"]).config(_main2.default).controller("MainController",_main4.default).service("MainService",_main6.default).name},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_navbar=__webpack_require__(26),_navbar2=_interopRequireDefault(_navbar);exports.default=_angular2.default.module("directives.navbar",[]).component("navbar",{template:__webpack_require__(30),controller:_navbar2.default}).name},function(module,exports){},,,,,,,,function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function($stateProvider){"ngInject";$stateProvider.state("login",{url:"/login",template:__webpack_require__(27),controller:"LoginController",controllerAs:"$ctrl"}).state("signup",{url:"/signup",template:__webpack_require__(28),controller:"SignupController",controllerAs:"$ctrl"})}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_login=__webpack_require__(20),_login2=_interopRequireDefault(_login);exports.default=_angular2.default.module("app.login",[]).controller("LoginController",_login2.default).name},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),LoginController=function(){function LoginController(){_classCallCheck(this,LoginController),this.submitted=!1,this.user={email:"",password:""}}return _createClass(LoginController,[{key:"login",value:function(){alert("Design this part yourself!")}}]),LoginController}();exports.default=LoginController},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_signup=__webpack_require__(22),_signup2=_interopRequireDefault(_signup);exports.default=_angular2.default.module("app.signup",[]).controller("SignupController",_signup2.default).name},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),SignupController=function(){function SignupController(){_classCallCheck(this,SignupController),this.user={name:"",email:"",password:""},this.errors={},this.submitted=!1}return _createClass(SignupController,[{key:"register",value:function(){alert("Design this part yourself!")}}]),SignupController}();exports.default=SignupController},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MainController=function(){function MainController(MainService){_classCallCheck(this,MainController),this.welcomeText="Hello, this is a demo of angular with webpack",this.MainService=MainService,this.users=[]}return _createClass(MainController,[{key:"getUserData",value:function(){var _this=this;this.MainService.getExampleData().then(function(res){_this.users=res.data}).catch(function(){})}}]),MainController}();exports.default=MainController},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function($stateProvider){"ngInject";$stateProvider.state("main",{url:"/",template:__webpack_require__(29),controller:"MainController",controllerAs:"main"})}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function($http){return{getExampleData:function(){return $http.get("/api/users/getAllUsers")}}}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var NavbarComponent=function NavbarComponent(){"ngInject";_classCallCheck(this,NavbarComponent),this.menu=[{title:"Home",state:"main"}],this.isCollapsed=!0};exports.default=NavbarComponent},function(module,exports){module.exports='<div class="container">\n  <div class="row">\n    <div class="col-sm-12">\n      <h1>Login {{$ctrl.submitted}}</h1>\n    </div>\n    <div class="col-sm-12">\n      <form class="form" name="form" ng-submit="$ctrl.login(form)" novalidate>\n        <div class="form-group">\n          <label>Email</label>\n          <input type="email" name="email" class="form-control" ng-model="$ctrl.user.email" required>\n        </div>\n        <div class="form-group">\n          <label>Password</label>\n          <input type="password" name="password" class="form-control" ng-model="$ctrl.user.password" required>\n        </div>\n        <div class="form-group has-error">\n          <p class="help-block" ng-show="form.email.$error.required && form.password.$error.required && $ctrl.submitted">\n            Please enter your email and password.\n          </p>\n          <p class="help-block" ng-show="form.email.$error.email && $ctrl.submitted">\n            Please enter a valid email.\n          </p>\n          <!-- <p class="help-block">{{$ctrl.errors.login}}</p> -->\n        </div>\n        <div>\n          <button class="btn btn-inverse btn-lg btn-login" type="submit">\n            Login\n          </button>\n          <a class="btn btn-default btn-lg btn-register" ui-sref="signup">\n            Register\n          </a>\n        </div>\n        <hr/>\n        <div class="row">\n          <div class="col-sm-4 col-md-3">\n            <oauth-buttons classes="btn-block"></oauth-buttons>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <hr>\n</div>\n'},function(module,exports){module.exports='<div class="container">\n  <div class="row">\n    <div class="col-sm-12">\n      <h1>Sign up</h1>\n    </div>\n    <div class="col-sm-12">\n      <form class="form" name="form" ng-submit="$ctrl.register(form)" novalidate>\n        <div class="form-group" ng-class="{ \'has-success\': form.name.$valid && $ctrl.submitted,\n                                            \'has-error\': form.name.$invalid && $ctrl.submitted }">\n          <label>Name</label>\n          <input type="text" name="name" class="form-control" ng-model="$ctrl.user.name" required/>\n          <p class="help-block" ng-show="form.name.$error.required && $ctrl.submitted">\n            A name is required\n          </p>\n        </div>\n        <div class="form-group" ng-class="{ \'has-success\': form.email.$valid && $ctrl.submitted,\n                                            \'has-error\': form.email.$invalid && $ctrl.submitted }">\n          <label>Email</label>\n          <input type="email" name="email" class="form-control" ng-model="$ctrl.user.email" required mongoose-error/>\n          <p class="help-block" ng-show="form.email.$error.email && $ctrl.submitted">\n            Doesn\'t look like a valid email.\n          </p>\n          <p class="help-block" ng-show="form.email.$error.required && $ctrl.submitted">\n            What\'s your email address?\n          </p>\n          <p class="help-block" ng-show="form.email.$error.mongoose">\n            {{ $ctrl.errors.email }}\n          </p>\n        </div>\n        <div class="form-group" ng-class="{ \'has-success\': form.password.$valid && $ctrl.submitted,\n                                            \'has-error\': form.password.$invalid && $ctrl.submitted }">\n          <label>Password</label>\n          <input type="password" name="password" class="form-control" ng-model="$ctrl.user.password" ng-minlength="3" required mongoose-error/>\n          <p class="help-block" ng-show="(form.password.$error.minlength || form.password.$error.required) && $ctrl.submitted">\n            Password must be at least 3 characters.\n          </p>\n          <p class="help-block" ng-show="form.password.$error.mongoose">\n            {{ $ctrl.errors.password }}\n          </p>\n        </div>\n        <div class="form-group" ng-class="{ \'has-success\': form.confirmPassword.$valid && $ctrl.submitted,\n                                            \'has-error\': form.confirmPassword.$invalid && $ctrl.submitted }">\n          <label>Confirm Password</label>\n          <input type="password" name="confirmPassword" class="form-control" ng-model="$ctrl.user.confirmPassword" match="$ctrl.user.password" ng-minlength="3" required/>\n          <p class="help-block" ng-show="form.confirmPassword.$error.match && $ctrl.submitted">\n            Passwords must match.\n          </p>\n        </div>\n        <div>\n          <button class="btn btn-inverse btn-lg btn-register" type="submit">\n            Sign up\n          </button>\n          <a class="btn btn-default btn-lg btn-login" ui-sref="login">\n            Login\n          </a>\n        </div>\n        <hr/>\n        <div class="row">\n          <div class="col-sm-4 col-md-3">\n            <oauth-buttons classes="btn-block"></oauth-buttons>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <hr>\n</div>\n'},function(module,exports){module.exports='<article class="container">\n  <section class="jumbotron">\n    <header>{{main.welcomeText}}</header>\n    <button class="btn btn-default example" ng-click="main.getUserData()">Show example data</button>\n  </section>\n  <section class="well user-well" ng-repeat="user in main.users">\n    <div class="row">\n      <h2>{{user.username}}</h2>\n    </div>\n    <div class="row">\n      <h5>{{user.email}}</h5>\n    </div>\n  </section>\n</article>\n'},function(module,exports){module.exports='<div class="navbar navbar-default navbar-static-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button class="navbar-toggle" type="button" ng-click="$ctrl.isCollapsed = !$ctrl.isCollapsed">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="/" class="navbar-brand">example</a>\n    </div>\n    <div uib-collapse="$ctrl.isCollapsed" class="navbar-collapse collapse" id="navbar-main">\n      <ul class="nav navbar-nav">\n        <li ng-repeat="item in $ctrl.menu" ui-sref-active="active">\n            <a ui-sref="main">{{item.title}}</a>\n        </li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li ui-sref-active="active"><a ui-sref="signup">Sign up</a></li>\n        <li ui-sref-active="active"><a ui-sref="login">Login</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n'},,,function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_angularCookies=__webpack_require__(2),_angularCookies2=_interopRequireDefault(_angularCookies),_angularResource=__webpack_require__(3),_angularResource2=_interopRequireDefault(_angularResource),_angularSanitize=__webpack_require__(4),_angularSanitize2=_interopRequireDefault(_angularSanitize),_angularUiRouter=__webpack_require__(1),_angularUiRouter2=_interopRequireDefault(_angularUiRouter),_main=__webpack_require__(8),_main2=_interopRequireDefault(_main),_navbar=__webpack_require__(9),_navbar2=_interopRequireDefault(_navbar),_account=__webpack_require__(7),_account2=_interopRequireDefault(_account);__webpack_require__(10),_angular2.default.module("app",[_angularCookies2.default,_angularResource2.default,_angularSanitize2.default,_angularUiRouter2.default,_main2.default,_navbar2.default,_account2.default]).config(function($urlRouterProvider,$locationProvider){"ngInject";$urlRouterProvider.otherwise("/"),$locationProvider.html5Mode(!0)})}],[33]);