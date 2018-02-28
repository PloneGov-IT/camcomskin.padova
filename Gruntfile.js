module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // we could just concatenate everything, really
    // but we like to have it the complex way.
    // also, in this way we do not have to worry
    // about putting files in the correct order
    // (the dependency tree is walked by r.js)
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          // 'destination': 'source'
          'css/cciaa.css': 'sass/cciaa.scss',
          'css/cciaa.print.css': 'sass/cciaa.print.scss',
          'css/cciaa.backend.css': 'sass/cciaa.backend.scss',
        },
      },
      bs: {
        files: {
          // 'destination': 'source'
          'css/bootstrap.min.css': 'sass/bootstrap.scss',
        },
      },
    },
    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'css/',
        },
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 6'],
          }),
          require('postcss-flexbugs-fixes'),
        ],
      },
      dist: {
        src: ['css/*.css'],
      },
    },
    watch: {
      styles: {
        files: [
          'sass/*.scss',
          'sass/components/*.scss',
          'sass/components/plone/*.scss',
          'barceloneta/less/*.less',
        ],
        tasks: ['sass', 'postcss'],
      },
    },
  });

  // CWD to theme folder
  grunt.file.setBase('./camcomskin/padova/browser/stylesheets/');

  grunt.registerTask('compile', ['sass', 'postcss']);
  grunt.registerTask('default', ['watch']);
};
