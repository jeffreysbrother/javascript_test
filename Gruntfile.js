module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //UGLIFY
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dev/js/script.js',
        dest: 'dist/js/script.min.js'
      }
    },
    //CSSMIN
    cssmin: {
      site: {
          src: ['dev/css/style.css'],
          dest: 'dist/css/style.min.css'
      }
    },
    //JSHINT
    jshint: {
      all: ['Gruntfile.js', 'dev/js/*.js']
    }
  });

  //load the plugin that provides the 'uglify' task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //default task(s)
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};
