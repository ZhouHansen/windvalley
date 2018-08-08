var css = require('sheetify')
var choo = require('choo')

css('tachyons')

// css('./style/animate.scss')
// css('./style/icon.scss')
css('./app/style/index.scss')

var app = choo()

// app.use(require('./store'))

app.route('/', require('./app'))

app.mount('body')