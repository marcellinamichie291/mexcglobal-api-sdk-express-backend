"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const util_1 = require("../util");
const crypto = require("crypto");
/**
 * @stability stable
 */
class Base {
    /**
     * @stability stable
     */
    constructor(apiKey, apiSecret) {
        /**
         * @stability stable
         */
        this.config = {};
        this.config.apiKey = apiKey;
        this.config.apiSecret = apiSecret;
        this.config.baseURL = 'https://api.mexc.com/api/v3';
    }
    /**
     * @stability stable
     */
    publicRequest(method, path, paramsObj = {}) {
        paramsObj = util_1.removeEmptyValue(paramsObj);
        paramsObj = util_1.buildQueryString(paramsObj);
        if (paramsObj !== '') {
            path = `${path}?${paramsObj}`;
        }
        return util_1.createRequest({
            method: method,
            baseURL: this.config.baseURL,
            url: path,
            headers: {
                'Content-Type': 'application/json',
                'X-MEXC-APIKEY': this.config.apiKey
            }
        });
    }
    /**
     * @stability stable
     */
    signRequest(method, path, paramsObj = {}) {
        const timestamp = Date.now();
        paramsObj = util_1.removeEmptyValue(paramsObj);
        const queryString = util_1.buildQueryString({ ...paramsObj, timestamp });
        const signature = crypto
            .createHmac('sha256', this.config.apiSecret)
            .update(queryString)
            .digest('hex');
        return util_1.createRequest({
            method: method,
            baseURL: this.config.baseURL,
            url: `${path}?${queryString}&signature=${signature}`,
            headers: {
                'Content-Type': 'application/json',
                'X-MEXC-APIKEY': this.config.apiKey
            }
        });
    }
}
exports.Base = Base;
_a = JSII_RTTI_SYMBOL_1;
Base[_a] = { fqn: "mexc-sdk.Base", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBNEU7QUFDNUUsaUNBQWlDOzs7O0FBRWpDLE1BQWEsSUFBSTs7OztJQUVmLFlBQVksTUFBYyxFQUFFLFNBQWlCOzs7O1FBRHRDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyw2QkFBNkIsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRU0sYUFBYSxDQUFFLE1BQWMsRUFBRSxJQUFZLEVBQUUsWUFBaUIsRUFBRTtRQUNyRSxTQUFTLEdBQUcsdUJBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsU0FBUyxHQUFHLHVCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUcsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksU0FBUyxFQUFFLENBQUE7U0FDOUI7UUFFRCxPQUFPLG9CQUFhLENBQUM7WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQzVCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDcEM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDOzs7O0lBRU0sV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFZLEVBQUUsWUFBaUIsRUFBRTtRQUNsRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDNUIsU0FBUyxHQUFHLHVCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLHVCQUFnQixDQUFDLEVBQUUsR0FBRyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUNqRSxNQUFNLFNBQVMsR0FBRyxNQUFNO2FBQ25CLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDM0MsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFbEIsT0FBTyxvQkFBYSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUM1QixHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksV0FBVyxjQUFjLFNBQVMsRUFBRTtZQUNwRCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNwQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7O0FBNUNILG9CQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1aWxkUXVlcnlTdHJpbmcsIGNyZWF0ZVJlcXVlc3QsIHJlbW92ZUVtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICBjb25zdHJ1Y3RvcihhcGlLZXk6IHN0cmluZywgYXBpU2VjcmV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgdGhpcy5jb25maWcuYXBpU2VjcmV0ID0gYXBpU2VjcmV0O1xuICAgIHRoaXMuY29uZmlnLmJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkubWV4Yy5jb20vYXBpL3YzJztcbiAgfVxuXG4gIHB1YmxpYyBwdWJsaWNSZXF1ZXN0IChtZXRob2Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYXJhbXNPYmo6IGFueSA9IHt9KTogYW55IHtcbiAgICBwYXJhbXNPYmogPSByZW1vdmVFbXB0eVZhbHVlKHBhcmFtc09iailcbiAgICBwYXJhbXNPYmogPSBidWlsZFF1ZXJ5U3RyaW5nKHBhcmFtc09iailcbiAgICBpZihwYXJhbXNPYmogIT09ICcnKSB7XG4gICAgICBwYXRoID0gYCR7cGF0aH0/JHtwYXJhbXNPYmp9YFxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVSZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgYmFzZVVSTDogdGhpcy5jb25maWcuYmFzZVVSTCxcbiAgICAgIHVybDogcGF0aCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1gtTUVYQy1BUElLRVknOiB0aGlzLmNvbmZpZy5hcGlLZXlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHNpZ25SZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhcmFtc09iajogYW55ID0ge30pOiBhbnkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICBwYXJhbXNPYmogPSByZW1vdmVFbXB0eVZhbHVlKHBhcmFtc09iailcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcoeyAuLi5wYXJhbXNPYmosIHRpbWVzdGFtcCB9KVxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGNyeXB0b1xuICAgICAgICAuY3JlYXRlSG1hYygnc2hhMjU2JywgdGhpcy5jb25maWcuYXBpU2VjcmV0KVxuICAgICAgICAudXBkYXRlKHF1ZXJ5U3RyaW5nKVxuICAgICAgICAuZGlnZXN0KCdoZXgnKVxuXG4gICAgcmV0dXJuIGNyZWF0ZVJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBiYXNlVVJMOiB0aGlzLmNvbmZpZy5iYXNlVVJMLFxuICAgICAgdXJsOiBgJHtwYXRofT8ke3F1ZXJ5U3RyaW5nfSZzaWduYXR1cmU9JHtzaWduYXR1cmV9YCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1gtTUVYQy1BUElLRVknOiB0aGlzLmNvbmZpZy5hcGlLZXlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59Il19