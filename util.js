/**
 * @author: zhazhjie
 * @email: zhazhjie@vip.qq.com
 * @date: 2018-11-05 14:20:38
 * @version: 1.0
 */
import {Validate} from "./validate";

export function setStore(key, value, local = false) {
  if (local) {
    if (Validate.isEmpty(value)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } else {
    if (Validate.isEmpty(value)) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));

    }
  }
}

/**
 * 获取本地存储
 * @param key {String}
 * @param local {Boolean}
 * @returns {*}
 */
export function getStore(key, local = false) {
  if (local) {
    return JSON.parse(localStorage.getItem(key) || 'null')
  } else {
    return JSON.parse(sessionStorage.getItem(key) || 'null')
  }
}

/**
 * @deprecated
 * @see Validate
 * 判空
 * @param value {Object}
 * @returns {boolean}
 */
export function isEmpty(value) {
  return value === null || value === undefined || value === "";
}

/**
 * 列表转树形
 * @param list {Array}
 * @param parentId {Number|String} @deprecated
 * @param key {String}
 * @param parentKey {String}
 * @returns {Array}
 */
export function toTreeData(list, parentId = "0", key = "id", parentKey = "parentId") {
  let treeList = [];
  let map = listToMap(list, key);
  let getLevel = (item, level = 1) => {
    let parent = map[item[parentKey]];
    if (parent) {
      return getLevel(parent, ++level);
    }
    return level;
  }
  list.forEach(item => {
    let parent = map[item[parentKey]];
    if (!parent) {
      item._level = 1;
      treeList.push(item);
    } else {
      if (!parent.children) parent.children = [];
      item._level = getLevel(item);
      parent.children.push(item);
    }
  });
  return treeList;
}

/**
 * 查找子节点
 * @param parent {Object}
 * @param list {Array}
 * @param key {String}
 * @param parentKey {String}
 * @param level {Number}
 * @returns {Object}
 */
function findChildren(parent, list, key, parentKey, level) {
  parent._level = level;
  level++;
  list.forEach(item => {
    if (parent[key] === item[parentKey]) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(findChildren(item, list, key, parentKey, level));
    }
  });
  return parent;
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = 'id', pid = 'parentId') {
  let res = [];
  let temp = {};
  for (let i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (let k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1;
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res;
}

/**
 * list转map
 * @param list
 * @param key
 * @returns {*}
 */
export function listToMap(list, key = "id") {
  let map = {};
  list.forEach(item => {
    map[item[key]] = item;
  });
  return map;
}

/**
 * @deprecated
 * @see Validate
 * 验证手机号
 * @param phone {Number|String}
 * @returns {Boolean}
 */
export function phoneValidate(phone) {
  let reg = /^1[23456789]\d{9}$/;
  return reg.test(phone);
}

/**
 * @deprecated
 * @see Validate
 * 验证邮箱
 * @param email {String}
 * @returns {Boolean}
 */
export function emailValidate(email) {
  // 邮箱验证正则
  let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  return reg.test(email);
}

/**
 * 获取cookie
 * @param name {String}
 * @returns {String}
 */
export function getCookie(name) {
  name += "=";
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) return cookie.substring(name.length, cookie.length);
  }
  return "";
}

/**
 * 设置cookie
 * @param name {String}
 * @param value {String}
 * @param exTime {number}
 * @param domain {String}
 * @param path {String}
 */
export function setCookie(name, value, exTime, domain = null, path = null) {
  let date = new Date();
  if (exTime) date.setTime(date.getTime() + (exTime * 1000 || 0));
  let expires = "expires=" + date.toGMTString();
  document.cookie = name + "=" + value + ";" + expires + (domain ? ";domain=" + domain : "") + (path ? ";path=" + path : "");
}

/**
 * base64转文件流
 * @param dataURL {String}
 * @param fileName {String}
 * @returns {File}
 */
export function dataURLtoFile(dataURL, fileName) {
  let type = dataURL.split(/[:;]/)[1];
  let byteString = atob(dataURL.split(',')[1]);
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  // return new Blob([ab], { type: 'image/jpeg' });
  return new File([ia], fileName || 'file', {
    type: type,
    lastModified: Date.now()
  })
}

/**
 * 文件流转base64
 * @param file {File}
 */
export function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = function () {
      resolve(fr.result);
    };
    fr.onerror = function () {
      reject(fr.result);
    };
    fr.readAsDataURL(file);
  });
}

/**
 * @typedef {Object} CompressData
 * @property {File} [file]
 * @property {String} [imgData]
 * @property {String} [fileName]
 * @property {String} [fileType]
 * @property {'file'|'base64'} [exportType]
 * @property {Number} [maxWidth]
 * @property {Number} [maxHeight]
 */

/**
 * 压缩
 * @param data {CompressData}
 * @param resolve
 * @param reject
 */
function doCompress(data, resolve, reject) {
  let {fileName = "file", fileType, imgData, exportType, maxWidth, maxHeight} = data;
  if (maxWidth || maxHeight) {
    let img = new Image();
    img.onload = function () {
      let NW = img.naturalWidth;
      let NH = img.naturalHeight;
      let realW = NW;
      let realH = NH;
      let NR = NW / NH;
      let MR = maxWidth / maxHeight;
      let canvas = document.createElement('canvas');
      if (maxWidth && maxHeight) {
        if (NR >= MR && NW > maxWidth) {
          realW = maxWidth;
          realH = realW / NR;
        } else if (NR < MR && NH > maxHeight) {
          realH = maxHeight;
          realW = realH * NR;
        }
      } else if (maxWidth && NW > maxWidth) {
        realW = maxWidth;
        realH = realW / NR;
      } else if (maxHeight && NH > maxHeight) {
        realH = maxHeight;
        realW = realH * NR;
      }
      canvas.width = realW;
      canvas.height = realH;
      let ctx = canvas.getContext('2d');
      ctx.rect(0, 0, realW, realH);
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fill();
      ctx.drawImage(img, 0, 0, realW, realH);
      let imgData = canvas.toDataURL(fileType, 1);
      resolve(exportType === 'file' ? dataURLtoFile(imgData, fileName) : imgData);
    };
    img.onerror = function (error) {
      reject(error);
    };
    img.src = imgData;
  } else {
    resolve(exportType === 'file' ? dataURLtoFile(imgData, fileName) : imgData);
  }
}

