angular.module('ecaApp')
.controller ('registerController', ['$scope', '$state', '$http', 'User', 'API', function($scope, $state, $http, User, API) {

  $scope.config = {
    maxTeamMembers: 3
  };

  $scope.appConfig = {registration_enabled: true};
  var lcs = new API.LCs();
  lcs.$get().then((json) => {
    $scope.lcs = json;
    console.log($scope.lcs);
  })

  $scope.name = '';
  $scope.lc = '';
  $scope.submitted = false;
  $scope.submitted2 = false;
  $scope.submitted3 = false;
  // $scope.countries = [];

  $scope.member1 = {
    first_name: '',
    last_name: '',
    birthdate: '',
    sex:'',
    faculty: '',
    tshirt: '',
    number: '',
    years_study: '',
    email: '',
    password: '',
    password_confirmation: '',
    agrees: false,
  }

  $scope.member2 = {
    first_name: '',
    last_name: '',
    birthdate: '',
    sex:'',
    faculty: '',
    tshirt: '',
    number: '',
    years_study: '',
    email: '',
    password: '',
    password_confirmation: '',
    agrees: false,
  }

  $scope.member3 = {
    first_name: '',
    last_name: '',
    birthdate: '',
    sex:'',
    faculty: '',
    tshirt: '',
    number: '',
    years_study: '',
    email: '',
    password: '',
    password_confirmation: '',
    agrees: false,
  }

  /* Not used code!
  $http.get('https://restcountries-v1.p.mashape.com/all', {headers: {
  'X-Mashape-Key': 'yhNwA5NusOmshGvY4U4Q0WBGXQS4p17AkD7jsnzl6zSzE44h5w',
  'Accept': 'application/json'
}}).then(function(response) {
$scope.countries = response.data;
$scope.countries.push({
name: "Other country",
alpha2Code: "Other"
});
});*/


var myEl1 = angular.element( document.querySelector( '.member2' ) );
var myEl2 = angular.element( document.querySelector( '.member3' ) );

$scope.addMember = function() {
  $scope.members.push({});
}

$scope.checkDirty = function() {
  console.log('Changed');
}

$scope.removeMember = function (member) {
  $scope.members.splice(member);
}

$scope.signup = function() {
  if (!$scope.appConfig.registration_enabled) {
    return window.alert('Registration is currently closed!');
  }

  $scope.members = [];
  $scope.error = "";
  $scope.submitted = true;
  if (!myEl1.hasClass('dimmed')) {
    if ($scope.member2Form.$valid){
      $scope.members.push($scope.member2)
    } else {
      $scope.submitted2 = true;
    }
  }
  if (!myEl2.hasClass('dimmed')) {
    if ($scope.member3Form.$valid) {
      $scope.members.push($scope.member3)
    } else {
      $scope.submitted3 = true;
    }
  }
  if ($scope.nameForm.$valid && $scope.member1Form.$valid) {
    $scope.members.push($scope.member1);
    var group = new API.Group({ name: $scope.name, lc: $scope.lc, members: $scope.members });
    group.$save()
    .then(function ok(response) {
      $state.go('authed.team');
    }, function err(response) {
      if (response.data['name']){
        $scope.error = response.data['name'][0];
      }
      if (response.data['members.0.password']){
        $scope.error = response.data['members.0.password'][0];
      }
      if (response.data['members.1.password']){
        $scope.error = response.data['members.1.password'][0];
      }
      if (response.data['members.2.password']){
        $scope.error = response.data['members.2.password'][0];
      }
    });
  }
}

$('.circular.icon.button').on('click', function() {
  $(this).parents('.segment').dimmer('hide');
});

$('.bottom.buttons > .button').on('click', function() {
  $(this).parents('.segment').dimmer('show');
});

// File input
}]);
