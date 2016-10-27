class JobsListController {
  /** @ngInject */
  constructor(jobsService) {
    jobsService.get().then(jobs => {
      this.jobs = jobs;
    });
  }
}

export default {
  controller: JobsListController,
  template: require('./jobs-list.html')
};
