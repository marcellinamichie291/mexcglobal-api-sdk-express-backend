declare const createRequest: (config: any) => import("then-request").Response;
declare const removeEmptyValue: (obj: any) => any;
declare const isEmptyValue: (input: any) => boolean;
declare const buildQueryString: (params: any) => string;
declare const fromatData: (datas: any) => any;
export { createRequest, buildQueryString, removeEmptyValue, isEmptyValue, fromatData };
