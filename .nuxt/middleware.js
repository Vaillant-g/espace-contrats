const middleware = {}

middleware['authenticated'] = require('..\\client\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

export default middleware
