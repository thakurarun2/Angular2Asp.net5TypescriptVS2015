//export module Common {
//    export class Template {
//        static GetUrl(url) {
//            return "gettemplate/url=" + encodeURIComponent(url);
//        }
//    }
//}

export function TemplateUrl(url: string) {
    return "gettemplate/url=" + encodeURIComponent(url);
}