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
    return /^1[23456789]\d{9}$/.test(phone);
  }

  /**
   * 验证邮箱
   * @param email {String}
   * @return {boolean}
   */
  static isEmail(email) {
    return /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(email);
  }

  /**
   * 判断空值
   * @param value {*}
   * @return {boolean}
   */
  static isEmpty(value) {
    return value === null || value === undefined || value === "";
  }

  /**
   * 判断空数组
   * @param value {*}
   * @return {boolean}
   */
  static isEmptyArray(value) {
    let isAry = Array.isArray(value);
    if (isAry) {
      return !value.length;
    } else {
      return true;
    }
  }

  /**
   * 判断空对象
   * @param value {*}
   * @return {boolean}
   */
  static isEmptyObject(value) {
    let isObj = this.isObject(value);
    if (isObj) {
      return !Object.keys(value).length;
    } else {
      return true;
    }
  }

  /**
   * 是否为对象
   * @param value {*}
   * @return {boolean}
   */
  static isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }

  /**
   * 判断是否为微信浏览器
   * @returns {Boolean}
   */
  static isWeiXin() {
    return /MicroMessenger/i.test(navigator.userAgent);
  }

  /**
   * 判断是否为支付宝浏览器
   * @returns {Boolean}
   */
  static isAlipayClient() {
    return /AlipayClient/i.test(navigator.userAgent);
  }

  /**
   * 判断是否为IOS系统
   * @returns {Boolean}
   */
  static isIOS() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
  }

  /**
   * 判断身份证
   * @param idCardNo {string}
   * @return {boolean}
   */
  static isIdCard(idCardNo) {
    return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(idCardNo);
  }
}