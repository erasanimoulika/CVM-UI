module.exports = {
 
  build_dir: 'build',
  compile_dir: 'bin',
  app_version: '2015_03_17',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js','!src/common/ui-grid-*.js'  ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'vendor/jquery/dist/jquery.js',
      'vendor/angular/angular.js',
      'vendor/angular-bootstrap/ui-bootstrap.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js',     
      'vendor/restangular/dist/restangular.js',
      'vendor/angular-animate/angular-animate.js',
      'vendor/angular-touch/angular-touch.js',
      'vendor/angular-sanitize/angular-sanitize.js',

      'vendor/lodash/lodash.js',
      //'vendor/angular-mocks/angular-mocks.js',
            //'src/common/appMock.js',

      'vendor/moment/min/moment.min.js',
      'vendor/angular-busy/dist/angular-busy.js'       
    ],
    css: [
      'vendor/angular-busy/dist/angular-busy.css'
    ],
    font: [
      'vendor/bootstrap/fonts/*',
      'app/fonts/**/*'
    ],
    assets: [

    ]

  }
};
