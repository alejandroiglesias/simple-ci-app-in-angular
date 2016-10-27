class JobsService {
  /** @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  get() {
    return this.$http
      .get('app/jobs/jobs.json')
      .then(response => {
        return response.data;
      });
  }
}

export default JobsService;
