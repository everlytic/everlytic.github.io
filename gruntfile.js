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
        },
        uncss: {
            dist: {
                files: {
                    'dist/css/tidy.css': ['index.html', 'about.html']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'images/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'images/'                  // Destination path prefix
                }]
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Tasks
    grunt.registerTask('default', ['copy']);

};