module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            fonts: {
                expand: true,
                dot: true,
                cwd: 'node_modules/bootstrap-sass/assets/stylesheets',
                src: [
                    '**/*'
                ],
                dest: '_sass/'
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tasks
    grunt.registerTask('default', ['copy']);

};