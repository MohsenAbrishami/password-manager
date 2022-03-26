const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
        extensions: ['.js', '.vue', '.json'],
        mainFiles: ['index'],
    },
}
