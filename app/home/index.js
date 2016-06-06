import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import userInput from './directives/userinput';
import userToDo from './directives/userToDo';
import toDos from './directives/toDos';

import toDoController from './toDo.controller';

import 'firebase';
import angularFire from 'angularfire';

import toDoService from './toDo.service';

export default angular.module('app.home',[uirouter,angularFire])
.config(routing)
.controller('toDoController',toDoController)
.directive('userInput', userInput)
.directive('userToDo', userToDo)
.directive('toDos', toDos)
.service('toDoService', toDoService)
.name;