"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: ./src/Theme.js
var Theme = __webpack_require__(440);
// EXTERNAL MODULE: ./src/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(359);
;// CONCATENATED MODULE: ./pages/_document.js






class MyDocument extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: Theme/* default.palette.primary.main */.Z.palette.primary.main
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: "/static/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        }),
                        this.props.emotionStyleTags
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
};
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    // You can consider sharing the same emotion cache between
    // all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = (0,createEmotionCache/* default */.Z)();
    const { extractCriticalToChunks  } = create_instance_default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(App, {
                        emotionCache: cache,
                        ...props
                    });
                }
        })
    ;
    const initialProps = await next_document["default"].getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See
    // https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key)
    );
    return {
        ...initialProps,
        emotionStyleTags
    };
};


/***/ }),

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);


// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.js

function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
};


/***/ }),

/***/ 574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(91)));
module.exports = __webpack_exports__;

})();