/**
 * 压缩图片
 * @param data {CompressData}
 */
export function compressImg(data) {
  let {file, imgData} = data;
  return new Promise((resolve, reject) => {
    if (file) {
      fileToDataURL(file).then(imgData => {
        data.imgData = imgData;
        data.fileName = file.name;
        data.fileType = file.type;
        doCompress(data, resolve, reject);
      }).catch(error => reject(error));
    } else {
      data.fileType = imgData.split(/[:;]/)[1];
      doCompress(data, resolve, reject);
    }
  });
}

/**
 * 防抖函数
 * @param callback {Function}
 * @param delay {Number}
 */
export function debounce(callback, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay)
  };
}

/**
 * 节流函数
 * @param callback {Function}
 * @param delay {number}
 */
export function throttle(callback, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...args);
        timer = null;
      }, delay)
    }
  };
}

/**
 * @deprecated
 * @see Formatter
 * 格式化金额（默认截断2位小数）
 * @param value {Number|String}
 * @param roundingMode {Number}
 * @param fractionDigits {Number}
 * @returns {String}
 */
export function formatAmount(value, roundingMode = 2, fractionDigits = 2) {
  if (!value) return '0.00';
  if (value > 100000) {
    return (value / 10000).setScale(fractionDigits, roundingMode) + '万';
  } else {
    return (+value).setScale(fractionDigits, roundingMode);
  }
}

/**
 * @deprecated
 * @see Formatter
 * 格式化手机号
 * @param value {String|Number}
 * @returns {String}
 */
export function formatPhone(value) {
  value += "";
  return value.substr(0, 3) + "****" + value.substr(7, 4);
}

/**
 * @deprecated
 * @see Validate
 * 判断是否为微信浏览器
 * @returns {Boolean}
 */
export function isWeiXin() {
  let ua = window.navigator.userAgent.toLowerCase();
  return /MicroMessenger/i.test(ua);
}

/**
 * @deprecated
 * @see Validate
 * 判断是否为IOS系统
 * @returns {Boolean}
 */
export function isIOS() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}

/**
 * 复制文本
 * @param text {String}
 * @returns {Boolean}
 */
export function copyText(text) {
  let el = document.createElement("span");
  el.innerText = text;
  el.style = "position:absolute;z-index:-1;opacity:0;user-select: all;";
  document.body.appendChild(el);
  let range = document.createRange();
  range.selectNode(el);
  let selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  let result = document.execCommand('copy');
  document.body.removeChild(el);
  return result;
}

/**
 * 简单复制
 * @param data {Object}
 * @returns {Object}
 */
export function copy(data) {
  return JSON.parse(JSON.stringify(data));
}

/**
 * jsonp
 * @param url {String}
 * @param params {Object}
 * @param jsonpCallback {String}
 * @param timeout {Number}
 * @returns {Promise<*>}
 */
export function jsonp(url, params = {}, jsonpCallback = "callback", timeout = 10000) {
  return new Promise((resolve, reject) => {
    let keys = Object.keys(params);
    let form = keys.map(key => key + "=" + encodeURIComponent(params[key])).join("&");
    let head = document.querySelector("head");
    let script = document.createElement("script");
    let timer;
    let processFlag = false;
    let checkResult = function () {
      if (processFlag) return false;
      if (head.contains(script)) head.removeChild(script);
      return processFlag = true;
    };
    window[params[jsonpCallback]] = (result) => {
      clearTimeout(timer);
      if (checkResult()) resolve(result);
    };
    timer = setTimeout(() => {
      if (checkResult()) reject();
    }, timeout);
    script.type = "text/javascript";
    script.src = `${url}${form ? "?" + form : ""}`;
    head.appendChild(script);
  })
}

/**
 * 获取url参数
 * @param [key] {String}
 */
export function getSearchParams(key) {
  let href = location.href;
  let index = href.indexOf("?");
  let results = {};
  if (index === -1) return key === void 0 ? results : null;
  let search = href.substring(index + 1);
  let searchAry = search.split("&");
  searchAry.forEach(item => {
    let val = item.split("=");
    results[val[0]] = decodeURIComponent(val[1]);
  });
  return key === void 0 ? results : results[key];
}

/**
 * 下载文件
 * @typedef {Object} DownloadData
 * @property {String} [dataUrl]
 * @property {File} [file]
 * @property {String} [fileName]
 * @param {DownloadData} data
 */
export function download(data) {
  let {dataUrl, file, fileName} = data;
  if (dataUrl) file = dataURLtoFile(dataUrl, fileName);
  let link = document.createElement("a");
  link.download = fileName;
  link.href = URL.createObjectURL(file);
  link.click();
}

/**
 * 深度拷贝对象
 * @returns {{}}
 */
export function deepCopy(obj) {
  let result;
  if (Validate.isObject(obj)) {
    result = new obj.constructor();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy(obj[key]);
      }
    }
  } else {
    result = obj;
  }
  return result;
}