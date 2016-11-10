module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dev: {
        files: {
          'static/app.js': 'src/client/app.jsx',
        },
        options: {
          browserifyOptions: {
            paths: ['src/shared'],
          },
          transform: ['babelify'],
        },
      },
      test: {
        files: {
          'src/shared/tests/dest/expenses.reducer.test.browserify.js':
            'src/shared/tests/src/expenses.reducer.test.js',
        },
        options: {
          browserifyOptions: {
            paths: ['src/shared'],
          },
          transform: ['babelify'],
        },
      },
    },
    uglify: {
      default: {
        files: {
          'static/app.min.js': 'static/app.js',
        },
      },
    },
    cssmin: {
      options: {
        report: 'min',
        keepSpecialComments: 0,
      },
      default: {
        files: {
          'static/style.min.css': [
            'node_modules/react-datepicker/dist/react-datepicker.css',
            'node_modules/rc-time-picker/assets/index.css',
          ],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['dev']);

  grunt.registerTask(
    'dev',
    [
      'browserify:dev',
    ]
  );
};
