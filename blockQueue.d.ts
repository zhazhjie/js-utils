/**
 * @author: zzj
 * @date: 2020-03-16 09:14:15
 * @version: 1.0
 * 阻塞队列
 */

export class BlockQueue {
    /**
     * @constructor
     * @param length {number}
     * @param cb {function}
     */
    constructor(length: number, cb?: (results: Array<any>) => void);

    /**
     * 执行任务
     * @param data
     * @param index
     */
    run(data?: any, index?: number): void;

    /**
     * 等待结果
     * 回调返回结果集
     */
    await(): Promise<any>;

    /**
     * 清除任务
     */
    clear(): void;

    private _doTask(): void;

    private _equals(): boolean;
}
