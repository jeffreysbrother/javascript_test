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
        src: 'js/script.js',
        dest: 'js/script.min.js'
      },
      build: {
        src: 'js/jquery.js',
        dest: 'js/jquery.min.js'
      }
    },
    //CSSMIN
    cssmin: {
      site: {
          src: ['css/style.css'],
          dest: 'css/style.min.css'
      }
    },
    //JSHINT
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    }
  });

  //load the plugin that provides the 'uglify' task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //default task(s)
  grunt.registerTask('default', ['uglify', 'cssmin']);
};
