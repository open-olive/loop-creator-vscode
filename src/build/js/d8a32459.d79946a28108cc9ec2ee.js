(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
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
  1260: function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var react = __webpack_require__(0);
    var react_default = /* @__PURE__ */ __webpack_require__.n(react);
    var react_dom = __webpack_require__(26);
    var react_dom_default = /* @__PURE__ */ __webpack_require__.n(react_dom);
    var app = __webpack_require__(52);
    var v4 = __webpack_require__(1360);
    var moment = __webpack_require__(6);
    var moment_default = /* @__PURE__ */ __webpack_require__.n(moment);
    var filter = __webpack_require__(132);
    var messaging = __webpack_require__(5);
    var createMuiTheme = __webpack_require__(748);
    var ThemeProvider = __webpack_require__(1312);
    var tracking = __webpack_require__(4);
    var colors = __webpack_require__(3);
    var prop_types = __webpack_require__(1);
    var prop_types_default = /* @__PURE__ */ __webpack_require__.n(prop_types);
    var config = __webpack_require__(14);
    var omit = __webpack_require__(1323);
    var makeStyles = __webpack_require__(1309);
    var Accordion = __webpack_require__(1374);
    var AccordionDetails = __webpack_require__(1322);
    var AccordionSummary = __webpack_require__(1321);
    var Typography = __webpack_require__(305);
    var ExpandMore = __webpack_require__(451);
    var ExpandMore_default = /* @__PURE__ */ __webpack_require__.n(ExpandMore);
    var icon = __webpack_require__(29);
    var timeAgo = __webpack_require__(320);
    const code = {
      backgroundColor: "#E0E0E0",
      border: "0.125rem solid #BDBDBD",
      borderRadius: "0.125rem",
      fontSize: "0.75rem",
      overflowX: "auto",
      overflowY: "hidden",
      padding: "0.5rem"
    };
    const detailsColumn = (columns) => ({
      paddingRight: "0.25rem",
      width: `${100 / columns}%`
    });
    const detailsHeader = {
      fontSize: "0.9rem",
      fontWeight: 600
    };
    const emptyState = {
      alignItems: "center",
      color: colors["i"],
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: "center"
    };
    const eventIcon = {
      flex: "0 0 auto",
      fontSize: "1.25rem",
      height: "1.25rem",
      marginRight: "0.4rem",
      width: "1.25rem"
    };
    const time = {
      fontSize: "0.75rem",
      fontWeight: 100,
      marginLeft: "auto",
      paddingLeft: "1rem",
      whiteSpace: "nowrap"
    };
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
    const heading = {
      fontSize: "0.75rem",
      flexBasis: "25%",
      flexShrink: 0,
      fontWeight: 700,
      position: "relative",
      top: "0.075rem"
    };
    const useStyles = Object(makeStyles["a"])((theme) => ({
      rootExpanded: {
        margin: "0.5rem 0 !important"
      },
      summaryRoot: {
        minHeight: "2.5rem",
        "&$expanded": {
          minHeight: "3rem"
        }
      },
      expanded: {
        minHeight: "3rem"
      },
      content: {
        alignItems: "center",
        display: "flex",
        margin: 0,
        "&$expanded": {
          margin: 0
        }
      },
      heading,
      headingError: __assign(__assign({}, heading), {
        color: colors["n"]
      }),
      secondaryHeading: {
        color: theme.palette.text.secondary,
        display: "-webkit-box",
        fontSize: "0.75rem",
        fontStyle: "italic",
        lineHeight: 1.3,
        overflow: "hidden",
        paddingRight: "0.5rem",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical"
      },
      body: {
        fontSize: "0.75rem"
      }
    }));
    const icons = {
      error: "error",
      sensor: "wifi_tethering",
      whisper: "web_asset"
    };
    const InspectorListEvent = ({event}) => {
      const {createdAt, data, id, label, message, source, type} = event;
      const classes = useStyles();
      const [isExpanded, setExpanded] = Object(react["useState"])(false);
      const handleChange = (e, value) => {
        setExpanded(value);
      };
      const text = Object(react["useMemo"])(() => {
        if (type === "sensor") {
          return {
            primary: source.name,
            secondary: data.text || JSON.stringify(data)
          };
        }
        if (type === "whisper") {
          return {
            primary: source.name,
            secondary: label
          };
        }
        return {
          primary: "Error",
          secondary: message
        };
      }, [id]);
      return /* @__PURE__ */ react_default.a.createElement(Accordion["a"], {
        expanded: isExpanded,
        onChange: handleChange,
        classes: {
          root: classes.root,
          expanded: classes.rootExpanded
        }
      }, /* @__PURE__ */ react_default.a.createElement(AccordionSummary["a"], {
        expandIcon: /* @__PURE__ */ react_default.a.createElement(ExpandMore_default.a, null),
        classes: {
          root: classes.summaryRoot,
          expanded: classes.expanded,
          content: classes.content
        },
        IconButtonProps: {
          size: "small"
        }
      }, /* @__PURE__ */ react_default.a.createElement(icon["a"], {
        icon: icons[type],
        style: __assign(__assign({}, eventIcon), type === "error" ? {color: colors["n"]} : {})
      }), /* @__PURE__ */ react_default.a.createElement(Typography["a"], {
        className: type !== "error" ? classes.heading : classes.headingError
      }, text.primary), /* @__PURE__ */ react_default.a.createElement(Typography["a"], {
        className: classes.secondaryHeading
      }, text.secondary), /* @__PURE__ */ react_default.a.createElement(timeAgo["a"], {
        dateTimeStr: createdAt,
        style: time
      })), /* @__PURE__ */ react_default.a.createElement(AccordionDetails["a"], null, /* @__PURE__ */ react_default.a.createElement("div", {
        style: detailsColumn(source ? 2 : 1)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: detailsHeader
      }, "Data"), /* @__PURE__ */ react_default.a.createElement("pre", {
        style: code
      }, JSON.stringify(Object(omit["a"])([
        "type",
        "source",
        ...event.type === "sensor" ? ["id", "createdAt"] : []
      ], event), null, 2))), source && /* @__PURE__ */ react_default.a.createElement("div", {
        style: detailsColumn(2)
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: detailsHeader
      }, "Source"), /* @__PURE__ */ react_default.a.createElement("pre", {
        style: code
      }, JSON.stringify(source, null, 2)))));
    };
    InspectorListEvent.propTypes = {
      event: prop_types_default.a.shape({
        createdAt: prop_types_default.a.string.isRequired,
        data: prop_types_default.a.object,
        id: prop_types_default.a.string,
        label: prop_types_default.a.string,
        message: prop_types_default.a.string,
        source: prop_types_default.a.object.isRequired,
        type: prop_types_default.a.string
      })
    };
    InspectorListEvent.defaultProps = {
      event: {}
    };
    var list_event = InspectorListEvent;
    var IconButton = __webpack_require__(752);
    var FiberManualRecord = __webpack_require__(706);
    var FiberManualRecord_default = /* @__PURE__ */ __webpack_require__.n(FiberManualRecord);
    const recordButton_useStyles = Object(makeStyles["a"])({
      root: (style) => style
    });
    const InspectorRecordButton = ({style}) => {
      const [isRecording, setIsRecording] = Object(react["useState"])(false);
      const {root} = recordButton_useStyles(style);
      const handleToggleRecording = () => {
        Object(messaging["Z"])().then((result) => setIsRecording(result)).catch(console.error);
      };
      Object(react["useEffect"])(() => {
        Object(messaging["X"])().then((result) => setIsRecording(result)).catch(console.error);
        return () => {
          Object(messaging["Y"])(false).catch(console.error);
        };
      }, []);
      return /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        color: "inherit",
        size: "small",
        style: isRecording ? {color: "#ea0000"} : {},
        onClick: handleToggleRecording
      }, /* @__PURE__ */ react_default.a.createElement(FiberManualRecord_default.a, {
        classes: {root}
      }));
    };
    InspectorRecordButton.propTypes = {
      style: prop_types_default.a.object
    };
    InspectorRecordButton.defaultProps = {
      style: {}
    };
    var recordButton = InspectorRecordButton;
    const InspectorList = ({events}) => {
      const {isRecording = true} = Object(config["e"])();
      const renderEvent = (event) => {
        return /* @__PURE__ */ react_default.a.createElement(list_event, {
          key: event.id,
          event
        });
      };
      if (events.length !== 0) {
        return /* @__PURE__ */ react_default.a.createElement("div", {
          style: {overflowX: "hidden", overflowY: "auto"}
        }, events.map(renderEvent));
      }
      return /* @__PURE__ */ react_default.a.createElement("div", {
        style: emptyState
      }, /* @__PURE__ */ react_default.a.createElement(recordButton, {
        style: {height: "6rem", width: "6rem"}
      }), isRecording && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", null, "The Olive Helps Inspector is now ready to record events."), /* @__PURE__ */ react_default.a.createElement("div", null, "They will appear here as they come in.")), !isRecording && /* @__PURE__ */ react_default.a.createElement(react_default.a.Fragment, null, /* @__PURE__ */ react_default.a.createElement("div", null, "The Olive Helps Inspector can record events, but recording is disabled."), /* @__PURE__ */ react_default.a.createElement("div", null, "Press the record button above to begin recording.")));
    };
    InspectorList.propTypes = {
      events: prop_types_default.a.array
    };
    InspectorList.defaultProps = {
      events: []
    };
    var list = InspectorList;
    var values = __webpack_require__(1329);
    var mapObjIndexed = __webpack_require__(1330);
    var AppBar = __webpack_require__(1326);
    var Checkbox = __webpack_require__(1364);
    var Toolbar = __webpack_require__(1327);
    var Block = __webpack_require__(707);
    var Block_default = /* @__PURE__ */ __webpack_require__.n(Block);
    var Button = __webpack_require__(1328);
    var Menu = __webpack_require__(749);
    var ListItem = __webpack_require__(1268);
    var ListItemIcon = __webpack_require__(1324);
    var ListItemText = __webpack_require__(1325);
    var utils = __webpack_require__(11);
    const container = {
      backgroundColor: colors["g"],
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "stretch",
      width: "100vw"
    };
    const levelsButton = {
      color: colors["j"],
      marginLeft: "auto",
      textTransform: "inherit"
    };
    var toolbar_defProp = Object.defineProperty;
    var toolbar_hasOwnProp = Object.prototype.hasOwnProperty;
    var toolbar_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var toolbar_propIsEnum = Object.prototype.propertyIsEnumerable;
    var toolbar_defNormalProp = (obj, key, value) => key in obj ? toolbar_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var toolbar_assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (toolbar_hasOwnProp.call(b, prop))
          toolbar_defNormalProp(a, prop, b[prop]);
      if (toolbar_getOwnPropSymbols)
        for (var prop of toolbar_getOwnPropSymbols(b)) {
          if (toolbar_propIsEnum.call(b, prop))
            toolbar_defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const toolbar_useStyles = Object(makeStyles["a"])(() => ({
      appBarRoot: {
        minHeight: "2rem"
      },
      appBarColorPrimary: {
        backgroundColor: colors["g"],
        color: colors["j"]
      },
      listIconRoot: {
        height: "2rem",
        minWidth: "2rem"
      }
    }));
    const InspectorToolbar = ({clearEvents, eventLevels, setEventLevels}) => {
      const [anchorEl, setAnchorEl] = Object(react["useState"])(null);
      const classes = toolbar_useStyles();
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleToggle = (key) => () => {
        setEventLevels((prev) => toolbar_assign(toolbar_assign({}, prev), {
          [key]: !prev[key]
        }));
      };
      const renderLevelOptions = (value, key) => /* @__PURE__ */ react_default.a.createElement(ListItem["a"], {
        key,
        dense: true,
        button: true,
        onClick: handleToggle(key)
      }, /* @__PURE__ */ react_default.a.createElement(ListItemIcon["a"], {
        classes: {root: classes.listIconRoot}
      }, /* @__PURE__ */ react_default.a.createElement(Checkbox["a"], {
        edge: "start",
        checked: value === true,
        color: "primary",
        disableRipple: true
      })), /* @__PURE__ */ react_default.a.createElement(ListItemText["a"], {
        primary: Object(utils["a"])(key)
      }));
      return /* @__PURE__ */ react_default.a.createElement(AppBar["a"], {
        position: "static",
        classes: {
          colorPrimary: classes.appBarColorPrimary
        }
      }, /* @__PURE__ */ react_default.a.createElement(Toolbar["a"], {
        classes: {
          root: classes.appBarRoot
        },
        disableGutters: true
      }, /* @__PURE__ */ react_default.a.createElement(recordButton, null), /* @__PURE__ */ react_default.a.createElement(IconButton["a"], {
        color: "inherit",
        size: "small",
        style: {transform: "scale(0.8) translateX(-0.5rem)"},
        onClick: clearEvents
      }, /* @__PURE__ */ react_default.a.createElement(Block_default.a, null)), /* @__PURE__ */ react_default.a.createElement(Button["a"], {
        onClick: handleClick,
        style: levelsButton
      }, "Event Levels"), /* @__PURE__ */ react_default.a.createElement(Menu["a"], {
        id: "simple-menu",
        anchorEl,
        keepMounted: true,
        open: !!anchorEl,
        onClose: handleClose
      }, Object(values["a"])(Object(mapObjIndexed["a"])(renderLevelOptions, eventLevels)))));
    };
    InspectorToolbar.propTypes = {
      clearEvents: prop_types_default.a.func.isRequired,
      eventLevels: prop_types_default.a.object,
      setEventLevels: prop_types_default.a.func.isRequired
    };
    InspectorToolbar.defaultProps = {
      eventLevels: {}
    };
    var toolbar = InspectorToolbar;
    var component_defProp = Object.defineProperty;
    var component_hasOwnProp = Object.prototype.hasOwnProperty;
    var component_getOwnPropSymbols = Object.getOwnPropertySymbols;
    var component_propIsEnum = Object.prototype.propertyIsEnumerable;
    var component_defNormalProp = (obj, key, value) => key in obj ? component_defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
    var component_assign = (a, b) => {
      for (var prop in b || (b = {}))
        if (component_hasOwnProp.call(b, prop))
          component_defNormalProp(a, prop, b[prop]);
      if (component_getOwnPropSymbols)
        for (var prop of component_getOwnPropSymbols(b)) {
          if (component_propIsEnum.call(b, prop))
            component_defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const component_theme = Object(createMuiTheme["a"])({
      typography: {
        fontFamily: '"Proxima Nova"',
        fontSize: 14
      },
      palette: {
        primary: {main: "#651FFF"},
        secondary: {main: "#B388FF"}
      },
      overrides: {
        MuiButton: {
          contained: {
            color: colors["k"]
          }
        }
      }
    });
    const types = {
      newError: "error",
      newSensorEvent: "sensor",
      newWhisper: "whisper"
    };
    const InspectorScreen = () => {
      const [eventLevels, setEventLevels] = Object(react["useState"])({
        error: true,
        sensor: true,
        whisper: true
      });
      const [events, setEvents] = Object(react["useState"])([]);
      const listEvents = Object(react["useMemo"])(() => Object(filter["a"])(({type}) => eventLevels[type], events), [events, eventLevels]);
      const clearEvents = () => {
        setEvents([]);
      };
      const onReady = () => {
        Object(messaging["u"])(types.newError, (payload) => {
          setEvents((prev) => [
            component_assign(component_assign(component_assign({}, payload), ["newError", "newSensorEvent"].includes(types.newError) ? {
              createdAt: moment_default()().format(),
              id: Object(v4["a"])()
            } : {}), {
              type: types.newError
            }),
            ...prev
          ]);
        }).catch(console.error);
        Object(messaging["u"])(types.newSensorEvent, (payload) => {
          setEvents((prev) => [
            component_assign(component_assign(component_assign({}, payload), ["newError", "newSensorEvent"].includes(types.newSensorEvent) ? {
              createdAt: moment_default()().format(),
              id: Object(v4["a"])()
            } : {}), {
              type: types.newSensorEvent
            }),
            ...prev
          ]);
        }).catch(console.error);
        Object(messaging["u"])(types.newWhisper, (payload) => {
          setEvents((prev) => [
            component_assign(component_assign(component_assign({}, payload), ["newError", "newSensorEvent"].includes(types.newWhisper) ? {
              createdAt: moment_default()().format(),
              id: Object(v4["a"])()
            } : {}), {
              type: types.newWhisper
            }),
            ...prev
          ]);
        }).catch(console.error);
      };
      Object(react["useEffect"])(() => {
        Object(tracking["g"])();
        document.addEventListener("astilectron-ready", onReady);
        return () => {
          document.removeEventListener("astilectron-ready", onReady);
        };
      }, []);
      return /* @__PURE__ */ react_default.a.createElement(ThemeProvider["a"], {
        theme: component_theme
      }, /* @__PURE__ */ react_default.a.createElement("div", {
        style: container
      }, /* @__PURE__ */ react_default.a.createElement(toolbar, {
        clearEvents,
        eventLevels,
        setEventLevels
      }), /* @__PURE__ */ react_default.a.createElement(list, {
        events: listEvents
      })));
    };
    var component = InspectorScreen;
    var inspector_style = __webpack_require__(784);
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
  784: function(module, exports, __webpack_require__) {
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
}, [[1260, 10, 0]]]);
