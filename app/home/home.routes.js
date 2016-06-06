export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/:user',
      template: require('./home.html'),
      controller: 'toDoController',
      controllerAs: 'toDoController'
    })
}