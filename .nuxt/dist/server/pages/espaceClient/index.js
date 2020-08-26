exports.ids = [2];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("101cb41e", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11131c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11131c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11131c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11131c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11131c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11131c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".submitbutton[data-v-11131c72]{background-color:#02c58e!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/espaceClient/index.vue?vue&type=template&id=11131c72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"espaceclient"}},[_c('b-container',{attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{attrs:{"md":"4"}},[_c('h1',[_vm._v("Espace client")]),_vm._v(" "),(_vm.show)?_c('b-form',{on:{"submit":_vm.onSubmit}},[_c('b-form-group',{attrs:{"id":"input-group-2","label":"Identifiant:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"identifiant","required":"","placeholder":"identifiant"},model:{value:(_vm.form.identifiant),callback:function ($$v) {_vm.$set(_vm.form, "identifiant", $$v)},expression:"form.identifiant"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-2","label":"Prénom:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"prenom","required":"","placeholder":"prénom"},model:{value:(_vm.form.prenom),callback:function ($$v) {_vm.$set(_vm.form, "prenom", $$v)},expression:"form.prenom"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-2","label":"Nom:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"nom","required":"","placeholder":"nom"},model:{value:(_vm.form.nom),callback:function ($$v) {_vm.$set(_vm.form, "nom", $$v)},expression:"form.nom"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-1","label":"Email address:","label-for":"email"}},[_c('b-form-input',{attrs:{"id":"email","type":"email","required":"","placeholder":"Enter email"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-2","label":"Téléphone:","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"input-2","required":"","placeholder":"prénom"},model:{value:(_vm.form.telephone),callback:function ($$v) {_vm.$set(_vm.form, "telephone", $$v)},expression:"form.telephone"}})],1),_vm._v(" "),_c('b-button',{attrs:{"classs":"submitbutton","type":"submit","variant":"outline-secondary"}},[_vm._v("Valider")])],1):_vm._e()],1)],1),_vm._v(" "),_c('b-row',[_c('b-col',[_c('h1',[_vm._v("Déconnexion")]),_vm._v(" "),_c('p',[_vm._v("Vous déconnecter fermera votre session.")]),_vm._v(" "),_c('b-button',{attrs:{"variant":"danger"},on:{"click":_vm.onClick}},[_vm._v("Déconnexion")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/pages/espaceClient/index.vue?vue&type=template&id=11131c72&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/espaceClient/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var espaceClientvue_type_script_lang_js_ = ({
  middleware: "authenticated",

  data() {
    return {
      form: {
        identifiant: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: ""
      },
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

    onClick(evt) {
      this.$store.commit("logout");
      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./client/pages/espaceClient/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_espaceClientvue_type_script_lang_js_ = (espaceClientvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./client/pages/espaceClient/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_espaceClientvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11131c72",
  "10d4c7d6"
  
)

/* harmony default export */ var espaceClient = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map