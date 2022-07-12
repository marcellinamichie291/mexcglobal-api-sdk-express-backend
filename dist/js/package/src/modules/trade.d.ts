import { UserData } from './userData';
/**
 * @stability stable
 */
export declare class Trade extends UserData {
    /**
     * Test New Order.
     *
     * @param options ``` [options.timeInForce] [options.quantity] [options.quoteOrderQty] [options.price] [options.newClientOrderId] - A unique id among open orders. Automatically generated if not sent. [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL; MARKET and LIMIT order types default to FULL, all other orders default to ACK. [options.recvWindow] - The value cannot be greater than 60000 ```.
     * @returns
     * @stability stable
     */
    newOrderTest(symbol: string, side: string, orderType: string, options?: any): any;
    /**
     * New Order.
     *
     * @param options ``` [options.timeInForce] [options.quantity] [options.quoteOrderQty] [options.price] [options.newClientOrderId] - A unique id among open orders. Automatically generated if not sent. [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order. [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL; MARKET and LIMIT order types default to FULL, all other orders default to ACK. [options.recvWindow] - The value cannot be greater than 60000 ```.
     * @returns
     * @stability stable
     */
    newOrder(symbol: string, side: string, orderType: string, options?: any): any;
    /**
     * Cancel Order.
     *
     * @param options ``` [options.orderId] [options.origClientOrderId] [options.newClientOrderId] ```.
     * @returns
     * @stability stable
     */
    cancelOrder(symbol: string, options?: any): any;
    /**
     * Cancel all Open Orders on a Symbol.
     *
     * @returns
     * @stability stable
     */
    cancelOpenOrders(symbol: string): any;
    /**
     * Query Order.
     *
     * @param options ``` [options.orderId] - At least one of orderId and origClientOrderId needs to be sent [options.origClientOrderId] ```.
     * @returns
     * @stability stable
     */
    queryOrder(symbol: string, options?: any): any;
    /**
     * Current Open Orders.
     *
     * @returns
     * @stability stable
     */
    openOrders(symbol: string): any;
    /**
     * All Orders.
     *
     * @param options ``` [options.orderId] - If startTime and endTime are set, orderId does not need to be set [options.startTime] [options.endTime] [options.limit] - value between 1 and 1000, default is 500 ```.
     * @returns
     * @stability stable
     */
    allOrders(symbol: string, options?: any): any;
}
