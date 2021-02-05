/**
 * @author: zzj
 * @date: 2019-08-16 11:40:20
 * @version: 1.0
 * 事件监听器（事件订阅、触发）
 */
export class EventListener {
    /**
     * @constructor
     */
    constructor();

    /**
     * 触发事件
     * @param event
     * @param arg
     */
    emit(event: string, ...arg: Array<any>): void;

    /**
     * 监听事件
     * @param event
     * @param cb
     */
    on(event: string, cb: (...arg: Array<any>) => void): void;

    /**
     * 监听一次性事件
     * @param event
     * @param onceCb
     */
    once(event: string, onceCb: (...arg: Array<any>) => void): void;

    /**
     * 取消监听
     * @param event
     * @param cb
     */
    off(event: string, cb: (...arg: Array<any>) => void): void;
}
