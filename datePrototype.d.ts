/**
 * @author: zzj
 * @date: 2019-08-05 18:07:09
 * @version: 1.0
 * 扩展Date类
 */

declare interface Date {
    /**
     * 格式化Date
     * @param fmt 如 yyyy-MM-dd hh:mm:ss
     * @returns {string}
     */
    Format(fmt: string): string;
}
