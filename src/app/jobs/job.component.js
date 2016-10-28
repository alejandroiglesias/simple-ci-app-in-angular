class JobController {
  /** @ngInject */
  constructor($scope) {
    this.isExpanded = false;
    $scope.$on('job:collapse', () => {
      this.isExpanded = false;
    });
  }

  expand() {
    if (this.isExpanded || ['pending', 'running'].indexOf(this.job.state.id) !== -1) {
      return;
    }
    this.jobsList.collapse();
    this.isExpanded = true;
  }

  getPassedFailedPercent(data) {
    return Math.round((data.passed / (data.passed + data.failed)) * 100);
  }
}

export default {
  bindings: {
    job: '<'
  },
  controller: JobController,
  require: {
    jobsList: '^jobsList'
  },
  template: require('./job.html')
};
