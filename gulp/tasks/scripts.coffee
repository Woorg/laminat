gulp         = require 'gulp'
plumber      = require 'gulp-plumber'
gutil        = require 'gulp-util'
gulpif       = require 'gulp-if'
concat       = require 'gulp-concat'
uglify       = require 'gulp-uglify'
errorHandler = require '../utils/errorHandler'
paths        = require '../paths'

gulp.task 'scripts', ->
	gulp.src [
			'components/jquery/dist/jquery.min.js'
			'components/jquery-ui/ui/core.js'
			'components/jquery-ui/ui/widget.js'
			'components/jquery-ui/ui/mouse.js'
			'components/jquery-ui/ui/position.js'
			'components/jquery-ui/ui/accordion.js'
			'components/jquery-ui/ui/button.js'
			'components/jquery-ui/ui/slider.js'
			'components/jquery-ui/ui/spinner.js'
			'components/jquery-ui/ui/tabs.js'
			'components/iCheck/icheck.min.js'
			'components/readmore/readmore.min.js'
			'components/bxslider-4/dist/jquery.bxslider.min.js'
			'components/imagesloaded/imagesloaded.pkgd.min.js'
			'components/masonry/dist/masonry.pkgd.min.js'
			'components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
			'components/elevatezoom/jquery.elevateZoom-3.0.8.min.js'
			'components/remodal/dist/jquery.remodal.min.js'
			'components/jquery.maskedinput/dist/jquery.maskedinput.min.js'
			'app/scripts/common.js'
		]
		.pipe plumber errorHandler: errorHandler
		.pipe concat 'common.min.js'
		.pipe gulpif !gutil.env.debug, uglify()
		.pipe gulp.dest paths.scripts
