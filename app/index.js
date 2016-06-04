import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import home from './home';

const ngModule = angular.module('app',[
    uirouter,
    home]).config(routing);