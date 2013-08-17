/*
 * grunt-mdlint
 * https://github.com/ChrisWren/grunt-mdlint
 *
 * Copyright (c) 2013 Chris Wren
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('mdlint', 'Runs mdlint to lint JavaScript code blocks in your project\'s markdown files', function () {

    var done = this.async();
    var args = [__dirname + '/../node_modules/mdlint/bin/mdlint', this.data.src || this.data];

    if (grunt.option('verbose')) {
      args.push('-v');
    }

    grunt.util.spawn({
      cmd: 'node',
      args: args,
      opts: {
        stdio: 'inherit'
      }
    },
    function (error) {
      if (error) {
        done(false);
      } else {
        done();
      }
    });
  });
};
