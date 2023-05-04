<template>
  <div id="app">
    <v-form :validation-schema="schema" @submit="onSubmit" v-slot="{ isSubmitting }">
      <label>
        Name
        <v-field name="name" type="text"></v-field>
      </label>
      <error-message name="name"></error-message>
      <label>
        Email
        <v-field name="email" type="email"></v-field>
      </label>
      <error-message name="email"></error-message>

      <label>
        Password
        <v-field name="password" type="password"></v-field>
      </label>
      <error-message name="password"></error-message>

      <button :disabled="isSubmitting" :class="{ 'submitting': isSubmitting }">
        Submit
      </button>
    </v-form>
  </div>
</template>
<!--<script setup>-->
<!--import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate';-->
<!--import * as yup from 'yup';-->
<!--const schema = yup.object({-->
<!--  email: yup.string().required().email(),-->
<!--  password: yup.string().required().min(8),-->
<!--});-->
<!--function onSubmit(values) {-->
<!--  // Submit values to API...-->
<!--  alert(JSON.stringify(values, null, 2));-->
<!--}-->
<!--</script>-->
// const schema = yup.object({
//   email: yup.string().required().email(),
//   password: yup.string().required().min(8),
//   name: yup.string().required().min(5),
// });
// function onSubmit(values) {
//
//   console.log(values)
//   let dataForm ={
//     'name':values.name,
//     'email':values.email,
//     'password':values.password,
//   }
//   this.register(dataForm)
//       .then(()=>{
//         console.log('final')
//       }).catch((e)=>{
//     console.log(e);
//   })
//
//   // alert(JSON.stringify(values, null, 2));
// }
<!--</script>-->
<script >
// const App = {
//   components: {
//     // Components were renamed to avoid conflicts of HTML form element without a vue compiler
//     VForm: VeeValidate.Form,
//     VField: VeeValidate.Field,
//     ErrorMessage: VeeValidate.ErrorMessage,
//   },
//
// }
//
// Vue.createApp(App).mount('#app')
// import { Form, Field, ErrorMessage } from 'vee-validate';
// import * as yup from 'yup';
// export default {
//   name: "Register",
//   components: {
//     // Form,
//     // Field,
//     // ErrorMessage,
//     VForm: Form,
//     VField: Field,
//     ErrorMessage: ErrorMessage,
//   },
//   methods:{
//     // ...mapActions({
//     //   register: '/register'
//     // }),
//     onSubmit(){
//       console.log(this.form)
//     }
//   },
//   // props: {
//   //   schema : {
//   //     email: 'required|email',
//   //     password: 'required|minLength:8',
//   //     confirmation: 'required|confirmed:password|minLength:8',
//   //   }
//   //   // schema: {
//   //   //   type: Object,
//   //   //   required: true,
//   //   // },
//   // },
// };

// const schema = yup.object({
//   email: yup.string().required().email(),
//   password: yup.string().required().min(8),
//   name: yup.string().required().min(5),
// });
// function onSubmit(values) {
//
//   console.log(values)
//   let dataForm ={
//     'name':values.name,
//     'email':values.email,
//     'password':values.password,
//   }
// };

import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import {mapActions} from 'vuex'
export default {
  name: "Register",
  components: {
    // Form,
    // Field,
    // ErrorMessage,
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  data: () => ({
    schema: yup.object().shape({
      email: yup.string().email().required(),
      name: yup.string().required(),
      password: yup.string().min(8).required(),
    }),
  }),
  methods: {
    ...mapActions({
      register: 'register'
    }),

    onSubmit(values) {
      let dataForm ={
        'name':values.name,
        'email':values.email,
        'password':values.password,
      }
      console.log(dataForm)
      this.register(dataForm)
      .then(()=>{
        console.log("fin");
      }).catch((e)=>{
        console.log(e);
      })

      // alert(JSON.stringify(values, null ,2));

      // return new Promise(resolve => {
      //   setTimeout(() => {
      //   }, 2000);
      // })
    },

  }
//     // ...mapActions({
//     //   register: '/register'
//     // }),
//     onSubmit(){
//       console.log(this.form)
//     }
  // props: {
  //   schema : {
  //     email: 'required|email',
  //     password: 'required|minLength:8',
  //     confirmation: 'required|confirmed:password|minLength:8',
  //   }
  //   // schema: {
  //   //   type: Object,
  //   //   required: true,
  //   // },
  // },
};

// const schema = yup.object({
//   email: yup.string().required().email(),
//   password: yup.string().required().min(8),
//   name: yup.string().required().min(5),
// });
// function onSubmit(values) {
//
//   console.log(values)
//   let dataForm ={
//     'name':values.name,
//     'email':values.email,
//     'password':values.password,
//   }
// };
</script>
<style scoped>

</style>
