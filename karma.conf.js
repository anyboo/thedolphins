module.exports = function(config) {
    config.set({
        basePath: './src',
        browsers: ['Chrome'],

        files: [
            { pattern: 'test-context.js' }
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            'test-context.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        }
    })
}
