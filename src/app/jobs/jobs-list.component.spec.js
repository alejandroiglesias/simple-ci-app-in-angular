import angular from 'angular';
import 'angular-mocks';

describe('jobsList component', () => {
  beforeEach(() => {
    angular.mock.module('jobs');
  });

  it('should render a simple jobs list', angular.mock.inject(($compile, $q, $rootScope, jobsService) => {
    /* global readJSON */
    const $scope = $rootScope.$new();
    const deferred = $q.defer();
    spyOn(jobsService, 'get').and.returnValue(deferred.promise);
    const element = $compile('<jobs-list></jobs-list>')($scope);
    deferred.resolve(readJSON('test/mocks/jobs.json'));
    $scope.$digest();
    const jobsListHeader = angular.element(element[0].querySelectorAll('.test-jobs-list-header'));
    const jobs = element.find('job');
    expect(jobs.length).toEqual(6);
    expect(jobsListHeader.html()).toContain('Changelist / Build');
    expect(jobsListHeader.html()).toContain('Owner');
    expect(jobsListHeader.html()).toContain('Time Started');
    expect(jobsListHeader.html()).toContain('State');
    expect(jobsListHeader.html()).toContain('Metrics');
    expect(jobsListHeader.html()).toContain('Build');
    expect(jobsListHeader.html()).toContain('Unit Test');
    expect(jobsListHeader.html()).toContain('Functional Test');
  }));

  it('controller should get the list of jobs', angular.mock.inject(($componentController, $q, $rootScope, jobsService) => {
    const $scope = $rootScope.$new();
    const deferred = $q.defer();
    spyOn(jobsService, 'get').and.returnValue(deferred.promise);
    const ctrl = $componentController('jobsList', {$scope, jobsService});
    deferred.resolve([123]);
    $scope.$apply();
    expect(ctrl.jobs).toEqual([123]);
  }));

  it('controller should collapse jobs', angular.mock.inject(($componentController, $rootScope) => {
    const $scope = $rootScope.$new();
    spyOn($scope, '$broadcast');
    const ctrl = $componentController('jobsList', {$scope});
    ctrl.collapse();
    expect($scope.$broadcast).toHaveBeenCalledWith('job:collapse');
  }));
});
