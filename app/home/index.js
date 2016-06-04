import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';


//directives
import userInput from './directives/userinput';
import userToDo from './directives/toDos';
import toDos from './directives/userToDo';

//Controller
import TabController from './tab.controller';

export default angular.module('app.home',[uirouter])
.config(routing)
.controller('TabController',TabController)
.directive('userInput', userInput)
.directive('userToDo', userToDo)
.directive('toDos', toDos)
.name;