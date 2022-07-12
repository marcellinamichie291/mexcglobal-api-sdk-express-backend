"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const market_1 = require("./market");
/**
 * @stability stable
 */
class Common extends market_1.Market {
    /**
     * Test Connectivity.
     *
     * @stability stable
     */
    ping() {
        const res = this.publicRequest('GET', '/ping');
        return JSON.parse(res.getBody());
    }
    /**
     * Check Server Time.
     *
     * @stability stable
     */
    time() {
        const res = this.publicRequest('GET', '/time');
        return JSON.parse(res.getBody());
    }
}
exports.Common = Common;
_a = JSII_RTTI_SYMBOL_1;
Common[_a] = { fqn: "mexc-sdk.Common", version: "1.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQWtDOzs7O0FBRWxDLE1BQWEsTUFBTyxTQUFRLGVBQU07Ozs7OztJQUV6QixJQUFJO1FBQ1QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7OztJQUdNLElBQUk7UUFDVCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7QUFYSCx3QkFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtldCB9IGZyb20gJy4vbWFya2V0JztcblxuZXhwb3J0IGNsYXNzIENvbW1vbiBleHRlbmRzIE1hcmtldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBwaW5nKCkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdCgnR0VUJywgJy9waW5nJylcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKVxuICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIHRpbWUoKSB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5wdWJsaWNSZXF1ZXN0KCdHRVQnLCAnL3RpbWUnKVxuICAgIHJldHVybiBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpXG4gIH1cbn0iXX0=