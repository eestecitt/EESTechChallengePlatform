angular.module('ecaApp')
.controller('teamController', ['$scope', '$rootScope', '$http', '$state', 'User', 'API',
function($scope, $rootScope, $http, $state, User, API) {

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

  $scope.submitted = false;

  User.userPromise().then(function(response) {
    $scope.user = response.data;
    if ($scope.user.group)
    API.Group.get({ groupId: $scope.user.group.id }, function(response) {
      $scope.team = response;
      console.log(response);
      $rootScope.teamName = $scope.team.name;
      if ($scope.team.lc) {
        $rootScope.lcName = $scope.team.lc.name;
      } else {
        $rootScope.lcName = "Waikiki";
      }

    });
    else
    $rootScope.teamName = '?';
  });

  $scope.addMember = function() {
    $scope.submitted = true;
    if ($scope.member1Form.$valid) {
      $http.post('api/v1/group/'+$scope.user.group.id+'/member', $scope.member1)
      .then(function(response) {
        API.Group.get({ groupId: $scope.user.group.id }, function(response){
          $scope.team = response;
          $rootScope.teamName = $scope.team.name;
        });
        $('#add-user-modal').modal('hide');
      })
    }
  }

  $scope.saveMember = function(member) {
    $scope.submitted3 = true;
    if ($scope.editMemberForm.$valid) {
      $http.put('api/v1/member/'+member.id, member)
      .then(function(response) {
        $('#edit-user-modal').modal('hide');
      })
      .catch(function(err) {
        alert("Error saving member, please contact ECA team for additional support");
      })
    }
  }

  $scope.edit = function(member) {
    $scope.member = member;
    $scope.submitted3 = false;
    $('#edit-user-modal').modal('show');
  }

  $scope.newFile = function () {
    var f = document.getElementById('file').files[0],
    r = new FileReader();
    r.onloadend = function(e){
      var data = e.target.result;
      //send your binary data via $http or $resource or do anything else with it
    }
    r.readAsBinaryString(f);
  }

  // File update
  var fileExtentionRange = '.pdf';
  var MAX_SIZE = 30; // MB

  $(document).on('change', '.btn-file', function() {
    var input = $(this);

    if (navigator.appVersion.indexOf("MSIE") != -1) { // IE
      var label = input.val();
      var id = input.attr('id');
      validateFile(id, label, 0);
    } else {
      var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      var size = input.get(0).files[0].size;
      var id = input.attr('id');
      validateFile(id, label, size);
    }
  });

  function validateFile(id, l, s) {
    var postfix = l.substr(l.lastIndexOf('.'));
    if (fileExtentionRange.indexOf(postfix.toLowerCase()) > -1) {
      if (s > 1024 * 1024 * MAX_SIZE ) {
        alert('Max size for file is ' + MAX_SIZE);
        $('#'+id).val('');
        $('._'+id).val('');
      } else {
        $('._'+id).val(l);
      }
    } else {
      alert('File type must be ' + fileExtentionRange);
      $('#'+id).val('');
      $('._'+id).val('');
    }
  }
}

])
