/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  overflow-x: hidden;\\r\\n  font-family: \\\"Hubballi\\\", cursive;\\r\\n  font-family: \\\"Indie Flower\\\", cursive;\\r\\n  font-family: \\\"Paprika\\\", cursive;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-family: \\\"Spline Sans\\\", sans-serif;\\r\\n  font-family: \\\"Ubuntu\\\", sans-serif;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 0.5rem;\\r\\n  height: 3px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #d9ed92;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.liked {\\r\\n  z-index: 5;\\r\\n  color: rgb(28, 165, 28);\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  z-index: 5;\\r\\n  color: rgb(27, 97, 189);\\r\\n}\\r\\n\\r\\n.heart:hover {\\r\\n  color: rgb(199, 48, 22);\\r\\n}\\r\\n\\r\\n.popup_description {\\r\\n  font-size: medium;\\r\\n  color: #0c0f02;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.d-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.y-none {\\r\\n  overflow-y: none;\\r\\n}\\r\\n\\r\\n.d-f {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.addcomment {\\r\\n  padding-bottom: 20px;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.addcomment input {\\r\\n  border: none;\\r\\n  padding: 0.6rem;\\r\\n  border-radius: 7px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: #52b788;\\r\\n  padding: 1rem 3rem;\\r\\n  border-radius: 0 0 12px 12px;\\r\\n  box-shadow: 4px 4px 12px #1b4332;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  top: 0;\\r\\n  position: fixed;\\r\\n  opacity: 0.8;\\r\\n  width: 93%;\\r\\n}\\r\\n\\r\\n.logo_image {\\r\\n  border-radius: 50%;\\r\\n  width: 8rem;\\r\\n  height: 5rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #081c15;\\r\\n  font-size: 2rem;\\r\\n  transition: all 0.3s;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  color: #d8f3dc;\\r\\n}\\r\\n\\r\\n.meal_categories {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 3rem;\\r\\n  padding-right: 4rem;\\r\\n}\\r\\n\\r\\n.meal_lists {\\r\\n  height: auto;\\r\\n  width: 100%;\\r\\n  background-color: #131313;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-radius: 2rem;\\r\\n  margin: 8rem 0;\\r\\n  box-shadow: 4px 4px 12px #1b4332;\\r\\n}\\r\\n\\r\\n.itemConstaner {\\r\\n  margin: 2rem;\\r\\n  width: 85%;\\r\\n  background-color: #d8f3dc;\\r\\n  border-radius: 12px;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  padding: 30px;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 2rem;\\r\\n  border-radius: 12px;\\r\\n}\\r\\n\\r\\n.likes_count {\\r\\n  color: black;\\r\\n  padding-top: 3rem;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  padding: 12px;\\r\\n  background-color: #8cddb9;\\r\\n  height: 40rem;\\r\\n  border-radius: 12px;\\r\\n  display: grid;\\r\\n  grid-template-rows: 2fr 1fr;\\r\\n  gap: 1rem;\\r\\n  transition: all 0.3s;\\r\\n  overflow-y: auto;\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  background-color: #0e1813;\\r\\n}\\r\\n\\r\\n.pop {\\r\\n  width: 30rem;\\r\\n  height: 80%;\\r\\n  background-color: #b7e4c7;\\r\\n  position: relative;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.pop:hover {\\r\\n  background-color: #7dbae2;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  backdrop-filter: blur(5px);\\r\\n  position: fixed;\\r\\n  top: 1rem;\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  flex-direction: column;\\r\\n  justify-content: start;\\r\\n  align-items: center;\\r\\n  padding: 24px;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n#x {\\r\\n  top: 2rem;\\r\\n  padding-left: 28rem;\\r\\n  position: fixed;\\r\\n  z-index: 10;\\r\\n  color: #435013;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  justify-self: center;\\r\\n  border-radius: 12px;\\r\\n}\\r\\n\\r\\n.meal_image {\\r\\n  height: 20rem;\\r\\n  width: auto;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  justify-self: center;\\r\\n  width: 20rem;\\r\\n  background-color: #6bb191;\\r\\n  border-radius: 12px;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.nameAndLikes {\\r\\n  padding-top: 25px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1.6rem;\\r\\n  align-items: center;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  padding: 0 2rem;\\r\\n  gap: 4rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.likes i {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.mealNmae,\\r\\n.popup_title {\\r\\n  font-size: 1.4rem;\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n.commentsReservation {\\r\\n  padding-bottom: 20px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: none;\\r\\n  padding: 0.6rem 1rem;\\r\\n  font-size: 1.3rem;\\r\\n  color: #131313;\\r\\n  background-color: #d9ed92;\\r\\n  border-radius: 8px;\\r\\n  transition: all 0.3s;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: #168aad;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #52b788;\\r\\n  color: #081c15;\\r\\n  padding: 0 5rem;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JavaScript_Capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_vegan_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/vegan.jpg */ \"./src/images/vegan.jpg\");\n/* harmony import */ var _modules_getMealList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getMealList.js */ \"./src/modules/getMealList.js\");\n/* harmony import */ var _modules_addComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addComment.js */ \"./src/modules/addComment.js\");\n\n\n\n\n\n(0,_modules_getMealList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst imageContainer = document.querySelector('.image_container');\nconst popup = document.querySelector('.popup');\nconst x = document.querySelector('#x');\n\nimageContainer.innerHTML = `<img class=\"logo_image\" src=\"${_images_vegan_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"logo image\"/>`;\n\nx.addEventListener('click', () => {\n  popup.classList.toggle('d-none');\n  popup.classList.toggle('d-f');\n});\n\nconst form = document.querySelector('.addcomment');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const name = document.querySelector('.name').value;\n  const comment = document.querySelector('.comment').value;\n  const ul = document.querySelector('.commentList');\n  ul.childNodes[0].innerHTML = `Comments (${ul.childNodes.length})`;\n  const li = document.createElement('li');\n  li.innerText = `Today ${name}: ${comment}`;\n  ul.appendChild(li);\n  (0,_modules_addComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.parentNode.parentNode.parentNode.dataset.id, name, comment);\n  form.reset();\n});\n\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKb2fopXHs8DBr8kZdp6/comments';\n\nconst addComment = async (id, userName, userComment) => {\n  const data = {\n    item_id: id,\n    username: userName,\n    comment: userComment,\n  };\n  await fetch(commentUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLike = async (id, postUrl) => {\n  const data = {\n    item_id: id,\n  };\n  await fetch(postUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/displayMeal.js":
/*!************************************!*\
  !*** ./src/modules/displayMeal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popUpDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUpDisplay.js */ \"./src/modules/popUpDisplay.js\");\n/* harmony import */ var _addLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLike */ \"./src/modules/addLike.js\");\n\n\nconst mealItems = document.querySelector('.items');\nconst popup = document.querySelector('.popup');\nconst popimg = document.querySelector('.img');\nconst popTitle = document.querySelector('.popup_title');\nconst likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKb2fopXHs8DBr8kZdp6/likes';\n\n\nconst displayMealList = async (meals) => {\n  const response = await fetch(`${likeUrl}`);\n  const data = await response.json();\n  for (let i = 0; i < meals.length; i += 1) {\n    const li = document.createElement('li');\n    li.setAttribute('id', `${meals[i].idMeal}`);\n    const img = `<img class= \"meal_image\"src=\"${meals[i].strMealThumb}\" alt=\"logo image\"/>`;\n    const div1 = document.createElement('div');\n    const div2 = document.createElement('div');\n    const div3 = document.createElement('div');\n    li.classList.add('item');\n    div1.classList.add('img');\n    div1.innerHTML = img;\n    div2.classList.add('info');\n    const span = document.createElement('span');\n    span.classList.add('mealNmae');\n    span.innerText = `${meals[i].strMeal}`;\n    const icon = document.createElement('i');\n    icon.setAttribute('data-id', `${meals[i].idMeal}`)\n    icon.setAttribute('id', `fales`);\n    icon.classList.add('fa');\n    icon.classList.add('heart');\n    icon.classList.add('fa-heart');\n    icon.setAttribute('aria-hidden', 'true');\n    var like = '0';\n    for (let j = 0; j < data.length; j += 1) {\n      if (data[j].item_id == meals[i].idMeal) like = data[j].likes\n    }\n    icon.innerHTML = `<br><br><span class=\"likes_count\">Likes(${like})`;\n    const div11 = document.createElement('div');\n    div11.classList.add('nameAndLikes')\n    const div12 = document.createElement('div');\n    div12.classList.add('likes');\n    div12.appendChild(span);\n    div12.appendChild(icon);\n    div11.appendChild(div12);\n    div2.appendChild(div11);\n    div3.classList.add('commentsReservation');\n    const cbtn = document.createElement('button');\n    cbtn.classList.add('comments');\n    cbtn.setAttribute('type', 'button');\n    cbtn.innerText = 'Comments';\n    const rbtn = document.createElement('button');\n    rbtn.setAttribute('type', 'button');\n    rbtn.innerText = 'reservation';\n    div3.appendChild(cbtn);\n    div3.appendChild(rbtn);\n    li.appendChild(div1);\n    li.appendChild(div2);\n    li.appendChild(div3);\n    mealItems.appendChild(li);\n  }\n  const btn = document.querySelectorAll('.comments');\n  btn.forEach((e) => {\n    e.addEventListener('click', () => {\n      popup.classList.toggle('d-none');\n      for (let i = 0; i < meals.length; i += 1) {\n        if (meals[i].idMeal === e.parentNode.parentElement.id) {\n          popimg.innerHTML = `<img class= \"meal_image\"src=\"${meals[i].strMealThumb}\" alt=\"logo image\"/>`;\n          popTitle.innerText = `${meals[i].strMeal}`;\n          popup.classList.toggle('d-f');\n          (0,_popUpDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.parentNode.parentElement.id);\n        }\n      }\n    });\n  });\n  const icon = document.querySelectorAll('.fa');\n  icon.forEach((e) => {\n    e.addEventListener('click', async (event) => {\n      const id = event.target.parentNode.dataset.id;\n      if (event.target.parentNode.id == 'fales') {\n        (0,_addLike__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, likeUrl);\n        event.target.parentNode.classList.add('liked');\n        event.target.parentNode.classList.remove('heart');\n        const response = await fetch(`${likeUrl}`);\n        const data = await response.json();\n        for (let i = 0; i < data.length; i += 1) {\n          if (data[i].item_id == id) {\n            event.target.parentNode.id = 'true'\n            event.target.parentNode.innerHTML = `<br><br><span class=\"likes_count\">Likes(${data[i].likes + 1})`\n          }\n        }\n      }\n    })\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMealList);\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/modules/displayMeal.js?");

