var Common;
(function (Common) {
    var Template = (function () {
        function Template() {
        }
        Template.GetUrl = function (url) {
            return "gettemplate/url=" + encodeURIComponent(url);
        };
        return Template;
    })();
    Common.Template = Template;
})(Common = exports.Common || (exports.Common = {}));
//# sourceMappingURL=common.js.map