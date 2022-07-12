import { Base } from './base';
/**
 * @stability stable
 */
export declare class Market extends Base {
    /**
     * Exchange Information.
     *
     * @param options ``` [options.symbol] - symbol(optional) ex: BTCUSDT. [options.symbols] - for mutiple symbols, add comma for each symbol in string. ex: BTCUSDT,BNBBTC . ```.
     * @returns
     * @stability stable
     */
    exchangeInfo(options?: any): any;
    /**
     * Order Book.
     *
     * @param options ``` [options.limit] - Default 100; max 5000. Valid limits:[5, 10, 20, 50, 100, 500, 1000, 5000]. ```.
     * @returns
     * @stability stable
     */
    depth(symbol: string, options?: any): any;
    /**
     * Recent Trades List.
     *
     * @param options ``` [options.limit] -limit(optional) Default 500; max 1000. ex: 500. ```.
     * @returns
     * @stability stable
     */
    trades(symbol: string, options?: any): any;
    /**
     * Old Trade Lookup.
     *
     * @param options ``` [options.limit] -limit(optional) Default 500; max 1000. ex:500. ```.
     * @returns
     * @stability stable
     */
    historicalTrades(symbol: string, options?: any): any;
    /**
     * Compressed/Aggregate Trades List.
     *
     * Note: If sending startTime and endTime, the interval must be less than one hour
     *
     * @param options ``` [options.fromId] - id to get aggregate trades from INCLUSIVE. [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE. [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE. [options.limit] - Default 500; max 1000. ex:500 ```.
     * @returns
     * @stability stable
     */
    aggTrades(symbol: string, options?: any): any;
    /**
     * Kline/Candlestick Data.
     *
     * @param options ``` [options.startTime] [options.endTime] [options.limit] -Default 500; max 1000. ex: 500 ```.
     * @returns
     * @stability stable
     */
    klines(symbol: string, interval: string, options?: any): any;
    /**
     * Current Average Price.
     *
     * @stability stable
     */
    avgPrice(symbol: string): any;
    /**
     * 24hr Ticker Price Change Statistics.
     *
     * @stability stable
     */
    ticker24hr(symbol?: string): any;
    /**
     * Symbol Price Ticker.
     *
     * @stability stable
     */
    tickerPrice(symbol?: string): any;
    /**
     * Symbol Order Book Ticker.
     *
     * @stability stable
     */
    bookTicker(symbol?: string): any;
}
