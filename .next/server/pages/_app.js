"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6592);
/* harmony import */ var _common_hooks_use_unsaved_change__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5003);
/* harmony import */ var _minimals_cc_contexts_CollapseDrawerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5088);
/* harmony import */ var _minimals_cc_components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6686);
/* harmony import */ var _minimals_cc_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6594);
/* harmony import */ var _minimals_cc_components_ProgressBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _minimals_cc_components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_6__, _minimals_cc_theme__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _minimals_cc_components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_6__, _minimals_cc_theme__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({
    defaultOptions: {
        mutations: {
            onError: (err)=>console.error(err)
        },
        queries: {
            onError: (err)=>console.error(err),
            // refetchOnWindowFocus: false,
            retry: 2
        }
    }
});
const MinimalsProviders = ({ children  })=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_minimals_cc_contexts_CollapseDrawerContext__WEBPACK_IMPORTED_MODULE_5__/* .CollapseDrawerProvider */ .z, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_minimals_cc_components_animate_MotionLazyContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_minimals_cc_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_minimals_cc_components_ProgressBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    children
                ]
            })
        })
    });
function MyApp({ Component , pageProps  }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
                client: queryClient,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MinimalsProviders, {
                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_hooks_use_unsaved_change__WEBPACK_IMPORTED_MODULE_4__/* .UnsavedChangeProvider */ .Z, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_global_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            getLayout(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            }))
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UnsavedChangeProvider)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/components/button.tsx
var components_button = __webpack_require__(2438);
// EXTERNAL MODULE: ./src/common/hooks/use-callback-ref.ts
var use_callback_ref = __webpack_require__(2678);
;// CONCATENATED MODULE: ./src/common/hooks/use-unsaved-change.tsx








function useUnsavedChange(hasUnsavedChange) {
    const { setWarnUnsavedChange  } = React.useContext(UnsavedChangeContext);
    React.useEffect(()=>{
        const unloadHandler = (e)=>{
            e.preventDefault();
            return e.returnValue = "Are you sure you want to leave this page? Any unsaved changes will be lost.";
        };
        const nextHandler = (url, { shallow  })=>{
            setWarnUnsavedChange({
                onConfirm: ()=>{
                    Router.events.off("routeChangeStart", nextHandler);
                    Router.push(url, url, {
                        shallow
                    });
                }
            });
            // Cancel routeChange event by erroring
            // See https://github.com/zeit/next.js/issues/2476
            const err = `routeChange aborted. This error can be safely ignored - https://github.com/zeit/next.js/issues/2476.`;
            Router.events.emit("routeChangeError", err);
            throw err;
        };
        if (hasUnsavedChange) {
            window.addEventListener("beforeunload", unloadHandler);
            Router.events.on("routeChangeStart", nextHandler);
        }
        return ()=>{
            window.removeEventListener("beforeunload", unloadHandler);
            Router.events.off("routeChangeStart", nextHandler);
        };
    }, [
        hasUnsavedChange,
        setWarnUnsavedChange
    ]);
}
const UnsavedChangeContext = /*#__PURE__*/ external_react_default().createContext({});
const UnsavedChangeProvider = ({ children  })=>{
    const [warnUnsavedChange, setWarnUnsavedChange] = external_react_default().useState(null);
    const handleCancel = (0,use_callback_ref/* default */.Z)(()=>{
        var ref;
        warnUnsavedChange === null || warnUnsavedChange === void 0 ? void 0 : (ref = warnUnsavedChange.onCancel) === null || ref === void 0 ? void 0 : ref.call(warnUnsavedChange);
        setWarnUnsavedChange(null);
    });
    const handleAccept = (0,use_callback_ref/* default */.Z)(()=>{
        var ref;
        warnUnsavedChange === null || warnUnsavedChange === void 0 ? void 0 : (ref = warnUnsavedChange.onConfirm) === null || ref === void 0 ? void 0 : ref.call(warnUnsavedChange);
        setWarnUnsavedChange(null);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UnsavedChangeContext.Provider, {
        value: external_react_default().useMemo(()=>({
                setWarnUnsavedChange
            }), []),
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
                open: !!warnUnsavedChange,
                onClose: handleCancel,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogTitle, {
                        children: [
                            "Leave Page?",
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                onClick: handleCancel,
                                size: "large",
                                css: react_.css`
              position: absolute;
              top: 12px;
              right: 12px;
            `,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContentText, {
                            children: "Are you sure you want to leave this page? Any unsaved changes will be lost."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogActions, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* SecondaryButton */.k, {
                                onClick: handleCancel,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                onClick: handleAccept,
                                autoFocus: true,
                                children: "Leave"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);


function GlobalStyles() {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
        styles: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
        html,
        body {
          font-family: Be Vietnam, system;
          background-color: #f4f6f8;
        }

        .div-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `
    });
}


/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProgressBar)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/GlobalStyles"
const GlobalStyles_namespaceObject = require("@mui/material/GlobalStyles");
var GlobalStyles_default = /*#__PURE__*/__webpack_require__.n(GlobalStyles_namespaceObject);
;// CONCATENATED MODULE: ./src/minimals.cc/components/ProgressBar.tsx



// next

// @mui


// ----------------------------------------------------------------------
function ProgressBar() {
    const theme = (0,styles_.useTheme)();
    const router = (0,router_.useRouter)();
    external_nprogress_default().configure({
        showSpinner: false
    });
    (0,external_react_.useEffect)(()=>{
        const handleStart = ()=>{
            external_nprogress_default().start();
        };
        const handleStop = ()=>{
            external_nprogress_default().done();
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((GlobalStyles_default()), {
        styles: {
            "#nprogress": {
                pointerEvents: "none",
                "& .bar": {
                    top: 0,
                    left: 0,
                    height: 2,
                    width: "100%",
                    position: "fixed",
                    zIndex: theme.zIndex.snackbar,
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 2px ${theme.palette.primary.main}`
                },
                "& .peg": {
                    right: 0,
                    opacity: 1,
                    width: 100,
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    transform: "rotate(3deg) translate(0px, -4px)",
                    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
                }
            }
        }
    });
}


/***/ }),

/***/ 6686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionLazyContainer)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
// eslint-disable-next-line import/extensions
const loadFeatures = ()=>__webpack_require__.e(/* import() */ 300).then(__webpack_require__.bind(__webpack_require__, 1300)).then((res)=>res.default);
function MotionLazyContainer({ children  }) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.LazyMotion, {
        strict: true,
        features: loadFeatures,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "he": () => (/* binding */ defaultSettings)
});

