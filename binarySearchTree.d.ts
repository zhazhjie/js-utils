/**
 * @author: zzj
 * @date: 2019-08-14 16:05:26
 * @version: 1.0
 * 二叉搜索树，实现了增删查
 * 查包括：单项、最大/最小值、最接近值、大于/小于指定key的集合、指定key的中序集合
 * 下划线private _开头的方法为私有方法
 */

export class BinarySearchTree<T> {
    constructor(array: Array<T>, key: string);

    /**
     * 插入节点
     * @param key
     * @param value
     */
    insert(key: string, value: T): void;

    /**
     * 获取key对应的值
     * @param key
     * @returns {*|*|*}
     */
    get(key: string): T;

    /**
     * 获取最小值
     * @returns {*|*|*}
     */
    getMin(): T;

    /**
     * 获取最大值
     * @returns {*|*|*}
     */
    getMax(): T;

    /**
     * 寻找最接近且小于等于指定key的节点
     * @param key
     * @returns {*|*|*|*}
     */
    getFloor(key: string): T;

    /**
     * 寻找最接近且大于等于指定key的节点
     * @param key
     * @returns {*|*|*|*}
     */
    getCeiling(key: string): T;

    /**
     * 寻找最接近指定key的节点
     * @param key
     * @returns {*|*|*|*}
     */
    getClosest(key: string): T;

    /**
     * 获取小于指定key的集合
     * @param key
     * @returns {Array}
     */
    getLesser(key: string): Array<T>;

    /**
     * 获取大于指定key的集合
     * @param key
     * @returns {Array}
     */
    getGreater(key: string): Array<T>;

    /**
     * 获取指定key节点下的中序集合
     * @param key
     * @returns {Array}
     */
    inOrderTraversal(key: string): Array<T>;

    /**
     * 删除节点
     * @param key
     * @returns {*}
     */
    remove(key: string): T;

    /**
     * 二叉树长度
     * @returns {number}
     */
    length(): number;

    /**
     * 是否包含某个值，返回boolean
     * @param key
     * @returns {boolean}
     */
    contains(key: string): boolean;

    /**
     * 迭代器
     * @param callback
     */
    forEach(callback: (item: T, index: number) => void): void;

    /**
     * 转成数组
     * @returns {Array}
     */
    toArray(): Array<T>;
}
