/**
 * 验证工具类
 * @author: zzj
 * @date: 2020-04-22 21:48:36
 * @version: 1.0
 */
export class Validate {
  static isPhone(phone) {
    let reg = /^1[23456789]\d{9}$/;
    return reg.test(phone);
  }

  static isEmail(email) {
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    return reg.test(email);
  }

  static isEmpty(value) {
    return value === null || value === undefined || value === "";
  }

  static isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
}