// UNUSED EXPORTS: HEADER, ICON, NAVBAR, allLangs, cookiesExpires, cookiesKey, defaultLang

;// CONCATENATED MODULE: external "@mui/material/locale"
const locale_namespaceObject = require("@mui/material/locale");
;// CONCATENATED MODULE: ./src/minimals.cc/config.ts
// @mui

// LAYOUT
// ----------------------------------------------------------------------
const HEADER = {
    MOBILE_HEIGHT: 64,
    MAIN_DESKTOP_HEIGHT: 88,
    DASHBOARD_DESKTOP_HEIGHT: 92,
    DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32
};
const NAVBAR = {
    BASE_WIDTH: 260,
    DASHBOARD_WIDTH: 280,
    DASHBOARD_COLLAPSE_WIDTH: 88,
    //
    DASHBOARD_ITEM_ROOT_HEIGHT: 48,
    DASHBOARD_ITEM_SUB_HEIGHT: 40,
    DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32
};
const ICON = {
    NAVBAR_ITEM: 22,
    NAVBAR_ITEM_HORIZONTAL: 20
};
// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------
const cookiesExpires = 3;
const cookiesKey = {
    themeMode: "themeMode",
    themeLayout: "themeLayout",
    themeStretch: "themeStretch",
    themeContrast: "themeContrast",
    themeDirection: "themeDirection",
    themeColorPresets: "themeColorPresets"
};
const defaultSettings = {
    themeMode: "light",
    themeDirection: "ltr",
    themeContrast: "default",
    themeLayout: "horizontal",
    themeColorPresets: "blue",
    themeStretch: false
};
// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------
const allLangs = [
    {
        label: "English",
        value: "en",
        systemValue: locale_namespaceObject.enUS,
        icon: "/assets/icons/flags/ic_flag_en.svg"
    },
    {
        label: "French",
        value: "fr",
        systemValue: locale_namespaceObject.frFR,
        icon: "/assets/icons/flags/ic_flag_fr.svg"
    },
    {
        label: "Vietnamese",
        value: "vn",
        systemValue: locale_namespaceObject.viVN,
        icon: "/assets/icons/flags/ic_flag_vn.svg"
    },
    {
        label: "Chinese",
        value: "cn",
        systemValue: locale_namespaceObject.zhCN,
        icon: "/assets/icons/flags/ic_flag_cn.svg"
    },
    {
        label: "Arabic (Sudan)",
        value: "ar",
        systemValue: locale_namespaceObject.arSD,
        icon: "/assets/icons/flags/ic_flag_sa.svg"
    }, 
];
const defaultLang = allLangs[0]; // English


/***/ }),

/***/ 5088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ CollapseDrawerProvider)
/* harmony export */ });
/* unused harmony export CollapseDrawerContext */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1949);


// hooks

const initialState = {
    isCollapse: false,
    collapseClick: false,
    collapseHover: false,
    onToggleCollapse: ()=>{},
    onHoverEnter: ()=>{},
    onHoverLeave: ()=>{}
};
const CollapseDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
function CollapseDrawerProvider({ children  }) {
    const isDesktop = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("up", "lg");
    const { 0: collapse , 1: setCollapse  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        click: false,
        hover: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isDesktop) {
            setCollapse({
                click: false,
                hover: false
            });
        }
    }, [
        isDesktop
    ]);
    const handleToggleCollapse = ()=>{
        setCollapse({
            ...collapse,
            click: !collapse.click
        });
    };
    const handleHoverEnter = ()=>{
        if (collapse.click) {
            setCollapse({
                ...collapse,
                hover: true
            });
        }
    };
    const handleHoverLeave = ()=>{
        setCollapse({
            ...collapse,
            hover: false
        });
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollapseDrawerContext.Provider, {
        value: {
            isCollapse: collapse.click && !collapse.hover,
            collapseClick: collapse.click,
            collapseHover: collapse.hover,
            onToggleCollapse: handleToggleCollapse,
            onHoverEnter: handleHoverEnter,
            onHoverLeave: handleHoverLeave
        },
        children: children
    });
}



/***/ }),

/***/ 3410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext)
/* harmony export */ });
/* unused harmony export SettingsProvider */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5019);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3727);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// utils

// config

