"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/Theme.js
var Theme = __webpack_require__(440);
// EXTERNAL MODULE: ./src/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(359);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./store/reducers.js
var reducers = __webpack_require__(325);
;// CONCATENATED MODULE: ./store/index.js





let store;
// COMBINED REDUCERS
const AllReducers = {
    data: reducers/* default */.Z
};
const store_reducers = (0,external_redux_namespaceObject.combineReducers)(AllReducers);
function initStore(initialState) {
    return createStore(store_reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
const initializeStore = (preloadedState)=>{
    let initialStore = store !== null && store !== void 0 ? store : initStore(preloadedState);
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        initialStore = initStore({
            ...store.getState(),
            ...preloadedState
        });
        // Reset the current store
        store = undefined;
    }
    // For SSG and SSR always create a new store
    if (true) {
        return initialStore;
    }
    // Create the store once in the client
    if (!store) store = initialStore;
    return initialStore;
};
function useStore(initialState) {
    return useMemo(()=>initializeStore(initialState)
    , [
        initialState
    ]);
}

;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const integration_react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: ./pages/_app.js









//redux


//persist
 // defaults to localStorage for web





// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
const persistConfig = {
    key: "root",
    storage: (storage_default())
};
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const store = (0,external_redux_namespaceObject.legacy_createStore)((0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, reducers/* default */.Z), (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
    const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(integration_react_namespaceObject.PersistGate, {
            loading: null,
            persistor: persistor,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
                value: emotionCache,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "initial-scale=1, width=device-width"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                        theme: Theme/* default */.Z,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            })
        })
    });
};
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [325], () => (__webpack_exec__(754)));
module.exports = __webpack_exports__;

})();