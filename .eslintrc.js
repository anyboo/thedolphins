module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jasmine': true
    },
    'plugins': ['jasmine', 'html'],
    'extends': ['eslint:recommended', 'plugin:jasmine/recommended'],
    'parserOptions': {
        'sourceType': 'module'
    },
    'settings': {
        'html/html-extensions': ['.html', '.vue'],
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'no-console': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
