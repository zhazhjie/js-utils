/**
 * 格式化工具类
 * @author: zzj
 * @date: 2020-04-22 21:58:22
 * @version: 1.0
 */
export class Formatter {

    /**
     * 格式化金额
     * @param value {number|string}
     * @param roundingMode {number} 取整模式：0四舍五入，1向上取整，2向下取整
     * @param fractionDigits {number} 保留小数位
     * @returns {string}
     */
    static amount(value: string | number, roundingMode: number, fractionDigits: number): string;

    /**
     * 格式化手机号
     * @param value {string}
     * @return {string}
     */
    static phone(value: string): string;

    /**
     * 格式化银行卡号
     * @param value {string}
     * @return {string}
     */
    static bankCardNo(value: string): string;

}