/**
 * @author: zzj
 * @date: 2019-08-13 16:44:17
 * @version: 1.0
 * 双向链表，实现了增删改查等（add,remove,set,get...）
 * 下划线_开头的方法为私有方法
 */

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

export class LinkedList {
  constructor(args) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._init(args);
  }

  /**
   * 新增节点
   * @param value
   * @param index
   * @returns {LinkedList}
   */
  add(value, index) {
    let prev = null, next = null;
    if (index !== undefined) {
      next = this._getNode(index);
      if (next) prev = next.prev;
    }
    let newNode = new Node(value, prev || this.last, next);
    this._link(newNode);
    return this;
  }

  /**
   * 修改节点
   * @param value
   * @param index
   * @returns {LinkedList}
   */
  set(value, index) {
    let oldNode = this._getNode(index);
    let newNode = new Node(value, oldNode.prev, oldNode.next);
    this._unlink(oldNode);
    this._link(newNode);
    return this;
  }

  /**
   * 删除节点
   * @param index
   * @returns {*}
   */
  remove(index) {
    if (index === undefined) {
      return this.removeLast();
    } else {
      let node = this._getNode(index);
      return this._unlink(node);
    }
  }

  /**
   * 获取节点
   * @param index
   * @returns {*}
   */
  get(index) {
    let node = this._getNode(index);
    return node.value;
  }

  /**
   * 添加到链表头部
   * @param value
   * @returns {LinkedList}
   */
  addFirst(value) {
    let newNode = new Node(value, null, this.first);
    this._link(newNode);
    return this;
  }

  /**
   * 添加到链表尾部
   * @param value
   * @returns {LinkedList}
   */
  addLast(value) {
    let newNode = new Node(value, this.last, null);
    this._link(newNode);
    return this;
  }

  /**
   * 删除第一个节点
   * @returns {*}
   */
  removeFirst() {
    return this.first && this._unlink(this.first);
  }

  /**
   * 删除最后一个节点
   * @returns {*}
   */
  removeLast() {
    return this.last && this._unlink(this.last);
  }

  /**
   * 获取第一个节点
   * @returns {*}
   */
  getFirst() {
    return this.first && this.first.value;
  }

  /**
   * 获取最后一个节点
   * @returns {*}
   */
  getLast() {
    return this.last && this.last.value;
  }

  /**
   * 链表长度
   * @returns {number}
   */
  length() {
    return this.size;
  }

  /**
   * 是否包含某个值，返回index
   * @param value
   * @returns {number}
   */
  indexOf(value) {
    let index = -1;
    this._iterator(this.size, (v, i) => {
      if (v === value) index = i;
    });
    return index;
  }

  /**
   * 是否包含某个值，返回boolean
   * @param value
   * @returns {boolean}
   */
  contains(value) {
    return this.indexOf(value) > -1;
  }

  /**
   * 迭代器
   * @param callback
   */
  forEach(callback) {
    this._iterator(this.size, callback);
  }

  /**
   * 转成数组
   * @returns {Array}
   */
  toArray() {
    let array = [];
    this._iterator(this.size, value => array.push(value));
    return array;
  }

  /**
   * 检查索引有效性
   * @param index
   * @returns {boolean}
   * @private
   */
  _checkIndex(index) {
    if (index >= 0 && index < this.size) {
      return true;
    } else {
      throw new Error("index out of range");
    }
  }

  /**
   * 迭代节点
   * @param index
   * @param callback
   * @returns {null}
   * @private
   */
  _iterator(index, callback) {
    let node = this.first;
    for (let i = 0; i < index; node = node.next) {
      if (callback) callback(node.value, i);
      i++;
    }
    return node;
  }

  /**
   * 获取对应索引的节点
   * @param index
   * @returns {*}
   * @private
   */
  _getNode(index) {
    this._checkIndex(index);
    return this._iterator(index);
  }

  /**
   * 添加节点到链表
   * @param node
   * @private
   */
  _link(node) {
    let {prev, next} = node;
    if (!prev) {
      this.first = node;
    } else {
      prev.next = node;
    }
    if (!next) {
      this.last = node;
    } else {
      next.prev = node;
    }
    this.size++;
  }

  /**
   * 从链表删除节点
   * @param node
   * @returns {*}
   * @private
   */
  _unlink(node) {
    let {prev, next, value} = node;
    if (!prev) {
      this.first = next;
    } else {
      prev.next = next;
      node.prev = null;
    }
    if (!next) {
      this.last = prev;
    } else {
      next.prev = prev;
      node.next = null;
    }
    this.size--;
    return value;
  }

  _init(args) {
    if (Array.isArray(args)) {
      args.forEach(el => {
        this.add(el);
      });
      this.size = args.length;
    }
  }
}
