this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/todo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/paper/bootstrap.min.css" rel="stylesheet" integrity="sha256-ZSKfhECi0yCEmGVAuQLWTHtJEn2vBNPexEWsJCIC/Nc= sha512-b+mSnD4QXw1uYwkgJ3d0XxoMXo+ZKHJNTNNFIddJ0IazcwKvKYtIlWADZ1JEREJzxUG428sfCw7qDuswAFcrOQ==" crossorigin="anonymous">\n<div class="container" ng-controller="TodoCtrl">\n    <div class="jumbotron">\n        <h1 align="center">Forget Me Not</h1>\n        <br>\n        <div id="todo-form" class="row">\n            <div class="col-sm-8 col-sm-offset-2 text-center">\n                <form>\n                    <div class="form-group">\n                        <input type="text" class="form-control input-lg text-center" placeholder="Add Todo!" ng-model="formData.value" autofocus>\n                        <br>\n                        <button type="submit" class="btn btn-success btn-lg" ng-click="addTodo()">Add me and don\'t forget me</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div id="todo-list" class="row">\n        <div class="col-sm-4 col-sm-offset-4">\n            <h4> Click on the todo to <strong> Delete </strong></h4>\n            <div class="checkbox" ng-repeat="todo in todos">\n                <img src="https://cdn1.iconfinder.com/data/icons/linecon/512/cross-32.png" ng-click="removeTodo(todo)">\n                <div class="alert alert-dismissible alert-success">\n                    {{ todo.value }}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';

}
return __p
};