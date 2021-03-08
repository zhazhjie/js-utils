/**
 * 验证工具类
 * @author: zzj
 * @date: 2020-04-22 21:48:36
 * @version: 1.0
 */
const _toString = Object.prototype.toString;

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
    switch (true) {
      case value === null || value === undefined || value === "":
        return true;
      case this.isArray(value):
        return !(value || []).length;
      case this.isObject(value):
        return !Object.keys(value).length;
      default:
        return false;
    }
  }

  /**
   * @deprecated
   * @see isEmpty
   * 判断空数组
   * @param value {*}
   * @return {boolean}
   */
  static isEmptyArray(value) {
    let isAry = this.isArray(value);
    if (isAry) {
      return !value.length;
    } else {
      return true;
    }
  }

  /**
   * @deprecated
   * @see isEmpty
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
  // static isObject(value) {
  //   return _toString.call(value) === "[object Object]";
  // }

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

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isArray(val) {
    return _toString.call(val) === '[object Array]';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isString(val) {
    return typeof val === 'string';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isNumber(val) {
    return typeof val === 'number';
  }

  /**
   *
   * @param val
   * @returns {boolean|boolean}
   */
  static isObject(val) {
    return val !== null && typeof val === 'object';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isDate(val) {
    return _toString.call(val) === '[object Date]';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isFile(val) {
    return _toString.call(val) === '[object File]';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isBlob(val) {
    return _toString.call(val) === '[object Blob]';
  }

  /**
   *
   * @param val
   * @returns {boolean}
   */
  static isFunction(val) {
    return _toString.call(val) === '[object Function]';
  }

}