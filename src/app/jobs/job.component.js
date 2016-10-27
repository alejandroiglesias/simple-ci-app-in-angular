class JobController {
  /** @ngInject */
  constructor() {
    this.isExpanded = true;
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
