import angular from 'angular';

import chartjsModule from 'angular-chart.js';
import {jobsModule} from './app/jobs/index';

import './index.scss';

angular
  .module('app', [chartjsModule, jobsModule])
  .config(['ChartJsProvider', ChartJsProvider => {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#72AC4D', '#EB7D3B'],
      maintainAspectRatio: false
    });
  }]);
