/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */

class AfterComplitePlugin {
  constructor(cb) {
    if (cb) this.cb = cb;
  }
  cb(stats) {
    const { spawn } = require('child_process');
    const { path, filename } = stats.compilation.outputOptions;
    const outPath = path + '/' + filename;
    console.log('编译完成了', outPath);
    return spawn('node', [outPath], { stdio: 'inherit' });
  }
  apply(compiler) {
    compiler.hooks.done.tap('after-emit', stats => {
      if (this.nodeP) this.nodeP.kill();
      this.nodeP = this.cb(stats);
    });
  }
}
module.exports = AfterComplitePlugin;