// ----------------------------------------------------------------------
const initialState = {
    ..._config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he,
    // Mode
    onToggleMode: ()=>{},
    onChangeMode: ()=>{},
    // Direction
    onToggleDirection: ()=>{},
    onChangeDirection: ()=>{},
    onChangeDirectionByLang: ()=>{},
    // Layout
    onToggleLayout: ()=>{},
    onChangeLayout: ()=>{},
    // Contrast
    onToggleContrast: ()=>{},
    onChangeContrast: ()=>{},
    // Color
    onChangeColor: ()=>{},
    // @ts-ignore
    setColor: _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* .defaultPreset */ .RQ,
    colorOption: [],
    // Stretch
    onToggleStretch: ()=>{},
    // Reset
    onResetSetting: ()=>{}
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);
function SettingsProvider({ children , defaultSettings  }) {
    const [settings, setSettings] = useSettingCookies(defaultSettings);
    const langStorage =  false ? 0 : "";
    const isArabic = langStorage === "ar";
    useEffect(()=>{
        if (isArabic) {
            onChangeDirectionByLang("ar");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isArabic
    ]);
    // Mode
    const onToggleMode = ()=>{
        setSettings({
            ...settings,
            themeMode: settings.themeMode === "light" ? "dark" : "light"
        });
    };
    const onChangeMode = (event)=>{
        setSettings({
            ...settings,
            themeMode: event.target.value
        });
    };
    // Direction
    const onToggleDirection = ()=>{
        setSettings({
            ...settings,
            themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl"
        });
    };
    const onChangeDirection = (event)=>{
        setSettings({
            ...settings,
            themeDirection: event.target.value
        });
    };
    const onChangeDirectionByLang = (lang)=>{
        setSettings({
            ...settings,
            themeDirection: lang === "ar" ? "rtl" : "ltr"
        });
    };
    // Layout
    const onToggleLayout = ()=>{
        setSettings({
            ...settings,
            themeLayout: settings.themeLayout === "vertical" ? "horizontal" : "vertical"
        });
    };
    const onChangeLayout = (event)=>{
        setSettings({
            ...settings,
            themeLayout: event.target.value
        });
    };
    // Contrast
    const onToggleContrast = ()=>{
        setSettings({
            ...settings,
            themeContrast: settings.themeContrast === "default" ? "bold" : "default"
        });
    };
    const onChangeContrast = (event)=>{
        setSettings({
            ...settings,
            themeContrast: event.target.value
        });
    };
    // Color
    const onChangeColor = (event)=>{
        setSettings({
            ...settings,
            themeColorPresets: event.target.value
        });
    };
    // Stretch
    const onToggleStretch = ()=>{
        setSettings({
            ...settings,
            themeStretch: !settings.themeStretch
        });
    };
    // Reset
    const onResetSetting = ()=>{
        setSettings({
            themeMode: initialState.themeMode,
            themeLayout: initialState.themeLayout,
            themeStretch: initialState.themeStretch,
            themeContrast: initialState.themeContrast,
            themeDirection: initialState.themeDirection,
            themeColorPresets: initialState.themeColorPresets
        });
    };
    return /*#__PURE__*/ _jsx(SettingsContext.Provider, {
        value: {
            ...settings,
            // Mode
            onToggleMode,
            onChangeMode,
            // Direction
            onToggleDirection,
            onChangeDirection,
            onChangeDirectionByLang,
            // Layout
            onToggleLayout,
            onChangeLayout,
            // Contrast
            onChangeContrast,
            onToggleContrast,
            // Stretch
            onToggleStretch,
            // Color
            onChangeColor,
            // @ts-ignore
            setColor: getColorPresets(settings.themeColorPresets),
            colorOption: colorPresets.map((color)=>({
                    name: color.name,
                    value: color.main
                })),
            // Reset
            onResetSetting
        },
        children: children
    });
}

// ----------------------------------------------------------------------
function useSettingCookies(defaultSettings) {
    const { 0: settings , 1: setSettings  } = useState(defaultSettings);
    const onChangeSetting = ()=>{
        Cookies.set(cookiesKey.themeMode, settings.themeMode, {
            expires: cookiesExpires
        });
        Cookies.set(cookiesKey.themeDirection, settings.themeDirection, {
            expires: cookiesExpires
        });
        Cookies.set(cookiesKey.themeColorPresets, settings.themeColorPresets, {
            expires: cookiesExpires
        });
        Cookies.set(cookiesKey.themeLayout, settings.themeLayout, {
            expires: cookiesExpires
        });
        Cookies.set(cookiesKey.themeContrast, settings.themeContrast, {
            expires: cookiesExpires
        });
        Cookies.set(cookiesKey.themeStretch, JSON.stringify(settings.themeStretch), {
            expires: cookiesExpires
        });
    };
    useEffect(()=>{
        onChangeSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings
    ]);
    return [
        settings,
        setSettings
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useResponsive)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/useMediaQuery"
const useMediaQuery_namespaceObject = require("@mui/material/useMediaQuery");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_namespaceObject);
;// CONCATENATED MODULE: ./src/minimals.cc/hooks/useResponsive.ts
// @mui


function useResponsive(query, key, start, end) {
    const theme = (0,styles_.useTheme)();
    const mediaUp = useMediaQuery_default()(theme.breakpoints.up(key));
    const mediaDown = useMediaQuery_default()(theme.breakpoints.down(key));
    const mediaBetween = useMediaQuery_default()(theme.breakpoints.between(start, end));
    const mediaOnly = useMediaQuery_default()(theme.breakpoints.only(key));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    if (query === "only") {
        return mediaOnly;
    }
}


/***/ }),

/***/ 1349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3410);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__]);
_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ----------------------------------------------------------------------
const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breakpoints);


/***/ }),

/***/ 6594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1349);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4565);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6584);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9134);
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1500);
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5265);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui


// hooks

//





