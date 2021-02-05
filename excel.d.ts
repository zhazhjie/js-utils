/**
 * @authors zhazhjie (zhazhjie@vip.qq.com)
 * @date    2018-05-14 10:00:27
 * @version 1.0
 */

/**
 * 导入excel
 * @param file {File}
 */
export function importExcel(file: File): Promise<any>;

/**
 * 导出excel
 * @param json {Array}
 * @param header {Object}
 * @param name {String}
 * @param type {String}
 */
export function exportExcel(json: Array<any>, header: any, name: string, type: string): void;
