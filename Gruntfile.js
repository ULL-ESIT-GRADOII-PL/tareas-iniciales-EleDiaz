
module.exports = function(grunt) {
    meta: {
      endpoint: "public"
    }

    grunt.initConfig({
        //grunt tasks go here
        panda : {
            index : {
              options : {
                pandocOptions: "-t html5 --smart --section-divs --mathjax --css=template.css --template template.html"
              },
              files: {
                "index.html" : [
                  "index.md"
                ]
              }
            }
        },
        watch: {
            html: {
                files: 'index.md',
                tasks: ['panda'],
                options: {
                    interrupt: true
                }
            },
        }

   	});
    grunt.loadNpmTasks('grunt-panda');
    grunt.loadNpmTasks('grunt-contrib-watch');

  	grunt.registerTask('default', ['panda']);
}
