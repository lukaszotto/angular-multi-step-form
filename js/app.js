// app.jss
// =============================================================================
var formApp = angular.module('formApp', ['ui.router']);

// configuring our routes 
// =============================================================================
formApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/form");
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        });
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)

    // catch all route
    // send users to the form page 
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('poszlo!');
    };
    
});