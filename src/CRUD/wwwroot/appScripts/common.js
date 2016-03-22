//export module Common {
//    export class Template {
//        static GetUrl(url) {
//            return "gettemplate/url=" + encodeURIComponent(url);
//        }
//    }
//}
function TemplateUrl(url) {
    return "gettemplate/url=" + encodeURIComponent(url);
}
exports.TemplateUrl = TemplateUrl;
//# sourceMappingURL=common.js.map