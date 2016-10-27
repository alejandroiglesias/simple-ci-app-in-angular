class JobController {
  /** @ngInject */
  constructor() {
    this.isExpanded = false;
  }

  getPassedFailedPercent(data) {
    return Math.round((data.passed / (data.passed + data.failed)) * 100);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

export default {
  bindings: {
    job: '<'
  },
  controller: JobController,
  template: require('./job.html')
};
