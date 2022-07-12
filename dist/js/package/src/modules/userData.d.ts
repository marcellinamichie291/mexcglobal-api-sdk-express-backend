import { Common } from './common';
/**
 * @stability stable
 */
export declare class UserData extends Common {
    /**
     * Account Information.
     *
     * @returns
     * @stability stable
     */
    accountInfo(): any;
    /**
     * Account Trade List.
     *
     * @param options ``` [options.orderId] - This can only be used in combination with symbol. [options.startTime] [options.endTime] [options.fromId] - TradeId to fetch from. Default gets most recent trades. [options.limit] - default: 500, Max: 1000 ```.
     * @returns
     * @stability stable
     */
    accountTradeList(symbol: string, options?: any): any;
}
