module.exports = function (grunt) {
	require('time-grunt')(grunt); // display time grunt uses
	require('load-grunt-tasks')(grunt); // load all grunt files

	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					environment: 'production',
					specify: 'scss/lattice.scss'
				}
			},
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					outputStyle: "expanded",
					debugInfo: true,
					specify: 'scss/lattice.scss'
				}
			}
		},
		watch: {
			files: 'scss/**/*.scss',
			tasks: ['compass:dev']
		}
	});

	grunt.registerTask('default', ['compass:dev', 'watch']);
	grunt.registerTask('build', ['compass:dist']);
};	