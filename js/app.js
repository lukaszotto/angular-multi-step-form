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
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.account', {
            url: '/account',
            templateUrl: 'form-account.html'
        })
        .state('form.delivery', {
            url: '/delivery',
            templateUrl: 'form-delivery.html'
        })
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
    // catch all route
    // send users to the form page 
});

// our controller for the form
// =============================================================================
formApp.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    $scope.formDeliveryData = [
        { carrierID: 'pp', carrierName: 'Poczta Polska' },
        { carrierID: 'kex', carrierName: 'KEX' },
        { carrierID: 'ups', carrierName: 'UPS' },
        { carrierID: 'dhl', carrierName: 'DHL' }
    ];

    
    // function to process the form
    $scope.processForm = function() {
        alert('poszlo!');
    };
    
});

