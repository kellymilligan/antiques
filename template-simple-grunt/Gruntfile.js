module.exports = function(grunt) {

    // Grunt config
    grunt.initConfig({
      pkg : grunt.file.readJSON('package.json'),

      concat : {
        dist : {
          src : [
            // Set combine order
            'j/example.js',
            'j/example.js',
            'j/example.js',
          ],
          dest : 'j/build/production.js',
        }
      },
      uglify : {
        build : {
          src : 'j/build/production.js',
          dest : 'j/build/production.min.js',
        }
      },
      less : {
        development : {
          options : {
            paths : ['less/'],
          },
          files : {
            "c/example.css" : "less/example.less",
            "c/example.css" : "less/example.less",
            "c/example.css" : "less/example.less",
            "c/example.css" : "less/example.less",
            "c/example-combined.css" : "less/combine.less",
          }
        },
        production : {
          options : {
            paths : ['less/'],
            compress : true,
            cleancss : true,
          },
          files : {
            "c/example-combined.css" : "less/combine.less",
          }
        }
      },
      watch : {
        html : {
          files : ['*.html'],
          options : {
            livereload : true,
          }
        },
        styles : {
          files : ['less/*.less'],
          tasks : ['less:development'],
          options : {
            spawn : false,
            livereload : true,
          }
        },
        scripts : {
          files : ['j/*.js'],
          tasks : ['concat', 'uglify'],
          options : {
            spawn : false,
            livereload : true,
          }
        }
      }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['concat', 'uglify', 'less:development', 'watch']); // Dev
    grunt.registerTask('publish', ['concat', 'uglify', 'less:production']); // Production

};