/***/ }),

/***/ "./src/modules/getMealList.js":
/*!************************************!*\
  !*** ./src/modules/getMealList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayMeal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMeal.js */ \"./src/modules/displayMeal.js\");\n\n\nconst mealCount = document.querySelector('.meal_count');\nconst getMeal = async () => {\n  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');\n  const mealObj = await response.json();\n  (0,_displayMeal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealObj.meals);\n  mealCount.innerText = ` (${mealObj.meals.length})`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeal);\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/modules/getMealList.js?");

/***/ }),

/***/ "./src/modules/popUpDisplay.js":
/*!*************************************!*\
  !*** ./src/modules/popUpDisplay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealRegion = document.querySelector('.meal_region');\nconst mealTag = document.querySelector('.meal_tag');\nconst popUpDisplay = async (id) => {\n  const responsee = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKb2fopXHs8DBr8kZdp6/comments?item_id=${id}`);\n  const data = await responsee.json();\n  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\n  const mealObj = await response.json();\n  mealRegion.innerHTML = `<h1 data-id=\"${mealObj.meals[0].idMeal}\" class=\"popup_description\">Area: ${mealObj.meals[0].strArea}</h1>`;\n  mealTag.innerHTML = `<h1 class=\"popup_description\">Tags: ${mealObj.meals[0].strTags == null ? 'N/A' : mealObj.meals[0].strTags}</h1>`;\n  const ul = document.createElement('ul');\n  ul.classList.add('commentList')\n  const h1 = document.createElement('h1');\n  if (data.length) {\n    h1.innerHTML = `Comments (${data.length})`\n  } else {\n    h1.innerHTML = `Comments (0)`\n  }\n\n  ul.appendChild(h1);\n  mealTag.appendChild(ul);\n  if (data.length > 0) {\n    for (let i = 0; i < data.length; i += 1) {\n      const li = document.createElement('li');\n      li.innerText = `${data[i].creation_date} ${data[i].username}: ${data[i].comment}`\n      ul.appendChild(li);\n    }\n  }\n  mealTag.parentNode.setAttribute('data-id', `${mealObj.meals[0].idMeal}`)\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpDisplay);\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/modules/popUpDisplay.js?");

/***/ }),

/***/ "./src/images/vegan.jpg":
/*!******************************!*\
  !*** ./src/images/vegan.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"83d86941ce02f3b35fa4.jpg\";\n\n//# sourceURL=webpack://JavaScript_Capstone/./src/images/vegan.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;