/**
 * Created by ahmed on 12/28/15.
 */


todoApp.service('todoService', function($http, $q) {

    return {
        // get all notes
        'getTodos': function() {
            var defer = $q.defer();
            $http.get('/todo/getTodos').success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.reject(err);
            });
            return defer.promise;
        },


        // add a note
        'addTodo': function(todo) {
            console.log(todo);
            var defer = $q.defer();
            $http.post('/todo/addTodo', todo).success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.reject(err);
            });
            return defer.promise;
        },

        // delete a note

        'removeTodo': function(todo) {
            console.log(todo);
            var defer = $q.defer();
            $http.post('/todo/removeTodo', todo).success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    }})