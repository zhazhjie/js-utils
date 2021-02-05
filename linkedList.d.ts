/**
 * @author: zzj
 * @date: 2019-08-13 16:44:17
 * @version: 1.0
 * 双向链表，实现了增删改查等（add,remove,set,get...）
 * 下划线_开头的方法为私有方法
 */

export class LinkedList<T> {
    constructor(args?: Array<T>);

    /**
     * 新增节点
     * @param value
     * @param index
     * @returns {LinkedList}
     */
    add(value: T, index?: number): LinkedList<T>;

    /**
     * 修改节点
     * @param value
     * @param index
     * @returns {LinkedList}
     */
    set(value: T, index: number): LinkedList<T>;

    /**
     * 删除节点
     * @param index
     * @returns {*}
     */
    remove(index: number): T;

    /**
     * 获取节点
     * @param index
     * @returns {*}
     */
    get(index: number): T;

    /**
     * 添加到链表头部
     * @param value
     * @returns {LinkedList}
     */
    addFirst(value: T): LinkedList<T>;

    /**
     * 添加到链表尾部
     * @param value
     * @returns {LinkedList}
     */
    addLast(value: T): LinkedList<T>;

    /**
     * 删除第一个节点
     * @returns {*}
     */
    removeFirst(): T;

    /**
     * 删除最后一个节点
     * @returns {*}
     */
    removeLast(): T;

    /**
     * 获取第一个节点
     * @returns {*}
     */
    getFirst(): T;

    /**
     * 获取最后一个节点
     * @returns {*}
     */
    getLast(): T;

    /**
     * 链表长度
     * @returns {number}
     */
    length(): number;

    /**
     * 是否包含某个值，返回index
     * @param value
     * @returns {number}
     */
    indexOf(value): number;

    /**
     * 是否包含某个值，返回boolean
     * @param value
     * @returns {boolean}
     */
    contains(value): boolean;

    /**
     * 迭代器
     * @param callback
     */
    forEach(callback: (item: T, index: number) => void): void;

    /**
     * 转成数组
     * @returns {Array}
     */
    toArray(): LinkedList<T>;
}
