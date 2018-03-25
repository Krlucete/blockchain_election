// app.factory('register', function ($scope, $rootScope, $routeParams, $location, $http, RestApiClientService) {
//
//     $scope.register = {};
//
//     $scope.register = {email:'',password:'',name:'',phone:'',address:''};
//
//     $scope.register = function (customer) {
//         RestApiClientService.post('register', {
//             customer: customer
//         }).then(function (results) {
//             RestApiClientService.toast(results);
//             if (results.status == "success") {
//                 $location.path('login');
//             }
//         });
//     };
//
// });