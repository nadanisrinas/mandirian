"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ initialStateDataReducers),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);

const initialStateDataReducers = {
    isLoading: false,
    data: [],
    meta: {
        totalResults: 0
    },
    isError: false,
    page: 1,
    pageSize: 5
};
//GET DATA
const dataReducer = (state = initialStateDataReducers, { type , payload  })=>{
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DATA_REQUEST */ .uG:
            var ref, ref1;
            var ref2, ref3;
            return {
                ...state,
                isLoading: true,
                isError: null,
                page: (ref2 = payload === null || payload === void 0 ? void 0 : (ref = payload.data) === null || ref === void 0 ? void 0 : ref.pages) !== null && ref2 !== void 0 ? ref2 : 1,
                pageSize: (ref3 = payload === null || payload === void 0 ? void 0 : (ref1 = payload.data) === null || ref1 === void 0 ? void 0 : ref1.pageSize) !== null && ref3 !== void 0 ? ref3 : 5
            };
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DATA_SUCCESS */ .tX:
            return {
                ...state,
                isLoading: false,
                data: payload.data.articles,
                meta: {
                    totalResults: payload.data.totalResults
                },
                isError: null
            };
        case _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DATA_FAILED */ .nU:
            return {
                ...state,
                isLoading: false,
                isError: payload.message
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataReducer);


/***/ }),

/***/ 340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nU": () => (/* binding */ GET_DATA_FAILED),
/* harmony export */   "tX": () => (/* binding */ GET_DATA_SUCCESS),
/* harmony export */   "uG": () => (/* binding */ GET_DATA_REQUEST)
/* harmony export */ });
/* unused harmony exports SET_QUOTE, INCREMENT, DECREMENT, RESET */
// REDUX ACTION TYPES
const SET_QUOTE = "SET_QUOTE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const GET_DATA_REQUEST = "GET_DATA_REQUEST";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_FAILED = "GET_DATA_FAILED";


/***/ })

};
;