angular.module('ecaApp', [
  'ui.router',
  'ngResource'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
function($stateProvider, $urlRouterProvider,$httpProvider) {

  // use this uncommon header to make Laravel happy
  $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

  // fallback to auth.signin
  $urlRouterProvider.otherwise('/');

  // utils
  var requireAuth = ['$stateParams', '$state', 'User',
  function($stateParams, $state, User) {
    User.checkAuth().then(
      function authed() {
        // ok!
      },
      function notAuthed() {
        //return to signin page
        $state.go('login');
      }
    )
  }
];

var requireNoAuth = ['$stateParams', '$state', 'User',
function($stateParams, $state, User) {
  User.checkAuth().then(
    function authed() {
      //return to profile page
      //$state.go('authed.team');
    },
    function notAuthed() {
      // ok!
    }
  )
}
];

var absolutelyNoAuth = ['$stateParams', '$state', 'User',
function($stateParams, $state, User) {
  User.checkAuth().then(
    function authed() {
      //return to profile page
      $state.go('authed.team');
    },
    function notAuthed() {
      // ok!
    }
  )
}
];

var requireAdmin = ['$stateParams', '$state', 'User',
function($stateParams, $state, User) {
  User.checkAuth().then(
    function authed() {
      if (!User.user().admin) {
        //return to home page
        $state.go('home');
      }
      else {
        // ok!
      }
    },
    function notAuthed() {
      //return to signin page
      $state.go('login');
    }
  )
}
];

// router
$stateProvider
.state('home', {
  url: '/',
  templateUrl: 'templates/home.html',
  onEnter: requireNoAuth
})
.state('cities', {
  url: '/cities',
  templateUrl: 'templates/cities.html',
  onEnter: requireNoAuth
})
.state('faq', {
  url: '/faq',
  templateUrl: 'templates/faq.html',
  onEnter: requireNoAuth
})
.state('sponsors', {
  url: '/sponsors',
  templateUrl: 'templates/sponsors.html',
  onEnter: requireNoAuth
})
.state('terms', {
  url: '/terms',
  templateUrl: 'templates/terms.html',
  onEnter: requireNoAuth
})
.state('login', {
  url: '/login',
  templateUrl: 'templates/login.html',
  onEnter: absolutelyNoAuth
})
.state('register', {
  url: '/register',
  templateUrl: 'templates/register.html',
  onEnter: absolutelyNoAuth
})
.state('authed', {
  abstract: true,
  templateUrl: 'templates/authed.layout.html',
  onEnter: requireAuth
})
.state('authed.team', {
  url: '/team',
  templateUrl: 'templates/team.html',
  onEnter: requireAuth
})
.state('authed.idea', {
  url: '/idea',
  templateUrl: 'templates/idea.html',
  onEnter: requireAuth
})
.state('admin', {
  abstract: true,
  templateUrl: 'templates/admin.layout.html',
  onEnter: requireAdmin
})
.state('admin.config', {
  url: '/admin/config',
  templateUrl: 'templates/admin.config.html',
  onEnter: requireAdmin
})
.state('admin.dashboard', {
  url: '/admin',
  templateUrl: 'templates/admin.dashboard.html',
  onEnter: requireAdmin
})
.state('authed.application', {
  url: '/application',
  templateUrl: 'templates/application.html',
  onEnter: requireAuth
})
// Cities Application Forms
.state('aveiro', {
  url: '/cities/aveiro',
  templateUrl: 'templates/cities/aveiro.html',
  onEnter: requireNoAuth
})
.state('milan', {
  url: '/cities/milan',
  templateUrl: 'templates/cities/milan.html',
  onEnter: requireNoAuth
})
.state('athens', {
  url: '/cities/athens',
  templateUrl: 'templates/cities/athens.html',
  onEnter: requireNoAuth
})
.state('belgrade', {
  url: '/cities/belgrade',
  templateUrl: 'templates/cities/belgrade.html',
  onEnter: requireNoAuth
})
.state('delft', {
  url: '/cities/delft',
  templateUrl: 'templates/cities/delft.html',
  onEnter: requireNoAuth
})
.state('e_sarajevo', {
  url: '/cities/e_sarajevo',
  templateUrl: 'templates/cities/e_sarajevo.html',
  onEnter: requireNoAuth
})
.state('ljubljana', {
  url: '/cities/ljubljana',
  templateUrl: 'templates/cities/ljubljana.html',
  onEnter: requireNoAuth
})
.state('munich', {
  url: '/cities/munich',
  templateUrl: 'templates/cities/munich.html',
  onEnter: requireNoAuth
})
.state('nis', {
  url: '/cities/nis',
  templateUrl: 'templates/cities/nis.html',
  onEnter: requireNoAuth
})
.state('novisad', {
  url: '/cities/novisad',
  templateUrl: 'templates/cities/novisad.html',
  onEnter: requireNoAuth
})
.state('patras', {
  url: '/cities/patras',
  templateUrl: 'templates/cities/patras.html',
  onEnter: requireNoAuth
})
.state('sarajevo', {
  url: '/cities/sarajevo',
  templateUrl: 'templates/cities/sarajevo.html',
  onEnter: requireNoAuth
})
.state('thessaloniki', {
  url: '/cities/thessaloniki',
  templateUrl: 'templates/cities/thessaloniki.html',
  onEnter: requireNoAuth
})
.state('tirana', {
  url: '/cities/tirana',
  templateUrl: 'templates/cities/tirana.html',
  onEnter: requireNoAuth
})
.state('tuzla', {
  url: '/cities/tuzla',
  templateUrl: 'templates/cities/tuzla.html',
  onEnter: requireNoAuth
})
.state('xanthi', {
  url: '/cities/xanthi',
  templateUrl: 'templates/cities/xanthi.html',
  onEnter: requireNoAuth
})
.state('zurich', {
  url: '/cities/zurich',
  templateUrl: 'templates/cities/zurich.html',
  onEnter: requireNoAuth
})
.state('dublin', {
  url: '/cities/dublin',
  templateUrl: 'templates/cities/dublin.html',
  onEnter: requireNoAuth
})
.state('duisburg', {
  url: '/cities/duisburg',
  templateUrl: 'templates/cities/duisburg.html',
  onEnter: requireNoAuth
})
.state('valencia', {
  url: '/cities/valencia',
  templateUrl: 'templates/cities/valencia.html',
  onEnter: requireNoAuth
});


}
])
