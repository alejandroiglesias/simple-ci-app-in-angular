import angular from 'angular';
import 'angular-mocks';

describe('job component', () => {
  beforeEach(() => {
    angular.mock.module('jobs');
  });

  it('should render simple pending job', angular.mock.inject(($compile, $rootScope) => {
    /* global readJSON */
    const $scope = $rootScope.$new();
    $scope.fixture = readJSON('test/mocks/job-running.json');
    const element = $compile('<job job="fixture"></job>')($scope);
    $scope.$digest();
    const jobId = angular.element(element[0].querySelectorAll('.test-job-id'));
    const jobOwner = angular.element(element[0].querySelectorAll('.test-job-owner'));
    const jobTimeStarted = angular.element(element[0].querySelectorAll('.test-job-time-started'));
    const jobState = angular.element(element[0].querySelectorAll('.test-job-state'));
    expect(jobId.html().trim()).toEqual('432462');
    expect(jobOwner.html().trim()).toEqual('jtuck');
    expect(jobTimeStarted.html().trim()).toEqual('4/18/2014 12:12pm');
    expect(jobState.html().trim()).toEqual('Running');
  }));

  it('controller should not expand pending jobs', angular.mock.inject($componentController => {
    /* global readJSON */
    const job = readJSON('test/mocks/job-pending.json');
    const ctrl = $componentController('job', null, {job});
    ctrl.jobsList = jasmine.createSpyObj('jobsListSpy', ['collapse']);
    ctrl.expand();
    expect(ctrl.jobsList.collapse).not.toHaveBeenCalled();
    expect(ctrl.isExpanded).toBe(false);
  }));

  it('controller should not expand running jobs', angular.mock.inject($componentController => {
    /* global readJSON */
    const job = readJSON('test/mocks/job-running.json');
    const ctrl = $componentController('job', null, {job});
    ctrl.jobsList = jasmine.createSpyObj('jobsListSpy', ['collapse']);
    ctrl.expand();
    expect(ctrl.jobsList.collapse).not.toHaveBeenCalled();
    expect(ctrl.isExpanded).toBe(false);
  }));

  it('controller should expand non-pending and non-running jobs', angular.mock.inject($componentController => {
    /* global readJSON */
    const job = readJSON('test/mocks/job-rejected.json');
    const ctrl = $componentController('job', null, {job});
    ctrl.jobsList = jasmine.createSpyObj('jobsListSpy', ['collapse']);
    ctrl.expand();
    expect(ctrl.jobsList.collapse).toHaveBeenCalled();
    expect(ctrl.isExpanded).toBe(true);
  }));

  it('controller should collapse on $scope event', angular.mock.inject(($componentController, $rootScope) => {
    const $scope = $rootScope.$new();
    const ctrl = $componentController('job', {$scope});
    ctrl.isExpanded = true;
    $scope.$broadcast('job:collapse');
    expect(ctrl.isExpanded).toBe(false);
  }));

  it('controller should get passed/failed percent', angular.mock.inject($componentController => {
    /* global readJSON */
    const job = readJSON('test/mocks/job-running.json');
    const ctrl = $componentController('job', null, {job});
    const data = {passed: 50, failed: 50};
    expect(ctrl.getPassedFailedPercent(data)).toEqual(50);
  }));
});
