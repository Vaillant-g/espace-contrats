(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(e,t,o){var content=o(218);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("101cb41e",content,!0,{sourceMap:!1})},217:function(e,t,o){"use strict";var r=o(213);o.n(r).a},218:function(e,t,o){(t=o(40)(!1)).push([e.i,".submitbutton[data-v-11131c72]{background-color:#02c58e!important}",""]),e.exports=t},226:function(e,t,o){"use strict";o.r(t);var r={middleware:"authenticated",data:function(){return{form:{identifiant:"",nom:"",prenom:"",email:"",telephone:""},show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onClick:function(e){this.$store.commit("logout"),this.$router.push("/")}}},n=(o(217),o(30)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"espaceclient"}},[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{md:"4"}},[o("h1",[e._v("Espace client")]),e._v(" "),e.show?o("b-form",{on:{submit:e.onSubmit}},[o("b-form-group",{attrs:{id:"input-group-2",label:"Identifiant:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"identifiant",required:"",placeholder:"identifiant"},model:{value:e.form.identifiant,callback:function(t){e.$set(e.form,"identifiant",t)},expression:"form.identifiant"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Prénom:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"prenom",required:"",placeholder:"prénom"},model:{value:e.form.prenom,callback:function(t){e.$set(e.form,"prenom",t)},expression:"form.prenom"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Nom:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"nom",required:"",placeholder:"nom"},model:{value:e.form.nom,callback:function(t){e.$set(e.form,"nom",t)},expression:"form.nom"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Téléphone:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"prénom"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),e._v(" "),o("b-button",{attrs:{classs:"submitbutton",type:"submit",variant:"outline-secondary"}},[e._v("Valider")])],1):e._e()],1)],1),e._v(" "),o("b-row",[o("b-col",[o("h1",[e._v("Déconnexion")]),e._v(" "),o("p",[e._v("Vous déconnecter fermera votre session.")]),e._v(" "),o("b-button",{attrs:{variant:"danger"},on:{click:e.onClick}},[e._v("Déconnexion")])],1)],1)],1)],1)}),[],!1,null,"11131c72",null);t.default=component.exports}}]);