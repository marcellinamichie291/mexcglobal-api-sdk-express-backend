"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const common_1 = require("./common");
const util_1 = require("../util");
/**
 * @stability stable
 */
class UserData extends common_1.Common {
    /**
     * Account Information.
     *
     * @returns
     * @stability stable
     */
    accountInfo() {
        const res = this.signRequest('GET', '/account');
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
    /**
     * Account Trade List.
     *
     * @param options ``` [options.orderId] - This can only be used in combination with symbol. [options.startTime] [options.endTime] [options.fromId] - TradeId to fetch from. Default gets most recent trades. [options.limit] - default: 500, Max: 1000 ```.
     * @returns
     * @stability stable
     */
    accountTradeList(symbol, options = { limit: 500 }) {
        const res = this.signRequest('GET', '/myTrades', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = util_1.fromatData(rawData);
        return formatDatas;
    }
}
exports.UserData = UserData;
_a = JSII_RTTI_SYMBOL_1;
UserData[_a] = { fqn: "mexc-sdk.UserData", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFrQztBQUNsQyxrQ0FBb0M7Ozs7QUFFcEMsTUFBYSxRQUFTLFNBQVEsZUFBTTs7Ozs7OztJQUV6QixXQUFXO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsaUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7Ozs7OztJQUlNLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxVQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNsRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdEUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7U0FDN0IsQ0FBQyxDQUFDLENBQUE7UUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLGlCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7QUFwQkwsNEJBcUJHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgZnJvbWF0RGF0YSB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBVc2VyRGF0YSBleHRlbmRzIENvbW1vbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcHVibGljIGFjY291bnRJbmZvKCkge1xuICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCAoJ0dFVCcsICcvYWNjb3VudCcpXG4gICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICAgIGNvbnN0IGZvcm1hdERhdGFzID0gZnJvbWF0RGF0YShyYXdEYXRhKTtcbiAgXG4gICAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gICAgfVxuICBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBwdWJsaWMgYWNjb3VudFRyYWRlTGlzdChzeW1ib2w6IHN0cmluZywgb3B0aW9uczphbnkgPSB7IGxpbWl0OiA1MDAgfSkge1xuICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnR0VUJywgJy9teVRyYWRlcycsIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpXG4gICAgICB9KSlcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICBcbiAgICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgICB9XG4gIH1cbiJdfQ==