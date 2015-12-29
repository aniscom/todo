/**
 * Created by ahmed on 12/28/15.
 */
'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap'])

// our routes
todoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/templates/todo.html',
            controller: 'TodoCtrl'
        }).otherwise({
            redirectTo: '/',
            caseInsensitiveMatch: true
        })
    }])

// our controllers

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'todoService', function($scope, $rootScope, todoService) {
    $scope.formData = {};
    $scope.todos = [];

    todoService.getTodos()
        .then(function(response) {
        console.log(response);
        $scope.todos = response;
    })

    $scope.addTodo = function() {
        console.log($scope.formData);
        todoService.addTodo($scope.formData)
            .then(function(response) {
            console.log(response);
            $scope.todos.push($scope.formData)
            $scope.formData = {};
        })
    }

    $scope.removeTodo = function(todo) {
        console.log(todo);
        todoService.removeTodo(todo).then(function(response) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1)
            console.log(response);
        })
    }
}])