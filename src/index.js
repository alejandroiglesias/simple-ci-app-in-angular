import angular from 'angular';

import chartjsModule from 'angular-chart.js';
import {jobsModule} from './app/jobs/index';

import './index.scss';

angular.module('app', [chartjsModule, jobsModule]);
