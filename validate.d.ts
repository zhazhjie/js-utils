/**
 * 验证工具类
 * @author: zzj
 * @date: 2020-04-22 21:48:36
 * @version: 1.0
 */
export class Validate {
    /**
     * 验证手机号
     * @param phone {string}
     * @return {boolean}
     */
    static isPhone(phone: string): boolean;

    /**
     * 验证邮箱
     * @param email {string}
     * @return {boolean}
     */
    static isEmail(email: string): boolean;

    /**
     * 判断空值
     * @param value {*}
     * @return {boolean}
     */
    static isEmpty(value: any): boolean;

    /**
     * 判断空数组
     * @param value {*}
     * @return {boolean}
     */
    static isEmptyArray(value: any): boolean;

    /**
     * 判断空对象
     * @param value {*}
     * @return {boolean}
     */
    static isEmptyObject(value: any): boolean;

    /**
     * 是否为对象
     * @param value {*}
     * @return {boolean}
     */
    // static isObject(value: any): boolean;

    /**
     * 判断是否为微信浏览器
     * @returns {boolean}
     */
    static isWeiXin(): boolean;

    /**
     * 判断是否为支付宝浏览器
     * @returns {boolean}
     */
    static isAlipayClient(): boolean;

    /**
     * 判断是否为IOS系统
     * @returns {boolean}
     */
    static isIOS(): boolean;

    /**
     * 判断身份证
     * @param idCardNo {string}
     * @return {boolean}
     */
    static isIdCard(idCardNo: string): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isArray(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    isUndefined(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isString(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isNumber(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean|boolean}
     */
    static isObject(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isDate(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isFile(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isBlob(val: any): boolean;

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isFunction(val: any): boolean;
}