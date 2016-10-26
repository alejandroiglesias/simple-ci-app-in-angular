class JobsListController {
  /** @ngInject */
  constructor($log) {
    $log.log('JobsListController');
  }
}

export default {
  controller: JobsListController,
  template: require('./jobs-list.html')
};
