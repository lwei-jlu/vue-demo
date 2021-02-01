/* /build/webpack.env.conf.js */
// 定义参数配置
const argv = require('yargs').argv;
 
// 获取环境变量
const env = argv.env;
process.stdout.write('the env is '+ env +'\n');
 
// require指定的环境配置文件
const envConfigFile = "../config/" + env + ".env.js";
process.stdout.write('the env config file is '+ envConfigFile +'\n');
 
// 将require的配置文件原封不动export回出去
module.exports = require(envConfigFile);