function ThemeProvider({ children  }) {
    const { themeMode , themeDirection  } = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const isLight = themeMode === "light";
    const themeOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            palette: isLight ? _palette__WEBPACK_IMPORTED_MODULE_5__/* ["default"].light */ .Z.light : _palette__WEBPACK_IMPORTED_MODULE_5__/* ["default"].dark */ .Z.dark,
            typography: _typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            shape: {
                borderRadius: 8
            },
            direction: themeDirection,
            shadows: isLight ? _shadows__WEBPACK_IMPORTED_MODULE_9__/* ["default"].light */ .Z.light : _shadows__WEBPACK_IMPORTED_MODULE_9__/* ["default"].dark */ .Z.dark,
            customShadows: isLight ? _shadows__WEBPACK_IMPORTED_MODULE_9__/* .customShadows.light */ .k.light : _shadows__WEBPACK_IMPORTED_MODULE_9__/* .customShadows.dark */ .k.dark
        }), [
        isLight,
        themeDirection
    ]);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(themeOptions);
    theme.components = (0,_overrides__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(theme);
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ComponentsOverrides)
});

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/TextField.ts
// ----------------------------------------------------------------------
function TextField(theme) {
    return {
        MuiTextField: {
            defaultProps: {
                variant: "outlined"
            },
            styleOverrides: {
                root: {
                    ".MuiInputAdornment-root": {
                        fontSize: 24
                    },
                    ".MuiInputBase-root.Mui-disabled": {
                        backgroundColor: "#F4F6F8"
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Fab.ts
// ----------------------------------------------------------------------
function Fab(theme) {
    return {
        MuiFab: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z8,
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                primary: {
                    boxShadow: theme.customShadows.primary,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark
                    }
                },
                secondary: {
                    boxShadow: theme.customShadows.secondary,
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.dark
                    }
                },
                extended: {
                    "& svg": {
                        marginRight: theme.spacing(1)
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Card.ts
// ----------------------------------------------------------------------
function Card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: "relative",
                    boxShadow: theme.customShadows.card,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    zIndex: 0
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
}

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/CustomIcons.tsx


// ----------------------------------------------------------------------
// CloseIcon
function CloseIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L12,10.59 L13.29,9.29 C13.6821222,8.89787783 14.3178778,8.89787783 14.71,9.29 C15.1021222,9.68212217 15.1021222,10.3178778 14.71,10.71 L13.41,12 L14.71,13.29 Z"
        })
    });
}
// StarIcon
function StarIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z"
        })
    });
}
// Using for Alert
function InfoIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,11 C11,10.4477153 11.4477153,10 12,10 C12.5522847,10 13,10.4477153 13,11 L13,16 Z M12,9 C11.4477153,9 11,8.55228475 11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 C13,8.55228475 12.5522847,9 12,9 Z"
        })
    });
}
function WarningIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M22.56,16.3 L14.89,3.58 C14.2597186,2.59400001 13.1702353,1.99737652 12,1.99737652 C10.8297647,1.99737652 9.74028139,2.59400001 9.11,3.58 L1.44,16.3 C0.888546003,17.2192471 0.869485343,18.3628867 1.39,19.3 C1.99197363,20.3551378 3.11522982,21.0046397 4.33,21 L19.67,21 C20.8765042,21.0128744 21.9978314,20.3797441 22.61,19.34 C23.146086,18.3926382 23.1269508,17.2292197 22.56,16.3 L22.56,16.3 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,9 C11,8.44771525 11.4477153,8 12,8 C12.5522847,8 13,8.44771525 13,9 L13,13 Z"
        })
    });
}
function SuccessIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M16.3,9.61 L11.73,15.61 C11.5412074,15.855247 11.2494966,15.9992561 10.94,16.0000145 C10.6322197,16.001658 10.3408221,15.861492 10.15,15.62 L7.71,12.51 C7.49028166,12.2277602 7.43782669,11.8497415 7.57239438,11.5183399 C7.70696206,11.1869384 8.00810836,10.9525017 8.36239438,10.9033399 C8.7166804,10.8541782 9.07028166,10.9977602 9.29,11.28 L10.92,13.36 L14.7,8.36 C14.917932,8.07418751 15.2717886,7.92635122 15.6282755,7.97217964 C15.9847624,8.01800806 16.2897207,8.25053875 16.4282755,8.58217966 C16.5668304,8.91382056 16.517932,9.29418753 16.3,9.58 L16.3,9.61 Z"
        })
    });
}
function ErrorIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 L13,13 Z"
        })
    });
}
// Using for Checkbox
function CheckboxIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm0 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"
        })
    });
}
function CheckboxCheckedIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.372 4.972a1.006 1.006 0 00-.928.388l-3.78 5-1.63-2.08a1.001 1.001 0 00-1.58 1.23l2.44 3.11a1 1 0 001.58-.01l4.57-6v-.03a1.006 1.006 0 00-.672-1.608z"
        })
    });
}
function CheckboxIndeterminateIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.75 8h-6.5a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75z"
        })
    });
}
// Using for Select Input
function InputSelectIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        sx: {
            right: 12,
            fontSize: 16,
            position: "absolute",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z"
        })
    });
}
//  Using for TreeView
function TreeViewCollapseIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M12,8 C12.5522847,8 13,8.44771525 13,9 L13,9 L13,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 Z"
        })
    });
}
function TreeViewExpandIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 Z"
        })
    });
}
function TreeViewEndIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M14,8.99420168 C14.2666375,8.99420168 14.5222334,9.10068735 14.71,9.29 C14.8993127,9.4777666 15.0057983,9.73336246 15.0057983,10 C15.0057983,10.2666375 14.8993127,10.5222334 14.71,10.71 L14.71,10.71 L13.41,12 L14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L10.71,9.29 L12,10.59 L13.29,9.29 C13.4777666,9.10068735 13.7333625,8.99420168 14,8.99420168 Z"
        })
    });
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Chip.tsx

//

