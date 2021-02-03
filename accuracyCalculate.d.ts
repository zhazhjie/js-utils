/**
 * @author: zzj
 * @date: 2019-08-05 18:07:09
 * @version: 1.0
 * 扩展Number类
 * 修复如：0.1+0.2，0.58*100等精度问题，toFixed bug
 */
declare interface Number {
    /**
     * 加法：支持多个数相加
     * 如：0.1.add(0.2,0.3)
     * @param args
     * @returns {number}
     */
    add: (...args: [number]) => number;
    /**
     * 减法：支持多个数相减
     * 如：0.1.subtract(0.2,0.3)
     * @param args
     * @returns {number}
     */
    subtract: (...args: [number]) => number;
    /**
     * 乘法：支持多个数相乘
     * 如：0.1.multiply(0.2,0.3)
     * @param args
     * @returns {number}
     */
    multiply: (...args: [number]) => number;
    /**
     * 除法：支持多个数相除
     * 如：0.1.divide(0.2,0.3)
     * @param args
     * @returns {number}
     */
    divide: (...args: [number]) => number;
    /**
     * 四舍五入，修复toFixed bug
     * @param fractionDigits
     * @returns {string}
     */
    $toFixed: (fractionDigits: number) => string;
    /**
     * 格式化数值
     * @param fractionDigits 保留小数位
     * @param roundingMode 取整模式：0四舍五入，1向上取整，2向下取整
     * @returns {string}
     */
    setScale: (fractionDigits: number, roundingMode: number) => string;
}
