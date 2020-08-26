exports.ids = [4];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ad9ca490", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1dd30b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1dd30b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1dd30b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1dd30b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1dd30b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1dd30b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#espaceclient[data-v-a1dd30b0]{margin-top:40px}.submitbutton[data-v-a1dd30b0]{background-color:#02c58e!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/informations/index.vue?vue&type=template&id=a1dd30b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"informations"}},[_c('b-container',{attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{attrs:{"md":"4"}},[_c('h1',[_vm._v("Informations")]),_vm._v(" "),_c('p',[_vm._v("Espace Contrats est une application VueJs qui permet à l'utilisateur de consulter ses contrats et de modifier ses informations personnelles.")]),_vm._v(" "),_c('p',[_vm._v("Pour le moment l'application marche en local, le serveru est sur le port 5000 et le client sur le port 3000.")]),_vm._v(" "),_c('p',[_vm._v("Ce projet est développé en Javascript avec NuxtJs et NestJs, et Postgresql.")]),_vm._v(" "),_c('a',{attrs:{"href":"https://nestjs.com/","target":"blank"}},[_c('b-img',{attrs:{"src":"https://docs.nestjs.com/assets/logo-small.svg","width":"75","height":"75"}})],1),_vm._v(" "),_c('a',{attrs:{"href":"https://fr.nuxtjs.org/","target":"blank"}},[_c('b-img',{attrs:{"src":"https://nuxtjs.org/logos/nuxt-square.svg","width":"75","height":"75"}})],1),_vm._v(" "),_c('a',{attrs:{"href":"https://bootstrap-vue.org/","target":"blank"}},[_c('b-img',{attrs:{"src":"https://avatars1.githubusercontent.com/u/22965283?s=200&v=4","width":"75","height":"75"}})],1),_vm._v(" "),_c('a',{attrs:{"href":"https://www.postgresql.org/","target":"blank"}},[_c('b-img',{attrs:{"src":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png","width":"75","height":"75"}})],1)])],1),_vm._v(" "),_c('b-row',[_c('b-col',[_c('h2',[_vm._v("Roadmap")]),_vm._v(" "),_c('p',[_c('ul',[_c('li',[_vm._v("Ajout modification de mot de passe & confirmation par mail")]),_vm._v(" "),_c('li',[_vm._v("Ajouter la création de compte")]),_vm._v(" "),_c('li',[_vm._v("Ajouter la suppression de compte")]),_vm._v(" "),_c('li',[_vm._v("Ajouter un thème dark")])])])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/pages/informations/index.vue?vue&type=template&id=a1dd30b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/informations/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var informationsvue_type_script_lang_js_ = ({
  middleware: "authenticated"
});
// CONCATENATED MODULE: ./client/pages/informations/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_informationsvue_type_script_lang_js_ = (informationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./client/pages/informations/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_informationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a1dd30b0",
  "22f5eff1"
  
)

/* harmony default export */ var informations = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map