// ----------------------------------------------------------------------
function Chip(theme) {
    return {
        MuiChip: {
            defaultProps: {
                deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {})
            },
            styleOverrides: {
                colorDefault: {
                    "& .MuiChip-avatarMedium, .MuiChip-avatarSmall": {
                        color: theme.palette.text.secondary
                    }
                },
                outlined: {
                    borderColor: theme.palette.grey[50032],
                    "&.MuiChip-colorPrimary": {
                        borderColor: theme.palette.primary.main
                    },
                    "&.MuiChip-colorSecondary": {
                        borderColor: theme.palette.secondary.main
                    }
                },
                //
                avatarColorInfo: {
                    color: theme.palette.info.contrastText,
                    backgroundColor: theme.palette.info.dark
                },
                avatarColorSuccess: {
                    color: theme.palette.success.contrastText,
                    backgroundColor: theme.palette.success.dark
                },
                avatarColorWarning: {
                    color: theme.palette.warning.contrastText,
                    backgroundColor: theme.palette.warning.dark
                },
                avatarColorError: {
                    color: theme.palette.error.contrastText,
                    backgroundColor: theme.palette.error.dark
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Tabs.ts
// ----------------------------------------------------------------------
function Tabs(theme) {
    return {
        MuiTabs: {
            styleOverrides: {
                scrollButtons: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    fontWeight: theme.typography.fontWeightMedium,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                    "&.Mui-selected": {
                        color: theme.palette.text.primary
                    },
                    "&:not(:last-of-type)": {
                        marginRight: theme.spacing(5)
                    },
                    "@media (min-width: 600px)": {
                        minWidth: 48
                    }
                },
                labelIcon: {
                    minHeight: 48,
                    flexDirection: "row",
                    "& > *:first-of-type": {
                        marginBottom: 0,
                        marginRight: theme.spacing(1)
                    }
                },
                wrapped: {
                    flexDirection: "row",
                    whiteSpace: "nowrap"
                },
                textColorInherit: {
                    opacity: 1,
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Menu.ts
// ----------------------------------------------------------------------
function Menu(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Link.ts
// ----------------------------------------------------------------------
function Link(theme) {
    return {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/List.ts
// ----------------------------------------------------------------------
function List(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0
                },
                multiline: {
                    marginTop: 0,
                    marginBottom: 0
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Table.ts
// ----------------------------------------------------------------------
function Table(theme) {
    return {
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: "none"
                },
                head: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral,
                    "&:first-of-type": {
                        paddingLeft: theme.spacing(3),
                        borderTopLeftRadius: theme.shape.borderRadius,
                        borderBottomLeftRadius: theme.shape.borderRadius
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(3),
                        borderTopRightRadius: theme.shape.borderRadius,
                        borderBottomRightRadius: theme.shape.borderRadius
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`
                },
                body: {
                    "&:first-of-type": {
                        paddingLeft: theme.spacing(3)
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(3)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    borderTop: `solid 1px ${theme.palette.divider}`
                },
                toolbar: {
                    height: 64
                },
                select: {
                    "&:focus": {
                        borderRadius: theme.shape.borderRadius
                    }
                },
                selectIcon: {
                    width: 20,
                    height: 20,
                    marginTop: -4
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Alert.tsx


// ----------------------------------------------------------------------
function Alert(theme) {
    const isLight = theme.palette.mode === "light";
    const standardStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "main" : "light"]
            }
        });
    const filledStyle = (color)=>({
            color: theme.palette[color].contrastText
        });
    const outlinedStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            border: `solid 1px ${theme.palette[color][isLight ? "light" : "dark"]}`,
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "main" : "light"]
            }
        });
    return {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: /*#__PURE__*/ jsx_runtime_.jsx(InfoIcon, {}),
                    success: /*#__PURE__*/ jsx_runtime_.jsx(SuccessIcon, {}),
                    warning: /*#__PURE__*/ jsx_runtime_.jsx(WarningIcon, {}),
                    error: /*#__PURE__*/ jsx_runtime_.jsx(ErrorIcon, {})
                }
            },
            styleOverrides: {
                message: {
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(0.5)
                    }
                },
                action: {
                    "& button:not(:first-of-type)": {
                        marginLeft: theme.spacing(1)
                    }
                },
                standardInfo: standardStyle("info"),
                standardSuccess: standardStyle("success"),
                standardWarning: standardStyle("warning"),
                standardError: standardStyle("error"),
                filledInfo: filledStyle("info"),
                filledSuccess: filledStyle("success"),
                filledWarning: filledStyle("warning"),
                filledError: filledStyle("error"),
                outlinedInfo: outlinedStyle("info"),
                outlinedSuccess: outlinedStyle("success"),
                outlinedWarning: outlinedStyle("warning"),
                outlinedError: outlinedStyle("error")
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Badge.ts
// ----------------------------------------------------------------------
function Badge(theme) {
    return {
        MuiBadge: {
            styleOverrides: {
                dot: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Paper.ts
// ----------------------------------------------------------------------
function Paper(theme) {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            variants: [
                {
                    props: {
                        variant: "outlined"
                    },
                    style: {
                        borderColor: theme.palette.grey[50012]
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Input.ts
// ----------------------------------------------------------------------
function Input(theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[50012],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[50016]
                    },
                    "&.Mui-focused": {
                        backgroundColor: theme.palette.action.focus
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[50032]
                    },
                    "&.Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Radio.ts
// ----------------------------------------------------------------------
function Radio(theme) {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Drawer.ts

// ----------------------------------------------------------------------
function Drawer(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                modal: {
                    '&[role="presentation"]': {
                        "& .MuiDrawer-paperAnchorLeft": {
                            boxShadow: `8px 24px 24px 12px ${(0,material_.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        },
                        "& .MuiDrawer-paperAnchorRight": {
                            boxShadow: `-8px 24px 24px 12px ${(0,material_.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Dialog.ts
// ----------------------------------------------------------------------
function Dialog(theme) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dialog,
                    "&.MuiPaper-rounded": {
                        borderRadius: Number(theme.shape.borderRadius) * 2
                    },
                    "&.MuiDialog-paperFullScreen": {
                        borderRadius: 0
                    },
                    "&.MuiDialog-paper .MuiDialogActions-root": {
                        padding: theme.spacing(3)
                    },
                    "@media (max-width: 600px)": {
                        margin: theme.spacing(2)
                    },
                    "@media (max-width: 663.95px)": {
                        "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {
                            maxWidth: "100%"
                        }
                    }
                },
                paperFullWidth: {
                    width: "100%"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    borderTop: 0,
                    borderBottom: 0,
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Avatar.ts
// ----------------------------------------------------------------------
function Avatar(theme) {
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.grey[400]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                avatar: {
                    fontSize: 16,
                    fontWeight: theme.typography.fontWeightMedium,
                    "&:first-of-type": {
                        fontSize: 14,
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.primary.lighter
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Rating.tsx

//

// ----------------------------------------------------------------------
const ICON_SMALL = {
    width: 20,
    height: 20
};
const ICON_LARGE = {
    width: 28,
    height: 28
};
function Rating(theme) {
    return {
        MuiRating: {
            defaultProps: {
                emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx(StarIcon, {}),
                icon: /*#__PURE__*/ jsx_runtime_.jsx(StarIcon, {})
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        opacity: 0.48
                    }
                },
                iconEmpty: {
                    color: theme.palette.grey[50048]
                },
                sizeSmall: {
                    "& svg": {
                        ...ICON_SMALL
                    }
                },
                sizeLarge: {
                    "& svg": {
                        ...ICON_LARGE
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Slider.ts
// ----------------------------------------------------------------------
function Slider(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSlider: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: theme.palette.action.disabled
                    }
                },
                markLabel: {
                    fontSize: 13,
                    color: theme.palette.text.disabled
                },
                valueLabel: {
                    borderRadius: 8,
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Button.ts
// ----------------------------------------------------------------------
function Button(theme) {
    return {
        MuiButton: {
            defaultProps: {
                variant: "contained"
            },
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    }
                },
                sizeLarge: {
                    height: 48
                },
                contained: {
                    boxShadow: "none"
                },
                // contained
                containedInherit: {
                    color: theme.palette.grey[800],
                    // boxShadow: theme.customShadows.z8,
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                containedPrimary: {
                },
                containedSecondary: {
                },
                containedInfo: {
                },
                containedSuccess: {
                },
                containedWarning: {
                },
                containedError: {
                },
                // outlined
                outlinedInherit: {
                    border: `1px solid ${theme.palette.grey[50032]}`,
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                textInherit: {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/IconButton.ts
// ----------------------------------------------------------------------
function IconButton(theme) {
    return {
        MuiIconButton: {
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Switch.ts
// ----------------------------------------------------------------------
function Switch(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSwitch: {
            styleOverrides: {
                thumb: {
                    boxShadow: theme.customShadows.z1
                },
                track: {
                    opacity: 1,
                    backgroundColor: theme.palette.grey[500]
                },
                switchBase: {
                    left: 0,
                    right: "auto",
                    "&:not(:.Mui-checked)": {
                        color: theme.palette.grey[isLight ? 100 : 300]
                    },
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.grey[isLight ? 400 : 600]
                    },
                    "&.Mui-disabled+.MuiSwitch-track": {
                        opacity: 1,
                        backgroundColor: `${theme.palette.action.disabledBackground} !important`
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Select.tsx
//

// ----------------------------------------------------------------------
function Select(theme) {
    return {
        MuiSelect: {
            defaultProps: {
                IconComponent: InputSelectIcon
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/SvgIcon.ts
// ----------------------------------------------------------------------
function SvgIcon(theme) {
    return {
        MuiSvgIcon: {
            defaultProps: {
                fontSize: "inherit"
            },
            styleOverrides: {
                fontSizeSmall: {
                    width: 20,
                    height: 20,
                    fontSize: "inherit"
                },
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Tooltip.ts
// ----------------------------------------------------------------------
function Tooltip(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Popover.ts
// ----------------------------------------------------------------------
function Popover(theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dropdown,
                    borderRadius: Number(theme.shape.borderRadius) * 1.5
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Stepper.ts
// ----------------------------------------------------------------------
function Stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/DataGrid.ts
// ----------------------------------------------------------------------
function DataGrid(theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: `1px solid transparent`,
                    "& .MuiTablePagination-root": {
                        borderTop: 0
                    }
                },
                cell: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                toolbarContainer: {
                    padding: theme.spacing(2),
                    backgroundColor: theme.palette.background.neutral,
                    "& .MuiButton-root": {
                        marginRight: theme.spacing(1.5),
                        color: theme.palette.text.primary,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                },
                paper: {
                    boxShadow: theme.customShadows.dropdown
                },
                menu: {
                    "& .MuiPaper-root": {
                        boxShadow: theme.customShadows.dropdown
                    },
                    "& .MuiMenuItem-root": {
                        ...theme.typography.body2,
                        "& .MuiListItemIcon-root": {
                            minWidth: "auto"
                        }
                    }
                },
                panelFooter: {
                    padding: theme.spacing(2),
                    justifyContent: "flex-end",
                    borderTop: `1px solid ${theme.palette.divider}`,
                    "& .MuiButton-root": {
                        "&:first-of-type": {
                            marginRight: theme.spacing(1.5),
                            color: theme.palette.text.primary,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover
                            }
                        },
                        "&:last-of-type": {
                            color: theme.palette.common.white,
                            backgroundColor: theme.palette.primary.main,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark
                            }
                        }
                    }
                },
                filterForm: {
                    padding: theme.spacing(1.5, 0),
                    "& .MuiFormControl-root": {
                        margin: theme.spacing(0, 0.5)
                    },
                    "& .MuiInput-root": {
                        marginTop: theme.spacing(3),
                        "&::before, &::after": {
                            display: "none"
                        },
                        "& .MuiNativeSelect-select, .MuiInput-input": {
                            ...theme.typography.body2,
                            padding: theme.spacing(0.75, 1),
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: theme.palette.background.neutral
                        },
                        "& .MuiSvgIcon-root": {
                            right: 4
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Skeleton.ts
// ----------------------------------------------------------------------
function Skeleton(theme) {
    return {
        MuiSkeleton: {
            defaultProps: {
                animation: "wave"
            },
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.neutral
                }
            }
        }
    };
}

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Backdrop.ts

// ----------------------------------------------------------------------
function Backdrop(theme) {
    const varLow = (0,styles_.alpha)(theme.palette.grey[900], 0.48);
    const varHigh = (0,styles_.alpha)(theme.palette.grey[900], 1);
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: [
                        `rgb(22,28,36)`,
                        `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`
                    ],
                    "&.MuiBackdrop-invisible": {
                        background: "transparent"
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Progress.ts
// ----------------------------------------------------------------------
function Progress(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    overflow: "hidden"
                },
                bar: {
                    borderRadius: 4
                },
                colorPrimary: {
                    backgroundColor: theme.palette.primary[isLight ? "lighter" : "darker"]
                },
                buffer: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Timeline.ts
// ----------------------------------------------------------------------
function Timeline(theme) {
    return {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/TreeView.tsx

//

// ----------------------------------------------------------------------
function TreeView(theme) {
    return {
        MuiTreeView: {
            defaultProps: {
                defaultCollapseIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewCollapseIcon, {
                    sx: {
                        width: 20,
                        height: 20
                    }
                }),
                defaultExpandIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewExpandIcon, {
                    sx: {
                        width: 20,
                        height: 20
                    }
                }),
                defaultEndIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewEndIcon, {
                    sx: {
                        color: "text.secondary",
                        width: 20,
                        height: 20
                    }
                })
            }
        },
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                },
                iconContainer: {
                    width: "auto"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Checkbox.tsx

//

// ----------------------------------------------------------------------
function Checkbox(theme) {
    return {
        MuiCheckbox: {
            defaultProps: {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxCheckedIcon, {}),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIndeterminateIcon, {})
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.action.disabled
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                        width: 24,
                        height: 24
                    },
                    "& .MuiSvgIcon-fontSizeSmall": {
                        width: 20,
                        height: 20
                    },
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Accordion.ts
// ----------------------------------------------------------------------
function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.Mui-expanded": {
                        boxShadow: theme.customShadows.z8,
                        borderRadius: theme.shape.borderRadius
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1),
                    "&.Mui-disabled": {
                        opacity: 1,
                        color: theme.palette.action.disabled,
                        "& .MuiTypography-root": {
                            color: "inherit"
                        }
                    }
                },
                expandIconWrapper: {
                    color: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Typography.ts
// ----------------------------------------------------------------------
function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Pagination.ts

// ----------------------------------------------------------------------
function Pagination(theme) {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        fontWeight: theme.typography.fontWeightBold
                    }
                },
                textPrimary: {
                    "&.Mui-selected": {
                        color: theme.palette.primary.main,
                        backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, 0.08),
                        "&:hover, &.Mui-focusVisible": {
                            backgroundColor: `${(0,styles_.alpha)(theme.palette.primary.main, 0.24)} !important`
                        }
                    }
                },
                outlined: {
                    border: `1px solid ${theme.palette.grey[50032]}`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, 0.08),
                        border: `1px solid ${(0,styles_.alpha)(theme.palette.primary.main, 0.24)}`
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Breadcrumbs.ts
// ----------------------------------------------------------------------
function Breadcrumbs(theme) {
    return {
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/ButtonGroup.ts
// ----------------------------------------------------------------------
function ButtonGroup(theme) {
    const styleContained = (color)=>({
            props: {
                variant: "contained",
                color
            },
            style: {
                boxShadow: theme.customShadows[color]
            }
        });
    return {
        MuiButtonGroup: {
            variants: [
                {
                    props: {
                        variant: "contained",
                        color: "inherit"
                    },
                    style: {
                        boxShadow: theme.customShadows.z8
                    }
                },
                styleContained("primary"),
                styleContained("secondary"),
                styleContained("info"),
                styleContained("success"),
                styleContained("warning"),
                styleContained("error"),
                {
                    props: {
                        disabled: true
                    },
                    style: {
                        boxShadow: "none",
                        "& .MuiButtonGroup-grouped.Mui-disabled": {
                            color: theme.palette.action.disabled,
                            borderColor: `${theme.palette.action.disabledBackground} !important`,
                            "&.MuiButton-contained": {
                                backgroundColor: theme.palette.action.disabledBackground
                            }
                        }
                    }
                }
            ],
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/CssBaseline.ts
// ----------------------------------------------------------------------
function CssBaseline(theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box"
                },
                html: {
                    width: "100%",
                    height: "100%",
                    WebkitOverflowScrolling: "touch"
                },
                body: {
                    width: "100%",
                    height: "100%"
                },
                "#__next": {
                    width: "100%",
                    height: "100%"
                },
                input: {
                    "&[type=number]": {
                        MozAppearance: "textfield",
                        "&::-webkit-outer-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        },
                        "&::-webkit-inner-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        }
                    }
                },
                img: {
                    display: "block",
                    maxWidth: "100%"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/Autocomplete.ts
// ----------------------------------------------------------------------
function Autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.dropdown
                },
                listbox: {
                    padding: theme.spacing(0, 1),
                    "& .MuiAutocomplete-option": {
                        padding: theme.spacing(1),
                        margin: theme.spacing(1, 0),
                        borderRadius: theme.shape.borderRadius
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/ToggleButton.ts

// ----------------------------------------------------------------------
function ToggleButton(theme) {
    const style = (color)=>({
            props: {
                color
            },
            style: {
                "&:hover": {
                    borderColor: (0,styles_.alpha)(theme.palette[color].main, 0.48),
                    backgroundColor: (0,styles_.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                },
                "&.Mui-selected": {
                    borderColor: (0,styles_.alpha)(theme.palette[color].main, 0.48)
                }
            }
        });
    return {
        MuiToggleButton: {
            variants: [
                {
                    props: {
                        color: "standard"
                    },
                    style: {
                        "&.Mui-selected": {
                            backgroundColor: theme.palette.action.selected
                        }
                    }
                },
                style("primary"),
                style("secondary"),
                style("info"),
                style("success"),
                style("warning"),
                style("error"), 
            ]
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    border: `solid 1px ${theme.palette.grey[50012]}`,
                    "& .MuiToggleButton-root": {
                        margin: 4,
                        borderColor: "transparent !important",
                        borderRadius: `${theme.shape.borderRadius}px !important`
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/ControlLabel.ts
// ----------------------------------------------------------------------
function ControlLabel(theme) {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.disabled
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/LoadingButton.ts
// ----------------------------------------------------------------------
function LoadingButton(theme) {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-text": {
                        "& .MuiLoadingButton-startIconPendingStart": {
                            marginLeft: 0
                        },
                        "& .MuiLoadingButton-endIconPendingEnd": {
                            marginRight: 0
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/overrides/index.ts
//












































// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return Object.assign({}, TextField(theme), Fab(theme), Tabs(theme), Chip(theme), Card(theme), Menu(theme), Link(theme), Input(theme), Radio(theme), Badge(theme), List(theme), Table(theme), Paper(theme), Alert(theme), Switch(theme), Select(theme), Button(theme), IconButton(theme), Rating(theme), Dialog(theme), Avatar(theme), Slider(theme), Drawer(theme), Stepper(theme), Tooltip(theme), Popover(theme), SvgIcon(theme), Checkbox(theme), DataGrid(theme), Skeleton(theme), Timeline(theme), TreeView(theme), Backdrop(theme), Progress(theme), Accordion(theme), Typography(theme), Pagination(theme), ButtonGroup(theme), Breadcrumbs(theme), CssBaseline(theme), Autocomplete(theme), ControlLabel(theme), ToggleButton(theme), LoadingButton(theme));
}


/***/ }),

/***/ 4565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GREY */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
// SETUP COLORS
const PRIMARY = {
    lighter: "#AFA7E3",
    light: "#938CDA",
    main: "#3D0099",
    dark: "#22006E",
    darker: "#1A1243"
};
const SECONDARY = {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A"
};
const INFO = {
    lighter: "#CBEAFB",
    light: "#64ADEA",
    main: "#095ABC",
    dark: "#043387",
    darker: "#01195A"
};
const SUCCESS = {
    lighter: "#EAFACE",
    light: "#A9E66B",
    main: "#4EAD13",
    dark: "#277C09",
    darker: "#0E5303"
};
const WARNING = {
    lighter: "#FFF2CC",
    light: "#FFCC67",
    main: "#FF9502",
    dark: "#B75B01",
    darker: "#7A3200"
};
const ERROR = {
    lighter: "#FDE1D3",
    light: "#F4907B",
    main: "#D2100B",
    dark: "#9D132B",
    darker: "#690729"
};
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    5008: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.08),
    50012: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.12),
    50016: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.16),
    50024: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.24),
    50032: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.32),
    50048: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.48),
    50056: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.56),
    50080: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.8)
};
const makeAlphas = (main)=>({
        main_8: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.08),
        main_12: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.12),
        main_16: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.16),
        main_24: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.24),
        main_32: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.32),
        main_48: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.48),
        main_56: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.56),
        main_80: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(main, 0.8)
    });
const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main)
};
const CHART_COLORS = {
    violet: [
        "#826AF9",
        "#9E86FF",
        "#D0AEFF",
        "#F7D2FF"
    ],
    blue: [
        "#2D99FF",
        "#83CFFF",
        "#A5F3FF",
        "#CCFAFF"
    ],
    green: [
        "#2CD9C5",
        "#60F1C8",
        "#A4F7CC",
        "#C0F2DC"
    ],
    yellow: [
        "#FFE700",
        "#FFEF5A",
        "#FFF7AE",
        "#FFF3D6"
    ],
    red: [
        "#FF6C40",
        "#FF8F6D",
        "#FFBD98",
        "#FFF2D4"
    ]
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        ...makeAlphas(PRIMARY.main),
        ...PRIMARY,
        contrastText: "#fff"
    },
    secondary: {
        ...makeAlphas(SECONDARY.main),
        ...SECONDARY,
        contrastText: "#fff"
    },
    info: {
        ...makeAlphas(INFO.main),
        ...INFO,
        contrastText: "#fff"
    },
    success: {
        ...makeAlphas(SUCCESS.main),
        ...SUCCESS,
        contrastText: GREY[800]
    },
    warning: {
        ...makeAlphas(WARNING.main),
        ...WARNING,
        contrastText: GREY[800]
    },
    error: {
        ...makeAlphas(ERROR.main),
        ...ERROR,
        contrastText: "#fff"
    },
    grey: GREY,
    gradients: GRADIENTS,
    chart: CHART_COLORS,
    divider: GREY[50024],
    action: {
        hover: GREY[5008],
        selected: GREY[50016],
        disabled: GREY[50080],
        disabledBackground: GREY[50024],
        focus: GREY[50024],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
const palette = {
    light: {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#fff",
            default: "#fff",
            neutral: GREY[200]
        },
        action: {
            active: GREY[600],
            ...COMMON.action
        }
    },
    dark: {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: GREY[50016]
        },
        action: {
            active: GREY[500],
            ...COMMON.action
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (palette);


/***/ }),

/***/ 5265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ customShadows)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4565);
// @mui

//

const LIGHT_MODE = _palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.grey[500] */ .Z.light.grey[500];
const DARK_MODE = "#000000";
const createShadow = (color)=>{
    const transparent1 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.2);
    const transparent2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.14);
    const transparent3 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.12);
    return [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`, 
    ];
};
const createCustomShadow = (color)=>{
    const transparent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.16);
    return {
        z1: `0 1px 2px 0 ${transparent}`,
        z8: `0 8px 16px 0 ${transparent}`,
        z12: `0 12px 24px -4px ${transparent}`,
        z16: `0 16px 32px -4px ${transparent}`,
        z20: `0 20px 40px -4px ${transparent}`,
        z24: `0 24px 48px 0 ${transparent}`,
        //
        primary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.primary.main */ .Z.light.primary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.info.main */ .Z.light.info.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.secondary.main */ .Z.light.secondary.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.success.main */ .Z.light.success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.warning.main */ .Z.light.warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.error.main */ .Z.light.error.main, 0.24)}`,
        //
        card: `0 0 2px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.2)}, 0 12px 24px -4px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.12)}`,
        dialog: `-40px 40px 80px -8px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.common.black */ .Z.light.common.black, 0.24)}`,
        dropdown: `0 0 2px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.24)}, -20px 20px 40px -4px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.24)}`
    };
};
const customShadows = {
    light: createCustomShadow(LIGHT_MODE),
    dark: createCustomShadow(DARK_MODE)
};
const shadows = {
    light: createShadow(LIGHT_MODE),
    dark: createShadow(DARK_MODE)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);


/***/ }),

/***/ 6584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme_typography)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/minimals.cc/hooks/useResponsive.ts + 1 modules
var hooks_useResponsive = __webpack_require__(1949);
;// CONCATENATED MODULE: ./src/minimals.cc/utils/getFontValue.ts
// @mui

// hooks

// ----------------------------------------------------------------------
function GetFontValue(variant) {
    const theme = useTheme();
    const breakpoints = useWidth();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const { fontWeight , letterSpacing  } = theme.typography[variant];
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
}
// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:960px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1280px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
function useWidth() {
    const theme = useTheme();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return(// @ts-ignore not sure what is this
    keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useResponsive("up", key);
        return !output && matches ? key : output;
    }, null) || "xs");
}

;// CONCATENATED MODULE: ./src/minimals.cc/theme/typography.ts

// ----------------------------------------------------------------------
const FONT_PRIMARY = "Be Vietnam, system";
const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 700,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        letterSpacing: 2,
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 700,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        fontWeight: 500,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "none"
    }
};
/* harmony default export */ const theme_typography = (typography);


/***/ }),

/***/ 5019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RQ": () => (/* binding */ defaultPreset)
/* harmony export */ });
/* unused harmony exports colorPresets, purplePreset, cyanPreset, bluePreset, orangePreset, redPreset, default */
/* harmony import */ var _theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4565);
// theme

// ----------------------------------------------------------------------
const colorPresets = [
    // DEFAULT
    {
        name: "default",
        ..._theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.primary */ .Z.light.primary
    },
    // PURPLE
    {
        name: "purple",
        lighter: "#EBD6FD",
        light: "#B985F4",
        main: "#7635dc",
        dark: "#431A9E",
        darker: "#200A69",
        contrastText: "#fff"
    },
    // CYAN
    {
        name: "cyan",
        lighter: "#D1FFFC",
        light: "#76F2FF",
        main: "#1CCAFF",
        dark: "#0E77B7",
        darker: "#053D7A",
        contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.grey[800] */ .Z.light.grey[800]
    },
    // BLUE
    {
        name: "blue",
        lighter: "#D1E9FC",
        light: "#76B0F1",
        main: "#2065D1",
        dark: "#103996",
        darker: "#061B64",
        contrastText: "#fff"
    },
    // ORANGE
    {
        name: "orange",
        lighter: "#FEF4D4",
        light: "#FED680",
        main: "#fda92d",
        dark: "#B66816",
        darker: "#793908",
        contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.grey[800] */ .Z.light.grey[800]
    },
    // RED
    {
        name: "red",
        lighter: "#FFE3D5",
        light: "#FFC1AC",
        main: "#FF3030",
        dark: "#B71833",
        darker: "#7A0930",
        contrastText: "#fff"
    }, 
];
const defaultPreset = colorPresets[0];
const purplePreset = colorPresets[1];
const cyanPreset = colorPresets[2];
const bluePreset = colorPresets[3];
const orangePreset = colorPresets[4];
const redPreset = colorPresets[5];
function getColorPresets(presetsKey) {
    return ({
        purple: purplePreset,
        cyan: cyanPreset,
        blue: bluePreset,
        orange: orangePreset,
        red: redPreset,
        default: defaultPreset
    })[presetsKey];
}


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [334], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();