(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
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
  1262: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var react_dom = __webpack_require__(26);
    var react_dom_default = /* @__PURE__ */ __webpack_require__.n(react_dom);
    var app = __webpack_require__(52);
    var isNil = __webpack_require__(478);
    var isEmpty = __webpack_require__(133);
    var trim = __webpack_require__(1311);
    var moment = __webpack_require__(6);
    var moment_default = /* @__PURE__ */ __webpack_require__.n(moment);
    var config = __webpack_require__(14);
    var search = __webpack_require__(383);
    var createMuiTheme = __webpack_require__(748);
    var makeStyles = __webpack_require__(1309);
    var ThemeProvider = __webpack_require__(1312);
    var TextField = __webpack_require__(1369);
    var colors = __webpack_require__(3);
    var messaging = __webpack_require__(5);
    var tracking = __webpack_require__(4);
    var style = __webpack_require__(472);
    const theme = Object(createMuiTheme["a"])({
      typography: {
        fontFamily: '"Proxima Nova"',
        fontSize: 14
      },
      palette: {
        primary: {main: "#651FFF"},
        secondary: {main: colors["l"]}
      }
    });
    const useStyles = Object(makeStyles["a"])(() => ({
      root: {
        height: "100%"
      },
      inputRoot: {
        backgroundColor: colors["l"],
        color: "rgba(255, 255, 255, 0.87)",
        height: "100%"
      },
      notchedOutline: {
        borderColor: `rgba(255, 255, 255, 0.5) !important`
      },
      labelRoot: {
        backgroundColor: colors["l"],
        borderRadius: "0.25rem",
        color: "rgba(255, 255, 255, 0.5)",
        padding: "0 0.15rem",
        "&.Mui-focused": {
          color: "rgba(255, 255, 255, 1) !important"
        }
      }
    }));
    const GlobalSearchScreen = () => {
      const {setConfig} = Object(config["e"])();
      const [searchTerm, setSearchTerm] = Object(react["useState"])("");
      const timeOpen = Object(react["useRef"])(0);
      const classes = useStyles();
      const focusInput = () => document.getElementById("input_searchBar").focus();
      const onReady = () => {
        Object(messaging["j"])().then((result) => {
          if (!result) {
            return;
          }
          setConfig(result);
        }).catch(console.error);
        Object(messaging["u"])("isFocused", (payload) => {
          setSearchTerm("");
          Object(messaging["p"])("globalSearch", !!payload.focused).catch(console.error);
          if (payload.focused) {
            timeOpen.current = moment_default()().valueOf();
            focusInput();
            Object(tracking["h"])({
              category: tracking["c"],
              action: "Opened"
            });
          } else {
            Object(tracking["h"])({
              category: tracking["c"],
              action: "Closed",
              label: "Duration",
              value: moment_default()().valueOf() - timeOpen.current
            });
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
      const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const onKeyDown = (event) => {
        switch (event.key) {
          case "Enter":
            if (!Object(isNil["a"])(searchTerm) && !Object(isEmpty["a"])(Object(trim["a"])(searchTerm))) {
              Object(tracking["h"])({
                category: tracking["c"],
                action: "Search",
                label: "Submitted"
              });
              Object(tracking["h"])({
                category: tracking["c"],
                action: "Search",
                label: "Word count",
                value: searchTerm.split(" ").length
              });
              Object(tracking["h"])({
                category: tracking["c"],
                action: "Search",
                label: "Character count",
                value: searchTerm.length
              });
              const st = searchTerm;
              Object(messaging["C"])(search["a"], st).catch(console.error);
              Object(messaging["l"])().catch(console.error);
              setSearchTerm("");
            }
            break;
          case "Escape":
            Object(messaging["l"])().catch(console.error);
            break;
          default:
            break;
        }
      };
      return /* @__PURE__ */ react_default.a.createElement(ThemeProvider["a"], {
        theme
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: style["container"]
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        className: style["gradient"]
      }, /* @__PURE__ */ react_default.a.createElement(TextField["a"], {
        classes: {root: classes.root},
        fullWidth: true,
        label: "Search",
        margin: "none",
        size: "small",
        color: "secondary",
        variant: "outlined",
        id: "input_searchBar",
        onChange: handleChange,
        onKeyDown,
        value: searchTerm,
        InputProps: {
          classes: {
            root: classes.inputRoot,
            notchedOutline: classes.notchedOutline
          },
          color: "secondary",
          endAdornment: !Object(isEmpty["a"])(searchTerm) ? /* @__PURE__ */ react_default.a.createElement("div", {
            className: style["tooltip"]
          }, "Press Enter to search") : null
        },
        InputLabelProps: {
          classes: {root: classes.labelRoot},
          margin: "none"
        }
      }))));
    };
    var component = GlobalSearchScreen;
    const Container = Object(app["a"])(component);
    react_dom_default.a.render(/* @__PURE__ */ react_default.a.createElement(Container, null), document.getElementById("app"));
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
  472: function(module, exports, __webpack_require__) {
    module.exports = {container: "globalSearch--container--3e7igy0j", gradient: "globalSearch--gradient--qdG8daMO", tooltip: "globalSearch--tooltip--3jYeAeP_"};
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
  96: function(module, exports, __webpack_require__) {
    module.exports = {link: "style-core--link--3uDePx2m"};
  },
  97: function(module, exports, __webpack_require__) {
  },
  98: function(module, exports, __webpack_require__) {
  }
}, [[1262, 9, 0]]]);
