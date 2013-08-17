# grunt-mdlint
> Run [mdlint](https://github.com/ChrisWren/mdlint) to lint JavaScript code blocks in your project's markdown files

[![NPM version](https://badge.fury.io/js/grunt-mdlint.png)](http://badge.fury.io/js/grunt-mdlint)  
[![Dependency Status](https://gemnasium.com/ChrisWren/grunt-mdlint.png)](https://gemnasium.com/ChrisWren/grunt-mdlint)   
[![Travis Status](https://travis-ci.org/ChrisWren/grunt-mdlint.png)](https://travis-ci.org/ChrisWren/grunt-mdlint)

## Getting Started
If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a gruntfile as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:
```shell
npm install grunt-mdlint --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-mdlint');
```

## Documentation

### Usage
The mdlint task takes an array of file globs to lint:
```js
mdlint: ['*.md']
```

# Changelog

**0.0.0** - Initial release
