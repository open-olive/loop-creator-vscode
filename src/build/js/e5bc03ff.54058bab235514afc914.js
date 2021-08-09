(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
  1090: function(module, exports, __webpack_require__) {
  },
  11: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return concatClasses;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return capitalize;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return isLocalFile;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return openUrl;
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return showOpenFileDialog;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return customEasing;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return sortPlugins;
    });
    var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
    var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(479);
    var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
    var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(480);
    var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(361);
    var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(133);
    var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(489);
    var ramda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(360);
    var ramda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(481);
    var ramda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(482);
    var ramda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(483);
    var ramda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(306);
    var ramda__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(490);
    var ramda__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(116);
    var ramda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78);
    var ramda__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66);
    var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(478);
    var ramda__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(487);
    var ramda__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(362);
    var ramda__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(488);
    var ramda__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(484);
    var ramda__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(485);
    var ramda__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(486);
    var ramda__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(359);
    var is_valid_domain__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(291);
    var is_valid_domain__WEBPACK_IMPORTED_MODULE_24___default = /* @__PURE__ */ __webpack_require__.n(is_valid_domain__WEBPACK_IMPORTED_MODULE_24__);
    var utils_tracking__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(4);
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const getTitle = (title, modifier) => `${title ? `${title}${modifier ? ` (${modifier})` : ""} | ` : ""}Olive Helps`;
    const concatClasses = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["a"])(" "), Object(ramda__WEBPACK_IMPORTED_MODULE_2__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["a"])(String)), Object(ramda__WEBPACK_IMPORTED_MODULE_4__["a"])(ramda__WEBPACK_IMPORTED_MODULE_5__["a"]), ramda__WEBPACK_IMPORTED_MODULE_6__["a"]);
    const filterWithKeys = (pred, obj) => Object(ramda__WEBPACK_IMPORTED_MODULE_7__["a"])(ramda__WEBPACK_IMPORTED_MODULE_8__["a"], Object(ramda__WEBPACK_IMPORTED_MODULE_2__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_9__["a"])(pred)), ramda__WEBPACK_IMPORTED_MODULE_10__["a"])(obj);
    const findWithIndex = Object(ramda__WEBPACK_IMPORTED_MODULE_11__["a"])(ramda__WEBPACK_IMPORTED_MODULE_12__["a"]);
    const sortByProp = (sortProp) => Object(ramda__WEBPACK_IMPORTED_MODULE_13__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(ramda__WEBPACK_IMPORTED_MODULE_14__["a"], Object(ramda__WEBPACK_IMPORTED_MODULE_15__["a"])(sortProp)));
    const getLowerCaseString = (input) => Object(ramda__WEBPACK_IMPORTED_MODULE_14__["a"])(input.toString());
    const hasValue = (val) => !(Object(ramda__WEBPACK_IMPORTED_MODULE_5__["a"])(val) || Object(ramda__WEBPACK_IMPORTED_MODULE_16__["a"])(val));
    const mapArrayById = (array) => Object(ramda__WEBPACK_IMPORTED_MODULE_17__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_15__["a"])("id"), array);
    const mapIndexed = Object(ramda__WEBPACK_IMPORTED_MODULE_11__["a"])(ramda__WEBPACK_IMPORTED_MODULE_18__["a"]);
    const sortListByProp = (propName, list) => Object(ramda__WEBPACK_IMPORTED_MODULE_13__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(ramda__WEBPACK_IMPORTED_MODULE_14__["a"], Object(ramda__WEBPACK_IMPORTED_MODULE_15__["a"])(propName)))(list);
    const capitalize = Object(ramda__WEBPACK_IMPORTED_MODULE_19__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_20__["a"])(), [Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(ramda__WEBPACK_IMPORTED_MODULE_21__["a"], ramda__WEBPACK_IMPORTED_MODULE_22__["a"]), ramda__WEBPACK_IMPORTED_MODULE_23__["a"]]);
    const capitalizeString = (string) => string.split(/[\s|_]/).map((value) => `${value.charAt(0)}${value.slice(1).toLowerCase()}`).join(" ");
    const isLocalFile = (url) => !url.includes("https://") && !url.includes("http://") && !is_valid_domain__WEBPACK_IMPORTED_MODULE_24___default()(url.split("/")[0]);
    const openUrl = (url) => __async(void 0, null, function* () {
      try {
        const {shell} = require("electron");
        if (isLocalFile(url)) {
          try {
            return shell.openItem(url);
          } catch (err) {
            console.error(`Problem opening file ${url}`, err);
          }
        }
        const link = /^https?:\/\//.test(url) ? url : `http://${url}`;
        Object(utils_tracking__WEBPACK_IMPORTED_MODULE_25__["i"])(link);
        return shell.openExternal(link);
      } catch (error) {
        console.info(error);
      }
      console.error(`Could not open URL ${url}`);
      return null;
    });
    const showOpenFileDialog = (..._0) => __async(void 0, [..._0], function* ({
      title,
      buttonLabel,
      filters = [],
      properties = ["openFile"],
      defaultPath,
      getCurrent = true
    } = {}) {
      try {
        const {
          remote: {app, dialog, getCurrentWindow}
        } = require("electron");
        const window2 = getCurrent ? getCurrentWindow() : null;
        const file = yield dialog.showOpenDialog(window2, {
          buttonLabel,
          filters,
          properties,
          title,
          defaultPath: defaultPath ? app.getPath(defaultPath) : void 0
        });
        return file;
      } catch (error) {
        console.info(error);
        return [];
      }
    });
    const customEasing = `cubic-bezier(0.455, 0.03, 0.515, 0.955)`;
    const toRem = (value) => `${value / 16}rem`;
    const parseFilePath = (filepath) => {
      try {
        const path = require("path");
        return path.parse(filepath);
      } catch (error) {
        console.info(error);
      }
      return null;
    };
    const sortPlugins = (render) => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(render, Object(ramda__WEBPACK_IMPORTED_MODULE_13__["a"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(ramda__WEBPACK_IMPORTED_MODULE_14__["a"], Object(ramda__WEBPACK_IMPORTED_MODULE_15__["a"])("name"))));
    var _unused_webpack_default_export = {
      concatClasses,
      customEasing,
      filterWithKeys,
      getLowerCaseString,
      hasValue,
      mapArrayById,
      mapIndexed
    };
  },
  12: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return ENV_DEV;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return ENV_LOCAL;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return ENV_QA;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return ENV_PROD;
    });
    const ENV_DEV = "dev";
    const ENV_LOCAL = "local";
    const ENV_QA = "qa";
    const ENV_PROD = "prod";
    var _unused_webpack_default_export = {
      ENV_DEV,
      ENV_LOCAL,
      ENV_QA,
      ENV_PROD
    };
  },
  1258: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var react_dom = __webpack_require__(26);
    var react_dom_default = /* @__PURE__ */ __webpack_require__.n(react_dom);
    var app = __webpack_require__(52);
    var prop_types = __webpack_require__(1);
    var prop_types_default = /* @__PURE__ */ __webpack_require__.n(prop_types);
    var react_router_dom = __webpack_require__(23);
    const Router = ({children}) => {
      if (window.astilectron) {
        return /* @__PURE__ */ react_default.a.createElement(react_router_dom["b"], null, children);
      }
      return /* @__PURE__ */ react_default.a.createElement(react_router_dom["a"], null, children);
    };
    Router.propTypes = {
      children: prop_types_default.a.node
    };
    var router = Router;
    var v4 = __webpack_require__(1360);
    var classnames = __webpack_require__(9);
    var classnames_default = /* @__PURE__ */ __webpack_require__.n(classnames);
    var tailwind_styles = __webpack_require__(497);
    var createMuiTheme = __webpack_require__(748);
    var ThemeProvider = __webpack_require__(1312);
    const defaultAuth = {
      isloggedIn: null,
      openChannelProfile: null,
      isDeveloper: null,
      profile: null,
      set: () => {
      }
    };
    const AuthContext = react_default.a.createContext(defaultAuth);
    const useAuthContext = () => Object(react["useContext"])(AuthContext);
    var context_auth = {
      defaultAuth,
      AuthContext
    };
    var context_config = __webpack_require__(14);
    var colors = __webpack_require__(3);
    var messaging = __webpack_require__(5);
    const classNameSchema = prop_types_default.a.oneOfType([
      prop_types_default.a.string,
      prop_types_default.a.object,
      prop_types_default.a.array
    ]);
    const statsSchema = prop_types_default.a.shape({
      views: prop_types_default.a.number.isRequired,
      adds: prop_types_default.a.number.isRequired,
      removes: prop_types_default.a.number.isRequired
    });
    const childrenSchema = prop_types_default.a.oneOfType([
      prop_types_default.a.arrayOf(prop_types_default.a.node),
      prop_types_default.a.node
    ]);
    const Toast = ({className, close, duration, level, message}) => {
      const [focus, setFocus] = Object(react["useState"])(false);
      const isLight = ["error", "info", "success"].includes(level);
      const isDark = ["warn"].includes(level);
      Object(react["useEffect"])(() => {
        if (duration && !focus) {
          let time = 0;
          const interval = setInterval(() => {
            time += 1;
            if (time >= duration) {
              close();
            }
          }, 1e3);
          return () => {
            clearInterval(interval);
          };
        }
        return () => {
        };
      }, [focus]);
      const handleFocus = () => {
        setFocus(true);
      };
      const handleBlur = () => {
        setFocus(false);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("shadow-lg", "flex", "flex-row", "items-center", "p-6", {
          "text-white": isLight,
          "text-black": isDark,
          "bg-error-dark": level === "error",
          "bg-info-dark": level === "info",
          "bg-success-dark": level === "success",
          "bg-warning-dark": level === "warn"
        }, className),
        style: {minHeight: "80px"},
        onMouseOver: handleFocus,
        onFocus: handleFocus,
        onMouseOut: handleBlur,
        onBlur: handleBlur
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className: "mr-3 flex-grow"
      }, message), /* @__PURE__ */ react_default.a.createElement("button", {
        className: classnames_default()("btn", {
          "btn-clear-white": isLight,
          "btn-clear-black": isDark
        }),
        type: "button",
        onClick: close
      }, "Close"));
    };
    Toast.propTypes = {
      className: classNameSchema,
      close: prop_types_default.a.func.isRequired,
      duration: prop_types_default.a.number.isRequired,
      level: prop_types_default.a.oneOf(["info", "success", "warn", "error"]).isRequired,
      message: prop_types_default.a.string.isRequired
    };
    var toast = Toast;
    var utils_fetch = __webpack_require__(19);
    var tracking = __webpack_require__(4);
    var confirmDialog = __webpack_require__(384);
    var react_router = __webpack_require__(42);
    var moment = __webpack_require__(6);
    var moment_default = /* @__PURE__ */ __webpack_require__.n(moment);
    var isEmpty = __webpack_require__(133);
    var CheckCircleOutline = __webpack_require__(713);
    var CheckCircleOutline_default = /* @__PURE__ */ __webpack_require__.n(CheckCircleOutline);
    var HighlightOff = __webpack_require__(714);
    var HighlightOff_default = /* @__PURE__ */ __webpack_require__.n(HighlightOff);
    var IconButton = __webpack_require__(752);
    var Menu = __webpack_require__(749);
    var MenuItem = __webpack_require__(1331);
    var Typography = __webpack_require__(305);
    var svg = __webpack_require__(93);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (__hasOwnProp.call(b, prop2))
          __defNormalProp(a, prop2, b[prop2]);
      if (__getOwnPropSymbols)
        for (var prop2 of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop2))
            __defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const fontFamilies = {
      default: "Material Icons",
      outlined: "Material Icons Outlined",
      round: "Material Icons Round",
      sharp: "Material Icons Sharp",
      "two-tone": "Material Icons Two Tone"
    };
    const IconComponent = react_default.a.forwardRef((props, ref) => {
      const {icon, type, className, onClick} = props;
      const addlProps = onClick ? {
        onClick,
        role: "button",
        tabIndex: "-1"
      } : {};
      if (icon && svg["a"][icon]) {
        return /* @__PURE__ */ react_default.a.createElement("div", __assign(__assign({}, addlProps), {
          ref,
          className: classnames_default()(className, "w-6", "h-6", "block"),
          dangerouslySetInnerHTML: {__html: svg["a"][icon]}
        }));
      }
      return /* @__PURE__ */ react_default.a.createElement("span", __assign(__assign({}, addlProps), {
        ref,
        className: classnames_default()(className),
        style: {fontFamily: fontFamilies[type || "default"]}
      }), icon);
    });
    IconComponent.propTypes = {
      className: classNameSchema,
      icon: prop_types_default.a.string.isRequired,
      type: prop_types_default.a.oneOf(["outlined", "round", "sharp", "two-tone"]),
      onClick: prop_types_default.a.func
    };
    var icon_icon = IconComponent;
    var markdown = __webpack_require__(49);
    var loopLibrary_context = __webpack_require__(13);
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    var useAsyncEffect = (fn, watch) => {
      Object(react["useEffect"])(() => {
        (() => __async(void 0, null, function* () {
          yield fn();
        }))();
      }, watch);
    };
    var node_modules_semver = __webpack_require__(85);
    var semver_default = /* @__PURE__ */ __webpack_require__.n(node_modules_semver);
    var hooks_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const useGetAvailableLoopFromContext = (appId) => {
      const {available} = Object(loopLibrary_context["i"])();
      const availableLoop = Object(react["useMemo"])(() => available == null ? void 0 : available.find((loop) => loop.appId === appId), [appId, available]);
      return availableLoop;
    };
    const useGetInstalledLoopFromContext = (appId) => {
      const {installed} = Object(loopLibrary_context["i"])();
      const installedLoop = Object(react["useMemo"])(() => installed == null ? void 0 : installed.find((loop) => loop.appId === appId), [appId, installed]);
      return installedLoop;
    };
    const useGetLocalInstalledLoopFromContext = (appId) => {
      const {localInstalled} = Object(loopLibrary_context["i"])();
      const localInstalledLoop = Object(react["useMemo"])(() => localInstalled == null ? void 0 : localInstalled.find((loop) => loop.appId === appId), [appId, localInstalled]);
      return localInstalledLoop;
    };
    const useCheckIfLoopVersionInstalled = (appId, version) => {
      const installedLoop = useGetInstalledLoopFromContext(appId);
      return installedLoop && Number(installedLoop.version) === Number(version);
    };
    const useCheckIfLoopInstalled = (appId) => {
      const isLoopInstalled = useGetInstalledLoopFromContext(appId);
      return !!isLoopInstalled;
    };
    const useCheckIfLoopLocallyInstalled = (appId) => {
      const isLoopLocallyInstalled = useGetLocalInstalledLoopFromContext(appId);
      return !!isLoopLocallyInstalled;
    };
    const useCheckIfLoopHasApprovedUpdate = (appId, os) => {
      var _a, _b, _c;
      const installedLoop = useGetInstalledLoopFromContext(appId);
      const availableLoop = useGetAvailableLoopFromContext(appId);
      const semverForOS = os === "win32" ? "semverWindows" : "semverMac";
      const osString = os === "win32" ? "windows" : "mac";
      if (!installedLoop || !availableLoop) {
        return [false, null];
      }
      const installedLoopSemver = installedLoop.specification === "2" ? installedLoop.semver : installedLoop[semverForOS];
      const availableLoopSemver = ((_a = availableLoop.customData) == null ? void 0 : _a.specification) === "2" ? (_b = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _b.semver : (_c = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _c.semver[osString];
      if (semver_default.a.gte(installedLoopSemver, availableLoopSemver)) {
        return [false, null];
      }
      return [true, installedLoop, availableLoop];
    };
    const useQuery = () => {
      return new URLSearchParams(Object(react_router["h"])().search);
    };
    const useFetchInstalled = () => {
      const {set} = Object(loopLibrary_context["i"])();
      return () => {
        Object(messaging["f"])().then((loops) => {
          if (loops) {
            const localInstalled = loops.filter((item) => item.local);
            const installed = loops.filter((item) => !item.local);
            set(loopLibrary_context["e"])(localInstalled);
            set(loopLibrary_context["d"])(installed);
          } else {
            set(loopLibrary_context["e"])([]);
            set(loopLibrary_context["d"])([]);
          }
        });
      };
    };
    const useFetchReviews = (appId) => {
      const [error, setError] = Object(react["useState"])(null);
      const [reviews, setReviews] = Object(react["useState"])(null);
      Object(react["useEffect"])(() => {
        (() => hooks_async(void 0, null, function* () {
          try {
            const reviewList = yield Object(utils_fetch["a"])(`/library/loop/${appId}/reviews`);
            setReviews(reviewList || []);
          } catch (e) {
            console.error(`Error fetching reviews for loop ${appId}`);
            setError(e);
          }
        }))();
      }, [appId]);
      return [reviews, error];
    };
    const useFetchLoop = (appId) => {
      const [error, setError] = Object(react["useState"])(null);
      const [loop, setLoop] = Object(react["useState"])(null);
      const [currentId, setCurrentId] = Object(react["useState"])(appId);
      useAsyncEffect(() => hooks_async(void 0, null, function* () {
        if (!loop || appId !== currentId) {
          try {
            setLoop(yield Object(utils_fetch["a"])(`/library/loop/${appId}`));
            setCurrentId(appId);
          } catch (e) {
            console.error(`Error fetching loop with id ${appId}`);
            setError(e);
          }
        }
      }), [loop, appId]);
      return [loop, error];
    };
    const useFetchLoopByVersion = (appId, version, shouldRefresh = true, refreshCallback = () => {
    }) => {
      const [error, setError] = Object(react["useState"])(null);
      const [loop, setLoop] = Object(react["useState"])(null);
      useAsyncEffect(() => hooks_async(void 0, null, function* () {
        if (shouldRefresh) {
          try {
            setLoop(yield Object(utils_fetch["a"])(`/library/loop/${appId}/version/${version}`));
          } catch (e) {
            console.error(`Error fetching loop with id ${appId} and version ${version}`);
            setError(e);
          }
          refreshCallback();
        }
      }), [appId, version, shouldRefresh]);
      return [loop, error];
    };
    const useAddReview = (id) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      return Object(react["useCallback"])((_0) => hooks_async(void 0, [_0], function* ({headline, description, rating, version, operatingSystem}) {
        try {
          const myReview = yield Object(utils_fetch["a"])(`/library/loop/${id}/review`, "POST", {
            headline,
            description,
            rating,
            operatingSystem,
            version
          });
          makeToast("Review successfully added.", "success");
          return myReview;
        } catch (e) {
          makeToast("Unable to add your review.", "error");
          throw e;
        }
      }), [id]);
    };
    const useEditReview = (appId, id) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      return Object(react["useCallback"])((_0) => hooks_async(void 0, [_0], function* ({
        headline,
        description,
        rating,
        version,
        operatingSystem,
        createdDate
      }) {
        try {
          const myReview = yield Object(utils_fetch["a"])(`/library/loop/${appId}/review/${id}`, "PUT", {
            headline,
            description,
            rating,
            version,
            operatingSystem,
            createdDate
          });
          makeToast("Review successfully edited.", "success");
          return myReview;
        } catch (e) {
          makeToast("Unable to edit your review.", "error");
          throw e;
        }
      }), [id]);
    };
    const useFetchMyReview = (appId) => {
      const [error, setError] = Object(react["useState"])(null);
      const [review, setReview] = Object(react["useState"])(null);
      Object(react["useEffect"])(() => {
        (() => hooks_async(void 0, null, function* () {
          try {
            const json = yield Object(utils_fetch["a"])(`/library/loop/${appId}/review/me`);
            setReview(json);
          } catch (e) {
            setError(e);
          }
        }))();
      }, [appId]);
      return [review, error, setReview];
    };
    const useAuthoredLoops = () => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [myLoops, setMyLoops] = Object(react["useState"])();
      const filterVersions = (loops) => {
        const loopMap = {};
        const sortedLoops = loops.sort((a, b) => {
          return b.version - a.version;
        });
        return sortedLoops.filter((loop) => {
          if (!loopMap[`${loop.appId}-${loop.status.value}`]) {
            loopMap[`${loop.appId}-${loop.status.value}`] = true;
            return loop;
          }
          return null;
        });
      };
      useAsyncEffect(() => hooks_async(void 0, null, function* () {
        if (!myLoops) {
          try {
            const list = yield Object(utils_fetch["a"])("/library/loops/mine");
            const filteredList = filterVersions(list);
            setMyLoops(filteredList);
          } catch (e) {
            setMyLoops([]);
            makeToast("Unable to get your authored loops at this time.", "error");
          }
        }
      }), [myLoops]);
      return [myLoops, setMyLoops];
    };
    const useAuthoredLoopStats = () => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [myStats, setMyStats] = Object(react["useState"])({});
      useAsyncEffect(() => hooks_async(void 0, null, function* () {
        try {
          const response = yield Object(utils_fetch["a"])("/library/metrics?metrics=views,adds,removes,pauses");
          setMyStats(response);
        } catch (e) {
          makeToast("Unable to get your authored loop stats at this time.", "error");
        }
      }), []);
      return myStats;
    };
    const useLoopStats = (loop) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [stats, setStats] = Object(react["useState"])([]);
      useAsyncEffect(() => hooks_async(void 0, null, function* () {
        if (loop) {
          try {
            const {appId, created} = loop;
            const query = `?start=${moment_default()(created).utc().format("YYYY-MM")}`;
            const response = yield Object(utils_fetch["a"])(`/library/metrics/${appId}${query}`);
            setStats(response);
          } catch (e) {
            makeToast("Unable to fetch stats for this loop at this time.", "error");
            console.error(e);
          }
        }
      }), [loop]);
      return stats;
    };
    const useFetchVersionedLoops = (statuses = ["inReview", "pending", "inDevelopment", "accepted", "suspended"], shouldRefresh = true, refreshCallback = () => {
    }) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [loops, setLoops] = Object(react["useState"])([]);
      const [error, setError] = Object(react["useState"])();
      const [loading, setLoading] = Object(react["useState"])(false);
      useAsyncEffect(() => hooks_async(void 0, null, function* () {
        if (shouldRefresh) {
          setLoading(true);
          try {
            setLoops(yield Object(utils_fetch["a"])(`/library/loops/versions?statuses=${statuses.join(",")}`));
          } catch (e) {
            makeToast("Unable to fetch loops at this time.", "error");
            setError(e);
          }
          setLoading(false);
          refreshCallback();
        }
      }), [shouldRefresh]);
      return [loops, loading, error];
    };
    const useCheckIfLoopCanUpdate = (loop, os) => {
      var _a, _b, _c;
      const installedLoop = useGetInstalledLoopFromContext(loop.appId);
      if (!installedLoop)
        return [false, null, null];
      const semverForOS = os === "win32" ? "semverWindows" : "semverMac";
      const osString = os === "win32" ? "windows" : "mac";
      const installedLoopSemver = installedLoop.specification === "2" ? installedLoop.semver : installedLoop[semverForOS];
      const loopSemver = ((_a = loop.customData) == null ? void 0 : _a.specification) === "2" ? (_b = loop == null ? void 0 : loop.customData) == null ? void 0 : _b.semver : (_c = loop == null ? void 0 : loop.customData) == null ? void 0 : _c.semver[osString];
      if (semver_default.a.gte(installedLoopSemver, loopSemver)) {
        return [false, installedLoopSemver, loopSemver];
      }
      return [true, installedLoopSemver, loopSemver];
    };
    const useCheckIfLoopContractVersionValid = (appId, loopContractVersion, loop, review = false) => {
      var _a, _b, _c, _d, _e;
      const availableLoop = review ? loop : useGetAvailableLoopFromContext(appId);
      if (!availableLoop || !loopContractVersion)
        return false;
      if (((_a = availableLoop.customData) == null ? void 0 : _a.specification) === "1")
        return true;
      const availableLoopContractVersion = ((_c = (_b = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _b.webpackMetadata) == null ? void 0 : _c.oliveHelpsContractVersion) || ((_e = (_d = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _d.webpackMetadata) == null ? void 0 : _e.ldkVersion);
      if (availableLoopContractVersion === "PLACEHOLDER")
        return true;
      return semver_default.a.valid(availableLoopContractVersion) ? semver_default.a.lte(availableLoopContractVersion, loopContractVersion) : false;
    };
    var useToggle = (initialState) => {
      const [state, setState] = Object(react["useState"])(initialState);
      const on = Object(react["useCallback"])(() => {
        setState(true);
      }, [state]);
      const off = Object(react["useCallback"])(() => {
        setState(false);
      }, [state]);
      const toggle = Object(react["useCallback"])(() => {
        setState((current) => !current);
      }, [state]);
      return [state, on, off, toggle];
    };
    const LoopPauseToggle = ({appId, name, updatePauseButton}) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const isInstalled = useCheckIfLoopInstalled(appId);
      const [isPaused, setPaused, setUnpaused] = useToggle(false);
      const [isProcessing, setIsProcessing, setIsNotProcessing] = useToggle(false);
      const [isMounted, setIsMounted] = useToggle(false);
      const fillColor = Object(react["useMemo"])(() => isPaused ? colors["c"] : colors["e"], [isPaused]);
      Object(react["useEffect"])(() => {
        if (appId && isInstalled) {
          Object(messaging["g"])(appId).then(({paused}) => {
            if (paused) {
              setPaused();
            } else {
              setUnpaused();
            }
            setIsMounted();
          });
        }
      }, [appId, updatePauseButton]);
      const togglePaused = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isProcessing) {
          return;
        }
        setIsProcessing();
        if (isPaused) {
          Object(messaging["t"])(appId, false).then(() => {
            setUnpaused();
            Object(tracking["h"])({
              category: tracking["a"],
              action: "Loop unpaused",
              label: `appId=${appId},appName=${name}`
            });
            makeToast("Loop sucessfully unpaused", "success");
            setIsNotProcessing();
          });
        } else {
          Object(messaging["t"])(appId, true).then(() => {
            setPaused();
            Object(tracking["h"])({
              category: tracking["a"],
              action: "Loop paused",
              label: `appId=${appId},appName=${name}`
            });
            makeToast("Loop sucessfully paused. It will automatically unpause tommorow.", "success");
            setIsNotProcessing();
          });
        }
      };
      if (isInstalled && isMounted) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          tabIndex: 0,
          role: "button",
          className: "flex items-center clickable",
          onClick: togglePaused
        }, /* @__PURE__ */ react_default.a.createElement("div", {
          className: classnames_default()("w-12", "h-6", "flex", "items-center", "bg-primary", "rounded-full", "p-1", "transition-colors", "duration-500", {
            "bg-primary-disabled": isPaused && isProcessing || !isPaused && !isProcessing
          })
        }, /* @__PURE__ */ react_default.a.createElement("div", {
          className: classnames_default()("w-5", "h-5", "transition-transform", "duration-300", "ease-in-out", {
            transform: isPaused && !isProcessing || !isPaused && isProcessing,
            "translate-x-5": isPaused && !isProcessing || !isPaused && isProcessing
          })
        }, /* @__PURE__ */ react_default.a.createElement("svg", {
          className: classnames_default()("transition-colors", "duration-500", {
            "animate-spin": isProcessing
          })
        }, /* @__PURE__ */ react_default.a.createElement("circle", {
          cx: "50%",
          cy: "50%",
          r: "8px",
          strokeDasharray: isProcessing ? "35,5" : "none",
          stroke: "white",
          strokeWidth: "3",
          fill: isProcessing ? fillColor : "white",
          className: classnames_default()("transition-colors", "duration-500")
        })))), /* @__PURE__ */ react_default.a.createElement("span", {
          className: "ml-2 text-grey-600"
        }, "Pause"));
      }
      return null;
    };
    LoopPauseToggle.propTypes = {
      appId: prop_types_default.a.string,
      name: prop_types_default.a.string,
      updatePauseButton: prop_types_default.a.bool
    };
    var loopPauseToggle = LoopPauseToggle;
    var loopAddButton = __webpack_require__(385);
    var loopAddButton_defProp = Object.defineProperty;
    var loopAddButton_hasOwnProp = Object.prototype.hasOwnProperty;
    var loopAddButton_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var loopAddButton_propIsEnum = Object.prototype.propertyIsEnumerable;
    var loopAddButton_defNormalProp = (obj, key, value) => key in obj ? loopAddButton_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var loopAddButton_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (loopAddButton_hasOwnProp.call(b, prop2))
          loopAddButton_defNormalProp(a, prop2, b[prop2]);
      if (loopAddButton_getOwnPropSymbols)
        for (var prop2 of loopAddButton_getOwnPropSymbols(b)) {
          if (loopAddButton_propIsEnum.call(b, prop2))
            loopAddButton_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const LLLoopAddButton = (props) => {
      const {
        appId,
        availableLoop,
        installedLoop,
        needsUpdate,
        isValidContractVersion
      } = props;
      const getInstalled = useFetchInstalled();
      const {makeToast} = Object(loopLibrary_context["i"])();
      const isLoopInstalled = useCheckIfLoopInstalled(appId);
      const isLoopLocallyInstalled = useCheckIfLoopLocallyInstalled(appId);
      return /* @__PURE__ */ react_default.a.createElement(loopAddButton["a"], loopAddButton_assign({}, {
        appId,
        availableLoop,
        installedLoop,
        needsUpdate,
        getInstalled,
        isLoopInstalled,
        isLoopLocallyInstalled,
        isValidContractVersion,
        makeToast,
        trackingCategory: tracking["a"]
      }));
    };
    LLLoopAddButton.propTypes = {
      appId: prop_types_default.a.string.isRequired,
      availableLoop: prop_types_default.a.object,
      installedLoop: prop_types_default.a.object,
      isValidContractVersion: prop_types_default.a.bool,
      needsUpdate: prop_types_default.a.bool
    };
    var components_loopAddButton = LLLoopAddButton;
    var components_icon = __webpack_require__(29);
    var popper_lite = __webpack_require__(296);
    var preventOverflow = __webpack_require__(298);
    var flip = __webpack_require__(297);
    var offset = __webpack_require__(709);
    var tooltip_defProp = Object.defineProperty;
    var tooltip_hasOwnProp = Object.prototype.hasOwnProperty;
    var tooltip_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var tooltip_propIsEnum = Object.prototype.propertyIsEnumerable;
    var tooltip_defNormalProp = (obj, key, value) => key in obj ? tooltip_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var tooltip_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (tooltip_hasOwnProp.call(b, prop2))
          tooltip_defNormalProp(a, prop2, b[prop2]);
      if (tooltip_getOwnPropSymbols)
        for (var prop2 of tooltip_getOwnPropSymbols(b)) {
          if (tooltip_propIsEnum.call(b, prop2))
            tooltip_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const Tooltip = ({
      children,
      className,
      disabled,
      onClick,
      offsetValue,
      position,
      style,
      text,
      tipStyle,
      hide,
      duration
    }) => {
      const [isShown, setIsShown] = Object(react["useState"])(false);
      const createTimeout = Object(react["useRef"])(null);
      const popperInstance = Object(react["useRef"])(null);
      const contentRef = Object(react["useRef"])(null);
      const tooltipRef = Object(react["useRef"])(null);
      const destroyTooltip = () => {
        if (createTimeout.current)
          clearTimeout(createTimeout.current);
        if (popperInstance == null ? void 0 : popperInstance.current) {
          setIsShown(false);
          popperInstance.current.destroy();
          popperInstance.current = null;
        }
      };
      const createTooltip = () => {
        createTimeout.current = setTimeout(() => {
          popperInstance.current = Object(popper_lite["a"])(contentRef.current, tooltipRef.current, {
            placement: position,
            modifiers: [
              preventOverflow["a"],
              flip["a"],
              offset["a"],
              {name: "offset", options: {offset: offsetValue}}
            ]
          });
          setIsShown(true);
        }, duration || 1e3);
      };
      Object(react["useEffect"])(() => {
        return () => {
          destroyTooltip();
        };
      }, []);
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("span", tooltip_assign(tooltip_assign({
        ref: contentRef,
        className,
        onMouseEnter: createTooltip,
        onMouseLeave: destroyTooltip
      }, onClick ? {
        onClick
      } : {}), {
        "data-tooltip": true,
        style: tooltip_assign({cursor: !disabled ? "pointer" : "no-drop"}, style)
      }), children), /* @__PURE__ */ react_default.a.createElement("span", {
        ref: tooltipRef,
        className: "bg-black text-sm text-white w-60 h-auto opacity-90 p-4 rounded-xs z-50",
        style: tooltip_assign(tooltip_assign({}, tipStyle), {
          display: isShown && !hide ? "block" : "none"
        }),
        onMouseLeave: destroyTooltip
      }, text));
    };
    Tooltip.propTypes = {
      children: prop_types_default.a.oneOfType([
        prop_types_default.a.arrayOf(prop_types_default.a.node),
        prop_types_default.a.node
      ]).isRequired,
      className: prop_types_default.a.string,
      disabled: prop_types_default.a.bool,
      offsetValue: prop_types_default.a.array,
      onClick: prop_types_default.a.func,
      position: prop_types_default.a.string,
      style: prop_types_default.a.object,
      text: prop_types_default.a.string,
      tipStyle: prop_types_default.a.object,
      hide: prop_types_default.a.bool,
      duration: prop_types_default.a.number
    };
    Tooltip.defaultProps = {
      className: null,
      disabled: false,
      duration: 1e3,
      hide: false,
      offsetValue: [0, 0],
      onClick: null,
      position: "top",
      style: {},
      text: "",
      tipStyle: {}
    };
    var components_tooltip = Tooltip;
    const AddButtonInfo = ({action}) => {
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(components_tooltip, {
        position: "right",
        offsetValue: [0, 10],
        text: `You need the latest version of Olive Helps to ${action} this Loop`
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "info",
        style: {height: "1.25rem", width: "1.25rem"}
      })));
    };
    AddButtonInfo.propTypes = {
      action: prop_types_default.a.string
    };
    AddButtonInfo.defaultProps = {
      action: "add"
    };
    var addButtonInfo = AddButtonInfo;
    var spinner = __webpack_require__(18);
    const loopLogo_sizes = {
      small: "w-12 h-12",
      default: "w-32 h-32",
      large: "w-40 h-40"
    };
    const LoopLogo = ({logo, size, name, className}) => {
      const s = loopLogo_sizes[size];
      const url = logo && logo.startsWith("//") ? `http:${logo}` : logo;
      if (logo) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: classnames_default()("rounded bg-contain bg-no-repeat bg-center", {[s]: !className || !className.includes("w-")}, className),
          style: {
            backgroundImage: `url(${url})`
          }
        });
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("rounded bg-gradient-to-b from-primary to-primary-light flex flex-row justify-center items-center text-white text-5xl", {[s]: !className || !className.includes("w-")}, className)
      }, name.toUpperCase().substring(0, 1));
    };
    LoopLogo.propTypes = {
      logo: prop_types_default.a.string,
      size: prop_types_default.a.oneOf(["default", "small", "large"]),
      name: prop_types_default.a.string,
      className: classNameSchema
    };
    LoopLogo.defaultProps = {
      size: "default",
      name: "L"
    };
    var loopLogo = LoopLogo;
    var Dialog = __webpack_require__(754);
    var makeStyles = __webpack_require__(1309);
    var components_button = __webpack_require__(33);
    var utils = __webpack_require__(11);
    const useClickOutside = (ref, callback) => {
      const handleClick = (e) => {
        if ((ref == null ? void 0 : ref.current) && !ref.current.contains(e.target)) {
          callback(e);
        }
      };
      Object(react["useEffect"])(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
      }, [callback, ref]);
    };
    var hooks_useClickOutside = useClickOutside;
    const compose = (...fns) => () => fns.forEach((fn) => fn());
    const useStyles = Object(makeStyles["a"])(() => ({
      paperWidthMd: {
        width: "700px"
      }
    }));
    const MorePopupMenu = (props) => {
      var _a, _b;
      const classes = useStyles();
      const {isDeveloper, openChannelProfile: oc} = Object(react["useContext"])(AuthContext);
      const {loop, isLocal, isDetailsPage, togglePauseButton} = props;
      const {appId, name, customData} = loop || {};
      const [isPaused, setPaused, setUnpaused] = useToggle(false);
      const [
        removeLoopDialogOpen,
        openRemoveLoopDialog,
        closeRemoveLoopDialog
      ] = useToggle(false);
      const {makeToast} = Object(loopLibrary_context["i"])();
      const getInstalled = useFetchInstalled();
      const isInstalled = isLocal ? useCheckIfLoopLocallyInstalled(appId) : useCheckIfLoopInstalled(appId);
      Object(react["useEffect"])(() => {
        if (appId && isInstalled) {
          Object(messaging["g"])(appId).then(({paused}) => {
            if (paused) {
              setPaused();
            } else {
              setUnpaused();
            }
          });
        }
      }, [appId, isInstalled, removeLoopDialogOpen]);
      const isMyLoop = Object(react["useMemo"])(() => {
        var _a2;
        return ((_a2 = oc == null ? void 0 : oc.developer) == null ? void 0 : _a2.id) === (customData == null ? void 0 : customData.authorId);
      }, [
        oc,
        customData
      ]);
      const submitPath = isLocal ? `/developer/local-loop/submit/${loop.appId}` : `/developer/submit/${loop.appId}/${loop.version}`;
      const canSubmitUpdate = isDeveloper && (isLocal || isMyLoop || ((_a = customData == null ? void 0 : customData.allowedEditors) == null ? void 0 : _a.find((editor) => {
        var _a2;
        return editor.developerAccountId === ((_a2 = oc == null ? void 0 : oc.developer) == null ? void 0 : _a2.id);
      })));
      const [moreMenu, , hideMoreMenu, toggleMoreMenu] = useToggle(false);
      const iconRef = Object(react["useRef"])();
      hooks_useClickOutside(iconRef, hideMoreMenu);
      const handleDialogClick = (event) => {
        event.stopPropagation();
      };
      const handleRemoveFeedBack = () => Object(utils["e"])(`https://docs.google.com/forms/d/e/1FAIpQLSd6OPsZ4CIqqil5jCstU7Ev7J5BGjZdGcEysX2-PEUotDlK2g/viewform?&entry.1407901986=${loop.name}`);
      const removeLoopToastMessage = /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("span", null, "This Loop has been removed. If you have a minute, "), /* @__PURE__ */ react_default.a.createElement("a", {
        role: "button",
        tabIndex: -1,
        className: "underline",
        onClick: handleRemoveFeedBack
      }, "give us some feedback"), /* @__PURE__ */ react_default.a.createElement("span", null, "."));
      const handleRemoveLoop = () => {
        Object(messaging["V"])(appId).then(() => {
          getInstalled();
          makeToast(removeLoopToastMessage, "success");
          if (!isLocal) {
            Object(utils_fetch["a"])("/library/metric", "POST", {
              appId,
              field: "removes",
              date: Date.now()
            }).catch((e) => console.info("Could not track uninstallation:", e));
          }
          Object(tracking["h"])({
            category: tracking["a"],
            action: "Loop removed",
            label: `appId=${appId},appName=${name}`
          });
          getInstalled();
        }).catch((error) => {
          console.info("error uninstalling", error);
          makeToast("Error uninstalling loop", "error");
          getInstalled();
        });
        closeRemoveLoopDialog();
      };
      const handlePauseLoop = () => {
        if (!isPaused) {
          Object(messaging["t"])(appId, true).then(() => {
            setPaused();
            togglePauseButton();
            Object(tracking["h"])({
              category: tracking["a"],
              action: "Loop paused",
              label: `appId=${appId},appName=${name}`
            });
            makeToast("Loop sucessfully paused. It will automatically unpause tommorow.", "success");
          });
        }
      };
      const canLeaveReview = !isLocal && !isDetailsPage && ((_b = loop == null ? void 0 : loop.status) == null ? void 0 : _b.value) === "approved" && !isMyLoop;
      if (!canSubmitUpdate && !isInstalled && !canLeaveReview) {
        return null;
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        onClick: handleDialogClick,
        open: removeLoopDialogOpen,
        onClose: closeRemoveLoopDialog,
        maxWidth: "md",
        classes: {paperWidthMd: classes.paperWidthMd}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-3 py-2 bg-primary flex justify-between items-center"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-2xl text-white pl-2 font-semibold"
      }, "Remove Loop?"), /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: closeRemoveLoopDialog,
        tooltip: "Close",
        color: "transparent",
        className: "py-3"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "close",
        className: "text-white"
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "my-8 mx-6 text-grey-paragraph h-20"
      }, /* @__PURE__ */ react_default.a.createElement("p", {
        className: "mb-6"
      }, "If you remove this loop, you will no longer receive Whispers."), !isPaused && /* @__PURE__ */ react_default.a.createElement("p", null, "If you want, you can pause it for a few hours. It will automatically unpause tommorow.")), /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "mb-4 text-grey-400"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between mb-4 px-6"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary-outline py-1 px-5 rounded-xs text-sm",
        onClick: handleRemoveLoop
      }, "Remove"), /* @__PURE__ */ react_default.a.createElement("div", null, !isPaused && /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary-outline py-1 px-5 rounded-xs text-sm mr-4",
        onClick: handlePauseLoop
      }, "Pause"), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary py-1 px-5 rounded-xs text-sm border-primary border",
        onClick: closeRemoveLoopDialog
      }, "Cancel")))), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        ref: iconRef,
        icon: "more_horiz",
        className: "cursor-pointer text-grey-700 text-xl leading-none",
        onClick: toggleMoreMenu
      }), moreMenu && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "absolute top-full right-0 w-48 border border-grey-200 rounded z-10 bg-white"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "my-4"
      }, canSubmitUpdate && /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        className: "px-4 py-2 hover:bg-primary hover:text-white cursor-pointer block",
        to: submitPath
      }, isLocal ? "Update local Loop" : "Submit new version"), canLeaveReview && /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: `/loop/${loop.appId}`,
        className: "px-4 py-2 hover:bg-primary hover:text-white cursor-pointer block"
      }, "Leave a review"), isInstalled && isDetailsPage && /* @__PURE__ */ react_default.a.createElement("div", {
        role: "menu",
        tabIndex: "-1",
        className: "px-4 py-2 hover:bg-primary hover:text-white cursor-pointer",
        onClick: compose(hideMoreMenu, openRemoveLoopDialog)
      }, "Remove Loop"))));
    };
    MorePopupMenu.propTypes = {
      loop: prop_types_default.a.object.isRequired,
      isLocal: prop_types_default.a.bool,
      isDetailsPage: prop_types_default.a.bool,
      togglePauseButton: prop_types_default.a.func
    };
    MorePopupMenu.defaultProps = {
      isLocal: false,
      isDetailsPage: false
    };
    var morePopupMenu = MorePopupMenu;
    var esm = __webpack_require__(747);
    var useDeviceSize = (sz) => {
      const sizes = {purge: {content: ["**/*.jsx"], options: {safelist: ["local", "dev", "qa", "prod"]}}, presets: [], darkMode: "media", theme: {screens: {xs: "1px", sm: "640px", md: "940px", lg: "1150px", xl: "1550px", "2xl": "2000px"}, colors: {transparent: "transparent", current: "currentColor", white: "#fff", red: {"50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d"}, yellow: {"50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f"}, green: {"50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b"}, blue: {"50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a"}, indigo: {"50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81"}, purple: {"50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95"}, pink: {"50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843"}, "primary-pale": "#F8F4FF", "primary-light": "#EEE4FF", primary: "#651FFF", "primary-alt": "#B388FF", "primary-dark": "#410099", "primary-disabled": "#D3BEFA", "primary-error": "#EB473B", "secondary-light": "#80DEEA", secondary: "#00BCD4", "secondary-dark": "#00838F", "tertiary-light": "#ff8532", tertiary: "#ff6700", "tertiary-dark": "#e55c00", "error-light": "#FF4081", error: "#F50057", "error-dark": "#C51162", "warning-light": "#FFFF8D", warning: "#FFFF00", "warning-dark": "#FFD600", "info-light": "#81D4FA", info: "#00AEFF", "info-dark": "#0091EA", "success-light": "#68F5CA", success: "#0DCC91", "success-dark": "#099268", "grey-100": "#f5f5f5", "grey-200": "#eeeeee", "grey-250": "#e0dfdf", "grey-300": "#e0e0e0", "grey-350": "#dadada", "grey-400": "#bdbdbd", "grey-disabled": "#939393", "grey-500": "#9e9e9e", "grey-600": "#777777", "grey-700": "#616161", "grey-paragraph": "#616161", "grey-750": "#505050", "grey-800": "#424242", "grey-900": "#212121", "black-light": "#3d3a3a", black: "#232020", orange: "#FD9743", "salmon-light": "#FFAFAF", salmon: "#FF7F78"}, spacing: {"0": "0px", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", "11": "2.75rem", "12": "3rem", "14": "3.5rem", "16": "4rem", "20": "5rem", "24": "6rem", "28": "7rem", "32": "8rem", "36": "9rem", "40": "10rem", "44": "11rem", "48": "12rem", "52": "13rem", "56": "14rem", "60": "15rem", "64": "16rem", "72": "18rem", "80": "20rem", "96": "24rem", px: "1px", "0.5": "0.125rem", "1.5": "0.375rem", "2.5": "0.625rem", "3.5": "0.875rem"}, animation: {none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite"}, backgroundImage: {none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"}, backgroundPosition: {bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top"}, backgroundSize: {auto: "auto", cover: "cover", contain: "contain"}, borderRadius: {"12": "12px", none: "0px", xs: "4px", sm: "8px", DEFAULT: "10px", md: "16px", lg: "20px", xl: "24px", "2xl": "28px", "3xl": "36px", full: "9999px"}, borderWidth: {"0": "0", "2": "2px", "3": "3px", "4": "4px", "6": "6px", "8": "8px", "10": "10px", "12": "12px", "14": "14px", "16": "16px", DEFAULT: "1px"}, boxShadow: {sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)", none: "none"}, container: {}, cursor: {auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", "not-allowed": "not-allowed"}, fill: {current: "currentColor"}, flex: {"1": "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none"}, flexGrow: {"0": "0", DEFAULT: "1"}, flexShrink: {"0": "0", DEFAULT: "1"}, fontFamily: {sans: ["Proxima Nova", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"]}, fontWeight: {thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900"}, gridAutoColumns: {auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)"}, gridAutoRows: {auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)"}, gridColumn: {auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1"}, gridColumnEnd: {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", "13": "13", auto: "auto"}, gridColumnStart: {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", "13": "13", auto: "auto"}, gridRow: {auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1"}, gridRowStart: {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", auto: "auto"}, gridRowEnd: {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", auto: "auto"}, transformOrigin: {center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left"}, gridTemplateColumns: {"1": "repeat(1, minmax(0, 1fr))", "2": "repeat(2, minmax(0, 1fr))", "3": "repeat(3, minmax(0, 1fr))", "4": "repeat(4, minmax(0, 1fr))", "5": "repeat(5, minmax(0, 1fr))", "6": "repeat(6, minmax(0, 1fr))", "7": "repeat(7, minmax(0, 1fr))", "8": "repeat(8, minmax(0, 1fr))", "9": "repeat(9, minmax(0, 1fr))", "10": "repeat(10, minmax(0, 1fr))", "11": "repeat(11, minmax(0, 1fr))", "12": "repeat(12, minmax(0, 1fr))", none: "none"}, gridTemplateRows: {"1": "repeat(1, minmax(0, 1fr))", "2": "repeat(2, minmax(0, 1fr))", "3": "repeat(3, minmax(0, 1fr))", "4": "repeat(4, minmax(0, 1fr))", "5": "repeat(5, minmax(0, 1fr))", "6": "repeat(6, minmax(0, 1fr))", none: "none"}, keyframes: {spin: {to: {transform: "rotate(360deg)"}}, ping: {"75%, 100%": {transform: "scale(2)", opacity: "0"}}, pulse: {"50%": {opacity: ".5"}}, bounce: {"0%, 100%": {transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)"}, "50%": {transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)"}}}, letterSpacing: {tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em"}, lineHeight: {"3": ".75rem", "4": "1rem", "5": "1.25rem", "6": "1.5rem", "7": "1.75rem", "8": "2rem", "9": "2.25rem", "10": "2.5rem", none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2"}, listStyleType: {none: "none", disc: "disc", decimal: "decimal"}, minHeight: {"0": "0px", full: "100%", screen: "100vh"}, minWidth: {"0": "0px", full: "100%", min: "min-content", max: "max-content"}, objectPosition: {bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top"}, opacity: {"0": "0", "5": "0.05", "10": "0.1", "20": "0.2", "25": "0.25", "30": "0.3", "40": "0.4", "50": "0.5", "60": "0.6", "70": "0.7", "75": "0.75", "80": "0.8", "90": "0.9", "95": "0.95", "100": "1"}, order: {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12", first: "-9999", last: "9999", none: "0"}, outline: {none: ["2px solid transparent", "2px"], white: ["2px dotted white", "2px"], black: ["2px dotted black", "2px"]}, ringOffsetWidth: {"0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px"}, ringWidth: {"0": "0px", "1": "1px", "2": "2px", "4": "4px", "8": "8px", DEFAULT: "3px"}, rotate: {"0": "0deg", "1": "1deg", "2": "2deg", "3": "3deg", "6": "6deg", "12": "12deg", "45": "45deg", "90": "90deg", "180": "180deg", "-180": "-180deg", "-90": "-90deg", "-45": "-45deg", "-12": "-12deg", "-6": "-6deg", "-3": "-3deg", "-2": "-2deg", "-1": "-1deg"}, scale: {"0": "0", "50": ".5", "75": ".75", "90": ".9", "95": ".95", "100": "1", "105": "1.05", "110": "1.1", "125": "1.25", "150": "1.5"}, skew: {"0": "0deg", "1": "1deg", "2": "2deg", "3": "3deg", "6": "6deg", "12": "12deg", "-12": "-12deg", "-6": "-6deg", "-3": "-3deg", "-2": "-2deg", "-1": "-1deg"}, stroke: {current: "currentColor"}, strokeWidth: {"0": "0", "1": "1", "2": "2"}, transitionDuration: {"75": "75ms", "100": "100ms", "150": "150ms", "200": "200ms", "300": "300ms", "500": "500ms", "700": "700ms", "1000": "1000ms", DEFAULT: "150ms"}, transitionDelay: {"75": "75ms", "100": "100ms", "150": "150ms", "200": "200ms", "300": "300ms", "500": "500ms", "700": "700ms", "1000": "1000ms"}, transitionProperty: {none: "none", all: "all", DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform", colors: "background-color, border-color, color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform", "max-h": "max-height"}, transitionTimingFunction: {DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"}, zIndex: {"0": "0", "10": "10", "20": "20", "30": "30", "40": "40", "50": "50", auto: "auto"}}, variantOrder: ["first", "last", "odd", "even", "visited", "checked", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"], variants: {accessibility: ["responsive", "focus-within", "focus"], alignContent: ["responsive"], alignItems: ["responsive"], alignSelf: ["responsive"], animation: ["responsive"], appearance: ["responsive"], backgroundAttachment: ["responsive"], backgroundClip: ["responsive"], backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "env"], backgroundImage: ["responsive", "hover", "focus", "dark", "env"], backgroundOpacity: ["responsive", "group-hover", "focus-within", "hover", "focus"], backgroundPosition: ["responsive"], backgroundRepeat: ["responsive"], backgroundSize: ["responsive"], borderCollapse: ["responsive"], borderColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "env", "important"], borderOpacity: ["responsive", "group-hover", "focus-within", "hover", "focus"], borderRadius: ["responsive", "important"], borderStyle: ["responsive", "important"], borderWidth: ["responsive", "important"], boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"], boxSizing: ["responsive"], clear: ["responsive"], container: ["responsive"], cursor: ["responsive"], display: ["responsive", "important", "env"], divideColor: ["responsive", "dark"], divideOpacity: ["responsive"], divideStyle: ["responsive"], divideWidth: ["responsive"], fill: ["responsive"], flex: ["responsive"], flexDirection: ["responsive"], flexGrow: ["responsive"], flexShrink: ["responsive"], flexWrap: ["responsive"], float: ["responsive"], fontFamily: ["responsive"], fontSize: ["responsive"], fontSmoothing: ["responsive"], fontStyle: ["responsive"], fontVariantNumeric: ["responsive"], fontWeight: ["responsive"], gap: ["responsive"], gradientColorStops: ["responsive", "dark", "hover", "focus", "env"], gridAutoColumns: ["responsive"], gridAutoFlow: ["responsive"], gridAutoRows: ["responsive"], gridColumn: ["responsive"], gridColumnEnd: ["responsive"], gridColumnStart: ["responsive"], gridRow: ["responsive"], gridRowEnd: ["responsive"], gridRowStart: ["responsive"], gridTemplateColumns: ["responsive"], gridTemplateRows: ["responsive"], height: ["responsive"], inset: ["responsive", "after", "before", "important"], justifyContent: ["responsive"], justifyItems: ["responsive"], justifySelf: ["responsive"], letterSpacing: ["responsive"], lineHeight: ["responsive"], listStylePosition: ["responsive"], listStyleType: ["responsive"], margin: ["responsive"], maxHeight: ["responsive"], maxWidth: ["responsive"], minHeight: ["responsive"], minWidth: ["responsive"], objectFit: ["responsive"], objectPosition: ["responsive"], opacity: ["responsive", "group-hover", "focus-within", "hover", "focus", "disabled"], order: ["responsive"], outline: ["responsive", "focus-within", "focus"], overflow: ["responsive"], overscrollBehavior: ["responsive"], padding: ["responsive", "important"], placeContent: ["responsive"], placeItems: ["responsive"], placeSelf: ["responsive"], placeholderColor: ["responsive", "dark", "focus"], placeholderOpacity: ["responsive", "focus"], pointerEvents: ["responsive", "disabled"], position: ["responsive"], resize: ["responsive"], ringColor: ["responsive", "dark", "focus-within", "focus"], ringOffsetColor: ["responsive", "dark", "focus-within", "focus"], ringOffsetWidth: ["responsive", "focus-within", "focus"], ringOpacity: ["responsive", "focus-within", "focus"], ringWidth: ["responsive", "focus-within", "focus"], rotate: ["responsive", "hover", "focus"], scale: ["responsive", "hover", "focus"], skew: ["responsive", "hover", "focus"], space: ["responsive"], stroke: ["responsive"], strokeWidth: ["responsive"], tableLayout: ["responsive"], textAlign: ["responsive"], textColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "env", "disabled"], textDecoration: ["responsive", "group-hover", "focus-within", "hover", "focus"], textOpacity: ["responsive", "group-hover", "focus-within", "hover", "focus"], textOverflow: ["responsive"], textTransform: ["responsive"], transform: ["responsive"], transformOrigin: ["responsive"], transitionDelay: ["responsive"], transitionDuration: ["responsive"], transitionProperty: ["responsive"], transitionTimingFunction: ["responsive"], translate: ["responsive", "hover", "focus"], userSelect: ["responsive"], verticalAlign: ["responsive"], visibility: ["responsive"], whitespace: ["responsive"], width: ["responsive"], wordBreak: ["responsive"], zIndex: ["responsive", "focus-within", "focus"]}, plugins: [{}, {}, {}, {}, {}, null]}.theme.screens;
      return Object(esm["a"])(`(min-width: ${sizes[sz]})`);
    };
    function roundHalf(num) {
      return Math.round(num * 2) / 2;
    }
    function getReviewCountText(reviewCount) {
      let text = reviewCount > 0 ? `${reviewCount} Review` : "No Reviews";
      if (reviewCount > 1) {
        text += "s";
      }
      return text;
    }
    const StarRating = ({rating, reviewCount, pending, compact, hideText}) => {
      const whole = Math.floor(rating);
      const partial = roundHalf(rating - whole);
      const remainder = 5 - whole - (partial > 0 ? 1 : 0);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("flex", "flex-row", "items-center", {
          "text-salmon": pending,
          "text-orange": rating && !pending,
          "text-grey-disabled": !rating && !pending
        })
      }, whole > 0 && Array(whole).fill("whole").map((item, i) => /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        key: `${item}-${i}`,
        icon: "star_rate"
      })), partial === 1 ? /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "star"
      }) : void 0, partial > 0 && partial < 1 ? /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "star_half"
      }) : void 0, remainder > 0 && Array(Math.floor(5 - whole - partial)).fill("empty").map((item, i) => /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        key: `${item}-${i}`,
        icon: "star_outline"
      })), !hideText && /* @__PURE__ */ react_default.a.createElement("span", {
        className: "text-grey-paragraph text-sm mt-0.5"
      }, "\xA0", compact && reviewCount, !compact && getReviewCountText(reviewCount)));
    };
    StarRating.propTypes = {
      rating: prop_types_default.a.number,
      reviewCount: prop_types_default.a.number,
      pending: prop_types_default.a.bool,
      compact: prop_types_default.a.bool,
      hideText: prop_types_default.a.bool
    };
    StarRating.defaultProps = {
      rating: 0,
      pending: false,
      compact: false,
      hideText: false
    };
    var starRating = StarRating;
    const REVIEWS_PER_PAGE = 3;
    const REVIEWS_CHAR_LIMIT = 1e3;
    const REVIEWS_TITLE_CHAR_LIMIT = 100;
    var constants_loop = {
      REVIEWS_CHAR_LIMIT,
      REVIEWS_PER_PAGE,
      REVIEWS_TITLE_CHAR_LIMIT
    };
    var StarBorder = __webpack_require__(712);
    var StarBorder_default = /* @__PURE__ */ __webpack_require__.n(StarBorder);
    var TextField = __webpack_require__(1369);
    var withStyles = __webpack_require__(10);
    var Rating = __webpack_require__(1378);
    const StyledRating = Object(withStyles["a"])({
      iconFilled: {
        color: "#FD9743"
      }
    })(Rating["a"]);
    var editableStarRating = StyledRating;
    var reviewForm_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const ReviewForm = ({
      onCancel,
      onSubmit,
      version,
      operatingSystem,
      appId,
      appName,
      review
    }) => {
      const [rating, setRating] = Object(react["useState"])((review == null ? void 0 : review.rating) || -1);
      const [description, setDescription] = Object(react["useState"])((review == null ? void 0 : review.description) || "");
      const [headline, setHeadline] = Object(react["useState"])((review == null ? void 0 : review.headline) || "");
      const [reviewId, setReviewId] = Object(react["useState"])(review == null ? void 0 : review.id);
      const createdDate = review == null ? void 0 : review.createdDate;
      const edit = useEditReview(appId, reviewId);
      const add = useAddReview(appId);
      const submit = Object(react["useCallback"])(() => reviewForm_async(void 0, null, function* () {
        try {
          const returnedReview = yield (reviewId ? edit : add)({
            headline,
            description,
            rating,
            version,
            operatingSystem,
            createdDate
          });
          Object(tracking["h"])({
            category: tracking["a"],
            action: reviewId ? "Review edited" : "Review created",
            label: `appId=${appId},appName=${appName}`,
            value: rating
          });
          setReviewId(returnedReview.id);
          onSubmit(returnedReview);
        } catch (e) {
          console.error(`Unable to ${reviewId ? "edit" : "add"} review with id ${reviewId || appId}`, e);
        }
      }), [onSubmit, rating, description, headline, version]);
      const onRatingChange = Object(react["useCallback"])((e, val) => setRating(val), [rating]);
      const onDescriptionChange = Object(react["useCallback"])((e) => setDescription(e.target.value), [description]);
      const onHeadlineChange = Object(react["useCallback"])((e) => setHeadline(e.target.value), [
        headline
      ]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-grey-200 border-2 pl-4 pr-4 rounded-sm shadow"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black font-semibold mr-2"
      }, "Review Loop"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-6 mb-6"
      }, /* @__PURE__ */ react_default.a.createElement(editableStarRating, {
        value: rating,
        name: "rating",
        onChange: onRatingChange,
        emptyIcon: /* @__PURE__ */ react_default.a.createElement(StarBorder_default.a, {
          fontSize: "inherit"
        })
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-3"
      }, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        value: headline,
        id: "review-headline",
        name: "headline",
        variant: "outlined",
        placeholder: "Title",
        label: "Title",
        fullWidth: true,
        onChange: onHeadlineChange,
        size: "small",
        inputProps: {maxLength: REVIEWS_TITLE_CHAR_LIMIT}
      })), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-3"
      }, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        value: description,
        id: "review-description",
        multiline: true,
        name: "description",
        rows: 6,
        variant: "outlined",
        placeholder: "Description",
        label: "Description",
        fullWidth: true,
        onChange: onDescriptionChange,
        inputProps: {maxLength: REVIEWS_CHAR_LIMIT}
      })), /* @__PURE__ */ react_default.a.createElement(Typography["a"], {
        color: "textSecondary"
      }, description.length, " / ", REVIEWS_CHAR_LIMIT)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-end mb-3 space-x-4"
      }, onCancel && /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn bg-grey-400 text-white",
        onClick: onCancel
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary disabled:opacity-50 disabled:pointer-events-none",
        onClick: submit,
        disabled: review && description === review.description && rating === review.rating && headline === review.headline || !rating || !(headline == null ? void 0 : headline.length) || !(description == null ? void 0 : description.length) || description.length > REVIEWS_CHAR_LIMIT
      }, "Submit")));
    };
    ReviewForm.propTypes = {
      onCancel: prop_types_default.a.func,
      onSubmit: prop_types_default.a.func.isRequired,
      version: prop_types_default.a.string.isRequired,
      operatingSystem: prop_types_default.a.string.isRequired,
      appId: prop_types_default.a.string,
      appName: prop_types_default.a.string,
      review: prop_types_default.a.shape({
        id: prop_types_default.a.string.isRequired,
        headline: prop_types_default.a.string.isRequired,
        description: prop_types_default.a.string.isRequired,
        rating: prop_types_default.a.number.isRequired,
        createdDate: prop_types_default.a.number.isRequired
      })
    };
    var reviewForm = ReviewForm;
    const Review = ({review, isMyReview, appId, appName}) => {
      const {id, user, operatingSystem} = review;
      const [version, setVersion] = Object(react["useState"])(review.version);
      const [rating, setRating] = Object(react["useState"])(review.rating);
      const [updatedDate, setUpdatedDate] = Object(react["useState"])(review.updatedDate);
      const [createdDate, setCreatedDate] = Object(react["useState"])(review.createdDate);
      const [headline, setHeadline] = Object(react["useState"])(review.headline);
      const [description, setDescription] = Object(react["useState"])(review.description);
      const [status, setStatus] = Object(react["useState"])(review.status);
      const [editing, setEditing, setNotEditing] = useToggle(false);
      const isMd = useDeviceSize("md");
      const handleEditedReview = (editedReview) => {
        setVersion(editedReview == null ? void 0 : editedReview.version);
        setRating(editedReview == null ? void 0 : editedReview.rating);
        setUpdatedDate(editedReview == null ? void 0 : editedReview.updatedDate);
        setCreatedDate(editedReview == null ? void 0 : editedReview.createdDate);
        setHeadline(editedReview == null ? void 0 : editedReview.headline);
        setDescription(editedReview == null ? void 0 : editedReview.description);
        setStatus(editedReview == null ? void 0 : editedReview.status);
        setNotEditing();
      };
      const formatDate = (date) => moment_default()(date).format(isMd ? "MMMM Do, YYYY" : "MMM. Do, YYYY");
      const formatOS = () => {
        const os = {darwin: "Mac", windows: "Windows"};
        return os[operatingSystem] || operatingSystem;
      };
      const formattedDateMessage = Object(react["useMemo"])(() => createdDate === updatedDate ? `Reviewed on ${formatDate(createdDate)}` : `Last updated on ${formatDate(updatedDate)}`, [createdDate, updatedDate, isMd]);
      const isPending = Object(react["useMemo"])(() => status !== "approved", [status]);
      const formattedOS = formatOS();
      return editing ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-8"
      }, /* @__PURE__ */ react_default.a.createElement(reviewForm, {
        onCancel: setNotEditing,
        onSubmit: handleEditedReview,
        version,
        operatingSystem,
        review: {
          id,
          headline,
          description,
          rating,
          createdDate
        },
        appId,
        appName
      })) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-8"
      }, /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "border-grey-400 mb-4 "
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col w-full ml-4 "
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between items-end mr-4"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-black text-2xl font-semibold"
      }, headline), isMyReview && /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: setEditing
      }, "Edit")), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-start"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black mr-2 text-sm md:text-base mt-0.5 md:mt-0 whitespace-nowrap"
      }, user), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex text-md md:text-lg space-x-1 md:leading-5 flex-grow"
      }, /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating,
        pending: isPending,
        hideText: true
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("mt-0.5 text-sm md:text-base md:leading-5 clamp lines-1", {
          "text-salmon": isPending,
          "text-grey-600": !isPending
        })
      }, isPending ? "Your review is pending approval" : formattedDateMessage))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-600 font-light text-sm md:text-base"
      }, `${formattedOS} - Version ${version}`)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-700 font-light overflow-auto mr-24"
      }, description)));
    };
    Review.propTypes = {
      review: prop_types_default.a.shape({
        id: prop_types_default.a.string.isRequired,
        user: prop_types_default.a.string,
        version: prop_types_default.a.string.isRequired,
        rating: prop_types_default.a.number.isRequired,
        createdDate: prop_types_default.a.number.isRequired,
        updatedDate: prop_types_default.a.number.isRequired,
        headline: prop_types_default.a.string.isRequired,
        description: prop_types_default.a.string.isRequired,
        operatingSystem: prop_types_default.a.string.isRequired,
        status: prop_types_default.a.string.isRequired
      }).isRequired,
      isMyReview: prop_types_default.a.bool,
      appId: prop_types_default.a.string,
      appName: prop_types_default.a.string
    };
    var components_review = Review;
    const Reviews = ({
      reviews,
      reviewsError,
      myReview,
      myReviewError,
      showMyReview,
      appId,
      appName
    }) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-grey-200 border-2 pl-8 pr-8 rounded-sm shadow"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black font-semibold"
      }, "Reviews"), showMyReview && !myReviewError && !Object(isEmpty["a"])(myReview) && /* @__PURE__ */ react_default.a.createElement(components_review, {
        review: myReview,
        isMyReview: true,
        appId,
        appName
      }), !reviewsError && reviews.map((review) => /* @__PURE__ */ react_default.a.createElement(components_review, {
        key: review.id,
        review,
        appId,
        appName
      })));
    };
    Reviews.propTypes = {
      reviews: prop_types_default.a.array.isRequired,
      reviewsError: prop_types_default.a.string,
      myReview: prop_types_default.a.object,
      myReviewError: prop_types_default.a.string,
      showMyReview: prop_types_default.a.bool,
      appId: prop_types_default.a.string,
      appName: prop_types_default.a.string
    };
    Reviews.defaultProps = {
      showMyReview: true
    };
    var components_reviews = Reviews;
    const SPACING = 16;
    const Screenshots = ({screenshots}) => {
      const [active, setActive] = Object(react["useState"])(0);
      const [showControls, setShowControls] = Object(react["useState"])(false);
      const refs = [Object(react["useRef"])(), Object(react["useRef"])(), Object(react["useRef"])(), Object(react["useRef"])(), Object(react["useRef"])()];
      const container = Object(react["useRef"])();
      Object(react["useEffect"])(() => {
        if (refs[0].current && container.current) {
          let width2 = refs.reduce((memo, ref) => ref.current ? memo + ref.current.clientWidth : memo, 0);
          width2 += (screenshots.length - 1) * SPACING;
          if (width2 > container.current.clientWidth) {
            setShowControls(true);
          }
        }
      }, [refs[0].current, container.current]);
      const style = Object(react["useMemo"])(() => {
        let amt = refs.slice(0, active).reduce((memo, ref) => {
          var _a;
          return memo + ((_a = ref.current) == null ? void 0 : _a.clientWidth);
        }, 0);
        amt += active * SPACING;
        return {
          transform: `translateX(-${amt}px)`
        };
      }, [active]);
      const onClick = (cond, amt) => () => cond && setActive((current) => current + amt);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-7"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full overflow-hidden relative",
        ref: container
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row flex-nowrap items-start space-x-4 transition-transform",
        style
      }, screenshots.map((screenshot, i) => /* @__PURE__ */ react_default.a.createElement("img", {
        ref: refs[i],
        key: screenshot,
        alt: `Screenshot ${i + 1}`,
        src: `http:${screenshot}`,
        className: "rounded-sm h-64"
      })))), showControls && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "self-center flex flex-row items-center space-x-2"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "select-none text-center h-9 w-9 text-primary text-3xl rounded-full hover:bg-primary-light bg-white",
        icon: "chevron_left",
        onClick: onClick(active > 0, -1)
      }), screenshots.map((s, i) => /* @__PURE__ */ react_default.a.createElement("div", {
        "aria-label": `Jump to screenshot ${i + 1}`,
        role: "button",
        tabIndex: "-1",
        key: `select-${i}`,
        onClick: () => setActive(i),
        className: classnames_default()("h-3 w-3 rounded-full border border-grey-400", {"bg-grey-400": active === i})
      })), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "select-none text-center h-9 w-9 text-primary text-3xl rounded-full hover:bg-primary-light bg-white",
        icon: "chevron_right",
        onClick: onClick(active < screenshots.length - 1, 1)
      })));
    };
    Screenshots.propTypes = {
      screenshots: prop_types_default.a.arrayOf(prop_types_default.a.string)
    };
    var components_screenshots = Screenshots;
    const Summary = ({
      name,
      organization,
      created,
      reviewCount,
      rating,
      version,
      reviewScroll
    }) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mr-10"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col break-word"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black font-semibold mt-3 mb-0 clamp lines-2"
      }, name), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-disabled text-lg font-semibold leading-5 clamp lines-2"
      }, organization), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-4 text-grey-500 text-sm"
      }, `Version ${version} | Last updated ${created}`), /* @__PURE__ */ react_default.a.createElement("div", {
        role: "button",
        className: "flex items-center text-lg",
        tabIndex: "-1",
        onClick: reviewScroll
      }, /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating,
        reviewCount
      })))));
    };
    Summary.propTypes = {
      name: prop_types_default.a.string.isRequired,
      organization: prop_types_default.a.string.isRequired,
      created: prop_types_default.a.string.isRequired,
      reviewCount: prop_types_default.a.number.isRequired,
      rating: prop_types_default.a.number.isRequired,
      version: prop_types_default.a.string.isRequired,
      reviewScroll: prop_types_default.a.func.isRequired
    };
    var summary = Summary;
    var details_style = __webpack_require__(458);
    var style_default = /* @__PURE__ */ __webpack_require__.n(details_style);
    var details_defProp = Object.defineProperty;
    var details_hasOwnProp = Object.prototype.hasOwnProperty;
    var details_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var details_propIsEnum = Object.prototype.propertyIsEnumerable;
    var details_defNormalProp = (obj, key, value) => key in obj ? details_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var details_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (details_hasOwnProp.call(b, prop2))
          details_defNormalProp(a, prop2, b[prop2]);
      if (details_getOwnPropSymbols)
        for (var prop2 of details_getOwnPropSymbols(b)) {
          if (details_propIsEnum.call(b, prop2))
            details_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var details_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const Details = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const {osName, loopContractVersion} = Object(context_config["e"])();
      const {openChannelProfile: oc, set: setAuthData} = Object(react["useContext"])(AuthContext);
      const [updatePauseButton, , , togglePauseButton] = useToggle(false);
      const {makeToast} = Object(loopLibrary_context["i"])();
      const {appId} = Object(react_router["i"])();
      const [reviews, reviewsError] = useFetchReviews(appId);
      const [myReview, myReviewError, setMyReview] = useFetchMyReview(appId);
      const [loop, loopError] = useFetchLoop(appId);
      const [
        needsUpdate,
        installedLoop,
        availableLoop
      ] = useCheckIfLoopHasApprovedUpdate(loop == null ? void 0 : loop.appId, osName);
      const isValidContractVersion = useCheckIfLoopContractVersionValid(loop == null ? void 0 : loop.appId, loopContractVersion);
      const reviewRef = Object(react["useRef"])();
      const [anchorEl, setAnchorEl] = Object(react["useState"])(null);
      const formattedTime = Object(react["useMemo"])(() => moment_default()((loop == null ? void 0 : loop.lastUpdated) || (loop == null ? void 0 : loop.created)).format("MMMM Do, YYYY"), [loop]);
      const isMyLoop = Object(react["useMemo"])(() => {
        var _a2, _b2;
        return ((_a2 = oc == null ? void 0 : oc.developer) == null ? void 0 : _a2.id) === ((_b2 = loop == null ? void 0 : loop.customData) == null ? void 0 : _b2.authorId);
      }, [oc, loop == null ? void 0 : loop.customData]);
      const displayedVersion = Object(react["useMemo"])(() => {
        var _a2, _b2;
        let result = "N/A";
        const semver = (_a2 = loop == null ? void 0 : loop.customData) == null ? void 0 : _a2.semver;
        if (semver instanceof Object) {
          const os = osName === "win32" ? "windows" : "mac";
          const supports = ((_b2 = loop == null ? void 0 : loop.customData) == null ? void 0 : _b2.supports) || {};
          if (supports[os] && semver[os]) {
            result = semver[os];
          }
        } else if (semver) {
          result = semver;
        }
        return result;
      }, [loop]);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      function handleReviewScroll() {
        reviewRef.current.scrollIntoView({behavior: "smooth"});
      }
      Object(react["useEffect"])(() => {
        if (loop) {
          Object(utils_fetch["a"])("/library/metric", "POST", {
            appId,
            field: "views",
            date: Date.now()
          }).catch((e) => console.info("Could not track views:", e));
          Object(tracking["h"])({
            category: tracking["a"],
            action: "Detail page viewed",
            label: `appId=${appId},appName=${loop.name}`
          });
        }
      }, [appId, loop]);
      const updateOCProfile = () => details_async(void 0, null, function* () {
        const {profile} = yield Object(utils_fetch["a"])(`/auth/getOrCreateUserAccount`);
        setAuthData("openChannelProfile")(details_assign({}, profile));
      });
      const handleAddAllowLoop = () => {
        handleClose();
        Object(utils_fetch["a"])(`/library/org/allowLoop/${appId}`, "POST").then(updateOCProfile).catch((e) => console.info("Could not set loop to be allowed for org", e));
      };
      const handleRemoveAllowLoop = () => {
        handleClose();
        Object(utils_fetch["a"])(`/library/org/allowLoop/${appId}`, "DELETE").then(updateOCProfile).catch((e) => console.info("Could not set loop to be allowed for org", e));
      };
      if (loopError) {
        if (loopError.status === 404) {
          makeToast("This loop no longer exists in our library. Please remove it.", "warn", 15);
          return /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
            to: "/loops"
          });
        }
        makeToast("Failed to load the details page for this loop.", "error", 15);
        return /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
          to: "/"
        });
      }
      if (!loop || !reviews || !myReview) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mb-6",
        style: {minHeight: "164px"}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-6 mr-6"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: (_a = loop == null ? void 0 : loop.customData) == null ? void 0 : _a.loopLibraryLogo,
        size: "large",
        name: loop == null ? void 0 : loop.name
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-center items-center w-40 space-x-2"
      }, !isValidContractVersion && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "invisible"
      }, /* @__PURE__ */ react_default.a.createElement(addButtonInfo, null)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mr-1 ml-1"
      }, /* @__PURE__ */ react_default.a.createElement(components_loopAddButton, {
        appId: loop.appId,
        needsUpdate,
        installedLoop,
        availableLoop,
        isValidContractVersion
      })), !isValidContractVersion && /* @__PURE__ */ react_default.a.createElement(addButtonInfo, {
        action: needsUpdate ? "update" : "add"
      }), oc.permissions.canEditOrg && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        size: "small",
        onClick: handleClick
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "more_vert",
        className: "text-xl cursor-pointer"
      })), /* @__PURE__ */ react_default.a.createElement(Menu["a"], {
        anchorEl,
        keepMounted: true,
        open: !!anchorEl,
        onClose: handleClose
      }, !((_c = (_b = oc == null ? void 0 : oc.org) == null ? void 0 : _b.customData) == null ? void 0 : _c.allowedLoops) || !((_e = (_d = oc == null ? void 0 : oc.org) == null ? void 0 : _d.customData) == null ? void 0 : _e.allowedLoops[appId]) ? /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        onClick: handleAddAllowLoop
      }, /* @__PURE__ */ react_default.a.createElement(CheckCircleOutline_default.a, {
        fontSize: "small",
        className: "mr-2"
      }), /* @__PURE__ */ react_default.a.createElement(Typography["a"], {
        variant: "inherit"
      }, "Allow for my organization")) : /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        onClick: handleRemoveAllowLoop
      }, /* @__PURE__ */ react_default.a.createElement(HighlightOff_default.a, {
        fontSize: "small",
        className: "mr-2"
      }), /* @__PURE__ */ react_default.a.createElement(Typography["a"], {
        variant: "inherit"
      }, "Disallow for my organization")))))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "ml-6 flex flex-col flex-grow justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between"
      }, /* @__PURE__ */ react_default.a.createElement(summary, {
        name: loop == null ? void 0 : loop.name,
        description: (_f = loop == null ? void 0 : loop.customData) == null ? void 0 : _f.description,
        organization: ((_g = loop == null ? void 0 : loop.customData) == null ? void 0 : _g.onBehalfOfName) || ((_h = loop == null ? void 0 : loop.customData) == null ? void 0 : _h.organization),
        created: formattedTime,
        reviewCount: loop == null ? void 0 : loop.reviewCount,
        rating: loop == null ? void 0 : loop.rating,
        reviewScroll: handleReviewScroll,
        version: displayedVersion
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-between items-end"
      }, /* @__PURE__ */ react_default.a.createElement(morePopupMenu, {
        loop,
        isDetailsPage: true,
        togglePauseButton
      }), /* @__PURE__ */ react_default.a.createElement(loopPauseToggle, {
        appId: loop.appId,
        name: loop.name,
        updatePauseButton
      }))), ((_j = (_i = loop == null ? void 0 : loop.customData) == null ? void 0 : _i.loopScreenshots) == null ? void 0 : _j.length) > 0 && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "mt-7 mb-7 border-grey-400"
      }), /* @__PURE__ */ react_default.a.createElement(components_screenshots, {
        screenshots: (_k = loop == null ? void 0 : loop.customData) == null ? void 0 : _k.loopScreenshots
      })), /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "mt-7 mb-7 border-grey-400"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(style_default.a.markdown, "mt-1 flex text-base")
      }, /* @__PURE__ */ react_default.a.createElement(markdown["a"], {
        source: (_l = loop == null ? void 0 : loop.customData) == null ? void 0 : _l.documentation
      })))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-14",
        ref: reviewRef
      }, !isMyLoop && !myReviewError && Object(isEmpty["a"])(myReview) && /* @__PURE__ */ react_default.a.createElement(reviewForm, {
        onSubmit: setMyReview,
        version: displayedVersion,
        operatingSystem: osName === "win32" ? "windows" : "darwin",
        appId,
        appName: loop == null ? void 0 : loop.name
      }), (!Object(isEmpty["a"])(reviews) || !Object(isEmpty["a"])(myReview)) && /* @__PURE__ */ react_default.a.createElement(components_reviews, {
        reviews,
        reviewsError,
        myReview,
        myReviewError,
        appId,
        appName: loop == null ? void 0 : loop.name
      })));
    };
    var details = Details;
    const ConditionalLink = ({children, to, condition, trackSearch}) => !!condition && to ? /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
      to,
      onClick: trackSearch
    }, children) : /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, children);
    ConditionalLink.propTypes = {
      children: prop_types_default.a.node.isRequired,
      to: prop_types_default.a.string.isRequired,
      condition: prop_types_default.a.bool.isRequired,
      trackSearch: prop_types_default.a.func.isRequired
    };
    var conditionalLink = ConditionalLink;
    const RemoveLoopButton = ({appId, appName, message}) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const getInstalled = useFetchInstalled();
      const handleDialogClick = (event) => {
        event.stopPropagation();
      };
      const [
        removeLoopDialogOpen,
        openRemoveLoopDialog,
        closeRemoveLoopDialog
      ] = useToggle(false);
      const handleRemoveLoop = () => {
        Object(messaging["V"])(appId).then(() => {
          getInstalled();
          makeToast("This loop has been removed", "success");
          Object(tracking["h"])({
            category: tracking["a"],
            action: "Loop removed",
            label: `appId=${appId},appName=${appName}`
          });
        }).catch((error) => {
          console.info("error uninstalling", error);
          makeToast("Error uninstalling loop", "error");
        }).finally(() => {
          getInstalled();
          closeRemoveLoopDialog();
        });
      };
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn text-primary bg-white",
        onClick: openRemoveLoopDialog
      }, "Remove"), /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        onClick: handleDialogClick,
        open: removeLoopDialogOpen,
        onClose: closeRemoveLoopDialog,
        fullWidth: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-3 py-2 bg-primary flex justify-between items-center"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-2xl text-white pl-2 font-semibold"
      }, "Remove Loop?"), /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: closeRemoveLoopDialog,
        tooltip: "Close",
        color: "transparent",
        className: "py-3"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "close",
        className: "text-white"
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-8 mb-16 ml-6 text-grey-paragraph"
      }, /* @__PURE__ */ react_default.a.createElement("p", null, `${message} Remove from your workstation?`)), /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "mb-4 text-grey-400"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between mb-4 px-6"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary-outline py-1 px-5 rounded-xs text-sm",
        onClick: closeRemoveLoopDialog
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary py-1 px-5 rounded-xs text-sm border-primary border",
        onClick: handleRemoveLoop
      }, "Remove")))));
    };
    RemoveLoopButton.propTypes = {
      appId: prop_types_default.a.string,
      appName: prop_types_default.a.string,
      message: prop_types_default.a.string
    };
    RemoveLoopButton.defaultProps = {
      message: "This Loop is temporarily unavailable."
    };
    var removeLoopButton = RemoveLoopButton;
    var loopCard_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const disabledStates = ["rejected", "suspended"];
    const removedMessage = "This Loop is no longer available.";
    const disabledMessage = "This Loop is temporarily unavailable.";
    const card = {minHeight: "240px"};
    const LoopCard = ({loop, isLocal, isUnavailable, inSearch}) => {
      var _a, _b, _c, _d;
      const {makeToast} = Object(loopLibrary_context["i"])();
      const {osName, loopContractVersion} = Object(context_config["e"])();
      const [isDisabled, setIsDisabled] = Object(react["useState"])(false);
      const [isProcessing, setIsProcessing] = Object(react["useState"])(false);
      const unavailableMessage = Object(react["useMemo"])(() => isDisabled ? disabledMessage : removedMessage, [isDisabled]);
      const [
        needsUpdate,
        installedLoop,
        availableLoop
      ] = useCheckIfLoopHasApprovedUpdate(loop == null ? void 0 : loop.appId, osName);
      const isValidContractVersion = useCheckIfLoopContractVersionValid(loop == null ? void 0 : loop.appId, loopContractVersion);
      useAsyncEffect(() => loopCard_async(void 0, null, function* () {
        if (isUnavailable && loop) {
          try {
            setIsProcessing(true);
            const {
              parent: {
                status: {value: parentStatus}
              },
              status: {value: status}
            } = yield Object(utils_fetch["a"])(`/library/loop/${loop.appId}/version/${loop.version}`);
            setIsDisabled([status, parentStatus].some((val) => disabledStates.includes(val)));
            setIsProcessing(false);
          } catch (e) {
            if (e.status === 404) {
              console.info(`%cappId:${loop.appId}|name:${loop.name}%c, No longer exists in the library...`, "color: red", "color: white");
            } else {
              console.error("Failed to fetch loop status", e);
              makeToast("Failed to fetch loop status", "error");
            }
            setIsProcessing(false);
          }
        }
      }), [isUnavailable, loop]);
      const handleSearchResultClicked = () => {
        if (loop && inSearch) {
          Object(tracking["h"])({
            category: tracking["a"],
            action: "Search result clicked",
            label: `appId=${loop.appId},appName=${loop.name}`
          });
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-full xs:w-full md:w-2/3 lg:w-full shadow hover:shadow-md rounded-md",
        style: card
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "rounded-t-md border border-grey-250"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-between"
      }, /* @__PURE__ */ react_default.a.createElement(conditionalLink, {
        to: isLocal ? `/developer/local-loop/loop/${loop.appId}` : `/loop/${loop.appId}`,
        condition: !isUnavailable,
        trackSearch: handleSearchResultClicked
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex h-48 p-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center justify-between"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: (loop == null ? void 0 : loop.loopLibraryLogo) || ((_a = loop == null ? void 0 : loop.customData) == null ? void 0 : _a.loopLibraryLogo),
        name: loop == null ? void 0 : loop.name
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex"
      }, !isLocal && !isUnavailable && /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating: loop == null ? void 0 : loop.rating,
        reviewCount: loop == null ? void 0 : loop.reviewCount,
        compact: true
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col ml-4 break-word"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black text-2xl leading-none mt-2 max-h-16 clamp lines-2"
      }, loop == null ? void 0 : loop.name), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-disabled text-sm leading-none mt-2 clamp lines-2"
      }, isLocal ? "Local" : ((_b = loop == null ? void 0 : loop.customData) == null ? void 0 : _b.onBehalfOfName) || (loop == null ? void 0 : loop.organization) || ((_c = loop == null ? void 0 : loop.customData) == null ? void 0 : _c.organization)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black text-sm leading-tight mt-2 clamp lines-3"
      }, (loop == null ? void 0 : loop.description) || ((_d = loop == null ? void 0 : loop.customData) == null ? void 0 : _d.description))))))), isUnavailable ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "p-4 h-16 bg-salmon rounded-b-md text-white flex"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-center w-32"
      }, isProcessing ? /* @__PURE__ */ react_default.a.createElement(spinner["a"], {
        color: "white"
      }) : /* @__PURE__ */ react_default.a.createElement(removeLoopButton, {
        appId: loop == null ? void 0 : loop.appId,
        appName: loop == null ? void 0 : loop.appName,
        message: unavailableMessage
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center ml-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", null, !isProcessing && unavailableMessage))) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "p-4 h-16 border-b border-r border-l rounded-b-md border-grey-250 flex items-center justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-center w-32"
      }, !isValidContractVersion && !isLocal && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "invisible"
      }, /* @__PURE__ */ react_default.a.createElement(addButtonInfo, null)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mr-1 ml-1"
      }, /* @__PURE__ */ react_default.a.createElement(components_loopAddButton, {
        appId: loop.appId,
        needsUpdate,
        installedLoop,
        availableLoop,
        isValidContractVersion
      })), !isValidContractVersion && !isLocal && /* @__PURE__ */ react_default.a.createElement(addButtonInfo, {
        action: needsUpdate ? "update" : "add"
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center"
      }, /* @__PURE__ */ react_default.a.createElement(loopPauseToggle, {
        appId: loop.appId,
        name: loop.name
      }))));
    };
    LoopCard.propTypes = {
      loop: prop_types_default.a.object,
      isLocal: prop_types_default.a.bool,
      isUnavailable: prop_types_default.a.bool,
      inSearch: prop_types_default.a.bool
    };
    var loopCard = LoopCard;
    const LoopGrid = ({children}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "grid gap-8 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      }, children);
    };
    LoopGrid.propTypes = {
      children: childrenSchema
    };
    var loopGrid = LoopGrid;
    var mergeDeepRight = __webpack_require__(1366);
    var useMergeState_defProp = Object.defineProperty;
    var useMergeState_hasOwnProp = Object.prototype.hasOwnProperty;
    var useMergeState_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var useMergeState_propIsEnum = Object.prototype.propertyIsEnumerable;
    var useMergeState_defNormalProp = (obj, key, value) => key in obj ? useMergeState_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var useMergeState_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (useMergeState_hasOwnProp.call(b, prop2))
          useMergeState_defNormalProp(a, prop2, b[prop2]);
      if (useMergeState_getOwnPropSymbols)
        for (var prop2 of useMergeState_getOwnPropSymbols(b)) {
          if (useMergeState_propIsEnum.call(b, prop2))
            useMergeState_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var useMergeState = (initial = {}) => {
      const [state, setState] = Object(react["useState"])(initial);
      const mergeState = Object(react["useCallback"])((newState) => {
        return setState((currentState) => useMergeState_assign({}, Object(mergeDeepRight["a"])(currentState, newState)));
      }, [state]);
      return [state, mergeState, setState];
    };
    const MyLoops = () => {
      const context = Object(loopLibrary_context["i"])();
      const {installed} = context;
      const [approvedObj, mergeApprovedObj, setApprovedObj] = useMergeState({});
      const [
        unavailableObj,
        mergeUnavailableObj,
        setUnavailableObj
      ] = useMergeState({});
      const approved = Object(react["useMemo"])(() => Object.values(approvedObj), [approvedObj]);
      const unavailable = Object(react["useMemo"])(() => Object.values(unavailableObj), [
        unavailableObj
      ]);
      Object(react["useEffect"])(() => {
        setApprovedObj({});
        setUnavailableObj({});
        installed == null ? void 0 : installed.forEach((loop) => Object(messaging["g"])(loop.appId).then(({libraryApproved}) => {
          if (libraryApproved) {
            mergeApprovedObj({[loop.appId]: loop});
          } else {
            mergeUnavailableObj({[loop.appId]: loop});
          }
        }));
      }, [installed]);
      Object(react["useEffect"])(() => {
        Object(tracking["h"])({
          category: tracking["a"],
          action: "Added loops page viewed"
        });
      }, []);
      if (!installed) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      if (Object.keys(approvedObj).length > 0 || Object.keys(unavailableObj).length > 0) {
        return /* @__PURE__ */ react_default.a.createElement("div", null, Object.keys(approvedObj).length > 0 && /* @__PURE__ */ react_default.a.createElement("div", {
          className: "mb-10"
        }, /* @__PURE__ */ react_default.a.createElement("h1", {
          className: "text-black font-semibold mt-2"
        }, "My Loops"), /* @__PURE__ */ react_default.a.createElement(loopGrid, null, Object(utils["g"])((list) => {
          return list.map((loop) => /* @__PURE__ */ react_default.a.createElement(loopCard, {
            key: loop.appId,
            loop
          }));
        })(approved))), Object.keys(unavailableObj).length > 0 && /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("h1", {
          className: "text-black font-semibold"
        }, "Unavailable"), /* @__PURE__ */ react_default.a.createElement(loopGrid, null, Object(utils["g"])((list) => {
          return list.map((loop) => /* @__PURE__ */ react_default.a.createElement(loopCard, {
            key: loop.appId,
            loop,
            isUnavailable: true
          }));
        })(unavailable))));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-full flex flex-col justify-center items-center"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black text-4xl font-semibold"
      }, "It looks like you don't have any Loops Installed"), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "mb-16 text-grey-disabled"
      }, "Let's head back to the", " ", /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        className: "text-primary",
        to: "/browse"
      }, "Browse Loops"), " ", "page and add some Loops to get started"));
    };
    var content_installed = MyLoops;
    const TERMS_OF_SERVICE = "https://s3.amazonaws.com/olive-public-web-assets/olivehelps/secure/terms-of-service.html";
    var termsOfService = {
      TERMS_OF_SERVICE
    };
    var becomeAuthorButton_defProp = Object.defineProperty;
    var becomeAuthorButton_hasOwnProp = Object.prototype.hasOwnProperty;
    var becomeAuthorButton_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var becomeAuthorButton_propIsEnum = Object.prototype.propertyIsEnumerable;
    var becomeAuthorButton_defNormalProp = (obj, key, value) => key in obj ? becomeAuthorButton_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var becomeAuthorButton_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (becomeAuthorButton_hasOwnProp.call(b, prop2))
          becomeAuthorButton_defNormalProp(a, prop2, b[prop2]);
      if (becomeAuthorButton_getOwnPropSymbols)
        for (var prop2 of becomeAuthorButton_getOwnPropSymbols(b)) {
          if (becomeAuthorButton_propIsEnum.call(b, prop2))
            becomeAuthorButton_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var becomeAuthorButton_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const BecomeAuthorButton = () => {
      const {set: setAuthData} = Object(react["useContext"])(AuthContext);
      const {makeToast} = Object(loopLibrary_context["i"])();
      const handleDialogClick = (event) => {
        event.stopPropagation();
      };
      const [
        isBecomeAuthorModalOpen,
        openBecomeAuthorModal,
        closeBecomeAuthorModal
      ] = useToggle(false);
      const handleBecomeAuthor = () => becomeAuthorButton_async(void 0, null, function* () {
        try {
          yield Object(utils_fetch["a"])(`/auth/createDeveloperAccount`, "POST");
          const response = yield Object(utils_fetch["a"])(`/auth/getOrCreateUserAccount`);
          const {profile, isDeveloper} = response;
          setAuthData("openChannelProfile")(becomeAuthorButton_assign({}, profile));
          setAuthData("isDeveloper")(isDeveloper);
          Object(tracking["h"])({
            category: tracking["a"],
            action: "User became developer"
          });
          makeToast("You are now a Loop Author.", "success");
        } catch (e) {
          console.info(e);
          makeToast("Failed to become a Loop Author.", "error");
        }
        return closeBecomeAuthorModal();
      });
      const handleEULA = Object(react["useCallback"])(() => Object(utils["e"])(TERMS_OF_SERVICE), []);
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: openBecomeAuthorModal
      }, "Make me a Loop Author!"), /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        onClick: handleDialogClick,
        open: isBecomeAuthorModalOpen,
        onClose: closeBecomeAuthorModal,
        maxWidth: "md"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-3 py-2 bg-primary flex justify-between items-center"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-2xl text-white pl-2 font-semibold"
      }, "Become a Loop Author?"), /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: closeBecomeAuthorModal,
        tooltip: "Close",
        color: "transparent",
        className: "py-3"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "close",
        className: "text-white"
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "my-8 mx-6 text-grey-paragraph space-y-6"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleEULA,
        className: "text-primary hover:underline",
        title: "Open the License Agreement in an external browser"
      }, "License Agreement", /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "text-xs",
        icon: "open_in_new"
      })), /* @__PURE__ */ react_default.a.createElement("p", null, "By clicking confirm, you are agreeing to the Terms and Conditions in the License Agreement.")), /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "mb-4 text-grey-400"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between mb-4 px-6"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary-outline py-1 px-5 rounded-xs text-sm",
        onClick: closeBecomeAuthorModal
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary py-1 px-5 rounded-xs text-sm border-primary border",
        onClick: handleBecomeAuthor
      }, "Confirm")))));
    };
    var becomeAuthorButton = BecomeAuthorButton;
    const BecomeAuthor = () => {
      const {isDeveloper} = Object(react["useContext"])(AuthContext);
      const handleLearnMore = Object(react["useCallback"])(() => Object(utils["e"])("https://oliveai.com/olive-helps/developers/"), []);
      return isDeveloper ? /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
        to: "/developer/authored"
      }) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "xs:w-auto sm:w-4/5 md:w-full flex flex-col items-left"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black h1 font-semibold text-5xl"
      }, "Join the Olive Helps developer program"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "space-y-10"
      }, /* @__PURE__ */ react_default.a.createElement("p", {
        className: "text-xl text-grey-paragraph sm:w-4/5 md:w-2/3 lg:w-3/5 xl:w-1/2"
      }, "Olive Helps developers get their solutions in front of the nation\u2019s leading healthcare users. Increase your product awareness in a new, fast channel and gain access to the largest health systems by developing on Olive Helps."), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(becomeAuthorButton, null)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5"
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className: "text-lg text-grey-paragraph"
      }, "Want to learn more about building Loops on the Olive Helps platform? Check out our", " ", /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleLearnMore,
        className: "text-primary hover:underline",
        title: "Open the Loop Development Kit website in an external browser"
      }, "developer page. ", /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "text-xs",
        icon: "open_in_new"
      }))))));
    };
    var becomeAuthor = BecomeAuthor;
    var AddBox = __webpack_require__(715);
    var AddBox_default = /* @__PURE__ */ __webpack_require__.n(AddBox);
    const Submit = () => /* @__PURE__ */ react_default.a.createElement("div", {
      className: "w-44 my-2"
    }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
      to: "/developer/local-loop/submit"
    }, /* @__PURE__ */ react_default.a.createElement("div", {
      className: "flex items-center"
    }, /* @__PURE__ */ react_default.a.createElement(AddBox_default.a, {
      className: "mr-1"
    }), /* @__PURE__ */ react_default.a.createElement("span", null, "Install Local Loop"))));
    const LocallyInstalledLoops = () => {
      const context = Object(loopLibrary_context["i"])();
      const {localInstalled} = context;
      Object(react["useEffect"])(() => {
        Object(tracking["h"])({
          category: tracking["a"],
          action: "Locally installed loops page viewed"
        });
      }, []);
      const handleLDK = () => Object(utils["e"])("https://olive.page.link/ldk");
      const loops = Object(utils["g"])((list) => list.map((loop) => /* @__PURE__ */ react_default.a.createElement(loopCard, {
        key: loop.appId,
        loop,
        isLocal: true
      })))(localInstalled);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col h-full"
      }, (localInstalled == null ? void 0 : localInstalled.length) > 0 ? /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between items-center"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black font-semibold"
      }, "My Locally Installed Loops"), /* @__PURE__ */ react_default.a.createElement(Submit, null)), /* @__PURE__ */ react_default.a.createElement(loopGrid, null, loops)) : /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-end items-center"
      }, /* @__PURE__ */ react_default.a.createElement(Submit, null)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex-grow flex flex-col justify-center items-center"
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className: "my-3 text-black text-4xl font-semibold"
      }, "It looks like you don't have any Local Loops Installed"), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "mb-16 text-grey-disabled"
      }, "Find out how to develop and install Loops locally through the", " ", /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleLDK,
        className: "text-primary hover:underline",
        title: "Open the Loop Development Kit website in an external browser"
      }, "Loop Development Kit (LDK)", " ", /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "text-xs",
        icon: "open_in_new"
      }), ".")))));
    };
    var local_loop_list = LocallyInstalledLoops;
    var formik_esm = __webpack_require__(40);
    var es = __webpack_require__(31);
    const WEBPACK_METADATA_REGEX = RegExp("---BEGIN-LOOP-JSON-BASE64---\\n(.*)\\n---END-LOOP-JSON-BASE64---");
    const EXECUTABLE_NAME = "loop.js";
    const LATEST_SPECIFICATION = "2";
    const getWebpackMetadata = (fileBuffer) => {
      const fileContents = fileBuffer.toString();
      const result = WEBPACK_METADATA_REGEX.exec(fileContents);
      if (result && result.length > 1) {
        const decryptedData = atob(result[1]);
        return JSON.parse(decryptedData);
      }
      return {};
    };
    var useFieldState = (initialState = "") => {
      const [state, setState] = Object(react["useState"])(initialState);
      return [
        state,
        Object(react["useCallback"])((e) => setState(e.target.value), [state]),
        setState
      ];
    };
    var react_markdown = __webpack_require__(102);
    var react_markdown_default = /* @__PURE__ */ __webpack_require__.n(react_markdown);
    var remark_gfm = __webpack_require__(103);
    var remark_gfm_default = /* @__PURE__ */ __webpack_require__.n(remark_gfm);
    var views_link = __webpack_require__(74);
    var markdown_styles = __webpack_require__(303);
    var markdown_styles_default = /* @__PURE__ */ __webpack_require__.n(markdown_styles);
    const Markdown = ({highlightColor, linkStyle, source}) => {
      const renderers = Object(react["useMemo"])(() => ({
        link: ({children, href}) => {
          return /* @__PURE__ */ react_default.a.createElement(views_link["a"], {
            content: {data: {url: href}},
            highlightColor,
            style: linkStyle
          }, children);
        },
        linkReference: ({children}) => {
          return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, "[", children, "]");
        },
        h1: (props) => {
          const {children, level} = props;
          return /* @__PURE__ */ react_default.a.createElement("span", {
            className: Object(utils["b"])([markdown_styles["heading"], markdown_styles_default.a[`heading-${level}`]])
          }, children);
        },
        h2: (props) => {
          const {children, level} = props;
          return /* @__PURE__ */ react_default.a.createElement("span", {
            className: Object(utils["b"])([markdown_styles["heading"], markdown_styles_default.a[`heading-${level}`]])
          }, children);
        },
        h3: (props) => {
          const {children, level} = props;
          return /* @__PURE__ */ react_default.a.createElement("span", {
            className: Object(utils["b"])([markdown_styles["heading"], markdown_styles_default.a[`heading-${level}`]])
          }, children);
        }
      }), [highlightColor]);
      return /* @__PURE__ */ react_default.a.createElement(react_markdown_default.a, {
        remarkPlugins: [remark_gfm_default.a],
        className: markdown_styles["container"],
        components: renderers
      }, source);
    };
    Markdown.propTypes = {
      highlightColor: prop_types_default.a.string,
      linkStyle: prop_types_default.a.object,
      source: prop_types_default.a.string
    };
    Markdown.defaultProps = {
      highlightColor: "",
      linkStyle: {},
      source: ""
    };
    var loopLibrary_markdown = Markdown;
    const mdStyle = {maxHeight: "400px"};
    const FakeDetails = ({documentation, screenshots, screenshotsPending}) => {
      const firstRow = Object(react["useMemo"])(() => {
        if (screenshots) {
          return screenshots.length >= 3 ? screenshots.slice(0, 3) : screenshots.concat(Array(3 - ((screenshots == null ? void 0 : screenshots.length) || 0)).fill(null));
        }
        return null;
      }, [screenshots]);
      const secondRow = Object(react["useMemo"])(() => {
        if (screenshots) {
          return screenshots.length <= 3 ? [null, null] : screenshots.slice(3).concat(Array(5 - ((screenshots == null ? void 0 : screenshots.length) || 0)).fill(null));
        }
        return null;
      }, [screenshots]);
      const renderDocumentation = () => {
        if (documentation) {
          return /* @__PURE__ */ react_default.a.createElement("div", {
            style: mdStyle,
            className: "overflow-scroll"
          }, /* @__PURE__ */ react_default.a.createElement(loopLibrary_markdown, {
            source: documentation
          }));
        }
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "text-primary"
        }, "Your documentation will show here.");
      };
      const renderScreenshot = (screenshot, i) => screenshot ? /* @__PURE__ */ react_default.a.createElement("img", {
        className: "w-24 h-24",
        alt: `Screenshot ${i}`,
        src: `http:${screenshot}`,
        key: `Screenshot ${i}`
      }) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "bg-grey-400 w-24 h-24 flex justify-center items-center",
        key: `fake-screenshot-${i}`
      }, screenshotsPending && i === screenshots.length && /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-2 w-full"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-6 p-6 bg-white text-grey-750 shadow-lg"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-paragraph-grey text-sm"
      }, renderDocumentation()), typeof screenshots !== "undefined" && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row space-x-4"
      }, firstRow.map(renderScreenshot)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row space-x-4"
      }, secondRow.map((screenshot, i) => renderScreenshot(screenshot, i + 3))))));
    };
    FakeDetails.propTypes = {
      documentation: prop_types_default.a.string,
      screenshots: prop_types_default.a.arrayOf(prop_types_default.a.string),
      screenshotsPending: prop_types_default.a.bool
    };
    var fakeDetails = FakeDetails;
    var olive_logo = __webpack_require__.p + "images/fbd37f38aea8a847b503dd4a75a12007.png";
    const FakeCard = ({logo, logoPending, name, orgName, description}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full shadow rounded-md bg-white shadow-lg"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "rounded-t-md border border-grey-250"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex h-48 p-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center justify-between"
      }, logoPending ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-32 h-32 flex justify-center items-center"
      }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null)) : /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: logo ? `http:${logo}` : olive_logo,
        name: "Demo Card"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex"
      }, /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating: 5,
        reviewCount: 10,
        compact: true
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col ml-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black text-2xl leading-none mt-2 max-h-16 clamp lines-2 break-word"
      }, name), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-disabled text-sm leading-none mt-2 clamp lines-2"
      }, orgName), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black text-sm leading-tight mt-2 clamp lines-3 break-word"
      }, description)))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "p-4 h-16 border-b border-r border-l rounded-b-md border-grey-250 flex items-center justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-center w-full text-grey-paragraph"
      }, "Demo")));
    };
    FakeCard.propTypes = {
      logo: prop_types_default.a.string,
      logoPending: prop_types_default.a.bool,
      name: prop_types_default.a.string,
      orgName: prop_types_default.a.string,
      description: prop_types_default.a.string
    };
    var fakeCard = FakeCard;
    const defaultTitle = "Your Loop Whisper";
    const defaultText = `This is a sample whisper, the common point of interaction for your loop's users. The color strip at the top helps users distinguish whispers from your loop from those of other loops, reinforces your brand, and unifies all whispers from your loop so users know where they're coming from.`;
    const defaultOrgLogoUrl = "http://us1-cdn.openchannel.io/5f7f5aced3bdee259f4b1dff/public/5fbc2d08239e941df61458cd.png";
    const FakeWhisper = ({logo, logoPending, text, title, name, colorStrip}) => {
      const {openChannelProfile} = useAuthContext();
      const {developer} = openChannelProfile || {};
      const orgLogo = Object(react["useMemo"])(() => {
        var _a, _b;
        return (_b = (_a = developer == null ? void 0 : developer.org) == null ? void 0 : _a.customData) == null ? void 0 : _b.organizationLibraryLogo;
      }, [developer]);
      const renderLogo = () => {
        if (logoPending) {
          return /* @__PURE__ */ react_default.a.createElement(spinner["a"], null);
        }
        if (logo) {
          return /* @__PURE__ */ react_default.a.createElement("img", {
            className: "w-5 h-5 mr-2",
            alt: "Your Loop Logo",
            src: `http:${logo}`
          });
        }
        return /* @__PURE__ */ react_default.a.createElement(icon_icon, {
          icon: "olive-o",
          className: "text-primary w-2 mr-2"
        });
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "max-w-sm"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-2.5 rounded-t-12",
        style: {backgroundColor: colorStrip}
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "bg-white border border-t-0 border-grey-400 rounded-b-12 shadow-lg"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-b border-grey-400"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row items-center py-2 px-4"
      }, renderLogo(), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "font-bold"
      }, title || defaultTitle))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-b border-grey-400 font-light leading-4 text-xs p-4"
      }, text || defaultText), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-4 py-2"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row justify-between items-center"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center space-x-2"
      }, /* @__PURE__ */ react_default.a.createElement("img", {
        className: "max-w-8 max-h-6",
        alt: "Your Organization Logo",
        src: orgLogo ? `http:${orgLogo}` : defaultOrgLogoUrl
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-2xs"
      }, name)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-2xs"
      }, "just\xA0now")))));
    };
    FakeWhisper.propTypes = {
      logo: prop_types_default.a.string,
      logoPending: prop_types_default.a.bool,
      text: prop_types_default.a.string,
      name: prop_types_default.a.string,
      title: prop_types_default.a.string,
      colorStrip: prop_types_default.a.string
    };
    var fakeWhisper = FakeWhisper;
    var useSurrogateFocus = (surrogate, actual, event = "focus") => {
      Object(react["useEffect"])(() => {
        if (surrogate == null ? void 0 : surrogate.current) {
          const passFocus = () => {
            var _a;
            (_a = actual == null ? void 0 : actual.current) == null ? void 0 : _a.focus();
          };
          surrogate.current.addEventListener(event, passFocus);
          return () => surrogate.current.removeEventListener(event, passFocus);
        }
        return function noop() {
        };
      }, [surrogate, actual]);
    };
    var dist = __webpack_require__(721);
    var dist_default = /* @__PURE__ */ __webpack_require__.n(dist);
    var input_defProp = Object.defineProperty;
    var input_hasOwnProp = Object.prototype.hasOwnProperty;
    var input_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var input_propIsEnum = Object.prototype.propertyIsEnumerable;
    var input_defNormalProp = (obj, key, value) => key in obj ? input_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var input_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (input_hasOwnProp.call(b, prop2))
          input_defNormalProp(a, prop2, b[prop2]);
      if (input_getOwnPropSymbols)
        for (var prop2 of input_getOwnPropSymbols(b)) {
          if (input_propIsEnum.call(b, prop2))
            input_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var __rest = (source, exclude) => {
      var target = {};
      for (var prop2 in source)
        if (input_hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
          target[prop2] = source[prop2];
      if (source != null && input_getOwnPropSymbols)
        for (var prop2 of input_getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop2) < 0 && input_propIsEnum.call(source, prop2))
            target[prop2] = source[prop2];
        }
      return target;
    };
    const componentDecorator = (href, text, key) => /* @__PURE__ */ react_default.a.createElement("button", {
      className: "underline",
      onClick: () => Object(utils["e"])(href),
      type: "button",
      key
    }, text);
    const Input = (_a) => {
      var {
        className,
        children,
        label,
        name,
        type,
        value,
        onFocus,
        onBlur,
        onChange,
        maxLength
      } = _a, props = __rest(_a, [
        "className",
        "children",
        "label",
        "name",
        "type",
        "value",
        "onFocus",
        "onBlur",
        "onChange",
        "maxLength"
      ]);
      const labelEl = Object(react["useRef"])();
      const inputEl = Object(react["useRef"])();
      const [focused, setFocused, unsetFocused] = useToggle();
      const [field, meta, {setTouched, setValue}] = Object(formik_esm["d"])(input_assign({
        name,
        value,
        type
      }, props));
      const hasError = Object(react["useMemo"])(() => meta.touched && meta.error, [meta]);
      const handleFocus = (e) => {
        setFocused();
        setTouched(false);
        if (onFocus) {
          onFocus(e);
        }
      };
      const handleBlur = (e) => {
        unsetFocused();
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      };
      const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      };
      useSurrogateFocus(labelEl, inputEl, "click");
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, label && /* @__PURE__ */ react_default.a.createElement("label", {
        ref: labelEl,
        className: classnames_default()("floating-label", {
          active: focused,
          filled: value,
          "text-error": hasError
        }),
        htmlFor: name
      }, label), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, /* @__PURE__ */ react_default.a.createElement("input", input_assign(input_assign(input_assign({
        ref: inputEl,
        className: classnames_default()(className, "w-full", "form-control", {
          "border-error": hasError
        }),
        id: name
      }, field), props), {
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        maxLength,
        type
      })), children), /* @__PURE__ */ react_default.a.createElement(formik_esm["a"], {
        name
      }, (msg) => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "pt-2 text-error"
      }, /* @__PURE__ */ react_default.a.createElement(dist_default.a, {
        componentDecorator
      }, msg))));
    };
    Input.propTypes = {
      className: classNameSchema,
      children: childrenSchema,
      label: prop_types_default.a.string,
      name: prop_types_default.a.string.isRequired,
      type: prop_types_default.a.string,
      value: prop_types_default.a.string,
      onFocus: prop_types_default.a.func,
      onBlur: prop_types_default.a.func,
      onChange: prop_types_default.a.func,
      maxLength: prop_types_default.a.number
    };
    Input.defaultProps = {
      type: "text"
    };
    var input = Input;
    const NameField = ({val, onChange, setView, required}) => {
      const onFocus = Object(react["useCallback"])(setView("name", "card"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(input, {
        name: "name",
        type: "text",
        label: `Loop Name${required ? "*" : ""}`,
        maxLength: 80,
        onChange,
        value: val,
        onFocus
      }));
    };
    NameField.propTypes = {
      val: prop_types_default.a.string,
      onChange: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_name = NameField;
    const DescriptionField = ({val, onChange, setView, required}) => {
      const onFocus = Object(react["useCallback"])(setView("description", "card"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(input, {
        name: "description",
        type: "text",
        label: `Short Description${required ? "*" : ""}`,
        maxLength: 110,
        onChange,
        value: val,
        onFocus
      }));
    };
    DescriptionField.propTypes = {
      val: prop_types_default.a.string,
      onChange: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_description = DescriptionField;
    var js = __webpack_require__(319);
    var js_default = /* @__PURE__ */ __webpack_require__.n(js);
    var markdown_defProp = Object.defineProperty;
    var markdown_hasOwnProp = Object.prototype.hasOwnProperty;
    var markdown_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var markdown_propIsEnum = Object.prototype.propertyIsEnumerable;
    var markdown_defNormalProp = (obj, key, value) => key in obj ? markdown_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var markdown_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (markdown_hasOwnProp.call(b, prop2))
          markdown_defNormalProp(a, prop2, b[prop2]);
      if (markdown_getOwnPropSymbols)
        for (var prop2 of markdown_getOwnPropSymbols(b)) {
          if (markdown_propIsEnum.call(b, prop2))
            markdown_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var markdown_rest = (source, exclude) => {
      var target = {};
      for (var prop2 in source)
        if (markdown_hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
          target[prop2] = source[prop2];
      if (source != null && markdown_getOwnPropSymbols)
        for (var prop2 of markdown_getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop2) < 0 && markdown_propIsEnum.call(source, prop2))
            target[prop2] = source[prop2];
        }
      return target;
    };
    const toolbarCommands = [
      ["header", "bold", "italic", "strikethrough"],
      ["link", "quote", "code", "image"],
      ["unordered-list", "ordered-list"]
    ];
    const labelStyle = {
      top: "44px",
      paddingTop: "10px",
      left: "1px",
      paddingLeft: "15px",
      width: "99%"
    };
    const markdown_Markdown = (_a) => {
      var {
        className,
        label,
        name,
        value,
        onChange,
        onFocus,
        onBlur,
        maxLength
      } = _a, props = markdown_rest(_a, [
        "className",
        "label",
        "name",
        "value",
        "onChange",
        "onFocus",
        "onBlur",
        "maxLength"
      ]);
      const parentEl = Object(react["useRef"])();
      const labelEl = Object(react["useRef"])();
      const [focused, setFocus] = Object(react["useState"])();
      const [field, meta, {setTouched}] = Object(formik_esm["d"])(markdown_assign({
        name,
        value,
        onChange
      }, props));
      const hasError = Object(react["useMemo"])(() => meta.touched && meta.error, [meta]);
      const handleFocus = Object(react["useCallback"])((e) => {
        setTouched(false);
        setFocus(true);
        if (onFocus) {
          onFocus(e);
        }
      }, [setTouched, onFocus]);
      const handleBlur = Object(react["useCallback"])((e) => {
        setTimeout(() => {
          setTouched(true);
          if (parentEl.current && window.activeElement !== parentEl.current.getElementsByTagName("textarea")[0]) {
            setFocus(false);
          }
        }, 100);
        if (onBlur) {
          onBlur(e);
        }
      }, [setTouched, onBlur, setFocus, parentEl.current]);
      const childProps = Object(react["useMemo"])(() => ({
        textArea: markdown_assign(markdown_assign({}, field), {
          onFocus: handleFocus,
          onBlur: handleBlur,
          maxLength
        })
      }), [field, handleFocus, handleBlur, maxLength]);
      const classes = Object(react["useMemo"])(() => ({
        reactMde: classnames_default()(className, "!rounded-xs", {
          "!border-grey-700": !focused && !hasError,
          "!border-error": hasError,
          "!border-primary": focused
        }),
        textArea: "!pt-8 !pb-2 !px-4"
      }), [className, hasError, focused]);
      Object(react["useEffect"])(() => {
        if (labelEl.current) {
          const focusMd = () => {
            parentEl.current.getElementsByTagName("textarea")[0].focus();
          };
          labelEl.current.addEventListener("click", focusMd);
          return () => labelEl.current.removeEventListener("click", focusMd);
        }
        return function noop() {
        };
      }, [labelEl.current, parentEl.current]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, label && /* @__PURE__ */ react_default.a.createElement("label", {
        ref: labelEl,
        style: labelStyle,
        className: classnames_default()("z-50 bg-white floating-label", {
          active: focused,
          filled: value,
          "text-error": hasError
        }),
        htmlFor: name
      }, label), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-1",
        ref: parentEl
      }, /* @__PURE__ */ react_default.a.createElement(js_default.a, {
        value,
        toolbarCommands,
        selectTab: "write",
        minEditorHeight: 175,
        maxEditorHeight: 300,
        disablePreview: true,
        onChange,
        classes,
        childProps
      }), /* @__PURE__ */ react_default.a.createElement(formik_esm["a"], {
        name
      }, (msg) => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "pt-2 text-error"
      }, msg))));
    };
    markdown_Markdown.propTypes = {
      className: classNameSchema,
      label: prop_types_default.a.string,
      name: prop_types_default.a.string.isRequired,
      value: prop_types_default.a.string,
      onFocus: prop_types_default.a.func,
      onBlur: prop_types_default.a.func,
      onChange: prop_types_default.a.func,
      maxLength: prop_types_default.a.number
    };
    var fields_markdown = markdown_Markdown;
    const DocumentationField = ({val, onChange, setView, required}) => {
      const onFocus = Object(react["useCallback"])(setView("documentation", "details"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(fields_markdown, {
        name: "documentation",
        label: `Long Description${required ? "*" : ""}`,
        maxLength: 1e4,
        value: val,
        onChange,
        onFocus
      }));
    };
    DocumentationField.propTypes = {
      val: prop_types_default.a.string,
      onChange: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_documentation = DocumentationField;
    var colorPicker_defProp = Object.defineProperty;
    var colorPicker_hasOwnProp = Object.prototype.hasOwnProperty;
    var colorPicker_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var colorPicker_propIsEnum = Object.prototype.propertyIsEnumerable;
    var colorPicker_defNormalProp = (obj, key, value) => key in obj ? colorPicker_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var colorPicker_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (colorPicker_hasOwnProp.call(b, prop2))
          colorPicker_defNormalProp(a, prop2, b[prop2]);
      if (colorPicker_getOwnPropSymbols)
        for (var prop2 of colorPicker_getOwnPropSymbols(b)) {
          if (colorPicker_propIsEnum.call(b, prop2))
            colorPicker_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var colorPicker_rest = (source, exclude) => {
      var target = {};
      for (var prop2 in source)
        if (colorPicker_hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
          target[prop2] = source[prop2];
      if (source != null && colorPicker_getOwnPropSymbols)
        for (var prop2 of colorPicker_getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop2) < 0 && colorPicker_propIsEnum.call(source, prop2))
            target[prop2] = source[prop2];
        }
      return target;
    };
    const ColorPicker = (_a) => {
      var {
        className,
        label,
        name,
        value,
        onFocus,
        onBlur,
        onChange
      } = _a, props = colorPicker_rest(_a, [
        "className",
        "label",
        "name",
        "value",
        "onFocus",
        "onBlur",
        "onChange"
      ]);
      const labelEl = Object(react["useRef"])();
      const inputEl = Object(react["useRef"])();
      const colorEl = Object(react["useRef"])();
      const [focused, setFocused, unsetFocused] = useToggle();
      const [field, meta, {setTouched, setValue}] = Object(formik_esm["d"])(colorPicker_assign({
        name,
        value
      }, props));
      const handleFocus = (e) => {
        setFocused();
        setTouched(false);
        if (onFocus) {
          onFocus(e);
        }
      };
      const handleBlur = (e) => {
        unsetFocused();
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      };
      const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      };
      const onClick = (e) => {
        if (onFocus) {
          onFocus(e);
        }
      };
      useSurrogateFocus(labelEl, inputEl, "click");
      const bg = Object(react["useMemo"])(() => ({backgroundColor: value}), [value]);
      const hasError = Object(react["useMemo"])(() => meta.touched && meta.error, [meta]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, label && /* @__PURE__ */ react_default.a.createElement("label", {
        ref: labelEl,
        className: classnames_default()("floating-label", {
          active: focused,
          filled: value,
          "text-error": hasError
        }),
        htmlFor: name
      }, label), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, /* @__PURE__ */ react_default.a.createElement("input", colorPicker_assign(colorPicker_assign(colorPicker_assign({
        ref: inputEl,
        className: classnames_default()(className, "w-full", "form-control", {
          "border-error": hasError
        })
      }, field), props), {
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        type: "text"
      })), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "absolute right-0 mr-2.5 mt-2.5 cursor-pointer w-8 h-8"
      }, /* @__PURE__ */ react_default.a.createElement("input", {
        tabIndex: "-1",
        ref: colorEl,
        type: "color",
        className: "cursor-pointer opacity-0 absolute w-8 h-8 z-10",
        onChange: handleChange,
        onClick
      }), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "rounded-full w-8 h-8 absolute border border-grey-250",
        style: bg
      }))), /* @__PURE__ */ react_default.a.createElement(formik_esm["a"], {
        name
      }, (msg) => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "pt-2 text-error"
      }, msg)));
    };
    ColorPicker.propTypes = {
      className: classNameSchema,
      label: prop_types_default.a.string,
      name: prop_types_default.a.string.isRequired,
      value: prop_types_default.a.string,
      onFocus: prop_types_default.a.func,
      onBlur: prop_types_default.a.func,
      onChange: prop_types_default.a.func
    };
    var colorPicker = ColorPicker;
    const ColorStripField = ({val, onChange, setView, required}) => {
      const onFocus = Object(react["useCallback"])(setView("colorStrip", "whisper"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(colorPicker, {
        name: "colorStrip",
        label: `Whisper Color Strip${required ? "*" : ""}`,
        value: val,
        onChange,
        onFocus
      }));
    };
    ColorStripField.propTypes = {
      val: prop_types_default.a.string,
      onChange: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_colorStrip = ColorStripField;
    var filesize_es6_min = __webpack_require__(722);
    var filesize_es6_min_default = /* @__PURE__ */ __webpack_require__.n(filesize_es6_min);
    const hiddenFileStyle = {
      width: "52px",
      height: "17px"
    };
    const FilePicker = ({
      label,
      name,
      files,
      onChange,
      onFocus,
      onBlur,
      onDelete,
      accept,
      multiple,
      limit,
      loading,
      noun
    }) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const browseEl = Object(react["useRef"])();
      const inputEl = Object(react["useRef"])();
      const [hovering, setHover, unsetHover] = useToggle();
      const [, , {setTouched, setValue}] = Object(formik_esm["d"])({
        name,
        value: multiple ? files : files[0]
      });
      Object(react["useEffect"])(() => {
        if (multiple) {
          const urls = files.map((f) => f == null ? void 0 : f.fileUrl).filter(Boolean);
          if (urls.length) {
            setValue(urls);
          }
        } else {
          const [f] = files;
          if (f == null ? void 0 : f.fileUrl) {
            setValue(f.fileUrl);
          }
        }
      }, [files]);
      const wrongType = (selections) => {
        return Array.from(selections).some((fileObj) => {
          const parts = fileObj.name.split(".");
          const ext = parts.pop();
          return !accept.includes(`.${ext}`);
        });
      };
      const handleKeyPress = (e) => {
        var _a;
        if (e.which === 13) {
          e.preventDefault();
          (_a = inputEl == null ? void 0 : inputEl.current) == null ? void 0 : _a.click();
        }
      };
      const handleFiles = (chosenFiles) => {
        if (chosenFiles == null ? void 0 : chosenFiles.length) {
          const total = files.length + chosenFiles.length;
          if (total > limit) {
            makeToast(`You can only upload ${limit} ${noun}.`, "info");
          } else if (wrongType(chosenFiles)) {
            makeToast("One or more of these files is an unsupported file type.", "info");
          } else {
            onChange(chosenFiles);
          }
        }
      };
      const handleChange = (e) => {
        var _a;
        handleFiles((_a = e.target) == null ? void 0 : _a.files);
      };
      const preventEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return e;
      };
      const onDrop = (e) => {
        var _a;
        if (!loading) {
          if (onFocus) {
            onFocus(e);
          }
          unsetHover();
          handleFiles((_a = e == null ? void 0 : e.dataTransfer) == null ? void 0 : _a.files);
        }
      };
      const handleFocus = (e) => {
        setTouched(false);
        if (onFocus) {
          onFocus(e);
        }
      };
      const handleBlur = (e) => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      };
      const renderMain = () => {
        if (files.length >= limit) {
          return /* @__PURE__ */ react_default.a.createElement("div", {
            className: "inline-blocki text-center"
          }, "You've uploaded the maximum number of ", noun, ".");
        }
        if (loading) {
          return /* @__PURE__ */ react_default.a.createElement(spinner["a"], null);
        }
        if (!loading && hovering) {
          return /* @__PURE__ */ react_default.a.createElement("div", {
            className: "flex items-center text-primary"
          }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
            icon: "insert_photo",
            className: "transform -rotate-12 text-5xl mr-2"
          }), /* @__PURE__ */ react_default.a.createElement("span", null, "Drop your file"));
        }
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "relative"
        }, /* @__PURE__ */ react_default.a.createElement("div", {
          className: "inline-block"
        }, "Drop files here or\xA0"), /* @__PURE__ */ react_default.a.createElement("input", {
          name: `${name}-surrogate`,
          value: "browse",
          ref: browseEl,
          type: "button",
          className: "bg-grey-350 inline-block cursor-pointer text-primary underline focus:text-error",
          onKeyPress: handleKeyPress,
          onFocus: handleFocus,
          onBlur: handleBlur
        }), /* @__PURE__ */ react_default.a.createElement("input", {
          name,
          ref: inputEl,
          tabIndex: "-1",
          type: "file",
          className: "absolute right-0 opacity-0 cursor-pointer z-10 text-0",
          style: hiddenFileStyle,
          onChange: handleChange,
          onFocus: handleFocus,
          accept,
          multiple
        }));
      };
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", null, label), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-1"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("mt-1  border border-dashed w-full flex flex-row justify-center items-center h-20", {
          "bg-grey-350 border-grey-disabled": !hovering,
          "bg-primary-light border-primary": !loading && hovering
        }),
        onDragEnter: setHover,
        onDragLeave: unsetHover,
        onDragOver: preventEvent,
        onDrop
      }, renderMain()), files.map((file, i) => (file == null ? void 0 : file.name) && /* @__PURE__ */ react_default.a.createElement("div", {
        key: `file-${i}`,
        className: "border-t border-grey-250 py-2 w-full flex flex-row justify-between items-center h-20 px-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center overflow-hidden whitespace-nowrap"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "insert_photo",
        className: "mr-2"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "overflow-ellipsis overflow-hidden"
      }, file.name, " ", file.size && filesize_es6_min_default()(file.size))), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "delete",
        className: "text-primary",
        onClick: () => onDelete(i)
      })))));
    };
    FilePicker.propTypes = {
      label: prop_types_default.a.string,
      name: prop_types_default.a.string,
      files: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.array]),
      onChange: prop_types_default.a.func.isRequired,
      onFocus: prop_types_default.a.func,
      onBlur: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      accept: prop_types_default.a.string,
      multiple: prop_types_default.a.bool,
      limit: prop_types_default.a.number,
      loading: prop_types_default.a.bool,
      noun: prop_types_default.a.string
    };
    FilePicker.defaultProps = {
      limit: 20,
      noun: "files"
    };
    var filePicker = FilePicker;
    var imagePicker_defProp = Object.defineProperty;
    var imagePicker_hasOwnProp = Object.prototype.hasOwnProperty;
    var imagePicker_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var imagePicker_propIsEnum = Object.prototype.propertyIsEnumerable;
    var imagePicker_defNormalProp = (obj, key, value) => key in obj ? imagePicker_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var imagePicker_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (imagePicker_hasOwnProp.call(b, prop2))
          imagePicker_defNormalProp(a, prop2, b[prop2]);
      if (imagePicker_getOwnPropSymbols)
        for (var prop2 of imagePicker_getOwnPropSymbols(b)) {
          if (imagePicker_propIsEnum.call(b, prop2))
            imagePicker_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var imagePicker_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const MAX_IMAGE_SIZE = 2;
    const reducer = (state, {type, payload}) => {
      switch (type) {
        case "replace":
          return [...payload];
        case "add":
          return [...state, ...payload];
        case "delete":
          state.splice(payload, 1);
          return [...state];
        default:
          throw new Error("Unknown type for screenshot reducer");
      }
    };
    const ImagePicker = ({
      onUpload,
      onUploadSuccess,
      onDelete,
      onFocus,
      onBlur,
      label,
      name,
      multiple,
      limit
    }) => {
      const [files, dispatch] = Object(react["useReducer"])(reducer, []);
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [loading, setLoading, unsetLoading] = useToggle();
      const [, meta] = Object(formik_esm["d"])({name});
      Object(react["useEffect"])(() => {
        if (meta == null ? void 0 : meta.initialValue) {
          const initialFiles = Array.isArray(meta.initialValue) ? meta.initialValue : [meta.initialValue];
          dispatch({
            type: "add",
            payload: initialFiles.map((f) => ({
              name: f.split("/").pop(),
              fileUrl: f
            }))
          });
        }
      }, [meta == null ? void 0 : meta.initialValue]);
      const tooBig = (file) => (file.size / 1024 / 1024).toFixed(4) > MAX_IMAGE_SIZE;
      const onChange = (fileList) => imagePicker_async(void 0, null, function* () {
        if (fileList == null ? void 0 : fileList.length) {
          setLoading();
          let fileObjs = Array.from(fileList);
          if (!multiple) {
            fileObjs = fileObjs.slice(0, 1);
          }
          if (fileObjs.some(tooBig)) {
            makeToast(`One ore more of these images is too big.`);
            unsetLoading();
          } else {
            onUpload(fileObjs);
            try {
              const uploads = yield Promise.all(fileObjs.map((file) => Object(utils_fetch["d"])(file, "/library/loop/logo")));
              onUploadSuccess(uploads.map((upload) => upload.fileUrl));
              const payload = uploads.map((upload, i) => imagePicker_assign(imagePicker_assign({}, upload), fileObjs[i]));
              dispatch({type: multiple ? "add" : "replace", payload});
            } catch (e) {
              makeToast(`Could not upload image one or more images.`, "error");
            } finally {
              unsetLoading();
            }
          }
        }
      });
      const wrapDelete = (i) => {
        dispatch({type: "delete", payload: i});
        onDelete(i);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(filePicker, {
        label,
        name,
        onChange,
        onFocus,
        onBlur,
        multiple,
        limit,
        onDelete: wrapDelete,
        files,
        loading,
        accept: ".png,.jpg,.jpeg,.jpe,.jif,.jfif,.jfi,.ico",
        noun: "screenshots"
      }));
    };
    ImagePicker.propTypes = {
      onUpload: prop_types_default.a.func,
      onUploadSuccess: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      onFocus: prop_types_default.a.func,
      onBlur: prop_types_default.a.func,
      label: prop_types_default.a.string,
      name: prop_types_default.a.string,
      multiple: prop_types_default.a.bool,
      limit: prop_types_default.a.number
    };
    ImagePicker.defaultProps = {
      multiple: false
    };
    var imagePicker = ImagePicker;
    const LoopLogoField = ({
      onUpload,
      onUploadSuccess,
      onDelete,
      setView,
      required
    }) => {
      const onFocus = Object(react["useCallback"])(setView("loopLibraryLogo", "card"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(imagePicker, {
        label: `Loop Logo${required ? "*" : ""}`,
        name: "loopLibraryLogo",
        onFocus,
        onUpload,
        onUploadSuccess,
        onDelete
      }));
    };
    LoopLogoField.propTypes = {
      onUpload: prop_types_default.a.func,
      onUploadSuccess: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_loopLogo = LoopLogoField;
    const WhisperLogoField = ({
      onUpload,
      onUploadSuccess,
      onDelete,
      setView,
      required
    }) => {
      const onFocus = Object(react["useCallback"])(setView("loopWhisperLogo", "whisper"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(imagePicker, {
        label: `Whisper Logo${required ? "*" : ""}`,
        name: "loopWhisperLogo",
        onFocus,
        onUpload,
        onUploadSuccess,
        onDelete
      }));
    };
    WhisperLogoField.propTypes = {
      onUpload: prop_types_default.a.func,
      onUploadSuccess: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_whisperLogo = WhisperLogoField;
    const CollapsibleSection = ({children, title, subtitle, startOpen}) => {
      const [expanded, , , toggle] = useToggle(startOpen);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative mb-3"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        role: "button",
        tabIndex: "-1",
        className: "flex flex-row items-center justify-between cursor-pointer border-t border-grey-250 w-full pt-3",
        onClick: toggle
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row items-baseline"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "h3 mr-2"
      }, title), subtitle && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-disabled"
      }, subtitle)), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: expanded ? "expand_less" : "expand_more",
        className: "text-primary font-bold text-2xl"
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("h-auto", "transition-max-h", "ease-in-out", "duration-500", "flex", "flex-col", "space-y-6", "px-0.5", "overflow-hidden", {
          "max-h-0": !expanded,
          "max-h-5000": expanded
        })
      }, children));
    };
    CollapsibleSection.propTypes = {
      children: childrenSchema,
      title: prop_types_default.a.string,
      subtitle: prop_types_default.a.string,
      startOpen: prop_types_default.a.bool
    };
    var collapsibleSection = CollapsibleSection;
    const columnWidth = {width: "49%"};
    const defaultName = "Your Loop";
    const defaultDescription = "This loop can do some amazing things.";
    const helptext = {
      name: `Give your loop a short, simple, and memorable name, something that users can easily identify. The name can include uppercase and lowercase letters, numbers, spaces, and dash (-), period (.) or amphora (@) symbols`,
      description: `Describe your loop in a sentence or less. The short description is one of the first things users will see about your loop, and it will be used when someone searches for loops in the library.`,
      loopLibraryLogo: `Choose a logo that will represent your loop in the library. Square images work best. 250px max width, jpg, png, and ico file types are accepted, should not exceed 2MB.`,
      loopWhisperLogo: `Choose a logo that will appear on your loop's whispers. This can be the same as the loop logo, but it displays much smaller. Watch for too many fine details. 100px max width (square images work best), jpg, png, and ico file types are accepted, should not exceed 2MB.`,
      documentation: `Let users know about the features of your loop and the benefits of using it. You can also include documentation, terms of service or privacy policy info. Use markup to create links and add formatting for headers, bold, italic, and underlined fonts.`,
      colorStrip: `This color appears on the top edge of all whispers generated by your loop, unifying your organization's brand and helping users distinguish your loop from other loops.`
    };
    const introText = {
      card: `The Loop card will appear in the Loop Library.`,
      details: `Loop details will appear in the Loop Library, along with ratings and reviews on your Loop\u2019s detail page.`,
      whisper: `Whispers will be displayed in the Olive Helps sidebar.`
    };
    const MetadataSection = ({initialValues: iv}) => {
      var _a;
      const {openChannelProfile} = Object(react["useContext"])(AuthContext);
      const {developer} = openChannelProfile || {};
      const [activeView, setActiveView] = Object(react["useState"])("card");
      const [activeField, setActiveField] = Object(react["useState"])("name");
      const updateView = Object(react["useCallback"])((field, view) => () => {
        if (field && field !== activeField) {
          setActiveField(field);
        }
        if (view && view !== activeView) {
          setActiveView(view);
        }
      }, [activeView, activeField]);
      const [name, updateName] = useFieldState(iv.name);
      const [description, updateDescription] = useFieldState(iv.description);
      const [documentation, setDocumentation] = Object(react["useState"])(iv.documentation);
      const [colorStrip, updateColorStrip] = useFieldState(iv.colorStrip);
      const [logo, setLogo] = Object(react["useState"])(iv.loopLibraryLogo);
      const [whisperLogo, setWhisperLogo] = Object(react["useState"])(iv.loopWhisperLogo);
      const [logoPending, setLogoPending, unsetLogoPending] = useToggle();
      const [whisperPending, setWhisperPending, unsetWhisperPending] = useToggle();
      const onLogoUploadSuccess = Object(react["useCallback"])(([file]) => {
        unsetLogoPending();
        setLogo(file);
      }, [logo, logoPending]);
      const onWhisperUploadSuccess = Object(react["useCallback"])(([file]) => {
        unsetWhisperPending();
        setWhisperLogo(file);
      }, [whisperLogo, whisperPending]);
      const onLoopLogoDelete = Object(react["useCallback"])(() => setLogo(""), [logo]);
      const onWhisperDelete = Object(react["useCallback"])(() => setWhisperLogo(""), [whisperLogo]);
      const roundedTop = (tabName) => ({
        "rounded-t-12 bg-primary-dark h-1 w-full -mt-1": activeView === tabName
      });
      return /* @__PURE__ */ react_default.a.createElement(collapsibleSection, {
        title: "Loop Metadata",
        startOpen: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "py-6 flex flex-row justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-4",
        style: columnWidth
      }, /* @__PURE__ */ react_default.a.createElement(submit_name, {
        val: name,
        onChange: updateName,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_description, {
        val: description,
        onChange: updateDescription,
        setView: updateView
      }), /* @__PURE__ */ react_default.a.createElement(submit_documentation, {
        val: documentation,
        onChange: setDocumentation,
        setView: updateView
      }), /* @__PURE__ */ react_default.a.createElement(submit_colorStrip, {
        val: colorStrip,
        onChange: updateColorStrip,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_loopLogo, {
        onUpload: setLogoPending,
        onUploadSuccess: onLogoUploadSuccess,
        onDelete: onLoopLogoDelete,
        setView: updateView
      }), /* @__PURE__ */ react_default.a.createElement(submit_whisperLogo, {
        onUpload: setWhisperPending,
        onUploadSuccess: onWhisperUploadSuccess,
        onDelete: onWhisperDelete,
        setView: updateView
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative",
        style: columnWidth
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-4 bg-primary-pale p-6"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "font-bold h2 hidden md:block"
      }, "Preview"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "hidden md:flex flex-row items-center space-x-6 border-b border-primary-dark"
      }, /* @__PURE__ */ react_default.a.createElement("h4", {
        className: classnames_default()("px-2", "w-32", "text-center", {
          "text-primary-dark": activeView === "card"
        })
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mb-2 focus:outline-none",
        onClick: updateView(null, "card")
      }, "Loop Card"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(roundedTop("card"))
      })), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: classnames_default()("px-2", "w-32", "text-center", {
          "text-primary-dark": activeView === "details"
        })
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mb-2 focus:outline-none",
        onClick: updateView(null, "details")
      }, "Loop Details"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(roundedTop("details"))
      })), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: classnames_default()("px-2", "w-32", "text-center", {
          "text-primary-dark": activeView === "whisper"
        })
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mb-2 focus:outline-none",
        onClick: updateView(null, "whisper")
      }, "Whisper"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(roundedTop("whisper"))
      }))), /* @__PURE__ */ react_default.a.createElement("div", null, introText[activeView]), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "hidden md:flex md:flex-col items-center"
      }, activeView === "card" && /* @__PURE__ */ react_default.a.createElement(fakeCard, {
        name: name || defaultName,
        description: description || defaultDescription,
        logo,
        logoPending,
        orgName: (_a = developer == null ? void 0 : developer.org) == null ? void 0 : _a.name
      }), activeView === "details" && /* @__PURE__ */ react_default.a.createElement(fakeDetails, {
        documentation
      }), activeView === "whisper" && /* @__PURE__ */ react_default.a.createElement(fakeWhisper, {
        logo: whisperLogo,
        logoPending: whisperPending,
        colorStrip,
        name: name || defaultName
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black text-sm mt-8 px-2"
      }, helptext[activeField])))));
    };
    MetadataSection.propTypes = {
      initialValues: prop_types_default.a.object
    };
    var metadataSection = MetadataSection;
    var directoryPicker_defProp = Object.defineProperty;
    var directoryPicker_hasOwnProp = Object.prototype.hasOwnProperty;
    var directoryPicker_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var directoryPicker_propIsEnum = Object.prototype.propertyIsEnumerable;
    var directoryPicker_defNormalProp = (obj, key, value) => key in obj ? directoryPicker_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var directoryPicker_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (directoryPicker_hasOwnProp.call(b, prop2))
          directoryPicker_defNormalProp(a, prop2, b[prop2]);
      if (directoryPicker_getOwnPropSymbols)
        for (var prop2 of directoryPicker_getOwnPropSymbols(b)) {
          if (directoryPicker_propIsEnum.call(b, prop2))
            directoryPicker_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var directoryPicker_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const defaultDialogOptions = {
      title: "Choose Loop Folder",
      buttonLabel: "Select",
      properties: ["openDirectory", "showHiddenFiles"]
    };
    const DirectoryPicker = ({
      label,
      name,
      onChange,
      onFocus,
      onBlur,
      onDelete,
      loading,
      dialogOptions
    }) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [hovering, setHover, unsetHover] = useToggle();
      const options = Object(react["useMemo"])(() => directoryPicker_assign(directoryPicker_assign({}, defaultDialogOptions), dialogOptions), [dialogOptions]);
      const [field, , {setTouched, setValue}] = Object(formik_esm["d"])({
        name,
        value: ""
      });
      const handleClick = () => directoryPicker_async(void 0, null, function* () {
        const selectedFile = yield Object(utils["f"])(options);
        if (selectedFile && !selectedFile.canceled) {
          const [path] = selectedFile.filePaths;
          onChange(path);
          setValue(path);
        }
      });
      const handleKeyPress = (e) => {
        if (e.which === 13) {
          e.preventDefault();
          handleClick(e);
        }
      };
      const preventEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return e;
      };
      const onDrop = (e) => {
        var _a;
        if (!loading) {
          if (onFocus) {
            onFocus(e);
          }
          unsetHover();
          const fileItems = Array.from(((_a = e.dataTransfer) == null ? void 0 : _a.items) || []).filter((item) => (item == null ? void 0 : item.kind) === "file");
          const entries = fileItems.map((item) => {
            var _a2;
            return ((_a2 = item.webkitGetAsEntry) == null ? void 0 : _a2.call(item)) || item.getAsEntry();
          }).filter((entry) => entry.isDirectory);
          if (entries.length === 1) {
            const entry = entries[0];
            const file = Array.from(e.dataTransfer.files).find((f) => f.path.endsWith(entry.fullPath));
            onChange(file.path);
            setValue(file.path);
            return;
          }
          makeToast("Please drop a directory in which your loop executable is found.", "error");
        }
      };
      const handleFocus = (e) => {
        setTouched(false);
        if (onFocus) {
          onFocus(e);
        }
      };
      const handleBlur = (e) => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      };
      const handleDelete = (e) => {
        setValue("");
        if (onDelete) {
          onDelete(e);
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", null, label), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-1"
      }, field.value ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "bg-grey-350 w-full flex flex-row justify-between items-center h-20 px-4"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center overflow-ellipsis overflow-hidden"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "insert_photo",
        className: "mr-2"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "overflow-ellipsis overflow-hidden"
      }, field.value)), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "delete",
        className: "text-primary",
        onClick: handleDelete
      })) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("mt-1  border border-dashed w-full flex flex-row justify-center items-center h-20", {
          "bg-grey-350 border-grey-disabled": !hovering,
          "bg-primary-light border-primary": !loading && hovering
        }),
        onDragEnter: setHover,
        onDragLeave: unsetHover,
        onDragOver: preventEvent,
        onDrop
      }, loading && /* @__PURE__ */ react_default.a.createElement(spinner["a"], null), !loading && (hovering ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center text-primary"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "insert_photo",
        className: "transform -rotate-12 text-5xl mr-2"
      }), /* @__PURE__ */ react_default.a.createElement("span", null, "Drop your file")) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "inline-block"
      }, "Drop files here or\xA0"), /* @__PURE__ */ react_default.a.createElement("input", {
        name: `${name}-surrogate`,
        value: "browse",
        type: "button",
        className: "bg-grey-350 inline-block cursor-pointer text-primary underline focus:text-error",
        onKeyPress: handleKeyPress,
        onClick: handleClick,
        onFocus: handleFocus,
        onBlur: handleBlur
      }))))));
    };
    DirectoryPicker.propTypes = {
      label: prop_types_default.a.string,
      name: prop_types_default.a.string,
      onChange: prop_types_default.a.func.isRequired,
      onFocus: prop_types_default.a.func,
      onBlur: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      loading: prop_types_default.a.bool,
      dialogOptions: prop_types_default.a.shape({
        title: prop_types_default.a.string,
        buttonLabel: prop_types_default.a.string,
        filters: prop_types_default.a.array,
        properties: prop_types_default.a.array,
        defaultPath: prop_types_default.a.string
      })
    };
    var directoryPicker = DirectoryPicker;
    const LocalDirectory = ({set, onDelete, required}) => {
      const [, {initialValue}, {setTouched}] = Object(formik_esm["d"])({
        name: "command"
      });
      const handleChange = (arg) => {
        if (initialValue) {
          setTouched(true);
        }
        set(arg);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(directoryPicker, {
        label: `Local Directory${required ? "*" : ""}`,
        name: "localDirectory",
        onDelete,
        onChange: handleChange
      }));
    };
    LocalDirectory.propTypes = {
      set: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var local_directory = LocalDirectory;
    const local_section_columnWidth = {width: "49%"};
    const LocalSection = () => {
      const [localDirectory, setLocalDirectory] = Object(react["useState"])("");
      const onDelete = Object(react["useCallback"])(() => setLocalDirectory(""), [localDirectory]);
      return /* @__PURE__ */ react_default.a.createElement(collapsibleSection, {
        title: "Local Loop",
        startOpen: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "py-6 flex flex-row justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: local_section_columnWidth
      }, /* @__PURE__ */ react_default.a.createElement(local_directory, {
        set: setLocalDirectory,
        onDelete,
        required: true
      }))));
    };
    var local_section = LocalSection;
    var submit_defProp = Object.defineProperty;
    var submit_hasOwnProp = Object.prototype.hasOwnProperty;
    var submit_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var submit_propIsEnum = Object.prototype.propertyIsEnumerable;
    var submit_defNormalProp = (obj, key, value) => key in obj ? submit_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var submit_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (submit_hasOwnProp.call(b, prop2))
          submit_defNormalProp(a, prop2, b[prop2]);
      if (submit_getOwnPropSymbols)
        for (var prop2 of submit_getOwnPropSymbols(b)) {
          if (submit_propIsEnum.call(b, prop2))
            submit_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var submit_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const fs = window.require("fs");
    const submit_path = window.require("path");
    const HEX_PATTERN = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    const FIELD_REQUIRED = "This field is required.";
    const useFetchMetadata = (appId) => {
      const [error, setError] = Object(react["useState"])(null);
      const [metadata, setMetadata] = Object(react["useState"])(null);
      useAsyncEffect(() => submit_async(void 0, null, function* () {
        try {
          setMetadata(yield Object(messaging["r"])(appId));
        } catch (e) {
          console.error(`Error fetching loop with id ${appId}`);
          setError(e);
        }
      }), [appId]);
      return [metadata, error];
    };
    const submit_Submit = () => {
      const {appId} = Object(react_router["i"])();
      const isUpdate = !!appId;
      const [existingMetadata] = appId ? useFetchMetadata(appId) : [];
      const {openChannelProfile: oc} = Object(react["useContext"])(AuthContext);
      const {osName, loopContractVersion} = Object(context_config["e"])();
      const {makeToast} = Object(loopLibrary_context["i"])();
      const refreshInstalledLoops = useFetchInstalled();
      const [pending, setPending] = Object(react["useState"])();
      const [installedId, setInstalledId] = Object(react["useState"])();
      const initialValues = Object(react["useMemo"])(() => ({
        name: (existingMetadata == null ? void 0 : existingMetadata.name) || "",
        description: (existingMetadata == null ? void 0 : existingMetadata.description) || "",
        documentation: (existingMetadata == null ? void 0 : existingMetadata.documentation) || "",
        colorStrip: (existingMetadata == null ? void 0 : existingMetadata.colorStrip) || "#73ff57",
        loopLibraryLogo: (existingMetadata == null ? void 0 : existingMetadata.loopLibraryLogo) || "",
        loopWhisperLogo: (existingMetadata == null ? void 0 : existingMetadata.loopWhisperLogo) || "",
        specification: (existingMetadata == null ? void 0 : existingMetadata.specification) || LATEST_SPECIFICATION
      }), [appId, existingMetadata]);
      const schema = es["d"]().shape({
        name: es["e"]().required(FIELD_REQUIRED).max(80, "Name cannot exceed 80 characters."),
        description: es["e"]().max(110, "Description cannot exceed 110 characters."),
        documentation: es["e"]().max(1e4, "Documentation cannot exceed 10,000 charaters. If you need additional documentation, considering linking to an external page like a github repo."),
        colorStrip: es["e"]().required(FIELD_REQUIRED).matches(HEX_PATTERN, "Color strip must be a 3 or 6 digit hex code."),
        loopLibraryLogo: es["e"](),
        loopWhisperLogo: es["e"](),
        localDirectory: isUpdate ? void 0 : es["e"]().required(FIELD_REQUIRED),
        specification: es["e"]().matches(/^\d+$/).required()
      });
      const onSubmit = (_0) => submit_async(void 0, [_0], function* ({
        name,
        description,
        documentation,
        colorStrip,
        loopLibraryLogo,
        loopWhisperLogo,
        localDirectory,
        specification
      }) {
        setPending(true);
        try {
          const now = new Date().toISOString();
          let oliveHelpsContractVersion = {};
          let permissions = {};
          if (localDirectory) {
            const filename = submit_path.join(localDirectory, EXECUTABLE_NAME);
            try {
              fs.statSync(filename);
            } catch (e) {
              setPending(false);
              return makeToast(`Could not find "${EXECUTABLE_NAME}" in directory`);
            }
            const fileBuffer = fs.readFileSync(filename);
            const webpackMetadata = getWebpackMetadata(fileBuffer);
            if (semver_default.a.gt(webpackMetadata == null ? void 0 : webpackMetadata.oliveHelpsContractVersion, loopContractVersion)) {
              return makeToast(`You need the latest version of Olive Helps to install this Loop.`, "error");
            }
            oliveHelpsContractVersion = submit_assign({}, (webpackMetadata == null ? void 0 : webpackMetadata.oliveHelpsContractVersion) ? {
              oliveHelpsContractVersion: webpackMetadata.oliveHelpsContractVersion
            } : {});
            permissions = submit_assign({}, (webpackMetadata == null ? void 0 : webpackMetadata.permissions) ? {
              permissions: webpackMetadata.permissions
            } : {});
          }
          const metadata = submit_assign(submit_assign(submit_assign(submit_assign({
            appId,
            author: oc.name,
            authorId: oc.userAccountId,
            created: now,
            description,
            documentation,
            colorStrip,
            loopLibraryLogo,
            loopWhisperLogo,
            name
          }, oliveHelpsContractVersion), {
            operatingSystem: osName,
            organization: oc.orgName
          }), permissions), {
            semver: "1.0.0",
            orgId: oc.userId,
            specification,
            updated: now
          });
          if (isUpdate) {
            try {
              yield Object(messaging["I"])(metadata);
            } catch (e) {
              console.error("ERROR IN UPDATE METADATA: ", e);
              throw e;
            }
            refreshInstalledLoops();
          } else {
            metadata.appId = yield Object(messaging["m"])(metadata, localDirectory);
            Object(tracking["h"])({
              category: tracking["a"],
              action: "Local loop install succeeded",
              label: `authorId=${oc.userAccountId},appName=${name}`
            });
            refreshInstalledLoops();
            try {
              yield Object(messaging["B"])(metadata.appId);
              Object(tracking["h"])({
                category: tracking["a"],
                action: "Local loop started after install",
                label: `authorId=${oc.userAccountId},appName=${name}`
              });
              makeToast("This loop has been installed and started successfully");
            } catch (startError) {
              Object(tracking["h"])({
                category: tracking["a"],
                action: "Local loop crashed after install",
                label: `authorId=${oc.userAccountId},appName=${name}`
              });
              makeToast("This loop has been installed, but it failed to start successfully", "error");
              console.error(startError);
            }
          }
          setInstalledId(metadata.appId);
        } catch (e) {
          Object(tracking["h"])({
            category: tracking["a"],
            action: "Local loop install failed",
            label: `authorId=${oc.userAccountId},appName=${name}`
          });
          makeToast("Error installing local loop", "error");
          console.error("Error installing local loop", e);
        } finally {
          setPending(false);
        }
        return null;
      });
      if (installedId) {
        return /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
          to: `/developer/local-loop/loop/${installedId}/`
        });
      }
      if (isUpdate && !existingMetadata) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "h1 text-black w-full"
      }, isUpdate ? "Update" : "Install", " Local Loop"), /* @__PURE__ */ react_default.a.createElement(formik_esm["c"], {
        initialValues,
        validateOnMount: true,
        validationSchema: schema,
        onSubmit
      }, ({handleSubmit, isValid}) => /* @__PURE__ */ react_default.a.createElement(formik_esm["b"], {
        onSubmit: handleSubmit
      }, /* @__PURE__ */ react_default.a.createElement(metadataSection, {
        initialValues
      }), !isUpdate && /* @__PURE__ */ react_default.a.createElement(local_section, {
        initialValues
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-t border-grey-250 pt-2"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-6"
      }, pending ? /* @__PURE__ */ react_default.a.createElement(spinner["a"], null) : /* @__PURE__ */ react_default.a.createElement("button", {
        type: "submit",
        className: classnames_default()("btn btn-primary py-4", {
          "btn-disabled cursor-not-allowed": !isValid
        }),
        disabled: !isValid
      }, isUpdate ? "Update" : "Install", " Local Loop"))))));
    };
    var local_loop_submit = submit_Submit;
    var restartButton = __webpack_require__(318);
    const LocalDetails = () => {
      const {appId} = Object(react_router["i"])();
      const selectedLoop = useGetLocalInstalledLoopFromContext(appId);
      const {
        name,
        description,
        documentation,
        created,
        createdAt,
        updated,
        updatedAt,
        loopLibraryLogo,
        semverMac,
        semverWindows,
        colorStrip
      } = selectedLoop || {};
      const formattedTime = Object(react["useMemo"])(() => {
        return moment_default()(updated || updatedAt || created || createdAt).format("L LT");
      }, [updated, updatedAt, created, createdAt]);
      Object(react["useEffect"])(() => {
        if (appId && name) {
          Object(tracking["h"])({
            category: tracking["a"],
            action: "Local detail page viewed",
            label: `appId=${appId},appName=${name}`
          });
        }
      }, [appId, name]);
      return selectedLoop ? /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mb-6"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center justify-center space-y-2"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: loopLibraryLogo,
        size: "large",
        name,
        color: colorStrip
      }), /* @__PURE__ */ react_default.a.createElement(restartButton["a"], {
        appId
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col flex-grow justify-between",
        style: {maxHeight: "164px"}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between ml-6"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mr-10"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black font-semibold mt-3 mb-0"
      }, name), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-500 text-sm font-light"
      }, "Version ", semverMac || semverWindows), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-500 text-sm font-light"
      }, "Created: ", formattedTime), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-500 text-lg mt-2"
      }, description)))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-between items-end"
      }, /* @__PURE__ */ react_default.a.createElement(morePopupMenu, {
        loop: selectedLoop,
        isLocal: true,
        isDetailsPage: true
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "ml-6 mb-1"
      }, /* @__PURE__ */ react_default.a.createElement("hr", {
        className: "border-grey-400"
      })))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mb-16 ml-48"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(style_default.a.markdown, "text-base")
      }, /* @__PURE__ */ react_default.a.createElement(markdown["a"], {
        source: documentation
      })))) : /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
        to: "/developer/local-loops"
      });
    };
    var local_loop_details = LocalDetails;
    const LoopAuthorEditors = ({loop, className}) => {
      var _a;
      const editors = Object(react["useMemo"])(() => {
        var _a2;
        return (((_a2 = loop == null ? void 0 : loop.customData) == null ? void 0 : _a2.allowedEditors) || []).filter((editor) => {
          var _a3;
          return editor.name !== ((_a3 = loop.customData) == null ? void 0 : _a3.author);
        }).map((editor) => editor.name);
      }, [loop]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("text-grey-disabled text-sm break-word", className)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "clamp lines-1"
      }, "Author: ", (_a = loop.customData) == null ? void 0 : _a.author), (editors == null ? void 0 : editors.length) > 0 && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "clamp lines-2"
      }, "Editors: ", editors.join(", ")));
    };
    LoopAuthorEditors.propTypes = {
      loop: prop_types_default.a.object.isRequired,
      className: classNameSchema
    };
    var loopAuthorEditors = LoopAuthorEditors;
    const authoredLoopStatusBar_statuses = {
      suspended: "Suspended",
      pending: "Pending",
      inReview: "In Review"
    };
    const LoopStatus = ({loop, className}) => {
      var _a;
      const status = Object(react["useMemo"])(() => {
        var _a2, _b, _c;
        return ((_b = (_a2 = loop == null ? void 0 : loop.parent) == null ? void 0 : _a2.status) == null ? void 0 : _b.value) === "suspended" ? "suspended" : (_c = loop == null ? void 0 : loop.status) == null ? void 0 : _c.value;
      }, [loop]);
      const {openChannelProfile} = Object(react["useContext"])(AuthContext);
      const isLoopReviewer = (_a = openChannelProfile == null ? void 0 : openChannelProfile.permissions) == null ? void 0 : _a.canReviewAllLoops;
      const openSupport = () => Object(utils["e"])("https://docs.google.com/forms/d/e/1FAIpQLSdWE8har9OrQTipnbW7Sltbh_MZhBaGzQOwRHv3cJzQN1qgGg/viewform");
      const renderDescription = () => {
        if (status === "pending") {
          return "You will receive an email when the review process begins.";
        }
        if (status === "inReview") {
          return "You will receive an email when the review process is complete.";
        }
        return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("span", null, "Please reach out to "), /* @__PURE__ */ react_default.a.createElement("button", {
          type: "button",
          onClick: openSupport,
          className: "text-primary underline"
        }, "Olive Support"), /* @__PURE__ */ react_default.a.createElement("span", null, " with any questions"));
      };
      if (!authoredLoopStatusBar_statuses[status]) {
        return null;
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("w-full bg-grey-100 rounded-xs flex flex-row", className)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("px-4 border-r border-grey-250", {
          "text-primary-error": status === "suspended",
          "text-primary-dark": status !== "suspended"
        })
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "py-2.5"
      }, authoredLoopStatusBar_statuses[status])), !isLoopReviewer && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-4 py-2.5 text-black"
      }, renderDescription()));
    };
    LoopStatus.propTypes = {
      loop: prop_types_default.a.object,
      className: classNameSchema
    };
    var authoredLoopStatusBar = LoopStatus;
    const Version = ({semver}) => semver instanceof Object ? /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, (semver == null ? void 0 : semver.windows) && /* @__PURE__ */ react_default.a.createElement("span", null, "Win: ", semver.windows, (semver == null ? void 0 : semver.mac) && ", "), (semver == null ? void 0 : semver.mac) && /* @__PURE__ */ react_default.a.createElement("span", null, "Mac: ", semver.mac)) : /* @__PURE__ */ react_default.a.createElement("span", null, "Version: ", semver || "N/A");
    Version.propTypes = {
      semver: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string])
    };
    var components_version = Version;
    const details_Details = ({loop}) => {
      var _a, _b, _c, _d, _e;
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("flex", "flex-row", "w-full", "justify-start", "border-b", "border-grey-250", "pb-8")
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: (_a = loop.customData) == null ? void 0 : _a.loopLibraryLogo,
        name: loop.name,
        size: "large"
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex w-full justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col ml-12 w-full break-word"
      }, /* @__PURE__ */ react_default.a.createElement(authoredLoopStatusBar, {
        loop,
        className: "mb-4"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "clamp lines-2 my-0 h1 mr-4"
      }, loop.name), /* @__PURE__ */ react_default.a.createElement(morePopupMenu, {
        loop,
        isDetailsPage: true
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-sm text-grey-700 font-bold pr-2"
      }, ((_b = loop.organization) == null ? void 0 : _b.name) || ((_c = loop.customData) == null ? void 0 : _c.organization)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex text-sm text-grey-500"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex pr-2 flex-col space-x-0 md:flex-row md:space-x-1"
      }, /* @__PURE__ */ react_default.a.createElement(components_version, {
        semver: (_d = loop == null ? void 0 : loop.customData) == null ? void 0 : _d.semver
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-l border-grey-600 pl-2 flex flex-col justify-center align-center"
      }, "Last updated ", moment_default()(loop.lastUpdated).format("MMMM Do, YYYY"))), /* @__PURE__ */ react_default.a.createElement(loopAuthorEditors, {
        loop,
        className: "mt-2.5"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between items-center mt-6 border-b border-grey-250 pb-8"
      }, /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating: loop.rating,
        reviewCount: loop.reviewCount
      }), /* @__PURE__ */ react_default.a.createElement(loopPauseToggle, {
        appId: loop.appId,
        name: loop.name
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-8"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-sm text-grey-paragraph mt-5"
      }, /* @__PURE__ */ react_default.a.createElement(markdown["a"], {
        source: (_e = loop.customData) == null ? void 0 : _e.documentation
      }))))));
    };
    details_Details.propTypes = {
      loop: prop_types_default.a.object.isRequired
    };
    var loopStats_details = details_Details;
    const Stats = ({className, loop}) => {
      const series = useLoopStats(loop);
      const [totals, setTotals] = Object(react["useState"])({
        views: 0,
        adds: 0,
        pauses: 0,
        removes: 0
      });
      Object(react["useEffect"])(() => {
        let views = 0;
        let adds = 0;
        let pauses = 0;
        let removes = 0;
        series.forEach((entry) => {
          views += entry.views;
          adds += entry.adds;
          pauses += entry.pauses;
          removes += entry.removes;
        });
        setTotals({views, adds, pauses, removes});
      }, [series]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(className, "mt-8")
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "font-bold mt-0"
      }, "Loop Stats"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "rounded border border-grey-250"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center bg-primary text-white font-bold px-8 py-4 rounded-t"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "w-1/3 text-2xl"
      }, "Month"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-2/3 flex text-lg"
      }, /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, "Page Views"), /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, "Adds"), /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, "Pauses"), /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, "Removals"))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center font-bold mx-8 py-4 border-b border-grey-250"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "w-1/3 text-2xl"
      }, "Totals"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-2/3 flex text-lg"
      }, /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, totals.views), /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, totals.adds), /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, totals.pauses), /* @__PURE__ */ react_default.a.createElement("h3", {
        className: "text-center w-1/4"
      }, totals.removes))), series.map(({date, views, adds, pauses, removes}) => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center fold-bold mx-8 py-4 border-b border-grey-250",
        key: date
      }, /* @__PURE__ */ react_default.a.createElement("h4", {
        className: "w-1/3"
      }, moment_default()(date).utc().format("MMMM")), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-2/3 flex"
      }, /* @__PURE__ */ react_default.a.createElement("h4", {
        className: "text-center w-1/4"
      }, views || 0), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: "text-center w-1/4"
      }, adds || 0), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: "text-center w-1/4"
      }, pauses || 0), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: "text-center w-1/4"
      }, removes || 0))))));
    };
    Stats.propTypes = {
      className: prop_types_default.a.string,
      loop: prop_types_default.a.object.isRequired
    };
    var loopStats_stats = Stats;
    const ReviewsContainer = ({className, appId}) => {
      const [reviews, reviewsError] = useFetchReviews(appId);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(className, "mt-8")
      }, (reviews == null ? void 0 : reviews.length) > 0 && /* @__PURE__ */ react_default.a.createElement(components_reviews, {
        reviews,
        reviewsError,
        showMyReview: false
      }));
    };
    ReviewsContainer.propTypes = {
      className: prop_types_default.a.string,
      appId: prop_types_default.a.string.isRequired
    };
    var reviewsContainer = ReviewsContainer;
    var loopStats = () => {
      const {appId, version} = Object(react_router["i"])();
      const [refresh, setRefresh] = Object(react["useState"])(true);
      const [loop, error] = useFetchLoopByVersion(appId, version, refresh, () => setRefresh(false));
      const [editors, setEditors] = Object(react["useState"])([]);
      const history = Object(react_router["g"])();
      Object(react["useEffect"])(() => {
        var _a, _b, _c;
        const editorIds = (_b = (_a = loop == null ? void 0 : loop.customData) == null ? void 0 : _a.allowedEditors) == null ? void 0 : _b.map((editor) => editor == null ? void 0 : editor.developerAccountId).filter((editor) => !!editor);
        if ((_c = loop == null ? void 0 : loop.author) == null ? void 0 : _c.authorId) {
          editorIds.push(loop.author.authorId);
        }
        setEditors(editorIds);
      }, [loop]);
      const {openChannelProfile} = Object(react["useContext"])(AuthContext);
      const isEditor = editors == null ? void 0 : editors.includes(openChannelProfile == null ? void 0 : openChannelProfile.userAccountId);
      const onTryAgainClicked = () => setRefresh(true);
      const onGoBackClicked = () => history.goBack();
      const inTextLink = (name, onClick) => {
        return /* @__PURE__ */ react_default.a.createElement("button", {
          type: "button",
          onClick,
          className: "text-primary hover:underline"
        }, name);
      };
      if (error) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "h-full flex flex-col justify-center items-center mb-12"
        }, /* @__PURE__ */ react_default.a.createElement("h1", {
          className: "text-black text-4xl font-semibold"
        }, "Something went wrong."), /* @__PURE__ */ react_default.a.createElement("div", {
          className: "text-grey-disabled"
        }, "You can ", inTextLink("try again", onTryAgainClicked), " or", " ", inTextLink("go back", onGoBackClicked), "."));
      }
      if (!loop) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-between p-4 w-full"
      }, /* @__PURE__ */ react_default.a.createElement(loopStats_details, {
        loop
      }), isEditor && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(loopStats_stats, {
        loop
      }), /* @__PURE__ */ react_default.a.createElement(reviewsContainer, {
        appId
      })));
    };
    const ExpandedLoop = ({loop, className, stats, hideReviews, hideMenu}) => {
      var _a, _b, _c, _d, _e;
      const isApproved = Object(react["useMemo"])(() => loop.status.value === "approved", [loop]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("flex flex-col justify-between rounded-md shadow hover:shadow-md border border-grey-250 w-full", className)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-4 pt-4 pb-6 flex flex-col justify-between space-y-4"
      }, /* @__PURE__ */ react_default.a.createElement(authoredLoopStatusBar, {
        loop
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-start border-b border-grey-350 pb-4"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        className: "w-20 h-20",
        logo: (_a = loop.customData) == null ? void 0 : _a.loopLibraryLogo,
        name: loop.name
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col ml-4 w-full"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-between w-full"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-baseline"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-primary text-lg leading-none break-word"
      }, loop.name), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "ml-2 text-grey-disabled text-sm"
      }, /* @__PURE__ */ react_default.a.createElement(components_version, {
        semver: (_b = loop == null ? void 0 : loop.customData) == null ? void 0 : _b.semver
      }))), !hideMenu && /* @__PURE__ */ react_default.a.createElement(morePopupMenu, {
        loop
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-baseline"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-lg text-grey-700 pr-2"
      }, ((_c = loop.customData) == null ? void 0 : _c.onBehalfOfName) || ((_d = loop.customData) == null ? void 0 : _d.organization)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-600 border-l border-grey-600 pl-2 text-sm"
      }, moment_default()(loop.created).format("MMMM Do, YYYY"))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mt-3.5 items-start w-full justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "leading-none clamp lines-3 text-grey-paragraph break-word"
      }, (_e = loop.customData) == null ? void 0 : _e.description), isApproved && !hideReviews && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "ml-6 flex-shrink-0"
      }, /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating: loop.rating,
        reviewCount: loop.reviewCount
      }))))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center"
      }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: `/developer/authored/${loop.appId}/${loop.version}`,
        className: "btn btn-primary mr-6"
      }, "Details"), /* @__PURE__ */ react_default.a.createElement(loopAuthorEditors, {
        loop,
        className: "mr-2"
      })), isApproved && stats && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between space-x-3 md:space-x-9 text-sm md:text-base"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-primary mb-1.5"
      }, "Views"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-paragraph"
      }, stats.views || 0)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-primary mb-1.5"
      }, "Adds"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-paragraph"
      }, stats.adds || 0)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-primary mb-1.5"
      }, "Pauses"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-paragraph"
      }, stats.pauses || 0)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-primary mb-1.5"
      }, "Removals"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-paragraph"
      }, stats.removes || 0))))));
    };
    ExpandedLoop.propTypes = {
      loop: prop_types_default.a.object.isRequired,
      stats: statsSchema,
      className: classNameSchema,
      hideReviews: prop_types_default.a.bool,
      hideMenu: prop_types_default.a.bool
    };
    var expandedAuthoredLoop = ExpandedLoop;
    const initialObj = () => ({
      pending: {
        id: "pending",
        name: "Pending",
        list: []
      },
      inReview: {
        id: "inReview",
        name: "In Review",
        list: []
      },
      approved: {
        id: "approved",
        name: "Approved / Published",
        list: []
      },
      suspended: {
        id: "suspended",
        name: "Suspended",
        list: []
      },
      rejected: {
        id: "rejected",
        name: "Rejected",
        list: []
      }
    });
    const Authored = () => {
      const [myLoops] = useAuthoredLoops();
      const {apps: myStats} = useAuthoredLoopStats();
      const handleLDK = () => Object(utils["e"])("https://olive.page.link/ldk");
      const loopsByStatus = Object(react["useMemo"])(() => {
        const loopObj = myLoops == null ? void 0 : myLoops.reduce((memo, loop) => {
          var _a, _b, _c, _d;
          if (((_b = (_a = loop.parent) == null ? void 0 : _a.status) == null ? void 0 : _b.value) === "suspended") {
            memo.suspended.list.push(loop);
          } else {
            (_d = (_c = memo[loop.status.value]) == null ? void 0 : _c.list) == null ? void 0 : _d.push(loop);
          }
          return memo;
        }, initialObj());
        return [
          loopObj == null ? void 0 : loopObj.pending,
          loopObj == null ? void 0 : loopObj.inReview,
          loopObj == null ? void 0 : loopObj.approved,
          loopObj == null ? void 0 : loopObj.suspended,
          loopObj == null ? void 0 : loopObj.rejected
        ];
      }, [myLoops]);
      Object(react["useEffect"])(() => {
        Object(tracking["h"])({
          category: tracking["a"],
          action: "My authored loops page viewed"
        });
      }, []);
      if (!myLoops) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-full flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "h1 text-black my-6"
      }, "My Authored Loops"), (myLoops == null ? void 0 : myLoops.length) > 0 ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col"
      }, loopsByStatus.map(({name, id, list}) => list.length > 0 && /* @__PURE__ */ react_default.a.createElement("div", {
        key: id
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row justify-between items-center mb-4"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "h2 text-black"
      }, name)), list.map((loop) => /* @__PURE__ */ react_default.a.createElement(expandedAuthoredLoop, {
        className: "mb-6",
        key: loop.appId,
        loop,
        stats: myStats ? myStats[loop.appId] : {}
      }))))) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-full flex flex-col justify-center items-center mb-12"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black text-4xl font-semibold"
      }, "It looks like you haven\u2019t authored any loops yet"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-disabled"
      }, "Visit our", " ", /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleLDK,
        className: "text-primary hover:underline",
        title: "Open the Loop Development Kit website in an external browser"
      }, "Loop Development Kit (LDK)", " ", /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "text-xs",
        icon: "open_in_new"
      })), " ", "to get started developing and monetizing loops.")));
    };
    var authored = Authored;
    const MAX_SCREENSHOTS = 5;
    const LoopScreenshotsField = ({
      onUpload,
      onUploadSuccess,
      onDelete,
      setView,
      required
    }) => {
      const onFocus = Object(react["useCallback"])(setView("loopLibraryScreenshots", "details"), [
        setView
      ]);
      return /* @__PURE__ */ react_default.a.createElement(imagePicker, {
        label: `Loop Screenshots${required ? "*" : ""}`,
        name: "loopScreenshots",
        onFocus,
        onUpload,
        onUploadSuccess,
        onDelete,
        multiple: true,
        limit: MAX_SCREENSHOTS
      });
    };
    LoopScreenshotsField.propTypes = {
      onUpload: prop_types_default.a.func,
      onUploadSuccess: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var loopScreenshots = LoopScreenshotsField;
    var useArrowSelection = (list, onSelect, deps = [list]) => {
      const [index, setIndex] = Object(react["useState"])(-1);
      const [selected, setSelected] = Object(react["useState"])();
      Object(react["useEffect"])(() => {
        setIndex(-1);
      }, deps);
      Object(react["useEffect"])(() => {
        if (selected) {
          onSelect(...selected);
        }
      }, [selected]);
      const handleArrows = Object(react["useCallback"])((e) => {
        const code = e.which || e.keyCode;
        if ([38, 40].includes(code)) {
          e.preventDefault();
          if (code === 38) {
            if (index === -1) {
              setIndex(list.length - 1);
            } else {
              setIndex(index - 1);
            }
          } else if (code === 40) {
            if (index === list.length - 1) {
              setIndex(-1);
            } else {
              setIndex(index + 1);
            }
          }
        } else if (code === 13 && index > -1) {
          e.preventDefault();
          const {metaKey, ctrlKey} = e;
          setSelected([{metaKey, ctrlKey}, list[index]]);
        }
      }, [index, list]);
      return [index, handleArrows];
    };
    var select_defProp = Object.defineProperty;
    var select_hasOwnProp = Object.prototype.hasOwnProperty;
    var select_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var select_propIsEnum = Object.prototype.propertyIsEnumerable;
    var select_defNormalProp = (obj, key, value) => key in obj ? select_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var select_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (select_hasOwnProp.call(b, prop2))
          select_defNormalProp(a, prop2, b[prop2]);
      if (select_getOwnPropSymbols)
        for (var prop2 of select_getOwnPropSymbols(b)) {
          if (select_propIsEnum.call(b, prop2))
            select_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var select_rest = (source, exclude) => {
      var target = {};
      for (var prop2 in source)
        if (select_hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
          target[prop2] = source[prop2];
      if (source != null && select_getOwnPropSymbols)
        for (var prop2 of select_getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop2) < 0 && select_propIsEnum.call(source, prop2))
            target[prop2] = source[prop2];
        }
      return target;
    };
    const TAB_KEY = 9;
    const ESC_KEY = 27;
    const Select = (_a) => {
      var {className, label, options, name, onChange} = _a, props = select_rest(_a, ["className", "label", "options", "name", "onChange"]);
      const optionMenu = Object(react["useRef"])();
      const labelEl = Object(react["useRef"])();
      const inputEl = Object(react["useRef"])();
      const [selected, setSelected] = Object(react["useState"])({label: "", value: null});
      const [field, meta, {setValue, setTouched}] = Object(formik_esm["d"])(select_assign({
        name
      }, props));
      const focusedByMouse = Object(react["useRef"])(false);
      Object(react["useEffect"])(() => {
        if (meta == null ? void 0 : meta.initialValue) {
          const initialSelected = options.find((option) => option.value === meta.initialValue);
          setSelected(initialSelected);
        }
      }, [meta == null ? void 0 : meta.initialValue]);
      const [
        showingDropdown,
        showDropdown,
        hideDropdown,
        toggleDropdown
      ] = useToggle(false);
      const [focused, setFocused, unsetFocused] = useToggle();
      hooks_useClickOutside(optionMenu, hideDropdown);
      const select = Object(react["useCallback"])((option) => {
        setSelected(select_assign({}, option));
        setValue(option.value);
        hideDropdown();
        onChange(option);
      }, [field, options]);
      const [index, handleArrows] = useArrowSelection(options, (e, option) => select(option), [options]);
      const hasError = Object(react["useMemo"])(() => meta.touched && meta.error, [meta]);
      const renderSelectItem = Object(react["useCallback"])((option, i) => {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          role: "button",
          tabIndex: "-1",
          key: `${name}-option-${i}`,
          className: classnames_default()("hover:bg-primary", "hover:text-white", "px-6", "py-2", {"bg-primary text-white": index === i}),
          onClick: () => select(option)
        }, option.label);
      }, [options, name, index]);
      const onMouseDown = () => {
        focusedByMouse.current = true;
      };
      const onFocus = () => {
        setFocused();
        setTouched(false);
        if (!focusedByMouse.current) {
          showDropdown();
        }
      };
      const onClick = () => {
        focusedByMouse.current = false;
        toggleDropdown();
      };
      const onBlur = () => {
        unsetFocused();
        setTimeout(() => setTouched(true), 100);
      };
      const onKeyDown = (e) => {
        if (showingDropdown && (e.which === TAB_KEY || e.which === ESC_KEY)) {
          hideDropdown();
        }
        handleArrows(e);
      };
      useSurrogateFocus(labelEl, inputEl, "click");
      return /* @__PURE__ */ react_default.a.createElement("div", {
        ref: optionMenu
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, label && /* @__PURE__ */ react_default.a.createElement("label", {
        ref: labelEl,
        className: classnames_default()("floating-label", {
          active: focused,
          filled: selected.label,
          "text-error": hasError
        }),
        htmlFor: name
      }, label), /* @__PURE__ */ react_default.a.createElement("input", select_assign(select_assign(select_assign({
        ref: inputEl,
        className: classnames_default()(className, "w-full", "form-control", "cursor-pointer", "inline-block", {"border-error": hasError})
      }, props), field), {
        value: selected.label,
        onClick,
        onFocus,
        onBlur,
        onMouseDown,
        onKeyDown
      })), /* @__PURE__ */ react_default.a.createElement("span", {
        role: "button",
        tabIndex: "-1",
        className: "absolute right-0 mr-2 mt-2 cursor-pointer",
        onClick
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "text-grey-700 text-3xl",
        icon: "arrow_drop_down"
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("absolute", "z-50", "rounded", "bg-white", "w-1/3", "shadow-2xl", "py-4", "px-0", "border", "border-grey-100", "cursor-pointer", "mt-2", {hidden: !showingDropdown})
      }, options.map(renderSelectItem)), /* @__PURE__ */ react_default.a.createElement(formik_esm["a"], {
        name
      }, (msg) => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "pt-2 text-error"
      }, msg)));
    };
    Select.propTypes = {
      className: classNameSchema,
      label: prop_types_default.a.string,
      name: prop_types_default.a.string.isRequired,
      type: prop_types_default.a.string,
      options: prop_types_default.a.arrayOf(prop_types_default.a.shape({
        label: prop_types_default.a.string,
        value: prop_types_default.a.string
      })).isRequired,
      onChange: prop_types_default.a.func,
      value: prop_types_default.a.string
    };
    var fields_select = Select;
    const defaultOptions = [
      {
        label: "My Organization",
        value: "organization"
      },
      {
        label: "Publicly available",
        value: "public"
      }
    ];
    const AccessField = ({val, onChange, setView, required}) => {
      const {openChannelProfile} = Object(react["useContext"])(AuthContext);
      const options = Object(react["useMemo"])(() => {
        var _a, _b;
        return [
          ...defaultOptions,
          ...(((_b = (_a = openChannelProfile == null ? void 0 : openChannelProfile.developer) == null ? void 0 : _a.customData) == null ? void 0 : _b.publishOnBehalf) || []).map((org) => ({
            label: org.developerId,
            value: org.developerId
          }))
        ];
      }, [openChannelProfile]);
      const wrapChange = Object(react["useCallback"])((option) => onChange(option.value), [
        onChange
      ]);
      const onFocus = Object(react["useCallback"])(setView("access", "card"), [setView]);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(fields_select, {
        name: "access",
        label: `Access${required ? "*" : ""}`,
        onChange: wrapChange,
        value: val,
        options,
        onFocus
      }));
    };
    AccessField.propTypes = {
      val: prop_types_default.a.string,
      onChange: prop_types_default.a.func,
      setView: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_access = AccessField;
    const metadataSection_columnWidth = {width: "49%"};
    const metadataSection_defaultName = "Your Loop";
    const metadataSection_defaultDescription = "This loop can do some amazing things.";
    const metadataSection_helptext = {
      name: `Give your loop a short, simple, and memorable name, something that users can easily identify. The name can include uppercase and lowercase letters, numbers, spaces, and dash (-), period (.) or amphora (@) symbols`,
      description: `Describe your loop in a sentence or less. The short description is one of the first things users will see about your loop, and it will be used when someone searches for loops in the library.`,
      loopLibraryLogo: `Choose a logo that will represent your loop in the library. Square images work best. 250px max width, jpg, png, and ico file types are accepted, should not exceed 2MB.`,
      loopWhisperLogo: `Choose a logo that will appear on your loop's whispers. This can be the same as the loop logo, but it displays much smaller. Watch for too many fine details. 100px max width (square images work best), jpg, png, and ico file types are accepted, should not exceed 2MB.`,
      documentation: `Let users know about the features of your loop and the benefits of using it. You can also include documentation, terms of service or privacy policy info. Use markup to create links and add formatting for headers, bold, italic, and underlined fonts.`,
      colorStrip: `This color appears on the top edge of all whispers generated by your loop, unifying your organization's brand and helping users distinguish your loop from other loops.`,
      loopLibraryScreenshots: `Add up to 5 screenshots of your loop and its whispers to give users a sneak peek of what to expect. 250px max width, jpg and png file types are accepted, should not exceed 2MB.`,
      access: `Loops can be publicly accessible to all users or restricted to users within your organization.`
    };
    const metadataSection_introText = {
      card: `The Loop card will appear in the Loop Library.`,
      details: `Loop details will appear in the Loop Library, along with ratings and reviews on your Loop\u2019s detail page.`,
      whisper: `Whispers will be displayed in the Olive Helps sidebar.`
    };
    const metadataSection_reducer = (state, {type, payload}) => {
      switch (type) {
        case "add":
          return [...state, ...payload];
        case "delete":
          state.splice(payload, 1);
          return [...state];
        default:
          throw new Error("Unknown type for screenshot reducer");
      }
    };
    const metadataSection_MetadataSection = ({initialValues: iv}) => {
      var _a;
      const {openChannelProfile} = Object(react["useContext"])(AuthContext);
      const {developer} = openChannelProfile || {};
      const [activeView, setActiveView] = Object(react["useState"])("card");
      const [activeField, setActiveField] = Object(react["useState"])("name");
      const updateView = Object(react["useCallback"])((field, view) => () => {
        if (field && field !== activeField) {
          setActiveField(field);
        }
        if (view && view !== activeView) {
          setActiveView(view);
        }
      }, [activeView, activeField]);
      const [name, updateName] = useFieldState(iv.name);
      const [description, updateDescription] = useFieldState(iv.description);
      const [documentation, setDocumentation] = Object(react["useState"])(iv.documentation);
      const [colorStrip, updateColorStrip] = useFieldState(iv.colorStrip);
      const [logo, setLogo] = Object(react["useState"])(iv.loopLibraryLogo);
      const [screenshots, dispatch] = Object(react["useReducer"])(metadataSection_reducer, iv.loopScreenshots || []);
      const [whisperLogo, setWhisperLogo] = Object(react["useState"])(iv.loopWhisperLogo);
      const [access, setAccess] = Object(react["useState"])(iv.access);
      const [logoPending, setLogoPending, unsetLogoPending] = useToggle();
      const [
        screenshotsPending,
        setScreenshotsPending,
        unsetScreenshotsPending
      ] = useToggle();
      const [whisperPending, setWhisperPending, unsetWhisperPending] = useToggle();
      const onScreenshotsUpload = Object(react["useCallback"])(() => {
        setScreenshotsPending(true);
      }, [screenshots, screenshotsPending]);
      const onLogoUploadSuccess = Object(react["useCallback"])(([file]) => {
        unsetLogoPending();
        setLogo(file);
      }, [logo, logoPending]);
      const onScreenshotsUploadSuccess = Object(react["useCallback"])((files) => {
        unsetScreenshotsPending();
        dispatch({type: "add", payload: files});
      }, [screenshots, screenshotsPending]);
      const onWhisperUploadSuccess = Object(react["useCallback"])(([file]) => {
        unsetWhisperPending();
        setWhisperLogo(file);
      }, [whisperLogo, whisperPending]);
      const onLoopLogoDelete = Object(react["useCallback"])(() => setLogo(""), [logo]);
      const onScreenshotDelete = Object(react["useCallback"])((index) => dispatch({type: "delete", payload: index}), [screenshots]);
      const onWhisperDelete = Object(react["useCallback"])(() => setWhisperLogo(""), [whisperLogo]);
      const roundedTop = (tabName) => ({
        "rounded-t-12 bg-primary-dark h-1 w-full -mt-1": activeView === tabName
      });
      return /* @__PURE__ */ react_default.a.createElement(collapsibleSection, {
        title: "Loop Metadata",
        startOpen: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "py-6 flex flex-row justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-4",
        style: metadataSection_columnWidth
      }, /* @__PURE__ */ react_default.a.createElement(submit_name, {
        val: name,
        onChange: updateName,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_description, {
        val: description,
        onChange: updateDescription,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_documentation, {
        val: documentation,
        onChange: setDocumentation,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_colorStrip, {
        val: colorStrip,
        onChange: updateColorStrip,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_loopLogo, {
        onUpload: setLogoPending,
        onUploadSuccess: onLogoUploadSuccess,
        onDelete: onLoopLogoDelete,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(loopScreenshots, {
        onUpload: onScreenshotsUpload,
        onUploadSuccess: onScreenshotsUploadSuccess,
        onDelete: onScreenshotDelete,
        setView: updateView
      }), /* @__PURE__ */ react_default.a.createElement(submit_whisperLogo, {
        onUpload: setWhisperPending,
        onUploadSuccess: onWhisperUploadSuccess,
        onDelete: onWhisperDelete,
        setView: updateView,
        required: true
      }), /* @__PURE__ */ react_default.a.createElement(submit_access, {
        val: access,
        onChange: setAccess,
        setView: updateView,
        required: true
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative",
        style: metadataSection_columnWidth
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-4 bg-primary-pale p-6"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "font-bold h2 hidden md:block"
      }, "Preview"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "hidden md:flex flex-row items-center space-x-6 border-b border-primary-dark"
      }, /* @__PURE__ */ react_default.a.createElement("h4", {
        className: classnames_default()("px-2", "w-32", "text-center", {
          "text-primary-dark": activeView === "card"
        })
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mb-2 focus:outline-none",
        onClick: updateView(null, "card")
      }, "Loop Card"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(roundedTop("card"))
      })), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: classnames_default()("px-2", "w-32", "text-center", {
          "text-primary-dark": activeView === "details"
        })
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mb-2 focus:outline-none",
        onClick: updateView(null, "details")
      }, "Loop Details"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(roundedTop("details"))
      })), /* @__PURE__ */ react_default.a.createElement("h4", {
        className: classnames_default()("px-2", "w-32", "text-center", {
          "text-primary-dark": activeView === "whisper"
        })
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mb-2 focus:outline-none",
        onClick: updateView(null, "whisper")
      }, "Whisper"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(roundedTop("whisper"))
      }))), /* @__PURE__ */ react_default.a.createElement("div", null, metadataSection_introText[activeView]), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "hidden md:flex md:flex-col items-center"
      }, activeView === "card" && /* @__PURE__ */ react_default.a.createElement(fakeCard, {
        name: name || metadataSection_defaultName,
        description: description || metadataSection_defaultDescription,
        logo,
        logoPending,
        orgName: (_a = developer == null ? void 0 : developer.org) == null ? void 0 : _a.name
      }), activeView === "details" && /* @__PURE__ */ react_default.a.createElement(fakeDetails, {
        documentation,
        screenshots,
        screeshotsPending: screenshotsPending
      }), activeView === "whisper" && /* @__PURE__ */ react_default.a.createElement(fakeWhisper, {
        logo: whisperLogo,
        logoPending: whisperPending,
        colorStrip,
        name: name || metadataSection_defaultName
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-black text-sm mt-8 px-2"
      }, metadataSection_helptext[activeField])))));
    };
    metadataSection_MetadataSection.propTypes = {
      initialValues: prop_types_default.a.object
    };
    var submit_metadataSection = metadataSection_MetadataSection;
    const LoopDirectory = ({set, onDelete, required}) => {
      const [, {initialValue}, {setTouched}] = Object(formik_esm["d"])({
        name: "semver"
      });
      const handleChange = (arg) => {
        if (initialValue) {
          setTouched(true);
        }
        set(arg);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(directoryPicker, {
        label: `Directory${required ? "*" : ""}`,
        name: "loopDirectory",
        onDelete,
        onChange: handleChange
      }));
    };
    LoopDirectory.propTypes = {
      set: prop_types_default.a.func,
      onDelete: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_loopDirectory = LoopDirectory;
    const SemverField = ({val, onChange, required}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-5"
      }, /* @__PURE__ */ react_default.a.createElement(input, {
        name: "semver",
        type: "text",
        label: `Version${required ? "*" : ""}`,
        onChange,
        value: val
      }));
    };
    SemverField.propTypes = {
      val: prop_types_default.a.string,
      onChange: prop_types_default.a.func,
      required: prop_types_default.a.bool
    };
    var submit_semver = SemverField;
    const directorySection_columnWidth = {width: "49%"};
    const DirectorySection = ({required, initialValues: iv}) => {
      const [loopDirectory, setLoopDirectory] = Object(react["useState"])("");
      const [semver, setSemver] = useFieldState(iv.semver || "");
      const onDelete = Object(react["useCallback"])(() => setLoopDirectory(""), [loopDirectory]);
      return /* @__PURE__ */ react_default.a.createElement(collapsibleSection, {
        title: "Loop Directory",
        subtitle: iv.semver ? `v ${iv.semver}` : null,
        startOpen: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "py-6 flex flex-row justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: directorySection_columnWidth
      }, /* @__PURE__ */ react_default.a.createElement(submit_loopDirectory, {
        set: setLoopDirectory,
        onDelete,
        required
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        style: directorySection_columnWidth
      }, loopDirectory && /* @__PURE__ */ react_default.a.createElement(submit_semver, {
        val: semver,
        onChange: setSemver,
        required: true
      }))));
    };
    DirectorySection.propTypes = {
      initialValues: prop_types_default.a.object,
      required: prop_types_default.a.bool
    };
    var directorySection = DirectorySection;
    var developer_submit_hasOwnProp = Object.prototype.hasOwnProperty;
    var developer_submit_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var developer_submit_propIsEnum = Object.prototype.propertyIsEnumerable;
    var submit_rest = (source, exclude) => {
      var target = {};
      for (var prop2 in source)
        if (developer_submit_hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
          target[prop2] = source[prop2];
      if (source != null && developer_submit_getOwnPropSymbols)
        for (var prop2 of developer_submit_getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop2) < 0 && developer_submit_propIsEnum.call(source, prop2))
            target[prop2] = source[prop2];
        }
      return target;
    };
    var developer_submit_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const submit_fs = window.require("fs");
    const submit_crypto = window.require("crypto");
    const developer_submit_path = window.require("path");
    const sha256SumFile = (fileBuffer) => {
      return submit_crypto.createHash("sha256").update(fileBuffer).digest("hex");
    };
    es["a"](es["e"], "semver", function validateSemver(previous) {
      const prev = (previous == null ? void 0 : previous.startsWith("v")) ? previous.substring(1) : previous;
      return this.test({
        name: "semver",
        message: prev ? `Version must be a valid semantic version greater than ${prev}. See https://semver.org/ for more information.` : "Version must be a valid semantic version. See https://semver.org/ for more information.",
        test: (value) => {
          if (value && prev) {
            return semver_default.a.valid(value) && semver_default.a.gt(value, prev);
          }
          if (value) {
            return semver_default.a.valid(value);
          }
          return true;
        }
      });
    });
    const submit_HEX_PATTERN = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    const developer_submit_Submit = () => {
      const {openChannelProfile: oc} = Object(react["useContext"])(AuthContext);
      const {makeToast} = Object(loopLibrary_context["i"])();
      const {appId, version} = Object(react_router["i"])();
      const [appToSubmit] = appId && version ? useFetchLoopByVersion(appId, version) : [];
      const [pending, setPending] = Object(react["useState"])();
      const [submitted, setSubmitted] = Object(react["useState"])();
      const iv = Object(react["useMemo"])(() => {
        var _a, _b;
        const {customData = {}, name = ""} = appToSubmit || {};
        const allowedEditors = (customData == null ? void 0 : customData.allowedEditors) || [];
        if (((customData == null ? void 0 : customData.authorId) || (oc == null ? void 0 : oc.developer.id)) && !allowedEditors.find((editor) => editor.developerAccountId === customData.authorId)) {
          allowedEditors.push({
            developerAccountId: customData.authorId || (oc == null ? void 0 : oc.developer.id)
          });
        }
        const getSemver = () => {
          var _a2, _b2;
          if ((customData == null ? void 0 : customData.semver) instanceof Object) {
            const winVer = (_a2 = customData == null ? void 0 : customData.semver) == null ? void 0 : _a2.windows;
            const macVer = (_b2 = customData == null ? void 0 : customData.semver) == null ? void 0 : _b2.mac;
            if (winVer && macVer) {
              return semver_default.a.gt(winVer, macVer) ? winVer : macVer;
            }
            return winVer || macVer;
          }
          return customData == null ? void 0 : customData.semver;
        };
        return {
          name,
          description: (customData == null ? void 0 : customData.description) || "",
          documentation: (customData == null ? void 0 : customData.documentation) || "",
          colorStrip: (customData == null ? void 0 : customData.colorStrip) || "#73ff57",
          loopLibraryLogo: (customData == null ? void 0 : customData.loopLibraryLogo) || "",
          loopScreenshots: (customData == null ? void 0 : customData.loopScreenshots) || [],
          loopWhisperLogo: (customData == null ? void 0 : customData.loopWhisperLogo) || "",
          semver: getSemver() || "",
          semverWindows: ((_a = customData == null ? void 0 : customData.semver) == null ? void 0 : _a.windows) || "",
          semverMac: ((_b = customData == null ? void 0 : customData.semver) == null ? void 0 : _b.mac) || "",
          allowedEditors,
          access: (customData == null ? void 0 : customData.access) || "",
          version: (appToSubmit == null ? void 0 : appToSubmit.version) || void 0,
          specification: LATEST_SPECIFICATION,
          SHA256Checksum: (customData == null ? void 0 : customData.SHA256Checksum) || ""
        };
      }, [appToSubmit, appId, oc]);
      const schema = Object(react["useMemo"])(() => es["d"]().shape({
        name: es["e"]().required("This field is required.").max(80, "Name cannot exceed 80 characters."),
        description: es["e"]().required("This field is required.").max(110, "Description cannot exceed 110 characters."),
        documentation: es["e"]().required("This field is required.").max(1e4, "Documentation cannot exceed 10,000 charaters. If you need additional documentation, considering linking to an external page like a github repo."),
        colorStrip: es["e"]().required("This field is required.").matches(submit_HEX_PATTERN, "Color strip must be a 3 or 6 digit hex code."),
        loopLibraryLogo: es["e"]().required("This field is required."),
        loopScreenshots: es["b"]().of(es["e"]()),
        loopWhisperLogo: es["e"]().required("This field is required."),
        loopDirectory: appId ? es["e"]() : es["e"]().required("This field is required."),
        semver: appId ? es["e"]().when(["loopDirectory"], {
          is: Boolean,
          then: es["e"]().semver(iv.semver).required("This field is required.")
        }) : es["e"]().semver().when(["loopDirectory"], {
          is: Boolean,
          then: es["e"]().required("This field is required.")
        }),
        access: es["e"]().required("This field is required."),
        version: appId ? es["c"]().required() : es["c"](),
        specification: es["e"]().matches(/^\d+$/).required(),
        allowedEditors: es["b"]().of(es["d"]().shape({
          developerAccountId: es["e"]()
        })).required(),
        SHA256Checksum: es["e"]()
      }), [appId, iv]);
      const onSubmit = Object(react["useCallback"])((body) => developer_submit_async(void 0, null, function* () {
        setPending(true);
        const {loopDirectory: loopdir} = body, rest = submit_rest(body, ["loopDirectory"]);
        if (loopdir) {
          delete rest.semverMac;
          delete rest.semverWindows;
          const filename = developer_submit_path.join(loopdir, EXECUTABLE_NAME);
          try {
            submit_fs.statSync(filename);
          } catch (e) {
            setPending(false);
            return makeToast(`Could not find "${EXECUTABLE_NAME}" in directory`);
          }
          const fileBuffer = submit_fs.readFileSync(filename);
          rest.SHA256Checksum = sha256SumFile(fileBuffer);
          console.info(`checksum calculated: ${rest.SHA256Checksum}`);
          rest.webpackMetadata = getWebpackMetadata(fileBuffer);
        }
        try {
          const url = "/library/loop" + (appId ? `/${appId}` : "");
          const verb = appId ? "PUT" : "POST";
          const {
            presignedUrl,
            name,
            version: newVersion,
            appId: newId
          } = yield Object(utils_fetch["a"])(url, verb, rest);
          console.info("App submitted to open channel");
          if (presignedUrl) {
            yield Object(messaging["S"])(loopdir, presignedUrl);
          }
          console.info("Executable storage complete");
          Object(tracking["h"])({
            category: tracking["a"],
            action: appId ? "Loop update submitted" : "Loop submitted",
            label: `appId=${newId},appNmae=${name}`
          });
          setPending(false);
          setSubmitted({appId: newId, version: newVersion});
        } catch (e) {
          setPending(false);
          makeToast(`Error ${appId ? "updating" : "submitting"} loop`, "error");
          console.error("Error submitting loop update", e);
        }
        return null;
      }), [appToSubmit]);
      if (appId && !appToSubmit) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      if (submitted) {
        return /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
          to: `/developer/submitted/${submitted.appId}/${submitted.version}`
        });
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "h1 text-black w-full"
      }, appId ? "Update Loop" : "Submit New Loop"), /* @__PURE__ */ react_default.a.createElement(formik_esm["c"], {
        initialValues: iv,
        validateOnMount: true,
        validationSchema: schema,
        onSubmit
      }, ({handleSubmit, isValid}) => /* @__PURE__ */ react_default.a.createElement(formik_esm["b"], {
        onSubmit: handleSubmit
      }, /* @__PURE__ */ react_default.a.createElement(submit_metadataSection, {
        initialValues: iv
      }), /* @__PURE__ */ react_default.a.createElement(directorySection, {
        initialValues: iv,
        required: !appId
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-t border-grey-250 pt-2"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-36 flex justify-center mt-8"
      }, pending ? /* @__PURE__ */ react_default.a.createElement(spinner["a"], null) : /* @__PURE__ */ react_default.a.createElement("button", {
        type: "submit",
        className: classnames_default()("btn btn-primary py-4", {
          "btn-disabled cursor-not-allowed": !isValid
        }),
        disabled: !isValid
      }, "Submit Loop"))))));
    };
    var developer_submit = developer_submit_Submit;
    const SubmissionComplete = () => {
      const {appId, version} = Object(react_router["i"])();
      const [loop] = useFetchLoopByVersion(appId, version);
      if (!loop) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full flex flex-col items-left space-y-4"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black h1 font-semibold text-4xl"
      }, "Your Loop has been submitted for review."), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col space-y-10"
      }, /* @__PURE__ */ react_default.a.createElement("p", {
        className: "text-grey-paragraph"
      }, "Our team has received your Loop, and we are getting started on the review process. You will receive emails from us to keep updated on our progress. You can also check the status of your Loop in", " ", /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/authored",
        className: "text-primary underline"
      }, "My Authored Loops.")), /* @__PURE__ */ react_default.a.createElement(expandedAuthoredLoop, {
        loop,
        hideReviews: true,
        hideMenu: true
      }), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/submit",
        className: "text-primary"
      }, "Submit Another Loop"))));
    };
    var submissionComplete = SubmissionComplete;
    var lib = __webpack_require__(723);
    var lib_default = /* @__PURE__ */ __webpack_require__.n(lib);
    var slick = __webpack_require__(1082);
    var slick_theme = __webpack_require__(1084);
    var supercharge = __webpack_require__.p + "images/849fa7898397becba7773207314db300.png";
    var filter = __webpack_require__(132);
    var remove = __webpack_require__(1332);
    var find = __webpack_require__(1370);
    var propEq = __webpack_require__(1333);
    var Chip = __webpack_require__(1376);
    const filters_options = [
      {
        label: "Allowed by my organization",
        func: (available, oc) => {
          var _a, _b;
          if (!((_b = (_a = oc == null ? void 0 : oc.org) == null ? void 0 : _a.customData) == null ? void 0 : _b.allowedLoops))
            return [];
          return Object(filter["a"])(({appId}) => {
            var _a2, _b2, _c, _d;
            return ((_b2 = (_a2 = oc == null ? void 0 : oc.org) == null ? void 0 : _a2.customData) == null ? void 0 : _b2.allowedLoops) && !!((_d = (_c = oc == null ? void 0 : oc.org) == null ? void 0 : _c.customData) == null ? void 0 : _d.allowedLoops[appId]);
          }, available);
        }
      }
    ];
    const BrowseFilters = ({filters, setFilters}) => {
      const [anchorEl, setAnchorEl] = Object(react["useState"])(null);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleSetFilter = (option) => () => {
        setFilters((prev) => [...prev, option]);
        handleClose();
      };
      const handleFilterDelete = (index) => () => {
        setFilters((prev) => Object(remove["a"])(index, 1, prev));
      };
      return /* @__PURE__ */ react_default.a.createElement("header", {
        className: "sticky w-full -top-6 z-10"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative w-full box-content flex items-center bg-white py-3 -left-2 px-2"
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className: "font-bold"
      }, "Filter"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "ml-2"
      }, filters.map((item, index) => /* @__PURE__ */ react_default.a.createElement(Chip["a"], {
        key: item.label,
        color: "primary",
        size: "small",
        label: item.label,
        variant: "outlined",
        onDelete: handleFilterDelete(index),
        className: "mr-2"
      })), /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        size: "small",
        onClick: handleClick
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "add",
        className: "text-xl cursor-pointer"
      })), /* @__PURE__ */ react_default.a.createElement(Menu["a"], {
        anchorEl,
        keepMounted: true,
        open: !!anchorEl,
        onClose: handleClose
      }, filters_options.map((option) => /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        key: option.label,
        onClick: handleSetFilter(option),
        disabled: !!Object(find["a"])(Object(propEq["a"])("label", option.label), filters)
      }, option.label))))));
    };
    BrowseFilters.propTypes = {
      filters: prop_types_default.a.array.isRequired,
      setFilters: prop_types_default.a.func.isRequired
    };
    var content_filters = BrowseFilters;
    var browse_defProp = Object.defineProperty;
    var browse_hasOwnProp = Object.prototype.hasOwnProperty;
    var browse_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var browse_propIsEnum = Object.prototype.propertyIsEnumerable;
    var browse_defNormalProp = (obj, key, value) => key in obj ? browse_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var browse_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (browse_hasOwnProp.call(b, prop2))
          browse_defNormalProp(a, prop2, b[prop2]);
      if (browse_getOwnPropSymbols)
        for (var prop2 of browse_getOwnPropSymbols(b)) {
          if (browse_propIsEnum.call(b, prop2))
            browse_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var browse_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 1e3,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 8e3
    };
    const Browse = () => {
      var _a, _b, _c, _d;
      const {osName} = Object(context_config["e"])();
      const {available, set} = Object(loopLibrary_context["i"])();
      const {isDeveloper, openChannelProfile: oc} = Object(react["useContext"])(AuthContext);
      const [isRefreshing, setIsRefreshing] = Object(react["useState"])(false);
      const [filters, setFilters] = Object(react["useState"])([]);
      const [filteredLoops, setFilteredLoops] = Object(react["useState"])([]);
      const refreshLoops = () => browse_async(void 0, null, function* () {
        try {
          setIsRefreshing(true);
          const list = yield Object(utils_fetch["a"])(`/library/loops?os=${osName}`);
          set("available")(list);
        } catch (e) {
        }
        setIsRefreshing(false);
      });
      Object(react["useEffect"])(() => {
        Object(tracking["h"])({
          category: tracking["a"],
          action: "Browse page viewed"
        });
      }, []);
      Object(react["useEffect"])(() => {
        let result = available;
        filters.forEach((item) => {
          result = item.func(result, oc);
        });
        setFilteredLoops(result);
      }, [available, filters]);
      const handleLearnMore = Object(react["useCallback"])(() => Object(utils["e"])("https://olivehelps.com"), []);
      const handleSuggestLoopIdea = Object(react["useCallback"])(() => Object(utils["e"])("https://docs.google.com/forms/d/e/1FAIpQLScXwKoPNpsP5NQEbqCoriwRXfX7gggMTw6qdXwj2_ofy539cg/viewform"), []);
      if (!available) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-full flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mx-auto mb-6 mt-2 w-full items-center"
      }, /* @__PURE__ */ react_default.a.createElement(lib_default.a, browse_assign({}, settings), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full !block"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-full"
      }, /* @__PURE__ */ react_default.a.createElement("img", {
        className: "w-full",
        src: supercharge,
        alt: "Olive Helps Supercharge Human Potential"
      }))))), (filteredLoops == null ? void 0 : filteredLoops.length) > 0 ? /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row justify-between items-center"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: classnames_default()("h1 text-black", {
          "mt-6 mb-0": (_a = oc == null ? void 0 : oc.permissions) == null ? void 0 : _a.canEditOrg,
          "my-6": !((_b = oc == null ? void 0 : oc.permissions) == null ? void 0 : _b.canEditOrg)
        })
      }, "Loop Library"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "prod:hidden qa:hidden local:block dev:block flex items-center"
      }, isRefreshing && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center"
      }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], {
        className: "text-xl cursor-pointer mt-4"
      })), !isRefreshing && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center",
        tabIndex: "-1",
        role: "button",
        onClick: refreshLoops
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "refresh",
        className: "text-xl cursor-pointer mt-4"
      })))), ((_c = oc == null ? void 0 : oc.permissions) == null ? void 0 : _c.canEditOrg) && /* @__PURE__ */ react_default.a.createElement(content_filters, {
        filters,
        setFilters
      }), /* @__PURE__ */ react_default.a.createElement("section", null, /* @__PURE__ */ react_default.a.createElement(loopGrid, null, Object(utils["g"])((list) => {
        return list.map((loop) => /* @__PURE__ */ react_default.a.createElement(loopCard, {
          key: loop.appId,
          loop
        }));
      })(filteredLoops)))) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full flex flex-1 flex-col justify-center items-center"
      }, ((_d = oc == null ? void 0 : oc.permissions) == null ? void 0 : _d.canEditOrg) && /* @__PURE__ */ react_default.a.createElement(content_filters, {
        filters,
        setFilters
      }), /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "text-black text-4xl font-semibold"
      }, "It looks like there aren't any Loops available"), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "mb-16 text-grey-disabled"
      }, "Stay up-to-date with the latest about", " ", /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleLearnMore,
        className: "text-primary hover:underline",
        title: "Open in an external browser"
      }, "Olive Helps", /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "text-xs",
        icon: "open_in_new"
      })), ".")), /* @__PURE__ */ react_default.a.createElement("section", {
        className: "flex justify-around mt-12 sm:flex-wrap sm:text-center md:flex-nowrap border-t border-grey-300 pt-4"
      }, !isDeveloper && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col p-8 xs:text-center xs:items-center md:text-left md:items-start xs:w-10/12 lg:w-3/4"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "w-20 h-20",
        icon: "code"
      }), /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-black font-bold h2 my-6"
      }, "Want to become a Loop Author?"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-paragraph"
      }, "Develop and monetize Loops with an easy-to-use Loop Development Kit (LDK) and ensure steady revenue streams in a new channel to market. Whether you're a technology company or consultant, Olive Helps increase your market reach and enhance your customer engagement."), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "my-8"
      }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/becomeAuthor"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "text-primary text-lg font-bold hover:underline text-left",
        title: "Open the Become a Loop Author page"
      }, "Become a Loop Author")))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("flex flex-col p-8 xs:text-center xs:items-center xs:w-10/12 lg:w-3/4", {
          "md:text-left md:items-start": !isDeveloper
        })
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        className: "w-20 h-20",
        icon: "lightbulb"
      }), /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-black font-bold h2 my-6"
      }, "Have an idea for a Loop?"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-paragraph"
      }, "The possibilities are endless, you only have to imagine it. If you don\u2019t see the loop you are looking for or if you have an idea for a new loop, send it our way."), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "my-8"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleSuggestLoopIdea,
        className: "text-primary text-lg font-bold hover:underline",
        title: "Open form in an external browser"
      }, "Suggest a Loop Idea")))));
    };
    var browse = Browse;
    var es_compose = __webpack_require__(46);
    var sortBy = __webpack_require__(116);
    var toLower = __webpack_require__(78);
    var prop = __webpack_require__(66);
    var query_string = __webpack_require__(462);
    var query_string_default = /* @__PURE__ */ __webpack_require__.n(query_string);
    var search_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const sortPlugins = (render) => Object(es_compose["a"])(render, Object(sortBy["a"])(Object(es_compose["a"])(toLower["a"], Object(prop["a"])("name"))));
    const Search = () => {
      const {osName} = Object(context_config["e"])();
      const {searchTerm} = Object(react_router["i"])();
      const [loops, setLoops] = Object(react["useState"])([]);
      const [loading, setLoading] = Object(react["useState"])(false);
      Object(react["useEffect"])(() => {
        (() => search_async(void 0, null, function* () {
          setLoading(true);
          if ((searchTerm == null ? void 0 : searchTerm.length) >= 1) {
            try {
              const query = query_string_default.a.stringify({
                os: osName,
                text: searchTerm
              });
              setLoops(yield Object(utils_fetch["a"])(`/library/search?${query}`));
              Object(tracking["h"])({
                category: tracking["a"],
                action: "Loop search",
                label: `searchTerm=${searchTerm}`
              });
            } catch (error) {
              console.error(error);
              setLoops([]);
            }
          } else {
            setLoops([]);
          }
          setLoading(false);
        }))();
      }, [searchTerm]);
      const renderLoops = () => /* @__PURE__ */ react_default.a.createElement(loopGrid, null, sortPlugins((list) => {
        return list.map((loop) => /* @__PURE__ */ react_default.a.createElement(loopCard, {
          key: loop.appId,
          loop,
          inSearch: true
        }));
      })(loops));
      const renderEmpty = () => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-full flex flex-col justify-center items-center font-bold text-base"
      }, /* @__PURE__ */ react_default.a.createElement("h1", null, (searchTerm == null ? void 0 : searchTerm.length) >= 1 ? /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("q", {
        className: "break-word"
      }, searchTerm), " did not return any results") : /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, "What would you like to search for?")), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "text-grey-disabled"
      }, "Try a new search or return to the", " ", /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        className: "text-primary mt-8",
        to: "/browse"
      }, "Browse Loops"), " ", "page"));
      const renderLoading = () => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-full flex flex-col justify-center items-center"
      }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      const render = () => {
        let view;
        if (loading) {
          view = renderLoading();
        } else if ((loops == null ? void 0 : loops.length) >= 1) {
          view = renderLoops();
        } else {
          view = renderEmpty();
        }
        return view;
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "h-full flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "font-bold"
      }, (searchTerm == null ? void 0 : searchTerm.length) >= 1 ? /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, "Search: ", /* @__PURE__ */ react_default.a.createElement("q", {
        className: "break-word"
      }, searchTerm)) : /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, "No search term")), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex-grow"
      }, render()));
    };
    var content_search = Search;
    const Home = () => {
      const {isDeveloper, hasFetched} = Object(react["useContext"])(AuthContext);
      if (!hasFetched) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      if (isDeveloper) {
        return /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
          to: "/developer/authored"
        });
      }
      return /* @__PURE__ */ react_default.a.createElement(react_router["a"], {
        to: "/browse"
      });
    };
    var home = Home;
    const handleOliveLogo = () => Object(utils["e"])("https://oliveai.com/");
    const handleInstagram = () => Object(utils["e"])("https://www.instagram.com/oliveai__/");
    const handleLinkedIn = () => Object(utils["e"])("https://www.linkedin.com/company/hireolive/");
    const handleHelp = () => Object(utils["e"])("https://olive.page.link/olive-helps-faq");
    const Footer = () => {
      const isMd = useDeviceSize("md");
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-between pb-4 pt-20 md:px-6"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center space-x-4 md:space-x-6 whitespace no-wrap"
      }, isMd ? /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        onClick: handleOliveLogo,
        icon: "olive-logo",
        className: "flex items-center text-primary w-16"
      }) : /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        onClick: handleOliveLogo,
        icon: "olive-o",
        className: "flex items-center text-primary w-4"
      }), /* @__PURE__ */ react_default.a.createElement("div", null, "Copyright 2021"), /* @__PURE__ */ react_default.a.createElement("a", {
        role: "button",
        tabIndex: 0,
        className: "hover:underline",
        target: "_blank",
        rel: "noreferrer",
        href: TERMS_OF_SERVICE
      }, "Terms of Service"), /* @__PURE__ */ react_default.a.createElement("a", {
        role: "button",
        tabIndex: 0,
        className: "hover:underline",
        onClick: handleHelp
      }, "Help")), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center xs:ml-4 md:ml-0 space-x-4 md:space-x-6"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        onClick: handleLinkedIn,
        icon: "linkedin"
      }), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        onClick: handleInstagram,
        icon: "instagram"
      })));
    };
    var footer = Footer;
    class boundary_ContentBoundary extends react_default.a.Component {
      static getDerivedStateFromError(error) {
        return {hasError: true, error};
      }
      constructor(props) {
        super(props);
        this.state = {hasError: false};
      }
      componentDidUpdate(prevProps) {
        this.checkNewLocation(prevProps);
      }
      checkNewLocation(prevProps) {
        const {hasError} = this.state;
        const {location} = this.props;
        if (hasError && prevProps.location.pathname !== location.pathname) {
          this.setState({hasError: false});
        }
      }
      render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
          return /* @__PURE__ */ react_default.a.createElement("div", {
            className: "w-full m-5 p-5 border border-error-light text-error-light rounded"
          }, /* @__PURE__ */ react_default.a.createElement("span", null, "Something went wrong."));
        }
        return children;
      }
    }
    boundary_ContentBoundary.propTypes = {
      children: prop_types_default.a.node,
      location: prop_types_default.a.object
    };
    var boundary = boundary_ContentBoundary;
    const loopApprovalStatusBar_statuses = {
      suspended: "Suspended",
      pending: "Pending",
      inReview: "In Review"
    };
    const loopApprovalStatusBar_LoopStatus = ({loop, className}) => {
      const {set} = Object(loopLibrary_context["i"])();
      const handleChangeStatusClicked = () => {
        set(loopLibrary_context["b"])(loop);
        set(loopLibrary_context["c"])(true);
      };
      const status = Object(react["useMemo"])(() => {
        var _a, _b, _c;
        return ((_b = (_a = loop == null ? void 0 : loop.parent) == null ? void 0 : _a.status) == null ? void 0 : _b.value) === "suspended" ? "suspended" : (_c = loop == null ? void 0 : loop.status) == null ? void 0 : _c.value;
      }, [loop]);
      if (!loopApprovalStatusBar_statuses[status]) {
        return null;
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("w-full bg-grey-100 rounded-xs flex flex-row", className)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("px-4 border-r border-grey-250", {
          "text-primary-error": status === "suspended",
          "text-primary-dark": status !== "suspended"
        })
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "py-2.5"
      }, loopApprovalStatusBar_statuses[status])), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleChangeStatusClicked,
        className: "px-4 py-2.5 text-primary hover:underline",
        title: "Change Status"
      }, "Change Status"));
    };
    loopApprovalStatusBar_LoopStatus.propTypes = {
      loop: prop_types_default.a.object,
      className: classNameSchema
    };
    var loopApprovalStatusBar = loopApprovalStatusBar_LoopStatus;
    const expandedApprovalLoop_ExpandedLoop = ({loop, className, hideMenu}) => {
      var _a, _b, _c, _d, _e;
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("flex flex-col justify-between rounded-md shadow hover:shadow-md border border-grey-250 w-full", className)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-4 pt-4 pb-6 flex flex-col justify-between space-y-4"
      }, /* @__PURE__ */ react_default.a.createElement(loopApprovalStatusBar, {
        loop
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-start border-b border-grey-350 pb-4"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        className: "w-20 h-20",
        logo: (_a = loop.customData) == null ? void 0 : _a.loopLibraryLogo,
        name: loop.name
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col ml-4 w-full"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-between w-full"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-baseline"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-primary text-lg leading-none break-word"
      }, loop.name), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "ml-2 text-grey-disabled text-sm"
      }, /* @__PURE__ */ react_default.a.createElement(components_version, {
        semver: (_b = loop.customData) == null ? void 0 : _b.semver
      }))), !hideMenu && /* @__PURE__ */ react_default.a.createElement(morePopupMenu, {
        loop
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-baseline"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-lg text-grey-700 pr-2"
      }, ((_c = loop.customData) == null ? void 0 : _c.onBehalfOfName) || ((_d = loop.customData) == null ? void 0 : _d.organization)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-600 border-l border-grey-600 pl-2 text-sm"
      }, moment_default()(loop.created).format("MMMM Do, YYYY"))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex mt-3.5 items-start w-full justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "leading-none clamp lines-3 text-grey-paragraph break-word"
      }, (_e = loop.customData) == null ? void 0 : _e.description)))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex items-center"
      }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: `/loopApproval/${loop.appId}/${loop.version}`,
        className: "btn btn-primary mr-6"
      }, "Details"), /* @__PURE__ */ react_default.a.createElement(loopAuthorEditors, {
        loop,
        className: "mr-2"
      })))));
    };
    expandedApprovalLoop_ExpandedLoop.propTypes = {
      loop: prop_types_default.a.object.isRequired,
      className: classNameSchema,
      hideMenu: prop_types_default.a.bool
    };
    var expandedApprovalLoop = expandedApprovalLoop_ExpandedLoop;
    var loopApproval = () => {
      const {refreshData, set} = Object(loopLibrary_context["i"])();
      const [shouldRefresh, setShouldRefresh] = Object(react["useState"])(true);
      const statuses = ["inReview", "pending"];
      const [loops, loading] = useFetchVersionedLoops(statuses, shouldRefresh, () => set(loopLibrary_context["g"])(false));
      const createLoops = (loopsToDisplay) => loopsToDisplay.map((loop, index) => /* @__PURE__ */ react_default.a.createElement(expandedApprovalLoop, {
        className: classnames_default()({"mb-6": index !== loops.length - 1}),
        key: loop.appId,
        loop
      }));
      Object(react["useEffect"])(() => setShouldRefresh(refreshData), [refreshData]);
      if (loading) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          "data-testid": "spinner",
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      const [loopsInReview, loopsPending] = loops;
      return (loops == null ? void 0 : loops.length) ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-full flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "h1"
      }, "Loop Review"), /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "h2 my-4"
      }, "In Review"), createLoops(loopsInReview), /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "h2 my-4"
      }, "Pending"), createLoops(loopsPending)) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-full flex flex-col justify-center items-center text-center"
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className: "text-4xl"
      }, "There aren't any loops to view right now."), /* @__PURE__ */ react_default.a.createElement("span", {
        className: "text-lg text-grey-disabled pt-6"
      }, "Let's get some more loops!"));
    };
    var loopAddButton_addLoop = __webpack_require__(69);
    var versionedLoopAddButton_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const VersionedLoopAddButton = ({loop, isValidContractVersion}) => {
      const {osName} = Object(react["useContext"])(context_config["a"]);
      const getInstalled = useFetchInstalled();
      const [isProcessing, setIsProcessing] = Object(react["useState"])(false);
      const {makeToast} = Object(loopLibrary_context["i"])();
      const {appId, version} = loop;
      const isLoopInstalled = useCheckIfLoopInstalled(appId);
      const [
        canUpdate,
        updateFromVersion,
        updateToVersion
      ] = useCheckIfLoopCanUpdate(loop, osName);
      const addLoop = (isUpdate) => (event) => versionedLoopAddButton_async(void 0, null, function* () {
        event.stopPropagation();
        event.preventDefault();
        try {
          setIsProcessing(true);
          yield Object(loopAddButton_addLoop["a"])(appId, osName, version);
          getInstalled();
          Object(tracking["h"])({
            category: tracking["a"],
            action: isUpdate ? "Loop Updated" : "Loop Added",
            label: appId
          });
          setIsProcessing(false);
          try {
            yield Object(loopAddButton_addLoop["c"])(appId);
          } catch (error) {
            makeToast(error.message, "error");
            if (isUpdate) {
              try {
                yield Object(loopAddButton_addLoop["b"])(appId);
              } catch (restoreError) {
                makeToast(restoreError.message, "error");
              }
            }
          }
        } catch (error) {
          makeToast(error.message, "error");
        } finally {
          setIsProcessing(false);
        }
      });
      if (isProcessing) {
        return /* @__PURE__ */ react_default.a.createElement(spinner["a"], null);
      }
      if (!isLoopInstalled) {
        return /* @__PURE__ */ react_default.a.createElement("button", {
          type: "button",
          className: classnames_default()("btn btn-primary", {
            "btn-disabled cursor-not-allowed": !isValidContractVersion
          }),
          onClick: addLoop(),
          disabled: !isValidContractVersion
        }, "Add");
      }
      if (canUpdate) {
        const title = `Update from v${updateFromVersion} to v${updateToVersion}`;
        return /* @__PURE__ */ react_default.a.createElement("button", {
          type: "button",
          title,
          className: classnames_default()("btn btn-primary", {
            "btn-disabled cursor-not-allowed": !isValidContractVersion
          }),
          onClick: addLoop(true),
          disabled: !isValidContractVersion
        }, "Update");
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-grey-disabled py-2 px-4 w-auto inline-block text-center"
      }, "Added");
    };
    VersionedLoopAddButton.propTypes = {
      loop: prop_types_default.a.object.isRequired,
      isValidContractVersion: prop_types_default.a.bool.isRequired
    };
    var versionedLoopAddButton = VersionedLoopAddButton;
    const loopApproval_details_Details = ({className, loop, status}) => {
      var _a, _b, _c, _d, _e, _f;
      const {openChannelProfile} = Object(react["useContext"])(AuthContext);
      const {loopContractVersion} = Object(context_config["e"])();
      const isValidContractVersion = useCheckIfLoopContractVersionValid(loop.appId, loopContractVersion, loop, true);
      const canInstallNonApprovedLoops = (_a = openChannelProfile == null ? void 0 : openChannelProfile.permissions) == null ? void 0 : _a.canInstallNonApprovedLoops;
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(className, "flex", "flex-row", "w-full", "justify-start", "border-b", "border-grey-250", "pb-8")
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col items-center"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: (_b = loop.customData) == null ? void 0 : _b.loopLibraryLogo,
        name: loop.name,
        size: "large"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-9 flex justify-center items-center space-x-2"
      }, canInstallNonApprovedLoops && ["pending", "inReview", "approved"].includes(status) && /* @__PURE__ */ react_default.a.createElement(versionedLoopAddButton, {
        loop,
        isValidContractVersion
      }), !isValidContractVersion && /* @__PURE__ */ react_default.a.createElement(addButtonInfo, {
        action: "review"
      }))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex w-full justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col ml-12 w-full break-word"
      }, /* @__PURE__ */ react_default.a.createElement(loopApprovalStatusBar, {
        loop,
        className: "mb-4"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row justify-between"
      }, /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "clamp lines-2 my-0 h1 mr-4"
      }, loop.name), /* @__PURE__ */ react_default.a.createElement(morePopupMenu, {
        loop,
        isDetailsPage: true
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-sm text-grey-700 font-bold pr-2"
      }, ((_c = loop.organization) == null ? void 0 : _c.name) || ((_d = loop.customData) == null ? void 0 : _d.organization)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex text-sm text-grey-500"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex pr-2 flex-col space-x-0 md:flex-row md:space-x-1"
      }, /* @__PURE__ */ react_default.a.createElement(components_version, {
        semver: (_e = loop == null ? void 0 : loop.customData) == null ? void 0 : _e.semver
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "border-l border-grey-600 pl-2 flex flex-col justify-center align-center"
      }, "Last updated ", moment_default()(loop.lastUpdated).format("MMMM Do, YYYY"))), /* @__PURE__ */ react_default.a.createElement(loopAuthorEditors, {
        loop,
        className: "mt-2.5"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between items-center mt-6 border-b border-grey-250 pb-8"
      }, /* @__PURE__ */ react_default.a.createElement(starRating, {
        rating: loop.rating,
        reviewCount: loop.reviewCount
      }), /* @__PURE__ */ react_default.a.createElement(loopPauseToggle, {
        appId: loop.appId,
        name: loop.name
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-8"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "text-sm text-grey-paragraph mt-5"
      }, /* @__PURE__ */ react_default.a.createElement(markdown["a"], {
        source: (_f = loop.customData) == null ? void 0 : _f.documentation
      }))))));
    };
    loopApproval_details_Details.propTypes = {
      className: prop_types_default.a.string,
      loop: prop_types_default.a.object.isRequired,
      status: prop_types_default.a.string.isRequired
    };
    var loopApproval_details = loopApproval_details_Details;
    var developer_loopApproval = () => {
      var _a, _b, _c, _d;
      const {appId, version} = Object(react_router["i"])();
      const {refreshData, set} = Object(loopLibrary_context["i"])();
      const [shouldRefresh, setShouldRefresh] = Object(react["useState"])(true);
      const [loop, error] = useFetchLoopByVersion(appId, version, shouldRefresh, () => set(loopLibrary_context["g"])(false));
      Object(react["useEffect"])(() => setShouldRefresh(refreshData), [refreshData]);
      if (error) {
        return /* @__PURE__ */ react_default.a.createElement("div", null, "Something went wrong.");
      }
      if (!loop) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: "flex flex-row items-center justify-center pt-8"
        }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null));
      }
      const status = ((_b = (_a = loop.parent) == null ? void 0 : _a.status) == null ? void 0 : _b.value) === "suspended" ? (_d = (_c = loop.parent) == null ? void 0 : _c.status) == null ? void 0 : _d.value : loop == null ? void 0 : loop.status.value;
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-between p-4 w-full"
      }, /* @__PURE__ */ react_default.a.createElement(loopApproval_details, {
        loop,
        status
      }));
    };
    var updateOrgDialog_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const UpdateOrgDialog = ({show, closeCallback, saveCallback, orgData}) => {
      var _a;
      const {makeToast} = Object(loopLibrary_context["i"])();
      const iv = {
        orgName: (orgData == null ? void 0 : orgData.name) || "",
        orgLogo: ((_a = orgData == null ? void 0 : orgData.customData) == null ? void 0 : _a.organizationLibraryLogo) || ""
      };
      const [loading, setLoading] = Object(react["useState"])(false);
      const [orgName, setOrgName] = useFieldState(iv.orgName);
      const [orgLogo, setOrgLogo] = Object(react["useState"])(iv.orgLogo);
      const deleteLogo = () => setOrgLogo("");
      const updateOrgLogo = (logos) => {
        const [logo] = logos;
        setOrgLogo(logo);
      };
      const handleClose = () => {
        Object(tracking["h"])({
          category: tracking["a"],
          action: "Update org dialog closed"
        });
        closeCallback();
      };
      const schema = Object(react["useMemo"])(() => es["d"]().shape({
        orgName: es["e"]().required("This field is required.").max(200, "Organization name cannot exceed 200 characters."),
        orgLogo: es["e"]()
      }), [iv]);
      const onFormSubmitted = () => updateOrgDialog_async(void 0, null, function* () {
        setLoading(true);
        try {
          yield Object(utils_fetch["a"])(`/library/org/${orgData.orgId}`, "PUT", {
            name: orgName,
            customData: {
              organizationLibraryLogo: orgLogo,
              organizationWhisperLogo: orgLogo
            }
          });
          yield saveCallback();
        } catch (e) {
          makeToast("Error saving organization information", "error");
        }
        handleClose();
        setLoading(false);
      });
      return /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: show,
        onClose: handleClose,
        maxWidth: "lg"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-10 py-6"
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "h2 w-96 mr-20"
      }, "Edit Organization Info"), /* @__PURE__ */ react_default.a.createElement(formik_esm["c"], {
        initialValues: iv,
        validateOnMount: true,
        validationSchema: schema,
        onSubmit: onFormSubmitted
      }, ({handleSubmit, isValid}) => /* @__PURE__ */ react_default.a.createElement(formik_esm["b"], {
        onSubmit: handleSubmit,
        className: "mt-8"
      }, /* @__PURE__ */ react_default.a.createElement(input, {
        name: "orgName",
        type: "text",
        label: "Organization Name*",
        onChange: setOrgName,
        value: orgName,
        maxLength: 200,
        className: "mb-8"
      }), /* @__PURE__ */ react_default.a.createElement(imagePicker, {
        name: "orgLogo",
        label: "Organization Logo",
        onUpload: () => {
        },
        onUploadSuccess: updateOrgLogo,
        onDelete: deleteLogo,
        value: orgLogo
      }), loading ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-end mt-8"
      }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null)) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-end mt-8"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "mr-6 btn",
        onClick: handleClose
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "submit",
        className: classnames_default()("btn btn-primary", {
          "btn-disabled cursor-not-allowed": !isValid
        }),
        disabled: !isValid
      }, "Save"))))));
    };
    UpdateOrgDialog.propTypes = {
      show: prop_types_default.a.bool,
      closeCallback: prop_types_default.a.func,
      saveCallback: prop_types_default.a.func,
      orgData: prop_types_default.a.object
    };
    var updateOrgDialog = UpdateOrgDialog;
    var Radio = __webpack_require__(1363);
    var RadioGroup = __webpack_require__(1335);
    var FormControlLabel = __webpack_require__(1334);
    var FormControl = __webpack_require__(1316);
    const setting_useStyles = Object(makeStyles["a"])({
      label: {
        fontWeight: "700",
        fontSize: "14px",
        lineHeight: "18px"
      },
      radio: {
        padding: "6px"
      }
    });
    const Setting = ({settingContent, handleChange, options, passedValue}) => {
      const {name, label} = settingContent;
      const classes = setting_useStyles();
      const renderOption = (option) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: option.label,
        value: option.value,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "primary",
          size: "small",
          classes: {root: classes.radio}
        }),
        label: option.label,
        classes: {label: classes.label}
      });
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-between items-start border-t-2 border-grey-200 px-2 pt-3 pb-6"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-2/6"
      }, name), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-4/6 space-y-2"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "font-light text-sm"
      }, label), /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        classes: classes.formControl
      }, /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value: passedValue,
        onChange: handleChange
      }, options.map(renderOption)))));
    };
    Setting.propTypes = {
      settingContent: prop_types_default.a.object.isRequired,
      handleChange: prop_types_default.a.func.isRequired,
      options: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
      passedValue: prop_types_default.a.string.isRequired
    };
    var setting = Setting;
    const SaveFooter = ({handleSave, handleClose, isProcessing}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "items-center justify-end flex w-full h-20 bg-grey-100 pr-4 absolute bottom-0 left-0"
      }, isProcessing ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex justify-end w-24"
      }, /* @__PURE__ */ react_default.a.createElement(spinner["a"], null)) : /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex space-x-4"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn text-primary",
        onClick: handleClose
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: handleSave
      }, "Save")));
    };
    SaveFooter.propTypes = {
      handleSave: prop_types_default.a.func.isRequired,
      handleClose: prop_types_default.a.func.isRequired,
      isProcessing: prop_types_default.a.bool.isRequired
    };
    var saveFooter = SaveFooter;
    var loopSettings_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const visibilityContent = {
      name: "Loop Visibility",
      label: "Determines which Loops your employees will be able to see in the Loop Library."
    };
    const visibilityOptions = [
      {value: "true", label: "Make all Loops visible to my employees"},
      {
        value: "false",
        label: "Only show Loops that are created for my organization and those approved by my organization's administrators"
      }
    ];
    const installContent = {
      name: "Loop Availability",
      label: "Determines which Loops your employees will be able to add and use."
    };
    const installOptions = [
      {value: "true", label: "Allow employees to use any Loops"},
      {
        value: "false",
        label: "Allow employees to only use Loops that are created for my organization and those approved by my organization's administrators"
      }
    ];
    const LoopSettings = ({orgData, saveCallback}) => {
      var _a, _b, _c, _d, _e, _f;
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [showFooter, setShowFooter] = Object(react["useState"])(false);
      const [isProcessing, setIsProcessing] = Object(react["useState"])(false);
      const initialValues = {
        orgName: orgData == null ? void 0 : orgData.name,
        canViewPublicLoops: (_b = (_a = orgData == null ? void 0 : orgData.customData) == null ? void 0 : _a.permissions) == null ? void 0 : _b.canViewPublicLoops,
        canInstallPublicLoops: (_d = (_c = orgData == null ? void 0 : orgData.customData) == null ? void 0 : _c.permissions) == null ? void 0 : _d.canInstallPublicLoops
      };
      const [canViewPublicLoops, setCanViewPublicLoops] = Object(react["useState"])((_e = initialValues == null ? void 0 : initialValues.canViewPublicLoops) == null ? void 0 : _e.toString());
      const [canInstallPublicLoops, setCanInstallPublicLoops] = Object(react["useState"])((_f = initialValues == null ? void 0 : initialValues.canInstallPublicLoops) == null ? void 0 : _f.toString());
      const boolCanViewPublicLoops = Object(react["useMemo"])(() => JSON.parse(canViewPublicLoops == null ? void 0 : canViewPublicLoops.toLowerCase()), [canViewPublicLoops]);
      const boolCanInstallPublicLoops = Object(react["useMemo"])(() => JSON.parse(canInstallPublicLoops == null ? void 0 : canInstallPublicLoops.toLowerCase()), [canInstallPublicLoops]);
      Object(react["useEffect"])(() => {
        if (boolCanViewPublicLoops !== (initialValues == null ? void 0 : initialValues.canViewPublicLoops) || boolCanInstallPublicLoops !== (initialValues == null ? void 0 : initialValues.canInstallPublicLoops)) {
          setShowFooter(true);
        } else {
          setShowFooter(false);
        }
      }, [canViewPublicLoops, canInstallPublicLoops]);
      const handleVisibilityChange = (event) => {
        var _a2, _b2;
        if (canViewPublicLoops !== ((_a2 = event == null ? void 0 : event.target) == null ? void 0 : _a2.value)) {
          setCanViewPublicLoops((_b2 = event == null ? void 0 : event.target) == null ? void 0 : _b2.value);
        }
      };
      const handleInstallChange = (event) => {
        var _a2, _b2;
        if (canInstallPublicLoops !== ((_a2 = event == null ? void 0 : event.target) == null ? void 0 : _a2.value)) {
          setCanInstallPublicLoops((_b2 = event == null ? void 0 : event.target) == null ? void 0 : _b2.value);
        }
      };
      const onSubmit = () => loopSettings_async(void 0, null, function* () {
        setIsProcessing(true);
        try {
          yield Object(utils_fetch["a"])(`/library/org/${orgData.orgId}`, "PUT", {
            name: initialValues.orgName,
            customData: {
              permissions: {
                canViewPublicLoops: boolCanViewPublicLoops,
                canInstallPublicLoops: boolCanInstallPublicLoops
              }
            }
          });
          setShowFooter(false);
        } catch (e) {
          makeToast("Error saving organization information", "error");
        } finally {
          setIsProcessing(false);
          yield saveCallback();
        }
      });
      const onCancel = () => {
        setCanViewPublicLoops(initialValues.canViewPublicLoops.toString());
        setCanInstallPublicLoops(initialValues.canInstallPublicLoops.toString());
        setShowFooter(false);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: ""
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        className: "text-2xl my-6 font-semibold"
      }, "Loop Settings"), /* @__PURE__ */ react_default.a.createElement(setting, {
        settingContent: visibilityContent,
        handleChange: handleVisibilityChange,
        options: visibilityOptions,
        passedValue: canViewPublicLoops
      }), /* @__PURE__ */ react_default.a.createElement(setting, {
        settingContent: installContent,
        handleChange: handleInstallChange,
        options: installOptions,
        passedValue: canInstallPublicLoops
      }), showFooter && /* @__PURE__ */ react_default.a.createElement(saveFooter, {
        handleSave: onSubmit,
        handleClose: onCancel,
        isProcessing
      }));
    };
    LoopSettings.propTypes = {
      orgData: prop_types_default.a.object.isRequired,
      saveCallback: prop_types_default.a.func.isRequired
    };
    var loopSettings = LoopSettings;
    var admin_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const OrgAdmin = () => {
      var _a;
      const {openChannelProfile, set: setAuthData} = useAuthContext();
      const {org} = openChannelProfile;
      const [showDialog, setShowDialog] = Object(react["useState"])(false);
      const onEditClicked = () => setShowDialog(true);
      const onDialogClose = () => {
        setShowDialog(false);
      };
      const onDialogSave = () => admin_async(void 0, null, function* () {
        try {
          const response = yield Object(utils_fetch["a"])(`/auth/getOrCreateUserAccount`);
          const {profile} = response;
          setAuthData("openChannelProfile")(profile);
        } catch (e) {
          console.error("Failed to fetch profile info after updating org", e);
        }
      });
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-full flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement(updateOrgDialog, {
        show: showDialog,
        closeCallback: onDialogClose,
        saveCallback: onDialogSave,
        orgData: org
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "w-full h-50 flex flex-row items-center"
      }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
        logo: (_a = org == null ? void 0 : org.customData) == null ? void 0 : _a.organizationLibraryLogo,
        className: "flex-shrink-0 w-20 h-20"
      }), /* @__PURE__ */ react_default.a.createElement("h1", {
        className: "h1 text-black my-6 mx-4"
      }, org.name), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "h-full mr-28 text-primary hover:underline",
        title: "Edit",
        onClick: onEditClicked
      }, "Edit")), /* @__PURE__ */ react_default.a.createElement(loopSettings, {
        orgData: org,
        saveCallback: onDialogSave
      }));
    };
    var admin = OrgAdmin;
    const LoopLibraryContent = () => {
      const location = Object(react_router["h"])();
      return /* @__PURE__ */ react_default.a.createElement(boundary, {
        location
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "\n        bg-white\n        h-full\n        w-full\n        overflow-x-hidden\n        overflow-y-auto\n        flex\n        flex-col\n        justify-between\n        pt-6\n        px-6"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex-1"
      }, /* @__PURE__ */ react_default.a.createElement(react_router["d"], null, /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/",
        exact: true
      }, /* @__PURE__ */ react_default.a.createElement(home, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/browse"
      }, /* @__PURE__ */ react_default.a.createElement(browse, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/becomeAuthor"
      }, /* @__PURE__ */ react_default.a.createElement(becomeAuthor, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/local-loops"
      }, /* @__PURE__ */ react_default.a.createElement(local_loop_list, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/local-loop/submit/:appId?"
      }, /* @__PURE__ */ react_default.a.createElement(local_loop_submit, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/local-loop/loop/:appId"
      }, /* @__PURE__ */ react_default.a.createElement(local_loop_details, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/authored",
        exact: true
      }, /* @__PURE__ */ react_default.a.createElement(authored, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/authored/:appId/:version"
      }, /* @__PURE__ */ react_default.a.createElement(loopStats, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/submitted/:appId/:version"
      }, /* @__PURE__ */ react_default.a.createElement(submissionComplete, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/developer/submit/:appId?/:version?"
      }, /* @__PURE__ */ react_default.a.createElement(developer_submit, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/loop/:appId"
      }, /* @__PURE__ */ react_default.a.createElement(details, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/loops"
      }, /* @__PURE__ */ react_default.a.createElement(content_installed, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/loopApproval",
        exact: true
      }, /* @__PURE__ */ react_default.a.createElement(loopApproval, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/loopApproval/:appId/:version"
      }, /* @__PURE__ */ react_default.a.createElement(developer_loopApproval, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/search/:searchTerm"
      }, /* @__PURE__ */ react_default.a.createElement(content_search, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/search"
      }, /* @__PURE__ */ react_default.a.createElement(content_search, null)), /* @__PURE__ */ react_default.a.createElement(react_router["b"], {
        path: "/org/admin"
      }, /* @__PURE__ */ react_default.a.createElement(admin, null)))), /* @__PURE__ */ react_default.a.createElement(footer, null)));
    };
    var content = LoopLibraryContent;
    function useDebounce(value, delay) {
      const [debouncedValue, setDebouncedValue] = Object(react["useState"])(value);
      Object(react["useEffect"])(() => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      }, [value]);
      return debouncedValue;
    }
    const loopCardSmall_LoopCard = ({loop, onClick}) => /* @__PURE__ */ react_default.a.createElement("div", {
      className: "h-full",
      style: {width: "360px", maxWidth: "360px"}
    }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
      to: `/loop/${loop.appId}`,
      onClick
    }, /* @__PURE__ */ react_default.a.createElement("div", {
      className: "p-3 mb-8 h-20 rounded-md shadow hover:shadow-md border border-grey-250 flex flex-row justify-between"
    }, /* @__PURE__ */ react_default.a.createElement("div", {
      className: "flex flex-col justify-center items-start"
    }, /* @__PURE__ */ react_default.a.createElement(loopLogo, {
      logo: loop.customData.loopLibraryLogo,
      name: loop.name,
      size: "small"
    })), /* @__PURE__ */ react_default.a.createElement("div", {
      className: "flex flex-col ml-3 flex-grow justify-center truncate"
    }, /* @__PURE__ */ react_default.a.createElement("span", {
      className: "text-primary text-2xl min-w-0 truncate leading-none",
      title: loop.name
    }, loop.name), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(starRating, {
      rating: loop.rating,
      reviewCount: loop.reviewCount
    }))))));
    loopCardSmall_LoopCard.propTypes = {
      loop: prop_types_default.a.object.isRequired,
      onClick: prop_types_default.a.func
    };
    var loopCardSmall = loopCardSmall_LoopCard;
    var header_search_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const LoopLibrarySearch = () => {
      const {osName} = Object(context_config["e"])();
      const history = Object(react_router["g"])();
      const [loading, setLoading] = Object(react["useState"])(false);
      const [loops, setLoops] = Object(react["useState"])(null);
      const [open, setOpen] = Object(react["useState"])(false);
      const [focused, focus, blur] = useToggle();
      const [search, setSearch] = Object(react["useState"])("");
      const debouncedSearchTerm = useDebounce(search, 500);
      const reset = () => {
        setLoops(null);
        setSearch("");
      };
      const generateClickHandler = (loop) => () => {
        reset();
        Object(tracking["h"])({
          category: tracking["a"],
          action: "Search result clicked",
          label: `appId=${loop.appId},appName=${loop.name}`
        });
      };
      Object(react["useEffect"])(() => {
        if ((loops == null ? void 0 : loops.length) >= 0 && focused) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }, [loops, focused]);
      Object(react["useEffect"])(() => {
        const abortController = new AbortController();
        const {signal} = abortController;
        (() => header_search_async(void 0, null, function* () {
          if ((debouncedSearchTerm == null ? void 0 : debouncedSearchTerm.length) >= 1) {
            setLoading(true);
            try {
              const query = query_string_default.a.stringify({
                os: osName,
                text: debouncedSearchTerm
              });
              setLoops((yield Object(utils_fetch["a"])(`/library/search?${query}`, "GET", {}, {signal})) || []);
              Object(tracking["h"])({
                category: tracking["a"],
                action: "Loop typeahead search",
                label: `searchTerm=${debouncedSearchTerm}`
              });
            } catch (error) {
              if (!(error instanceof DOMException) && (error == null ? void 0 : error.name) !== "AbortError") {
                console.error(error);
              }
              reset();
            }
            setLoading(false);
          } else {
            reset();
          }
        }))();
        return () => {
          abortController.abort();
        };
      }, [debouncedSearchTerm]);
      const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${search}`);
        document.activeElement.blur();
        reset();
      };
      const handleChange = (event) => {
        var _a;
        setSearch((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.value);
      };
      const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          blur();
        }
      };
      const renderLoops = () => loops.map((loop, index) => /* @__PURE__ */ react_default.a.createElement("div", {
        key: `${loop.appId}-${loop.version || index}`,
        className: index >= 1 ? "mt-3" : ""
      }, /* @__PURE__ */ react_default.a.createElement(loopCardSmall, {
        loop,
        onClick: generateClickHandler(loop)
      })));
      return /* @__PURE__ */ react_default.a.createElement("form", {
        onSubmit: handleSubmit,
        className: "relative",
        onFocus: focus,
        onBlur: handleBlur
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("text-grey-paragraph", "bg-white", "rounded-full", "flex", "flex-row", "items-center", "align-middle", "px-2", "h-8")
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mr-3"
      }, loading ? /* @__PURE__ */ react_default.a.createElement(spinner["a"], {
        svg: {height: "18", width: "18"},
        circle: {r: "7px", strokeDasharray: "40, 20", strokeWidth: "1"}
      }) : /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "search",
        className: "mr-0.5"
      })), /* @__PURE__ */ react_default.a.createElement("input", {
        type: "search",
        "aria-label": "Search for Loops",
        className: "placeholder-black bg-transparent flex-grow",
        value: search,
        onChange: handleChange,
        placeholder: "Search for Loops"
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("absolute", "mt-3", "p-4", "rounded-md", "shadow", "border", "border-grey-250", "bg-white", "text-grey-paragraph", "z-50", {
          hidden: !open
        })
      }, (loops == null ? void 0 : loops.length) >= 1 ? renderLoops() : /* @__PURE__ */ react_default.a.createElement("span", null, "No results")));
    };
    var header_search = LoopLibrarySearch;
    const Avatar = () => {
      const [focused, , blur, toggle] = useToggle();
      const {profile} = Object(react["useContext"])(AuthContext);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "relative"
      }, /* @__PURE__ */ react_default.a.createElement("button", {
        onClick: toggle,
        onBlur: blur,
        type: "button",
        className: classnames_default()("relative", "flex", "z-30", "h-8", "w-8", "rounded-full", "text-primary", "bg-white", "border", "border-white", {
          shadow: focused
        })
      }, /* @__PURE__ */ react_default.a.createElement("img", {
        src: profile == null ? void 0 : profile.picture,
        alt: "avatar",
        className: "rounded-full text-sm"
      })), focused && /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("absolute", "z-20", "top-1/2", "right-1/2", "bg-gradient-to-bl", "from-primary", "to-error-light", "p-6", "rounded", "shadow"),
        style: {
          width: "300px"
        }
      }, "Hello", (profile == null ? void 0 : profile.name) ? ` ${profile.name}` : "", ". I\u2019m Olive and I\u2019m here to work with you hand-in-hand to provide real-time intelligence while you handle your most critical tasks."));
    };
    var avatar = Avatar;
    const LoopLibraryHeader = () => {
      const {openChannelProfile} = useAuthContext();
      const {orgName, permissions} = openChannelProfile || {};
      const history = Object(react_router["g"])();
      const handleBack = () => {
        history.goBack();
      };
      const handleForward = () => {
        history.goForward();
      };
      return /* @__PURE__ */ react_default.a.createElement("header", {
        className: "\n        z-30\n        text-white\n        flex\n        flex-row\n        justify-between\n        w-full\n        h-20\n        fixed\n        items-center\n        p-6\n        bg-gradient-to-r\n        from-primary\n        to-error-light\n        local:from-secondary\n        local:to-secondary-light\n        dev:from-tertiary\n        dev:to-tertiary-light\n        qa:from-success-dark\n        qa:to-success"
      }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex"
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "menu_looplibrary",
        className: "w-12 h-12"
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-center"
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className: "text-2xl m-0 mx-3"
      }, "Loop Library")))), /* @__PURE__ */ react_default.a.createElement("button", {
        onClick: handleBack,
        type: "button",
        className: "\n          mr-3\n          rounded-full\n          flex\n          flex-row\n          justify-center\n          items-center\n          hover:bg-white\n          hover:bg-opacity-60\n        "
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "chevron_left",
        className: "text-8"
      })), /* @__PURE__ */ react_default.a.createElement("button", {
        onClick: handleForward,
        type: "button",
        className: "\n          mr-3\n          rounded-full\n          flex\n          flex-row\n          justify-center\n          items-center\n          hover:bg-white\n          hover:bg-opacity-60\n        "
      }, /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "chevron_right",
        className: "text-8"
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex-grow mr-6"
      }, /* @__PURE__ */ react_default.a.createElement(header_search, null)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-row space-x-4 items-center"
      }, (permissions == null ? void 0 : permissions.canEditOrg) && /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/org/admin",
        className: "text-white underline"
      }, orgName), /* @__PURE__ */ react_default.a.createElement(avatar, null)));
    };
    var header = LoopLibraryHeader;
    const width = {width: "225px", minWidth: "225px"};
    const SideNav = () => {
      var _a, _b;
      const location = Object(react_router["h"])();
      const {isDeveloper, openChannelProfile} = Object(react["useContext"])(AuthContext);
      const isLoopReviewer = (_a = openChannelProfile == null ? void 0 : openChannelProfile.permissions) == null ? void 0 : _a.canApproveAllLoops;
      const heading = Object(react["useCallback"])((path) => classnames_default()("px-6 py-2", {
        "text-white bg-primary": location.pathname === path,
        "hover:bg-primary-light": location.pathname !== path
      }), [location]);
      const subheading = Object(react["useCallback"])((path) => classnames_default()("flex flex-row align-center justify-between px-6 py-1 text-sm cursor-pointer", {
        "text-white bg-primary": location.pathname === path,
        "hover:bg-primary-light": location.pathname !== path
      }), [location]);
      const handleLDK = () => {
        Object(utils["e"])("https://olive.page.link/ldk");
        Object(tracking["h"])({
          category: tracking["a"],
          action: "LDK documentation opened"
        });
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col justify-between h-full pt-2 shadow-2xl text-primary z-10 bg-white",
        style: width
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col"
      }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/browse",
        exact: "true",
        className: heading("/browse")
      }, "Browse Loops"), ((_b = location == null ? void 0 : location.pathname) == null ? void 0 : _b.match(/.*\/search\/.*/)) && /* @__PURE__ */ react_default.a.createElement("div", {
        className: "px-8 py-2 text-white bg-primary text-sm"
      }, "Search"), /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/loops",
        className: heading("/loops")
      }, "My Loops"), isLoopReviewer && /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/loopApproval",
        className: heading("/loopApproval")
      }, "Loop Review")), /* @__PURE__ */ react_default.a.createElement("div", null, isDeveloper ? /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col pb-2"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "flex flex-col px-2 hover:bg-primary-light mb-2"
      }, /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/authored",
        className: "border-b border-grey-400 px-4 py-2 font-bold"
      }, "Loop Authors")), /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/authored",
        className: subheading("/developer/authored")
      }, "My Authored Loops"), /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/submit",
        className: subheading("/developer/submit")
      }, "Submit New Loop"), /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/local-loops",
        className: subheading("/developer/local-loops")
      }, "Local Loops"), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleLDK,
        className: `${subheading("/developer")} text-left`,
        title: "Open the Loop Development Kit website in an external browser"
      }, /* @__PURE__ */ react_default.a.createElement("span", null, "Loop Development Kit"), /* @__PURE__ */ react_default.a.createElement(icon_icon, {
        icon: "open_in_new"
      }))) : /* @__PURE__ */ react_default.a.createElement(react_router_dom["c"], {
        to: "/developer/becomeAuthor",
        className: subheading("/developer/becomeAuthor")
      }, "Become a Loop Author")));
    };
    var side_nav = SideNav;
    var DialogActions = __webpack_require__(1340);
    var DialogContent = __webpack_require__(1339);
    var DialogTitle = __webpack_require__(1338);
    var index_umd = __webpack_require__(110);
    const styles_button = {
      backgroundColor: colors["p"],
      border: `1px solid ${colors["p"]}`,
      borderRadius: "0.5rem",
      color: colors["e"],
      fontSize: "0.75rem",
      marginBottom: 0,
      marginLeft: "0.5rem",
      marginTop: 0
    };
    const deepPurple = {
      backgroundColor: colors["e"],
      color: colors["p"]
    };
    const menuHeader = {
      alignItems: "center",
      display: "flex",
      padding: "0.5rem 1rem",
      userSelect: "none"
    };
    const styles_name = {
      marginLeft: "0.5rem",
      marginRight: "0.25rem",
      color: colors["e"]
    };
    const formRow = {
      marginBottom: "0.75rem"
    };
    const linkStyles = {
      container: {
        paddingRight: 0,
        top: "auto",
        verticalAlign: "baseline"
      },
      icon: {
        fontSize: "0.75rem",
        top: "-0.05rem",
        width: "0.75rem",
        marginLeft: "0.1rem"
      }
    };
    const helperText = {
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: "0.75rem",
      textAlign: "left",
      fontFamily: '"Proxima Nova"',
      fontWeight: 400,
      lineHeight: 1.66,
      marginLeft: "0.875rem",
      marginRight: "0.875rem",
      marginTop: "0.25rem"
    };
    var form_styles = {
      button: styles_button,
      deepPurple,
      formRow,
      helperText,
      linkStyles,
      menuHeader,
      name: styles_name
    };
    var helperText_defProp = Object.defineProperty;
    var helperText_hasOwnProp = Object.prototype.hasOwnProperty;
    var helperText_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var helperText_propIsEnum = Object.prototype.propertyIsEnumerable;
    var helperText_defNormalProp = (obj, key, value) => key in obj ? helperText_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var helperText_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (helperText_hasOwnProp.call(b, prop2))
          helperText_defNormalProp(a, prop2, b[prop2]);
      if (helperText_getOwnPropSymbols)
        for (var prop2 of helperText_getOwnPropSymbols(b)) {
          if (helperText_propIsEnum.call(b, prop2))
            helperText_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const FormHelperText = ({includeStyles, isError, text}) => {
      if (!text) {
        return null;
      }
      const renderMarkdown = () => /* @__PURE__ */ react_default.a.createElement(markdown["a"], {
        source: text,
        linkStyle: linkStyles
      });
      if (includeStyles) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          style: helperText_assign(helperText_assign({}, helperText), isError ? {color: "#F44337"} : {})
        }, renderMarkdown());
      }
      return renderMarkdown();
    };
    FormHelperText.propTypes = {
      includeSpacing: prop_types_default.a.bool,
      isError: prop_types_default.a.bool,
      text: prop_types_default.a.string
    };
    FormHelperText.defaultProps = {
      includeSpacing: false,
      isError: false,
      text: null
    };
    var form_helperText = FormHelperText;
    var color_defProp = Object.defineProperty;
    var color_hasOwnProp = Object.prototype.hasOwnProperty;
    var color_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var color_propIsEnum = Object.prototype.propertyIsEnumerable;
    var color_defNormalProp = (obj, key, value) => key in obj ? color_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var color_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (color_hasOwnProp.call(b, prop2))
          color_defNormalProp(a, prop2, b[prop2]);
      if (color_getOwnPropSymbols)
        for (var prop2 of color_getOwnPropSymbols(b)) {
          if (color_propIsEnum.call(b, prop2))
            color_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const color_useStyles = (theme) => Object(makeStyles["a"])(() => ({
      root: color_assign(color_assign({
        width: "100%"
      }, theme.primaryColor ? {
        "& label": {
          color: theme.primaryColor
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.primaryColor
          },
          "&:hover fieldset": {
            borderColor: theme.primaryColor
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.primaryColor
          }
        },
        "& .MuiOutlinedInput-input": {
          color: "transparent"
        },
        "& .Mui-focused .MuiOutlinedInput-input": {
          color: theme.primaryColor
        },
        "& .MuiFormLabel-filled + .MuiOutlinedInput-root .MuiOutlinedInput-input": {
          color: theme.primaryColor
        }
      } : {}), theme.highlightColor ? {
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.highlightColor
        }
      } : {})
    }));
    const FormColor = ({
      hint,
      label,
      required,
      set,
      style,
      theme,
      value: passedValue
    }) => {
      const [error, setError] = Object(react["useState"])(null);
      const [value, setValue] = Object(react["useState"])(passedValue);
      const styles = color_useStyles(theme)();
      const colorPickerRow = {
        display: "flex"
      };
      Object(react["useEffect"])(() => {
        setValue(passedValue);
      }, [passedValue]);
      const setDebounce = Object(react["useCallback"])(Object(index_umd["debounce"])(1e3, (val) => set(val)), []);
      const handleChange = (event) => {
        setValue(event.target.value);
        setDebounce(event.target.value);
      };
      const validate = () => {
        if (required && Object(isEmpty["a"])(value)) {
          setError("This field is required");
        } else if (!value.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
          setError("Invalid hex color");
        }
      };
      const onFocus = () => {
        setError(null);
      };
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        style: colorPickerRow
      }, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        size: "small",
        type: "text",
        variant: "outlined",
        label,
        value,
        classes: styles,
        required,
        onChange: handleChange,
        onFocus,
        onBlur: validate,
        style,
        FormHelperTextProps: {
          component: "div"
        },
        error: !!error,
        helperText: /* @__PURE__ */ react_default.a.createElement(form_helperText, {
          text: error || hint
        })
      }), /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        size: "small",
        type: "color",
        variant: "outlined",
        value,
        classes: styles,
        required,
        onChange: handleChange,
        onFocus,
        onBlur: validate,
        style,
        FormHelperTextProps: {
          component: "div"
        },
        error: !!error,
        helperText: /* @__PURE__ */ react_default.a.createElement(form_helperText, {
          text: error || ""
        })
      })));
    };
    FormColor.propTypes = {
      hint: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
    };
    FormColor.defaultProps = {
      hint: null,
      required: false,
      style: {},
      theme: {},
      value: ""
    };
    var color = FormColor;
    var folder_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const folder_useStyles = Object(makeStyles["a"])(() => ({
      root: {
        width: "100%"
      }
    }));
    const FormFolder = ({hint, label, required, set, style, value}) => {
      const styles = folder_useStyles();
      const onClick = () => folder_async(void 0, null, function* () {
        const file = yield Object(utils["f"])({
          title: "Choose Plugin Folder",
          buttonLabel: "Select",
          filters: null,
          properties: ["openDirectory", "showHiddenFiles"],
          defaultPath: "home"
        });
        if (file && !file.canceled) {
          set(file.filePaths[0]);
        }
      });
      return /* @__PURE__ */ react_default.a.createElement("div", {
        style
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: {alignItems: "center", display: "flex", width: "100%"}
      }, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        size: "small",
        type: "text",
        variant: "outlined",
        label,
        value,
        classes: styles,
        required,
        disabled: true
      }), /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        label: "Select",
        style: {marginBottom: 0, marginLeft: "0.5rem", marginTop: 0},
        onClick
      })), /* @__PURE__ */ react_default.a.createElement(form_helperText, {
        text: hint,
        includeStyles: true
      }));
    };
    FormFolder.propTypes = {
      hint: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
    };
    FormFolder.defaultProps = {
      hint: null,
      required: false,
      style: {},
      value: ""
    };
    var folder = FormFolder;
    var Tooltip_Tooltip = __webpack_require__(1336);
    const tooltipStyles = Object(makeStyles["a"])(() => ({
      tooltipPlacementBottom: {
        margin: "0.25rem 0 !important",
        padding: "0.75rem !important",
        fontSize: "0.75rem"
      }
    }));
    const FormMarkdown = ({label, set, style, tooltip, value: passedValue}) => {
      const [value, setValue] = Object(react["useState"])(passedValue);
      Object(react["useEffect"])(() => {
        if (!Object(isEmpty["a"])(passedValue))
          setValue(passedValue);
      }, [passedValue]);
      const setDebounce = Object(react["useCallback"])(Object(index_umd["debounce"])(1e3, (val) => set(val)), []);
      const handleTextChange = (val) => {
        setValue(val);
        setDebounce(val);
      };
      const renderField = () => /* @__PURE__ */ react_default.a.createElement("div", {
        style
      }, label && /* @__PURE__ */ react_default.a.createElement("div", null, label), /* @__PURE__ */ react_default.a.createElement(js_default.a, {
        value,
        onChange: handleTextChange,
        selectedTab: "write",
        minEditorHeight: 100,
        maxEditorHeight: 300,
        toolbarCommands: [
          ["header", "bold", "italic", "strikethrough"],
          ["link", "quote", "code", "image"],
          ["unordered-list", "ordered-list"]
        ],
        disablePreview: true
      }));
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(Tooltip_Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: tooltipStyles()
        }, renderField());
      }
      return renderField();
    };
    FormMarkdown.propTypes = {
      label: prop_types_default.a.string,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
    };
    FormMarkdown.defaultProps = {
      label: null,
      style: {},
      tooltip: null,
      value: ""
    };
    var form_markdown = FormMarkdown;
    var InputLabel = __webpack_require__(1317);
    var Select_Select = __webpack_require__(1362);
    var form_select_defProp = Object.defineProperty;
    var form_select_hasOwnProp = Object.prototype.hasOwnProperty;
    var form_select_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var form_select_propIsEnum = Object.prototype.propertyIsEnumerable;
    var form_select_defNormalProp = (obj, key, value) => key in obj ? form_select_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var form_select_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (form_select_hasOwnProp.call(b, prop2))
          form_select_defNormalProp(a, prop2, b[prop2]);
      if (form_select_getOwnPropSymbols)
        for (var prop2 of form_select_getOwnPropSymbols(b)) {
          if (form_select_propIsEnum.call(b, prop2))
            form_select_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const select_useStyles = (theme) => Object(makeStyles["a"])(() => ({
      label: form_select_assign(form_select_assign({}, theme.primaryColor ? {
        color: theme.primaryColor
      } : {}), theme.highlightColor ? {
        "&.Mui-focused": {
          color: theme.highlightColor
        }
      } : {}),
      select: form_select_assign({}, theme.primaryColor ? {
        "& .MuiOutlinedInput-root": {
          color: theme.primaryColor
        },
        "& .MuiOutlinedInput-root .MuiSelect-icon": {
          color: theme.primaryColor,
          height: "2em",
          width: "2em"
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.primaryColor
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.primaryColor
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.highlightColor
        }
      } : {})
    }));
    const select_tooltipStyles = Object(makeStyles["a"])(() => ({
      tooltipPlacementBottom: {
        margin: "0.25rem 0 !important",
        padding: "0.75rem !important",
        fontSize: "0.75rem"
      }
    }));
    const FormSelect = ({
      label,
      options,
      required,
      set,
      style,
      theme,
      tooltip,
      value
    }) => {
      const [error, setError] = Object(react["useState"])(null);
      const classes = select_useStyles(theme)();
      const validate = (result) => {
        if (required && Object(isEmpty["a"])(result)) {
          setError("This field is required");
        }
      };
      const handleChange = (event) => {
        validate(event.target.value);
        set(event.target.value);
      };
      const onFocus = () => {
        setError(null);
      };
      const renderOption = (option) => /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        key: option.value,
        value: option.value
      }, option.label);
      const renderField = () => /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        size: "small",
        variant: "outlined",
        required,
        style,
        error: !!error,
        classes: {root: classes.select}
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        id: `${label}-label`,
        classes: {root: classes.label},
        required: required && label !== void 0
      }, label), /* @__PURE__ */ react_default.a.createElement(Select_Select["a"], {
        labelId: `${label}-label`,
        value,
        onChange: handleChange,
        onOpen: onFocus,
        label
      }, !required && /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: ""
      }, /* @__PURE__ */ react_default.a.createElement("em", null, "None")), options.map(renderOption)), error && /* @__PURE__ */ react_default.a.createElement(form_helperText, {
        text: error,
        isError: true,
        includeStyles: true
      }));
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(Tooltip_Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: select_tooltipStyles()
        }, renderField());
      }
      return renderField();
    };
    FormSelect.propTypes = {
      label: prop_types_default.a.string.isRequired,
      options: prop_types_default.a.array.isRequired,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
    };
    FormSelect.defaultProps = {
      required: false,
      style: {},
      theme: {},
      tooltip: null,
      value: ""
    };
    var form_select = FormSelect;
    var text_defProp = Object.defineProperty;
    var text_hasOwnProp = Object.prototype.hasOwnProperty;
    var text_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var text_propIsEnum = Object.prototype.propertyIsEnumerable;
    var text_defNormalProp = (obj, key, value) => key in obj ? text_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var text_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (text_hasOwnProp.call(b, prop2))
          text_defNormalProp(a, prop2, b[prop2]);
      if (text_getOwnPropSymbols)
        for (var prop2 of text_getOwnPropSymbols(b)) {
          if (text_propIsEnum.call(b, prop2))
            text_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const text_useStyles = (theme) => Object(makeStyles["a"])(() => ({
      root: text_assign(text_assign({
        width: "100%"
      }, theme.primaryColor ? {
        "& label": {
          color: theme.primaryColor
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.primaryColor
          },
          "&:hover fieldset": {
            borderColor: theme.primaryColor
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.primaryColor
          }
        },
        "& .MuiOutlinedInput-input": {
          color: "transparent"
        },
        "& .Mui-focused .MuiOutlinedInput-input": {
          color: theme.primaryColor
        },
        "& .MuiFormLabel-filled + .MuiOutlinedInput-root .MuiOutlinedInput-input": {
          color: theme.primaryColor
        }
      } : {}), theme.highlightColor ? {
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.highlightColor
        }
      } : {})
    }));
    const text_tooltipStyles = Object(makeStyles["a"])(() => ({
      tooltipPlacementBottom: {
        margin: "0 0 !important",
        padding: "0.75rem !important",
        fontSize: "0.75rem"
      }
    }));
    const FormText = ({
      hint,
      label,
      inputType,
      required,
      set,
      style,
      theme,
      tooltip,
      value: passedValue
    }) => {
      const [error, setError] = Object(react["useState"])(null);
      const [value, setValue] = Object(react["useState"])(passedValue);
      const styles = text_useStyles(theme)();
      Object(react["useEffect"])(() => {
        setValue(passedValue);
      }, [passedValue]);
      const setDebounce = Object(react["useCallback"])(Object(index_umd["debounce"])(1e3, (val) => set(val)), []);
      const handleChange = (event) => {
        setValue(event.target.value);
        setDebounce(event.target.value);
      };
      const validate = () => {
        if (required && Object(isEmpty["a"])(value)) {
          setError("This field is required");
        }
      };
      const onFocus = () => {
        setError(null);
      };
      const renderField = () => /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        size: "small",
        type: inputType,
        variant: "outlined",
        label,
        value,
        classes: styles,
        required,
        onChange: handleChange,
        onFocus,
        onBlur: validate,
        style,
        FormHelperTextProps: {
          component: "div"
        },
        error: !!error,
        helperText: /* @__PURE__ */ react_default.a.createElement(form_helperText, {
          text: error || hint
        })
      });
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(Tooltip_Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: text_tooltipStyles()
        }, renderField());
      }
      return renderField();
    };
    FormText.propTypes = {
      hint: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      inputType: prop_types_default.a.string,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
    };
    FormText.defaultProps = {
      hint: null,
      inputType: "text",
      required: false,
      style: {},
      theme: {},
      tooltip: null,
      value: ""
    };
    var form_text = FormText;
    var Autocomplete = __webpack_require__(1368);
    var multiSelect_defProp = Object.defineProperty;
    var multiSelect_hasOwnProp = Object.prototype.hasOwnProperty;
    var multiSelect_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var multiSelect_propIsEnum = Object.prototype.propertyIsEnumerable;
    var multiSelect_defNormalProp = (obj, key, value) => key in obj ? multiSelect_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var multiSelect_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (multiSelect_hasOwnProp.call(b, prop2))
          multiSelect_defNormalProp(a, prop2, b[prop2]);
      if (multiSelect_getOwnPropSymbols)
        for (var prop2 of multiSelect_getOwnPropSymbols(b)) {
          if (multiSelect_propIsEnum.call(b, prop2))
            multiSelect_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const MultiSelect = ({label, options, required, set, style}) => {
      const onChange = (e, val) => set(val);
      return /* @__PURE__ */ react_default.a.createElement(Autocomplete["a"], {
        multiple: true,
        style,
        id: "tags",
        options,
        renderTags: (v, getTagProps) => v.map((option, index) => /* @__PURE__ */ react_default.a.createElement(Chip["a"], multiSelect_assign({
          key: `${option}-${index}`,
          size: "small",
          color: "primary",
          label: option
        }, getTagProps({index})))),
        onChange,
        renderInput: (params) => /* @__PURE__ */ react_default.a.createElement(TextField["a"], multiSelect_assign(multiSelect_assign({}, params), {
          variant: "outlined",
          size: "small",
          required,
          placeholder: "Tags",
          label
        }))
      });
    };
    MultiSelect.propTypes = {
      label: prop_types_default.a.string.isRequired,
      options: prop_types_default.a.array.isRequired,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])
    };
    var multiSelect = MultiSelect;
    var form_imagePicker_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const imagePicker_useStyles = Object(makeStyles["a"])(() => ({
      label: {
        width: "100%",
        color: "rgba(0, 0, 0, 0.54)",
        border: `1px solid ${colors["h"]}`,
        borderRadius: "4px",
        padding: "10.5px 14px",
        cursor: "pointer"
      },
      input: {
        display: "none"
      },
      img: {
        maxWidth: "50%"
      },
      imgWrapper: {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        width: "50%"
      }
    }));
    const imagePicker_ImagePicker = ({label, required, set, style, value: defaultValue}) => {
      const {makeToast} = Object(loopLibrary_context["i"])();
      const [value, setValue] = Object(react["useState"])(defaultValue);
      const classes = imagePicker_useStyles();
      const setDebounce = Object(react["useCallback"])(Object(index_umd["debounce"])(1e3, (val) => set(val)), []);
      const handleChange = (event) => form_imagePicker_async(void 0, null, function* () {
        if (event.target.files && event.target.files.length) {
          const files = Array.from(event.target.files);
          const data = new FormData();
          data.append("logo", files[0]);
          try {
            const {
              apiUrl,
              loopLibraryMajorVersion,
              desktopVersion,
              loopContractVersion
            } = yield Object(utils_fetch["c"])();
            const res = yield fetch(`${apiUrl}/library/loop/logo`, {
              method: "POST",
              credentials: "include",
              body: data,
              headers: {
                "LIBRARY-MAJOR-VERSION": loopLibraryMajorVersion,
                "OLIVE-HELPS-VERSION": desktopVersion,
                "LDK-CONTRACT-VERSION": loopContractVersion,
                "CSRF-TOKEN": sessionStorage.getItem("csrfToken") || ""
              }
            });
            const {body} = yield res.json();
            setValue(body.fileUrl);
            setDebounce(body.fileUrl);
          } catch (e) {
            makeToast("Could not upload image", "error");
          }
        }
      });
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, value && /* @__PURE__ */ react_default.a.createElement("div", {
        style: {display: "flex"}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.imgWrapper
      }, /* @__PURE__ */ react_default.a.createElement("img", {
        src: `http:${value}`,
        alt: label,
        className: classes.img
      })), /* @__PURE__ */ react_default.a.createElement("div", null, " ", /* @__PURE__ */ react_default.a.createElement("label", {
        htmlFor: label,
        className: classes.label,
        style
      }, `Edit ${label}`, /* @__PURE__ */ react_default.a.createElement("input", {
        id: label,
        type: "file",
        className: classes.input,
        required,
        onChange: handleChange
      })))), !value && /* @__PURE__ */ react_default.a.createElement("label", {
        htmlFor: label,
        className: classes.label,
        style
      }, label, /* @__PURE__ */ react_default.a.createElement("input", {
        id: label,
        type: "file",
        className: classes.input,
        required,
        onChange: handleChange
      })));
    };
    imagePicker_ImagePicker.propTypes = {
      label: prop_types_default.a.string.isRequired,
      value: prop_types_default.a.string,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object
    };
    imagePicker_ImagePicker.defaultProps = {
      required: false,
      style: {}
    };
    var form_imagePicker = imagePicker_ImagePicker;
    var semanticVersion_defProp = Object.defineProperty;
    var semanticVersion_hasOwnProp = Object.prototype.hasOwnProperty;
    var semanticVersion_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var semanticVersion_propIsEnum = Object.prototype.propertyIsEnumerable;
    var semanticVersion_defNormalProp = (obj, key, value) => key in obj ? semanticVersion_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var semanticVersion_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (semanticVersion_hasOwnProp.call(b, prop2))
          semanticVersion_defNormalProp(a, prop2, b[prop2]);
      if (semanticVersion_getOwnPropSymbols)
        for (var prop2 of semanticVersion_getOwnPropSymbols(b)) {
          if (semanticVersion_propIsEnum.call(b, prop2))
            semanticVersion_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const semanticVersion_useStyles = (theme) => Object(makeStyles["a"])(() => ({
      root: semanticVersion_assign(semanticVersion_assign({
        width: "100%"
      }, theme.primaryColor ? {
        "& label": {
          color: theme.primaryColor
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.primaryColor
          },
          "&:hover fieldset": {
            borderColor: theme.primaryColor
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.primaryColor
          }
        },
        "& .MuiOutlinedInput-input": {
          color: "transparent"
        },
        "& .Mui-focused .MuiOutlinedInput-input": {
          color: theme.primaryColor
        },
        "& .MuiFormLabel-filled + .MuiOutlinedInput-root .MuiOutlinedInput-input": {
          color: theme.primaryColor
        }
      } : {}), theme.highlightColor ? {
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.highlightColor
        }
      } : {})
    }));
    const semanticVersion_FormText = ({
      hint,
      label,
      required,
      set,
      style,
      theme,
      value: passedValue,
      previousValue
    }) => {
      const [error, setError] = Object(react["useState"])(null);
      const [value, setValue] = Object(react["useState"])(passedValue);
      const styles = semanticVersion_useStyles(theme)();
      const validate = () => {
        if (required && Object(isEmpty["a"])(value)) {
          setError("This field is required");
        } else if (!semver_default.a.valid(value)) {
          setError("Invalid version string.  Expected N.N.N format (e.g. 3.1.15)");
        } else if (previousValue && !semver_default.a.gte(value, previousValue)) {
          setError(`Invalid version. The version must be greater than or equal to ${previousValue}`);
        }
      };
      Object(react["useEffect"])(() => {
        setValue(passedValue);
        if (passedValue) {
          validate();
        }
      }, [passedValue]);
      const setDebounce = Object(react["useCallback"])(Object(index_umd["debounce"])(1e3, (val) => set(val)), []);
      const handleChange = (event) => {
        setValue(event.target.value);
        setDebounce(event.target.value);
      };
      const onFocus = () => {
        setError(null);
      };
      return /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        size: "small",
        type: "text",
        variant: "outlined",
        label,
        value,
        classes: styles,
        required,
        onChange: handleChange,
        onFocus,
        onBlur: validate,
        style,
        FormHelperTextProps: {
          component: "div"
        },
        error: !!error,
        helperText: /* @__PURE__ */ react_default.a.createElement(form_helperText, {
          text: error || hint
        })
      });
    };
    semanticVersion_FormText.propTypes = {
      hint: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      required: prop_types_default.a.bool,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      value: prop_types_default.a.string,
      previousValue: prop_types_default.a.string
    };
    semanticVersion_FormText.defaultProps = {
      hint: null,
      required: false,
      style: {},
      theme: {},
      value: ""
    };
    var semanticVersion = semanticVersion_FormText;
    var form_defProp = Object.defineProperty;
    var form_hasOwnProp = Object.prototype.hasOwnProperty;
    var form_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var form_propIsEnum = Object.prototype.propertyIsEnumerable;
    var form_defNormalProp = (obj, key, value) => key in obj ? form_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var form_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (form_hasOwnProp.call(b, prop2))
          form_defNormalProp(a, prop2, b[prop2]);
      if (form_getOwnPropSymbols)
        for (var prop2 of form_getOwnPropSymbols(b)) {
          if (form_propIsEnum.call(b, prop2))
            form_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const components = {
      folder,
      markdown: form_markdown,
      select: form_select,
      text: form_text,
      color,
      multiSelect,
      image: form_imagePicker,
      semanticVersion
    };
    const Form = (props) => {
      const {
        openChannelProfile,
        previousValues,
        fields,
        onChange,
        values
      } = props;
      const renderInputType = (field) => {
        const clonedField = form_assign({}, field);
        if (components[clonedField.type] && (!clonedField.condition || clonedField.condition(values, previousValues))) {
          const Component = components[clonedField.type];
          Object.entries(clonedField).forEach(([key, val]) => {
            if (key === "options" && typeof val === "function") {
              clonedField[key] = val(openChannelProfile);
            } else if (typeof val === "function" && previousValues) {
              clonedField[key] = val(previousValues);
            }
          });
          return /* @__PURE__ */ react_default.a.createElement(Component, form_assign({
            key: clonedField.name,
            set: onChange(clonedField.name),
            value: values[clonedField.name],
            previousValue: previousValues ? previousValues[clonedField.name] : null,
            style: formRow
          }, clonedField));
        }
        return null;
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        style: {display: "flex", flexDirection: "column"}
      }, fields.map(renderInputType));
    };
    Form.propTypes = {
      openChannelProfile: prop_types_default.a.object,
      previousValues: prop_types_default.a.object,
      fields: prop_types_default.a.array,
      onChange: prop_types_default.a.func.isRequired,
      values: prop_types_default.a.object
    };
    Form.defaultProps = {
      fields: [],
      values: {}
    };
    var components_form = Form;
    var changeStatusDialog_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const IN_REVIEW_OPTION = {label: "In Review", value: "inReview"};
    const APPROVE_OPTION = {label: "Approved", value: "approved"};
    const OPTIONS_MAP = {
      pending: [IN_REVIEW_OPTION, APPROVE_OPTION],
      inReview: [APPROVE_OPTION]
    };
    const changeStatusDialog = () => {
      const {changeStatusOpen, changeStatusLoop, set} = Object(loopLibrary_context["i"])();
      const options = Object(react["useMemo"])(() => {
        var _a;
        return OPTIONS_MAP[(_a = changeStatusLoop == null ? void 0 : changeStatusLoop.status) == null ? void 0 : _a.value] || [];
      }, [changeStatusLoop]);
      const [formValues, setFormValues] = Object(react["useState"])();
      Object(react["useEffect"])(() => {
        var _a;
        setFormValues({
          status: (_a = options[0]) == null ? void 0 : _a.value
        });
      }, [options]);
      const fields = [
        {
          name: "status",
          type: "select",
          required: true,
          options
        }
      ];
      const handleClose = () => {
        set(loopLibrary_context["c"])(false);
        set(loopLibrary_context["b"])({});
        Object(tracking["h"])({
          category: tracking["a"],
          action: "Change Status dialog closed"
        });
      };
      const handleFormChange = () => (value) => setFormValues({status: value});
      const handleSetStatusClicked = () => changeStatusDialog_async(void 0, null, function* () {
        const {appId, version} = changeStatusLoop;
        const url = `/library/loop/${appId}/status/${version}`;
        const verb = "PUT";
        yield Object(utils_fetch["a"])(url, verb, {status: formValues.status});
        set(loopLibrary_context["g"])(true);
        handleClose();
      });
      return /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: changeStatusOpen,
        onClose: handleClose,
        "aria-labelledby": "form-change-status-dialog-title"
      }, /* @__PURE__ */ react_default.a.createElement(DialogTitle["a"], {
        id: "form-change-status-dialog-title"
      }, "Change Loop Status"), /* @__PURE__ */ react_default.a.createElement(DialogContent["a"], {
        className: "mb-3 font-light",
        style: {minWidth: 200, maxWidth: 400}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mb-8"
      }, "Updating the status will send an email to the Loop authors and editors."), /* @__PURE__ */ react_default.a.createElement(components_form, {
        fields,
        values: formValues,
        onChange: handleFormChange
      })), /* @__PURE__ */ react_default.a.createElement(DialogActions["a"], null, /* @__PURE__ */ react_default.a.createElement("button", {
        className: "mr-6",
        type: "button",
        onClick: handleClose
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        onClick: handleSetStatusClicked,
        className: "btn btn-primary mr-6"
      }, "Set Status")));
    };
    var loopLibrary_changeStatusDialog = changeStatusDialog;
    var component_defProp = Object.defineProperty;
    var component_hasOwnProp = Object.prototype.hasOwnProperty;
    var component_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var component_propIsEnum = Object.prototype.propertyIsEnumerable;
    var component_defNormalProp = (obj, key, value) => key in obj ? component_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var component_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (component_hasOwnProp.call(b, prop2))
          component_defNormalProp(a, prop2, b[prop2]);
      if (component_getOwnPropSymbols)
        for (var prop2 of component_getOwnPropSymbols(b)) {
          if (component_propIsEnum.call(b, prop2))
            component_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var component_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const component_theme = Object(createMuiTheme["a"])({
      typography: {
        fontFamily: '"Proxima Nova"',
        fontSize: 14
      },
      palette: {
        primary: {
          light: "#B388FF",
          main: "#651FFF",
          dark: "#311B92"
        },
        secondary: {
          light: "#00838F",
          main: "#00BCD4",
          dark: "#80DEEA"
        },
        error: {
          light: "#FF4081",
          main: "#F50057",
          dark: "#C51162"
        },
        warning: {
          light: "#FFFF8D",
          main: "#FFFF00",
          dark: "#FFD600"
        },
        info: {
          light: "#81D4FA",
          main: "#00AEFF",
          dark: "#0091EA"
        },
        success: {
          light: "#68F5CA",
          main: "#ODCC91",
          dark: "#099268"
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
      },
      overrides: {
        MuiButton: {
          contained: {
            color: colors["k"]
          }
        }
      }
    });
    const LoopLibraryScreen = () => {
      const config = Object(context_config["e"])();
      const {[context_config["c"]]: environment, osName, setConfig} = config;
      const [auth, setAuth] = Object(react["useState"])(defaultAuth);
      const [context, setContext] = Object(react["useState"])(loopLibrary_context["h"]);
      const [confirmOpen, setConfirmOpen] = Object(react["useState"])(false);
      const forceClose = Object(react["useRef"])(false);
      const closeWindow = () => {
        forceClose.current = true;
        window.close();
      };
      const setAuthData = (key) => (value) => setAuth((prev) => component_assign(component_assign({}, prev), {
        [key]: value
      }));
      const setContextData = (key) => (value) => setContext((prev) => component_assign(component_assign({}, prev), {
        [key]: value
      }));
      const [toasts, setToasts] = Object(react["useState"])([]);
      const [toastToRemove, setToastToRemove] = Object(react["useState"])([]);
      Object(react["useEffect"])(() => {
        setToasts(toasts.filter(({id}) => id !== toastToRemove));
      }, [toastToRemove]);
      const makeToast = (message, level = "info", duration = 8) => {
        const id = Object(v4["a"])();
        setToasts((prevToasts) => [
          ...prevToasts,
          {
            close: () => setToastToRemove(id),
            duration,
            id,
            level,
            message
          }
        ]);
      };
      const renderToasts = () => /* @__PURE__ */ react_default.a.createElement("div", {
        className: "absolute flex flex-col bottom-4 right-4 z-50",
        style: {maxWidth: "50%"}
      }, [...toasts].reverse().map(({close, duration, id, level, message}, index) => /* @__PURE__ */ react_default.a.createElement(toast, {
        key: id,
        close,
        duration,
        level,
        message,
        className: index !== 0 ? "mt-3" : ""
      })));
      const fetchAuth = () => component_async(void 0, null, function* () {
        try {
          const result = yield Object(utils_fetch["b"])("/auth/me");
          setAuthData("isloggedIn")(true);
          setAuthData("profile")(result);
          return result;
        } catch (error) {
          if (error instanceof Error) {
            makeToast("Olive Helps was unable to connect to the Olive Helps API. This may be because you are not connected to the internet or there may be an issue with the Loop Library itself. You can still manage your installed loops here.", "error");
          }
          console.error(error);
          return null;
        }
      });
      const fetchOpenChannelUser = (userProfile) => component_async(void 0, null, function* () {
        if (!userProfile)
          return;
        try {
          const response = yield Object(utils_fetch["a"])(`/auth/getOrCreateUserAccount`);
          const {profile, isDeveloper, csrfToken} = response;
          setAuthData("openChannelProfile")(component_assign({}, profile));
          setAuthData("isDeveloper")(isDeveloper);
          sessionStorage.setItem("csrfToken", csrfToken);
        } catch (error) {
          makeToast("Olive Helps was unable to connect to the Loop Library API. This may be because you are not connected to the internet or there may be an issue with the Loop Library itself. You can still manage your installed plugins here.", "error");
          console.error("error fetching open channel profile", error);
        } finally {
          setAuthData("hasFetched")(true);
        }
      });
      const fetchAvailableLoops = (userProfile) => component_async(void 0, null, function* () {
        if (!userProfile || !osName)
          return;
        try {
          const list = yield Object(utils_fetch["a"])(`/library/loops?os=${osName}`);
          setContextData(loopLibrary_context["a"])(list);
        } catch (error) {
          console.error(error);
        }
      });
      const fetchData = () => component_async(void 0, null, function* () {
        const userProfile = yield fetchAuth();
        yield fetchOpenChannelUser(userProfile);
        yield fetchAvailableLoops(userProfile);
      });
      const onReady = () => {
        window.onbeforeunload = () => {
          let ret;
          if (!forceClose.current && Object(messaging["o"])()) {
            Object(tracking["h"])({
              category: tracking["a"],
              action: "Confirm Close Window Opened"
            });
            setConfirmOpen(true);
            ret = false;
          }
          return ret;
        };
        Promise.all([Object(messaging["j"])(), Object(messaging["b"])()]).then(([winConfig, {osName: os, loopContractVersion}]) => {
          if (winConfig && os && loopContractVersion) {
            setConfig(component_assign(component_assign({}, winConfig), {osName: os, loopContractVersion}));
          }
        }).catch(console.error);
      };
      Object(react["useEffect"])(() => {
        Object(tracking["g"])();
        document.addEventListener("astilectron-ready", onReady);
        return () => {
          document.removeEventListener("astilectron-ready", onReady);
        };
      }, []);
      Object(react["useEffect"])(() => {
        if (window.astilectron) {
          fetchData();
          Object(messaging["f"])().then((loops) => {
            if (loops) {
              const localInstalled = loops.filter((item) => item.local);
              const installed = loops.filter((item) => !item.local);
              setContextData(loopLibrary_context["e"])(localInstalled);
              setContextData(loopLibrary_context["d"])(installed);
            }
          });
        }
      }, [window.astilectron]);
      return /* @__PURE__ */ react_default.a.createElement(router, null, /* @__PURE__ */ react_default.a.createElement(ThemeProvider["a"], {
        theme: component_theme
      }, /* @__PURE__ */ react_default.a.createElement(loopLibrary_context["f"].Provider, {
        value: component_assign(component_assign({}, context), {set: setContextData, makeToast})
      }, /* @__PURE__ */ react_default.a.createElement(AuthContext.Provider, {
        value: component_assign(component_assign({}, auth), {set: setAuthData})
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("font-sans", "bg-grey-100", "text-grey-800", "flex", "flex-col", "h-screen", "w-screen", "relative", environment)
      }, /* @__PURE__ */ react_default.a.createElement(header, null), /* @__PURE__ */ react_default.a.createElement("div", {
        className: "mt-20 flex items-start",
        style: {height: "calc(100% - 5rem)"}
      }, /* @__PURE__ */ react_default.a.createElement(side_nav, null), /* @__PURE__ */ react_default.a.createElement(content, null)), renderToasts(), /* @__PURE__ */ react_default.a.createElement(loopLibrary_changeStatusDialog, null), /* @__PURE__ */ react_default.a.createElement(confirmDialog["a"], {
        open: confirmOpen,
        setOpen: setConfirmOpen,
        onConfirm: closeWindow,
        title: "Are you sure you want to close?"
      }, "Closing this window while you have active processes may generate an error, are you sure you want to continue?"))))));
    };
    var component = LoopLibraryScreen;
    var react_mde_all = __webpack_require__(640);
    var loopLibrary_style = __webpack_require__(1090);
    const Container = Object(app["a"])(component);
    react_dom_default.a.render(/* @__PURE__ */ react_default.a.createElement(Container, null), document.getElementById("app"));
  },
  13: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return AVAILABLE;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return INSTALLED;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return LOCAL_INSTALLED;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return CHANGE_STATUS_OPEN;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return CHANGE_STATUS_LOOP;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return REFRESH_DATA;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return defaultContext;
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return LibraryContext;
    });
    __webpack_require__.d(__webpack_exports__, "i", function() {
      return useLibraryContext;
    });
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    const AVAILABLE = "available";
    const INSTALLED = "installed";
    const LOCAL_INSTALLED = "localInstalled";
    const CHANGE_STATUS_OPEN = "changeStatusOpen";
    const CHANGE_STATUS_LOOP = "changeStatusLoop";
    const REFRESH_DATA = "refreshData";
    const defaultContext = {
      [AVAILABLE]: null,
      [INSTALLED]: null,
      [LOCAL_INSTALLED]: [],
      [CHANGE_STATUS_OPEN]: false,
      [CHANGE_STATUS_LOOP]: {},
      [REFRESH_DATA]: false,
      set: () => {
      },
      makeToast: () => {
      }
    };
    const LibraryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultContext);
    const useLibraryContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LibraryContext);
    var _unused_webpack_default_export = {
      defaultContext,
      LibraryContext
    };
  },
  14: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return KEY_DISPLAYS;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return KEY_ENVIRONMENT;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return defaultConfig;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return ConfigContext;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return useConfigContext;
    });
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    const KEY_DISPLAYS = "displays";
    const KEY_ENVIRONMENT = "environment";
    const defaultConfig = {
      setConfig: () => {
      },
      setConfigItem: () => {
      }
    };
    const ConfigContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultConfig);
    const useConfigContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ConfigContext);
    var _unused_webpack_default_export = {
      defaultConfig,
      ConfigContext,
      useConfigContext
    };
  },
  18: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const Spinner = ({svg, circle, color}) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animate-spin flex flex-row justify-center items-center"
      }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({
        height: "36",
        width: "36"
      }, svg), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", __assign({
        cx: "50%",
        cy: "50%",
        r: "12px",
        strokeDasharray: "55, 30",
        stroke: color,
        strokeWidth: "3",
        fill: "none"
      }, circle))), " ");
    };
    Spinner.propTypes = {
      svg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      circle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    };
    Spinner.defaultProps = {
      color: "#651fff"
    };
    __webpack_exports__["a"] = Spinner;
  },
  19: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return getLoopLibraryContext;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return fetchSidekickApi;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return fetchLLApi;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return uploadFile;
    });
    var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
    var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(753);
    var messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __rest = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const getAddressSidekickAPI = () => {
      return new Promise((resolve, reject) => Object(messaging__WEBPACK_IMPORTED_MODULE_2__["b"])().then(({addressSidekickAPI}) => {
        if (!addressSidekickAPI) {
          return reject(new Error("failure getting Sidekick API address: no URL provided"));
        }
        return resolve(addressSidekickAPI);
      }).catch((error) => reject(error)));
    };
    const getLoopLibraryContext = () => {
      return new Promise((resolve, reject) => Object(messaging__WEBPACK_IMPORTED_MODULE_2__["b"])().then(({
        addressLoopLibraryAPI,
        loopLibraryMajorVersion,
        version: desktopVersion,
        loopContractVersion
      }) => {
        if (!addressLoopLibraryAPI) {
          return reject(new Error("failure getting LL API environment: no addressLoopLibraryAPI returned"));
        }
        if (!loopLibraryMajorVersion) {
          return reject(new Error("failure getting loop library major version: no loopLibraryMajorVersion returned"));
        }
        return resolve({
          apiUrl: addressLoopLibraryAPI,
          loopLibraryMajorVersion,
          desktopVersion,
          loopContractVersion
        });
      }).catch((error) => reject(error)));
    };
    const doFetch = (_0, ..._1) => __async(void 0, [_0, ..._1], function* (url, method = "GET", data = {}, conf = {}) {
      const {confHeaders} = conf, extra = __rest(conf, ["confHeaders"]);
      const headers = __assign({
        "Content-Type": "application/json"
      }, confHeaders || {});
      const config = __assign({method, headers}, extra || {});
      if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["a"])(data)) {
        config.body = config.headers["Content-Type"] === "application/json" ? JSON.stringify(data) : data;
      }
      const response = yield fetch(url, config);
      if (!response.ok) {
        throw Object(ramda__WEBPACK_IMPORTED_MODULE_1__["a"])(["ok", "status", "statusText", "url"], response);
      }
      return response.json();
    });
    const fetchSidekickApi = (..._0) => __async(void 0, [..._0], function* (url = "/", method = "GET", data = {}, conf = {}) {
      const apiUrl = yield getAddressSidekickAPI();
      const result = yield doFetch(`${apiUrl}${url}`, method, data, conf);
      return result;
    });
    const fetchLLApi = (..._0) => __async(void 0, [..._0], function* (url = "/", method = "GET", data = {}, conf = {credentials: "include"}) {
      const {
        apiUrl,
        loopLibraryMajorVersion,
        desktopVersion,
        loopContractVersion
      } = yield getLoopLibraryContext();
      const result = yield doFetch(`${apiUrl}${url}`, method, data, __assign({
        credentials: "include",
        confHeaders: __assign({
          "LIBRARY-MAJOR-VERSION": loopLibraryMajorVersion,
          "OLIVE-HELPS-VERSION": desktopVersion,
          "LDK-CONTRACT-VERSION": loopContractVersion
        }, method !== "GET" ? {"CSRF-TOKEN": sessionStorage.getItem("csrfToken") || ""} : void 0)
      }, conf));
      return result;
    });
    const uploadFile = (file, url) => __async(void 0, null, function* () {
      const {
        apiUrl,
        loopLibraryMajorVersion,
        desktopVersion,
        loopContractVersion
      } = yield getLoopLibraryContext();
      const data = new FormData();
      data.append("logo", file);
      const res = yield fetch(`${apiUrl}${url}`, {
        method: "POST",
        credentials: "include",
        body: data,
        headers: {
          "LIBRARY-MAJOR-VERSION": loopLibraryMajorVersion,
          "OLIVE-HELPS-VERSION": desktopVersion,
          "LDK-CONTRACT-VERSION": loopContractVersion,
          "CSRF-TOKEN": sessionStorage.getItem("csrfToken") || ""
        }
      });
      const {body} = yield res.json();
      return body;
    });
  },
  21: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return KEY_HIDE_SIDEBAR;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return KEY_HOT_ZONE;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return KEY_NEW_WHISPER_ACTION;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return KEY_WINDOW_PLACEMENT;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return HIDE_SIDEBAR_MANUAL;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return defaultSettings;
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return SettingsContext;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return useSettingsContext;
    });
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    const KEY_HIDE_SIDEBAR = "hideSidebar";
    const KEY_HOT_ZONE = "hotZone";
    const KEY_NEW_WHISPER_ACTION = "newWhisperAction";
    const KEY_WINDOW_PLACEMENT = "windowPlacement";
    const HIDE_SIDEBAR_MANUAL = "manual";
    const HIDE_SIDEBAR_3_SECONDS = "3000";
    const defaultSettings = {
      set: () => {
      },
      setItem: () => {
      }
    };
    const SettingsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultSettings);
    const useSettingsContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SettingsContext);
    var _unused_webpack_default_export = {
      defaultSettings,
      SettingsContext,
      useSettingsContext
    };
  },
  288: function(module, exports, __webpack_require__) {
    module.exports = {container: "tooltip--container--1zeCH9di"};
  },
  29: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var prop_types = __webpack_require__(1);
    var prop_types_default = /* @__PURE__ */ __webpack_require__.n(prop_types);
    const container = {
      direction: "ltr",
      display: "block",
      fontFamily: "Material Icons",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: "normal",
      height: "1.5rem",
      letterSpacing: "normal",
      lineHeight: 1,
      overflow: "hidden",
      textTransform: "none",
      textRendering: "optimizeLegibility",
      userSelect: "none",
      whiteSpace: "nowrap",
      width: "1.5rem",
      wordWrap: "normal"
    };
    const variants = {
      outlined: {
        fontFamily: "Material Icons Outlined"
      },
      round: {
        fontFamily: "Material Icons Round"
      },
      sharp: {
        fontFamily: "Material Icons Sharp"
      },
      "two-tone": {
        fontFamily: "Material Icons Two Tone"
      }
    };
    const svgIcon = {
      display: "block",
      height: "1.5rem",
      width: "1.5rem"
    };
    var styles = {
      container,
      svgIcon
    };
    var svg = __webpack_require__(93);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const IconComponent = (props) => {
      const {className, icon, src, style, type} = props;
      if (src) {
        return /* @__PURE__ */ react_default.a.createElement("div", __assign(__assign({}, __assign({}, className ? {className} : {})), {
          style,
          dangerouslySetInnerHTML: {__html: src}
        }));
      }
      if (icon && svg["a"][icon]) {
        return /* @__PURE__ */ react_default.a.createElement("div", __assign(__assign({}, __assign({}, className ? {className} : {})), {
          style: __assign(__assign({}, svgIcon), style),
          dangerouslySetInnerHTML: {__html: svg["a"][icon]}
        }));
      }
      return /* @__PURE__ */ react_default.a.createElement("i", __assign({
        style: __assign(__assign(__assign({}, container), type ? variants[type] : {}), style)
      }, __assign({}, className ? {className} : {})), icon);
    };
    IconComponent.propTypes = {
      className: prop_types_default.a.string,
      icon: prop_types_default.a.string.isRequired,
      src: prop_types_default.a.string,
      style: prop_types_default.a.object,
      type: prop_types_default.a.string
    };
    IconComponent.defaultProps = {
      className: null,
      src: null,
      style: {},
      type: null
    };
    var components_icon = __webpack_exports__["a"] = IconComponent;
  },
  3: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "p", function() {
      return whitePrimary;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return blackPrimary;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return blackSecondary;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return deepPurplePrimary;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return deepPurpleLight;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return deepPurpleDisabled;
    });
    __webpack_require__.d(__webpack_exports__, "n", function() {
      return pinkPrimary;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return grey300;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return grey400;
    });
    __webpack_require__.d(__webpack_exports__, "m", function() {
      return greyDisabled;
    });
    __webpack_require__.d(__webpack_exports__, "i", function() {
      return grey500;
    });
    __webpack_require__.d(__webpack_exports__, "j", function() {
      return grey700;
    });
    __webpack_require__.d(__webpack_exports__, "k", function() {
      return grey800;
    });
    __webpack_require__.d(__webpack_exports__, "l", function() {
      return grey900;
    });
    __webpack_require__.d(__webpack_exports__, "o", function() {
      return radarRed;
    });
    const whitePrimary = "#ffffff";
    const whiteSecondary = "rgba(255, 255, 255, 0.7)";
    const whiteDisabled = "rgba(255, 255, 255, 0.5)";
    const whiteInactive = "rgba(255, 255, 255, 0.3)";
    const whiteDivider = "rgba(255, 255, 255, 0.12)";
    const blackPrimary = "rgba(0, 0, 0, 0.87)";
    const blackSecondary = "rgba(0, 0, 0, 0.54)";
    const blackDisabled = "rgba(0, 0, 0, 0.38)";
    const blackInactive = "rgba(0, 0, 0, 0.26)";
    const blackDivider = "rgba(0, 0, 0, 0.12)";
    const blueDark = "#0d47a1";
    const bluePrimary = "#2962ff";
    const blueLight = "#448aff";
    const lightBlueDark = "#0091ea";
    const lightBluePrimary = "#00aeff";
    const lightBlueLight = "#81d4fa";
    const cyanDark = "#00838f";
    const cyanPrimary = "#00bcd4";
    const cyanLight = "#80deea";
    const tealDark = "#099268";
    const tealPrimary = "#0dcc91";
    const tealLight = "#68f5ca";
    const deepPurpleDark = "#311b92";
    const deepPurplePrimary = "#651fff";
    const deepPurpleLight = "#b388ff";
    const deepPurpleDisabled = "#d3befa";
    const purpleDark = "#4a148c";
    const purplePrimary = "#8e24aa";
    const purpleLight = "#ba68c8";
    const pinkDark = "#c51162";
    const pinkPrimary = "#f50057";
    const pinkLight = "#ff4081";
    const orangeDark = "#ff6d00";
    const orangePrimary = "#ff9100";
    const orangeLight = "#ffab40";
    const yellowDark = "#ffd600";
    const yellowPrimary = "#ff0";
    const yellowLight = "#ffff8d";
    const grey100 = "#f5f5f5";
    const grey200 = "#eeeeee";
    const grey300 = "#e0e0e0";
    const grey400 = "#bdbdbd";
    const greyDisabled = "#939393";
    const grey500 = "#9e9e9e";
    const grey700 = "#616161";
    const grey800 = "#424242";
    const grey900 = "#212121";
    const radarRed = "#eb473b";
    const gradPurplePink = (direction = "to right") => `linear-gradient(${direction}, #7619FF, #C5457A)`;
    const COLOR = {
      white: {
        primary: whitePrimary,
        secondary: whiteSecondary,
        disabled: whiteDisabled,
        inactive: whiteInactive,
        divider: whiteDivider
      },
      black: {
        primary: blackPrimary,
        secondary: blackSecondary,
        disabled: blackDisabled,
        inactive: blackInactive,
        divider: blackDivider
      },
      blue: {dark: blueDark, primary: bluePrimary, light: blueLight},
      "light-blue": {
        dark: lightBlueDark,
        primary: lightBluePrimary,
        light: lightBlueLight
      },
      lightBlue: {
        dark: lightBlueDark,
        primary: lightBluePrimary,
        light: lightBlueLight
      },
      cyan: {dark: cyanDark, primary: cyanPrimary, light: cyanLight},
      teal: {dark: tealDark, primary: tealPrimary, light: tealLight},
      "deep-purple": {
        dark: deepPurpleDark,
        primary: deepPurplePrimary,
        light: deepPurpleLight,
        disabled: deepPurpleDisabled
      },
      deepPurple: {
        dark: deepPurpleDark,
        primary: deepPurplePrimary,
        light: deepPurpleLight,
        disabled: deepPurpleDisabled
      },
      purple: {dark: purpleDark, primary: purplePrimary, light: purpleLight},
      pink: {dark: pinkDark, primary: pinkPrimary, light: pinkLight},
      orange: {dark: orangeDark, primary: orangePrimary, light: orangeLight},
      yellow: {dark: yellowDark, primary: yellowPrimary, light: yellowLight},
      grey: {
        100: grey100,
        200: grey200,
        300: grey300,
        400: grey400,
        disabled: greyDisabled,
        500: grey500,
        700: grey700,
        800: grey800,
        900: grey900
      },
      whitePrimary,
      whiteSecondary,
      whiteDisabled,
      whiteInactive,
      whiteDivider,
      blackPrimary,
      blackSecondary,
      blackDisabled,
      blackInactive,
      blackDivider,
      blueDark,
      bluePrimary,
      blueLight,
      lightBlueDark,
      lightBluePrimary,
      lightBlueLight,
      cyanDark,
      cyanPrimary,
      cyanLight,
      tealDark,
      tealPrimary,
      tealLight,
      deepPurpleDark,
      deepPurplePrimary,
      deepPurpleLight,
      deepPurpleDisabled,
      purpleDark,
      purplePrimary,
      purpleLight,
      pinkDark,
      pinkPrimary,
      pinkLight,
      orangeDark,
      orangePrimary,
      orangeLight,
      yellowDark,
      yellowPrimary,
      yellowLight,
      grey100,
      grey200,
      grey300,
      grey400,
      greyDisabled,
      grey500,
      grey700,
      grey800,
      grey900,
      radarRed
    };
    __webpack_exports__["f"] = COLOR;
  },
  30: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return themes;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return defaultTheme;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return ThemeContext;
    });
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
    var constants_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
    const getVarsByBackgroundType = (primary = null, secondary = null, card = null) => ({
      primary,
      secondary,
      card
    });
    const themes = {
      [constants_environment__WEBPACK_IMPORTED_MODULE_2__["b"]]: {
        background: getVarsByBackgroundType("#00AEEFb2", "#00AEEF", utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary),
        icon: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        text: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        highlight: utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].lightBluePrimary
      },
      [constants_environment__WEBPACK_IMPORTED_MODULE_2__["a"]]: {
        background: getVarsByBackgroundType("#ff6700b2", "#ff6700", utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary),
        icon: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        text: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        highlight: utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].orangePrimary
      },
      [constants_environment__WEBPACK_IMPORTED_MODULE_2__["d"]]: {
        background: getVarsByBackgroundType("#00b21db2", "#00b21d", utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary),
        icon: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        text: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        highlight: utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].tealPrimary
      },
      [constants_environment__WEBPACK_IMPORTED_MODULE_2__["c"]]: {
        background: getVarsByBackgroundType("#651fffb2", "#651fff", utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary),
        icon: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        text: getVarsByBackgroundType(utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].whitePrimary, utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].grey700),
        highlight: utils_style_core_colors__WEBPACK_IMPORTED_MODULE_1__["f"].deepPurplePrimary
      }
    };
    const defaultTheme = {
      mode: constants_environment__WEBPACK_IMPORTED_MODULE_2__["c"],
      theme: themes[constants_environment__WEBPACK_IMPORTED_MODULE_2__["c"]]
    };
    const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultTheme);
    var _unused_webpack_default_export = {
      defaultTheme,
      themes,
      ThemeContext
    };
  },
  303: function(module, exports, __webpack_require__) {
    module.exports = {container: "markdown--container--3x4eWVgn", heading: "markdown--heading--2dP8815Q", "heading-1": "markdown--heading-1--4nSnavak", heading1: "markdown--heading-1--4nSnavak", "heading-2": "markdown--heading-2--1z2dncCS", heading2: "markdown--heading-2--1z2dncCS", "heading-3": "markdown--heading-3--2ZCxRew4", heading3: "markdown--heading-3--2ZCxRew4"};
  },
  318: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var loopLibrary_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
    var messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
    var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
    var loopLibrary_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const RestartButton = ({appId}) => {
      const [isProcessing, setIsProcessing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
      const {makeToast} = Object(loopLibrary_context__WEBPACK_IMPORTED_MODULE_1__["i"])();
      const doRestart = (event) => __async(void 0, null, function* () {
        event.stopPropagation();
        event.preventDefault();
        setIsProcessing(true);
        try {
          yield Object(messaging__WEBPACK_IMPORTED_MODULE_2__["A"])(appId);
          makeToast("Successfully restarted Loop", "success");
        } catch (error) {
          console.error(error);
          makeToast("Error restarting Loop", "error");
        } finally {
          setIsProcessing(false);
        }
      });
      if (isProcessing) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(loopLibrary_components_spinner__WEBPACK_IMPORTED_MODULE_4__["a"], null);
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: doRestart
      }, "Restart");
    };
    RestartButton.propTypes = {
      appId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
    };
    __webpack_exports__["a"] = RestartButton;
  },
  32: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return Context;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return contextProvider;
    });
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    const initialState = {
      isDeleteNoteDialogOpen: false,
      isDiscardChangesDialogOpen: false,
      isFormDirty: false,
      isFormOpen: false,
      isSidenoteOpen: false,
      nextNoteIdToEdit: null,
      noteIdBeingEdited: null,
      noteIdToDelete: null,
      notes: []
    };
    const Context = react_default.a.createContext();
    var prop_types = __webpack_require__(1);
    var prop_types_default = /* @__PURE__ */ __webpack_require__.n(prop_types);
    var tracking = __webpack_require__(4);
    var messaging = __webpack_require__(5);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const ContextProvider = ({children}) => {
      const [state, setState] = Object(react["useState"])(initialState);
      const set = (keyOrFunc, value) => {
        if (typeof keyOrFunc === "string") {
          const key = keyOrFunc;
          setState((prev) => __assign(__assign({}, prev), {
            [key]: value
          }));
        } else {
          setState(keyOrFunc);
        }
      };
      const fetchAllNotes = () => __async(void 0, null, function* () {
        const notes = yield Object(messaging["P"])();
        set("notes", notes);
      });
      const updateNoteList = (note) => {
        setState((prevState) => {
          const newNoteList = [
            ...prevState.notes.filter((n) => n.id !== note.id),
            note
          ];
          return __assign(__assign({}, prevState), {notes: newNoteList});
        });
      };
      const openSidenote = () => __async(void 0, null, function* () {
        yield fetchAllNotes();
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Opened Sidenote"
        });
        set("isSidenoteOpen", true);
      });
      const closeSidenote = () => {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Close Sidenote"
        });
        set("isSidenoteOpen", false);
      };
      const openEditForm = (note) => {
        setState((prevState) => {
          const {
            isFormDirty,
            isSidenoteOpen,
            noteIdBeingEdited,
            notes
          } = prevState;
          const existingNote = notes.find((n) => n.id === note.id);
          if (!existingNote) {
            return prevState;
          }
          const newNoteList = [...notes.filter((n) => n.id !== note.id), note];
          if (!isSidenoteOpen) {
            setTimeout(openSidenote, 1);
          }
          if (isFormDirty && noteIdBeingEdited !== note.id) {
            return __assign(__assign({}, prevState), {
              isDiscardChangesDialogOpen: true,
              notes: newNoteList,
              nextNoteIdToEdit: note.id
            });
          }
          Object(tracking["h"])({
            category: tracking["e"],
            action: "Edit Note Form Opened"
          });
          return __assign(__assign({}, prevState), {
            isFormOpen: true,
            nextNoteIdToEdit: null,
            notes: newNoteList,
            noteIdBeingEdited: note.id
          });
        });
      };
      const openNewForm = () => {
        setState((prevState) => {
          Object(tracking["h"])({
            category: tracking["e"],
            action: "New Note Form Opened"
          });
          return __assign(__assign({}, prevState), {
            isFormOpen: true,
            nextNoteIdToEdit: null
          });
        });
      };
      const closeForm = () => {
        setState((prevState) => {
          Object(tracking["h"])({
            category: tracking["e"],
            action: "New Note Form/Edit Form Closed"
          });
          fetchAllNotes();
          return __assign(__assign({}, prevState), {
            isFormOpen: false,
            noteIdBeingEdited: null
          });
        });
      };
      return /* @__PURE__ */ react_default.a.createElement(Context.Provider, {
        value: __assign(__assign({}, state), {
          closeForm,
          closeSidenote,
          fetchAllNotes,
          updateNoteList,
          openEditForm,
          openNewForm,
          openSidenote,
          set
        })
      }, children);
    };
    ContextProvider.propTypes = {
      children: prop_types_default.a.node
    };
    var contextProvider = ContextProvider;
  },
  325: function(module, exports, __webpack_require__) {
    module.exports = {button: "button--button--3YkYV3Rr", label: "button--label--36rewvpC"};
  },
  33: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var components_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
    var context_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
    var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
    var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(325);
    var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const Button = ({
      children,
      className,
      color,
      disabled,
      label,
      onClick,
      style,
      title,
      tooltip,
      tooltipPosition
    }) => {
      const renderButton = () => {
        const {theme} = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_themes__WEBPACK_IMPORTED_MODULE_3__["a"]);
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", __assign({
          style: __assign({
            backgroundColor: !color ? theme.background.secondary : color,
            color: theme.text.secondary
          }, style),
          className: Object(utils__WEBPACK_IMPORTED_MODULE_4__["b"])([
            _styles_scss__WEBPACK_IMPORTED_MODULE_5__["button"],
            label ? _styles_scss__WEBPACK_IMPORTED_MODULE_5__["label"] : null,
            className
          ]),
          title
        }, !disabled ? {
          onClick,
          role: "button",
          tabIndex: "-1"
        } : {
          disabled
        }), label || children);
      };
      if (tooltip && !disabled) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tooltip__WEBPACK_IMPORTED_MODULE_2__["a"], {
          text: tooltip,
          position: tooltipPosition,
          disabled
        }, renderButton());
      }
      return renderButton();
    };
    Button.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
      className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      tooltipPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    };
    Button.defaultProps = {
      children: null,
      className: "",
      color: null,
      disabled: false,
      label: null,
      style: {},
      title: null,
      tooltip: null,
      tooltipPosition: "top"
    };
    __webpack_exports__["a"] = Button;
  },
  35: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return defaultGlobal;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return GlobalContext;
    });
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    const defaultGlobal = {
      sidebarOpen: true,
      set: () => {
      }
    };
    const GlobalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultGlobal);
    var _unused_webpack_default_export = {
      defaultGlobal,
      GlobalContext
    };
  },
  384: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(754);
    var components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
    var components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
    var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70);
    var _styles__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_5__);
    const ConfirmDialog = ({title, children, open, setOpen, onConfirm}) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__["a"], {
        open,
        onClose: () => setOpen(false),
        "aria-labelledby": "confirm-dialog"
      }, title && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["dialogHeader"]
      }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["dialogTitle"]
      }, title), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_3__["a"], {
        onClick: () => setOpen(false),
        tooltip: "Close",
        color: "transparent",
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["dialogCloseButton"]
      }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_icon__WEBPACK_IMPORTED_MODULE_4__["a"], {
        icon: "close",
        className: "text-white"
      }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["dialogContent"]
      }, children), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["dialogActions"]
      }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_3__["a"], {
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["cancelBtn"],
        variant: "contained",
        onClick: () => setOpen(false),
        color: "transparent"
      }, "No"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_button__WEBPACK_IMPORTED_MODULE_3__["a"], {
        className: _styles__WEBPACK_IMPORTED_MODULE_5__["closeBtn"],
        variant: "contained",
        onClick: () => {
          setOpen(false);
          onConfirm();
        },
        color: "black"
      }, "Yes")));
    };
    __webpack_exports__["a"] = ConfirmDialog;
    ConfirmDialog.propTypes = {
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
      open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
      setOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    };
  },
  385: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
    var classnames__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
    var context_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
    var utils_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
    var loopLibrary_components_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
    var components_restartButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(318);
    var _addLoop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69);
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const sizeOptions = (size) => ({
      "btn-lg": size === "lg",
      "btn-sm": size === "sm",
      "btn-xs": size === "xs"
    });
    const LoopAddButton = ({
      appId,
      availableLoop,
      getInstalled,
      installedLoop,
      isLoopInstalled,
      isLoopLocallyInstalled,
      isProcessing: parentIsProcessing,
      isValidContractVersion,
      makeToast,
      needsUpdate,
      size,
      trackingCategory
    }) => {
      var _a, _b, _c;
      const {osName} = Object(context_config__WEBPACK_IMPORTED_MODULE_3__["e"])();
      const [isProcessing, setIsProcessing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (parentIsProcessing !== null) {
          setIsProcessing(parentIsProcessing);
        }
      }, [parentIsProcessing]);
      const addLoop = (isUpdate) => (event) => __async(void 0, null, function* () {
        event.stopPropagation();
        event.preventDefault();
        try {
          setIsProcessing(true);
          yield Object(_addLoop__WEBPACK_IMPORTED_MODULE_7__["a"])(appId, osName);
          getInstalled();
          Object(utils_tracking__WEBPACK_IMPORTED_MODULE_4__["h"])({
            category: trackingCategory,
            action: needsUpdate ? "Loop Updated" : "Loop Added",
            label: appId
          });
          setIsProcessing(false);
          try {
            yield Object(_addLoop__WEBPACK_IMPORTED_MODULE_7__["c"])(appId);
          } catch (error) {
            makeToast(error.message, "error");
            if (isUpdate) {
              try {
                yield Object(_addLoop__WEBPACK_IMPORTED_MODULE_7__["b"])(appId);
              } catch (restoreError) {
                makeToast(restoreError.message, "error");
              }
            }
          }
        } catch (error) {
          makeToast(error.message, "error");
        } finally {
          setIsProcessing(false);
        }
        return null;
      });
      if (isProcessing) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(loopLibrary_components_spinner__WEBPACK_IMPORTED_MODULE_5__["a"], null);
      }
      if (isLoopLocallyInstalled) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_restartButton__WEBPACK_IMPORTED_MODULE_6__["a"], {
          appId
        });
      }
      if (!isLoopInstalled && !isLoopLocallyInstalled) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn btn-primary", sizeOptions(size), {
            "btn-disabled cursor-not-allowed": !isValidContractVersion
          }),
          onClick: addLoop(),
          disabled: !isValidContractVersion
        }, "Add");
      }
      if (needsUpdate) {
        const osMap = {
          win32: "semverWindows",
          darwin: "semverMac"
        };
        const osMapB = {
          win32: "windows",
          darwin: "mac"
        };
        let title;
        const updateToVersion = ((_a = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _a.specification) === "2" ? (_b = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _b.semver : (_c = availableLoop == null ? void 0 : availableLoop.customData) == null ? void 0 : _c.semver[osMapB[osName]];
        if (installedLoop) {
          const updateFromVersion = installedLoop.specification === "2" ? installedLoop.semver : installedLoop[osMap[osName]];
          title = `Update from v${updateFromVersion} to v${updateToVersion}`;
        } else {
          title = `Update to v${updateToVersion}`;
        }
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn btn-primary", sizeOptions(size), {
            "btn-disabled cursor-not-allowed": !isValidContractVersion
          }),
          onClick: addLoop(true),
          disabled: !isValidContractVersion,
          title
        }, "Update");
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("text-grey-disabled py-2 px-4 w-auto inline-block text-center", sizeOptions(size))
      }, "Added");
    };
    LoopAddButton.propTypes = {
      appId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      availableLoop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      getInstalled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      installedLoop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      isLoopInstalled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
      isLoopLocallyInstalled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
      isProcessing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      isValidContractVersion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      makeToast: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      needsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
      size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      trackingCategory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    };
    LoopAddButton.defaultProps = {
      isProcessing: null,
      isValidContractVersion: true
    };
    __webpack_exports__["a"] = LoopAddButton;
  },
  39: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var _popperjs_core_lib_popper_lite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296);
    var _popperjs_core_lib_modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(298);
    var _popperjs_core_lib_modifiers_flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
    var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(288);
    var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const Tooltip = ({
      children,
      className,
      disabled,
      onClick,
      position,
      style,
      text,
      tipStyle,
      hide,
      duration
    }) => {
      const [isShown, setIsShown] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
      const createTimeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
      const popperInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
      const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
      const tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
      const destroyTooltip = () => {
        if (createTimeout.current)
          clearTimeout(createTimeout.current);
        if (popperInstance == null ? void 0 : popperInstance.current) {
          setIsShown(false);
          popperInstance.current.destroy();
          popperInstance.current = null;
        }
      };
      const createTooltip = () => {
        createTimeout.current = setTimeout(() => {
          popperInstance.current = Object(_popperjs_core_lib_popper_lite_js__WEBPACK_IMPORTED_MODULE_2__["a"])(contentRef.current, tooltipRef.current, {
            placement: position,
            modifiers: [_popperjs_core_lib_modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_3__["a"], _popperjs_core_lib_modifiers_flip_js__WEBPACK_IMPORTED_MODULE_4__["a"]]
          });
          setIsShown(true);
        }, duration || 1e3);
      };
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        return () => {
          destroyTooltip();
        };
      }, []);
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", __assign(__assign({
        ref: contentRef,
        className,
        onMouseEnter: createTooltip,
        onMouseLeave: destroyTooltip
      }, onClick ? {
        onClick
      } : {}), {
        "data-tooltip": true,
        style: __assign({cursor: !disabled ? "pointer" : "no-drop"}, style)
      }), children), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        ref: tooltipRef,
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_5__["container"],
        style: __assign(__assign({}, tipStyle), {display: isShown && !hide ? "block" : "none"}),
        onMouseLeave: destroyTooltip
      }, text));
    };
    Tooltip.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
        prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
      ]).isRequired,
      className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
      position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      tipStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      hide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
      duration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
    };
    Tooltip.defaultProps = {
      className: null,
      disabled: false,
      duration: 1e3,
      hide: false,
      onClick: null,
      position: "top",
      style: {},
      text: "",
      tipStyle: {}
    };
    __webpack_exports__["a"] = Tooltip;
  },
  399: function(module, exports, __webpack_require__) {
    var map = {
      "./af": 147,
      "./af.js": 147,
      "./ar": 148,
      "./ar-dz": 149,
      "./ar-dz.js": 149,
      "./ar-kw": 150,
      "./ar-kw.js": 150,
      "./ar-ly": 151,
      "./ar-ly.js": 151,
      "./ar-ma": 152,
      "./ar-ma.js": 152,
      "./ar-sa": 153,
      "./ar-sa.js": 153,
      "./ar-tn": 154,
      "./ar-tn.js": 154,
      "./ar.js": 148,
      "./az": 155,
      "./az.js": 155,
      "./be": 156,
      "./be.js": 156,
      "./bg": 157,
      "./bg.js": 157,
      "./bm": 158,
      "./bm.js": 158,
      "./bn": 159,
      "./bn-bd": 160,
      "./bn-bd.js": 160,
      "./bn.js": 159,
      "./bo": 161,
      "./bo.js": 161,
      "./br": 162,
      "./br.js": 162,
      "./bs": 163,
      "./bs.js": 163,
      "./ca": 164,
      "./ca.js": 164,
      "./cs": 165,
      "./cs.js": 165,
      "./cv": 166,
      "./cv.js": 166,
      "./cy": 167,
      "./cy.js": 167,
      "./da": 168,
      "./da.js": 168,
      "./de": 169,
      "./de-at": 170,
      "./de-at.js": 170,
      "./de-ch": 171,
      "./de-ch.js": 171,
      "./de.js": 169,
      "./dv": 172,
      "./dv.js": 172,
      "./el": 173,
      "./el.js": 173,
      "./en-au": 174,
      "./en-au.js": 174,
      "./en-ca": 175,
      "./en-ca.js": 175,
      "./en-gb": 176,
      "./en-gb.js": 176,
      "./en-ie": 177,
      "./en-ie.js": 177,
      "./en-il": 178,
      "./en-il.js": 178,
      "./en-in": 179,
      "./en-in.js": 179,
      "./en-nz": 180,
      "./en-nz.js": 180,
      "./en-sg": 181,
      "./en-sg.js": 181,
      "./eo": 182,
      "./eo.js": 182,
      "./es": 183,
      "./es-do": 184,
      "./es-do.js": 184,
      "./es-mx": 185,
      "./es-mx.js": 185,
      "./es-us": 186,
      "./es-us.js": 186,
      "./es.js": 183,
      "./et": 187,
      "./et.js": 187,
      "./eu": 188,
      "./eu.js": 188,
      "./fa": 189,
      "./fa.js": 189,
      "./fi": 190,
      "./fi.js": 190,
      "./fil": 191,
      "./fil.js": 191,
      "./fo": 192,
      "./fo.js": 192,
      "./fr": 193,
      "./fr-ca": 194,
      "./fr-ca.js": 194,
      "./fr-ch": 195,
      "./fr-ch.js": 195,
      "./fr.js": 193,
      "./fy": 196,
      "./fy.js": 196,
      "./ga": 197,
      "./ga.js": 197,
      "./gd": 198,
      "./gd.js": 198,
      "./gl": 199,
      "./gl.js": 199,
      "./gom-deva": 200,
      "./gom-deva.js": 200,
      "./gom-latn": 201,
      "./gom-latn.js": 201,
      "./gu": 202,
      "./gu.js": 202,
      "./he": 203,
      "./he.js": 203,
      "./hi": 204,
      "./hi.js": 204,
      "./hr": 205,
      "./hr.js": 205,
      "./hu": 206,
      "./hu.js": 206,
      "./hy-am": 207,
      "./hy-am.js": 207,
      "./id": 208,
      "./id.js": 208,
      "./is": 209,
      "./is.js": 209,
      "./it": 210,
      "./it-ch": 211,
      "./it-ch.js": 211,
      "./it.js": 210,
      "./ja": 212,
      "./ja.js": 212,
      "./jv": 213,
      "./jv.js": 213,
      "./ka": 214,
      "./ka.js": 214,
      "./kk": 215,
      "./kk.js": 215,
      "./km": 216,
      "./km.js": 216,
      "./kn": 217,
      "./kn.js": 217,
      "./ko": 218,
      "./ko.js": 218,
      "./ku": 219,
      "./ku.js": 219,
      "./ky": 220,
      "./ky.js": 220,
      "./lb": 221,
      "./lb.js": 221,
      "./lo": 222,
      "./lo.js": 222,
      "./lt": 223,
      "./lt.js": 223,
      "./lv": 224,
      "./lv.js": 224,
      "./me": 225,
      "./me.js": 225,
      "./mi": 226,
      "./mi.js": 226,
      "./mk": 227,
      "./mk.js": 227,
      "./ml": 228,
      "./ml.js": 228,
      "./mn": 229,
      "./mn.js": 229,
      "./mr": 230,
      "./mr.js": 230,
      "./ms": 231,
      "./ms-my": 232,
      "./ms-my.js": 232,
      "./ms.js": 231,
      "./mt": 233,
      "./mt.js": 233,
      "./my": 234,
      "./my.js": 234,
      "./nb": 235,
      "./nb.js": 235,
      "./ne": 236,
      "./ne.js": 236,
      "./nl": 237,
      "./nl-be": 238,
      "./nl-be.js": 238,
      "./nl.js": 237,
      "./nn": 239,
      "./nn.js": 239,
      "./oc-lnc": 240,
      "./oc-lnc.js": 240,
      "./pa-in": 241,
      "./pa-in.js": 241,
      "./pl": 242,
      "./pl.js": 242,
      "./pt": 243,
      "./pt-br": 244,
      "./pt-br.js": 244,
      "./pt.js": 243,
      "./ro": 245,
      "./ro.js": 245,
      "./ru": 246,
      "./ru.js": 246,
      "./sd": 247,
      "./sd.js": 247,
      "./se": 248,
      "./se.js": 248,
      "./si": 249,
      "./si.js": 249,
      "./sk": 250,
      "./sk.js": 250,
      "./sl": 251,
      "./sl.js": 251,
      "./sq": 252,
      "./sq.js": 252,
      "./sr": 253,
      "./sr-cyrl": 254,
      "./sr-cyrl.js": 254,
      "./sr.js": 253,
      "./ss": 255,
      "./ss.js": 255,
      "./sv": 256,
      "./sv.js": 256,
      "./sw": 257,
      "./sw.js": 257,
      "./ta": 258,
      "./ta.js": 258,
      "./te": 259,
      "./te.js": 259,
      "./tet": 260,
      "./tet.js": 260,
      "./tg": 261,
      "./tg.js": 261,
      "./th": 262,
      "./th.js": 262,
      "./tk": 263,
      "./tk.js": 263,
      "./tl-ph": 264,
      "./tl-ph.js": 264,
      "./tlh": 265,
      "./tlh.js": 265,
      "./tr": 266,
      "./tr.js": 266,
      "./tzl": 267,
      "./tzl.js": 267,
      "./tzm": 268,
      "./tzm-latn": 269,
      "./tzm-latn.js": 269,
      "./tzm.js": 268,
      "./ug-cn": 270,
      "./ug-cn.js": 270,
      "./uk": 271,
      "./uk.js": 271,
      "./ur": 272,
      "./ur.js": 272,
      "./uz": 273,
      "./uz-latn": 274,
      "./uz-latn.js": 274,
      "./uz.js": 273,
      "./vi": 275,
      "./vi.js": 275,
      "./x-pseudo": 276,
      "./x-pseudo.js": 276,
      "./yo": 277,
      "./yo.js": 277,
      "./zh-cn": 278,
      "./zh-cn.js": 278,
      "./zh-hk": 279,
      "./zh-hk.js": 279,
      "./zh-mo": 280,
      "./zh-mo.js": 280,
      "./zh-tw": 281,
      "./zh-tw.js": 281
    };
    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }
    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      }
      return map[req];
    }
    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = 399;
  },
  4: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return TRACK_NEW_WHISPER_NOTIF;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return TRACK_OMNIBAR;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return TRACK_SIDEBAR;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return TRACK_SIDENOTE;
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return TRACK_WHISPERS;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return TRACK_LOOP_LIBRARY;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return trackEvent;
    });
    __webpack_require__.d(__webpack_exports__, "i", function() {
      return trackExternalLink;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return initializeTracking;
    });
    var messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __rest = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    const TRACK_ABOUT = "About View";
    const TRACK_NEW_WHISPER_NOTIF = "New Whisper Notification";
    const TRACK_OMNIBAR = "Omnibar View";
    const TRACK_SETTINGS = "Settings View";
    const TRACK_SIDEBAR = "Sidebar View";
    const TRACK_SIDENOTE = "Sidenote View";
    const TRACK_WHISPERS = "Whispers";
    const TRACK_LOOP_EDITOR = "Loop Editor";
    const TRACK_LOOP_LIBRARY = "Loop Library";
    const getCommonMetadata = () => ({
      documentEncoding: window.document.characterSet || window.document.charset,
      documentHostname: window.location.hostname,
      documentLocationUrl: window.location.href,
      documentPath: "/" + window.location.pathname.split("/").pop().split(".")[0],
      screenColorDepth: (window.screen.colorDepth || "0") + "-bit",
      screenResolution: window.screen.width + "x" + window.screen.height,
      userAgent: window.navigator.userAgent || "",
      userLanguage: (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage || "").toLowerCase(),
      viewportSize: window.document.documentElement.clientWidth + "x" + window.document.documentElement.clientHeight
    });
    function trackEvent(_a) {
      var {category, action, label, value} = _a, payload = __rest(_a, ["category", "action", "label", "value"]);
      let val = value;
      if (val !== void 0 && value !== null) {
        val = Number(val);
        if (Number.isNaN(val)) {
          val = null;
        }
      }
      Object(messaging__WEBPACK_IMPORTED_MODULE_0__["T"])(__assign(__assign(__assign({}, getCommonMetadata()), payload), {
        category: String(category),
        action: String(action),
        label: label === void 0 || label === null ? label : String(label),
        value: val
      })).catch(console.error);
    }
    function trackExternalLink(url) {
      trackEvent({
        category: "External link",
        action: "Clicked",
        label: url
      });
    }
    function trackException(description, fatal = false) {
      Object(messaging__WEBPACK_IMPORTED_MODULE_0__["U"])(__assign(__assign({}, getCommonMetadata()), {
        description,
        fatal: Boolean(fatal)
      })).catch(console.error);
    }
    function initializeTracking() {
      window.addEventListener("error", (e) => {
        var _a, _b;
        let message = e.error.stack || e.error || e.message || "Unknown error";
        if (!((_b = (_a = e == null ? void 0 : e.error) == null ? void 0 : _a.stack) == null ? void 0 : _b.includes(e.message.replace("Uncaught ", "")))) {
          message = `${e.message} - ${e.error.stack}`;
        }
        trackException(message);
      });
    }
    var _unused_webpack_default_export = {
      initializeTracking,
      trackEvent,
      trackException,
      trackExternalLink
    };
  },
  458: function(module, exports, __webpack_require__) {
    module.exports = {markdown: "details--markdown--2ZvehUKv"};
  },
  49: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);
    var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
    var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(103);
    var remark_gfm__WEBPACK_IMPORTED_MODULE_3___default = /* @__PURE__ */ __webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_3__);
    var components_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
    var components_content_views_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
    var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
    var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
    var _styles__WEBPACK_IMPORTED_MODULE_7___default = /* @__PURE__ */ __webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_7__);
    const Markdown = ({
      highlightColor,
      linkStyle,
      source,
      tooltip,
      tooltipPosition
    }) => {
      const renderers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
        a: ({children, href}) => {
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_content_views_link__WEBPACK_IMPORTED_MODULE_5__["a"], {
            content: {data: {url: href}},
            highlightColor,
            style: linkStyle
          }, children);
        },
        link: ({children, href}) => {
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_content_views_link__WEBPACK_IMPORTED_MODULE_5__["a"], {
            content: {data: {url: href}},
            highlightColor,
            style: linkStyle
          }, children);
        },
        linkReference: ({children}) => {
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "[", children, "]");
        },
        h1: (props) => {
          const {children, level} = props;
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: Object(utils__WEBPACK_IMPORTED_MODULE_6__["b"])([_styles__WEBPACK_IMPORTED_MODULE_7__["heading"], _styles__WEBPACK_IMPORTED_MODULE_7___default.a[`heading-${level}`]])
          }, children);
        },
        h2: (props) => {
          const {children, level} = props;
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: Object(utils__WEBPACK_IMPORTED_MODULE_6__["b"])([_styles__WEBPACK_IMPORTED_MODULE_7__["heading"], _styles__WEBPACK_IMPORTED_MODULE_7___default.a[`heading-${level}`]])
          }, children);
        },
        h3: (props) => {
          const {children, level} = props;
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: Object(utils__WEBPACK_IMPORTED_MODULE_6__["b"])([_styles__WEBPACK_IMPORTED_MODULE_7__["heading"], _styles__WEBPACK_IMPORTED_MODULE_7___default.a[`heading-${level}`]])
          }, children);
        }
      }), [highlightColor]);
      const markdown = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
        remarkPlugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_3___default.a],
        className: _styles__WEBPACK_IMPORTED_MODULE_7__["container"],
        components: renderers
      }, source);
      if (tooltip) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tooltip__WEBPACK_IMPORTED_MODULE_4__["a"], {
          text: tooltip,
          position: tooltipPosition
        }, markdown);
      }
      return markdown;
    };
    Markdown.propTypes = {
      highlightColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      linkStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      tooltipPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    };
    Markdown.defaultProps = {
      highlightColor: "",
      linkStyle: {},
      source: "",
      tooltip: null,
      tooltipPosition: "top"
    };
    __webpack_exports__["a"] = Markdown;
  },
  497: function(module, exports, __webpack_require__) {
  },
  5: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return copyToClipboard;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return getApplicationConfig;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return getDisplayOptions;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return getHideSidebarOptions;
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return getHotEdgeOptions;
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return getInstalled;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return getLoopState;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return getNewWhisperActionOptions;
    });
    __webpack_require__.d(__webpack_exports__, "i", function() {
      return getSettings;
    });
    __webpack_require__.d(__webpack_exports__, "j", function() {
      return getWindowConfig;
    });
    __webpack_require__.d(__webpack_exports__, "k", function() {
      return getWindowPlacementOptions;
    });
    __webpack_require__.d(__webpack_exports__, "l", function() {
      return globalSearchWindowToggle;
    });
    __webpack_require__.d(__webpack_exports__, "m", function() {
      return installLocal;
    });
    __webpack_require__.d(__webpack_exports__, "n", function() {
      return installLoop;
    });
    __webpack_require__.d(__webpack_exports__, "p", function() {
      return keyboardLock;
    });
    __webpack_require__.d(__webpack_exports__, "q", function() {
      return logout;
    });
    __webpack_require__.d(__webpack_exports__, "r", function() {
      return loopMetadata;
    });
    __webpack_require__.d(__webpack_exports__, "s", function() {
      return loopRestoreBackup;
    });
    __webpack_require__.d(__webpack_exports__, "t", function() {
      return loopSetPause;
    });
    __webpack_require__.d(__webpack_exports__, "v", function() {
      return openAboutWindow;
    });
    __webpack_require__.d(__webpack_exports__, "w", function() {
      return openInspectorWindow;
    });
    __webpack_require__.d(__webpack_exports__, "x", function() {
      return openLogs;
    });
    __webpack_require__.d(__webpack_exports__, "y", function() {
      return openLoopLibrary;
    });
    __webpack_require__.d(__webpack_exports__, "z", function() {
      return quitApp;
    });
    __webpack_require__.d(__webpack_exports__, "A", function() {
      return restartLoop;
    });
    __webpack_require__.d(__webpack_exports__, "B", function() {
      return runLoop;
    });
    __webpack_require__.d(__webpack_exports__, "C", function() {
      return search;
    });
    __webpack_require__.d(__webpack_exports__, "D", function() {
      return sendLog;
    });
    __webpack_require__.d(__webpack_exports__, "E", function() {
      return setCookies;
    });
    __webpack_require__.d(__webpack_exports__, "F", function() {
      return setDisplay;
    });
    __webpack_require__.d(__webpack_exports__, "G", function() {
      return setHideSidebar;
    });
    __webpack_require__.d(__webpack_exports__, "H", function() {
      return setHotEdge;
    });
    __webpack_require__.d(__webpack_exports__, "I", function() {
      return setLoopMetadata;
    });
    __webpack_require__.d(__webpack_exports__, "J", function() {
      return setNewWhisperAction;
    });
    __webpack_require__.d(__webpack_exports__, "K", function() {
      return setWindowPlacement;
    });
    __webpack_require__.d(__webpack_exports__, "L", function() {
      return showLightbarPreview;
    });
    __webpack_require__.d(__webpack_exports__, "M", function() {
      return sidenoteCreateNote;
    });
    __webpack_require__.d(__webpack_exports__, "N", function() {
      return sidenoteDeleteNote;
    });
    __webpack_require__.d(__webpack_exports__, "O", function() {
      return sidenoteExportDB;
    });
    __webpack_require__.d(__webpack_exports__, "P", function() {
      return sidenoteGetAllNotes;
    });
    __webpack_require__.d(__webpack_exports__, "Q", function() {
      return sidenoteImportDB;
    });
    __webpack_require__.d(__webpack_exports__, "R", function() {
      return sidenoteUpdateNote;
    });
    __webpack_require__.d(__webpack_exports__, "S", function() {
      return messaging_submit;
    });
    __webpack_require__.d(__webpack_exports__, "T", function() {
      return trackEvent;
    });
    __webpack_require__.d(__webpack_exports__, "U", function() {
      return trackException;
    });
    __webpack_require__.d(__webpack_exports__, "V", function() {
      return uninstall;
    });
    __webpack_require__.d(__webpack_exports__, "W", function() {
      return whisperInteraction;
    });
    __webpack_require__.d(__webpack_exports__, "X", function() {
      return windowInspectorGetRecording;
    });
    __webpack_require__.d(__webpack_exports__, "Y", function() {
      return windowInspectorSetRecording;
    });
    __webpack_require__.d(__webpack_exports__, "Z", function() {
      return windowInspectorToggleRecording;
    });
    __webpack_require__.d(__webpack_exports__, "ab", function() {
      return windowSidebarSetVisible;
    });
    __webpack_require__.d(__webpack_exports__, "o", function() {
      return isMsgInProgress;
    });
    __webpack_require__.d(__webpack_exports__, "u", function() {
      return onMessage;
    });
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    let activeMessageCounter = 0;
    const isMsgInProgress = () => {
      return activeMessageCounter !== 0;
    };
    const incrementCounter = () => {
      activeMessageCounter += 1;
    };
    const decrementCounter = () => {
      activeMessageCounter -= 1;
    };
    const getAstilectron = (maxAttempts = 10, timeBetweenAttemptsMs = 250) => {
      let attemptCounter = 0;
      return new Promise((resolve, reject) => {
        function attemptGetAstilectron() {
          if (window.astilectron) {
            resolve(window.astilectron);
            return;
          }
          if (attemptCounter >= maxAttempts) {
            reject(new Error("astilectron not available to send message"));
            return;
          }
          attemptCounter += 1;
          setTimeout(attemptGetAstilectron, timeBetweenAttemptsMs);
        }
        attemptGetAstilectron();
      });
    };
    const sendWindowMessage = (name, payload, timeoutMs = 1e4) => {
      incrementCounter();
      let timeout2;
      const timeoutPromise = new Promise((resolve, reject) => {
        timeout2 = setTimeout(() => reject(new Error("Could not complete message to application")), timeoutMs);
      });
      const messagePromise = new Promise((resolve, reject) => {
        getAstilectron().then((astilectron) => {
          astilectron.sendMessage(__assign({
            name
          }, payload ? {payload} : {}), (response = {}) => {
            if (response.error)
              return reject(new Error(response.error));
            return resolve(response);
          });
        }).catch(reject);
      });
      return Promise.race([messagePromise, timeoutPromise]).then((result = {}) => {
        clearTimeout(timeout2);
        decrementCounter();
        return result;
      });
    };
    const onMessageHandlers = {};
    const onMessage = (name, handler) => __async(void 0, null, function* () {
      onMessageHandlers[name] = handler;
      console.log("onMessageHandlers", onMessageHandlers);
      const astilectron = yield getAstilectron();
      astilectron.onMessage(({name: msgName2, payload} = {}) => {
        const msgHandler = onMessageHandlers[msgName2];
        console.log("msgHandler: ", msgHandler);
        if (!msgHandler) {
          console.error(`message received with name ${msgName2} but no handler is registered for that name`, payload);
          return;
        }
        msgHandler(payload);
      });
    });
    const msgName = "copyToClipboard";
    var copyToClipboard = (value) => {
      return new Promise((resolve, reject) => sendWindowMessage(msgName, {value}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const getApplicationConfig_msgName = "getApplicationConfig";
    var getApplicationConfig = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getApplicationConfig_msgName).then((config) => {
        return resolve(config);
      }).catch(reject));
    };
    const getDisplayOptions_msgName = "getDisplayOptions";
    var getDisplayOptions = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getDisplayOptions_msgName).then(({displays}) => {
        return resolve(displays);
      }).catch(reject));
    };
    const getHideSidebarOptions_msgName = "getHideSidebarOptions";
    var getHideSidebarOptions = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getHideSidebarOptions_msgName).then(({options}) => {
        return resolve(options);
      }).catch(reject));
    };
    const getHotEdgeOptions_msgName = "getHotZoneOptions";
    var getHotEdgeOptions = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getHotEdgeOptions_msgName).then(({options}) => {
        return resolve(options);
      }).catch(reject));
    };
    const getInstalled_msgName = "getInstalled";
    var getInstalled = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getInstalled_msgName).then(({metadatas}) => {
        return resolve(metadatas);
      }).catch(reject));
    };
    const getLoopState_msgName = "getLoopState";
    var getLoopState = (loopId) => {
      return new Promise((resolve, reject) => sendWindowMessage(getLoopState_msgName, {loopId}).then((metadata) => {
        return resolve(metadata);
      }).catch(reject));
    };
    const getNewWhisperActionOptions_msgName = "getNewWhisperActionOptions";
    var getNewWhisperActionOptions = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getNewWhisperActionOptions_msgName).then(({options}) => {
        return resolve(options);
      }).catch(reject));
    };
    const getSettings_msgName = "getSettings";
    var getSettings = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getSettings_msgName).then(resolve).catch(reject));
    };
    const getUserData_msgName = "getUserData";
    var getUserData = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getUserData_msgName).then(({user}) => {
        return resolve(user);
      }).catch(reject));
    };
    const getWindowConfig_msgName = "getWindowConfig";
    var getWindowConfig = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getWindowConfig_msgName).then(resolve).catch(reject));
    };
    const getWindowPlacementOptions_msgName = "getWindowPlacementOptions";
    var getWindowPlacementOptions = () => {
      return new Promise((resolve, reject) => sendWindowMessage(getWindowPlacementOptions_msgName).then(({options}) => {
        return resolve(options);
      }).catch(reject));
    };
    const globalSearchWindowToggle_msgName = "globalSearchWindowToggle";
    var globalSearchWindowToggle = () => {
      return new Promise((resolve, reject) => sendWindowMessage(globalSearchWindowToggle_msgName).then(() => {
        return resolve();
      }).catch(reject));
    };
    const installLocal_msgName = "installLocal";
    var installLocal = (metadata, workDir) => {
      return new Promise((resolve, reject) => sendWindowMessage(installLocal_msgName, {metadata, workDir}).then(({appId}) => {
        return resolve(appId);
      }).catch(reject));
    };
    const installLoop_msgName = "installLoop";
    const timeout = 3e4;
    var installLoop = (metadata, url) => {
      return new Promise((resolve, reject) => sendWindowMessage(installLoop_msgName, {metadata, url}, timeout).then(({appId}) => {
        return resolve(appId);
      }).catch(reject));
    };
    const keyboardLock_msgName = "keyboardLock";
    var keyboardLock = (source, lock) => {
      return new Promise((resolve, reject) => sendWindowMessage(keyboardLock_msgName, {source, lock}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const logout_msgName = "logout";
    var logout = (reason) => {
      return new Promise((resolve, reject) => sendWindowMessage(logout_msgName, {reason}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const loopMetadata_msgName = "loopMetadata";
    const loopCacheMap = {};
    var loopMetadata = (loopId, bypassCache) => {
      return new Promise((resolve, reject) => {
        if (!bypassCache && loopCacheMap[loopId])
          return resolve(loopCacheMap[loopId]);
        let response;
        return sendWindowMessage(loopMetadata_msgName, {loopId}).then((metadata) => {
          response = metadata;
          return sendWindowMessage("getLoopOrganization", {loopId});
        }).then((organization) => {
          response.organization = organization;
          loopCacheMap[loopId] = response;
          return resolve(loopCacheMap[loopId]);
        }).catch(reject);
      });
    };
    const loopRestoreBackup_msgName = "loopRestoreBackup";
    var loopRestoreBackup = (loopId) => {
      return new Promise((resolve, reject) => sendWindowMessage(loopRestoreBackup_msgName, {loopId}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const loopSetPause_msgName = "loopSetPause";
    var loopSetPause = (appId, pause) => {
      return new Promise((resolve, reject) => sendWindowMessage(loopSetPause_msgName, {appId, pause}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const openAboutWindow_msgName = "openAboutWindow";
    var openAboutWindow = () => {
      return new Promise((resolve, reject) => sendWindowMessage(openAboutWindow_msgName).then(() => {
        return resolve();
      }).catch(reject));
    };
    const openInspectorWindow_msgName = "openInspectorWindow";
    var openInspectorWindow = () => {
      return new Promise((resolve, reject) => sendWindowMessage(openInspectorWindow_msgName).then(() => {
        return resolve();
      }).catch(reject));
    };
    const openLogs_msgName = "openLogDir";
    var openLogs = () => {
      return new Promise((resolve, reject) => sendWindowMessage(openLogs_msgName).then(() => {
        return resolve();
      }).catch(reject));
    };
    const openLoopLibrary_msgName = "openLoopLibrary";
    var openLoopLibrary = () => {
      return new Promise((resolve, reject) => sendWindowMessage(openLoopLibrary_msgName).then(() => {
        return resolve();
      }).catch(reject));
    };
    const quitApp_msgName = "quitApp";
    var quitApp = (reason) => {
      return new Promise((resolve, reject) => sendWindowMessage(quitApp_msgName, {reason}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const restartLoop_msgName = "restartLoop";
    var restartLoop = (appId) => {
      return new Promise((resolve, reject) => sendWindowMessage(restartLoop_msgName, {appId}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const runLoop_msgName = "runLoop";
    var runLoop = (appId) => {
      return new Promise((resolve, reject) => sendWindowMessage(runLoop_msgName, {appId}, 2e4).then(() => loopMetadata(appId, true)).then(() => {
        return resolve();
      }).catch(reject));
    };
    const search_msgName = "search";
    var search = (source, value) => {
      return new Promise((resolve, reject) => sendWindowMessage(search_msgName, {source, value}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const sendLog_msgName = "sendLog";
    var sendLog = (level, ...msg) => {
      return new Promise((resolve, reject) => sendWindowMessage(sendLog_msgName, {level, msg}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const setCookies_msgName = "setCookies";
    var setCookies = (cookies) => {
      return new Promise((resolve, reject) => sendWindowMessage(setCookies_msgName, cookies).then(() => {
        return resolve();
      }).catch(reject));
    };
    const setDisplay_msgName = "setDisplay";
    var setDisplay = (id) => {
      return new Promise((resolve, reject) => sendWindowMessage(setDisplay_msgName, {id}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const setHideSidebar_msgName = "setHideSidebar";
    var setHideSidebar = (name) => {
      return new Promise((resolve, reject) => sendWindowMessage(setHideSidebar_msgName, {name}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const setHotEdge_msgName = "setHotZone";
    var setHotEdge = (name) => {
      return new Promise((resolve, reject) => sendWindowMessage(setHotEdge_msgName, {name}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const setLoopMetadata_msgName = "setLoopMetadata";
    var setLoopMetadata = (metadata) => sendWindowMessage(setLoopMetadata_msgName, {metadata});
    const setNewWhisperAction_msgName = "setNewWhisperAction";
    var setNewWhisperAction = (name) => {
      return new Promise((resolve, reject) => sendWindowMessage(setNewWhisperAction_msgName, {name}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const setWindowPlacement_msgName = "setWindowPlacement";
    var setWindowPlacement = (name) => {
      return new Promise((resolve, reject) => sendWindowMessage(setWindowPlacement_msgName, {name}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const showLightbarPreview_msgName = "showLightbarPreview";
    var showLightbarPreview = () => {
      return new Promise((resolve, reject) => sendWindowMessage(showLightbarPreview_msgName).then(() => {
        return resolve();
      }).catch(reject));
    };
    const sidenoteCreateNote_msgName = "sidenoteCreateNote";
    var sidenoteCreateNote = (note) => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteCreateNote_msgName, {note}).then(({id}) => {
        return resolve(id);
      }).catch(reject));
    };
    const sidenoteDeleteNote_msgName = "sidenoteDeleteNote";
    var sidenoteDeleteNote = (id) => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteDeleteNote_msgName, {id}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const sidenoteExportDB_msgName = "sidenoteExportDB";
    var sidenoteExportDB = (password, filePath) => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteExportDB_msgName, {password, filePath}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const sidenoteGetAllNotes_msgName = "sidenoteGetAllNotes";
    var sidenoteGetAllNotes = () => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteGetAllNotes_msgName).then(({notes}) => {
        return resolve(notes);
      }).catch(reject));
    };
    const sidenoteGetNotesByKeyword_msgName = "sidenoteGetNotesByKeyword";
    var sidenoteGetNotesByKeyword = (keywords) => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteGetNotesByKeyword_msgName, {keywords}).then(({notes}) => {
        return resolve(notes);
      }).catch(reject));
    };
    const sidenoteImportDB_msgName = "sidenoteImportDB";
    var sidenoteImportDB = (password, filePath) => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteImportDB_msgName, {password, filePath}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const sidenoteUpdateNote_msgName = "sidenoteUpdateNote";
    var sidenoteUpdateNote = (note) => {
      return new Promise((resolve, reject) => sendWindowMessage(sidenoteUpdateNote_msgName, {note}).then((res) => {
        return resolve(res.note);
      }).catch(reject));
    };
    const submit_msgName = "submit";
    const submit_timeout = 3e4;
    var messaging_submit = (directory, url) => sendWindowMessage(submit_msgName, {directory, url}, submit_timeout);
    const trackEvent_msgName = "trackEvent";
    var trackEvent = (event) => {
      return new Promise((resolve, reject) => sendWindowMessage(trackEvent_msgName, event).then(() => {
        return resolve();
      }).catch(reject));
    };
    const trackException_msgName = "trackException";
    var trackException = (exception) => {
      return new Promise((resolve, reject) => sendWindowMessage(trackException_msgName, exception).then(() => {
        return resolve();
      }).catch(reject));
    };
    const uninstall_msgName = "uninstall";
    var uninstall = (appId) => {
      return new Promise((resolve, reject) => sendWindowMessage(uninstall_msgName, {appId}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const whisperInteraction_msgName = "whisperInteraction";
    var whisperInteraction = (whisperId, type, interaction) => {
      return new Promise((resolve, reject) => sendWindowMessage(whisperInteraction_msgName, {whisperId, type, interaction}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const windowInspectorGetRecording_msgName = "windowInspectorGetRecording";
    var windowInspectorGetRecording = () => {
      return new Promise((resolve, reject) => sendWindowMessage(windowInspectorGetRecording_msgName).then(({value}) => {
        return resolve(value);
      }).catch(reject));
    };
    const windowInspectorSetRecording_msgName = "windowInspectorSetRecording";
    var windowInspectorSetRecording = (value) => {
      return new Promise((resolve, reject) => sendWindowMessage(windowInspectorSetRecording_msgName, {value}).then((response) => {
        return resolve(response.value);
      }).catch(reject));
    };
    const windowInspectorToggleRecording_msgName = "windowInspectorToggleRecording";
    var windowInspectorToggleRecording = () => {
      return new Promise((resolve, reject) => sendWindowMessage(windowInspectorToggleRecording_msgName).then((response) => {
        return resolve(response.value);
      }).catch(reject));
    };
    const windowSidebarGetVisible_msgName = "windowSidebarGetVisible";
    var windowSidebarGetVisible = () => {
      return new Promise((resolve, reject) => sendWindowMessage(windowSidebarGetVisible_msgName).then((isVisible) => {
        return resolve(isVisible);
      }).catch(reject));
    };
    const windowSidebarSetVisible_msgName = "windowSidebarSetVisible";
    var windowSidebarSetVisible = (visible) => {
      return new Promise((resolve, reject) => sendWindowMessage(windowSidebarSetVisible_msgName, {visible}).then(() => {
        return resolve();
      }).catch(reject));
    };
    const windowSidebarToggleVisible_msgName = "windowSidebarToggleVisible";
    var windowSidebarToggleVisible = () => {
      return new Promise((resolve, reject) => sendWindowMessage(windowSidebarToggleVisible_msgName).then((isVisible) => {
        return resolve(isVisible);
      }).catch(reject));
    };
  },
  52: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var react_hook_mousetrap = __webpack_require__(91);
    var constants_environment = __webpack_require__(12);
    var context_config = __webpack_require__(14);
    const defaultConfig = {};
    const FeatureContext = react_default.a.createContext(defaultConfig);
    var feature = {
      defaultConfig,
      FeatureContext
    };
    var context_global = __webpack_require__(35);
    var context_settings = __webpack_require__(21);
    var themes = __webpack_require__(30);
    var sidenote = __webpack_require__(32);
    var messaging = __webpack_require__(5);
    var normalize = __webpack_require__(311);
    var base = __webpack_require__(96);
    var stylesheet = __webpack_require__(97);
    var ProximaNova_stylesheet = __webpack_require__(98);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    {
      window.addEventListener("error", ({colno, error, lineno, message, filename}) => {
        Object(messaging["D"])("error", message, {filename, lineno, colno, error}).catch(console.warn);
      });
      const origError = console.error;
      console.error = (...msg) => {
        origError(...msg);
        Object(messaging["D"])("error", ...msg).catch(console.warn);
      };
      const origDebug = console.debug;
      console.debug = (...msg) => {
        origDebug(...msg);
        Object(messaging["D"])("debug", ...msg).catch(console.warn);
      };
      const origInfo = console.info;
      console.info = (...msg) => {
        origInfo(...msg);
        Object(messaging["D"])("info", ...msg).catch(console.warn);
      };
      const origLog = console.log;
      console.log = (...msg) => {
        origLog(...msg);
        Object(messaging["D"])("info", ...msg).catch(console.warn);
      };
      const origWarn = console.warn;
      console.warn = (...msg) => {
        origWarn(...msg);
        Object(messaging["D"])("warn", ...msg).catch(origWarn);
      };
    }
    const getMode = (environment) => {
      switch (environment) {
        case constants_environment["a"]:
        case constants_environment["b"]:
        case constants_environment["d"]:
          return environment;
        default:
          return constants_environment["c"];
      }
    };
    var app = __webpack_exports__["a"] = (Component) => () => {
      const [global, setGlobal] = Object(react["useState"])(context_global["b"]);
      const [config, setConfig] = Object(react["useState"])(context_config["d"]);
      const [settings, setSettings] = Object(react["useState"])(context_settings["g"]);
      const [themeContext, setThemeContext] = Object(react["useState"])(themes["b"]);
      Object(react_hook_mousetrap["a"])("mod+alt+i", (event) => {
        event.stopPropagation();
        try {
          const {
            remote: {getCurrentWindow}
          } = require("electron");
          const contents = getCurrentWindow().webContents;
          if (!contents.isDevToolsOpened()) {
            return contents.openDevTools({mode: "undocked"});
          }
          return contents.closeDevTools();
        } catch (error) {
          return console.info(error);
        }
      });
      const setDataObject = (set) => (obj) => set((prev) => __assign(__assign({}, prev), obj));
      const setDataByKey = (set) => (key) => (value) => set((prev) => __assign(__assign({}, prev), {
        [key]: value
      }));
      Object(react["useEffect"])(() => {
        const mode = getMode(config.environment);
        setThemeContext({mode, theme: themes["c"][mode]});
      }, [config.environment]);
      return /* @__PURE__ */ react_default.a.createElement(themes["a"].Provider, {
        value: themeContext
      }, /* @__PURE__ */ react_default.a.createElement(context_config["a"].Provider, {
        value: __assign(__assign({}, config), {
          setConfig: setDataObject(setConfig),
          setConfigItem: setDataByKey(setConfig)
        })
      }, /* @__PURE__ */ react_default.a.createElement(context_global["a"].Provider, {
        value: __assign(__assign({}, global), {set: setDataByKey(setGlobal)})
      }, /* @__PURE__ */ react_default.a.createElement(context_settings["f"].Provider, {
        value: __assign(__assign({}, settings), {
          set: setDataObject(setSettings),
          setItem: setDataByKey(setSettings)
        })
      }, /* @__PURE__ */ react_default.a.createElement(FeatureContext.Provider, {
        value: defaultConfig
      }, /* @__PURE__ */ react_default.a.createElement(sidenote["b"], null, /* @__PURE__ */ react_default.a.createElement(Component, null)))))));
    };
  },
  57: function(module, exports, __webpack_require__) {
    module.exports = {moreLessContainer: "views--moreLessContainer--1h_8tZKK", moreLessBtn: "views--moreLessBtn--fwIyEjXy", dabMarkdown: "views--dabMarkdown--1oP8opb_", dabOption: "views--dabOption--2QlLS4I0", confirmContainer: "views--confirmContainer--2qe00bh2", inputContainer: "views--inputContainer--3aSLOlmF", fileIcon: "views--fileIcon--3d4NWlrc", link: "views--link--2uBHlqlS", linkRow: "views--linkRow--3SRBp7mI"};
  },
  69: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return installLoop;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return runLoop;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return revertLoop;
    });
    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
    var moment__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
    var utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
    var messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const installLoop = (appId, osName, version) => __async(void 0, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      try {
        const result = yield Object(utils_fetch__WEBPACK_IMPORTED_MODULE_1__["a"])("/library/loop/install", "POST", {
          version,
          review: !!version,
          appId,
          operatingSystem: osName
        });
        const semverContents = ((_a = result == null ? void 0 : result.customData) == null ? void 0 : _a.semver) instanceof Object ? {
          semverWindows: (_c = (_b = result == null ? void 0 : result.customData) == null ? void 0 : _b.semver) == null ? void 0 : _c.windows,
          semverMac: (_e = (_d = result == null ? void 0 : result.customData) == null ? void 0 : _d.semver) == null ? void 0 : _e.mac
        } : {
          semver: (_f = result == null ? void 0 : result.customData) == null ? void 0 : _f.semver
        };
        const oliveHelpsContractVersion = __assign({}, ((_h = (_g = result == null ? void 0 : result.customData) == null ? void 0 : _g.webpackMetadata) == null ? void 0 : _h.oliveHelpsContractVersion) ? {
          oliveHelpsContractVersion: result.customData.webpackMetadata.oliveHelpsContractVersion
        } : {});
        const permissions = __assign({}, ((_j = (_i = result == null ? void 0 : result.customData) == null ? void 0 : _i.webpackMetadata) == null ? void 0 : _j.permissions) ? {
          permissions: result.customData.webpackMetadata.permissions
        } : {});
        const metadata = __assign(__assign(__assign(__assign(__assign(__assign({
          appId: result.appId,
          author: result.customData.author,
          authorId: result.customData.authorId,
          created: moment__WEBPACK_IMPORTED_MODULE_0___default()(result.created, "x").toISOString(),
          description: result.customData.description,
          documentation: result.customData.documentation,
          name: result.name,
          colorStrip: result.customData.colorStrip,
          loopLibraryLogo: result.customData.loopLibraryLogo,
          loopWhisperLogo: result.customData.loopWhisperLogo
        }, oliveHelpsContractVersion), {
          organization: result.customData.organization,
          orgId: result.developerId
        }), permissions), {
          specification: result.customData.specification,
          updated: moment__WEBPACK_IMPORTED_MODULE_0___default()(result.lastUpdated, "x").toISOString(),
          uploadId: `${result.appId}-${result.version}`
        }), semverContents), {
          version: result.version.toString()
        });
        yield messaging__WEBPACK_IMPORTED_MODULE_2__["n"](metadata, result.presignedUrl);
      } catch (error) {
        console.error(error);
        throw new Error("Could not install Loop");
      }
    });
    const runLoop = (appId) => __async(void 0, null, function* () {
      try {
        yield messaging__WEBPACK_IMPORTED_MODULE_2__["B"](appId);
      } catch (error) {
        console.error(error);
        throw new Error("Loop installed but did not start within expected time");
      }
    });
    const revertLoop = (appId) => __async(void 0, null, function* () {
      try {
        yield messaging__WEBPACK_IMPORTED_MODULE_2__["s"](appId);
        try {
          yield messaging__WEBPACK_IMPORTED_MODULE_2__["B"](appId);
        } catch (runError) {
          console.error("Failed to run restored Loop backup", runError);
          throw new Error("Failed to run restored Loop backup");
        }
      } catch (restoreError) {
        console.error("failed to restore Loop backup", restoreError);
        throw new Error("Failed to restore loop backup");
      }
    });
  },
  70: function(module, exports, __webpack_require__) {
    module.exports = {closeBtn: "confirmDialog--closeBtn--2BqK_23k", cancelBtn: "confirmDialog--cancelBtn--2eQC9azQ", dialogHeader: "confirmDialog--dialogHeader--2qUClhX-", dialogActions: "confirmDialog--dialogActions--1eEjh6nc", dialogTitle: "confirmDialog--dialogTitle--1b3u7_IO", dialogCloseButton: "confirmDialog--dialogCloseButton--2oskn2tq", dialogContent: "confirmDialog--dialogContent--2RENweKv"};
  },
  71: function(module, exports, __webpack_require__) {
    module.exports = {container: "markdown--container--tw_q9KOP", heading: "markdown--heading--3fz1mg6s", "heading-1": "markdown--heading-1--1T5gub8h", heading1: "markdown--heading-1--1T5gub8h", "heading-2": "markdown--heading-2--S7RvY0Uu", heading2: "markdown--heading-2--S7RvY0Uu", "heading-3": "markdown--heading-3--25bNJdw-", heading3: "markdown--heading-3--25bNJdw-"};
  },
  74: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
    var react_file_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(354);
    var components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
    var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
    var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);
    var _style__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_5__);
    var __defProp = Object.defineProperty;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var __assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const replaceRegex = /.*?((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]).*/g;
    const getUrlMatch = (data) => data.url.match(/\w+\.\w+/i);
    const ContentLink = ({children, content, style = {}}) => {
      const {data} = content;
      const onClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (getUrlMatch(data)) {
          Object(utils__WEBPACK_IMPORTED_MODULE_4__["e"])(data.url);
        }
      }, [data.url]);
      const tooltipText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        if (!getUrlMatch(data)) {
          return "Invalid link address";
        }
        if (Object(utils__WEBPACK_IMPORTED_MODULE_4__["d"])(data.url)) {
          return "Click to open";
        }
        return "Click to open in your browser";
      }, [data.url]);
      const renderContent = () => {
        if (children) {
          if (Object(utils__WEBPACK_IMPORTED_MODULE_4__["d"])(data.url)) {
            const match = getUrlMatch(data);
            if (match) {
              const extension = match[0].replace(".", "");
              return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: _style__WEBPACK_IMPORTED_MODULE_5__["fileIcon"]
              }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_file_icon__WEBPACK_IMPORTED_MODULE_2__["a"], __assign({
                extension
              }, react_file_icon__WEBPACK_IMPORTED_MODULE_2__["b"][extension]))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, children));
            }
          }
          return children;
        }
        return data.label.replace(replaceRegex, "$1");
      };
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_tooltip__WEBPACK_IMPORTED_MODULE_3__["a"], {
        className: Object(utils__WEBPACK_IMPORTED_MODULE_4__["b"])([_style__WEBPACK_IMPORTED_MODULE_5__["link"], children ? _style__WEBPACK_IMPORTED_MODULE_5__["linkRow"] : null]),
        onClick,
        style: (style == null ? void 0 : style.container) || {},
        text: tooltipText
      }, renderContent());
    };
    ContentLink.propTypes = {
      children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
      content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
      highlightColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    };
    ContentLink.defaultProps = {
      children: null,
      content: {},
      highlightColor: "",
      style: {}
    };
    __webpack_exports__["a"] = ContentLink;
  },
  93: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var code = '<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="44" cy="44" r="44" fill="#F8F4FF"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5999 44L37.7166 55.1167L34.3333 58.5L19.8333 44L34.3333 29.5L37.7166 32.8833L26.5999 44ZM61.3999 44L50.2833 55.1167L53.6666 58.5L68.1666 44L53.6666 29.5L50.2833 32.8833L61.3999 44Z" fill="#651FFF"/>\n</svg>\n';
    var hot_zone_bottom = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#939393;fill-rule:evenodd;}.cls-2{fill:#651fff;}</style></defs><path class="cls-1" d="M2.26,1.18H21.74A2.17,2.17,0,0,1,23.9,3.35v13a2.16,2.16,0,0,1-2.16,2.16H14.16v2.16h2.17v2.17H7.67V20.65H9.84V18.49H2.26A2.16,2.16,0,0,1,.1,16.33v-13A2.17,2.17,0,0,1,2.26,1.18Zm0,15.15H21.74v-13H2.26Z"/><path class="cls-2" d="M18.74,15.73a2.39,2.39,0,0,1,2.4-2.4h.6v3h-3Z"/></svg>';
    var hot_zone_edge = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#939393;fill-rule:evenodd;}.cls-2{fill:#651fff;}</style></defs><path class="cls-1" d="M2.26,1.18H21.74A2.17,2.17,0,0,1,23.9,3.35v13a2.16,2.16,0,0,1-2.16,2.16H14.16v2.16h2.17v2.17H7.67V20.65H9.84V18.49H2.26A2.16,2.16,0,0,1,.1,16.33v-13A2.17,2.17,0,0,1,2.26,1.18Zm0,15.15H21.74v-13H2.26Z"/><path class="cls-2" d="M20.11,4.32a.65.65,0,0,1,.65-.65h1V16h-1a.65.65,0,0,1-.65-.65Z"/></svg>';
    var hot_zone_top = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#939393;fill-rule:evenodd;}.cls-2{fill:#651fff;}</style></defs><path class="cls-1" d="M2.26,1.18H21.74A2.17,2.17,0,0,1,23.9,3.35v13a2.16,2.16,0,0,1-2.16,2.16H14.16v2.16h2.17v2.17H7.67V20.65H9.84V18.49H2.26A2.16,2.16,0,0,1,.1,16.33v-13A2.17,2.17,0,0,1,2.26,1.18Zm0,15.15H21.74v-13H2.26Z"/><path class="cls-2" d="M21.14,6.35A2.4,2.4,0,0,1,18.74,4v-.6h3v3Z"/></svg>';
    var instagram = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 0C5.37413 0 0 5.37413 0 12C0 18.6259 5.37413 24 12 24C18.6259 24 24 18.6259 24 12C24 5.37413 18.6259 0 12 0Z" fill="url(#paint0_linear)"/>\n<path d="M12.0022 16.289C14.3721 16.289 16.2915 14.3697 16.2915 11.9997C16.2915 9.62978 14.3721 7.71045 12.0022 7.71045C9.63222 7.71045 7.71289 9.62978 7.71289 11.9997C7.71289 14.3697 9.63222 16.289 12.0022 16.289ZM8.74766 11.9997C8.74766 10.2139 10.1997 8.74522 11.9855 8.74522C13.7713 8.74522 15.2233 10.1972 15.2233 11.9997C15.2233 13.7856 13.7713 15.2376 11.9855 15.2376C10.1997 15.2376 8.74766 13.8022 8.74766 11.9997Z" fill="white"/>\n<path d="M16.2735 19.1265H7.72825C6.12603 19.1265 4.82422 17.8247 4.82422 16.2225V7.81077C4.82422 6.20855 6.12603 4.90674 7.72825 4.90674H16.2735C17.8757 4.90674 19.1775 6.20855 19.1775 7.81077V16.2225C19.1775 17.8247 17.8757 19.1265 16.2735 19.1265ZM7.72825 5.94151C6.71017 5.94151 5.87568 6.776 5.87568 7.79408V16.2058C5.87568 17.2238 6.71017 18.0583 7.72825 18.0583H16.2735C17.2915 18.0583 18.126 17.2238 18.126 16.2058V7.79408C18.126 6.776 17.2915 5.94151 16.2735 5.94151H7.72825Z" fill="white"/>\n<path d="M16.3405 7.22632C15.9734 7.22632 15.6562 7.52674 15.6562 7.9106C15.6562 8.27778 15.9567 8.5782 16.3405 8.5782C16.7077 8.5782 17.0248 8.27778 17.0248 7.9106C17.0248 7.54343 16.7244 7.22632 16.3405 7.22632Z" fill="white"/>\n<defs>\n<linearGradient id="paint0_linear" x1="19.8726" y1="21.0627" x2="4.12668" y2="2.94906" gradientUnits="userSpaceOnUse">\n<stop stop-color="#5D3FD2"/>\n<stop offset="0.4244" stop-color="#B829A9"/>\n<stop offset="0.5009" stop-color="#BE289D"/>\n<stop offset="0.6383" stop-color="#D0257E"/>\n<stop offset="0.7849" stop-color="#E62256"/>\n<stop offset="0.8147" stop-color="#E83156"/>\n<stop offset="0.8718" stop-color="#EE5755"/>\n<stop offset="0.9495" stop-color="#F89554"/>\n<stop offset="1" stop-color="#FFC153"/>\n</linearGradient>\n</defs>\n</svg>\n';
    var info = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" version="1.1">\n<g id="surface1">\n<path style=" stroke:none;fill-rule:nonzero;fill:rgb(39.607843%,12.156863%,100%);fill-opacity:1;" d="M 7.257812 4.050781 L 8.742188 4.050781 L 8.742188 5.628906 L 7.257812 5.628906 Z M 8 11.949219 C 8.40625 11.949219 8.742188 11.59375 8.742188 11.160156 L 8.742188 8 C 8.742188 7.566406 8.40625 7.210938 8 7.210938 C 7.59375 7.210938 7.257812 7.566406 7.257812 8 L 7.257812 11.160156 C 7.257812 11.59375 7.59375 11.949219 8 11.949219 Z M 8 0.0976562 C 3.910156 0.0976562 0.59375 3.636719 0.59375 8 C 0.59375 12.363281 3.910156 15.902344 8 15.902344 C 12.089844 15.902344 15.40625 12.363281 15.40625 8 C 15.40625 3.636719 12.089844 0.0976562 8 0.0976562 Z M 8 14.320312 C 4.734375 14.320312 2.074219 11.484375 2.074219 8 C 2.074219 4.515625 4.734375 1.679688 8 1.679688 C 11.265625 1.679688 13.925781 4.515625 13.925781 8 C 13.925781 11.484375 11.265625 14.320312 8 14.320312 Z M 8 14.320312 "/>\n</g>\n';
    var lightbulb = '<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="44" cy="44" r="44" fill="#F8F4FF"/>\n<path d="M36.6667 65.9998C36.6667 67.3443 37.7667 68.4443 39.1111 68.4443H48.8889C50.2334 68.4443 51.3334 67.3443 51.3334 65.9998V63.5554H36.6667V65.9998ZM44 19.5554C34.5645 19.5554 26.8889 27.2309 26.8889 36.6665C26.8889 42.4842 29.7978 47.5931 34.2222 50.6976V56.222C34.2222 57.5665 35.3223 58.6665 36.6667 58.6665H51.3334C52.6778 58.6665 53.7778 57.5665 53.7778 56.222V50.6976C58.2023 47.5931 61.1111 42.4842 61.1111 36.6665C61.1111 27.2309 53.4356 19.5554 44 19.5554ZM48.8889 48.1554V53.7776H39.1111V48.1554C35.3956 45.5398 31.7778 42.8509 31.7778 36.6665C31.7778 29.9198 37.2534 24.4442 44 24.4442C50.7467 24.4442 56.2223 29.9198 56.2223 36.6665C56.2223 42.7531 52.5311 45.5887 48.8889 48.1554Z" fill="#651FFF"/>\n</svg>\n';
    var linkedin = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M24 12C24 5.3649 18.6351 0 12 0C5.3649 0 0 5.3649 0 12C0 18.6351 5.3649 24 12 24C18.6184 24 24 18.6351 24 12Z" fill="#3D83D9"/>\n<path d="M9.05758 9.07495H6.2832V17.0137H9.05758V9.07495Z" fill="white"/>\n<path d="M7.67211 5.11377C6.80303 5.11377 6.1178 5.916 6.31835 6.8185C6.43535 7.33661 6.85317 7.75444 7.38799 7.87143C8.2905 8.05527 9.0593 7.37004 9.0593 6.51767C9.0593 5.73215 8.44091 5.11377 7.67211 5.11377Z" fill="white"/>\n<path d="M18.1852 11.5151C18.0013 10.0109 17.2492 9.07495 15.227 9.07495C13.7896 9.07495 13.2214 9.29222 12.8871 9.92732V9.07495H10.6309V17.0137H12.9373V12.8521C12.9373 11.8159 13.1378 11.0304 14.4247 11.0304C15.6949 11.0304 15.7952 11.9997 15.7952 12.919V17.0137H18.1852C18.1852 17.0137 18.2353 11.866 18.1852 11.5151Z" fill="white"/>\n</svg>\n';
    var loop_deepPurple = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path d="M15.5,15.5H.5V.5h15ZM1,15H15V1H1Z"/><path d="M13.41,7.74a.43.43,0,0,1,0,0,.43.43,0,0,0-.28-.4L12.52,5.6a.44.44,0,0,0,.1-.19.45.45,0,0,0,0-.3A.42.42,0,0,0,12,5l0,0L9.44,3.79a.39.39,0,0,0-.09-.26.43.43,0,0,0-.28-.15.42.42,0,0,0-.41.27l-2.61.16a.42.42,0,0,0-.49-.15.44.44,0,0,0-.26.39v0l-1,.66a.46.46,0,0,0-.2-.05.41.41,0,0,0-.4.41.46.46,0,0,0,0,.21L3,6.54A.41.41,0,0,0,2.58,7a.39.39,0,0,0,.22.35V8.66l.05.09.76.5v0a.42.42,0,0,0,.11.29.39.39,0,0,0,.19.12l.17.77a.4.4,0,0,0-.15.47.41.41,0,0,0,.38.28A.42.42,0,0,0,4.65,11l1,.18s0,0,0,0L5,12.32l.11.24,1.14.06.08,0,1.18-1.11a.39.39,0,0,0,.15,0A.41.41,0,0,0,8,11.12l1.76-.69a.47.47,0,0,0,.2.1.4.4,0,0,0,.3-.07.42.42,0,0,0,.18-.34.36.36,0,0,0-.07-.22l.26-.46L12,9.27a.39.39,0,0,0,.5.08.35.35,0,0,0,.19-.24.41.41,0,0,0,0-.27l.42-.76a.4.4,0,0,0,.33-.32h.05ZM10.67,9.05l-.38-1.21a.35.35,0,0,0,.1-.11l2.25.12a.23.23,0,0,0,.07.1l-.37.67h-.05a.42.42,0,0,0-.38.28Zm-.73.68L8.24,8a.42.42,0,0,0,0-.31L9,6.51l.62.87a.27.27,0,0,0,0,.13.41.41,0,0,0,.27.38l.4,1.34-.26.48A.2.2,0,0,0,9.94,9.73ZM7.22,11.18l-1.1,1-.62,0L6,11.5h.06a.4.4,0,0,0,.4-.41.38.38,0,0,0-.1-.27l.4-1.1.51,1.11a.41.41,0,0,0-.09.26h0A.28.28,0,0,0,7.22,11.18ZM6,4.4,8.37,6l-1.69-.1a.42.42,0,0,0-.37-.22.41.41,0,0,0-.24.08L4.54,5.06h0l1-.65a.42.42,0,0,0,.21.06A.46.46,0,0,0,6,4.4Zm.36-.22L8.7,4a.33.33,0,0,0,.16.15V5.83C8.52,5.6,7.79,5.13,6.31,4.18Zm3.25,2.4,2.26.84-1.39-.08a.41.41,0,0,0-.37-.23.2.2,0,0,0-.11,0Zm3.19.78L9.67,6.22l2.25-.62a.44.44,0,0,0,.24.13ZM11.67,5.27l-2.42.66c0-.29,0-.82,0-1.76l.05,0ZM7.76,7.44l-1-1.19,1.95.11L7.91,7.43A.38.38,0,0,0,7.76,7.44Zm-1,1.41A.41.41,0,0,0,6.4,9l-1.86.05.89-.8.12,0h0a.39.39,0,0,0,.36-.22L7.45,8l-.65.81ZM5.9,6.08a.42.42,0,0,0,.5.36l1,1.21-1.53,0a.41.41,0,0,0-.34-.21l-1-2ZM4.12,5.5,5.18,7.55,3.39,6.91a.42.42,0,0,0,0-.16L4.11,5.5ZM3.18,7.31l.06,0L5.14,8a.64.64,0,0,0,0,.07l-1,.9a.39.39,0,0,0-.32,0l-.65-.41ZM4.39,9.47l2-.05a.36.36,0,0,0,.07.1L6,10.69a.43.43,0,0,0-.26.15l-1.08-.19a.39.39,0,0,0-.21-.21l-.18-.83A.36.36,0,0,0,4.39,9.47Zm2.69,0a.41.41,0,0,0,0-.4l.66-.85a.36.36,0,0,0,.18,0L9.66,10a.19.19,0,0,0,0,.08l-1.8.69a.5.5,0,0,0-.2-.08Z"/></svg>\n';
    var loop_hospital = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path d="M9.7,12.54H6.31V9.7H3.46V6.3H6.31V3.46H9.69V6.3h2.85V9.69H9.7Zm-3-.42H9.27V9.27h2.84V6.73H9.28V3.88H6.73V6.73H3.89V9.26H6.73Z"/><path d="M15.5,15.5H.5V.5h15ZM1,15H15V1H1Z"/></svg>\n';
    var loop_icd10cm = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path d="M15.5,15.5H.5V.5h15ZM1,15H15V1H1Z"/><path d="M3.37,5.83h.54v4.34H3.37Z"/><path d="M4.75,8A2.16,2.16,0,0,1,7,5.76a2,2,0,0,1,1.66.85l-.45.26A1.47,1.47,0,0,0,7,6.24,1.66,1.66,0,0,0,5.31,8,1.66,1.66,0,0,0,7,9.76a1.47,1.47,0,0,0,1.21-.63l.46.26A2,2,0,0,1,7,10.24,2.16,2.16,0,0,1,4.75,8Z"/><path d="M9.32,5.83H10.8A2.11,2.11,0,0,1,13,8a2.11,2.11,0,0,1-2.23,2.17H9.32ZM10.8,9.68A1.59,1.59,0,0,0,12.47,8,1.58,1.58,0,0,0,10.8,6.31H9.86V9.68Z"/></svg>\n';
    var loop_olivology = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"><path d="M15.5,15.5H.5V.5h15ZM1,15H15V1H1Z"/><rect x="7.73" y="5.01" width="0.54" height="5.99"/><path d="M4.42,10.66A2.66,2.66,0,1,1,7.08,8,2.67,2.67,0,0,1,4.42,10.66Zm0-4.78A2.12,2.12,0,1,0,6.54,8,2.12,2.12,0,0,0,4.42,5.88Z"/><path d="M11.55,10.66A2.66,2.66,0,1,1,14.22,8,2.67,2.67,0,0,1,11.55,10.66Zm0-4.78A2.12,2.12,0,1,0,13.68,8,2.12,2.12,0,0,0,11.55,5.88Z"/></svg>\n';
    var mac_command = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 viewBox="0 0 220 220" style="enable-background:new 0 0 220 220;" xml:space="preserve">\r\n<path d="M57.254,121.064c-17.735,0-31.45,4.723-40.765,14.035c-19.39,19.391-19.39,50.943,0,70.334\r\n	C25.884,214.828,38.375,220,51.66,220c0,0,0,0,0,0c13.284,0,25.774-5.172,35.168-14.566c11.069-11.07,14.037-27.061,14.041-41.016\r\n	c0.001-3.531,0.017-10.09,0.017-10.09h18.227c0,0,0.016,6.559,0.018,10.09c0.004,13.955,2.971,29.945,14.041,41.016\r\n	C142.565,214.828,155.056,220,168.34,220c13.285,0,25.775-5.172,35.17-14.566c19.391-19.391,19.391-50.943,0-70.334\r\n	c-9.314-9.312-23.029-14.035-40.764-14.035c-3.602,0-10.346,0.02-10.346,0.02c0-0.932,0-22.178,0-22.178s6.744,0.029,10.346,0.029\r\n	c17.734,0,31.449-4.721,40.762-14.033c19.391-19.392,19.391-50.943,0.002-70.334C194.113,5.174,181.624,0,168.34,0\r\n	c-13.285,0-25.773,5.174-35.168,14.566c-10.67,10.672-13.812,25.914-14.029,39.498l-0.193,11.609H101.05l-0.192-11.609\r\n	c-0.217-13.584-3.359-28.826-14.03-39.498C77.434,5.174,64.944,0,51.66,0C38.376,0,25.886,5.174,16.49,14.568\r\n	C-2.899,33.959-2.899,65.51,16.491,84.902c9.314,9.313,23.028,14.033,40.762,14.033c3.601,0,10.346-0.029,10.346-0.029\r\n	s0,21.246,0,22.178C67.6,121.084,60.855,121.064,57.254,121.064z M154.328,35.587c3.727-3.726,8.683-5.779,13.954-5.779\r\n	s10.229,2.053,13.957,5.781c7.692,7.693,7.692,20.213-0.002,27.906c-3.384,3.385-10.327,5.248-19.549,5.248\r\n	c-4.6,0-14.107,0-14.107,0v-8.688C148.581,60.056,147.566,41.495,154.328,35.587z M148.581,159.945v-8.688c0,0,9.508,0,14.107,0\r\n	c9.222,0,16.165,1.863,19.549,5.248c7.694,7.693,7.694,20.213,0.002,27.906c-3.729,3.729-8.686,5.781-13.957,5.781\r\n	s-10.228-2.053-13.954-5.779C147.566,178.506,148.581,159.945,148.581,159.945z M93.75,93.75h32.5v32.5h-32.5V93.75z M57.312,68.743\r\n	c-9.222,0-16.165-1.863-19.549-5.248c-7.694-7.693-7.694-20.213-0.002-27.906c3.729-3.729,8.686-5.781,13.957-5.781\r\n	s10.228,2.053,13.954,5.779c6.762,5.908,5.747,24.469,5.747,24.469v8.688C71.419,68.743,61.911,68.743,57.312,68.743z\r\n	 M71.419,151.258v8.688c0,0,1.015,18.561-5.747,24.469c-3.727,3.727-8.683,5.779-13.954,5.779s-10.229-2.053-13.957-5.781\r\n	c-7.692-7.693-7.692-20.213,0.002-27.906c3.384-3.385,10.327-5.248,19.549-5.248C61.911,151.258,71.419,151.258,71.419,151.258z"/>\r\n</svg>\r\n';
    var menu_home = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.2 24">\n<path d="M14.1,3.8l7.1,6.4v11h-2.8v-8.5H9.9v8.5H7.1v-11L14.1,3.8z M14.1,0L0,12.7h4.2V24h8.5v-8.5h2.8V24H24V12.7h4.2L14.1,0z"/>\n</svg>\n';
    var menu_looplibrary = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1,20.1h6.3v3.6h-0.2C13.8,23.2,11.7,21.9,10.1,20.1z M7.1,20.1c0.9,1.4,2.1,2.6,3.4,3.6H0v-3.6H7.1z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6,12c0,4.6,3.7,8.4,8.2,8.4h8.4C25,22.6,22.1,24,18.8,24C12.3,24,7,18.6,7,12C7,5.4,12.3,0,18.8,0\n	c6.5,0,11.7,5.4,11.7,12c0,2.2-0.6,4.2-1.6,6h-4.4c1.5-1.5,2.5-3.6,2.5-6c0-4.6-3.7-8.4-8.2-8.4C14.2,3.6,10.6,7.4,10.6,12z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M37.6,20.4H18.8V24h18.8V20.4z"/>\n</svg>\n';
    var menu_sidenote = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6,5.2C15.8,5,16,4.9,16.2,4.9c0.2,0,0.4,0.1,0.6,0.2l2,2c0.3,0.3,0.3,0.9,0,1.2l-1.6,1.6l-3.2-3.2L15.6,5.2\n	z M3.7,17.1l9.4-9.4l3.2,3.2l-9.4,9.4H3.7V17.1z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2,21.8H12c5.4,0,9.8-4.4,9.8-9.8S17.4,2.2,12,2.2S2.2,6.6,2.2,12V21.8z M12,0C5.4,0,0,5.4,0,12v12h12\n	c6.6,0,12-5.4,12-12S18.6,0,12,0z"/>\n</svg>\n';
    var olive_logo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760.84 250" preserveAspectRatio="xMidYMid meet"><path d="M166.25,62.41h-.15c-14.67-.21-20.7-8-42.43-8a72.52,72.52,0,1,0,49.51,19.89,72,72,0,0,0,47.54-24.61A123.66,123.66,0,1,1,0,126.33C0,58.57,54.79,3.42,122.39,2.72c0-.07,103.69,0,103.73,0,2.16,0-4.76,23.46-5.69,25.44a60.13,60.13,0,0,1-17,21.3,59.77,59.77,0,0,1-37.18,12.91"/><rect x="266.33" y="2.43" width="51.44" height="243.78"/><path d="M370.33,0c-18.19,0-32.58,13.37-32.58,31.55,0,17.84,14.39,31.21,32.58,31.21,17.84,0,32.58-13.37,32.58-31.21C402.91,13.37,388.17,0,370.33,0"/><rect x="344.61" y="85.18" width="51.44" height="161.03"/><path d="M677.45,79.46c-51.11,0-86.81,35-86.81,85.1,0,50.3,36.69,85.44,89.22,85.44,39.71,0,70.38-20.55,78.8-52.55H706.82c-5.33,7.75-14.62,12-26.27,12-19.82,0-33.67-9.93-39-27.95l-.63-2.15h119a116.37,116.37,0,0,0,1-18.22c0-48.08-34.29-81.67-83.39-81.67m34.92,70.66h-72l.51-2.08c4.51-18.47,17.85-29.06,36.6-29.06,19.11,0,31.39,10.36,34.58,29.18Z"/><polygon points="546.26 85.18 501.49 187.19 457.18 85.18 405.7 85.18 475.75 246.21 527.23 246.21 597.74 85.18 546.26 85.18"/></svg>\n';
    var olive_o = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n<path d="M15.9,6.1L15.9,6.1c-1.4,0-1.9-0.7-3.9-0.7c-3.7,0-6.7,2.9-6.7,6.6c0,3.7,2.9,6.7,6.6,6.7c3.7,0,6.7-2.9,6.7-6.6\n	c0-1.8-0.7-3.6-2.1-4.9c1.7-0.2,3.2-1,4.4-2.3c3.9,4.9,3,12-1.9,15.9S7,23.9,3.1,19c-1.6-2-2.4-4.5-2.4-7c0-6.2,5-11.3,11.2-11.3\n	c0,0,9.5,0,9.5,0c0.2,0-0.4,2.2-0.5,2.3c-0.4,0.8-0.9,1.4-1.6,2C18.3,5.7,17.1,6.1,15.9,6.1"/>\n</svg>\n';
    var shift = '<svg height="512" viewBox="0 0 240.706 240.706" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m190.559 240.706h-140.412c-5.544 0-10.029-4.486-10.029-10.029v-90.265h-30.089c-3.977 0-7.581-2.351-9.177-5.994-1.606-3.634-.901-7.875 1.783-10.813l110.294-120.353c1.908-2.075 4.669-3.257 7.427-3.252 2.737.006 5.47 1.183 7.363 3.252l110.353 120.353c2.684 2.929 3.389 7.179 1.783 10.813-1.596 3.644-5.201 5.994-9.177 5.994h-30.088v90.265c-.002 5.543-4.488 10.029-10.031 10.029zm-130.383-20.059h120.353v-90.265c0-5.544 4.486-10.029 10.029-10.029h17.316l-87.552-95.485-87.503 95.485h17.326c5.544 0 10.029 4.486 10.029 10.029.003 0 .003 90.265.002 90.265z"/></svg>';
    var svg = __webpack_exports__["a"] = {
      code,
      hot_zone_bottom,
      hot_zone_edge,
      hot_zone_top,
      instagram,
      info,
      lightbulb,
      linkedin,
      loop_deepPurple,
      loop_hospital,
      loop_icd10cm,
      loop_olivology,
      "mac-command": mac_command,
      menu_home,
      menu_looplibrary,
      menu_sidenote,
      "olive-logo": olive_logo,
      "olive-o": olive_o,
      shift
    };
  },
  96: function(module, exports, __webpack_require__) {
    module.exports = {link: "style-core--link--3uDePx2m"};
  },
  97: function(module, exports, __webpack_require__) {
  },
  98: function(module, exports, __webpack_require__) {
  }
}, [[1258, 12, 0]]]);
