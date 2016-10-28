import angular from 'angular';
import 'angular-mocks';

describe('jobsService', () => {
  beforeEach(() => {
    angular.mock.module('jobs');
  });

  afterEach(angular.mock.inject($httpBackend => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should get the list of jobs', angular.mock.inject(($httpBackend, $rootScope, jobsService) => {
    $httpBackend.expectGET('app/jobs/jobs.json').respond(123);
    jobsService.get().then(data => {
      expect(data).toEqual(123);
    });
    $httpBackend.flush();
  }));
});
