/**
 * 格式化工具类
 * @author: zzj
 * @date: 2020-04-22 21:58:22
 * @version: 1.0
 */
import "./accuracyCalculate.js";

export class Formatter {

  /**
   * 格式化金额
   * @param value {Number|String}
   * @param roundingMode {Number} 取整模式：0四舍五入，1向上取整，2向下取整
   * @param fractionDigits {Number} 保留小数位
   * @returns {String}
   */
  static amount(value, roundingMode = 2, fractionDigits = 2) {
    if (!value) return '0.00';
    if (value > 100000) {
      return (value / 10000).setScale(fractionDigits, roundingMode) + '万';
    } else {
      return (+value).setScale(fractionDigits, roundingMode);
    }
  }

  /**
   * 格式化手机号
   * @param value {string}
   * @return {string}
   */
  static phone(value) {
    value += "";
    return value.substr(0, 3) + "****" + value.substr(7, 4);
  }

  /**
   * 格式化银行卡号
   * @param value {string}
   * @return {string}
   */
  static bankCardNo(value) {
    value += "";
    return value.substr(0, 4) + "\xa0\xa0\xa0\xa0\xa0\xa0" + "****" + "\xa0\xa0\xa0\xa0\xa0\xa0" + "****" + "\xa0\xa0\xa0\xa0\xa0\xa0" + value.substr(-4);
  }

}