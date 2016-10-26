import angular from 'angular';

import jobsListComponent from './jobs-list.component';

export const jobsModule = 'jobs';

angular
  .module(jobsModule, [])
  .component('jobsList', jobsListComponent);
