/*jshint expr: true*/
var spawn = require('child_process').spawn;

require('should');

describe('grunt-mdlint', function () {

  describe('when run on files that pass linting', function() {

    it('should log a success message', function (done) {
      var logOutput = '';
      var mdlintProcess = spawn('grunt', ['mdlint:pass']);
      mdlintProcess.stdout.setEncoding('utf8');
      mdlintProcess.stdout.on('data', function (data) {
        logOutput += data;
      });
      mdlintProcess.on('close', function () {
        logOutput.should.include('All markdown files passed linting');
        done();
      });
    });
  });

  describe('when run on files that fail linting', function() {

    it('should log the failing code blocks in each file', function (done) {
      var logOutput = '';
      var mdlintProcess = spawn('grunt', ['mdlint:fail']);
      mdlintProcess.stdout.setEncoding('utf8');
      mdlintProcess.stdout.on('data', function (data) {
        logOutput += data;
      });

      mdlintProcess.on('close', function () {
        logOutput.should.include('Markdown failed linting');
        done();
      });
    });
  });

  describe('when run with the verbose option', function() {

    it('should log files that pass linting', function (done) {
      var logOutput = '';
      var mdlintProcess = spawn('grunt', ['mdlint:pass', '-v']);
      mdlintProcess.stdout.setEncoding('utf8');
      mdlintProcess.stdout.on('data', function (data) {
        logOutput += data;
      });
      mdlintProcess.on('close', function () {
        logOutput.should.include('Markdown passed linting');
        done();
      });
    });
  });
});
