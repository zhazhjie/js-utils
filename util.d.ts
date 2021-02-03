/**
 * @author: zhazhjie
 * @email: zhazhjie@vip.qq.com
 * @date: 2018-11-05 14:20:38
 * @version: 1.0
 */

/**
 * 设置本地存储
 * @param key {string}
 * @param value {*}
 * @param local {boolean}
 */
export function setStore(key: string, value: any, local?: boolean): void;

/**
 * 获取本地存储
 * @param key {string}
 * @param local {boolean}
 * @returns {*}
 */
export function getStore(key: string, local?: boolean): any;

/**
 * @deprecated
 * @see Validate
 * 判空
 * @param value {*}
 * @returns {boolean}
 */
export function isEmpty(value: any): boolean;

/**
 * 列表转树形
 * @param list {Array}
 * @param parentId {number|string}
 * @param key {string}
 * @param parentKey {string}
 * @returns {Array}
 */
export function toTreeData(list: Array<any>, parentId?: string | number, key?: string, parentKey?: string): Array<any>;

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data: Array<any>, id?: string, pid?: string): Array<any>;

/**
 * list转map
 * @param list
 * @param key
 * @returns {*}
 */
export function listToMap(list: Array<any>, key?: string): any;

/**
 * @deprecated
 * @see Validate
 * 验证手机号
 * @param phone {number|string}
 * @returns {boolean}
 */
export function phoneValidate(phone: string): boolean;

/**
 * @deprecated
 * @see Validate
 * 验证邮箱
 * @param email {string}
 * @returns {boolean}
 */
export function emailValidate(email: string): boolean;

/**
 * 获取cookie
 * @param name {string}
 * @returns {string}
 */
export function getCookie(name: string): string;

/**
 * 设置cookie
 * @param name {string}
 * @param value {string}
 * @param exTime {number}
 * @param domain {string}
 * @param path {string}
 */
export function setCookie(name: string, value: string, exTime?: number, domain?: string, path?: string): void;

/**
 * base64转文件流
 * @param dataURL {string}
 * @param fileName {string}
 * @returns {File}
 */
export function dataURLtoFile(dataURL: string, fileName?: string): File;

/**
 * 文件流转base64
 * @param file {File}
 */
export function fileToDataURL(file: File): Promise<any>;

/**
 * @typedef {object} CompressData
 * @property {File} [file]
 * @property {string} [imgData]
 * @property {string} [fileName]
 * @property {string} [fileType]
 * @property {'file'|'base64'} [exportType]
 * @property {number} [maxWidth]
 * @property {number} [maxHeight]
 */
interface CompressData {
    file?: File;
    imgData?: string;
    fileName?: string;
    fileType?: string;
    exportType?: string;
    maxWidth?: number;
    maxHeight?: number;
}

/**
 * 压缩图片
 * @param data {CompressData}
 */
export function compressImg(data): Promise<any>;

/**
 * 防抖函数
 * @param callback {Function}
 * @param delay {number}
 */
export function debounce(callback: Function, delay?: number): () => void;

/**
 * 节流函数
 * @param callback {Function}
 * @param delay {number}
 */
export function throttle(callback: Function, delay?: number): () => void;

/**
 * @deprecated
 * @see Formatter
 * 格式化金额（默认截断2位小数）
 * @param value {number|string}
 * @param roundingMode {number}
 * @param fractionDigits {number}
 * @returns {string}
 */
export function formatAmount(value: string | number, roundingMode: number, fractionDigits: number): string;

/**
 * @deprecated
 * @see Formatter
 * 格式化手机号
 * @param value {string|number}
 * @returns {string}
 */
export function formatPhone(value: string): string;

/**
 * @deprecated
 * @see Validate
 * 判断是否为微信浏览器
 * @returns {boolean}
 */
export function isWeiXin(): boolean;

/**
 * @deprecated
 * @see Validate
 * 判断是否为IOS系统
 * @returns {boolean}
 */
export function isIOS(): boolean;

/**
 * 复制文本
 * @param text {string}
 * @returns {boolean}
 */
export function copyText(text: string): string;

/**
 * 简单复制
 * @param data {object}
 * @returns {object}
 */
export function copy(data: any): any;

/**
 * jsonp
 * @param url {string}
 * @param params {object}
 * @param jsonpCallback {string}
 * @param timeout {number}
 * @returns {Promise<*>}
 */
export function jsonp(url: string, params?: any, jsonpCallback?: string, timeout?: number): void;

/**
 * 获取url参数
 * @param [key] {string}
 */
export function getSearchParams(key?: string): any;

/**
 * 下载文件
 * @typedef {object} DownloadData
 * @property {string} [dataUrl]
 * @property {File} [file]
 * @property {string} [fileName]
 * @param {*} data
 */
export function download(data: any);
