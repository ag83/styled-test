require('@babel/register');
const webpackMerge = require('webpack-merge');

const common = require('./configure/webpack.common');

const envs = {
    development: 'dev',
    production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./configure/webpack.${env}`);
module.exports = webpackMerge(common, envConfig);