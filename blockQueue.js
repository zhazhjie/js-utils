/**
 * @author: zzj
 * @date: 2020-03-16 09:14:15
 * @version: 1.0
 * 阻塞队列
 */

export class BlockQueue {
  /**
   * @constructor
   * @param length {Number}
   * @param cb {Function}
   */
  constructor(length, cb = null) {
    this.length = length;
    this.cb = cb;
    this.index = 0;
    this.tasks = [];
    this.results = [];
  }

  run(data, index) {
    this.results[index || this.index] = data;
    this.index++;
    if (this._equals()) {
      this._doTask();
    }
  }

  await() {
    return new Promise((resolve, reject) => {
      if (this._equals()) {
        this._doTask();
      } else {
        this.tasks.push(resolve);
      }
    })
  }

  _doTask() {
    this.cb && this.cb(this.results);
    this.tasks.length && this.tasks.forEach(task => {
      task(this.results);
    });
    this.clear();
  }

  _equals() {
    return this.index === this.length;
  }

  clear() {
    this.index = 0;
    this.tasks = [];
    this.results = [];
  }
}
