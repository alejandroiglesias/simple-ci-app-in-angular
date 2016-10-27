import angular from 'angular';

import JobComponent from './job.component';
import JobsListComponent from './jobs-list.component';
import JobsService from './jobs.service';

export const jobsModule = 'jobs';

angular
  .module(jobsModule, [])
  .component('job', JobComponent)
  .component('jobsList', JobsListComponent)
  .service('jobsService', JobsService);
