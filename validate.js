/**
 * 验证工具类
 * @author: zzj
 * @date: 2020-04-22 21:48:36
 * @version: 1.0
 */
export class Validate {
  /**
   * 验证手机号
   * @param phone {String}
   * @return {boolean}
   */
  static isPhone(phone) {
    let reg = /^1[23456789]\d{9}$/;
    return reg.test(phone);
  }

  /**
   * 验证邮箱
   * @param email {String}
   * @return {boolean}
   */
  static isEmail(email) {
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    return reg.test(email);
  }

  /**
   * 判空
   * @param value {*}
   * @return {boolean}
   */
  static isEmpty(value) {
    return value === null || value === undefined || value === "";
  }

  /**
   * 是否为对象
   * @param value {*}
   * @return {boolean}
   */
  static isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
}