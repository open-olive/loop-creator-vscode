(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
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
  1203: function(module, exports) {
  },
  1212: function(module, exports) {
  },
  1257: function(module, exports, __webpack_require__) {
  },
  1259: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var react_dom = __webpack_require__(26);
    var react_dom_default = /* @__PURE__ */ __webpack_require__.n(react_dom);
    var app = __webpack_require__(52);
    var remove = __webpack_require__(1332);
    var findIndex = __webpack_require__(490);
    var propEq = __webpack_require__(1333);
    var es_update = __webpack_require__(1367);
    var moment = __webpack_require__(6);
    var moment_default = /* @__PURE__ */ __webpack_require__.n(moment);
    var AnimateHeight = __webpack_require__(295);
    var AnimateHeight_default = /* @__PURE__ */ __webpack_require__.n(AnimateHeight);
    var react_error_boundary_umd = __webpack_require__(746);
    var createMuiTheme = __webpack_require__(748);
    var ThemeProvider = __webpack_require__(1312);
    var Alert = __webpack_require__(1361);
    var Close = __webpack_require__(349);
    var Close_default = /* @__PURE__ */ __webpack_require__.n(Close);
    var IconButton = __webpack_require__(752);
    var Snackbar = __webpack_require__(1372);
    var SnackbarContent = __webpack_require__(1358);
    var confirmDialog = __webpack_require__(384);
    var messaging = __webpack_require__(5);
    const accelerators = {
      "CmdOrCtrl+O": () => {
        Object(messaging["l"])().catch(console.error);
      }
    };
    var useGlobalShortcuts = () => {
      Object(react["useEffect"])(() => {
        try {
          const {
            remote: {globalShortcut}
          } = require("electron");
          Object.entries(accelerators).forEach(([a, c]) => {
            if (globalShortcut.isRegistered(a)) {
              globalShortcut.unregister(a);
            }
            const registerResult = globalShortcut.register(a, c);
            if (!registerResult) {
              console.error(`Could not register global shortcut: ${a}`);
            }
          });
        } catch (err) {
          console.error("Failed to register global shortcuts:", err);
        }
        return () => {
          try {
            const {
              remote: {globalShortcut}
            } = require("electron");
            globalShortcut.unregisterAll();
          } catch (err) {
            console.error("Failed to unregister all global shortcuts:", err);
          }
        };
      }, []);
      return null;
    };
    var themes = __webpack_require__(30);
    var useTheme = (getStyles) => {
      if (getStyles && getStyles.length === 0) {
        console.error("useTheme() should only be used when the setStyles function consumes the theme. Use traditional scss if you do not need theming");
      }
      const context = Object(react["useContext"])(themes["a"]);
      return [
        getStyles ? getStyles(context) : null,
        context.theme,
        context.isDarkMode
      ];
    };
    var useIntersection = (selector, fn, watch) => {
      Object(react["useEffect"])(() => {
        let observer;
        const elements = document.querySelectorAll(selector);
        if (elements) {
          observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                fn(entry.target, observer);
              }
            });
          }, {rootMargin: "0px 0px 200px 0px"});
          elements.forEach((el) => observer.observe(el));
        }
        return () => observer.disconnect();
      }, [fn, ...watch]);
    };
    var config = __webpack_require__(14);
    var context_settings = __webpack_require__(21);
    var global = __webpack_require__(35);
    var sidenote = __webpack_require__(32);
    const SIDEBAR_MODE_CLOSED = "closed";
    const SIDEBAR_MODE_OPEN = "open";
    const LOOP_UPDATE_ID = "loop-update-whisper";
    const NEW_WHISPER_ACTION_OPEN = "open";
    const NEW_WHISPER_ACTION_LIGHT = "light";
    const SIDEBAR_LOOPS = [LOOP_UPDATE_ID];
    const WINDOW_PLACEMENT_LEFT = "left";
    const WINDOW_PLACEMENT_RIGHT = "right";
    var constants_windowPlacement = {
      WINDOW_PLACEMENT_LEFT,
      WINDOW_PLACEMENT_RIGHT
    };
    const WHISPER_DISPLAY_LIMIT_INIT = 20;
    const WHISPER_STORAGE_LIMIT = 100;
    const WHISPER_INCREMENT_AMOUNT = 10;
    const WHISPER_TYPE_UNIVERSAL = "universal";
    var constants_whisper = {
      WHISPER_DISPLAY_LIMIT_INIT,
      WHISPER_INCREMENT_AMOUNT,
      WHISPER_STORAGE_LIMIT,
      WHISPER_TYPE_UNIVERSAL
    };
    var tracking = __webpack_require__(4);
    var colors = __webpack_require__(3);
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
    const theme_button = {
      padding: "8px 20px"
    };
    var sidebar_theme = {
      typography: {
        fontFamily: '"Proxima Nova"',
        fontSize: 10,
        body1: {
          fontSize: "12px"
        }
      },
      palette: {
        primary: {main: "#651FFF"},
        secondary: {main: "#B388FF"}
      },
      overrides: {
        MuiButton: {
          root: __assign(__assign({}, theme_button), {
            borderRadius: "8px",
            fontSize: "10px",
            fontWeight: 600,
            lineHeight: "12px",
            textTransform: "initial"
          }),
          outlined: theme_button
        },
        MuiList: {
          padding: {
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem"
          }
        },
        MuiListItem: {
          root: {
            fontSize: "1.25rem",
            minHeight: "1.5rem"
          },
          gutters: {
            paddingLeft: "1rem",
            paddingRight: "1rem"
          }
        },
        MuiListItemIcon: {
          root: {
            minWidth: "2.25rem"
          }
        },
        MuiListItemText: {
          root: {
            marginBottom: 0,
            marginTop: 0
          }
        },
        MuiListSubheader: {
          root: {
            fontSize: "0.9rem",
            lineHeight: "1rem",
            paddingTop: "0.75rem"
          },
          gutters: {
            paddingLeft: "1rem",
            paddingRight: "1rem"
          }
        },
        MuiMenuItem: {
          root: {
            fontSize: "12px",
            minHeight: "16px"
          }
        },
        MuiFormLabel: {
          root: {
            color: "inherit",
            fontSize: "0.875rem",
            fontWeight: "600"
          }
        },
        MuiRadio: {
          root: {
            padding: "4px 9px 5px"
          }
        }
      }
    };
    var prop_types = __webpack_require__(1);
    var prop_types_default = /* @__PURE__ */ __webpack_require__.n(prop_types);
    var components_tooltip = __webpack_require__(39);
    var utils = __webpack_require__(11);
    var cardBodyButton_styles = __webpack_require__(556);
    var cardBodyButton_defProp = Object.defineProperty;
    var cardBodyButton_hasOwnProp = Object.prototype.hasOwnProperty;
    var cardBodyButton_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var cardBodyButton_propIsEnum = Object.prototype.propertyIsEnumerable;
    var cardBodyButton_defNormalProp = (obj, key, value) => key in obj ? cardBodyButton_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var cardBodyButton_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (cardBodyButton_hasOwnProp.call(b, prop2))
          cardBodyButton_defNormalProp(a, prop2, b[prop2]);
      if (cardBodyButton_getOwnPropSymbols)
        for (var prop2 of cardBodyButton_getOwnPropSymbols(b)) {
          if (cardBodyButton_propIsEnum.call(b, prop2))
            cardBodyButton_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const CardBodyButton = ({
      align,
      buttonSize,
      buttonType,
      children,
      className,
      disabled,
      label,
      onClick,
      style,
      title,
      tooltip,
      "data-testid": dataTestId
    }) => {
      const renderButton = () => {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: cardBodyButton_styles["cardBodyButton"],
          style: {float: align}
        }, /* @__PURE__ */ react_default.a.createElement("div", cardBodyButton_assign(cardBodyButton_assign({
          style: cardBodyButton_assign({}, style),
          className: Object(utils["b"])([
            label ? cardBodyButton_styles["cardBodyLabel"] : null,
            className,
            buttonSize || null,
            buttonType
          ])
        }, !disabled ? {
          onClick,
          role: "button",
          tabIndex: "-1"
        } : {
          disabled
        }), {
          title,
          "data-testid": dataTestId
        }), label || children));
      };
      if (tooltip && !disabled) {
        return /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
          text: tooltip,
          disabled
        }, renderButton());
      }
      return renderButton();
    };
    CardBodyButton.propTypes = {
      align: prop_types_default.a.string,
      buttonSize: prop_types_default.a.string,
      buttonType: prop_types_default.a.string.isRequired,
      children: prop_types_default.a.any,
      className: prop_types_default.a.string,
      disabled: prop_types_default.a.bool,
      label: prop_types_default.a.string,
      onClick: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      title: prop_types_default.a.string,
      tooltip: prop_types_default.a.bool,
      "data-testid": prop_types_default.a.string
    };
    CardBodyButton.defaultProps = {
      align: "left",
      buttonSize: "small",
      buttonType: "primary",
      children: null,
      className: "",
      disabled: false,
      label: null,
      style: {},
      title: null
    };
    var cardBodyButton = CardBodyButton;
    var guide_styles = ({theme}) => ({
      container: {
        color: theme.text.primary,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "start",
        overflow: "hidden",
        width: "100%"
      },
      panel: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        justifyContent: "start",
        paddingLeft: "1rem",
        paddingRight: "1rem"
      },
      headline: {
        marginBottom: "1.25rem",
        fontWeight: "600",
        marginTop: "5rem",
        position: "relative",
        textAlign: "center"
      },
      shortcuts: {
        color: "white"
      }
    });
    const Guide = () => {
      const [{container, headline, panel, shortcuts}] = useTheme(guide_styles);
      const {osName} = Object(config["e"])();
      let keysImage = "https://olive-helps-onboarding-assets.oliveai.dev/v1/shortcuts-windows.svg";
      if (osName === "darwin") {
        keysImage = "https://olive-helps-onboarding-assets.oliveai.dev/v1/shortcuts-mac.svg";
      }
      const openOnboarding = () => {
        Object(tracking["h"])({
          category: tracking["d"],
          action: "Onboarding launch button - clicked"
        });
        Object(messaging["C"])("sidebar", "/help");
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        style: container
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: panel
      }, /* @__PURE__ */ react_default.a.createElement("h2", {
        style: headline
      }, "New Here?", /* @__PURE__ */ react_default.a.createElement("br", null), "Need a quick refresher?"), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        label: "Show me around",
        className: "secondary",
        onClick: openOnboarding
      }), /* @__PURE__ */ react_default.a.createElement("h2", {
        style: headline
      }, "Helpful shortcuts"), /* @__PURE__ */ react_default.a.createElement("img", {
        style: shortcuts,
        src: keysImage,
        alt: "Command/Ctrl + O Opens the Omnibar, Command/Ctrl + H Shows and Hides the Sidebar",
        loading: "lazy"
      })));
    };
    var guide = Guide;
    var constants_environment = __webpack_require__(12);
    var constants_search = __webpack_require__(383);
    var components_icon = __webpack_require__(29);
    var components_button = __webpack_require__(33);
    var makeStyles = __webpack_require__(1309);
    var Divider = __webpack_require__(1341);
    var List = __webpack_require__(1319);
    var ListItem = __webpack_require__(1268);
    var ListSubheader = __webpack_require__(1337);
    var Popover = __webpack_require__(1318);
    var Collapse = __webpack_require__(1320);
    var ExpandLess = __webpack_require__(731);
    var ExpandLess_default = /* @__PURE__ */ __webpack_require__.n(ExpandLess);
    var ExpandMore = __webpack_require__(451);
    var ExpandMore_default = /* @__PURE__ */ __webpack_require__.n(ExpandMore);
    var ListItemIcon = __webpack_require__(1324);
    var ListItemText = __webpack_require__(1325);
    var RadioButtonChecked = __webpack_require__(729);
    var RadioButtonChecked_default = /* @__PURE__ */ __webpack_require__.n(RadioButtonChecked);
    var RadioButtonUnchecked = __webpack_require__(730);
    var RadioButtonUnchecked_default = /* @__PURE__ */ __webpack_require__.n(RadioButtonUnchecked);
    var menu_style = __webpack_require__(465);
    const useStyles = Object(makeStyles["a"])((theme) => ({
      listItemIcon: {
        minWidth: "1.75rem"
      },
      nested: {
        paddingLeft: theme.spacing(2)
      },
      primaryLabel: {
        fontSize: "0.9rem"
      }
    }));
    const Submenu = (props) => {
      const {children, label, options, secondaryLabel} = props;
      const classes = useStyles();
      const [open, setOpen] = Object(react["useState"])(false);
      const handleClick = () => {
        setOpen(!open);
      };
      const renderItem = (item) => /* @__PURE__ */ react_default.a.createElement(ListItem["a"], {
        key: item.id,
        button: true,
        className: classes.nested,
        onClick: item.onClick
      }, item.checked !== void 0 && /* @__PURE__ */ react_default.a.createElement(ListItemIcon["a"], {
        classes: {root: classes.listItemIcon}
      }, item.checked ? /* @__PURE__ */ react_default.a.createElement(RadioButtonChecked_default.a, null) : /* @__PURE__ */ react_default.a.createElement(RadioButtonUnchecked_default.a, null)), /* @__PURE__ */ react_default.a.createElement(ListItemText["a"], {
        primary: item.label,
        classes: {primary: classes.primaryLabel}
      }));
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(ListItem["a"], {
        button: true,
        onClick: handleClick
      }, /* @__PURE__ */ react_default.a.createElement(ListItemText["a"], {
        primary: label,
        classes: {primary: classes.primaryLabel}
      }), secondaryLabel && /* @__PURE__ */ react_default.a.createElement("div", {
        className: menu_style["secondaryLabel"]
      }, secondaryLabel), open ? /* @__PURE__ */ react_default.a.createElement(ExpandLess_default.a, {
        fontSize: "large"
      }) : /* @__PURE__ */ react_default.a.createElement(ExpandMore_default.a, {
        fontSize: "large"
      })), /* @__PURE__ */ react_default.a.createElement(Collapse["a"], {
        in: open,
        timeout: "auto",
        unmountOnExit: true
      }, options && /* @__PURE__ */ react_default.a.createElement(List["a"], {
        component: "div",
        disablePadding: true
      }, options.map(renderItem)), children && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, children)));
    };
    Submenu.propTypes = {
      children: prop_types_default.a.oneOfType([
        prop_types_default.a.arrayOf(prop_types_default.a.node),
        prop_types_default.a.node
      ]),
      label: prop_types_default.a.string.isRequired,
      options: prop_types_default.a.array,
      secondaryLabel: prop_types_default.a.string
    };
    Submenu.defaultProps = {
      options: [],
      secondaryLabel: null
    };
    var subMenu = Submenu;
    var find = __webpack_require__(1370);
    var Dialog = __webpack_require__(754);
    var DialogActions = __webpack_require__(1340);
    var DialogContent = __webpack_require__(1339);
    var DialogTitle = __webpack_require__(1338);
    var is = __webpack_require__(480);
    var Radio = __webpack_require__(1363);
    var RadioGroup = __webpack_require__(1335);
    var FormControlLabel = __webpack_require__(1334);
    var FormControl = __webpack_require__(1316);
    var FormLabel = __webpack_require__(1266);
    var settings_style = __webpack_require__(75);
    const Displays = ({id, displays, setDisplay}) => {
      const [value, setValue] = react_default.a.useState(0);
      Object(react["useEffect"])(() => {
        if (id) {
          setValue(id);
        }
      }, [id]);
      const handleChange = ({target}) => {
        setDisplay(!Object(is["a"])(Number, target.value) ? parseInt(target.value, 10) : target.value);
      };
      const renderDisplay = (item) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: item.id,
        value: item.id,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "primary"
        }),
        label: item.label
      });
      return /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        classes: {root: settings_style["formControl"]}
      }, /* @__PURE__ */ react_default.a.createElement(FormLabel["a"], {
        component: "legend"
      }, "Monitors"), /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value,
        onChange: handleChange
      }, displays == null ? void 0 : displays.map(renderDisplay)));
    };
    Displays.propTypes = {
      id: prop_types_default.a.number,
      displays: prop_types_default.a.array,
      setDisplay: prop_types_default.a.func.isRequired
    };
    Displays.defaultProps = {
      id: null,
      displays: []
    };
    var settings_displays = Displays;
    const HideSidebar = ({hideSidebar, setHideSidebar}) => {
      const [value, setValue] = react_default.a.useState(0);
      const [options, setOptions] = react_default.a.useState([]);
      Object(react["useEffect"])(() => {
        Object(messaging["d"])().then((results) => {
          setOptions(results || []);
        });
      }, []);
      Object(react["useEffect"])(() => {
        if (hideSidebar) {
          setValue(hideSidebar);
        }
      }, [hideSidebar]);
      const handleChange = (event) => {
        setHideSidebar(event.target.value);
      };
      const renderDisplay = (item) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: item.name,
        value: item.name,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "primary"
        }),
        label: item.label
      });
      return /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        classes: {root: settings_style["formControl"]}
      }, /* @__PURE__ */ react_default.a.createElement(FormLabel["a"], {
        component: "legend"
      }, "Hide Sidebar"), options.length > 0 && /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value,
        onChange: handleChange
      }, options.map(renderDisplay)));
    };
    HideSidebar.propTypes = {
      hideSidebar: prop_types_default.a.string,
      setHideSidebar: prop_types_default.a.func.isRequired
    };
    HideSidebar.defaultProps = {
      hideSidebar: null
    };
    var settings_hideSidebar = HideSidebar;
    var classnames = __webpack_require__(9);
    var classnames_default = /* @__PURE__ */ __webpack_require__.n(classnames);
    const hotZone_useStyles = Object(makeStyles["a"])(() => ({
      group: {
        flexDirection: "row"
      },
      control: {
        "&:first-child": {
          marginLeft: 0
        }
      },
      label: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        order: -1
      }
    }));
    const HotZone = ({hotZone, placement, setHotZone}) => {
      const [value, setValue] = Object(react["useState"])(0);
      const [options, setOptions] = Object(react["useState"])([]);
      const styles = hotZone_useStyles();
      Object(react["useEffect"])(() => {
        Object(messaging["e"])().then((results) => {
          setOptions(results || []);
        });
      }, []);
      Object(react["useEffect"])(() => {
        if (hotZone) {
          setValue(hotZone);
        }
      }, [hotZone]);
      const handleChange = (event) => {
        setHotZone(event.target.value);
      };
      const renderLabel = (label, name) => /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: `hot_zone_${name}`,
        className: classnames_default()(settings_style["hotZoneIcon"], placement === WINDOW_PLACEMENT_LEFT ? settings_style["flipIcon"] : null)
      }), /* @__PURE__ */ react_default.a.createElement("span", null, label));
      const renderDisplay = (item) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: item.name,
        value: item.name,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "primary"
        }),
        label: renderLabel(item.label, item.name),
        labelPlacement: "bottom",
        classes: {root: styles.control, label: styles.label}
      });
      return /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        classes: {root: settings_style["formControl"]}
      }, /* @__PURE__ */ react_default.a.createElement(FormLabel["a"], {
        component: "legend"
      }, "Hot Edge"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: settings_style["hotZoneHelper"]
      }, "Hovering over the Hot Edge will open the Sidebar"), options.length > 0 && /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value,
        onChange: handleChange,
        classes: {root: styles.group}
      }, options.map(renderDisplay)));
    };
    HotZone.propTypes = {
      hotZone: prop_types_default.a.string,
      placement: prop_types_default.a.string,
      setHotZone: prop_types_default.a.func.isRequired
    };
    HotZone.defaultProps = {
      hotZone: null,
      placement: null
    };
    var settings_hotZone = HotZone;
    var __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const lightbarPreview = () => {
      const onClick = () => __async(void 0, null, function* () {
        return Object(messaging["L"])();
      });
      return /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-xs",
        onClick
      }, "Preview");
    };
    lightbarPreview.propTypes = {};
    lightbarPreview.defaultProps = {};
    var settings_lightbarPreview = lightbarPreview;
    const NewWhisperAction = ({newWhisperAction, setNewWhisperAction}) => {
      const [value, setValue] = react_default.a.useState(0);
      const [options, setOptions] = react_default.a.useState([]);
      Object(react["useEffect"])(() => {
        Object(messaging["h"])().then((results) => {
          setOptions(results || []);
        });
      }, []);
      Object(react["useEffect"])(() => {
        if (newWhisperAction) {
          setValue(newWhisperAction);
        }
      }, [newWhisperAction]);
      const handleChange = (event) => {
        setNewWhisperAction(event.target.value);
      };
      const lightLabel = (label) => /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, label, /* @__PURE__ */ react_default.a.createElement(settings_lightbarPreview, null));
      const renderDisplay = (item) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: item.name,
        value: item.name,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "primary"
        }),
        label: item.name === NEW_WHISPER_ACTION_LIGHT ? lightLabel(item.label) : item.label
      });
      return /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        classes: {root: settings_style["formControl"]}
      }, /* @__PURE__ */ react_default.a.createElement(FormLabel["a"], {
        component: "legend"
      }, "New Whisper Action"), options.length > 0 && /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value,
        onChange: handleChange
      }, options.map(renderDisplay)));
    };
    NewWhisperAction.propTypes = {
      newWhisperAction: prop_types_default.a.string,
      setNewWhisperAction: prop_types_default.a.func.isRequired
    };
    NewWhisperAction.defaultProps = {
      newWhisperAction: null
    };
    var settings_newWhisperAction = NewWhisperAction;
    const SidebarPlacement = ({placement, setPlacement}) => {
      const [value, setValue] = react_default.a.useState(0);
      const [options, setOptions] = react_default.a.useState([]);
      Object(react["useEffect"])(() => {
        Object(messaging["k"])().then((results) => {
          setOptions(results || []);
        });
      }, []);
      Object(react["useEffect"])(() => {
        if (placement) {
          setValue(placement);
        }
      }, [placement]);
      const handleChange = (event) => {
        setPlacement(event.target.value);
      };
      const renderDisplay = (item) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: item.name,
        value: item.name,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "primary"
        }),
        label: item.label
      });
      return /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        classes: {root: settings_style["formControl"]}
      }, /* @__PURE__ */ react_default.a.createElement(FormLabel["a"], {
        component: "legend"
      }, "Sidebar Placement"), options.length > 0 && /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value,
        onChange: handleChange
      }, options.map(renderDisplay)));
    };
    SidebarPlacement.propTypes = {
      placement: prop_types_default.a.string,
      setPlacement: prop_types_default.a.func.isRequired
    };
    SidebarPlacement.defaultProps = {
      placement: null
    };
    var settings_placement = SidebarPlacement;
    var settings_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const settings_useStyles = Object(makeStyles["a"])(() => ({
      dialogTitle: {
        fontSize: "1rem",
        padding: "1rem"
      },
      dialogContent: {
        display: "flex",
        flexDirection: "column",
        fontSize: "0.75rem",
        padding: "0 1rem 0.5rem"
      }
    }));
    const findIsChecked = (displays) => (Object(find["a"])(Object(propEq["a"])("checked", true), displays) || {}).id;
    const SettingsDialog = ({setSettingsDialogOpen, settingsDialogOpen}) => {
      const {dialogContent, dialogTitle} = settings_useStyles();
      const [placement, setPlacement] = Object(react["useState"])(null);
      const [display, setActiveDisplay] = Object(react["useState"])(null);
      const [hideSidebar, setHideSidebar] = Object(react["useState"])(null);
      const [hotZone, setHotZone] = Object(react["useState"])(null);
      const [newWhisperAction, setNewWhisperAction] = Object(react["useState"])(null);
      const {displays, setConfigItem} = Object(config["e"])();
      const settings = Object(context_settings["h"])();
      const handleClose = () => {
        setSettingsDialogOpen(false);
      };
      const setValuesFromContext = (nextConfig) => {
        if (nextConfig.hideSidebar) {
          setHideSidebar(nextConfig.hideSidebar);
        }
        if (nextConfig.hotZone) {
          setHotZone(nextConfig.hotZone);
        }
        if (nextConfig.newWhisperAction) {
          setNewWhisperAction(nextConfig.newWhisperAction);
        }
        if (nextConfig[context_settings["e"]]) {
          setPlacement(nextConfig[context_settings["e"]]);
        }
      };
      Object(react["useEffect"])(() => {
        setValuesFromContext(settings);
      }, [settings]);
      Object(react["useEffect"])(() => {
        if (displays)
          setActiveDisplay(findIsChecked(displays));
      }, [displays]);
      const handleSave = () => settings_async(void 0, null, function* () {
        try {
          setSettingsDialogOpen(false);
          if (newWhisperAction !== settings[context_settings["d"]]) {
            settings.setItem(context_settings["d"])(newWhisperAction);
            yield Object(messaging["J"])(newWhisperAction);
          }
          if (hideSidebar !== settings[context_settings["b"]]) {
            settings.setItem(context_settings["b"])(hideSidebar);
            yield Object(messaging["G"])(hideSidebar);
          }
          if (hotZone !== settings[context_settings["c"]]) {
            settings.setItem(context_settings["c"])(hotZone);
            yield Object(messaging["H"])(hotZone);
          }
          if (placement !== settings[context_settings["e"]]) {
            settings.setItem(context_settings["e"])(placement);
            yield Object(messaging["K"])(placement);
          }
          if (display !== findIsChecked(displays)) {
            yield Object(messaging["F"])(display);
            const displayOptions = yield Object(messaging["c"])();
            setConfigItem(config["b"])(displayOptions);
          }
        } catch (err) {
          console.error(err);
        }
      });
      const handleCancel = () => settings_async(void 0, null, function* () {
        setSettingsDialogOpen(false);
        setValuesFromContext(settings);
      });
      return /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: settingsDialogOpen,
        onClose: handleClose,
        fullWidth: true
      }, /* @__PURE__ */ react_default.a.createElement(DialogTitle["a"], {
        disableTypography: true,
        classes: {root: dialogTitle}
      }, "Sidebar Settings"), /* @__PURE__ */ react_default.a.createElement(DialogContent["a"], {
        classes: {root: dialogContent}
      }, hideSidebar && /* @__PURE__ */ react_default.a.createElement(settings_newWhisperAction, {
        newWhisperAction,
        setNewWhisperAction
      }), hideSidebar && /* @__PURE__ */ react_default.a.createElement(settings_hideSidebar, {
        hideSidebar,
        setHideSidebar
      }), display && /* @__PURE__ */ react_default.a.createElement(settings_displays, {
        id: display,
        displays,
        setDisplay: setActiveDisplay
      }), placement && /* @__PURE__ */ react_default.a.createElement(settings_placement, {
        placement,
        setPlacement
      }), hotZone && /* @__PURE__ */ react_default.a.createElement(settings_hotZone, {
        hotZone,
        placement,
        setHotZone
      })), /* @__PURE__ */ react_default.a.createElement(DialogActions["a"], null, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: settings_style["cancelBtn"],
        variant: "contained",
        onClick: handleCancel,
        color: "transparent"
      }, "Cancel"), /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: settings_style["closeBtn"],
        variant: "contained",
        onClick: handleSave,
        color: "black"
      }, "Save")));
    };
    SettingsDialog.propTypes = {
      setSettingsDialogOpen: prop_types_default.a.func.isRequired,
      settingsDialogOpen: prop_types_default.a.bool.isRequired
    };
    SettingsDialog.defaultProps = {};
    var header_settings = SettingsDialog;
    const groupHeader = {
      color: colors["j"],
      marginTop: "1rem",
      marginBottom: "0.5rem"
    };
    const styles_icon = {
      height: "0.75rem",
      marginRight: "0.25rem",
      width: "0.75rem"
    };
    const row = {
      alignItems: "center",
      display: "flex",
      marginBottom: "0.5rem"
    };
    var shortcuts_styles = {
      groupHeader,
      icon: styles_icon,
      row
    };
    const shortcuts_useStyles = Object(makeStyles["a"])(() => ({
      dialogTitle: {
        fontSize: "1.25rem",
        padding: "1rem 1rem 0"
      },
      dialogContent: {
        fontSize: "0.75rem",
        padding: "0 1rem 0.5rem"
      }
    }));
    const KeyboardShortcutsDialog = ({
      setShortcutDialogOpen,
      shortcutDialogOpen
    }) => {
      const {[config["b"]]: displays, osName} = Object(config["e"])();
      const {dialogContent, dialogTitle} = shortcuts_useStyles();
      const shortcutGroups = Object(react["useMemo"])(() => [
        {
          label: "Search",
          shortcuts: [
            {
              name: "Global Search",
              accelerator: "CmdOrCtrl+O"
            }
          ]
        },
        {
          label: "View",
          shortcuts: [
            {
              name: "Hide or show Olive Helps",
              accelerator: "CmdOrCtrl+H"
            },
            {
              name: "Zoom in",
              accelerator: "Shift+CmdOrCtrl+Plus"
            },
            {
              name: "Zoom out",
              accelerator: "Shift+CmdOrCtrl+-"
            },
            {
              name: "Reset zoom",
              accelerator: "Shift+CmdOrCtrl+0"
            }
          ]
        },
        ...displays && displays.length > 0 ? [
          {
            label: "Switch monitors to...",
            shortcuts: displays.map((display) => ({
              name: display.name,
              accelerator: display.accelerator
            }))
          }
        ] : [],
        {
          label: "Other",
          shortcuts: [
            {
              name: "Quit Olive Helps",
              accelerator: "CmdOrCtrl+Q"
            }
          ]
        }
      ], [displays]);
      const handleClose = () => {
        setShortcutDialogOpen(false);
      };
      const renderKey = (command) => {
        if (command === "Shift") {
          return /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
            key: command,
            icon: "shift",
            style: styles_icon
          });
        }
        if (command === "CmdOrCtrl" && osName === "darwin") {
          return /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
            key: command,
            icon: "mac-command",
            style: styles_icon
          });
        }
        if (command === "CmdOrCtrl" && osName === "win32") {
          return /* @__PURE__ */ react_default.a.createElement("span", {
            key: command
          }, "Ctrl+");
        }
        if (command === "Plus") {
          return /* @__PURE__ */ react_default.a.createElement("span", {
            key: command
          }, "+");
        }
        return /* @__PURE__ */ react_default.a.createElement("span", {
          key: command
        }, command);
      };
      const renderKeys = (command) => {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          key: command,
          style: {display: "flex"}
        }, command.split("+").map(renderKey));
      };
      const renderShortcut = (shortcut, index) => {
        if (shortcut.divider)
          return /* @__PURE__ */ react_default.a.createElement(Divider["a"], {
            key: index
          });
        let {accelerator} = shortcut;
        if (Object(is["a"])(Object, shortcut.accelerator)) {
          accelerator = shortcut.accelerator[osName];
        }
        if (accelerator) {
          return /* @__PURE__ */ react_default.a.createElement("div", {
            style: row,
            key: shortcut.name
          }, /* @__PURE__ */ react_default.a.createElement("div", {
            style: {flex: ".75"}
          }, shortcut.name), /* @__PURE__ */ react_default.a.createElement("div", {
            style: {flex: ".25"}
          }, renderKeys(accelerator)));
        }
        return null;
      };
      const renderShortcutGroup = (group) => /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, {
        key: group.label
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: groupHeader
      }, group.label), group.shortcuts.map(renderShortcut));
      return /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: shortcutDialogOpen,
        onClose: handleClose,
        maxWidth: false
      }, /* @__PURE__ */ react_default.a.createElement(DialogTitle["a"], {
        disableTypography: true,
        classes: {root: dialogTitle}
      }, "Keyboard Shortcuts"), /* @__PURE__ */ react_default.a.createElement(DialogContent["a"], {
        classes: {root: dialogContent}
      }, shortcutGroups.map(renderShortcutGroup)));
    };
    KeyboardShortcutsDialog.propTypes = {
      setShortcutDialogOpen: prop_types_default.a.func.isRequired,
      shortcutDialogOpen: prop_types_default.a.bool.isRequired
    };
    KeyboardShortcutsDialog.defaultProps = {};
    var header_shortcuts = KeyboardShortcutsDialog;
    var NavigateNext = __webpack_require__(557);
    var NavigateNext_default = /* @__PURE__ */ __webpack_require__.n(NavigateNext);
    var NavigateBefore = __webpack_require__(468);
    var NavigateBefore_default = /* @__PURE__ */ __webpack_require__.n(NavigateBefore);
    const styles_useStyles = Object(makeStyles["a"])(() => ({
      section: {
        display: "flex",
        margin: "0.15rem 0 0.625rem 0"
      },
      title: {
        fontSize: "1rem",
        display: "inline",
        verticalAlign: "top"
      },
      headerButtons: {
        float: "right",
        padding: "0 0.5rem",
        marginTop: "-0.25rem"
      },
      headerIcon: {
        color: colors["e"],
        fontSize: "1.75rem"
      },
      backIcon: {
        color: colors["e"],
        fontSize: "2.25rem",
        padding: "0px",
        marginLeft: "-1rem",
        marginTop: "-0.5rem"
      },
      dialogTitleSection: {
        fontWeight: "bold",
        whiteSpace: "nowrap",
        lineHeight: "1.25rem",
        padding: "1rem 0 0 1rem",
        width: "100%"
      },
      dialogContent: {
        display: "flex",
        flexDirection: "column",
        fontSize: "0.75rem",
        padding: "0.5rem 0 1rem 1rem"
      },
      sectionTitle: {
        fontWeight: "bold",
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      },
      iconButton: {
        padding: "0rem"
      },
      nextIcon: {
        fontSize: "2.25rem",
        color: colors["e"]
      }
    }));
    var FormGroup = __webpack_require__(1269);
    var OutlinedInput = __webpack_require__(1373);
    var InputLabel = __webpack_require__(1317);
    var InputAdornment = __webpack_require__(1343);
    var Visibility = __webpack_require__(466);
    var Visibility_default = /* @__PURE__ */ __webpack_require__.n(Visibility);
    var VisibilityOff = __webpack_require__(467);
    var VisibilityOff_default = /* @__PURE__ */ __webpack_require__.n(VisibilityOff);
    var CardContent = __webpack_require__(1344);
    var Container = __webpack_require__(1342);
    const style_useStyles = Object(makeStyles["a"])(() => ({
      errorSection: {
        backgroundColor: "rgb(235,71,59,0.2)",
        borderRadius: "0.25rem",
        padding: "0.75rem 1rem 0.625rem 1rem",
        color: colors["o"],
        fontSize: "0.875rem"
      }
    }));
    const ErrorMsg = ({message}) => {
      const {errorSection} = style_useStyles();
      return message !== "" ? /* @__PURE__ */ react_default.a.createElement(Container["a"], {
        className: errorSection
      }, message) : "";
    };
    ErrorMsg.propTypes = {
      message: prop_types_default.a.string.isRequired
    };
    var error_error = ErrorMsg;
    const forms_styles_useStyles = Object(makeStyles["a"])(() => ({
      formSection: {
        padding: "0 1rem 0 0"
      },
      input: {
        border: `1px solid ${colors["j"]}`,
        borderRadius: "0.25rem",
        marginBottom: "1rem",
        backgroundColor: colors["p"],
        fontWeight: "600",
        fontSize: "1rem",
        "&:hover": {
          backgroundColor: colors["p"]
        },
        "&.Mui-focused": {
          color: colors["a"],
          backgroundColor: colors["p"],
          borderColor: colors["e"],
          border: "4px"
        }
      },
      inputLabel: {
        fontSize: "0.75rem",
        color: colors["j"],
        "&.Mui-focused": {
          color: colors["e"],
          transform: "translate(14px, 8px) scale(0.75)"
        },
        "&.MuiInputLabel-shrink": {
          transform: "translate(14px, 6px) scale(0.75)"
        }
      },
      button: {
        marginTop: "1rem",
        marginBottom: "1rem",
        marginRight: ".5rem",
        padding: ".5rem 1.5rem",
        borderWidth: "0.125rem",
        borderRadius: "0.3125rem",
        fontSize: "0.75rem"
      },
      helperText: {
        textAlign: "right !important",
        fontSize: "0.625rem !important",
        margin: "0px"
      },
      footer: {
        padding: "0px",
        "&:last-child": {
          paddingBottom: 0
        }
      },
      error: {}
    }));
    var exportSidenote_defProp = Object.defineProperty;
    var exportSidenote_hasOwnProp = Object.prototype.hasOwnProperty;
    var exportSidenote_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var exportSidenote_propIsEnum = Object.prototype.propertyIsEnumerable;
    var exportSidenote_defNormalProp = (obj, key, value) => key in obj ? exportSidenote_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var exportSidenote_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (exportSidenote_hasOwnProp.call(b, prop2))
          exportSidenote_defNormalProp(a, prop2, b[prop2]);
      if (exportSidenote_getOwnPropSymbols)
        for (var prop2 of exportSidenote_getOwnPropSymbols(b)) {
          if (exportSidenote_propIsEnum.call(b, prop2))
            exportSidenote_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var exportSidenote_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const ExportSidenote = ({handleCancel, handleSuccess}) => {
      const [formData, setFormData] = Object(react["useState"])({
        password: "",
        confirmPassword: "",
        filePath: "",
        showPassword: false
      });
      const [error, setError] = Object(react["useState"])("");
      const [inputError, setInputError] = Object(react["useState"])(false);
      const [fileBrowserError, setFileBrowserError] = Object(react["useState"])(false);
      const classes = forms_styles_useStyles();
      const handleChange = (prop2) => (event) => {
        const newValue = event.target.value;
        setFormData((prevState) => exportSidenote_assign(exportSidenote_assign({}, prevState), {
          [prop2]: newValue
        }));
      };
      const errorMsg = (message) => {
        setError(message);
        setTimeout(() => {
          setError("");
          setFileBrowserError(false);
          setInputError(false);
        }, 3e3);
      };
      const isValidPassword = (password, confirmedPassword) => {
        if (password !== confirmedPassword) {
          errorMsg("Passwords do not match. Please enter your password and try your export again");
          setInputError(true);
          return false;
        }
        if (password.length < 6) {
          errorMsg("Password is to short. Your password must have a minimum length of 6 characters");
          setInputError(true);
          return false;
        }
        return true;
      };
      const openFileBrowser = () => exportSidenote_async(void 0, null, function* () {
        const file = yield Object(utils["f"])({
          title: "Choose location to export file",
          buttonLabel: "Select",
          filters: [{name: "Database File", extensions: ["db"]}],
          properties: ["openDirectory"],
          defaultPath: "home",
          getCurrent: false
        });
        if (file && !file.canceled) {
          setFormData((prevState) => exportSidenote_assign(exportSidenote_assign({}, prevState), {
            filePath: file.filePaths[0]
          }));
        }
      });
      const handleExport = () => exportSidenote_async(void 0, null, function* () {
        const {password, confirmPassword, filePath} = formData;
        if (isValidPassword(password, confirmPassword)) {
          try {
            yield Object(messaging["O"])(password, filePath);
            handleSuccess("Sidenote database has been exported! Check the file path you selected to access the file.");
          } catch (err) {
            errorMsg("sidenote.db could not be exported. Please Try your export again.");
            setFileBrowserError(true);
          }
        }
      });
      const handleShowPassword = () => {
        setFormData((prevState) => exportSidenote_assign(exportSidenote_assign({}, prevState), {
          showPassword: !formData.showPassword
        }));
      };
      const visibilityEndAdornment = () => /* @__PURE__ */ react_default.a.createElement(InputAdornment["a"], {
        position: "end"
      }, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        "aria-label": "toggle password visibility",
        onClick: handleShowPassword
      }, formData.showPassword ? /* @__PURE__ */ react_default.a.createElement(Visibility_default.a, null) : /* @__PURE__ */ react_default.a.createElement(VisibilityOff_default.a, null)));
      const browseEndAdornment = () => /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "FileBrowserButton",
        "aria-label": "toggle file browser",
        style: {
          borderRadius: "0.25rem",
          fontSize: "0.75rem",
          padding: "0.3125rem 1.3125rem"
        },
        onClick: openFileBrowser,
        label: "Browse",
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        type: "Submit"
      });
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.formSection
      }, /* @__PURE__ */ react_default.a.createElement("p", null, "Create a password to encrypt and export Sidenote. You need to remember this password to import the exported file."), /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], null, /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        variant: "outlined"
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        className: classes.inputLabel,
        htmlFor: "outlined-adornment-password"
      }, "Password (min 6 characters)"), /* @__PURE__ */ react_default.a.createElement(OutlinedInput["a"], {
        autoFocus: true,
        error: inputError,
        notched: false,
        type: formData.showPassword ? "text" : "password",
        value: formData.password,
        className: classes.input,
        classes: {
          input: classes.innerInput
        },
        onChange: handleChange("password"),
        endAdornment: visibilityEndAdornment(),
        label: "Password (min 6 characters)",
        name: "password",
        required: true,
        variant: "filled"
      })), /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        variant: "outlined"
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        className: classes.inputLabel,
        htmlFor: "confirm-password"
      }, "Confirm Password"), /* @__PURE__ */ react_default.a.createElement(OutlinedInput["a"], {
        error: inputError,
        notched: false,
        type: formData.showPassword ? "text" : "password",
        className: classes.input,
        classes: {
          input: classes.innerInput
        },
        onChange: handleChange("confirmPassword"),
        endAdornment: visibilityEndAdornment(),
        label: "Confirm Password",
        name: "confirmPassword",
        required: true,
        variant: "filled"
      })), /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        variant: "outlined"
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        className: classes.inputLabel,
        htmlFor: "confirm-password"
      }, "File Path"), /* @__PURE__ */ react_default.a.createElement(OutlinedInput["a"], {
        error: fileBrowserError,
        readOnly: true,
        notched: false,
        value: formData.filePath,
        type: "text",
        className: classes.input,
        classes: {
          input: classes.innerInput
        },
        endAdornment: browseEndAdornment(),
        label: "Confirm Password",
        name: "confirmPassword",
        required: true,
        variant: "filled"
      })), /* @__PURE__ */ react_default.a.createElement(error_error, {
        message: error
      }), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(CardContent["a"], {
        className: classes.footer
      }, /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "Export",
        "aria-label": "export sidenotes",
        onClick: handleExport,
        className: classes.button,
        label: "Export",
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        type: "Submit"
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "cancel",
        "aria-label": "cancel export sidenotes",
        className: classes.button,
        onClick: handleCancel,
        label: "Cancel",
        buttonSize: "small",
        buttonType: "secondary",
        align: "right"
      }))));
    };
    ExportSidenote.propTypes = {
      handleCancel: prop_types_default.a.func.isRequired,
      handleSuccess: prop_types_default.a.func.isRequired
    };
    var exportSidenote = ExportSidenote;
    var importSidenote_defProp = Object.defineProperty;
    var importSidenote_hasOwnProp = Object.prototype.hasOwnProperty;
    var importSidenote_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var importSidenote_propIsEnum = Object.prototype.propertyIsEnumerable;
    var importSidenote_defNormalProp = (obj, key, value) => key in obj ? importSidenote_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var importSidenote_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (importSidenote_hasOwnProp.call(b, prop2))
          importSidenote_defNormalProp(a, prop2, b[prop2]);
      if (importSidenote_getOwnPropSymbols)
        for (var prop2 of importSidenote_getOwnPropSymbols(b)) {
          if (importSidenote_propIsEnum.call(b, prop2))
            importSidenote_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var importSidenote_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const ImportSidenote = ({handleCancel, handleSuccess}) => {
      const [formData, setFormData] = Object(react["useState"])({
        password: "",
        filePath: "",
        showPassword: false
      });
      const [error, setError] = Object(react["useState"])("");
      const [inputError, setInputError] = Object(react["useState"])(false);
      const classes = forms_styles_useStyles();
      const handleChange = (prop2) => (event) => {
        const newValue = event.target.value;
        setFormData((prevState) => importSidenote_assign(importSidenote_assign({}, prevState), {
          [prop2]: newValue
        }));
      };
      const errorMsg = (message) => {
        setError(message);
        setTimeout(() => {
          setError("");
          setInputError(false);
        }, 3e3);
      };
      const openFileBrowser = () => importSidenote_async(void 0, null, function* () {
        const file = yield Object(utils["f"])({
          title: "Choose location to Sidenote database file",
          buttonLabel: "Select",
          filters: [{name: "Database File", extensions: ["db"]}],
          properties: ["openFile"],
          defaultPath: "home",
          getCurrent: false
        });
        if (file && !file.canceled) {
          setFormData((prevState) => importSidenote_assign(importSidenote_assign({}, prevState), {
            filePath: file.filePaths[0]
          }));
        }
      });
      const handleImport = () => importSidenote_async(void 0, null, function* () {
        const {password, filePath} = formData;
        try {
          yield Object(messaging["Q"])(password, filePath);
          handleSuccess("sidenote.db has been successfully imported! You now have access to your Sidenotes on this computer.");
        } catch (err) {
          errorMsg("sidenote.db could not be imported. Please Try your import again.");
          setInputError(true);
        }
      });
      const handleShowPassword = () => {
        setFormData((prevState) => importSidenote_assign(importSidenote_assign({}, prevState), {
          showPassword: !formData.showPassword
        }));
      };
      const visibilityEndAdornment = () => /* @__PURE__ */ react_default.a.createElement(InputAdornment["a"], {
        position: "end"
      }, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        "aria-label": "toggle password visibility",
        onClick: handleShowPassword
      }, formData.showPassword ? /* @__PURE__ */ react_default.a.createElement(Visibility_default.a, null) : /* @__PURE__ */ react_default.a.createElement(VisibilityOff_default.a, null)));
      const browseEndAdornment = () => /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        "aria-label": "toggle file browser",
        id: "ImportFileBrowserButton",
        style: {
          borderRadius: "0.25rem",
          fontSize: "0.75rem",
          padding: "0.3125rem 1.3125rem"
        },
        onClick: openFileBrowser,
        label: "Browse",
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        type: "Submit"
      });
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.formSection
      }, /* @__PURE__ */ react_default.a.createElement("p", null, "Select the file you want to import and enter the required password associated with the file."), /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], null, /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        variant: "outlined"
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        className: classes.inputLabel,
        htmlFor: "import-file"
      }, "File Path"), /* @__PURE__ */ react_default.a.createElement(OutlinedInput["a"], {
        error: inputError,
        readOnly: true,
        notched: false,
        value: formData.filePath,
        className: classes.input,
        classes: {
          input: classes.innerInput
        },
        endAdornment: browseEndAdornment(),
        label: "Confirm Password",
        name: "confirmPassword",
        required: true,
        variant: "filled"
      })), /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        variant: "outlined"
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        className: classes.inputLabel,
        htmlFor: "outlined-adornment-password"
      }, "Password"), /* @__PURE__ */ react_default.a.createElement(OutlinedInput["a"], {
        autoFocus: true,
        error: inputError,
        notched: false,
        type: formData.showPassword ? "text" : "password",
        value: formData.password,
        className: classes.input,
        classes: {
          input: classes.innerInput
        },
        onChange: handleChange("password"),
        endAdornment: visibilityEndAdornment(),
        label: "Password",
        name: "password",
        required: true,
        variant: "filled"
      })), /* @__PURE__ */ react_default.a.createElement(error_error, {
        message: error
      }), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(CardContent["a"], {
        className: classes.footer
      }, /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "import",
        "aria-label": "import sidenotes",
        onClick: handleImport,
        className: classes.button,
        label: "Import",
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        type: "Submit"
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "cancel",
        "aria-label": "cancel import sidenotes",
        className: classes.button,
        onClick: handleCancel,
        label: "Cancel",
        buttonSize: "small",
        buttonType: "secondary",
        align: "right"
      }))));
    };
    ImportSidenote.propTypes = {
      handleCancel: prop_types_default.a.func.isRequired,
      handleSuccess: prop_types_default.a.func.isRequired
    };
    var importSidenote = ImportSidenote;
    const SuccessMsg = ({message, handleClose}) => {
      const {fetchAllNotes} = Object(react["useContext"])(sidenote["a"]);
      Object(react["useEffect"])(() => {
        fetchAllNotes();
      }, []);
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        style: {
          marginBottom: "1.25rem",
          fontSize: "0.75rem"
        }
      }, message), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "closeSidenoteSettings",
        style: {
          marginTop: "1rem",
          marginRight: "1rem",
          padding: ".5rem 1.5rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          fontSize: "0.75rem"
        },
        onClick: handleClose,
        label: "Close",
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        type: "Submit"
      })));
    };
    SuccessMsg.propTypes = {
      message: prop_types_default.a.string.isRequired,
      handleClose: prop_types_default.a.func.isRequired
    };
    var sidenoteSettings_successMsg = SuccessMsg;
    const SidenoteSettingsDialog = ({
      sidenoteSettingsOpen,
      setSidenoteSettingsOpen
    }) => {
      const [title, setTitle] = Object(react["useState"])("Sidenote Settings");
      const [openExport, setOpenExport] = Object(react["useState"])(false);
      const [openImport, setOpenImport] = Object(react["useState"])(false);
      const [success, setSuccess] = Object(react["useState"])(false);
      const [successMsg, setSuccessMsg] = Object(react["useState"])();
      const classes = styles_useStyles();
      const reset = () => {
        setOpenExport(false);
        setOpenImport(false);
        setSuccess(false);
        setSuccessMsg("");
        setTitle("Sidenote Settings");
      };
      const handleClose = () => {
        reset();
        setSidenoteSettingsOpen(false);
      };
      const handleImport = () => {
        setTitle("Import Sidenote");
        setOpenImport(!openImport);
      };
      const handleExport = () => {
        setTitle("Export Sidenote");
        setOpenExport(!openExport);
      };
      const handleSuccess = (message) => {
        setTitle("Success");
        setOpenExport(false);
        setOpenImport(false);
        setSuccess(true);
        setSuccessMsg(message);
      };
      return /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: sidenoteSettingsOpen,
        onClose: handleClose,
        fullWidth: true
      }, /* @__PURE__ */ react_default.a.createElement(DialogTitle["a"], {
        classes: {root: classes.dialogTitleSection},
        disableTypography: true
      }, (openExport || openImport) && /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        onClick: reset,
        className: classes.iconButton
      }, /* @__PURE__ */ react_default.a.createElement(NavigateBefore_default.a, {
        className: classes.backIcon
      })), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.title
      }, title), !openExport && /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        classes: {root: classes.headerButtons},
        onClick: handleClose
      }, /* @__PURE__ */ react_default.a.createElement(Close_default.a, {
        className: classes.headerIcon
      }))), /* @__PURE__ */ react_default.a.createElement(DialogContent["a"], {
        classes: {root: classes.dialogContent}
      }, !openExport && !openImport && !success ? /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.section
      }, /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.sectionTitle
      }, "Import Sidenotes"), /* @__PURE__ */ react_default.a.createElement("div", null, "Select this setting if you want to import Sidenotes from a previous computer")), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        classes: {root: classes.iconButton},
        onClick: handleImport
      }, /* @__PURE__ */ react_default.a.createElement(NavigateNext_default.a, {
        className: classes.nextIcon
      })))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.section
      }, /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.sectionTitle
      }, "Export Sidenotes"), /* @__PURE__ */ react_default.a.createElement("div", null, "Select this setting if you want to export Sidenotes. Note: You will need to create a password used to encrypt and recover your Sidenotes when importing on a different computer.")), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        classes: {root: classes.iconButton},
        onClick: handleExport
      }, /* @__PURE__ */ react_default.a.createElement(NavigateNext_default.a, {
        className: classes.nextIcon
      }))))) : "", openExport && /* @__PURE__ */ react_default.a.createElement(exportSidenote, {
        handleCancel: reset,
        handleSuccess
      }), openImport && /* @__PURE__ */ react_default.a.createElement(importSidenote, {
        handleCancel: reset,
        handleSuccess
      }), success && /* @__PURE__ */ react_default.a.createElement(sidenoteSettings_successMsg, {
        message: successMsg,
        handleClose
      })));
    };
    SidenoteSettingsDialog.propTypes = {
      sidenoteSettingsOpen: prop_types_default.a.bool.isRequired,
      setSidenoteSettingsOpen: prop_types_default.a.func.isRequired
    };
    var sidenoteSettings = SidenoteSettingsDialog;
    var header_style = __webpack_require__(50);
    var header_style_default = /* @__PURE__ */ __webpack_require__.n(header_style);
    var menu_defProp = Object.defineProperty;
    var menu_hasOwnProp = Object.prototype.hasOwnProperty;
    var menu_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var menu_propIsEnum = Object.prototype.propertyIsEnumerable;
    var menu_defNormalProp = (obj, key, value) => key in obj ? menu_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var menu_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (menu_hasOwnProp.call(b, prop2))
          menu_defNormalProp(a, prop2, b[prop2]);
      if (menu_getOwnPropSymbols)
        for (var prop2 of menu_getOwnPropSymbols(b)) {
          if (menu_propIsEnum.call(b, prop2))
            menu_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var menu_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const menu_useStyles = Object(makeStyles["a"])(() => ({
      listRoot: {
        width: "70vw"
      },
      listItemRoot: {
        fontSize: "0.9rem"
      }
    }));
    const menu_FEEDBACK_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfuC9eaf9R6Fns6wd_mgCgicvsCreaXudNPWFDtTxO0hfPNOg/viewform";
    const HELP_URL = "https://olive.page.link/olive-helps-faq";
    const AppMenu = ({className}) => {
      const [anchorEl, setAnchorEl] = Object(react["useState"])(null);
      const [shortcutDialogOpen, setShortcutDialogOpen] = Object(react["useState"])(false);
      const [settingsDialogOpen, setSettingsDialogOpen] = Object(react["useState"])(false);
      const [sidenoteSettingsOpen, setSidenoteSettingsOpen] = Object(react["useState"])(false);
      const {setConfigItem} = Object(config["e"])();
      const classes = menu_useStyles();
      Object(react["useEffect"])(() => {
        Object(messaging["u"])("openSettings", () => {
          setTimeout(() => {
            setSettingsDialogOpen(true);
          }, 100);
        }).catch(console.error);
      }, []);
      const updateDisplays = () => menu_async(void 0, null, function* () {
        const displayOptions = yield Object(messaging["c"])();
        setConfigItem(config["b"])(displayOptions);
      });
      const handleClick = (event) => {
        Object(tracking["h"])({
          category: tracking["d"],
          action: "View change - Settings",
          label: "open"
        });
        updateDisplays();
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const onClickAboutOliveHelps = () => menu_async(void 0, null, function* () {
        try {
          yield Object(messaging["v"])();
          handleClose();
        } catch (err) {
          console.error(err);
        }
      });
      const onClickOpenLoopLibrary = () => menu_async(void 0, null, function* () {
        try {
          yield Object(messaging["y"])();
          handleClose();
        } catch (err) {
          console.error(err);
        }
      });
      const onClickOpenEventInspector = () => menu_async(void 0, null, function* () {
        try {
          yield Object(messaging["w"])();
          handleClose();
        } catch (err) {
          console.error(err);
        }
      });
      const onClickOpenLogs = () => menu_async(void 0, null, function* () {
        try {
          yield Object(messaging["x"])();
          handleClose();
        } catch (err) {
          console.error(err);
        }
      });
      const onClickLogout = () => menu_async(void 0, null, function* () {
        try {
          yield Object(messaging["q"])("the user clicked the logout button in the sidebar hamburger menu");
          handleClose();
        } catch (err) {
          console.error(err);
        }
      });
      const onClickQuit = () => menu_async(void 0, null, function* () {
        try {
          yield Object(messaging["z"])("the user clicked the quit button in the sidebar hamburger menu");
          handleClose();
        } catch (err) {
          console.error(err);
        }
      });
      const menuOptions = Object(react["useMemo"])(() => [
        {
          label: "About Olive Helps",
          onClick: onClickAboutOliveHelps
        },
        {
          divider: true
        },
        {
          label: "Sidebar Settings",
          onClick: () => {
            setSettingsDialogOpen(true);
            handleClose();
          }
        },
        {
          label: "Sidenote Settings",
          onClick: () => {
            setSidenoteSettingsOpen(true);
            handleClose();
          }
        },
        {
          label: "Keyboard Shortcuts",
          onClick: () => {
            setShortcutDialogOpen(true);
            handleClose();
          }
        },
        {
          label: "Send Feedback",
          onClick: () => Object(utils["e"])(menu_FEEDBACK_URL)
        },
        {
          label: "Get Help",
          onClick: () => Object(utils["e"])(HELP_URL)
        },
        {
          divider: true
        },
        {subheader: "Open..."},
        {
          label: "Loop Library",
          onClick: onClickOpenLoopLibrary
        },
        {
          label: "Event Inspector",
          onClick: onClickOpenEventInspector
        },
        {
          label: "Olive Helps Logs",
          onClick: onClickOpenLogs
        },
        {
          divider: true
        },
        {
          label: "Logout",
          onClick: onClickLogout
        },
        {
          label: "Quit Olive Helps",
          onClick: onClickQuit
        }
      ], []);
      const renderMenuItem = (item, index) => {
        const {component, divider, label, onClick, options, subheader} = item;
        if (subheader) {
          return /* @__PURE__ */ react_default.a.createElement(ListSubheader["a"], {
            key: subheader
          }, subheader);
        }
        if (divider) {
          return /* @__PURE__ */ react_default.a.createElement(Divider["a"], {
            key: index
          });
        }
        if (component) {
          const Component = component;
          return /* @__PURE__ */ react_default.a.createElement(Component, {
            key: index,
            isOpen: Boolean(anchorEl)
          });
        }
        if (options !== void 0) {
          if (options) {
            return /* @__PURE__ */ react_default.a.createElement(subMenu, menu_assign({
              key: label
            }, item));
          }
          return null;
        }
        return /* @__PURE__ */ react_default.a.createElement(ListItem["a"], {
          key: label,
          button: true,
          onClick,
          className: classes.listItemRoot
        }, label);
      };
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className
      }, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: handleClick,
        tooltip: "App Menu",
        color: "transparent",
        className: header_style["headerBtn"]
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "menu",
        className: menu_style["menuIcon"]
      })), /* @__PURE__ */ react_default.a.createElement(Popover["a"], {
        anchorEl,
        keepMounted: true,
        open: Boolean(anchorEl),
        onClose: handleClose
      }, /* @__PURE__ */ react_default.a.createElement(List["a"], {
        className: classes.listRoot
      }, menuOptions.map(renderMenuItem)))), /* @__PURE__ */ react_default.a.createElement(header_shortcuts, menu_assign({}, {
        setShortcutDialogOpen,
        shortcutDialogOpen
      })), /* @__PURE__ */ react_default.a.createElement(header_settings, menu_assign({}, {
        setSettingsDialogOpen,
        settingsDialogOpen
      })), /* @__PURE__ */ react_default.a.createElement(sidenoteSettings, menu_assign({}, {
        sidenoteSettingsOpen,
        setSidenoteSettingsOpen
      })));
    };
    AppMenu.propTypes = {
      className: prop_types_default.a.string
    };
    AppMenu.defaultProps = {
      className: ""
    };
    var menu = AppMenu;
    var CSSTransition = __webpack_require__(1365);
    var ArrowUpward = __webpack_require__(732);
    var ArrowUpward_default = /* @__PURE__ */ __webpack_require__.n(ArrowUpward);
    var usePrevious = (value) => {
      const ref = Object(react["useRef"])();
      Object(react["useEffect"])(() => {
        ref.current = value;
      });
      return ref.current;
    };
    const NewWhisperBadge = ({
      cardContainer,
      onClick,
      setShowNewWhisperBadge,
      showNewWhisperBadge
    }) => {
      const timeout = Object(react["useRef"])(null);
      const {sidebarOpen} = Object(react["useContext"])(global["a"]);
      const prevSidebarOpen = usePrevious(sidebarOpen);
      const scrollHandler = (event) => {
        if (showNewWhisperBadge && event.target.scrollTop < 16) {
          setShowNewWhisperBadge(false);
        }
      };
      Object(react["useEffect"])(() => {
        if (prevSidebarOpen === false && sidebarOpen) {
          clearTimeout(timeout.current);
          timeout.current = setTimeout(() => setShowNewWhisperBadge(false), 2e3);
        }
      }, [sidebarOpen]);
      Object(react["useEffect"])(() => {
        if (showNewWhisperBadge) {
          Object(tracking["h"])({
            category: tracking["d"],
            action: "Display New Whisper Badge"
          });
        }
      }, [showNewWhisperBadge]);
      Object(react["useEffect"])(() => {
        var _a;
        (_a = cardContainer.current) == null ? void 0 : _a.addEventListener("scroll", scrollHandler);
        return () => {
          var _a2;
          (_a2 = cardContainer.current) == null ? void 0 : _a2.removeEventListener("scroll", scrollHandler);
        };
      }, [cardContainer.current, showNewWhisperBadge]);
      return /* @__PURE__ */ react_default.a.createElement(CSSTransition["a"], {
        in: showNewWhisperBadge,
        timeout: 200,
        classNames: {
          enter: header_style["newWhisperBadgeEnter"],
          enterActive: header_style["newWhisperBadgeEnterActive"],
          exit: header_style["newWhisperBadgeExit"],
          exitActive: header_style["newWhisperBadgeExitActive"]
        },
        unmountOnExit: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: header_style["newWhisperBadge"],
        onClick,
        role: "button",
        tabIndex: "-1"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: header_style["newWhisperBadgeText"]
      }, "New"), /* @__PURE__ */ react_default.a.createElement(ArrowUpward_default.a, {
        className: header_style["newWhisperBadgeIcon"]
      })));
    };
    NewWhisperBadge.propTypes = {
      cardContainer: prop_types_default.a.oneOfType([
        prop_types_default.a.func,
        prop_types_default.a.shape({current: prop_types_default.a.instanceOf(Element)})
      ]),
      onClick: prop_types_default.a.func.isRequired,
      setShowNewWhisperBadge: prop_types_default.a.func.isRequired,
      showNewWhisperBadge: prop_types_default.a.bool.isRequired
    };
    var newWhisperBadge = NewWhisperBadge;
    var search_styles = __webpack_require__(357);
    const Search = ({isOpen, value, toggle, update, search}) => {
      const onBlur = () => Object(messaging["p"])("sidebar", false).catch(console.error);
      const onFocus = () => Object(messaging["p"])("sidebar", true).catch(console.error);
      const onClear = () => value ? update("") : toggle();
      const onKeyDown = (event) => {
        if (event.key === "Enter") {
          search();
        }
        if (event.key === "Escape") {
          onClear();
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: isOpen ? Object(utils["b"])([search_styles["searchContainer"], "open"]) : search_styles["searchContainer"]
      }, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: toggle,
        tooltip: "Search",
        color: "transparent",
        className: header_style["headerBtn"]
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "search",
        style: {
          fontSize: "2rem",
          color: isOpen ? "#949494" : "white",
          height: "2rem",
          width: "2rem"
        }
      })), isOpen && /* @__PURE__ */ react_default.a.createElement("div", {
        className: search_styles["searchInputContainer"]
      }, /* @__PURE__ */ react_default.a.createElement("input", {
        placeholder: "Search for anything...",
        id: "input_searchBar",
        name: "search",
        type: "text",
        onChange: (e) => {
          update(e.target.value);
        },
        onBlur,
        onFocus,
        className: search_styles["searchInputClass"],
        onKeyDown,
        value,
        autoFocus: true
      })), isOpen && /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: onClear,
        tooltip: "Clear",
        color: "transparent"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "cancel",
        style: {
          fontSize: "1.125rem",
          color: "#949494",
          height: "1.0625rem",
          width: "1.0625rem"
        },
        className: search_styles["cancelIcon"]
      })));
    };
    Search.propTypes = {
      isOpen: prop_types_default.a.bool.isRequired,
      value: prop_types_default.a.string.isRequired,
      toggle: prop_types_default.a.func.isRequired,
      update: prop_types_default.a.func.isRequired,
      search: prop_types_default.a.func.isRequired
    };
    var header_search = Search;
    var clearWhispersButton_style = __webpack_require__(558);
    const ClearAllWhispersButton = ({clearAllWhispers}) => {
      const [hovering, setHovering] = Object(react["useState"])(false);
      return /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: clearWhispersButton_style["clearAllWhispersButton"],
        onClick: () => clearAllWhispers(),
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false)
      }, hovering ? /* @__PURE__ */ react_default.a.createElement("span", null, "Clear Whispers") : /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "close",
        className: clearWhispersButton_style["icon"]
      }));
    };
    ClearAllWhispersButton.propTypes = {
      clearAllWhispers: prop_types_default.a.func.isRequired
    };
    var clearWhispersButton = ClearAllWhispersButton;
    var subheader_style = __webpack_require__(144);
    const Subheader = ({
      showSearching,
      showSearchedTerm,
      searchedTerm,
      showClearWhispersBtn,
      clearAllWhispers,
      show,
      transparent
    }) => {
      const subheaderClasses = Object(react["useMemo"])(() => {
        const classes = [subheader_style["subheader"]];
        if (!show) {
          classes.push(subheader_style["up"]);
        }
        if (transparent) {
          classes.push(subheader_style["transparent"]);
        }
        return classes;
      }, [show, transparent]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: Object(utils["b"])(subheaderClasses)
      }, showSearching && /* @__PURE__ */ react_default.a.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: ".75rem",
          color: "white"
        }
      }, "Searching", /* @__PURE__ */ react_default.a.createElement("div", {
        className: Object(utils["b"])([subheader_style["animateBounce"], subheader_style["delay100"]])
      }, "."), /* @__PURE__ */ react_default.a.createElement("div", {
        className: Object(utils["b"])([subheader_style["animateBounce"], subheader_style["delay200"]])
      }, "."), /* @__PURE__ */ react_default.a.createElement("div", {
        className: Object(utils["b"])([subheader_style["animateBounce"]])
      }, ".")), showSearchedTerm && /* @__PURE__ */ react_default.a.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: ".75rem",
          color: "white"
        }
      }, "Searched for: ", searchedTerm), /* @__PURE__ */ react_default.a.createElement("div", null), showClearWhispersBtn && /* @__PURE__ */ react_default.a.createElement(clearWhispersButton, {
        clearAllWhispers
      }));
    };
    Subheader.propTypes = {
      showSearching: prop_types_default.a.bool,
      showSearchedTerm: prop_types_default.a.bool,
      searchedTerm: prop_types_default.a.string,
      showClearWhispersBtn: prop_types_default.a.bool.isRequired,
      clearAllWhispers: prop_types_default.a.func.isRequired,
      show: prop_types_default.a.bool.isRequired,
      transparent: prop_types_default.a.bool.isRequired
    };
    var header_subheader = Subheader;
    var header_styles = ({theme}) => ({
      header: {
        minHeight: "3.125rem",
        background: `linear-gradient(180deg, ${theme.background.primary} 0%, ${theme.background.secondary} 100%)`,
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: "0 .5rem",
        position: "relative",
        zIndex: 101
      }
    });
    const Header = ({
      cardContainer,
      externalSearchMetadata,
      setExternalSearchMetadata,
      setShowNewWhisperBadge,
      showNewWhisperBadge,
      showClearWhispersBtn,
      clearAllWhispers
    }) => {
      const {[context_settings["e"]]: windowPlacement} = Object(context_settings["h"])();
      const {[config["c"]]: environment} = Object(config["e"])();
      const {set} = Object(react["useContext"])(global["a"]);
      const [version, setVersion] = Object(react["useState"])("");
      const [isSearchOpen, _setIsSearchOpen] = Object(react["useState"])(false);
      const [searchTerm, setSearchTerm] = Object(react["useState"])("");
      const [showSubmenu, setShowSubmenu] = Object(react["useState"])(true);
      const [transparentSubmenu, setTransparentSubmenu] = Object(react["useState"])(true);
      const [submittedSearchTerm, setSubmittedSearchTerm] = Object(react["useState"])("");
      const [showSearching, setShowSearching] = Object(react["useState"])(false);
      const [showSubmittedSearchTerm, setShowSubmittedSearchTerm] = Object(react["useState"])(false);
      const searchingTimer = Object(react["useRef"])(null);
      const searchedTimer = Object(react["useRef"])(null);
      const [searching, setSearching] = Object(react["useState"])(false);
      const prevScrollPos = Object(react["useRef"])(0);
      const isSearchOpenRef = Object(react["useRef"])(isSearchOpen);
      const setIsSearchOpen = (data) => {
        isSearchOpenRef.current = data;
        _setIsSearchOpen(data);
      };
      const [{header}] = useTheme(header_styles);
      const onUpdate = (value) => setSearchTerm(value);
      const onToggle = () => {
        if (isSearchOpen) {
          setIsSearchOpen(false);
          setSearchTerm("");
        } else {
          setIsSearchOpen(true);
          setTimeout(() => {
            document.getElementById("input_searchBar").focus();
          }, 0);
        }
      };
      const onReady = () => {
        Object(messaging["b"])().then((res) => {
          setVersion(res.version);
        }).catch(console.error);
      };
      Object(react["useEffect"])(() => {
        document.addEventListener("astilectron-ready", onReady);
        return () => {
          document.removeEventListener("astilectron-ready", onReady);
        };
      }, []);
      const handleSidebarClick = () => {
        if (isSearchOpenRef.current) {
          setIsSearchOpen(false);
          setSearchTerm("");
        }
      };
      Object(react["useEffect"])(() => {
        document.getElementById("sidebar").addEventListener("click", handleSidebarClick);
        return function cleanup() {
          document.getElementById("sidebar").removeEventListener("click", handleSidebarClick);
        };
      });
      const onClickScrollToTop = (label) => () => {
        var _a;
        setShowNewWhisperBadge(false);
        (_a = cardContainer.current) == null ? void 0 : _a.scroll(0, 0);
        Object(tracking["h"])({
          category: tracking["d"],
          action: "Scroll to Top",
          label
        });
      };
      const onSearch = (context) => () => {
        if (searchTerm) {
          Object(tracking["h"])({
            category: tracking["d"],
            action: "Search Action",
            label: context
          });
          Object(tracking["h"])({
            category: tracking["d"],
            action: "Search",
            label: "Submitted"
          });
          Object(tracking["h"])({
            category: tracking["d"],
            action: "Search",
            label: "Word count",
            value: searchTerm.split(" ").length
          });
          Object(tracking["h"])({
            category: tracking["d"],
            action: "Search",
            label: "Character count",
            value: searchTerm.length
          });
          Object(messaging["C"])(constants_search["b"], searchTerm).then(() => setSearching(true)).then(() => onClickScrollToTop("search")()).catch(console.error);
        }
      };
      const showSearchFeedback = (term) => {
        if (searchingTimer.current) {
          clearTimeout(searchingTimer.current);
        }
        if (searchedTimer.current) {
          clearTimeout(searchedTimer.current);
        }
        setShowSearching(true);
        setShowSubmittedSearchTerm(false);
        setSubmittedSearchTerm(term);
        searchingTimer.current = setTimeout(() => {
          setShowSearching(false);
          setShowSubmittedSearchTerm(true);
          searchedTimer.current = setTimeout(() => {
            setShowSubmittedSearchTerm(false);
            setSubmittedSearchTerm("");
          }, 5e3);
        }, 1e3);
        setSearching(false);
      };
      Object(react["useEffect"])(() => {
        if (searching) {
          showSearchFeedback(searchTerm);
        }
      }, [searching, searchTerm]);
      Object(react["useEffect"])(() => {
        if (externalSearchMetadata) {
          showSearchFeedback(externalSearchMetadata.value);
          onClickScrollToTop("external search")();
          setExternalSearchMetadata(null);
        }
      }, [externalSearchMetadata]);
      Object(react["useEffect"])(() => {
        return () => {
          clearTimeout(searchingTimer.current);
          clearTimeout(searchedTimer.current);
        };
      }, []);
      function scrollHandler(event) {
        if (!transparentSubmenu && event.target.scrollTop <= 0) {
          setTransparentSubmenu(true);
        }
        if (!showSubmenu && event.target.scrollTop <= 0) {
          setShowSubmenu(true);
        } else {
          if (transparentSubmenu) {
            setTransparentSubmenu(false);
          }
          if (prevScrollPos.current > event.target.scrollTop && !showSubmenu) {
            setShowSubmenu(true);
          }
          if (prevScrollPos.current <= event.target.scrollTop && showSubmenu) {
            setShowSubmenu(false);
          }
        }
        prevScrollPos.current = event.target.scrollTop;
      }
      Object(react["useEffect"])(() => {
        var _a;
        (_a = cardContainer.current) == null ? void 0 : _a.addEventListener("scroll", scrollHandler);
        return () => {
          var _a2;
          (_a2 = cardContainer.current) == null ? void 0 : _a2.removeEventListener("scroll", scrollHandler);
        };
      }, [cardContainer.current, showSubmenu]);
      const closeSidebar = () => {
        setIsSearchOpen(false);
        setSearchTerm("");
        Object(messaging["ab"])(false).catch(() => set("sidebarOpen")(false));
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: header_style["headerCont"]
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: header,
        className: header_style_default.a[`window-placement-${windowPlacement}`]
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: header_style["closeButton"]
      }, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: closeSidebar,
        tooltip: "Hide Olive Helps",
        color: "transparent",
        className: header_style["headerBtn"]
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "keyboard_tab",
        style: {fontSize: "2rem", height: "2rem", width: "2rem"}
      }))), /* @__PURE__ */ react_default.a.createElement(header_search, {
        isOpen: isSearchOpen,
        toggle: onToggle,
        value: searchTerm,
        update: onUpdate,
        search: onSearch("Enter")
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: header_style["logo"],
        style: {zIndex: isSearchOpen ? 9 : 11}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        onClick: onClickScrollToTop("logo"),
        style: {cursor: "pointer", marginRight: ".5rem"},
        role: "button",
        tabIndex: "-1"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "olive-logo",
        style: {width: "4.1875rem", height: "1.375rem"}
      })), /* @__PURE__ */ react_default.a.createElement(newWhisperBadge, {
        cardContainer,
        showNewWhisperBadge,
        setShowNewWhisperBadge,
        onClick: onClickScrollToTop("badge")
      })), environment !== constants_environment["c"] && /* @__PURE__ */ react_default.a.createElement("div", {
        className: header_style["version"]
      }, "v", version), isSearchOpen ? /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        onClick: onSearch("Go button"),
        color: "transparent",
        style: {fontSize: "1.25rem"},
        className: header_style["headerBtn"]
      }, "Go") : /* @__PURE__ */ react_default.a.createElement(menu, {
        className: header_style["menu"]
      })), /* @__PURE__ */ react_default.a.createElement(header_subheader, {
        showSearching,
        showSearchedTerm: showSubmittedSearchTerm,
        searchedTerm: submittedSearchTerm,
        clearAllWhispers,
        showClearWhispersBtn,
        show: showSubmenu,
        transparent: transparentSubmenu
      }));
    };
    Header.propTypes = {
      cardContainer: prop_types_default.a.oneOfType([
        prop_types_default.a.func,
        prop_types_default.a.shape({current: prop_types_default.a.instanceOf(Element)})
      ]),
      externalSearchMetadata: prop_types_default.a.object,
      setExternalSearchMetadata: prop_types_default.a.func.isRequired,
      setShowNewWhisperBadge: prop_types_default.a.func.isRequired,
      showNewWhisperBadge: prop_types_default.a.bool.isRequired,
      showClearWhispersBtn: prop_types_default.a.bool.isRequired,
      clearAllWhispers: prop_types_default.a.func.isRequired
    };
    Header.defaultProps = {
      externalSearchMetadata: null
    };
    var sidebar_header = Header;
    var BottomNavigation = __webpack_require__(1345);
    var BottomNavigationAction = __webpack_require__(1346);
    var navigation_style = __webpack_require__(390);
    var navigation_styles = ({theme}) => ({
      navigationWrapper: {
        background: `linear-gradient(180deg, ${theme.background.primary} 0%, ${theme.background.secondary} 100%)`
      }
    });
    const buttonClasses = {root: navigation_style["button"], label: navigation_style["label"], selected: navigation_style["selected"]};
    const iconStyle = {height: "1.6rem", width: "auto"};
    const VALUE_HOME = "Home";
    const VALUE_LOOPLIBRARY = "Loop Library";
    const VALUE_SIDENOTE = "Sidenote";
    const Navigation = () => {
      const {closeSidenote, isSidenoteOpen, openSidenote} = Object(react["useContext"])(sidenote["a"]);
      const [value, setValue] = Object(react["useState"])(VALUE_HOME);
      const [{navigationWrapper}] = useTheme(navigation_styles);
      Object(react["useEffect"])(() => {
        if (isSidenoteOpen) {
          setValue(VALUE_SIDENOTE);
        } else {
          setValue(VALUE_HOME);
        }
      }, [isSidenoteOpen]);
      const onChange = (event, newValue) => {
        if (value === VALUE_SIDENOTE && newValue === VALUE_SIDENOTE) {
          return onChange(event, VALUE_HOME);
        }
        if (newValue !== value) {
          Object(tracking["h"])({
            category: tracking["d"],
            action: "Bottom Nav - clicked",
            label: newValue
          });
        }
        if (newValue === VALUE_LOOPLIBRARY) {
          return Object(messaging["y"])();
        }
        if (newValue === VALUE_SIDENOTE) {
          openSidenote();
        }
        if (newValue === VALUE_HOME) {
          closeSidenote();
        }
        return setValue(newValue);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        style: navigationWrapper
      }, /* @__PURE__ */ react_default.a.createElement(BottomNavigation["a"], {
        value,
        onChange,
        showLabels: true,
        className: navigation_style["navigation"]
      }, /* @__PURE__ */ react_default.a.createElement(BottomNavigationAction["a"], {
        id: "home",
        label: "Home",
        classes: buttonClasses,
        icon: /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
          icon: "menu_home",
          style: iconStyle
        }),
        value: VALUE_HOME
      }), /* @__PURE__ */ react_default.a.createElement(BottomNavigationAction["a"], {
        id: "sidenote",
        label: "Sidenote",
        classes: buttonClasses,
        icon: /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
          icon: "menu_sidenote",
          style: iconStyle
        }),
        value: VALUE_SIDENOTE
      }), /* @__PURE__ */ react_default.a.createElement(BottomNavigationAction["a"], {
        id: "loop-library",
        label: "Loop Library",
        classes: buttonClasses,
        icon: /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
          icon: "menu_looplibrary",
          style: iconStyle
        }),
        value: VALUE_LOOPLIBRARY
      })));
    };
    var navigation = Navigation;
    const header_styles_useStyles = Object(makeStyles["a"])({
      iconButton: {
        margin: "0.75rem 0.5rem 0.75rem 0",
        padding: 0,
        "&:hover": {
          backgroundColor: colors["e"],
          "& .MuiSvgIcon-root": {
            color: colors["p"]
          }
        },
        "& .MuiSvgIcon-root": {
          color: colors["e"],
          fontSize: "1.9rem"
        }
      },
      title: {
        display: "inline",
        color: colors["a"],
        fontSize: "1.125rem",
        fontWeight: "bold"
      },
      newNoteButton: {
        "&&": {
          fontSize: "0.875rem"
        },
        "&&, &&:hover, &&:active": {
          borderWidth: "0.125rem"
        }
      },
      formCloseButtonContainer: {
        cursor: "pointer",
        "& span": {
          color: colors["m"],
          fontSize: "1.125rem",
          fontWeight: "bold"
        },
        "&:hover": {
          "& .MuiIconButton-root": {
            backgroundColor: colors["e"],
            "& .MuiSvgIcon-root": {
              color: colors["p"]
            }
          },
          "& span": {
            color: colors["e"]
          }
        }
      },
      formTitle: {
        color: colors["a"],
        fontSize: "1.125rem",
        fontWeight: "bold"
      }
    });
    const header_Header = ({"data-testid": dataTestId}) => {
      const {
        closeForm,
        closeSidenote,
        isFormDirty,
        isFormOpen,
        noteIdBeingEdited,
        openNewForm,
        set
      } = Object(react["useContext"])(sidenote["a"]);
      const isNewFormOpen = isFormOpen && noteIdBeingEdited === null;
      const classes = header_styles_useStyles();
      const handleCloseFormClick = () => {
        if (isFormDirty) {
          set("isDiscardChangesDialogOpen", true);
        } else {
          closeForm();
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        "data-testid": dataTestId
      }, isFormOpen ? /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("span", {
        className: classes.formCloseButtonContainer,
        onClick: handleCloseFormClick,
        role: "button",
        tabIndex: "0",
        "data-testid": `${dataTestId}-closeFormButton`
      }, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        className: classes.iconButton
      }, /* @__PURE__ */ react_default.a.createElement(NavigateBefore_default.a, null)), /* @__PURE__ */ react_default.a.createElement("span", null, "Sidenote")), /* @__PURE__ */ react_default.a.createElement("span", {
        className: classes.formTitle,
        "data-testid": `${dataTestId}-formTitle`
      }, "/ ", isNewFormOpen ? "New Note" : "Edit Note")) : /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        className: classes.iconButton,
        onClick: closeSidenote,
        "data-testid": `${dataTestId}-closeSidenoteButton`
      }, /* @__PURE__ */ react_default.a.createElement(Close_default.a, null)), /* @__PURE__ */ react_default.a.createElement("h2", {
        className: classes.title
      }, "Sidenote"), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        align: "right",
        className: classes.newNoteButton,
        buttonSize: "small",
        buttonType: "secondary",
        label: "New Note",
        title: "new note",
        onClick: openNewForm,
        "data-testid": `${dataTestId}-newNoteButton`
      })));
    };
    header_Header.propTypes = {
      "data-testid": prop_types_default.a.string
    };
    var sidenote_header = header_Header;
    var colorStrip_styles = __webpack_require__(733);
    const ColorStrip = ({color}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: colorStrip_styles["colorStrip"],
        style: color ? {background: color} : {}
      });
    };
    ColorStrip.propTypes = {
      color: prop_types_default.a.string.isRequired
    };
    var colorStrip = ColorStrip;
    var withStyles = __webpack_require__(10);
    var Card = __webpack_require__(1348);
    var Switch = __webpack_require__(1347);
    var TextField = __webpack_require__(1369);
    var DialogContentText = __webpack_require__(1349);
    var Slide = __webpack_require__(1271);
    var sanitize_html = __webpack_require__(469);
    var sanitize_html_default = /* @__PURE__ */ __webpack_require__.n(sanitize_html);
    var Draft = __webpack_require__(114);
    var react_draft_wysiwyg = __webpack_require__(734);
    var dist_react_draft_wysiwyg = __webpack_require__(1185);
    var draftjs_to_html = __webpack_require__(735);
    var draftjs_to_html_default = /* @__PURE__ */ __webpack_require__.n(draftjs_to_html);
    var emojiEmoticons = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>';
    var formatBold = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>';
    var formatIndentDecrease = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/></svg>';
    var formatIndentIncrease = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/></svg>';
    var formatItalic = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>';
    var formatListBulleted = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>';
    var formatListNumbered = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/></svg>';
    var formatStrikethrough = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"/></svg>';
    var editor_styles = __webpack_require__(736);
    var views_link = __webpack_require__(74);
    const linkStyles = {
      container: {
        paddingRight: "0",
        top: "unset",
        verticalAlign: "unset"
      }
    };
    const findLinkEntities = (contentBlock, callback, contentState) => {
      contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === "LINK";
      }, callback);
    };
    const linkDecorator_Link = ({children, contentState, entityKey}) => {
      const {url} = contentState.getEntity(entityKey).getData();
      return /* @__PURE__ */ react_default.a.createElement(views_link["a"], {
        content: {data: {url}},
        style: linkStyles
      }, children);
    };
    linkDecorator_Link.propTypes = {
      children: prop_types_default.a.array,
      contentState: prop_types_default.a.object,
      entityKey: prop_types_default.a.string.isRequired
    };
    const linkDecorator = {
      strategy: findLinkEntities,
      component: linkDecorator_Link
    };
    var editor_linkDecorator = linkDecorator;
    var draftjs_utils = __webpack_require__(328);
    var linkify_it = __webpack_require__(550);
    var linkify_it_default = /* @__PURE__ */ __webpack_require__.n(linkify_it);
    var icons_Link = __webpack_require__(737);
    var Link_default = /* @__PURE__ */ __webpack_require__.n(icons_Link);
    var linkForm_styles = __webpack_require__(391);
    var linkForm_defProp = Object.defineProperty;
    var linkForm_hasOwnProp = Object.prototype.hasOwnProperty;
    var linkForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var linkForm_propIsEnum = Object.prototype.propertyIsEnumerable;
    var linkForm_defNormalProp = (obj, key, value) => key in obj ? linkForm_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var linkForm_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (linkForm_hasOwnProp.call(b, prop2))
          linkForm_defNormalProp(a, prop2, b[prop2]);
      if (linkForm_getOwnPropSymbols)
        for (var prop2 of linkForm_getOwnPropSymbols(b)) {
          if (linkForm_propIsEnum.call(b, prop2))
            linkForm_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    function isValidHttpUrl(str) {
      let url;
      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }
      return url.protocol === "http:" || url.protocol === "https:";
    }
    const LinkForm = ({initialState, onChangeComplete, doCollapse}) => {
      const getInitLinkState = () => {
        let {link} = initialState;
        const {selectionText} = initialState;
        if (link)
          link = link.target;
        return {link: link || "", selectionText};
      };
      const [isDirty, setIsDirty] = Object(react["useState"])(true);
      const [formData, setFormData] = Object(react["useState"])(getInitLinkState);
      const titleRef = Object(react["useRef"])();
      const linkRef = Object(react["useRef"])();
      Object(react["useEffect"])(() => {
        if (formData.selectionText === "")
          titleRef.current.focus();
        else
          linkRef.current.focus();
      }, []);
      const linkOnChange = (e) => {
        const {name, value} = e.target;
        setIsDirty(false);
        setFormData((prevData) => {
          return linkForm_assign(linkForm_assign({}, prevData), {
            [name]: value
          });
        });
      };
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("label", {
        className: linkForm_styles["linkModalLabel"],
        htmlFor: "link title"
      }, "Link Title"), /* @__PURE__ */ react_default.a.createElement("input", {
        id: "linkTitle",
        className: linkForm_styles["linkModalInput"],
        ref: titleRef,
        type: "text",
        name: "selectionText",
        onChange: linkOnChange,
        value: formData.selectionText
      }), /* @__PURE__ */ react_default.a.createElement("label", {
        className: linkForm_styles["linkModalLabel"],
        htmlFor: "link"
      }, "Link"), /* @__PURE__ */ react_default.a.createElement("input", {
        id: "linkTarget",
        className: linkForm_styles["linkModalInput"],
        ref: linkRef,
        type: "text",
        name: "link",
        onChange: linkOnChange,
        value: formData.link
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        onClick: () => {
          if (!isValidHttpUrl(formData.link)) {
            formData.link = `https://${formData.link}`;
          }
          onChangeComplete(formData);
        },
        label: "Add",
        style: {
          marginTop: "1rem",
          marginBottom: "1rem",
          marginRight: "1rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          padding: "0.5rem 1.5rem",
          fontSize: "0.75rem"
        },
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        disabled: isDirty || formData.link.trim().length === 0 || formData.selectionText.trim().length === 0
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        onClick: doCollapse,
        label: "Cancel",
        style: {
          marginTop: "1rem",
          marginBottom: "1rem",
          marginRight: "1rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          padding: "0.5rem 1.5rem",
          fontSize: "0.75rem"
        },
        buttonSize: "small",
        buttonType: "secondary",
        align: "right"
      }));
    };
    LinkForm.propTypes = {
      initialState: prop_types_default.a.object.isRequired,
      onChangeComplete: prop_types_default.a.func.isRequired,
      doCollapse: prop_types_default.a.func.isRequired
    };
    var linkForm = LinkForm;
    var linkButton_styles = __webpack_require__(475);
    const stopPropagation = (e) => {
      e.stopPropagation();
    };
    const LinkButton = ({
      onExpandEvent,
      expanded,
      onChange,
      currentState,
      doCollapse
    }) => {
      const linkOnChange = (data) => {
        onChange("link", data.selectionText, data.link, "_blank");
      };
      const renderModal = () => /* @__PURE__ */ react_default.a.createElement("div", {
        role: "button",
        onClick: stopPropagation,
        className: linkButton_styles["linkModal"],
        tabIndex: 0
      }, /* @__PURE__ */ react_default.a.createElement(linkForm, {
        initialState: currentState,
        onChangeComplete: linkOnChange,
        doCollapse
      }));
      return /* @__PURE__ */ react_default.a.createElement("div", {
        "aria-haspopup": "true",
        "aria-expanded": expanded,
        className: linkButton_styles["linkButtonWrapper"]
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        role: "button",
        tabIndex: 0,
        onClick: onExpandEvent
      }, /* @__PURE__ */ react_default.a.createElement(Link_default.a, {
        className: linkButton_styles["icon"]
      })), expanded ? renderModal() : void 0);
    };
    LinkButton.propTypes = {
      onExpandEvent: prop_types_default.a.func,
      expanded: prop_types_default.a.bool,
      onChange: prop_types_default.a.func,
      currentState: prop_types_default.a.object,
      doCollapse: prop_types_default.a.func
    };
    var linkButton = LinkButton;
    var linkControl_defProp = Object.defineProperty;
    var linkControl_hasOwnProp = Object.prototype.hasOwnProperty;
    var linkControl_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var linkControl_propIsEnum = Object.prototype.propertyIsEnumerable;
    var linkControl_defNormalProp = (obj, key, value) => key in obj ? linkControl_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var linkControl_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (linkControl_hasOwnProp.call(b, prop2))
          linkControl_defNormalProp(a, prop2, b[prop2]);
      if (linkControl_getOwnPropSymbols)
        for (var prop2 of linkControl_getOwnPropSymbols(b)) {
          if (linkControl_propIsEnum.call(b, prop2))
            linkControl_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var __publicField = (obj, key, value) => {
      linkControl_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    const linkify = linkify_it_default()();
    const linkifyLink = (params) => {
      const links = linkify.match(params.target);
      return linkControl_assign(linkControl_assign({}, params), {
        target: links && links[0] && links[0].url || params.target
      });
    };
    class linkControl_Link extends react["Component"] {
      constructor(props) {
        super(props);
        __publicField(this, "onExpandEvent", () => {
          this.signalExpanded = !this.state.expanded;
        });
        __publicField(this, "onChange", (action, title, target, targetOption) => {
          if (action === "link") {
            const linkified = linkifyLink({title, target, targetOption});
            this.addLink(linkified.title, linkified.target, linkified.targetOption);
          } else {
            this.removeLink();
          }
        });
        __publicField(this, "getCurrentValues", () => {
          const {editorState: editorState2} = this.props;
          const {currentEntity} = this.state;
          const contentState = editorState2.getCurrentContent();
          const currentValues = {};
          if (currentEntity && contentState.getEntity(currentEntity).get("type") === "LINK") {
            currentValues.link = {};
            const entityRange = currentEntity && Object(draftjs_utils["getEntityRange"])(editorState2, currentEntity);
            currentValues.link.target = currentEntity && contentState.getEntity(currentEntity).get("data").url;
            currentValues.link.targetOption = currentEntity && contentState.getEntity(currentEntity).get("data").targetOption;
            currentValues.link.title = entityRange && entityRange.text;
          }
          currentValues.selectionText = Object(draftjs_utils["getSelectionText"])(editorState2);
          return currentValues;
        });
        __publicField(this, "doExpand", () => {
          this.setState({
            expanded: true
          });
        });
        __publicField(this, "expandCollapse", () => {
          this.setState({
            expanded: this.signalExpanded
          });
          this.signalExpanded = false;
        });
        __publicField(this, "doCollapse", () => {
          this.setState({
            expanded: false
          });
        });
        __publicField(this, "removeLink", () => {
          const {editorState: editorState2, onChange} = this.props;
          const {currentEntity} = this.state;
          let selection = editorState2.getSelection();
          if (currentEntity) {
            const entityRange = Object(draftjs_utils["getEntityRange"])(editorState2, currentEntity);
            const isBackward = selection.getIsBackward();
            if (isBackward) {
              selection = selection.merge({
                anchorOffset: entityRange.end,
                focusOffset: entityRange.start
              });
            } else {
              selection = selection.merge({
                anchorOffset: entityRange.start,
                focusOffset: entityRange.end
              });
            }
            onChange(Draft["RichUtils"].toggleLink(editorState2, selection, null));
          }
        });
        __publicField(this, "addLink", (linkTitle, linkTarget, linkTargetOption) => {
          const {editorState: editorState2, onChange} = this.props;
          const {currentEntity} = this.state;
          let selection = editorState2.getSelection();
          if (currentEntity) {
            const entityRange = Object(draftjs_utils["getEntityRange"])(editorState2, currentEntity);
            const isBackward = selection.getIsBackward();
            if (isBackward) {
              selection = selection.merge({
                anchorOffset: entityRange.end,
                focusOffset: entityRange.start
              });
            } else {
              selection = selection.merge({
                anchorOffset: entityRange.start,
                focusOffset: entityRange.end
              });
            }
          }
          const entityKey = editorState2.getCurrentContent().createEntity("LINK", "MUTABLE", {
            url: linkTarget,
            targetOption: linkTargetOption
          }).getLastCreatedEntityKey();
          let contentState = Draft["Modifier"].replaceText(editorState2.getCurrentContent(), selection, `${linkTitle}`, editorState2.getCurrentInlineStyle(), entityKey);
          let newEditorState = Draft["EditorState"].push(editorState2, contentState, "insert-characters");
          onChange(Draft["EditorState"].push(newEditorState, contentState, "insert-characters"));
          this.doCollapse();
        });
        const {editorState, modalHandler} = this.props;
        this.state = {
          expanded: false,
          link: void 0,
          selectionText: void 0,
          currentEntity: editorState ? Object(draftjs_utils["getSelectionEntity"])(editorState) : void 0
        };
        modalHandler.registerCallBack(this.expandCollapse);
      }
      componentDidUpdate(prevProps) {
        const {editorState} = this.props;
        if (editorState && editorState !== prevProps.editorState) {
          this.setState({currentEntity: Object(draftjs_utils["getSelectionEntity"])(editorState)});
        }
      }
      componentWillUnmount() {
        const {modalHandler} = this.props;
        modalHandler.deregisterCallBack(this.expandCollapse);
      }
      render() {
        const {translations} = this.props;
        const {expanded} = this.state;
        const {link, selectionText} = this.getCurrentValues();
        return /* @__PURE__ */ react_default.a.createElement(linkButton, {
          translations,
          expanded,
          onExpandEvent: this.onExpandEvent,
          doExpand: this.doExpand,
          doCollapse: this.doCollapse,
          currentState: {
            link,
            selectionText
          },
          onChange: this.onChange
        });
      }
    }
    __publicField(linkControl_Link, "propTypes", {
      editorState: prop_types_default.a.object,
      onChange: prop_types_default.a.func,
      modalHandler: prop_types_default.a.object,
      translations: prop_types_default.a.object
    });
    var linkControl = linkControl_Link;
    const Editor = ({initialHtml, onChange, "data-testid": dataTestId}) => {
      const getInitialEditorState = () => {
        const blocksFromHTML = Object(Draft["convertFromHTML"])(initialHtml);
        const content = Draft["ContentState"].createFromBlockArray(blocksFromHTML);
        return Draft["EditorState"].createWithContent(content);
      };
      const [editorState, setEditorState] = Object(react["useState"])(getInitialEditorState);
      const [isActive, setIsActive] = Object(react["useState"])(false);
      const [isError, setIsError] = Object(react["useState"])(false);
      Object(react["useEffect"])(() => {
        setEditorState(getInitialEditorState());
      }, [initialHtml]);
      const generateIcon = (iconName) => {
        return `data:image/svg+xml;base64,${btoa(iconName)}`;
      };
      const toolbarConfig = {
        options: ["inline", "list", "emoji"],
        inline: {
          options: ["bold", "italic", "strikethrough"],
          bold: {
            icon: generateIcon(formatBold)
          },
          italic: {
            icon: generateIcon(formatItalic)
          },
          strikethrough: {
            icon: generateIcon(formatStrikethrough)
          }
        },
        list: {
          options: ["unordered", "ordered", "indent", "outdent"],
          unordered: {
            icon: generateIcon(formatListBulleted)
          },
          ordered: {
            icon: generateIcon(formatListNumbered)
          },
          indent: {
            icon: generateIcon(formatIndentIncrease)
          },
          outdent: {
            icon: generateIcon(formatIndentDecrease)
          }
        },
        emoji: {
          icon: generateIcon(emojiEmoticons)
        }
      };
      const getRichText = (newEditorState) => {
        let richText = "";
        if (newEditorState && newEditorState.getCurrentContent) {
          richText = draftjs_to_html_default()(Object(Draft["convertToRaw"])(newEditorState.getCurrentContent()));
        }
        return richText;
      };
      const maxLength = 2e3;
      const handleAfterInput = (newText) => {
        if (newText.length > maxLength) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      };
      const handleEditorStateChange = (newEditorState) => {
        if (editorState.getCurrentContent() !== newEditorState.getCurrentContent()) {
          const newHtml = getRichText(newEditorState);
          const newPlainText = newEditorState.getCurrentContent().getPlainText();
          onChange(newHtml, newPlainText);
          handleAfterInput(newHtml);
        }
        setEditorState(newEditorState);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: editor_styles["componentWrapper"]
      }, /* @__PURE__ */ react_default.a.createElement(react_draft_wysiwyg["Editor"], {
        webDriverTestID: dataTestId,
        handlePastedText: () => false,
        customDecorators: [editor_linkDecorator],
        editorState,
        onBlur: () => setIsActive(false),
        onEditorStateChange: handleEditorStateChange,
        onFocus: () => setIsActive(true),
        toolbar: toolbarConfig,
        toolbarCustomButtons: [/* @__PURE__ */ react_default.a.createElement(linkControl, {
          key: 0
        })],
        wrapperClassName: classnames_default()({
          active: isActive,
          error: isError
        })
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()("counter", {
          error: isError
        })
      }, isError ? "Text is over the limit" : ""));
    };
    Editor.propTypes = {
      initialHtml: prop_types_default.a.string.isRequired,
      onChange: prop_types_default.a.func.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var editor = Editor;
    const keywords_useStyles = Object(makeStyles["a"])({
      root: {
        marginLeft: "0.5rem",
        marginTop: "1.5rem"
      },
      textField: {
        "& .MuiInputLabel-filled": {
          color: colors["m"],
          fontSize: "0.75rem",
          fontWeight: "bold",
          transform: "translate(0.5rem, 0.875rem) scale(1)",
          "&.Mui-focused": {
            color: colors["e"]
          },
          "&.MuiInputLabel-shrink": {
            transform: "translate(0.5rem, 0.4rem) scale(0.83)"
          },
          "&.MuiInputLabel-animated": {
            transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"
          }
        },
        "& .MuiFilledInput-root": {
          backgroundColor: colors["p"],
          border: `1px solid ${colors["j"]}`,
          borderRadius: "0.25rem",
          boxSizing: "border-box",
          fontSize: "0.75rem",
          fontWeight: "400",
          height: "2.5rem",
          lineHeight: "1rem",
          "&.Mui-focused": {
            borderColor: colors["e"]
          },
          "& .MuiFilledInput-input": {
            padding: "1.25rem 2rem 0.25rem 0.5rem"
          }
        }
      }
    });
    const KeywordReminders = ({
      keywords,
      onChange,
      "data-testid": dataTestId
    }) => {
      const classes = keywords_useStyles();
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.root
      }, /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], null, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        id: "keyword-reminder",
        className: classes.textField,
        inputProps: {
          "data-testid": dataTestId
        },
        InputProps: {
          disableUnderline: true
        },
        label: "When I search for...",
        onChange,
        placeholder: "Enter words or phrases, separated by a comma",
        value: keywords,
        variant: "filled"
      })));
    };
    KeywordReminders.propTypes = {
      keywords: prop_types_default.a.string.isRequired,
      onChange: prop_types_default.a.func.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var reminders_keywords = KeywordReminders;
    var Select = __webpack_require__(1362);
    var MenuItem = __webpack_require__(1331);
    var Check = __webpack_require__(740);
    var Check_default = /* @__PURE__ */ __webpack_require__.n(Check);
    var useUtils_cfb96ac9 = __webpack_require__(76);
    var DatePicker = __webpack_require__(1359);
    var index_esm = __webpack_require__(738);
    const datePicker_useStyles = Object(makeStyles["a"])({
      datePicker: {
        flexBasis: "49%"
      },
      input: {
        border: `1px solid ${colors["j"]}`,
        borderRadius: "0.25rem",
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "1rem",
        padding: "0.5rem 0.5rem 0.3rem 0.5rem",
        "&.Mui-focused": {
          borderColor: colors["e"]
        }
      }
    });
    const datePicker_theme = Object(createMuiTheme["a"])({
      overrides: {
        MuiPickersBasePicker: {
          container: {
            margin: "0.8rem"
          },
          pickerView: {
            minHeight: 0,
            minWidth: 0
          }
        },
        MuiPickersCalendarHeader: {
          switchHeader: {
            "& $transitionContainer p": {
              color: colors["a"],
              fontSize: "0.875rem",
              fontWeight: "bold"
            },
            "& $iconButton": {
              padding: 0
            },
            "& $iconButton svg": {
              color: colors["e"]
            },
            "& $iconButton.Mui-disabled svg": {
              color: colors["m"]
            }
          },
          daysHeader: {
            "& $dayLabel": {
              width: "1.75rem"
            }
          }
        },
        MuiPickersCalendar: {
          transitionContainer: {
            minHeight: "12.5rem"
          }
        },
        MuiPickersDay: {
          day: {
            color: colors["a"],
            height: "1.75rem",
            width: "1.75rem",
            margin: "0.125rem"
          },
          daySelected: {
            color: colors["p"],
            backgroundColor: colors["e"]
          },
          dayDisabled: {
            color: colors["m"]
          }
        }
      }
    });
    const datePicker_DatePicker = ({onChange, value}) => {
      const classes = datePicker_useStyles();
      return /* @__PURE__ */ react_default.a.createElement(useUtils_cfb96ac9["a"], {
        utils: index_esm["a"]
      }, /* @__PURE__ */ react_default.a.createElement(ThemeProvider["a"], {
        theme: datePicker_theme
      }, /* @__PURE__ */ react_default.a.createElement(DatePicker["a"], {
        autoOk: true,
        className: classes.datePicker,
        disablePast: true,
        disableToolbar: true,
        format: "MMM D, YYYY",
        InputProps: {
          classes: {root: classes.input},
          disableUnderline: true
        },
        onChange,
        size: "small",
        value,
        variant: "inline"
      })));
    };
    datePicker_DatePicker.propTypes = {
      onChange: prop_types_default.a.func.isRequired,
      value: prop_types_default.a.instanceOf(moment_default.a)
    };
    var datePicker = datePicker_DatePicker;
    var Autocomplete = __webpack_require__(1368);
    const getNext15MinuteInterval = () => {
      const start = moment_default()();
      const remainder = 15 - start.minute() % 15;
      return start.add(remainder, "minutes").startOf("minute");
    };
    const sanitizeConfiguration = {
      allowedTags: ["p", "strong", "em", "ins", "del", "ol", "ul", "li", "a"]
    };
    const isOverflowing = (el) => {
      const curOverflow = el.style.overflow;
      if (!curOverflow || curOverflow === "visible") {
        el.style.overflow = "hidden";
      }
      const result = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
      el.style.overflow = curOverflow;
      return result;
    };
    var timePicker_defProp = Object.defineProperty;
    var timePicker_hasOwnProp = Object.prototype.hasOwnProperty;
    var timePicker_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var timePicker_propIsEnum = Object.prototype.propertyIsEnumerable;
    var timePicker_defNormalProp = (obj, key, value) => key in obj ? timePicker_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var timePicker_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (timePicker_hasOwnProp.call(b, prop2))
          timePicker_defNormalProp(a, prop2, b[prop2]);
      if (timePicker_getOwnPropSymbols)
        for (var prop2 of timePicker_getOwnPropSymbols(b)) {
          if (timePicker_propIsEnum.call(b, prop2))
            timePicker_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const timePicker_useStyles = Object(makeStyles["a"])({
      autocomplete: {
        flexBasis: "49%",
        "& .MuiAutocomplete-endAdornment": {
          top: "calc(50% - 0.75rem)"
        }
      },
      input: {
        border: `1px solid ${colors["j"]}`,
        borderRadius: "0.25rem",
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "1rem",
        "&.MuiInput-root": {
          padding: "0.4rem 0.9rem 0.3rem 0.5rem"
        },
        "&.Mui-focused": {
          borderColor: colors["e"]
        }
      },
      listbox: {
        border: `1px solid ${colors["e"]}`,
        borderRadius: "0.25rem",
        padding: "0",
        "& li": {
          color: colors["a"],
          fontSize: "0.75rem",
          fontWeight: "400",
          lineHeight: "1rem",
          minHeight: "1rem",
          padding: "0.5rem"
        }
      }
    });
    const TimePicker = ({onChange, value}) => {
      const classes = timePicker_useStyles();
      const getOptions = () => {
        const options = [];
        let current;
        if (!value.format || value.isSame(moment_default()(), "day")) {
          current = getNext15MinuteInterval();
        } else {
          current = moment_default()(value).startOf("day");
        }
        while (current.isSame(value, "day")) {
          options.push(moment_default()(current));
          current.add(15, "minutes");
        }
        return options;
      };
      const handleChange = (targetValue) => {
        if (targetValue === null) {
          return;
        }
        const givenTime = moment_default()(targetValue, "h:mm a");
        if (!givenTime.isValid()) {
          onChange(getNext15MinuteInterval());
          return;
        }
        const newValue = moment_default()(value);
        newValue.hour(givenTime.hour());
        newValue.minute(givenTime.minute());
        const now = moment_default()().startOf("minute");
        if (newValue < now) {
          onChange(getNext15MinuteInterval());
          return;
        }
        onChange(newValue);
      };
      return /* @__PURE__ */ react_default.a.createElement(Autocomplete["a"], {
        classes: {
          root: classes.autocomplete,
          paper: classes.paper,
          listbox: classes.listbox
        },
        freeSolo: true,
        getOptionLabel: (option) => option.format ? option.format("h:mm A") : option,
        getOptionSelected: (option, val) => option.isSame(val, "minute"),
        options: getOptions(),
        renderInput: (params) => {
          return /* @__PURE__ */ react_default.a.createElement(TextField["a"], timePicker_assign(timePicker_assign({}, params), {
            InputProps: timePicker_assign(timePicker_assign({}, params.InputProps), {
              classes: {root: classes.input},
              disableUnderline: true
            }),
            onBlur: (e) => handleChange(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                handleChange(e.target.value);
              }
            }
          }));
        },
        selectOnFocus: true,
        value
      });
    };
    TimePicker.propTypes = {
      onChange: prop_types_default.a.func.isRequired,
      value: prop_types_default.a.instanceOf(moment_default.a)
    };
    var timePicker = TimePicker;
    const dateTime_useStyles = Object(makeStyles["a"])({
      root: {
        margin: "1.75rem 0 1rem 0.5rem"
      },
      formControl: {
        "& .MuiInputLabel-filled": {
          color: colors["m"],
          fontSize: "0.75rem",
          fontWeight: "bold",
          transform: "translate(0.5rem, 0.875rem) scale(1)",
          "&.Mui-focused": {
            color: colors["e"]
          },
          "&.MuiInputLabel-shrink": {
            transform: "translate(0.5rem, 0.4rem) scale(0.83)"
          },
          "&.MuiInputLabel-animated": {
            transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"
          }
        },
        "& .MuiFilledInput-root": {
          "& .MuiSelect-select": {
            backgroundColor: colors["p"],
            border: `1px solid ${colors["j"]}`,
            borderRadius: "0.25rem",
            boxSizing: "border-box",
            fontSize: "0.75rem",
            fontWeight: "400",
            height: "2.5rem",
            lineHeight: "1rem",
            padding: "1.25rem 2rem 0.25rem 0.5rem",
            "& .currentWithCheck-check": {
              display: "none"
            }
          },
          "& .MuiSelect-icon": {
            fontSize: "1.6rem"
          },
          "&.Mui-focused": {
            "& .MuiSelect-select": {
              borderColor: colors["e"]
            },
            "& .MuiSelect-icon": {
              color: colors["e"]
            }
          }
        }
      },
      selectMenuList: {
        border: `1px solid ${colors["e"]}`,
        borderRadius: "0.25rem",
        padding: "0",
        "& li": {
          color: colors["a"],
          fontSize: "0.75rem",
          fontWeight: "400",
          lineHeight: "1rem",
          minHeight: "1rem",
          padding: "0.5rem"
        }
      },
      currentWithCheck: {
        display: "flex",
        alignItems: "center",
        "& .currentWithCheck-check": {
          fontSize: "0.9rem",
          marginBottom: "0.1rem",
          marginRight: "0.5rem"
        }
      },
      specificSection: {
        justifyContent: "space-between",
        marginTop: "0.5rem"
      }
    });
    const DateTimeReminder = ({
      initialReminder,
      onChange,
      shouldShowEditIndicator,
      "data-testid": dataTestId
    }) => {
      const [reminder, setReminder] = Object(react["useState"])(initialReminder);
      const [isDirty, setIsDirty] = Object(react["useState"])(false);
      const [isSpecificSectionOpen, setIsSpecificSectionOpen] = Object(react["useState"])(false);
      Object(react["useEffect"])(() => {
        setReminder(initialReminder);
        setIsSpecificSectionOpen(false);
        setIsDirty(false);
      }, [initialReminder]);
      const handleMainSelectChange = (e) => {
        const val = e.target.value;
        let newReminderValue;
        if (val === "unset") {
          newReminderValue = null;
          setIsSpecificSectionOpen(false);
        } else if (val === "specific") {
          newReminderValue = getNext15MinuteInterval();
          setIsSpecificSectionOpen(true);
        } else {
          const [incrementValue, incrementUnit] = val.split(" ");
          newReminderValue = moment_default()().add(incrementValue, incrementUnit);
          setIsSpecificSectionOpen(false);
        }
        setReminder(newReminderValue);
        setIsDirty(true);
        onChange(newReminderValue);
      };
      const handleSpecificDateChange = (newValue) => {
        let val = newValue;
        if (val.isSame(moment_default()(), "day")) {
          val = getNext15MinuteInterval();
        }
        setReminder(val);
        onChange(val);
      };
      const handleSpecificTimeChange = (newValue) => {
        setReminder(newValue);
        onChange(newValue);
      };
      const getMainSelectValue = () => {
        if (reminder === null) {
          return "";
        }
        if (isSpecificSectionOpen) {
          return "specific";
        }
        return "current";
      };
      const formatReminder = (momentObj) => {
        let result;
        if (momentObj.isSame(moment_default()(), "day")) {
          result = momentObj.format("[At] h:mm A [today]");
        } else {
          result = momentObj.format("ddd MMM D, YYYY [at] h:mm A");
        }
        if (isDirty && shouldShowEditIndicator) {
          result += " (edited)";
        }
        return result;
      };
      const classes = dateTime_useStyles();
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.root
      }, /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], null, /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        className: classes.formControl,
        variant: "filled"
      }, /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        id: "date-time-select-label"
      }, "At a later date/time..."), /* @__PURE__ */ react_default.a.createElement(Select["a"], {
        id: "date-time-reminder",
        disableUnderline: true,
        labelId: "date-time-select-label",
        MenuProps: {classes: {list: classes.selectMenuList}},
        SelectDisplayProps: {"data-testid": dataTestId},
        onChange: handleMainSelectChange,
        value: getMainSelectValue()
      }, /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "unset"
      }, "- Select -"), getMainSelectValue() === "current" && /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "current"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.currentWithCheck
      }, /* @__PURE__ */ react_default.a.createElement(Check_default.a, {
        htmlColor: colors["e"],
        className: "currentWithCheck-check"
      }), /* @__PURE__ */ react_default.a.createElement("div", null, formatReminder(reminder)))), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "20 minutes"
      }, "In 20 minutes"), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "1 hour"
      }, "In 1 hour"), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "3 hours"
      }, "In 3 hours"), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "1 day"
      }, "Tomorrow at this time"), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "1 week",
        divider: true
      }, "Next week at this time"), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: "specific"
      }, "Specific date and time...")))), isSpecificSectionOpen && /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], {
        className: classes.specificSection,
        row: true
      }, /* @__PURE__ */ react_default.a.createElement(datePicker, {
        onChange: handleSpecificDateChange,
        value: reminder
      }), /* @__PURE__ */ react_default.a.createElement(timePicker, {
        onChange: handleSpecificTimeChange,
        value: reminder
      })));
    };
    DateTimeReminder.propTypes = {
      initialReminder: prop_types_default.a.instanceOf(moment_default.a),
      onChange: prop_types_default.a.func.isRequired,
      shouldShowEditIndicator: prop_types_default.a.bool,
      "data-testid": prop_types_default.a.string
    };
    DateTimeReminder.defaultProps = {
      shouldShowEditIndicator: false
    };
    var dateTime = DateTimeReminder;
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
    var form_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const Transition = react_default.a.forwardRef((props, ref) => /* @__PURE__ */ react_default.a.createElement(Slide["a"], form_assign({
      direction: "up",
      ref
    }, props)));
    const form_useStyles = Object(makeStyles["a"])({
      root: {
        minWidth: 100,
        borderRadius: "0.5rem",
        marginBottom: "1.25rem"
      },
      content: {
        paddingBottom: "0.5rem",
        "&:last-child": {
          paddingBottom: 0
        }
      },
      reminder: {
        padding: "0px",
        margin: "1rem"
      },
      reminderSwitchLabel: {
        fontSize: "0.9rem"
      },
      footer: {
        padding: "0px",
        "&:last-child": {
          paddingBottom: 0
        }
      },
      dialog: {
        minWidth: "95%",
        borderRadius: "0.5rem"
      }
    });
    const useTextFieldStyles = Object(makeStyles["a"])(() => ({
      input: {
        border: `1px solid ${colors["j"]}`,
        overflow: "auto",
        borderRadius: "0.25rem",
        marginBottom: "0.25rem",
        backgroundColor: colors["p"],
        fontWeight: "600",
        fontSize: "1rem",
        lineHeight: "1.25rem",
        "&:hover": {
          backgroundColor: colors["p"]
        },
        "&.Mui-focused": {
          color: colors["a"],
          backgroundColor: colors["p"],
          borderColor: colors["e"]
        }
      },
      inputLabel: {
        "&.Mui-focused": {
          color: colors["b"]
        }
      },
      helperText: {
        textAlign: "right !important",
        fontSize: "0.625rem !important",
        margin: "0px"
      }
    }));
    const ReminderSwitch = Object(withStyles["a"])((theme) => ({
      root: {
        width: 34,
        height: 18,
        padding: 0,
        margin: theme.spacing(1)
      },
      switchBase: {
        padding: 1,
        "&$checked": {
          transform: "translateX(16px)",
          color: theme.palette.common.white,
          "& + $track": {
            backgroundColor: colors["e"],
            opacity: 1,
            border: "none"
          }
        }
      },
      thumb: {
        width: 16,
        height: 16
      },
      track: {
        borderRadius: 18 / 2,
        border: `1px solid ${colors["d"]}`,
        backgroundColor: colors["d"],
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"])
      },
      checked: {}
    }))(Switch["a"]);
    const Form = ({"data-testid": dataTestId}) => {
      const {
        closeForm,
        fetchAllNotes,
        isDiscardChangesDialogOpen,
        isFormDirty,
        nextNoteIdToEdit,
        noteIdBeingEdited,
        notes,
        set
      } = Object(react["useContext"])(sidenote["a"]);
      let dialogTitle = "Discard this note?";
      let dialogMessage = "If you do, it will be gone forever.";
      if (noteIdBeingEdited) {
        dialogTitle = "Discard changes?";
        dialogMessage = "Your changes will not be saved.";
      }
      const getInitialFormData = () => {
        if (noteIdBeingEdited) {
          const n = notes.find((note) => note.id === noteIdBeingEdited);
          if (!n) {
            throw new Error(`Could not find note with id '${noteIdBeingEdited}'.`);
          }
          return {
            id: n.id,
            title: n.title,
            richText: n.richText,
            plainText: n.plainText,
            keywords: n.keywords.map((item) => {
              return item.item;
            }).join(", "),
            reminder: n.reminders.length > 0 ? moment_default()(n.reminders[0].timestamp).startOf("minute") : null
          };
        }
        return {
          title: "",
          plainText: "",
          richText: "",
          keywords: "",
          reminder: null
        };
      };
      const [formData, setFormData] = Object(react["useState"])(getInitialFormData);
      const {title, richText, keywords, reminder} = formData;
      const [initialEditorHtml, setInitialEditorHtml] = Object(react["useState"])(richText);
      const [areRemindersShown, setAreRemindersShown] = Object(react["useState"])(() => {
        return keywords.length > 0 || reminder !== null;
      });
      const [initialReminder, setInitialReminder] = Object(react["useState"])(reminder);
      Object(react["useEffect"])(() => {
        const initialFormData = getInitialFormData();
        setFormData(initialFormData);
        setInitialEditorHtml(initialFormData.richText);
        setAreRemindersShown(initialFormData.keywords.length > 0 || initialFormData.reminder !== null);
        setInitialReminder(initialFormData.reminder);
      }, [noteIdBeingEdited]);
      const handleCancelClick = () => {
        if (isFormDirty) {
          set("isDiscardChangesDialogOpen", true);
        } else {
          set("noteIdBeingEdited", null);
          closeForm();
        }
      };
      const closeDiscardChanges = () => {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Cancel Discard Sidenote Changes"
        });
        set((prevState) => form_assign(form_assign({}, prevState), {
          isDiscardChangesDialogOpen: false,
          nextNoteIdToEdit: null
        }));
      };
      const handleDiscardChangesClick = () => {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Discard Sidenote Changes"
        });
        if (nextNoteIdToEdit) {
          set((prevState) => form_assign(form_assign({}, prevState), {
            noteIdBeingEdited: nextNoteIdToEdit,
            nextNoteIdToEdit: null,
            isFormDirty: false,
            isDiscardChangesDialogOpen: false
          }));
        } else {
          set((prevState) => form_assign(form_assign({}, prevState), {
            noteIdBeingEdited: null,
            isFormDirty: false,
            isDiscardChangesDialogOpen: false
          }));
          closeForm();
        }
      };
      const handleTitleChange = (e) => {
        const newValue = e.target.value;
        setFormData((prevFormData) => form_assign(form_assign({}, prevFormData), {
          title: newValue
        }));
        set("isFormDirty", true);
      };
      const handleEditorChange = (newHtml, newPlainText) => {
        setFormData((prevFormData) => form_assign(form_assign({}, prevFormData), {
          richText: newHtml,
          plainText: newPlainText
        }));
        set("isFormDirty", true);
      };
      const handleReminderSwitchChange = () => {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Sidenote Reminder Toggle Clicked",
          label: areRemindersShown
        });
        setAreRemindersShown((prevValue) => !prevValue);
        set("isFormDirty", true);
      };
      const handleKeywordsChange = (e) => {
        const newValue = e.target.value;
        setFormData((prevFormData) => form_assign(form_assign({}, prevFormData), {
          keywords: newValue
        }));
        set("isFormDirty", true);
      };
      const handleReminderChange = (newReminder) => {
        setFormData((prevFormData) => form_assign(form_assign({}, prevFormData), {
          reminder: newReminder
        }));
        set("isFormDirty", true);
      };
      const getKeywordsForSaving = () => {
        const splitKeywords = keywords.split(",");
        const note = notes.find((n) => n.id === noteIdBeingEdited);
        const results = [];
        splitKeywords.forEach((word) => {
          const keywordObj = note == null ? void 0 : note.keywords.find((wordItem) => wordItem.item.trim() === word.trim());
          if (keywordObj) {
            results.push({
              id: keywordObj.id,
              item: keywordObj.item.trim()
            });
          } else if (word.trim() !== "") {
            results.push({item: word.trim()});
          }
        });
        return results;
      };
      const handleSave = () => form_async(void 0, null, function* () {
        const cleanHtml = sanitize_html_default()(richText, sanitizeConfiguration);
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Sidenote Saved",
          label: `titleLength-${title.length}|noteLength-${richText.length || "0"}|keywordLength-${keywords.length}|reminderTime-${reminder}`
        });
        const noteToSave = form_assign({}, formData);
        noteToSave.richText = cleanHtml;
        noteToSave.keywords = areRemindersShown ? getKeywordsForSaving() : [];
        delete noteToSave.reminder;
        if (areRemindersShown && reminder !== null) {
          noteToSave.reminders = [
            {
              timestamp: reminder.startOf("minute").toISOString(true)
            }
          ];
        } else {
          noteToSave.reminders = [];
        }
        try {
          if (noteIdBeingEdited) {
            yield Object(messaging["R"])(noteToSave);
            set("noteIdBeingEdited", null);
          } else {
            yield Object(messaging["M"])(noteToSave);
          }
          set("isFormDirty", false);
          fetchAllNotes();
          closeForm();
        } catch (error) {
          console.error(error);
        }
      });
      const classes = form_useStyles();
      const textFieldClasses = useTextFieldStyles();
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(Card["a"], {
        className: classes.root,
        variant: "outlined",
        "data-testid": dataTestId
      }, /* @__PURE__ */ react_default.a.createElement(colorStrip, {
        color: "#651FFF"
      }), /* @__PURE__ */ react_default.a.createElement(CardContent["a"], {
        className: classes.content
      }, /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], null, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        autoFocus: true,
        FormHelperTextProps: {
          classes: {root: textFieldClasses.helperText}
        },
        helperText: `${title.length}/200`,
        id: "title",
        InputLabelProps: {
          classes: {root: textFieldClasses.inputLabel}
        },
        inputProps: {
          maxLength: 200,
          "data-testid": `${dataTestId}-titleTextField`
        },
        InputProps: {
          classes: {root: textFieldClasses.input},
          disableUnderline: true
        },
        label: "Title your note",
        name: "title",
        onChange: handleTitleChange,
        required: true,
        value: title,
        variant: "filled"
      }), /* @__PURE__ */ react_default.a.createElement(editor, {
        id: "note",
        initialHtml: initialEditorHtml,
        onChange: handleEditorChange,
        "data-testid": `${dataTestId}-editor`
      }))), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(CardContent["a"], {
        style: {padding: "0px !important"},
        className: classes.reminder
      }, /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        control: /* @__PURE__ */ react_default.a.createElement(ReminderSwitch, {
          id: "reminder-switch",
          color: "primary",
          onChange: handleReminderSwitchChange,
          checked: areRemindersShown,
          inputProps: {"data-testid": `${dataTestId}-reminderSwitch`}
        }),
        classes: {label: classes.reminderSwitchLabel},
        label: "Remind me",
        labelPlacement: "end"
      }), /* @__PURE__ */ react_default.a.createElement(Collapse["a"], {
        in: areRemindersShown
      }, /* @__PURE__ */ react_default.a.createElement(reminders_keywords, {
        keywords,
        onChange: handleKeywordsChange,
        "data-testid": `${dataTestId}-keywordRemindersTextField`
      }), /* @__PURE__ */ react_default.a.createElement(dateTime, {
        initialReminder,
        onChange: handleReminderChange,
        shouldShowEditIndicator: noteIdBeingEdited !== null,
        "data-testid": `${dataTestId}-dateTimeReminderSelect`
      }))), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(CardContent["a"], {
        className: classes.footer
      }, /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        label: "Save",
        style: {
          padding: "0.5rem 1.5rem",
          marginTop: "1rem",
          marginRight: "1rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          marginBottom: "1rem",
          fontSize: "0.75rem"
        },
        onClick: handleSave,
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        disabled: !isFormDirty || title.trim().length === 0 || richText.length > 2e3,
        type: "submit",
        title: "save",
        "data-testid": `${dataTestId}-saveButton`
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        id: "cancel",
        style: {
          marginTop: "1rem",
          marginBottom: "1rem",
          marginRight: ".5rem",
          padding: ".5rem 1.5rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          fontSize: "0.75rem"
        },
        onClick: handleCancelClick,
        label: "Cancel",
        buttonSize: "small",
        buttonType: "secondary",
        align: "right",
        title: "cancel",
        "data-testid": `${dataTestId}-cancelButton`
      }))), /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        id: "discardChangesDialog",
        open: isDiscardChangesDialogOpen,
        TransitionComponent: Transition,
        classes: {paper: classes.dialog},
        keepMounted: true,
        onClose: closeDiscardChanges,
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description"
      }, /* @__PURE__ */ react_default.a.createElement(DialogTitle["a"], {
        id: "alert-dialog-slide-title"
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        style: {fontSize: "1.25rem"}
      }, dialogTitle)), /* @__PURE__ */ react_default.a.createElement(DialogContent["a"], null, /* @__PURE__ */ react_default.a.createElement(DialogContentText["a"], {
        id: "alert-dialog-slide-description",
        style: {fontSize: "1.0rem"}
      }, dialogMessage)), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(DialogActions["a"], null, /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        onClick: closeDiscardChanges,
        style: {
          marginTop: "1rem",
          marginBottom: "1rem",
          marginRight: "0.5rem",
          padding: "0.5rem 1.5rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          fontSize: "0.75rem"
        },
        label: "Cancel",
        buttonSize: "small",
        buttonType: "text",
        align: "right"
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        onClick: handleDiscardChangesClick,
        label: "Discard",
        style: {
          marginTop: "1rem",
          marginBottom: "1rem",
          marginRight: "1rem",
          borderWidth: "0.125rem",
          borderRadius: "0.3125rem",
          padding: "0.5rem 1.5rem",
          fontSize: "0.75rem"
        },
        buttonSize: "small",
        buttonType: "primary",
        align: "right",
        title: "discard-sidenote"
      }))));
    };
    Form.propTypes = {
      "data-testid": prop_types_default.a.string
    };
    var sidenote_form = Form;
    var Drawer = __webpack_require__(1350);
    const useStyle = Object(makeStyles["a"])({
      drawer: {
        background: "transparent",
        border: "none"
      }
    });
    const SlideUp = ({open, children}) => {
      const classes = useStyle();
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(Drawer["a"], {
        anchor: "bottom",
        open,
        variant: "persistent",
        BackdropProps: {style: {position: "absolute"}},
        PaperProps: {style: {position: "absolute", paddingTop: "0.5rem"}},
        classes: {paper: classes.drawer},
        ModalProps: {
          container: document.getElementById("sidebar"),
          style: {position: "absolute"}
        }
      }, children));
    };
    SlideUp.propTypes = {
      open: prop_types_default.a.bool.isRequired,
      children: prop_types_default.a.any.isRequired
    };
    var slideUp = SlideUp;
    const newNoteButton = {
      backgroundColor: colors["p"],
      border: `1px solid ${colors["e"]}`,
      borderRadius: "0.5rem",
      color: colors["e"],
      display: "inline",
      float: "right",
      padding: "4px 6px"
    };
    const closeButton = {
      backgroundColor: colors["p"],
      borderRadius: "0.5rem",
      fontSize: "30px",
      color: colors["e"],
      display: "inline",
      padding: "0px 15px 0px 0px",
      width: "25px"
    };
    const styles_container = {
      padding: "8px",
      background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(238, 228, 255, 0.3) 100%), #FFFFFF",
      height: "100vh",
      borderRadius: "0.5rem 0.5rem 0px 0px",
      verticalAlign: "middle",
      overflowY: "auto"
    };
    var deleteSidenoteDialog_defProp = Object.defineProperty;
    var deleteSidenoteDialog_hasOwnProp = Object.prototype.hasOwnProperty;
    var deleteSidenoteDialog_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var deleteSidenoteDialog_propIsEnum = Object.prototype.propertyIsEnumerable;
    var deleteSidenoteDialog_defNormalProp = (obj, key, value) => key in obj ? deleteSidenoteDialog_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var deleteSidenoteDialog_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (deleteSidenoteDialog_hasOwnProp.call(b, prop2))
          deleteSidenoteDialog_defNormalProp(a, prop2, b[prop2]);
      if (deleteSidenoteDialog_getOwnPropSymbols)
        for (var prop2 of deleteSidenoteDialog_getOwnPropSymbols(b)) {
          if (deleteSidenoteDialog_propIsEnum.call(b, prop2))
            deleteSidenoteDialog_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var deleteSidenoteDialog_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const deleteSidenoteDialog_useStyles = Object(makeStyles["a"])({
      dialog: {
        minWidth: "95%",
        borderRadius: "0.5rem"
      }
    });
    const deleteSidenoteDialog_Transition = Object(react["forwardRef"])(function Transition2(props, ref) {
      return /* @__PURE__ */ react_default.a.createElement(Slide["a"], deleteSidenoteDialog_assign({
        direction: "up",
        ref
      }, props));
    });
    const DeleteSidenoteDialog = () => {
      const classes = deleteSidenoteDialog_useStyles();
      const {notes, set, isDeleteNoteDialogOpen, noteIdToDelete} = Object(react["useContext"])(sidenote["a"]);
      const handleCancel = () => {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Cancelled Delete Sidenote"
        });
        set("noteIdToDelete", null);
        set("isDeleteNoteDialogOpen", false);
      };
      const handleDeleteNote = () => deleteSidenoteDialog_async(void 0, null, function* () {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Deleted Sidenote"
        });
        try {
          yield Object(messaging["N"])(noteIdToDelete);
          set("notes", notes.filter((n) => n.id !== noteIdToDelete));
          set("noteIdToDelete", null);
          set("isDeleteNoteDialogOpen", false);
        } catch (error) {
          console.error(error);
        }
      });
      return /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: isDeleteNoteDialogOpen,
        classes: {paper: classes.dialog},
        TransitionComponent: deleteSidenoteDialog_Transition,
        keepMounted: true,
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description"
      }, /* @__PURE__ */ react_default.a.createElement(DialogTitle["a"], null, /* @__PURE__ */ react_default.a.createElement("span", {
        style: {fontSize: "1.25rem"}
      }, "Delete this note?")), /* @__PURE__ */ react_default.a.createElement(DialogContent["a"], null, /* @__PURE__ */ react_default.a.createElement(DialogContentText["a"], {
        id: "alert-dialog-slide-description",
        style: {fontSize: "1.0rem"}
      }, "If you do, it will be gone forever."), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(DialogActions["a"], null, /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        style: {marginRight: "10px"},
        onClick: handleCancel,
        label: "Cancel",
        buttonSize: "small",
        buttonType: "secondary",
        align: "right"
      }), /* @__PURE__ */ react_default.a.createElement(cardBodyButton, {
        onClick: handleDeleteNote,
        label: "Delete",
        buttonSize: "small",
        buttonType: "primary",
        align: "right"
      }))));
    };
    var deleteSidenoteDialog = DeleteSidenoteDialog;
    var html_to_react = __webpack_require__(559);
    var DeleteOutlined = __webpack_require__(1351);
    var EditOutlined = __webpack_require__(1352);
    const note_header_styles_useStyles = Object(makeStyles["a"])({
      header: {
        display: "flex",
        justifyContent: "space-between"
      },
      headerTitle: {
        fontWeight: "bold",
        lineHeight: "1.25rem",
        margin: "0.675rem 0 0.675rem 1rem",
        overflow: "hidden",
        "&.collapsed": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "2"
        }
      },
      headerButtons: {
        display: "inline-flex",
        visibility: "hidden",
        "&.visible": {
          visibility: "visible"
        }
      },
      headerButton: {
        height: "2.5rem"
      },
      headerIcon: {
        color: colors["e"]
      }
    });
    const note_header_Header = ({expanded, hovered, note, "data-testid": dataTestId}) => {
      const {title} = note;
      const {openEditForm, set} = Object(react["useContext"])(sidenote["a"]);
      const [isTitleTooltipShown, setIsTitleTooltipShown] = Object(react["useState"])(false);
      const titleElement = Object(react["useRef"])(null);
      const classes = note_header_styles_useStyles();
      Object(react["useLayoutEffect"])(() => {
        if (expanded) {
          setIsTitleTooltipShown(false);
        }
        setIsTitleTooltipShown(isOverflowing(titleElement.current));
      }, [expanded, hovered]);
      const handleDeleteClick = () => {
        Object(tracking["h"])({
          category: tracking["e"],
          action: "Sidenote Delete Dialog Opened"
        });
        set("isDeleteNoteDialogOpen", true);
        set("noteIdToDelete", note.id);
      };
      const handleEditClick = () => {
        openEditForm(note);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classes.header,
        "data-testid": dataTestId
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(classes.headerTitle, {
          collapsed: !expanded
        }),
        ref: titleElement
      }, /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
        hide: !isTitleTooltipShown,
        text: title,
        style: {
          cursor: isTitleTooltipShown ? "help" : "auto"
        }
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        "data-testid": `${dataTestId}-title`
      }, title))), /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(classes.headerButtons, {
          visible: hovered || expanded
        })
      }, /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        className: classes.headerButton,
        onClick: handleDeleteClick
      }, /* @__PURE__ */ react_default.a.createElement(DeleteOutlined["a"], {
        className: classes.headerIcon
      })), /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        className: classes.headerButton,
        onClick: handleEditClick,
        "data-testid": `${dataTestId}-editButton`
      }, /* @__PURE__ */ react_default.a.createElement(EditOutlined["a"], {
        className: classes.headerIcon
      }))));
    };
    note_header_Header.propTypes = {
      expanded: prop_types_default.a.bool.isRequired,
      hovered: prop_types_default.a.bool.isRequired,
      note: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var note_header = note_header_Header;
    var timeAgo = __webpack_require__(320);
    const footer_styles_useStyles = Object(makeStyles["a"])({
      collapsedFooter: {
        fontSize: "0.75rem",
        marginBottom: "0.5rem",
        marginTop: "0.5rem"
      },
      collapsedFooterTimeAgoCreated: {
        "&::before": {
          content: "'Created '"
        }
      },
      collapsedFooterTimeAgoUpdated: {
        "&::before": {
          content: "'Updated '"
        }
      },
      collapsedFooterReminderText: {
        marginLeft: "1rem"
      },
      expandedFooterEmpty: {
        fontSize: "0.75rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        marginTop: "0.5rem"
      },
      expandedFooter: {
        paddingBottom: "0.75rem",
        "& .reminderMeHeader": {
          fontSize: "0.875rem",
          fontWeight: "bold",
          lineHeight: "1.125rem",
          marginTop: "1rem"
        },
        "& .reminderTypeHeader": {
          fontSize: "0.75rem",
          fontWeight: "bold",
          lineHeight: "1rem",
          marginTop: "0.75rem"
        },
        "& p": {
          fontSize: "0.75rem",
          fontWeight: 400,
          lineHeight: "1rem",
          marginTop: "0.25rem"
        }
      }
    });
    const CollapsedFooter = ({classes, note, "data-testid": dataTestId}) => {
      const {keywords, reminders, createdAt, updatedAt} = note;
      let timeAgoClass = classes.collapsedFooterTimeAgoCreated;
      if (moment_default()(createdAt).isBefore("1900-01-01")) {
        timeAgoClass = classes.collapsedFooterTimeAgoUpdated;
      }
      let reminderText;
      if (keywords.length === 0 && reminders.length === 0) {
        reminderText = "No reminders set";
      } else if (keywords.length > 0 && reminders.length === 0 || keywords.length === 0 && reminders.length > 0) {
        reminderText = "1 reminder set";
      } else {
        reminderText = "2 reminders set";
      }
      return /* @__PURE__ */ react_default.a.createElement(Container["a"], {
        className: classes.collapsedFooter,
        "data-testid": dataTestId
      }, /* @__PURE__ */ react_default.a.createElement("strong", null, /* @__PURE__ */ react_default.a.createElement(timeAgo["a"], {
        dateTimeStr: updatedAt,
        className: timeAgoClass
      }), /* @__PURE__ */ react_default.a.createElement("span", {
        className: classes.collapsedFooterReminderText
      }, reminderText)));
    };
    CollapsedFooter.propTypes = {
      classes: prop_types_default.a.object.isRequired,
      note: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    const ExpandedFooter = ({classes, note, "data-testid": dataTestId}) => {
      const {keywords, reminders} = note;
      const formattedKeywords = keywords.map((word) => word.item).join(", ");
      let formattedReminder = "";
      if (reminders.length > 0) {
        const reminder = moment_default()(reminders[0].timestamp);
        if (reminder.isSame(moment_default()(), "day")) {
          formattedReminder = reminder.format("[At] h:mm A [today]");
        } else {
          formattedReminder = reminder.format("ddd MMM D, YYYY [at] h:mm A");
        }
      }
      const empty = formattedKeywords === "" && formattedReminder === "";
      return /* @__PURE__ */ react_default.a.createElement(Container["a"], {
        className: empty ? classes.expandedFooterEmpty : classes.expandedFooter,
        "data-testid": dataTestId
      }, empty ? /* @__PURE__ */ react_default.a.createElement("p", null, "No reminders set") : /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("h4", {
        className: "reminderMeHeader"
      }, "Remind me"), formattedKeywords !== "" && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("p", {
        className: "reminderTypeHeader"
      }, "When I search for..."), /* @__PURE__ */ react_default.a.createElement("p", null, formattedKeywords)), formattedReminder !== "" && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("p", {
        className: "reminderTypeHeader"
      }, "At a later date/time..."), /* @__PURE__ */ react_default.a.createElement("p", null, formattedReminder))));
    };
    ExpandedFooter.propTypes = {
      classes: prop_types_default.a.object.isRequired,
      note: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    const Footer = ({expanded, note, "data-testid": dataTestId}) => {
      const classes = footer_styles_useStyles();
      return expanded ? /* @__PURE__ */ react_default.a.createElement(ExpandedFooter, {
        classes,
        note,
        "data-testid": `${dataTestId}-expanded`
      }) : /* @__PURE__ */ react_default.a.createElement(CollapsedFooter, {
        classes,
        note,
        "data-testid": `${dataTestId}-collapsed`
      });
    };
    Footer.propTypes = {
      expanded: prop_types_default.a.bool.isRequired,
      note: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var footer = Footer;
    const note_styles_useStyles = Object(makeStyles["a"])({
      root: {
        "&:not(:first-child)": {
          marginTop: "1.25rem"
        }
      },
      noteCollapse: {
        cursor: "pointer",
        position: "relative",
        "&::after": {
          bottom: 0,
          content: "linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1))",
          height: "1.5rem",
          left: 0,
          position: "absolute",
          width: "100%",
          zIndex: 1
        }
      },
      noteContent: {
        fontSize: "0.75rem",
        lineHeight: "1rem",
        "& p": {
          margin: "1rem 0"
        },
        "& ul": {
          listStylePosition: "inside",
          listStyleType: "initial",
          margin: "1rem 0",
          "& ul": {
            margin: "0 0 0 1rem"
          }
        },
        "& ol": {
          listStylePosition: "inside",
          listStyleType: "decimal",
          margin: "1rem 0",
          "& ol": {
            margin: "0 0 0 1rem"
          }
        }
      }
    });
    const styles_linkStyles = {
      container: {
        paddingRight: "0",
        top: "unset",
        verticalAlign: "unset"
      }
    };
    const Note = ({note, "data-testid": dataTestId}) => {
      const richText = sanitize_html_default()(note.richText, sanitizeConfiguration);
      const {plainText} = note;
      const [hovered, setHovered] = Object(react["useState"])(false);
      const [expanded, setExpanded] = Object(react["useState"])(false);
      const classes = note_styles_useStyles();
      const richTextReact = Object(react["useMemo"])(() => {
        const isValidNode = () => true;
        const processNodeDefinitions = new html_to_react["ProcessNodeDefinitions"](react_default.a);
        const processingInstructions = [
          {
            shouldProcessNode: (node) => {
              return node.name && node.name === "a" && node.attribs && node.attribs.href;
            },
            processNode: (node, children) => {
              const {
                attribs: {href: url}
              } = node;
              return /* @__PURE__ */ react_default.a.createElement(views_link["a"], {
                content: {data: {url}},
                style: styles_linkStyles
              }, children);
            }
          },
          {
            shouldProcessNode: () => {
              return true;
            },
            processNode: processNodeDefinitions.processDefaultNode
          }
        ];
        const htmlToReactParser = new html_to_react["Parser"]();
        return htmlToReactParser.parseWithInstructions(richText, isValidNode, processingInstructions);
      }, [richText]);
      const handleNoteClick = () => {
        setExpanded((prevState) => !prevState);
      };
      return /* @__PURE__ */ react_default.a.createElement(Card["a"], {
        className: classes.root,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        "data-testid": dataTestId
      }, /* @__PURE__ */ react_default.a.createElement(colorStrip, {
        color: hovered || expanded ? colors["e"] : colors["m"]
      }), /* @__PURE__ */ react_default.a.createElement(note_header, {
        expanded,
        hovered,
        note,
        "data-testid": `${dataTestId}-header`
      }), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(Collapse["a"], {
        className: classes.noteCollapse,
        collapsedHeight: 80,
        in: expanded,
        onClick: handleNoteClick,
        timeout: 0,
        "data-testid": `${dataTestId}-collapse`
      }, /* @__PURE__ */ react_default.a.createElement(Container["a"], {
        className: classes.noteContent
      }, plainText.trim() === "" ? /* @__PURE__ */ react_default.a.createElement("p", null, /* @__PURE__ */ react_default.a.createElement("em", null, "This note has no content.")) : /* @__PURE__ */ react_default.a.createElement("div", null, richTextReact))), /* @__PURE__ */ react_default.a.createElement(Divider["a"], null), /* @__PURE__ */ react_default.a.createElement(footer, {
        expanded,
        note,
        "data-testid": `${dataTestId}-footer`
      }));
    };
    Note.propTypes = {
      note: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var notelist_note = Note;
    const NoteList = ({"data-testid": dataTestId}) => {
      const {noteIdBeingEdited, notes} = Object(react["useContext"])(sidenote["a"]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        "data-testid": dataTestId
      }, notes.filter((n) => n.id !== noteIdBeingEdited).map((note, idx) => /* @__PURE__ */ react_default.a.createElement(notelist_note, {
        key: idx,
        note,
        "data-testid": `${dataTestId}-note${idx}`
      })), /* @__PURE__ */ react_default.a.createElement(deleteSidenoteDialog, null));
    };
    NoteList.propTypes = {
      "data-testid": prop_types_default.a.string
    };
    var notelist = NoteList;
    const Sidenote = ({"data-testid": dataTestId}) => {
      const {isFormOpen, isSidenoteOpen} = Object(react["useContext"])(sidenote["a"]);
      return /* @__PURE__ */ react_default.a.createElement(slideUp, {
        open: isSidenoteOpen
      }, /* @__PURE__ */ react_default.a.createElement(Container["a"], {
        style: styles_container,
        "data-testid": dataTestId
      }, /* @__PURE__ */ react_default.a.createElement(sidenote_header, {
        "data-testid": `${dataTestId}-header`
      }), isFormOpen && /* @__PURE__ */ react_default.a.createElement(sidenote_form, {
        "data-testid": `${dataTestId}-form`
      }), /* @__PURE__ */ react_default.a.createElement(notelist, {
        "data-testid": `${dataTestId}-notelist`
      })));
    };
    Sidenote.propTypes = {
      "data-testid": prop_types_default.a.string
    };
    var sidebar_sidenote = Sidenote;
    var Menu = __webpack_require__(749);
    var titleBar_styles = __webpack_require__(47);
    const Controls = ({close, toggle, collapsed, source}) => {
      const [anchorEl, setAnchorEl] = Object(react["useState"])(null);
      const [dialogOpen, setDialogOpen] = Object(react["useState"])(false);
      const [pauseError, setPauseError] = Object(react["useState"])("");
      const FEEDBACK_URL = `https://docs.google.com/forms/d/e/1FAIpQLScKmMcXCaaR9t_YqeDtrkfvThyO_PpzyZnW6VrgeYi-s4z6EQ/viewform?usp=pp_url&entry.1510520608=${(source == null ? void 0 : source.name) || ""}`;
      const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const pauseLoop = () => {
        Object(tracking["h"])({
          category: tracking["f"],
          action: "Pause Loop",
          label: (source == null ? void 0 : source.name) || "UNKNOWN"
        });
        Object(messaging["t"])(source.appId, true).catch((error) => {
          console.error(error);
          setPauseError("Unable to pause loop");
        });
      };
      const toggleConfirmPauseDialog = () => {
        setPauseError("");
        setDialogOpen(!dialogOpen);
      };
      const coreLoop = source.appId === "Sidenote";
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["controlsContainer"]
      }, /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: titleBar_styles["iconBtn"],
        onClick: handleMenuClick,
        tooltip: "Menu",
        tooltipPosition: "bottom",
        color: "transparent"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "more_horiz",
        className: titleBar_styles["icon"]
      }))), /* @__PURE__ */ react_default.a.createElement(Menu["a"], {
        anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose
      }, !coreLoop && source && /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        onClick: toggleConfirmPauseDialog
      }, "Pause this loop"), /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        onClick: () => Object(utils["e"])(FEEDBACK_URL)
      }, "Give feedback")), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: titleBar_styles["iconBtn"],
        onClick: toggle,
        tooltip: collapsed ? "Maximize" : "Minimize",
        tooltipPosition: "bottom",
        color: "transparent"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: collapsed ? "web_asset" : "remove",
        className: titleBar_styles["icon"]
      }))), /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: titleBar_styles["iconBtn"],
        onClick: close,
        tooltip: "Dismiss",
        tooltipPosition: "bottom",
        color: "transparent"
      }, /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: "close",
        className: titleBar_styles["icon"]
      })))), /* @__PURE__ */ react_default.a.createElement(Dialog["a"], {
        open: dialogOpen,
        onClose: () => {
        },
        onBackdropClick: toggleConfirmPauseDialog,
        "aria-labelledby": "confirm-pause-loop",
        classes: titleBar_styles["pauseDialog"],
        fullWidth: true
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["pauseDialog"]
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["dialogColor"]
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["dialogHeader"]
      }, "Pause ", source.name || "this loop", "?"), /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["dialogDivider"]
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["dialogMessage"]
      }, "If you pause this loop it will not generate any whispers until it is unpaused. You can see your paused loops in the Loop Library.", /* @__PURE__ */ react_default.a.createElement("br", null), /* @__PURE__ */ react_default.a.createElement("br", null), "Loops will automatically unpause at the end of each day."), pauseError && /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["errorMsg"]
      }, pauseError), /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["dialogButtons"]
      }, /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: titleBar_styles["pauseBtn"],
        onClick: pauseLoop,
        color: "white"
      }, "Pause this loop"), /* @__PURE__ */ react_default.a.createElement(components_button["a"], {
        className: titleBar_styles["cancelBtn"],
        onClick: toggleConfirmPauseDialog,
        color: "black"
      }, "Cancel")))));
    };
    Controls.propTypes = {
      close: prop_types_default.a.func.isRequired,
      toggle: prop_types_default.a.func.isRequired,
      collapsed: prop_types_default.a.bool.isRequired,
      source: prop_types_default.a.object.isRequired
    };
    var controls = Controls;
    var titleBar_defProp = Object.defineProperty;
    var titleBar_hasOwnProp = Object.prototype.hasOwnProperty;
    var titleBar_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var titleBar_propIsEnum = Object.prototype.propertyIsEnumerable;
    var titleBar_defNormalProp = (obj, key, value) => key in obj ? titleBar_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var titleBar_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (titleBar_hasOwnProp.call(b, prop2))
          titleBar_defNormalProp(a, prop2, b[prop2]);
      if (titleBar_getOwnPropSymbols)
        for (var prop2 of titleBar_getOwnPropSymbols(b)) {
          if (titleBar_propIsEnum.call(b, prop2))
            titleBar_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const TitleBar = ({
      title,
      logo,
      close,
      toggle,
      collapsed,
      source,
      "data-testid": dataTestId
    }) => {
      const titleBarRef = Object(react["useRef"])(null);
      const observer = Object(react["useRef"])(null);
      Object(react["useEffect"])(() => {
        if (titleBarRef.current) {
          observer.current = new window.IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
              Object(tracking["h"])({
                category: tracking["f"],
                action: "Whisper displayed",
                label: (source == null ? void 0 : source.name) || "UNKNOWN"
              });
              observer.current.disconnect();
              observer.current = null;
            }
          });
          observer.current.observe(titleBarRef.current);
        }
        return () => {
          if (observer.current)
            observer.current.disconnect();
        };
      }, [titleBarRef]);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["titleRow"],
        ref: titleBarRef,
        "data-testid": dataTestId
      }, logo && /* @__PURE__ */ react_default.a.createElement("img", {
        className: titleBar_styles["logoImg"],
        src: !logo.includes("data:image") ? `http:${logo}` : logo,
        alt: ""
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: titleBar_styles["titleText"]
      }, /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
        text: title,
        disabled: false
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        "data-testid": `${dataTestId}-title`
      }, title))), /* @__PURE__ */ react_default.a.createElement(controls, titleBar_assign({}, {close, toggle, collapsed, source})));
    };
    TitleBar.propTypes = {
      title: prop_types_default.a.string.isRequired,
      logo: prop_types_default.a.string.isRequired,
      close: prop_types_default.a.func.isRequired,
      toggle: prop_types_default.a.func.isRequired,
      collapsed: prop_types_default.a.bool.isRequired,
      source: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var titleBar = TitleBar;
    var isEmpty = __webpack_require__(133);
    var footer_styles = __webpack_require__(392);
    const openChannelDefaultImageUrl = "http://us1-cdn.openchannel.io/5f7f5aced3bdee259f4b1dff/public/5fbc2d08239e941df61458cd.png";
    const handleLogoLocation = (src) => {
      if (Object(isEmpty["a"])(src))
        return openChannelDefaultImageUrl;
      if (src.startsWith("//"))
        return `http:${src}`;
      return src;
    };
    const footer_Footer = ({text, logo, createdAt}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: footer_styles["footerRow"]
      }, /* @__PURE__ */ react_default.a.createElement("img", {
        className: footer_styles["logoImg"],
        src: handleLogoLocation(logo),
        alt: text
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        className: footer_styles["footerText"]
      }, /* @__PURE__ */ react_default.a.createElement("span", null, text)), /* @__PURE__ */ react_default.a.createElement(timeAgo["a"], {
        dateTimeStr: createdAt,
        className: footer_styles["time"]
      })));
    };
    footer_Footer.propTypes = {
      text: prop_types_default.a.string.isRequired,
      logo: prop_types_default.a.string,
      createdAt: prop_types_default.a.any.isRequired
    };
    footer_Footer.defaultProps = {
      logo: openChannelDefaultImageUrl
    };
    var components_footer = footer_Footer;
    var card_style = __webpack_require__(476);
    var card_defProp = Object.defineProperty;
    var card_hasOwnProp = Object.prototype.hasOwnProperty;
    var card_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var card_propIsEnum = Object.prototype.propertyIsEnumerable;
    var card_defNormalProp = (obj, key, value) => key in obj ? card_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var card_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (card_hasOwnProp.call(b, prop2))
          card_defNormalProp(a, prop2, b[prop2]);
      if (card_getOwnPropSymbols)
        for (var prop2 of card_getOwnPropSymbols(b)) {
          if (card_propIsEnum.call(b, prop2))
            card_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const card_Card = ({
      children,
      className,
      icon,
      id,
      label,
      createdAt,
      closeOnClick,
      onClick,
      styleContainer,
      source,
      "data-testid": dataTestId
    }) => {
      var _a;
      const [isContentVisible, setIsContentVisible] = Object(react["useState"])(true);
      const minimizeCard = () => {
        if (isContentVisible) {
          setTimeout(() => {
            setIsContentVisible(false);
            Object(tracking["h"])({
              category: tracking["f"],
              action: "Whisper minimized"
            });
          }, 10);
        } else {
          setIsContentVisible(true);
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", card_assign(card_assign({}, card_assign({}, onClick ? {
        onClick,
        role: "button",
        tabIndex: "-1"
      } : {})), {
        id,
        style: styleContainer,
        className: `${className} ${card_style["container"]}`,
        "data-testid": dataTestId
      }), (icon || label || closeOnClick) && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(colorStrip, {
        color: source.colorStrip
      }), /* @__PURE__ */ react_default.a.createElement(titleBar, {
        title: label,
        logo: source.loopWhisperLogo,
        close: closeOnClick,
        toggle: minimizeCard,
        collapsed: !isContentVisible,
        source,
        "data-testid": `${dataTestId}-titleBar`
      })), /* @__PURE__ */ react_default.a.createElement(AnimateHeight_default.a, {
        className: card_style["body"],
        duration: parseInt(card_style["DURATION"], 10),
        height: isContentVisible ? "auto" : 0
      }, children), /* @__PURE__ */ react_default.a.createElement(components_footer, {
        text: source.name,
        logo: (_a = source.organization) == null ? void 0 : _a.organizationWhisperLogo,
        createdAt
      }));
    };
    card_Card.propTypes = {
      children: prop_types_default.a.any.isRequired,
      className: prop_types_default.a.string,
      closeOnClick: prop_types_default.a.func,
      icon: prop_types_default.a.string,
      id: prop_types_default.a.string,
      label: prop_types_default.a.string,
      onClick: prop_types_default.a.func,
      style: prop_types_default.a.object,
      styleContainer: prop_types_default.a.object,
      title: prop_types_default.a.string,
      source: prop_types_default.a.object.isRequired,
      createdAt: prop_types_default.a.any.isRequired,
      "data-testid": prop_types_default.a.string
    };
    card_Card.defaultProps = {
      className: "",
      closeOnClick: null,
      icon: null,
      id: null,
      label: null,
      onClick: null,
      style: {},
      styleContainer: {}
    };
    var card = card_Card;
    var components_markdown = __webpack_require__(49);
    const CONTENT_TYPE_BOX = "box";
    const CONTENT_TYPE_BUTTON = "button";
    const CONTENT_TYPE_CHECKBOX = "checkbox";
    const CONTENT_TYPE_COLLAPSE_BOX = "collapseBox";
    const CONTENT_TYPE_DIVIDER = "divider";
    const CONTENT_TYPE_EMAIL = "email";
    const CONTENT_TYPE_LINK = "link";
    const CONTENT_TYPE_LIST_PAIR = "listPair";
    const CONTENT_TYPE_LOOP_LIST = "loopList";
    const CONTENT_TYPE_MARKDOWN = "markdown";
    const CONTENT_TYPE_MESSAGE = "message";
    const CONTENT_TYPE_NUMBER = "number";
    const CONTENT_TYPE_PASSWORD = "password";
    const CONTENT_TYPE_RADIO = "radioGroup";
    const CONTENT_TYPE_SELECT = "select";
    const CONTENT_TYPE_TELEPHONE = "tel";
    const CONTENT_TYPE_TEXT = "text";
    const CONTENT_TYPE_DATE_TIME = "dateTime";
    var constants_content = {
      CONTENT_TYPE_BOX,
      CONTENT_TYPE_BUTTON,
      CONTENT_TYPE_CHECKBOX,
      CONTENT_TYPE_DIVIDER,
      CONTENT_TYPE_EMAIL,
      CONTENT_TYPE_LINK,
      CONTENT_TYPE_LIST_PAIR,
      CONTENT_TYPE_MARKDOWN,
      CONTENT_TYPE_MESSAGE,
      CONTENT_TYPE_NUMBER,
      CONTENT_TYPE_PASSWORD,
      CONTENT_TYPE_RADIO,
      CONTENT_TYPE_SELECT,
      CONTENT_TYPE_TELEPHONE,
      CONTENT_TYPE_TEXT,
      CONTENT_TYPE_DATE_TIME
    };
    var views_style = __webpack_require__(57);
    const moreLessBtnIconStyle = {
      height: "auto",
      lineHeight: ".7"
    };
    const ListExpandButton = ({expanded, label, onClick}) => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: views_style["moreLessContainer"]
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: views_style["moreLessBtn"],
        onClick,
        role: "button",
        tabIndex: 0
      }, label && /* @__PURE__ */ react_default.a.createElement("span", null, label), !label && /* @__PURE__ */ react_default.a.createElement("span", null, expanded ? "Less" : "More"), /* @__PURE__ */ react_default.a.createElement(components_icon["a"], {
        icon: expanded ? "expand_less" : "expand_more",
        style: moreLessBtnIconStyle
      })));
    };
    ListExpandButton.propTypes = {
      expanded: prop_types_default.a.bool.isRequired,
      label: prop_types_default.a.string,
      onClick: prop_types_default.a.func.isRequired
    };
    ListExpandButton.defaultProps = {
      label: null
    };
    var expandButton = ListExpandButton;
    const generateComponentKey = ({whisper, component, index}) => {
      return component.key ? component.key : `${whisper.whisperId}-${index}`;
    };
    var isNil = __webpack_require__(478);
    var equals = __webpack_require__(350);
    var server_browser = __webpack_require__(741);
    var server_browser_default = /* @__PURE__ */ __webpack_require__.n(server_browser);
    var react_markdown = __webpack_require__(102);
    var react_markdown_default = /* @__PURE__ */ __webpack_require__.n(react_markdown);
    var remark_gfm = __webpack_require__(103);
    var remark_gfm_default = /* @__PURE__ */ __webpack_require__.n(remark_gfm);
    var universal_views_style = __webpack_require__(77);
    const CopyableData = ({
      copyable,
      copyableType,
      content,
      toCopy,
      tooltip,
      tooltipPosition
    }) => {
      const isCopyable = () => {
        return copyable === copyableType;
      };
      const buildTooltipText = (tooltipText) => {
        if (tooltipText) {
          return tooltipText;
        }
        if (isCopyable()) {
          return "Click to copy";
        }
        return null;
      };
      const defaultToolTipText = buildTooltipText(tooltip);
      const [toolTipText, setToolTipText] = Object(react["useState"])(defaultToolTipText);
      const copyTextAndUpdateTooltip = (copyContent) => {
        Object(messaging["a"])(copyContent).catch(console.error);
        setToolTipText("Copied");
        setTimeout(() => {
          setToolTipText(defaultToolTipText);
        }, 1e3);
      };
      const onMessageCopyClick = (copyContent) => {
        if (isCopyable()) {
          Object(tracking["h"])({
            category: tracking["f"],
            action: `${copyContent} copied`,
            label: copyContent || "UNKNOWN"
          });
          copyTextAndUpdateTooltip(copyContent);
        }
      };
      const copyableContent = /* @__PURE__ */ react_default.a.createElement("div", {
        style: isCopyable() ? {cursor: "pointer"} : {cursor: "text"}
      }, content);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        "data-copyable": isCopyable()
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        onClick: () => onMessageCopyClick(toCopy),
        className: isCopyable() ? universal_views_style["copyableStyle"] : {},
        role: "button",
        tabIndex: 0
      }, defaultToolTipText && /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
        text: toolTipText,
        position: tooltipPosition,
        duration: 1
      }, copyableContent) || /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, copyableContent)));
    };
    CopyableData.propTypes = {
      copyable: prop_types_default.a.string,
      copyableType: prop_types_default.a.string,
      content: prop_types_default.a.object,
      toCopy: prop_types_default.a.string,
      tooltip: prop_types_default.a.string,
      tooltipPosition: prop_types_default.a.string
    };
    var copyableData = CopyableData;
    var markdown_styles = __webpack_require__(304);
    var markdown_styles_default = /* @__PURE__ */ __webpack_require__.n(markdown_styles);
    const MARKDOWN_WHISPER_BODY_COPYABLE = "body";
    const MESSAGE_WHISPER_BODY_COPYABLE = "body";
    const MESSAGE_WHISPER_HEADER_COPYABLE = "header";
    var whisperConstants = {
      MARKDOWN_WHISPER_BODY_COPYABLE,
      MESSAGE_WHISPER_BODY_COPYABLE,
      MESSAGE_WHISPER_HEADER_COPYABLE
    };
    const Markdown = ({
      highlightColor,
      linkStyle,
      source,
      copyable,
      tooltip,
      tooltipPosition
    }) => {
      const renderers = Object(react["useMemo"])(() => ({
        a: ({children, href}) => {
          return /* @__PURE__ */ react_default.a.createElement(views_link["a"], {
            content: {data: {url: href}},
            highlightColor,
            style: linkStyle
          }, children);
        },
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
      const markdown = /* @__PURE__ */ react_default.a.createElement(copyableData, {
        copyable,
        copyableType: MARKDOWN_WHISPER_BODY_COPYABLE,
        content: /* @__PURE__ */ react_default.a.createElement(react_markdown_default.a, {
          remarkPlugins: [remark_gfm_default.a],
          className: markdown_styles["container"],
          components: renderers
        }, source),
        toCopy: server_browser_default.a.renderToString(/* @__PURE__ */ react_default.a.createElement(react_markdown_default.a, {
          remarkPlugins: [remark_gfm_default.a]
        }, source)),
        tooltip,
        tooltipPosition
      });
      return markdown;
    };
    Markdown.propTypes = {
      highlightColor: prop_types_default.a.string,
      linkStyle: prop_types_default.a.object,
      source: prop_types_default.a.string,
      tooltip: prop_types_default.a.string,
      tooltipPosition: prop_types_default.a.string
    };
    Markdown.defaultProps = {
      highlightColor: "",
      linkStyle: {},
      source: "",
      tooltip: null,
      tooltipPosition: "top"
    };
    var views_markdown = Markdown;
    var Checkbox = __webpack_require__(1364);
    var Tooltip = __webpack_require__(1336);
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
    const views_styles_linkStyles = {
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
    var views_styles = {
      button: styles_button,
      deepPurple,
      formRow,
      helperText,
      linkStyles: views_styles_linkStyles,
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
    const errorColor = "#F44337";
    const FormHelperText = ({includeStyles, isError, text}) => {
      if (!text) {
        return null;
      }
      const renderMarkdown = () => /* @__PURE__ */ react_default.a.createElement(components_markdown["a"], {
        source: text,
        linkStyle: views_styles_linkStyles
      });
      if (includeStyles) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          style: helperText_assign(helperText_assign({}, helperText), isError ? {color: errorColor} : {})
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
    var views_helperText = FormHelperText;
    const checkbox_useStyles = Object(makeStyles["a"])(({theme}) => ({
      label: {
        color: theme.primaryColor,
        marginTop: "1rem",
        "&.Mui-focused": {
          color: theme.highlightColor
        }
      },
      checkbox: {
        color: theme.primaryColor,
        padding: "0 1rem 0 1.25rem",
        alignSelf: "flex-start",
        "&.Mui-checked": {
          color: theme.highlightColor
        },
        "& .MuiSvgIcon-root": {
          height: "1.5em",
          width: "1.5em"
        }
      }
    }));
    const tooltipStyles = Object(makeStyles["a"])(() => ({
      tooltipPlacementBottom: {
        margin: "0 0 !important",
        padding: "0.75rem !important",
        fontSize: "0.75rem"
      }
    }));
    const FormCheckbox = (whisper) => {
      const {
        label,
        set,
        style,
        tooltip,
        value: passedValue,
        forceUpdate,
        validationError
      } = whisper;
      const [value, setValue] = Object(react["useState"])(passedValue);
      const styles = checkbox_useStyles();
      Object(react["useEffect"])(() => {
        if (passedValue !== null) {
          setValue(passedValue);
        }
      }, [passedValue, forceUpdate]);
      const handleChange = (event) => {
        setValue(event.target.checked);
        set(event.target.checked);
      };
      const renderControl = () => /* @__PURE__ */ react_default.a.createElement(Checkbox["a"], {
        checked: value,
        onChange: handleChange,
        classes: {root: styles.checkbox}
      });
      const renderField = () => /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        size: "small",
        variant: "outlined",
        error: !!validationError
      }, /* @__PURE__ */ react_default.a.createElement(FormGroup["a"], {
        style
      }, /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        control: renderControl(),
        label: /* @__PURE__ */ react_default.a.createElement(react_markdown_default.a, {
          remarkPlugins: [remark_gfm_default.a]
        }, label)
      })), validationError && /* @__PURE__ */ react_default.a.createElement(views_helperText, {
        text: validationError,
        isError: true,
        includeStyles: true
      }));
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: tooltipStyles()
        }, renderField());
      }
      return renderField();
    };
    FormCheckbox.propTypes = {
      label: prop_types_default.a.string.isRequired,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.bool,
      forceUpdate: prop_types_default.a.string,
      validationError: prop_types_default.a.string
    };
    FormCheckbox.defaultProps = {
      style: {},
      theme: {},
      tooltip: null,
      value: false,
      validationError: null
    };
    var views_checkbox = FormCheckbox;
    const radio_useStyles = Object(makeStyles["a"])(({theme}) => ({
      label: {
        color: theme.primaryColor,
        marginBottom: "0.5rem",
        marginTop: "1rem",
        "&.Mui-focused": {
          color: theme.highlightColor
        }
      },
      radio: {
        color: theme.primaryColor,
        padding: "0.25rem 1rem 0.45rem 1.25rem",
        alignSelf: "flex-start",
        "&.Mui-checked": {
          color: theme.highlightColor
        },
        "& .MuiSvgIcon-root": {
          height: "1.5em",
          width: "1.5em"
        }
      }
    }));
    const radio_tooltipStyles = Object(makeStyles["a"])(() => ({
      tooltipPlacementBottom: {
        margin: "0 0 !important",
        padding: "0.75rem !important",
        fontSize: "0.75rem"
      }
    }));
    const FormRadio = ({
      label,
      options,
      set,
      style,
      tooltip,
      value: passedValue,
      forceUpdate,
      validationError
    }) => {
      const [value, setValue] = Object(react["useState"])(passedValue);
      const styles = radio_useStyles();
      Object(react["useEffect"])(() => {
        if (passedValue !== "") {
          setValue(passedValue);
        }
      }, [passedValue, forceUpdate]);
      const handleChange = (event) => {
        setValue(event.target.value);
        set(event.target.value);
      };
      const renderRadio = (option) => /* @__PURE__ */ react_default.a.createElement(FormControlLabel["a"], {
        key: option,
        value: option,
        control: /* @__PURE__ */ react_default.a.createElement(Radio["a"], {
          color: "default",
          classes: {root: styles.radio}
        }),
        label: /* @__PURE__ */ react_default.a.createElement(react_markdown_default.a, {
          remarkPlugins: [remark_gfm_default.a]
        }, option)
      });
      const renderField = () => /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        component: "fieldset",
        style,
        error: !!validationError
      }, label && /* @__PURE__ */ react_default.a.createElement(FormLabel["a"], {
        component: "legend",
        classes: {root: styles.label}
      }, label), /* @__PURE__ */ react_default.a.createElement(RadioGroup["a"], {
        value,
        onChange: handleChange
      }, options.map(renderRadio)), validationError && /* @__PURE__ */ react_default.a.createElement(views_helperText, {
        text: validationError,
        isError: true,
        includeStyles: true
      }));
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: radio_tooltipStyles()
        }, renderField());
      }
      return renderField();
    };
    FormRadio.propTypes = {
      label: prop_types_default.a.string,
      options: prop_types_default.a.array.isRequired,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
      forceUpdate: prop_types_default.a.string,
      validationError: prop_types_default.a.string
    };
    FormRadio.defaultProps = {
      label: null,
      style: {},
      theme: {},
      tooltip: null,
      value: "",
      validationError: null
    };
    var views_radio = FormRadio;
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
    const select_useStyles = Object(makeStyles["a"])(({theme}) => ({
      label: select_assign(select_assign(select_assign({}, theme.primaryColor ? {
        color: theme.primaryColor
      } : {}), theme.highlightColor ? {
        "&.Mui-focused": {
          color: theme.highlightColor
        }
      } : {}), {
        backgroundColor: colors["p"],
        padding: "0 0.375rem"
      }),
      select: select_assign({}, theme.primaryColor ? {
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
      className,
      label,
      options,
      set,
      style,
      tooltip,
      value: passedValue,
      forceUpdate,
      validationError
    }) => {
      const [value, setValue] = Object(react["useState"])(passedValue);
      const classes = select_useStyles();
      Object(react["useEffect"])(() => {
        if (passedValue !== "") {
          setValue(passedValue);
        }
      }, [passedValue, forceUpdate]);
      const handleChange = (event) => {
        setValue(event.target.value);
        set(event.target.value);
      };
      const renderOption = (option) => /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        key: option,
        value: option
      }, option);
      const renderField = () => /* @__PURE__ */ react_default.a.createElement(FormControl["a"], {
        size: "small",
        variant: "outlined",
        style,
        error: !!validationError,
        classes: {
          root: className ? `${classes.select} ${className}` : classes.select
        }
      }, label && /* @__PURE__ */ react_default.a.createElement(InputLabel["a"], {
        id: `${label}-label`,
        classes: {root: classes.label}
      }, label), /* @__PURE__ */ react_default.a.createElement(Select["a"], {
        labelId: `${label}-label`,
        value,
        defaultValue: passedValue,
        onChange: handleChange,
        label
      }, /* @__PURE__ */ react_default.a.createElement(MenuItem["a"], {
        value: ""
      }, /* @__PURE__ */ react_default.a.createElement("em", null, "None")), options.map(renderOption)), validationError && /* @__PURE__ */ react_default.a.createElement(views_helperText, {
        text: validationError,
        isError: true,
        includeStyles: true
      }));
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: select_tooltipStyles()
        }, renderField());
      }
      return renderField();
    };
    FormSelect.propTypes = {
      className: prop_types_default.a.string,
      label: prop_types_default.a.string,
      options: prop_types_default.a.array.isRequired,
      set: prop_types_default.a.func.isRequired,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
      forceUpdate: prop_types_default.a.string
    };
    FormSelect.defaultProps = {
      className: null,
      label: null,
      style: {},
      theme: {},
      tooltip: null,
      value: ""
    };
    var views_select = FormSelect;
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
    const timeFormatter = "HH:mm";
    const dateFormatter = "YYYY-MM-DD";
    const dateTimeFormatter = "YYYY-MM-DDTHH:mm";
    const text_useStyles = Object(makeStyles["a"])(({theme}) => ({
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
    const useTextFieldLabelStyles = Object(makeStyles["a"])(() => ({
      label: {
        backgroundColor: colors["p"],
        padding: "0 0.375rem"
      }
    }));
    const text_tooltipStyles = Object(makeStyles["a"])(() => ({
      tooltipPlacementBottom: {
        margin: "0 0 !important",
        padding: "0.75rem !important",
        fontSize: "0.75rem"
      }
    }));
    const coerceToInputType = (inputType) => {
      switch (inputType) {
        case "time":
          return "time";
        case "date":
          return "date";
        case "date_time":
          return "datetime-local";
        default:
          return inputType;
      }
    };
    const coerceToInputLabelProps = (inputType) => {
      switch (inputType) {
        case "time":
        case "date":
        case "date_time":
          return {
            classes: {root: useTextFieldLabelStyles().label},
            shrink: true
          };
        default:
          return {classes: {root: useTextFieldLabelStyles().label}};
      }
    };
    const coerceToInputValue = (inputType, input) => {
      if (!input) {
        return input;
      }
      switch (inputType) {
        case "time":
          return moment(input).format(timeFormatter);
        case "date":
          return moment(input).format(dateFormatter);
        case "date_time":
          return moment(input).format(dateTimeFormatter);
        default:
          return input;
      }
    };
    const FormText = ({
      hint,
      label,
      inputProps,
      inputType,
      set,
      setOnBlur,
      setOnFocus,
      style,
      tooltip,
      value,
      validationError
    }) => {
      const styles = text_useStyles();
      const handleOnChange = (event) => {
        set(event.target.value);
      };
      const handleOnBlur = () => {
        if (setOnBlur) {
          setOnBlur();
        }
      };
      const handleOnFocus = () => {
        if (setOnFocus) {
          setOnFocus();
        }
      };
      const renderField = () => /* @__PURE__ */ react_default.a.createElement(TextField["a"], text_assign({
        size: "small",
        type: coerceToInputType(inputType),
        variant: "outlined",
        label,
        InputLabelProps: coerceToInputLabelProps(inputType),
        defaultValue: coerceToInputValue(inputType, value),
        classes: styles,
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
        style,
        FormHelperTextProps: {
          component: "div"
        },
        error: !!validationError,
        helperText: /* @__PURE__ */ react_default.a.createElement(views_helperText, {
          text: validationError || hint
        })
      }, text_assign({}, inputProps ? {inputProps} : {})));
      return /* @__PURE__ */ react_default.a.createElement(Tooltip["a"], {
        title: tooltip || "",
        placement: "bottom-start",
        classes: text_tooltipStyles()
      }, renderField());
    };
    FormText.propTypes = {
      hint: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      inputProps: prop_types_default.a.object,
      inputType: prop_types_default.a.string,
      set: prop_types_default.a.func.isRequired,
      setOnBlur: prop_types_default.a.func,
      setOnFocus: prop_types_default.a.func,
      style: prop_types_default.a.object,
      theme: prop_types_default.a.object,
      tooltip: prop_types_default.a.string,
      value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
      validationError: prop_types_default.a.string
    };
    FormText.defaultProps = {
      hint: null,
      inputProps: null,
      inputType: "text",
      style: {},
      theme: {},
      tooltip: null,
      value: "",
      validationError: null
    };
    var views_text = FormText;
    var divider_styles = __webpack_require__(742);
    const divider_Divider = () => {
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: divider_styles["divider"],
        "data-divider": true
      });
    };
    var views_divider = divider_Divider;
    var link_styles = __webpack_require__(743);
    var link_defProp = Object.defineProperty;
    var link_hasOwnProp = Object.prototype.hasOwnProperty;
    var link_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var link_propIsEnum = Object.prototype.propertyIsEnumerable;
    var link_defNormalProp = (obj, key, value) => key in obj ? link_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var link_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (link_hasOwnProp.call(b, prop2))
          link_defNormalProp(a, prop2, b[prop2]);
      if (link_getOwnPropSymbols)
        for (var prop2 of link_getOwnPropSymbols(b)) {
          if (link_propIsEnum.call(b, prop2))
            link_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const mapStyle = (style) => {
      switch (style) {
        case "success":
          return {color: "white", background: "#288222", padding: ".25rem 0"};
        case "warning":
          return {color: "#EB473B", background: "#FFECAA", padding: ".25rem 0"};
        case "error":
          return {color: "white", background: "#EB473B", padding: ".25rem 0"};
        case "none":
        default:
          return {};
      }
    };
    const mapAlign = (align) => {
      switch (align) {
        case "left":
          return {textAlign: "left"};
        case "center":
          return {textAlign: "center"};
        case "right":
          return {textAlign: "right"};
        default:
          return {};
      }
    };
    const link_Link = ({element, set}) => {
      const {href, style, text} = element;
      const textAlign = element.textAlign || element.align;
      const onClick = (event) => {
        event.stopPropagation();
        if (set) {
          set(null);
        } else if (href) {
          Object(utils["e"])(href);
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: Object(utils["b"])([link_styles["linkContainer"], "link"]),
        onClick,
        style: link_assign(link_assign({}, mapStyle(style)), mapAlign(textAlign)),
        role: "button",
        tabIndex: 0
      }, text);
    };
    link_Link.propTypes = {
      element: prop_types_default.a.object.isRequired,
      set: prop_types_default.a.func
    };
    link_Link.defaultProps = {
      set: null
    };
    var universal_views_link = link_Link;
    var pair_styles = __webpack_require__(358);
    var pair_defProp = Object.defineProperty;
    var pair_hasOwnProp = Object.prototype.hasOwnProperty;
    var pair_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var pair_propIsEnum = Object.prototype.propertyIsEnumerable;
    var pair_defNormalProp = (obj, key, value2) => key in obj ? pair_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value: value2}) : obj[key] = value2;
    var pair_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (pair_hasOwnProp.call(b, prop2))
          pair_defNormalProp(a, prop2, b[prop2]);
      if (pair_getOwnPropSymbols)
        for (var prop2 of pair_getOwnPropSymbols(b)) {
          if (pair_propIsEnum.call(b, prop2))
            pair_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const pair_mapStyle = (style) => {
      switch (style) {
        case "success":
          return {color: "white", background: "#288222", padding: ".25rem 0"};
        case "warning":
          return {color: "#EB473B", background: "#FFECAA", padding: ".25rem 0"};
        case "error":
          return {color: "white", background: "#EB473B", padding: ".25rem 0"};
        case "none":
        default:
          return {};
      }
    };
    const Pair = ({element, source}) => {
      const defaultToolTipText = "Click to copy";
      const [toolTipText, setToolTipText] = Object(react["useState"])(defaultToolTipText);
      const copyTextAndUpdateTooltip = (text) => {
        Object(messaging["a"])(text).catch(console.error);
        setToolTipText("Copied");
        setTimeout(() => {
          setToolTipText(defaultToolTipText);
        }, 1e3);
      };
      const onValueCopyClick = (text) => {
        if (element.copyable) {
          Object(tracking["h"])({
            category: tracking["f"],
            action: "Value text copied",
            label: source.name || "UNKNOWN"
          });
          copyTextAndUpdateTooltip(text);
        }
      };
      const onLabelCopyClick = (text) => {
        if (element.labelCopyable) {
          Object(tracking["h"])({
            category: tracking["f"],
            action: "Label text copied",
            label: source.name || "UNKNOWN"
          });
          copyTextAndUpdateTooltip(text);
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: pair_styles["pair"],
        style: pair_assign({}, pair_mapStyle(element.style))
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        "data-copyable": element.labelCopyable
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        onClick: () => onLabelCopyClick(element.label),
        className: element.labelCopyable ? pair_styles["copyable"] : {},
        role: "button",
        tabIndex: 0
      }, /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
        text: toolTipText,
        hide: !element.labelCopyable,
        duration: 1
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: pair_styles["label"],
        style: element.labelCopyable ? {cursor: "pointer"} : {cursor: "text"}
      }, element.label)))), /* @__PURE__ */ react_default.a.createElement("div", {
        "data-copyable": element.copyable
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        onClick: () => onValueCopyClick(element.value),
        className: element.copyable ? pair_styles["copyable"] : {},
        role: "button",
        tabIndex: 0
      }, /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
        text: toolTipText,
        hide: !element.copyable,
        duration: 1
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: pair_styles["value"],
        style: element.copyable ? {cursor: "pointer"} : {cursor: "text"}
      }, /* @__PURE__ */ react_default.a.createElement(components_markdown["a"], {
        source: element.value
      }))))));
    };
    Pair.propTypes = {
      element: prop_types_default.a.object.isRequired,
      source: prop_types_default.a.object.isRequired
    };
    var pair = Pair;
    var message_styles = __webpack_require__(477);
    var message_defProp = Object.defineProperty;
    var message_hasOwnProp = Object.prototype.hasOwnProperty;
    var message_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var message_propIsEnum = Object.prototype.propertyIsEnumerable;
    var message_defNormalProp = (obj, key, value) => key in obj ? message_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var message_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (message_hasOwnProp.call(b, prop2))
          message_defNormalProp(a, prop2, b[prop2]);
      if (message_getOwnPropSymbols)
        for (var prop2 of message_getOwnPropSymbols(b)) {
          if (message_propIsEnum.call(b, prop2))
            message_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const message_mapStyle = (style) => {
      switch (style) {
        case "success":
          return {color: "white", background: "#288222", padding: ".5rem .5rem"};
        case "warning":
          return {
            color: "#EB473B",
            background: "#FFECAA",
            padding: ".5rem .5rem"
          };
        case "error":
          return {color: "white", background: "#EB473B", padding: ".5rem .5rem"};
        case "none":
        default:
          return {padding: "0 .5rem"};
      }
    };
    const message_mapAlign = (align) => {
      switch (align) {
        case "left":
          return {textAlign: "left"};
        case "center":
          return {textAlign: "center"};
        case "right":
          return {textAlign: "right"};
        default:
          return {};
      }
    };
    const Message = ({element, copyable, tooltip, tooltipPosition}) => {
      const {header, style, body} = element;
      const textAlign = element.textAlign || element.align;
      const message = /* @__PURE__ */ react_default.a.createElement("div", {
        className: message_styles["message"],
        style: message_assign(message_assign({}, message_mapStyle(style)), message_mapAlign(textAlign))
      }, /* @__PURE__ */ react_default.a.createElement(copyableData, {
        copyable,
        copyableType: MESSAGE_WHISPER_HEADER_COPYABLE,
        content: header && /* @__PURE__ */ react_default.a.createElement("span", {
          className: message_styles["messageHeader"]
        }, header),
        toCopy: header,
        tooltip,
        tooltipPosition
      }), /* @__PURE__ */ react_default.a.createElement(copyableData, {
        copyable,
        copyableType: MESSAGE_WHISPER_BODY_COPYABLE,
        content: body && /* @__PURE__ */ react_default.a.createElement("div", {
          className: message_styles["messageBody"]
        }, /* @__PURE__ */ react_default.a.createElement(components_markdown["a"], {
          source: body
        })),
        toCopy: body,
        tooltip,
        tooltipPosition
      }));
      return message;
    };
    Message.propTypes = {
      element: prop_types_default.a.object.isRequired,
      tooltip: prop_types_default.a.string,
      tooltipPosition: prop_types_default.a.string
    };
    Message.defaultProps = {
      tooltip: "test",
      tooltipPosition: "top"
    };
    var views_message = Message;
    var Button = __webpack_require__(1328);
    const buttonFontSize = (size) => size === "large" ? "0.75rem" : "0.625rem";
    const buttonHeight = (size) => size === "large" ? "2rem" : "1.25rem";
    const PrimaryButton = (style, size) => {
      return Object(react["useMemo"])(() => Object(withStyles["a"])((theme) => ({
        root: {
          color: theme.palette.getContrastText(style.highlightColor),
          backgroundColor: style.highlightColor,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: style.primaryColor,
            boxShadow: "none"
          },
          "&:disabled": {
            backgroundColor: "#939393 !important",
            color: `${style.primaryColor} !important`
          },
          fontSize: buttonFontSize(size),
          height: buttonHeight(size)
        }
      }))(Button["a"]), [style]);
    };
    const SecondaryButton = (style, size) => {
      return Object(react["useMemo"])(() => Object(withStyles["a"])(() => ({
        root: {
          color: style.highlightColor,
          backgroundColor: "rgba(0,0,0,0)",
          boxShadow: "none",
          "&:hover": {
            color: style.primaryColor,
            borderColor: style.primaryColor,
            boxShadow: "none"
          },
          "&:disabled": {
            backgroundColor: "rgba(0, 0, 0, 0) !important",
            color: "#939393 !important",
            borderColor: "#939393 !important"
          },
          fontSize: buttonFontSize(size),
          height: buttonHeight(size),
          border: `2px solid ${style.highlightColor}`
        }
      }))(Button["a"]), [style]);
    };
    const TextButton = (style, size) => {
      return Object(react["useMemo"])(() => Object(withStyles["a"])(() => ({
        root: {
          color: style.highlightColor,
          backgroundColor: "rgba(0,0,0,0)",
          boxShadow: "none",
          "&:hover": {
            color: style.primaryColor,
            boxShadow: "none"
          },
          "&:disabled": {
            backgroundColor: "rgba(0, 0, 0, 0) !important",
            color: "#939393 !important"
          },
          fontSize: buttonFontSize(size),
          height: buttonHeight(size)
        }
      }))(Button["a"]), [style]);
    };
    const ContentButton = ({
      buttonStyle,
      disabled,
      label,
      size,
      style,
      whisperId,
      interactionId,
      tooltip,
      tooltipPosition
    }) => {
      const Intermediate = buttonStyle === "primary" ? PrimaryButton(style, size) : SecondaryButton(style, size);
      const StyledButton = buttonStyle === "text" ? TextButton(style, size) : Intermediate;
      const onClick = (value) => (event) => {
        event.stopPropagation();
        Object(messaging["W"])(whisperId, "universal", {
          id: interactionId,
          payload: {value}
        }).catch(console.error);
      };
      const button = /* @__PURE__ */ react_default.a.createElement(StyledButton, {
        disabled,
        variant: "contained",
        onClick: onClick(true)
      }, label);
      if (tooltip) {
        return /* @__PURE__ */ react_default.a.createElement(components_tooltip["a"], {
          text: tooltip,
          position: tooltipPosition
        }, button);
      }
      return button;
    };
    ContentButton.propTypes = {
      buttonStyle: prop_types_default.a.string,
      disabled: prop_types_default.a.bool,
      label: prop_types_default.a.string,
      size: prop_types_default.a.string,
      style: prop_types_default.a.object.isRequired,
      whisperId: prop_types_default.a.string.isRequired,
      interactionId: prop_types_default.a.string.isRequired,
      tooltip: prop_types_default.a.string,
      tooltipPosition: prop_types_default.a.string
    };
    ContentButton.defaultProps = {
      buttonStyle: "primary",
      label: null,
      size: "large",
      tooltip: null,
      tooltipPosition: "top"
    };
    var views_button = ContentButton;
    var filter = __webpack_require__(132);
    var ListItemAvatar = __webpack_require__(1353);
    var ListItemSecondaryAction = __webpack_require__(1354);
    var Avatar = __webpack_require__(1377);
    var addLoop = __webpack_require__(69);
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
    const SidebarLoopAddButton = ({
      availableLoop,
      isProcessing,
      notifyParentOnUpdate
    }) => {
      const [needsUpdate, setNeedsUpdate] = Object(react["useState"])(true);
      Object(react["useEffect"])(() => {
        if (isProcessing === false) {
          setNeedsUpdate(false);
        }
      }, [isProcessing]);
      const getInstalled = () => {
        setNeedsUpdate(false);
        notifyParentOnUpdate(availableLoop);
      };
      return /* @__PURE__ */ react_default.a.createElement(loopAddButton["a"], loopAddButton_assign({}, {
        appId: availableLoop.appId,
        availableLoop,
        getInstalled,
        isLoopInstalled: true,
        isLoopLocallyInstalled: false,
        isProcessing,
        makeToast: () => {
        },
        needsUpdate,
        size: "xs",
        trackingCategory: tracking["a"]
      }));
    };
    SidebarLoopAddButton.propTypes = {
      availableLoop: prop_types_default.a.object.isRequired,
      isProcessing: prop_types_default.a.bool,
      notifyParentOnUpdate: prop_types_default.a.func
    };
    SidebarLoopAddButton.defaultProps = {
      isProcessing: null,
      notifyParentOnUpdate: () => {
      }
    };
    var views_loopAddButton = SidebarLoopAddButton;
    var loopList_defProp = Object.defineProperty;
    var loopList_hasOwnProp = Object.prototype.hasOwnProperty;
    var loopList_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var loopList_propIsEnum = Object.prototype.propertyIsEnumerable;
    var loopList_defNormalProp = (obj, key, value) => key in obj ? loopList_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var loopList_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (loopList_hasOwnProp.call(b, prop2))
          loopList_defNormalProp(a, prop2, b[prop2]);
      if (loopList_getOwnPropSymbols)
        for (var prop2 of loopList_getOwnPropSymbols(b)) {
          if (loopList_propIsEnum.call(b, prop2))
            loopList_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var loopList_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    const LoopList = (props) => {
      const {loops} = props;
      const {osName} = Object(config["e"])();
      const [isProcessing, setIsProcessing] = Object(react["useState"])({});
      const [updateAllDisabled, setUpdateAllDisabled] = Object(react["useState"])(false);
      const [loopsUpdatedFromList, setLoopsUpdatedFromList] = Object(react["useState"])([]);
      const updateSingleLoop = (_0) => loopList_async(void 0, [_0], function* ({appId}) {
        setIsProcessing((prev) => loopList_assign(loopList_assign({}, prev), {[appId]: true}));
        try {
          yield Object(addLoop["a"])(appId, osName);
          try {
            yield Object(addLoop["c"])(appId);
          } catch (error) {
            console.error(error);
            try {
              yield Object(addLoop["b"])(appId);
            } catch (restoreError) {
              console.error(error);
            }
          }
        } catch (error) {
          console.error(error);
        }
        setIsProcessing((prev) => loopList_assign(loopList_assign({}, prev), {[appId]: false}));
      });
      const updateAll = () => {
        setUpdateAllDisabled(true);
        return Object(filter["a"])((loop) => !loopsUpdatedFromList.includes(loop.appId), loops).map(updateSingleLoop);
      };
      const onLoopUpdateFromList = (loop) => {
        setLoopsUpdatedFromList((prev) => [...prev, loop.appId]);
      };
      Object(react["useEffect"])(() => setUpdateAllDisabled(loopsUpdatedFromList.length === loops.length), [loopsUpdatedFromList]);
      const renderLoop = (loop) => {
        var _a;
        const logo = (_a = loop.customData) == null ? void 0 : _a.loopWhisperLogo;
        const url = logo && logo.startsWith("//") ? `http:${logo}` : logo;
        return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, {
          key: loop.name
        }, /* @__PURE__ */ react_default.a.createElement(Divider["a"], {
          component: "li"
        }), /* @__PURE__ */ react_default.a.createElement(ListItem["a"], {
          disableGutters: true,
          classes: {root: universal_views_style["listItem"]}
        }, /* @__PURE__ */ react_default.a.createElement(ListItemAvatar["a"], {
          classes: {root: universal_views_style["avatarContainer"]}
        }, /* @__PURE__ */ react_default.a.createElement(Avatar["a"], {
          alt: loop.name,
          src: url,
          variant: "rounded",
          classes: {root: universal_views_style["avatar"]}
        })), /* @__PURE__ */ react_default.a.createElement(ListItemText["a"], {
          primary: loop.name,
          classes: {primary: universal_views_style["listHeader"]}
        }), /* @__PURE__ */ react_default.a.createElement(ListItemSecondaryAction["a"], {
          classes: {root: universal_views_style["buttonContainer"]}
        }, /* @__PURE__ */ react_default.a.createElement(views_loopAddButton, {
          availableLoop: loop,
          isProcessing: isProcessing[loop.appId],
          notifyParentOnUpdate: onLoopUpdateFromList
        }))));
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: classnames_default()(universal_views_style["loopListContainer"], loops.length === 1 ? universal_views_style["topPadding"] : null)
      }, loops.length > 1 && /* @__PURE__ */ react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm text-primary px-2 disabled:text-grey-disabled",
        onClick: updateAll,
        disabled: updateAllDisabled
      }, "Update All"), /* @__PURE__ */ react_default.a.createElement(List["a"], {
        disablePadding: true,
        classes: {root: universal_views_style["loopList"]}
      }, loops.map(renderLoop)));
    };
    LoopList.propTypes = {
      loops: prop_types_default.a.array
    };
    LoopList.defaultProps = {
      loops: []
    };
    var loopList = LoopList;
    var universal_style = __webpack_require__(142);
    var item_defProp = Object.defineProperty;
    var item_hasOwnProp = Object.prototype.hasOwnProperty;
    var item_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var item_propIsEnum = Object.prototype.propertyIsEnumerable;
    var item_defNormalProp = (obj, key, value) => key in obj ? item_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var item_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (item_hasOwnProp.call(b, prop2))
          item_defNormalProp(a, prop2, b[prop2]);
      if (item_getOwnPropSymbols)
        for (var prop2 of item_getOwnPropSymbols(b)) {
          if (item_propIsEnum.call(b, prop2))
            item_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const dateTimeInputProps = (dateTimeType, min, max) => {
      const dateFormat = dateTimeType === "date" ? "YYYY-MM-DD" : "YYYY-MM-DDTHH:mm";
      return (dateTimeType === "date" || dateTimeType === "date_time") && (!Object(isNil["a"])(min) || !Object(isNil["a"])(max)) ? item_assign(item_assign({}, !Object(isNil["a"])(max) ? {max: moment(max).format(dateFormat)} : {}), !Object(isNil["a"])(min) ? {min: moment(min).format(dateFormat)} : {}) : null;
    };
    const ContentItem = ({data, source, whisper}) => {
      const {content} = whisper;
      const set = (id, format) => (nextValue) => {
        Object(messaging["W"])(whisper.whisperId, "universal", {
          id,
          payload: {value: format ? format(nextValue) : nextValue}
        }).catch(console.error);
      };
      if (data.type === CONTENT_TYPE_BUTTON && !Object(isEmpty["a"])(data.body)) {
        return /* @__PURE__ */ react_default.a.createElement(views_button, {
          buttonStyle: data.buttonStyle ? data.buttonStyle : void 0,
          disabled: data.disabled,
          label: data.label,
          size: data.size ? data.size : void 0,
          style: content.style,
          whisperId: whisper.whisperId,
          interactionId: data.onClick,
          tooltip: data.tooltip
        });
      }
      if (data.type === CONTENT_TYPE_MARKDOWN && !Object(isEmpty["a"])(data.body)) {
        return /* @__PURE__ */ react_default.a.createElement(views_markdown, {
          source: data.body,
          copyable: data.copyable,
          highlightColor: content.style.highlightColor,
          tooltip: data.tooltip
        });
      }
      if (data.type === CONTENT_TYPE_MESSAGE) {
        return /* @__PURE__ */ react_default.a.createElement(views_message, {
          element: data,
          copyable: data.copyable,
          tooltip: data.tooltip
        });
      }
      if (data.type === CONTENT_TYPE_LIST_PAIR) {
        return /* @__PURE__ */ react_default.a.createElement(pair, {
          element: data,
          source
        });
      }
      if (data.type === CONTENT_TYPE_DIVIDER) {
        return /* @__PURE__ */ react_default.a.createElement(views_divider, {
          element: data
        });
      }
      if (data.type === CONTENT_TYPE_LINK) {
        return /* @__PURE__ */ react_default.a.createElement(universal_views_link, item_assign({
          element: data
        }, item_assign({}, data.onClick ? {set: set(data.onClick)} : {})));
      }
      if (data.type === CONTENT_TYPE_CHECKBOX) {
        return /* @__PURE__ */ react_default.a.createElement(views_checkbox, {
          label: data.label,
          set: set(data.onChange),
          tooltip: data.tooltip,
          value: data.value,
          inputType: data.type,
          forceUpdate: data.onChange,
          validationError: data.validationError
        });
      }
      if (data.type === CONTENT_TYPE_LOOP_LIST) {
        return /* @__PURE__ */ react_default.a.createElement(loopList, {
          loops: data.loops
        });
      }
      if (data.type === CONTENT_TYPE_RADIO) {
        return /* @__PURE__ */ react_default.a.createElement(views_radio, {
          label: data.label,
          options: data.options,
          set: set(data.onSelect, (nextValue) => Object(findIndex["a"])(Object(equals["a"])(nextValue), data.options)),
          tooltip: data.tooltip,
          value: data.options[data.selected],
          forceUpdate: data.onSelect,
          validationError: data.validationError
        });
      }
      if (data.type === CONTENT_TYPE_SELECT) {
        return /* @__PURE__ */ react_default.a.createElement(views_select, {
          className: universal_style["select"],
          label: data.label,
          options: data.options,
          set: set(data.onSelect, (nextValue) => Object(findIndex["a"])(Object(equals["a"])(nextValue), data.options)),
          tooltip: data.tooltip,
          value: data.options[data.selected],
          forceUpdate: data.onSelect,
          validationError: data.validationError
        });
      }
      if (data.type === CONTENT_TYPE_NUMBER) {
        return /* @__PURE__ */ react_default.a.createElement(views_text, {
          inputProps: !Object(isNil["a"])(data.min) || !Object(isNil["a"])(data.max) || data.step ? item_assign(item_assign(item_assign({}, !Object(isNil["a"])(data.max) ? {max: data.max} : {}), !Object(isNil["a"])(data.min) ? {min: data.min} : {}), data.step ? {step: data.step} : {}) : null,
          inputType: data.type,
          label: data.label,
          set: set(data.onChange),
          setOnBlur: set(data.onBlur),
          setOnFocus: set(data.onFocus),
          tooltip: data.tooltip,
          value: data.value,
          validationError: data.validationError
        });
      }
      if ([
        CONTENT_TYPE_EMAIL,
        CONTENT_TYPE_PASSWORD,
        CONTENT_TYPE_TELEPHONE,
        CONTENT_TYPE_TEXT
      ].includes(data.type)) {
        return /* @__PURE__ */ react_default.a.createElement(views_text, {
          inputType: data.type || "text",
          label: data.label,
          set: set(data.onChange),
          setOnBlur: set(data.onBlur),
          setOnFocus: set(data.onFocus),
          tooltip: data.tooltip,
          value: data.value,
          validationError: data.validationError
        });
      }
      if (data.type === CONTENT_TYPE_DATE_TIME) {
        return /* @__PURE__ */ react_default.a.createElement(views_text, {
          inputProps: dateTimeInputProps(data.dateTimeType, data.min, data.max),
          inputType: data.dateTimeType,
          label: data.label,
          set: set(data.onChange),
          setOnBlur: set(data.onBlur),
          setOnFocus: set(data.onFocus),
          tooltip: data.tooltip,
          value: data.value,
          forceUpdate: data.onChange,
          validationError: data.validationError
        });
      }
      if (data.type === CONTENT_TYPE_BOX) {
        return /* @__PURE__ */ react_default.a.createElement(box, {
          data,
          interactionId: data.onClick,
          source,
          whisper,
          whisperId: whisper.whisperId
        });
      }
      return null;
    };
    ContentItem.propTypes = {
      data: prop_types_default.a.oneOfType([prop_types_default.a.array, prop_types_default.a.object]),
      source: prop_types_default.a.object.isRequired,
      whisper: prop_types_default.a.object.isRequired
    };
    ContentItem.defaultProps = {
      data: []
    };
    var universal_item = ContentItem;
    var box_defProp = Object.defineProperty;
    var box_hasOwnProp = Object.prototype.hasOwnProperty;
    var box_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var box_propIsEnum = Object.prototype.propertyIsEnumerable;
    var box_defNormalProp = (obj, key, value) => key in obj ? box_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var box_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (box_hasOwnProp.call(b, prop2))
          box_defNormalProp(a, prop2, b[prop2]);
      if (box_getOwnPropSymbols)
        for (var prop2 of box_getOwnPropSymbols(b)) {
          if (box_propIsEnum.call(b, prop2))
            box_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const flexDirection = {
      horizontal: "row",
      vertical: "column"
    };
    const flexJustifyContent = {
      around: "space-around",
      evenly: "space-evenly",
      left: "flex-start",
      right: "flex-end",
      center: "center"
    };
    const ContentBox = ({data, interactionId, source, whisper, whisperId}) => {
      const renderContentElements = (item, index) => {
        const key = generateComponentKey({whisper, component: item, index});
        return /* @__PURE__ */ react_default.a.createElement("div", {
          key
        }, /* @__PURE__ */ react_default.a.createElement(universal_item, {
          data: item,
          source,
          whisper
        }));
      };
      const onClick = (value) => (event) => {
        event.stopPropagation();
        Object(messaging["W"])(whisperId, "universal", {
          id: interactionId,
          payload: {value}
        }).catch(console.error);
      };
      const hasInteraction = interactionId && interactionId.length > 0;
      const Box = () => {
        var _a;
        return /* @__PURE__ */ react_default.a.createElement("div", {
          className: `${universal_style["contentItem"]} ${universal_views_style["contentBox"]} ${hasInteraction ? universal_views_style["clickableBox"] : ""}`,
          style: box_assign({
            flexDirection: flexDirection[data.direction]
          }, {
            justifyContent: flexJustifyContent[data.alignment] || "space-between"
          })
        }, (_a = data == null ? void 0 : data.children) == null ? void 0 : _a.map(renderContentElements));
      };
      return !hasInteraction ? /* @__PURE__ */ react_default.a.createElement(Box, null) : /* @__PURE__ */ react_default.a.createElement("a", {
        role: "button",
        onClick: onClick(true),
        tabIndex: -2
      }, /* @__PURE__ */ react_default.a.createElement(Box, null));
    };
    ContentBox.propTypes = {
      data: prop_types_default.a.object.isRequired,
      interactionId: prop_types_default.a.string.isRequired,
      source: prop_types_default.a.object.isRequired,
      whisper: prop_types_default.a.object.isRequired,
      whisperId: prop_types_default.a.string.isRequired
    };
    ContentBox.defaultProps = {};
    var box = ContentBox;
    const CollapseBox = ({data, source, whisper}) => {
      var _a;
      const [expanded, setExpanded] = Object(react["useState"])(false);
      Object(react["useEffect"])(() => {
        setExpanded(data.open);
      }, [data.open]);
      const renderContentElements = (item, index) => {
        const key = generateComponentKey({whisper, component: item, index});
        if (item.type === CONTENT_TYPE_BOX) {
          return /* @__PURE__ */ react_default.a.createElement(box, {
            key,
            data: item,
            source,
            whisper
          });
        }
        return /* @__PURE__ */ react_default.a.createElement("div", {
          key,
          className: universal_views_style["collapseBoxItem"]
        }, /* @__PURE__ */ react_default.a.createElement(universal_item, {
          data: item,
          source,
          whisper
        }));
      };
      const onClick = () => {
        Object(tracking["h"])({
          category: tracking["f"],
          action: "Whisper content",
          label: expanded ? "collapsed" : "expanded"
        });
        const value = !expanded;
        Object(messaging["W"])(whisper.whisperId, "universal", {
          id: data.onClick,
          payload: {value}
        }).catch(console.error);
        return setExpanded(value);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: universal_style["contentItem"]
      }, /* @__PURE__ */ react_default.a.createElement(AnimateHeight_default.a, {
        duration: 500,
        height: expanded ? "auto" : 0
      }, (_a = data == null ? void 0 : data.children) == null ? void 0 : _a.map(renderContentElements)), /* @__PURE__ */ react_default.a.createElement(expandButton, {
        label: data.label || null,
        expanded,
        onClick
      }));
    };
    CollapseBox.propTypes = {
      data: prop_types_default.a.object.isRequired,
      source: prop_types_default.a.object.isRequired,
      whisper: prop_types_default.a.object.isRequired
    };
    CollapseBox.defaultProps = {};
    var collapseBox = CollapseBox;
    const UniversalContent = ({source, whisper}) => {
      var _a, _b;
      const renderContentElements = (item, index) => {
        const key = generateComponentKey({whisper, component: item, index});
        if (item.type === CONTENT_TYPE_BOX) {
          return /* @__PURE__ */ react_default.a.createElement(box, {
            interactionId: item.onClick,
            key,
            data: item,
            source,
            whisper,
            whisperId: whisper.whisperId
          });
        }
        if (item.type === CONTENT_TYPE_COLLAPSE_BOX) {
          return /* @__PURE__ */ react_default.a.createElement(collapseBox, {
            key,
            data: item,
            source,
            whisper
          });
        }
        return /* @__PURE__ */ react_default.a.createElement("div", {
          key,
          className: Object(utils["b"])([
            universal_style["contentItem"],
            item.type === CONTENT_TYPE_LINK && item.onClick ? universal_style["link"] : null
          ])
        }, /* @__PURE__ */ react_default.a.createElement(universal_item, {
          data: item,
          source,
          whisper
        }));
      };
      return (_b = (_a = whisper == null ? void 0 : whisper.content) == null ? void 0 : _a.components) == null ? void 0 : _b.map(renderContentElements);
    };
    UniversalContent.propTypes = {
      source: prop_types_default.a.object.isRequired,
      whisper: prop_types_default.a.shape({
        type: prop_types_default.a.oneOf(["universal"]).isRequired,
        content: prop_types_default.a.shape({
          id: prop_types_default.a.string.isRequired,
          label: prop_types_default.a.string.isRequired,
          style: prop_types_default.a.object.isRequired,
          components: prop_types_default.a.array.isRequired
        }).isRequired,
        loopId: prop_types_default.a.string.isRequired,
        visible: prop_types_default.a.bool.isRequired,
        whisperId: prop_types_default.a.string.isRequired,
        createdAt: prop_types_default.a.string.isRequired
      }).isRequired
    };
    var universal = UniversalContent;
    const WhisperConfirm = ({content, whisperId}) => {
      const {rejectLabel, resolveLabel, style} = content;
      const ResolveButton = Object(react["useMemo"])(() => Object(withStyles["a"])((theme) => ({
        root: {
          color: theme.palette.getContrastText(style.highlightColor),
          backgroundColor: style.highlightColor,
          "&:hover": {
            backgroundColor: style.primaryColor
          }
        }
      }))(Button["a"]), [style]);
      const RejectButton = Object(react["useMemo"])(() => Object(withStyles["a"])((theme) => {
        const color = theme.palette.getContrastText(style.backgroundColor);
        return {
          root: {
            color,
            borderColor: color,
            "&:hover": {
              backgroundColor: style.highlightColor,
              color: theme.palette.getContrastText(style.highlightColor)
            }
          }
        };
      })(Button["a"]), [style]);
      const onClick = (value) => () => {
        Object(messaging["W"])(whisperId, "confirm", {
          resolved: value
        }).catch(console.error);
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: views_style["confirmContainer"]
      }, rejectLabel && !Object(isEmpty["a"])(rejectLabel) && /* @__PURE__ */ react_default.a.createElement(RejectButton, {
        variant: "outlined",
        onClick: onClick(false)
      }, rejectLabel), /* @__PURE__ */ react_default.a.createElement(ResolveButton, {
        variant: "contained",
        onClick: onClick(true)
      }, resolveLabel));
    };
    WhisperConfirm.propTypes = {
      content: prop_types_default.a.object.isRequired,
      rejectLabel: prop_types_default.a.string,
      resolveLabel: prop_types_default.a.string,
      style: prop_types_default.a.object.isRequired,
      whisperId: prop_types_default.a.string.isRequired
    };
    WhisperConfirm.defaultProps = {
      rejectLabel: null,
      resolveLabel: null
    };
    var views_confirm = WhisperConfirm;
    var pipe = __webpack_require__(360);
    var mapObjIndexed = __webpack_require__(1330);
    var assoc = __webpack_require__(1355);
    var es_values = __webpack_require__(1329);
    var sortWith = __webpack_require__(1356);
    var ascend = __webpack_require__(1357);
    var prop = __webpack_require__(66);
    const mapToArray = Object(pipe["a"])(Object(mapObjIndexed["a"])((val, key) => Object(assoc["a"])("key", key, val)), es_values["a"], Object(sortWith["a"])([Object(ascend["a"])(Object(prop["a"])("order")), Object(ascend["a"])(Object(prop["a"])("label"))]));
    const Option = ({element, whisperId, cardContainer}) => {
      const {key, label} = element;
      const onClick = () => {
        cardContainer.current.scroll(0, 0);
        Object(messaging["W"])(whisperId, "disambiguation", {
          key
        }).catch(console.error);
        Object(tracking["h"])({
          category: tracking["d"],
          action: "Scroll to Top",
          label: "disambiguation link click"
        });
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: views_style["dabOption"],
        onClick,
        role: "button",
        tabIndex: "-1",
        "data-option": true
      }, label);
    };
    Option.propTypes = {
      element: prop_types_default.a.object.isRequired,
      whisperId: prop_types_default.a.string.isRequired,
      cardContainer: prop_types_default.a.oneOfType([
        prop_types_default.a.func,
        prop_types_default.a.shape({current: prop_types_default.a.instanceOf(Element)})
      ])
    };
    Option.defaultProps = {};
    const Text = ({element, index}) => {
      const {body} = element;
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: index !== 0 ? views_style["dabMarkdown"] : null,
        "data-text": true
      }, /* @__PURE__ */ react_default.a.createElement(components_markdown["a"], {
        source: body
      }));
    };
    Text.propTypes = {
      element: prop_types_default.a.object.isRequired,
      index: prop_types_default.a.number.isRequired
    };
    Text.defaultProps = {};
    const WhisperDisambiguation = ({content, whisperId, cardContainer}) => {
      const {elements: passedElements} = content;
      const [elements, setElements] = Object(react["useState"])([]);
      Object(react["useEffect"])(() => {
        setElements(mapToArray(passedElements));
      }, [passedElements]);
      const renderElement = (element, index) => {
        switch (element.type) {
          case "option":
            return /* @__PURE__ */ react_default.a.createElement(Option, {
              key: element.key,
              element,
              whisperId,
              cardContainer
            });
          case "text":
            return /* @__PURE__ */ react_default.a.createElement(Text, {
              key: element.key,
              element,
              index
            });
          default:
            return null;
        }
      };
      return elements.map(renderElement);
    };
    WhisperDisambiguation.propTypes = {
      content: prop_types_default.a.object.isRequired,
      whisperId: prop_types_default.a.string.isRequired,
      cardContainer: prop_types_default.a.object.isRequired
    };
    WhisperDisambiguation.defaultProps = {};
    var disambiguation = WhisperDisambiguation;
    var map = __webpack_require__(362);
    var js = __webpack_require__(319);
    var js_default = /* @__PURE__ */ __webpack_require__.n(js);
    var index_umd = __webpack_require__(110);
    const markdown_tooltipStyles = Object(makeStyles["a"])(() => ({
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
        return /* @__PURE__ */ react_default.a.createElement(Tooltip["a"], {
          title: tooltip,
          placement: "bottom-start",
          classes: markdown_tooltipStyles()
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
    var views_form_defProp = Object.defineProperty;
    var views_form_hasOwnProp = Object.prototype.hasOwnProperty;
    var views_form_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var views_form_propIsEnum = Object.prototype.propertyIsEnumerable;
    var views_form_defNormalProp = (obj, key, value) => key in obj ? views_form_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var views_form_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (views_form_hasOwnProp.call(b, prop2))
          views_form_defNormalProp(a, prop2, b[prop2]);
      if (views_form_getOwnPropSymbols)
        for (var prop2 of views_form_getOwnPropSymbols(b)) {
          if (views_form_propIsEnum.call(b, prop2))
            views_form_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const resolveStyles = Object(makeStyles["a"])({
      root: {
        color: "white",
        backgroundColor: "#651FFF",
        "&:hover": {
          backgroundColor: "#410099"
        },
        "&:active": {
          backgroundColor: "#B388FF"
        }
      }
    });
    const rejectStyles = Object(makeStyles["a"])({
      root: {
        borderColor: "#651FFF",
        color: "#651FFF",
        "&:hover": {
          borderColor: "#410099",
          color: "#410099"
        },
        "&:active": {
          borderColor: "#B388FF",
          color: "#B388FF"
        }
      }
    });
    const WhisperForm = ({content, whisperId}) => {
      const {inputs, cancelLabel, style, submitLabel} = content;
      const [values, setValues] = Object(react["useState"])({});
      Object(react["useEffect"])(() => {
        const nextValues = {};
        Object.entries(inputs).forEach(([key, input]) => {
          if (input.value && input.value !== "") {
            nextValues[key] = input.value;
          }
        });
        setValues(nextValues);
      }, []);
      const onReset = () => {
        Object(messaging["W"])(whisperId, "formSubmit", {
          submitted: false,
          outputs: {}
        }).then(() => setValues({})).catch(console.error);
      };
      const onClick = () => {
        Object(messaging["W"])(whisperId, "formSubmit", {
          submitted: true,
          outputs: Object(mapObjIndexed["a"])((value) => ({
            value
          }), values)
        }).catch(console.error);
      };
      const setFormValue = (key) => (value) => {
        setValues((prev) => {
          const newValues = views_form_assign(views_form_assign({}, prev), {
            [key]: value
          });
          Object(messaging["W"])(whisperId, "formUpdate", {
            outputs: Object(mapObjIndexed["a"])((v) => ({
              value: v
            }), newValues)
          }).catch(console.error);
          return newValues;
        });
      };
      const inputsView = (input) => {
        if (input.type === "checkbox") {
          return /* @__PURE__ */ react_default.a.createElement(views_checkbox, {
            key: input.name,
            label: input.label,
            set: setFormValue(input.name),
            style: {marginBottom: "0.5rem"},
            theme: style,
            tooltip: input.tooltip,
            value: values[input.name]
          });
        }
        if (input.type === "radio") {
          return /* @__PURE__ */ react_default.a.createElement(views_radio, {
            key: input.name,
            label: input.label,
            options: input.options,
            set: setFormValue(input.name),
            style: {marginBottom: "0.5rem"},
            theme: style,
            tooltip: input.tooltip,
            value: values[input.name] || ""
          });
        }
        if (input.type === "select") {
          return /* @__PURE__ */ react_default.a.createElement(views_select, {
            key: input.name,
            label: input.label,
            options: input.options,
            set: setFormValue(input.name),
            style: {marginBottom: "0.5rem"},
            theme: style,
            tooltip: input.tooltip,
            value: values[input.name] || ""
          });
        }
        if (input.type === "markdown") {
          return /* @__PURE__ */ react_default.a.createElement(form_markdown, {
            key: input.name,
            label: input.label,
            set: setFormValue(input.name),
            style: {marginBottom: "0.5rem"},
            theme: style,
            tooltip: input.tooltip,
            value: values[input.name] || ""
          });
        }
        return /* @__PURE__ */ react_default.a.createElement(views_text, {
          key: input.name,
          inputType: input.type,
          label: input.label,
          set: setFormValue(input.name),
          style: {marginBottom: "0.5rem"},
          theme: style,
          tooltip: input.tooltip,
          value: values[input.name] || ""
        });
      };
      const renderInputs = Object(pipe["a"])(Object(mapObjIndexed["a"])((val, key) => Object(assoc["a"])("name", key, val)), es_values["a"], Object(sortWith["a"])([Object(ascend["a"])(Object(prop["a"])("order")), Object(ascend["a"])(Object(prop["a"])("label"))]), Object(map["a"])(inputsView));
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", {
        className: views_style["inputContainer"]
      }, renderInputs(inputs)), /* @__PURE__ */ react_default.a.createElement("div", {
        className: views_style["confirmContainer"]
      }, /* @__PURE__ */ react_default.a.createElement(Button["a"], {
        className: rejectStyles().root,
        variant: "outlined",
        onClick: onReset
      }, cancelLabel), /* @__PURE__ */ react_default.a.createElement(Button["a"], {
        className: resolveStyles().root,
        variant: "contained",
        onClick
      }, submitLabel)));
    };
    WhisperForm.propTypes = {
      cancelLabel: prop_types_default.a.string,
      content: prop_types_default.a.object.isRequired,
      whisperId: prop_types_default.a.string.isRequired,
      inputs: prop_types_default.a.array.isRequired,
      style: prop_types_default.a.object.isRequired,
      submitLabel: prop_types_default.a.string
    };
    WhisperForm.defaultProps = {
      cancelLabel: null,
      submitLabel: null
    };
    var views_form = WhisperForm;
    var list_styles = __webpack_require__(744);
    const list_List = ({elements, source}) => {
      const renderElement = (element, index) => {
        switch (element.type) {
          case "message":
            return /* @__PURE__ */ react_default.a.createElement(views_message, {
              key: index,
              element
            });
          case "pair":
            return /* @__PURE__ */ react_default.a.createElement(pair, {
              key: index,
              element,
              source
            });
          case "divider":
            return /* @__PURE__ */ react_default.a.createElement(views_divider, {
              key: index,
              element
            });
          case "link":
            return /* @__PURE__ */ react_default.a.createElement(universal_views_link, {
              key: index,
              element
            });
          default:
            return null;
        }
      };
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: list_styles["list"]
      }, elements.map(renderElement));
    };
    list_List.propTypes = {
      elements: prop_types_default.a.object.isRequired,
      source: prop_types_default.a.object.isRequired
    };
    var components_list = list_List;
    const list_mapToArray = Object(pipe["a"])(Object(mapObjIndexed["a"])((val, key) => Object(assoc["a"])("key", key, val)), es_values["a"], Object(sortWith["a"])([Object(ascend["a"])(Object(prop["a"])("order")), Object(ascend["a"])(Object(prop["a"])("label"))]));
    const WhisperList = ({content, source}) => {
      const {elements} = content;
      const [expanded, setExpanded] = Object(react["useState"])(false);
      const primaryElems = list_mapToArray(elements).filter((x) => !x.extra);
      const secondaryElems = list_mapToArray(elements).filter((x) => x.extra);
      const onClick = () => {
        Object(tracking["h"])({
          category: tracking["f"],
          action: "Whisper content",
          label: expanded ? "collapsed" : "expanded"
        });
        return setExpanded(!expanded);
      };
      return /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(components_list, {
        elements: primaryElems,
        source
      }), secondaryElems.length > 0 && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement(AnimateHeight_default.a, {
        duration: 500,
        height: expanded ? "auto" : 0
      }, /* @__PURE__ */ react_default.a.createElement(components_list, {
        elements: secondaryElems,
        source
      })), /* @__PURE__ */ react_default.a.createElement(expandButton, {
        expanded,
        onClick
      })));
    };
    WhisperList.propTypes = {
      content: prop_types_default.a.object.isRequired,
      source: prop_types_default.a.object.isRequired
    };
    var views_list = WhisperList;
    var content_style = __webpack_require__(745);
    var content_defProp = Object.defineProperty;
    var content_hasOwnProp = Object.prototype.hasOwnProperty;
    var content_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var content_propIsEnum = Object.prototype.propertyIsEnumerable;
    var content_defNormalProp = (obj, key, value) => key in obj ? content_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var content_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (content_hasOwnProp.call(b, prop2))
          content_defNormalProp(a, prop2, b[prop2]);
      if (content_getOwnPropSymbols)
        for (var prop2 of content_getOwnPropSymbols(b)) {
          if (content_propIsEnum.call(b, prop2))
            content_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    const Content = ({
      source,
      whisper,
      cardContainer,
      "data-testid": dataTestId
    }) => {
      const {content, type} = whisper;
      const {markdown, style} = content;
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: content_style["container"],
        "data-testid": dataTestId
      }, whisper.type !== WHISPER_TYPE_UNIVERSAL && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, markdown && !Object(isEmpty["a"])(markdown) && /* @__PURE__ */ react_default.a.createElement(components_markdown["a"], {
        source: markdown,
        highlightColor: style.highlightColor
      }), type === "form" && /* @__PURE__ */ react_default.a.createElement(views_form, content_assign({}, whisper)), type === "confirm" && /* @__PURE__ */ react_default.a.createElement(views_confirm, content_assign({}, whisper)), type === "disambiguation" && /* @__PURE__ */ react_default.a.createElement(disambiguation, content_assign(content_assign({}, whisper), {
        cardContainer
      })), type === "list" && /* @__PURE__ */ react_default.a.createElement(views_list, content_assign(content_assign({}, whisper), {
        source
      }))), whisper.type === WHISPER_TYPE_UNIVERSAL && /* @__PURE__ */ react_default.a.createElement(universal, {
        source,
        whisper
      }));
    };
    Content.propTypes = {
      source: prop_types_default.a.object.isRequired,
      whisper: prop_types_default.a.object.isRequired,
      cardContainer: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    Content.defaultProps = {};
    var components_content = Content;
    var whisper_style = __webpack_require__(471);
    const Whisper = ({
      index,
      removeByIndex,
      whisper,
      cardContainer,
      "data-testid": dataTestId
    }) => {
      const {icon, label, style} = whisper.content;
      const {backgroundColor, primaryColor} = style;
      const [source, setSource] = Object(react["useState"])(null);
      Object(react["useEffect"])(() => {
        Object(messaging["r"])(whisper.loopId).then((result) => setSource(result)).catch(() => setSource(false));
      }, [whisper.loopId]);
      Object(react["useEffect"])(() => {
        if (source) {
          Object(tracking["h"])({
            category: tracking["f"],
            action: "Whisper triggered",
            label: source.name || "UNKNOWN"
          });
        }
      }, [source]);
      const onClose = () => {
        var _a;
        Object(tracking["h"])({
          category: tracking["f"],
          action: "Whisper deleted",
          label: ((_a = whisper == null ? void 0 : whisper.source) == null ? void 0 : _a.name) || "UNKNOWN"
        });
        return removeByIndex(index);
      };
      const onWhisperClick = () => {
        var _a;
        return Object(tracking["h"])({
          category: tracking["f"],
          action: "Whisper clicked",
          label: ((_a = whisper == null ? void 0 : whisper.source) == null ? void 0 : _a.name) || "UNKNOWN"
        });
      };
      if (source === null)
        return null;
      return /* @__PURE__ */ react_default.a.createElement(ThemeProvider["a"], {
        theme: {theme: style}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: {display: whisper.visible ? "block" : "none"},
        className: `whisper ${whisper_style["container"]}`,
        onClick: onWhisperClick,
        role: "presentation"
      }, /* @__PURE__ */ react_default.a.createElement(card, {
        closeOnClick: onClose,
        icon,
        label,
        styleContainer: {backgroundColor, color: primaryColor},
        source,
        createdAt: whisper.createdAt,
        "data-testid": dataTestId
      }, /* @__PURE__ */ react_default.a.createElement(components_content, {
        source,
        whisper,
        cardContainer,
        "data-testid": `${dataTestId}-content`
      }))));
    };
    Whisper.propTypes = {
      index: prop_types_default.a.number.isRequired,
      removeByIndex: prop_types_default.a.func.isRequired,
      whisper: prop_types_default.a.object.isRequired,
      cardContainer: prop_types_default.a.object.isRequired,
      "data-testid": prop_types_default.a.string
    };
    var sidebar_whisper = Whisper;
    var reject = __webpack_require__(361);
    var mergeAll = __webpack_require__(1371);
    var v4 = __webpack_require__(1360);
    var fetch2 = __webpack_require__(19);
    var updateLoops_defProp = Object.defineProperty;
    var updateLoops_hasOwnProp = Object.prototype.hasOwnProperty;
    var updateLoops_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var updateLoops_propIsEnum = Object.prototype.propertyIsEnumerable;
    var updateLoops_defNormalProp = (obj, key, value) => key in obj ? updateLoops_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var updateLoops_assign = (a, b) => {
      for (var prop2 in b || (b = {}))
        if (updateLoops_hasOwnProp.call(b, prop2))
          updateLoops_defNormalProp(a, prop2, b[prop2]);
      if (updateLoops_getOwnPropSymbols)
        for (var prop2 of updateLoops_getOwnPropSymbols(b)) {
          if (updateLoops_propIsEnum.call(b, prop2))
            updateLoops_defNormalProp(a, prop2, b[prop2]);
        }
      return a;
    };
    var updateLoops_async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject2) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        };
        var step = (result) => {
          return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    let interval;
    let loopsAlreadyIncludedInSession = {};
    const processLoopUpdate = (osName, addNewWhisper) => () => {
      Object(messaging["f"])().then((installedLoops) => updateLoops_async(void 0, null, function* () {
        try {
          if (sessionStorage.getItem("csrfToken") === null) {
            try {
              const {csrfToken} = yield Object(fetch2["a"])(`/auth/getOrCreateUserAccount`);
              sessionStorage.setItem("csrfToken", csrfToken);
            } catch (error) {
              console.error("failed to retrieve token", error);
            }
          }
          const loops = Object(map["a"])((loop) => ({
            appId: loop.appId,
            semver: loop.specification === "1" ? {
              mac: loop.semverMac,
              windows: loop.semverWindows
            } : loop.semver
          }), Object(reject["a"])(Object(propEq["a"])("local", true), installedLoops));
          let loopsToUpdate = yield Object(fetch2["a"])("/library/loops/outdated", "POST", {
            osName,
            loops
          });
          loopsToUpdate = Object(reject["a"])(({appId, version}) => loopsAlreadyIncludedInSession[appId] && loopsAlreadyIncludedInSession[appId] === version, loopsToUpdate);
          if (loopsToUpdate.length > 0) {
            const id = Object(v4["a"])();
            addNewWhisper({
              type: "universal",
              content: {
                id,
                label: "Loop updates are available",
                components: [
                  {
                    type: CONTENT_TYPE_MARKDOWN,
                    body: "The Loop will automatically restart when the update is complete."
                  },
                  {
                    type: CONTENT_TYPE_LOOP_LIST,
                    loops: loopsToUpdate
                  }
                ],
                style: {
                  backgroundColor: "#ffffff",
                  highlightColor: "#651fff",
                  primaryColor: "rgba(0, 0, 0, 0.87)"
                }
              },
              createdAt: moment_default()().format(),
              loopId: LOOP_UPDATE_ID,
              whisperId: id
            });
            loopsAlreadyIncludedInSession = updateLoops_assign(updateLoops_assign({}, loopsAlreadyIncludedInSession), Object(mergeAll["a"])(loopsToUpdate.map((loop) => ({[loop.appId]: loop.version}))));
          }
        } catch (error) {
          console.error(error);
        }
      })).catch(console.error);
    };
    const startLoopUpdateInterval = (osName, addNewWhisper) => {
      if (osName) {
        interval = setInterval(processLoopUpdate(osName, addNewWhisper), 15 * 60 * 1e3);
        setTimeout(processLoopUpdate(osName, addNewWhisper), 5e3);
      } else {
        loopsAlreadyIncludedInSession = {};
        clearInterval(interval);
      }
      return () => {
        loopsAlreadyIncludedInSession = {};
        clearInterval(interval);
      };
    };
    var updateLoops = {
      startLoopUpdateInterval
    };
    const ErrorFallback = ({error, resetErrorBoundary}) => {
      const [detailsOpen, setDetailsOpen] = Object(react["useState"])(false);
      return /* @__PURE__ */ react_default.a.createElement("div", {
        className: `whisper ${whisper_style["container"]}`
      }, /* @__PURE__ */ react_default.a.createElement(card, {
        closeOnClick: resetErrorBoundary,
        label: "Something went wrong",
        styleContainer: {backgroundColor: "#fff", color: "#666"},
        source: {colorStrip: "red"},
        createdAt: moment_default()()
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: {padding: "0 0.9rem 0.9rem", width: "100%"}
      }, /* @__PURE__ */ react_default.a.createElement("p", null, "This information could not be displayed correctly."), !detailsOpen && /* @__PURE__ */ react_default.a.createElement("div", {
        role: "button",
        tabIndex: "-1",
        onClick: () => setDetailsOpen(true),
        style: {cursor: "pointer", textAlign: "center"}
      }, "Show issue"), detailsOpen && /* @__PURE__ */ react_default.a.createElement("p", null, error.message))));
    };
    ErrorFallback.propTypes = {
      error: prop_types_default.a.object.isRequired,
      resetErrorBoundary: prop_types_default.a.func
    };
    ErrorFallback.defaultProps = {
      resetErrorBoundary: null
    };
    var errorFallback = ErrorFallback;
    var sidebar_styles = ({theme}) => ({
      container: {
        backgroundColor: theme.background.primary,
        color: theme.text.card,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "stretch",
        transition: `opacity 500ms ${utils["c"]} 500ms`,
        width: 400
      },
      content: {
        margin: "auto",
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        overflowY: "hidden",
        position: "relative",
        width: "100%"
      },
      cards: {
        flex: "1 1 auto",
        overflowX: "hidden",
        overflowY: "auto",
        scrollBehavior: "smooth"
      },
      whisperListEnd: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "0.5rem",
        paddingBottom: "0.75rem"
      },
      whisperListEndMsg: {
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem"
      }
    });
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
    const component_theme = Object(createMuiTheme["a"])(sidebar_theme);
    let windowSizeTimeout;
    let windowCloseTimeout;
    const SidebarScreen = () => {
      const {osName, setConfig} = Object(config["e"])();
      const {
        [context_settings["e"]]: windowPlacement,
        [context_settings["b"]]: hideSidebar,
        set: setSettings
      } = Object(context_settings["h"])();
      const {sidebarOpen, set} = Object(react["useContext"])(global["a"]);
      const {
        closeSidenote,
        openEditForm: openSidenoteEditForm,
        updateNoteList
      } = Object(react["useContext"])(sidenote["a"]);
      const [confirmOpen, setConfirmOpen] = Object(react["useState"])(false);
      const forceClose = Object(react["useRef"])(false);
      const closeWindow = () => {
        forceClose.current = true;
        window.close();
      };
      const [width, setWidth] = Object(react["useState"])(null);
      const [data, setData] = Object(react["useState"])([]);
      const [whisperDisplay, setWhisperDisplay] = Object(react["useState"])(WHISPER_DISPLAY_LIMIT_INIT);
      const [guideVisible, setGuideVisible] = Object(react["useState"])(false);
      const [snackbarOpen, setSnackbarOpen] = Object(react["useState"])(false);
      const [snackbarData, setSnackbarData] = Object(react["useState"])(null);
      const [showNewWhisperBadge, setShowNewWhisperBadge] = Object(react["useState"])(false);
      const [showClearWhispersBtn, setShowClearWhispersBtn] = Object(react["useState"])(false);
      const [externalSearchMetadata, setExternalSearchMetadata] = Object(react["useState"])(null);
      const cardContainer = Object(react["useRef"])(null);
      const [showSubmenu, setShowSubmenu] = Object(react["useState"])(true);
      const [
        {cards, container, content, whisperListEnd, whisperListEndMsg}
      ] = useTheme(sidebar_styles);
      useGlobalShortcuts();
      const openSnackbar = (payload) => {
        if (payload.text) {
          setSnackbarData(payload);
        } else {
          setSnackbarData({text: payload});
        }
        setSnackbarOpen(true);
      };
      const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setSnackbarOpen(false);
        setTimeout(() => {
          setSnackbarData(null);
        }, 3e3);
      };
      const renderSnackbarActions = () => /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        size: "small",
        "aria-label": "close",
        color: "inherit",
        onClick: handleSnackbarClose
      }, /* @__PURE__ */ react_default.a.createElement(Close_default.a, {
        fontSize: "small"
      }));
      const sendWhisperCloseMessage = (whisper) => {
        if (!SIDEBAR_LOOPS.includes(whisper.loopId)) {
          Object(messaging["W"])(whisper.whisperId, "close", {}).catch(console.error);
        }
      };
      const removeByIndex = (index) => setData((prevData) => {
        sendWhisperCloseMessage(prevData[index]);
        return Object(remove["a"])(index, 1, prevData);
      });
      const removeById = (whisper) => {
        return setData((prevData) => {
          const whisperIndex = Object(findIndex["a"])(Object(propEq["a"])("whisperId", whisper.whisperId), prevData);
          let newData = prevData;
          if (whisperIndex !== -1) {
            sendWhisperCloseMessage(whisper);
            newData = Object(remove["a"])(whisperIndex, 1, prevData);
          }
          return newData;
        });
      };
      const clearAllWhispers = () => {
        Object(tracking["h"])({
          category: tracking["f"],
          action: "Whisper deleted",
          label: "Clear all",
          value: data.length
        });
        data.forEach((whisper) => {
          sendWhisperCloseMessage(whisper);
        });
        setWhisperDisplay(WHISPER_DISPLAY_LIMIT_INIT);
        return setData([]);
      };
      Object(react["useEffect"])(() => {
        setShowClearWhispersBtn(!!data.length);
      }, [data.length]);
      const purgeWhipserList = (list) => {
        if (list.length >= WHISPER_STORAGE_LIMIT) {
          const whipserToRemove = list.pop();
          sendWhisperCloseMessage(whipserToRemove);
          return purgeWhipserList(list);
        }
        return list;
      };
      const addNewWhisper = (payload) => {
        const whisperPayload = component_assign(component_assign({}, payload), {
          visible: true
        });
        whisperPayload.content.style = {
          backgroundColor: colors["p"],
          highlightColor: colors["e"],
          primaryColor: colors["a"]
        };
        setGuideVisible(false);
        setData((array) => {
          const index = Object(findIndex["a"])(Object(propEq["a"])("whisperId", whisperPayload.whisperId), array);
          if (index === -1) {
            setShowNewWhisperBadge(true);
            const purgedList = purgeWhipserList(array);
            return [whisperPayload, ...purgedList];
          }
          return Object(es_update["a"])(index, whisperPayload, array);
        });
      };
      const updateWhisper = (payload) => {
        const whisperPayload = component_assign(component_assign({}, payload), {
          visible: true
        });
        whisperPayload.content.style = {
          backgroundColor: colors["p"],
          highlightColor: colors["e"],
          primaryColor: colors["a"]
        };
        setData((array) => {
          let updatedArray = array;
          const index = Object(findIndex["a"])(Object(propEq["a"])("whisperId", whisperPayload.whisperId), array);
          if (index === -1) {
            console.error("Could not update whipser: Does not exist ID: ", whisperPayload.whisperId);
          } else {
            updatedArray = Object(es_update["a"])(index, whisperPayload, array);
          }
          return updatedArray;
        });
      };
      Object(react["useEffect"])(() => startLoopUpdateInterval(osName, addNewWhisper), [osName]);
      const onReady = () => {
        window.onbeforeunload = () => {
          let ret;
          if (!forceClose.current && Object(messaging["o"])()) {
            setConfirmOpen(true);
            ret = false;
          }
          return ret;
        };
        Object(messaging["j"])().then((result) => {
          if (!result) {
            return;
          }
          setConfig(result);
        }).catch(console.error);
        Object(messaging["b"])().then(({loopContractVersion}) => {
          if (!loopContractVersion) {
            return;
          }
          setConfig({loopContractVersion});
        }).catch(console.error);
        Object(messaging["i"])().then((result) => {
          if (!result) {
            return;
          }
          setSettings(result);
        }).catch(console.error);
        Object(messaging["u"])("newWhisper", addNewWhisper).catch(console.error);
        Object(messaging["u"])("updateWhisper", updateWhisper).catch(console.error);
        Object(messaging["u"])("closeWhisper", (payload) => {
          removeById(payload);
        }).catch(console.error);
        Object(messaging["u"])("showGettingStarted", () => {
          setGuideVisible(true);
        }).catch(console.error);
        Object(messaging["u"])("openNoteEdit", (note) => {
          openSidenoteEditForm(note);
        }).catch(console.error);
        Object(messaging["u"])("updateNoteList", (note) => {
          updateNoteList(note);
        }).catch(console.error);
        Object(messaging["u"])("closeSidenote", () => {
          closeSidenote();
        }).catch(console.error);
        Object(messaging["u"])("modeUpdate", ({mode}) => {
          if (mode === SIDEBAR_MODE_CLOSED) {
            set("sidebarOpen")(false);
            clearTimeout(windowSizeTimeout);
          } else {
            set("sidebarOpen")(true);
            clearTimeout(windowSizeTimeout);
            windowSizeTimeout = setTimeout(() => setWidth(window.visualViewport.width), 1e3);
          }
        }).catch(console.error);
        Object(messaging["u"])("setWidth", () => {
          setWidth(window.visualViewport.width);
        }).catch(console.error);
        Object(messaging["u"])("externalSearchMetadata", (payload) => {
          setExternalSearchMetadata(payload);
        }).catch(console.error);
      };
      const hideGuide = () => setGuideVisible(false);
      const downHandler = (event) => {
        const {key, metaKey, shiftKey} = event;
        if (metaKey && shiftKey && (key === "0" || key === "-") || metaKey && shiftKey && key === "=") {
          setTimeout(() => {
            setWidth(window.visualViewport.width);
          }, 50);
        }
      };
      const onMouseLeave = () => {
        clearTimeout(windowCloseTimeout);
        windowCloseTimeout = setTimeout(() => {
          Object(messaging["ab"])(false).catch(() => set("sidebarOpen")(false));
        }, parseInt(hideSidebar, 10));
      };
      const onMouseEnter = () => {
        clearTimeout(windowCloseTimeout);
      };
      const startWhisperExpireCheck = () => {
        const intervalMs = 60 * 1e3;
        return setInterval(() => {
          const twelveHoursAgo = moment_default()().add(-12, "hour");
          setData((prevData) => prevData.filter((w) => moment_default()(w.createdAt).isAfter(twelveHoursAgo)));
        }, intervalMs);
      };
      Object(react["useEffect"])(() => {
        Object(tracking["g"])();
        const expireIntervalId = startWhisperExpireCheck();
        document.addEventListener("astilectron-ready", onReady);
        window.addEventListener("keydown", downHandler);
        return () => {
          clearInterval(expireIntervalId);
          document.removeEventListener("astilectron-ready", onReady);
          window.removeEventListener("keydown", downHandler);
        };
      }, []);
      Object(react["useEffect"])(() => {
        if (sidebarOpen && hideSidebar && hideSidebar !== context_settings["a"]) {
          document.addEventListener("mouseenter", onMouseEnter);
          document.addEventListener("mouseleave", onMouseLeave);
        } else if (!sidebarOpen || hideSidebar && hideSidebar === context_settings["a"]) {
          clearTimeout(windowCloseTimeout);
          document.removeEventListener("mouseenter", onMouseEnter);
          document.removeEventListener("mouseleave", onMouseLeave);
        }
        return () => {
          document.removeEventListener("mouseenter", onMouseEnter);
          document.removeEventListener("mouseleave", onMouseLeave);
        };
      }, [sidebarOpen, hideSidebar]);
      Object(react["useEffect"])(() => {
        if (data.length === 0) {
          setShowNewWhisperBadge(false);
        }
      }, [data.length]);
      const updateWhispersToDisplay = () => {
        setData((prevData) => {
          return prevData.map((d, i) => component_assign(component_assign({}, d), {
            visible: i <= whisperDisplay
          }));
        });
      };
      const loadMoreWhispers = () => {
        setWhisperDisplay((prevDisplay) => prevDisplay < WHISPER_STORAGE_LIMIT ? prevDisplay + WHISPER_INCREMENT_AMOUNT : prevDisplay);
        updateWhispersToDisplay();
      };
      const observeListStart = () => {
        if (whisperDisplay !== WHISPER_DISPLAY_LIMIT_INIT) {
          setWhisperDisplay(WHISPER_DISPLAY_LIMIT_INIT);
          updateWhispersToDisplay();
        }
      };
      useIntersection("#whisperListStart", observeListStart, [whisperDisplay]);
      const observeListEnd = () => {
        if (data.length > whisperDisplay) {
          loadMoreWhispers();
        }
      };
      useIntersection("#whisperListEnd", observeListEnd, []);
      const scrollHandler = (event) => {
        if (!showSubmenu && event.target.scrollTop <= 0) {
          setShowSubmenu(true);
        } else if (showSubmenu && event.target.scrollTop >= 1) {
          setShowSubmenu(false);
        }
      };
      Object(react["useEffect"])(() => {
        var _a;
        (_a = cardContainer.current) == null ? void 0 : _a.addEventListener("scroll", scrollHandler);
        return () => {
          var _a2;
          (_a2 = cardContainer.current) == null ? void 0 : _a2.removeEventListener("scroll", scrollHandler);
        };
      }, [cardContainer.current, showSubmenu]);
      return /* @__PURE__ */ react_default.a.createElement(ThemeProvider["a"], {
        theme: component_theme
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: component_assign(component_assign(component_assign(component_assign({}, container), {
          transition: "300ms width ease"
        }), width ? {width: width - 2} : {}), windowPlacement === WINDOW_PLACEMENT_RIGHT || !sidebarOpen ? {marginLeft: "2px"} : {marginLeft: 0})
      }, /* @__PURE__ */ react_default.a.createElement(sidebar_header, {
        cardContainer,
        externalSearchMetadata,
        showNewWhisperBadge,
        setExternalSearchMetadata,
        setShowNewWhisperBadge,
        showClearWhispersBtn,
        clearAllWhispers
      }), /* @__PURE__ */ react_default.a.createElement("div", {
        style: content,
        id: "sidebar"
      }, /* @__PURE__ */ react_default.a.createElement(AnimateHeight_default.a, {
        duration: 500,
        height: showSubmenu ? 40 : 0,
        style: {flexShrink: 0}
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: {paddingTop: "40px", background: "none"}
      })), /* @__PURE__ */ react_default.a.createElement(sidebar_sidenote, {
        "data-testid": "sidenote"
      }), (guideVisible || data.length === 0) && /* @__PURE__ */ react_default.a.createElement(guide, {
        hideGuide
      }), !guideVisible && data.length > 0 && /* @__PURE__ */ react_default.a.createElement("div", {
        style: cards,
        ref: cardContainer,
        "data-testid": "whisperlist"
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        id: "whisperListStart"
      }), data.map((whisper, index) => /* @__PURE__ */ react_default.a.createElement(react_error_boundary_umd["ErrorBoundary"], {
        key: whisper.whisperId,
        FallbackComponent: errorFallback,
        onReset: () => {
          removeByIndex(index);
        }
      }, /* @__PURE__ */ react_default.a.createElement(sidebar_whisper, component_assign(component_assign({}, {
        index,
        cardContainer,
        openSnackbar,
        removeByIndex,
        whisper
      }), {
        "data-testid": `whisperlist-whisper${index}`
      })))), /* @__PURE__ */ react_default.a.createElement("div", {
        id: "whisperListEnd",
        style: whisperListEnd
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: whisperListEndMsg
      }, data.length === WHISPER_STORAGE_LIMIT && /* @__PURE__ */ react_default.a.createElement("span", null, "Olive displays your ", WHISPER_STORAGE_LIMIT, " most recent whispers."))))), /* @__PURE__ */ react_default.a.createElement(navigation, null), /* @__PURE__ */ react_default.a.createElement(Snackbar["a"], {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        open: snackbarOpen,
        autoHideDuration: (snackbarData == null ? void 0 : snackbarData.duration) === null ? null : 6e3,
        onClose: handleSnackbarClose
      }, !(snackbarData == null ? void 0 : snackbarData.severity) ? /* @__PURE__ */ react_default.a.createElement(SnackbarContent["a"], {
        message: snackbarData == null ? void 0 : snackbarData.text,
        action: renderSnackbarActions()
      }) : /* @__PURE__ */ react_default.a.createElement(Alert["a"], {
        elevation: 6,
        variant: "filled",
        severity: snackbarData.severity,
        action: renderSnackbarActions()
      }, snackbarData.text)), /* @__PURE__ */ react_default.a.createElement(confirmDialog["a"], {
        open: confirmOpen,
        setOpen: setConfirmOpen,
        onConfirm: closeWindow
      }, "Are you sure you want to close this window?")));
    };
    var sidebar_component = SidebarScreen;
    var react_mde_all = __webpack_require__(640);
    var sidebar_style = __webpack_require__(1257);
    var tailwind_styles = __webpack_require__(497);
    const sidebar_Container = Object(app["a"])(sidebar_component);
    react_dom_default.a.render(/* @__PURE__ */ react_default.a.createElement(sidebar_Container, null), document.getElementById("app"));
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
  142: function(module, exports, __webpack_require__) {
    module.exports = {contentItem: "universal--contentItem--3OAGpKNt", link: "universal--link--3IPdVy2W", select: "universal--select--2IPK4em3"};
  },
  144: function(module, exports, __webpack_require__) {
    module.exports = {subheader: "subheader--subheader--mj5JwkYO", up: "subheader--up--3yC114gL", transparent: "subheader--transparent--1WiTd1WQ", animateBounce: "subheader--animateBounce--1orKXzUe", delay100: "subheader--delay100--l53X1HRK", delay200: "subheader--delay200--3M22Qux5"};
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
  304: function(module, exports, __webpack_require__) {
    module.exports = {container: "markdown--container--3P-IkoDQ", heading: "markdown--heading--3lbctodf", "heading-1": "markdown--heading-1--2y497jK0", heading1: "markdown--heading-1--2y497jK0", "heading-2": "markdown--heading-2--3ukNtton", heading2: "markdown--heading-2--3ukNtton", "heading-3": "markdown--heading-3--3mnCnT1N", heading3: "markdown--heading-3--3mnCnT1N"};
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
  320: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var prop_types = __webpack_require__(1);
    var prop_types_default = /* @__PURE__ */ __webpack_require__.n(prop_types);
    var moment = __webpack_require__(6);
    var moment_default = /* @__PURE__ */ __webpack_require__.n(moment);
    var tooltip = __webpack_require__(39);
    const EventEmitter = class {
      constructor() {
        this.events = {};
      }
      on(event, listener) {
        if (!Array.isArray(this.events[event])) {
          this.events[event] = [];
        }
        this.events[event].push(listener);
      }
      removeListener(event, listener) {
        if (Array.isArray(this.events[event])) {
          const idx = this.events[event].findIndex((l) => l === listener);
          if (idx > -1) {
            this.events[event].splice(idx, 1);
          }
        }
      }
      emit(event, ...args) {
        if (Array.isArray(this.events[event])) {
          const listeners = this.events[event].slice();
          for (let i = 0; i < listeners.length; i += 1) {
            listeners[i].apply(this, args);
          }
        }
      }
    };
    const TIME_AGO_EVENT_NAME = "timeAgoInterval";
    const INTERVAL_DELAY_MS = 15e3;
    const ee = new EventEmitter();
    setInterval(() => {
      ee.emit(TIME_AGO_EVENT_NAME);
    }, INTERVAL_DELAY_MS);
    var useTimeAgoInterval = (callback) => {
      const savedCallback = Object(react["useRef"])();
      Object(react["useEffect"])(() => {
        if (callback) {
          savedCallback.current = callback;
          ee.on(TIME_AGO_EVENT_NAME, savedCallback.current);
        }
        return () => {
          ee.removeListener(TIME_AGO_EVENT_NAME, savedCallback.current);
        };
      }, [callback]);
      return [];
    };
    const TimeAgo = ({
      dateTimeStr,
      inputFormat,
      style,
      tooltipFormat,
      useTooltip,
      className
    }) => {
      const [dateTimeStrTimeAgo, setDateTimeStrTimeAgo] = Object(react["useState"])(moment_default()(dateTimeStr, inputFormat).fromNow());
      const tooltipText = moment_default()(dateTimeStr, inputFormat).format(tooltipFormat);
      useTimeAgoInterval(() => {
        setDateTimeStrTimeAgo(moment_default()(dateTimeStr, inputFormat).fromNow());
      });
      return /* @__PURE__ */ react_default.a.createElement(tooltip["a"], {
        disabled: !useTooltip,
        style,
        text: tooltipText
      }, /* @__PURE__ */ react_default.a.createElement("span", {
        className
      }, dateTimeStrTimeAgo));
    };
    TimeAgo.propTypes = {
      dateTimeStr: prop_types_default.a.string.isRequired,
      inputFormat: prop_types_default.a.string,
      style: prop_types_default.a.object,
      tooltipFormat: prop_types_default.a.string,
      useTooltip: prop_types_default.a.bool,
      className: prop_types_default.a.string
    };
    TimeAgo.defaultProps = {
      inputFormat: "",
      style: {},
      tooltipFormat: "MMMM Do YYYY, h:mm:ss a",
      useTooltip: true
    };
    var timeAgo = __webpack_exports__["a"] = TimeAgo;
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
  357: function(module, exports, __webpack_require__) {
    module.exports = {searchContainer: "search--searchContainer--2Efze-eH", searchInputContainer: "search--searchInputContainer--2uH_po09", searchInputClass: "search--searchInputClass--D0NoJdVC", searchIcon: "search--searchIcon--3WvSw_Gm", cancelIcon: "search--cancelIcon--2H0XNjfo"};
  },
  358: function(module, exports, __webpack_require__) {
    module.exports = {pair: "pair--pair--3SFMZPOB", label: "pair--label--3TxxvFyu", value: "pair--value--t_7VCt0l", copyable: "pair--copyable--3CzFxlaP"};
  },
  383: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return SEARCH_SOURCE_SIDEBAR;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return SEARCH_SOURCE_GLOBAL;
    });
    const SEARCH_SOURCE_SIDEBAR = "sidebar";
    const SEARCH_SOURCE_GLOBAL = "global";
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
  390: function(module, exports, __webpack_require__) {
    module.exports = {navigation: "navigation--navigation--HisJlHi2", button: "navigation--button--2E_kjk-7", label: "navigation--label--1MZuuFxd", selected: "navigation--selected--2BPU97Fd"};
  },
  391: function(module, exports, __webpack_require__) {
    module.exports = {linkModalLabel: "linkForm--linkModalLabel--28P1uh-S", linkModalInput: "linkForm--linkModalInput--zsf7nagb"};
  },
  392: function(module, exports, __webpack_require__) {
    module.exports = {footerRow: "footer--footerRow--2qs1-1gt", footerText: "footer--footerText--23Hce9m8", logoImg: "footer--logoImg--AvZisuVY", time: "footer--time--2yVltGjD"};
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
  465: function(module, exports, __webpack_require__) {
    module.exports = {menuIcon: "menu--menuIcon--2waPViK0", primaryLabel: "menu--primaryLabel--ILzTeXac", secondaryLabel: "menu--secondaryLabel--21vV5vto"};
  },
  47: function(module, exports, __webpack_require__) {
    module.exports = {titleRow: "titleBar--titleRow--NWnoWKRj", titleText: "titleBar--titleText--3qLz1QTj", logoImg: "titleBar--logoImg--1Ks9QGGi", controlsContainer: "titleBar--controlsContainer--2GiR3HW7", iconBtn: "titleBar--iconBtn--2oiL6H3p", activeIconBtn: "titleBar--activeIconBtn--3uT5TeWk", icon: "titleBar--icon--59MowcXU", activeIcon: "titleBar--activeIcon--1t1cEFhT", menuContainer: "titleBar--menuContainer--1S_Ys6FQ", menu: "titleBar--menu--tpgeg9BS", menuItem: "titleBar--menuItem--1IOKmstC", dialogHeader: "titleBar--dialogHeader--2DZsCoiZ", dialogColor: "titleBar--dialogColor--en6cblzy", dialogDivider: "titleBar--dialogDivider--3WIFh6aa", dialogMessage: "titleBar--dialogMessage--2UROvFS6", cancelBtn: "titleBar--cancelBtn--3B-C26eP", pauseBtn: "titleBar--pauseBtn--3Gcw6-3c", dialogButtons: "titleBar--dialogButtons--smwAyJAA", errorMsg: "titleBar--errorMsg--2EeOhD93"};
  },
  471: function(module, exports, __webpack_require__) {
    module.exports = {container: "whisper--container--iAgSaUNw", openContainer: "whisper--openContainer--2fP-2TBC", openButton: "whisper--openButton--3hLTZfQl"};
  },
  475: function(module, exports, __webpack_require__) {
    module.exports = {linkButtonWrapper: "linkButton--linkButtonWrapper--8k5F9KbD", linkModal: "linkButton--linkModal--2pOxibne", icon: "linkButton--icon--1ykmKusM"};
  },
  476: function(module, exports, __webpack_require__) {
    module.exports = {DURATION: "500", duration: "500", container: "card--container--RqXOwlEN", body: "card--body--2PTPoPQj", header: "card--header--16rjqHLk", label: "card--label--vMxOF2tH", headerSection: "card--headerSection--26v5zyp-", content: "card--content--3vVK2C2D"};
  },
  477: function(module, exports, __webpack_require__) {
    module.exports = {message: "message--message--Cz58dlTP", messageHeader: "message--messageHeader--fOipUKej", messageBody: "message--messageBody--3fKz8K8d"};
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
  50: function(module, exports, __webpack_require__) {
    module.exports = {logo: "header--logo--1B4eiu1d", "new-whisper-badge": "header--new-whisper-badge--3jvlyeGK", newWhisperBadge: "header--new-whisper-badge--3jvlyeGK", "new-whisper-badge-text": "header--new-whisper-badge-text--38OoRAHr", newWhisperBadgeText: "header--new-whisper-badge-text--38OoRAHr", "new-whisper-badge-icon": "header--new-whisper-badge-icon--jg-F4aAk", newWhisperBadgeIcon: "header--new-whisper-badge-icon--jg-F4aAk", version: "header--version--15DYiZAZ", headerBtn: "header--headerBtn--REJlWHq3", headerCont: "header--headerCont--1yC_cw8m", subheaderCont: "header--subheaderCont--btCNVEzH", "new-whisper-badge-enter": "header--new-whisper-badge-enter--1xHat8MB", newWhisperBadgeEnter: "header--new-whisper-badge-enter--1xHat8MB", "new-whisper-badge-enter-active": "header--new-whisper-badge-enter-active--14kE9Dk3", newWhisperBadgeEnterActive: "header--new-whisper-badge-enter-active--14kE9Dk3", "new-whisper-badge-exit": "header--new-whisper-badge-exit--3C4JOTQL", newWhisperBadgeExit: "header--new-whisper-badge-exit--3C4JOTQL", "new-whisper-badge-exit-active": "header--new-whisper-badge-exit-active--1mQtxF-I", newWhisperBadgeExitActive: "header--new-whisper-badge-exit-active--1mQtxF-I", "window-placement-left": "header--window-placement-left--qzbeTpSk", windowPlacementLeft: "header--window-placement-left--qzbeTpSk", closeButton: "header--closeButton--3QzM_yCe", menu: "header--menu--2Dw4Xnt_"};
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
  538: function(module, exports) {
  },
  539: function(module, exports) {
  },
  556: function(module, exports, __webpack_require__) {
    module.exports = {cardBodyButton: "cardBodyButton--cardBodyButton--3uLElpDX", cardBodyLabel: "cardBodyButton--cardBodyLabel--tjoNGDKS"};
  },
  558: function(module, exports, __webpack_require__) {
    module.exports = {clearAllWhispersButton: "clearWhispersButton--clearAllWhispersButton--17XP_37G", icon: "clearWhispersButton--icon--2HqVR54A"};
  },
  57: function(module, exports, __webpack_require__) {
    module.exports = {moreLessContainer: "views--moreLessContainer--1h_8tZKK", moreLessBtn: "views--moreLessBtn--fwIyEjXy", dabMarkdown: "views--dabMarkdown--1oP8opb_", dabOption: "views--dabOption--2QlLS4I0", confirmContainer: "views--confirmContainer--2qe00bh2", inputContainer: "views--inputContainer--3aSLOlmF", fileIcon: "views--fileIcon--3d4NWlrc", link: "views--link--2uBHlqlS", linkRow: "views--linkRow--3SRBp7mI"};
  },
  687: function(module, exports) {
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
  691: function(module, exports) {
  },
  70: function(module, exports, __webpack_require__) {
    module.exports = {closeBtn: "confirmDialog--closeBtn--2BqK_23k", cancelBtn: "confirmDialog--cancelBtn--2eQC9azQ", dialogHeader: "confirmDialog--dialogHeader--2qUClhX-", dialogActions: "confirmDialog--dialogActions--1eEjh6nc", dialogTitle: "confirmDialog--dialogTitle--1b3u7_IO", dialogCloseButton: "confirmDialog--dialogCloseButton--2oskn2tq", dialogContent: "confirmDialog--dialogContent--2RENweKv"};
  },
  71: function(module, exports, __webpack_require__) {
    module.exports = {container: "markdown--container--tw_q9KOP", heading: "markdown--heading--3fz1mg6s", "heading-1": "markdown--heading-1--1T5gub8h", heading1: "markdown--heading-1--1T5gub8h", "heading-2": "markdown--heading-2--S7RvY0Uu", heading2: "markdown--heading-2--S7RvY0Uu", "heading-3": "markdown--heading-3--25bNJdw-", heading3: "markdown--heading-3--25bNJdw-"};
  },
  733: function(module, exports, __webpack_require__) {
    module.exports = {colorStrip: "colorStrip--colorStrip--3v8JuGdR"};
  },
  736: function(module, exports, __webpack_require__) {
    module.exports = {"component-wrapper": "editor--component-wrapper--ZBKPYtMN", componentWrapper: "editor--component-wrapper--ZBKPYtMN"};
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
  742: function(module, exports, __webpack_require__) {
    module.exports = {divider: "divider--divider--3_Q5U_5H"};
  },
  743: function(module, exports, __webpack_require__) {
    module.exports = {linkContainer: "link--linkContainer--3Ac8Lw7b"};
  },
  744: function(module, exports, __webpack_require__) {
    module.exports = {list: "list--list--2BofBC5b", link: "list--link--2Uuhvyt4", expand: "list--expand--2iLXX1sU"};
  },
  745: function(module, exports, __webpack_require__) {
    module.exports = {container: "content--container--2JcUL0bP", createdAtAgo: "content--createdAtAgo--3fdLRXmh", feedback: "content--feedback--32NuQekB", footer: "content--footer--T64MPsJg", footerIcon: "content--footerIcon--wFIVcalY", sectionSeparator: "content--sectionSeparator--2i99KVcr", sourceLink: "content--sourceLink--3mky_TAa", sourcesContainer: "content--sourcesContainer--3eFg-5Wi", term: "content--term--35O4Rv-g"};
  },
  75: function(module, exports, __webpack_require__) {
    module.exports = {settingLabel: "settings--settingLabel--3_AS2wXQ", sliderLabel: "settings--sliderLabel--3gF2RE2U", sliderDescription: "settings--sliderDescription--1q1rP_5H", closeBtn: "settings--closeBtn--3kKbOSmR", cancelBtn: "settings--cancelBtn--30Aq_55J", formControl: "settings--formControl--U1vaCg2o", hotZoneHelper: "settings--hotZoneHelper--1y0Y6CSW", hotZoneIcon: "settings--hotZoneIcon--18o5d2Lv", flipIcon: "settings--flipIcon--Al-SnjMP"};
  },
  77: function(module, exports, __webpack_require__) {
    module.exports = {contentBox: "views--contentBox--1oWvlrXf", clickableBox: "views--clickableBox--1ivHWWJ-", collapseBoxItem: "views--collapseBoxItem--34a9CaRZ", listItem: "views--listItem--18wNiRQl", listHeader: "views--listHeader--3-i2nk7N", buttonContainer: "views--buttonContainer--1j_WtftV", loopListContainer: "views--loopListContainer--5IXScf_5", loopList: "views--loopList--18tnnRr_", avatar: "views--avatar--2CgT2OV4", avatarContainer: "views--avatarContainer--1ygkTxtm", topPadding: "views--topPadding--BVEJVu6C", copyableStyle: "views--copyableStyle--29aZOlP_"};
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
}, [[1259, 13, 0]]]);
