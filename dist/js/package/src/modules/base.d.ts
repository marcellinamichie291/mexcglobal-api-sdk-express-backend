/**
 * @stability stable
 */
export declare class Base {
    /**
     * @stability stable
     */
    config: any;
    /**
     * @stability stable
     */
    constructor(apiKey: string, apiSecret: string);
    /**
     * @stability stable
     */
    publicRequest(method: string, path: string, paramsObj?: any): any;
    /**
     * @stability stable
     */
    signRequest(method: string, path: string, paramsObj?: any): any;
}
