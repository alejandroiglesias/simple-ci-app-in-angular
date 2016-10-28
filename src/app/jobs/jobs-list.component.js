class JobsListController {
  /** @ngInject */
  constructor($scope, jobsService) {
    this.$scope = $scope;
    jobsService.get().then(jobs => {
      this.jobs = jobs;
    });
  }

  collapse() {
    this.$scope.$broadcast('job:collapse');
  }
}

export default {
  controller: JobsListController,
  template: require('./jobs-list.html')
};
