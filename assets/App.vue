<template>
  <div>
    <Navbar/>
    <div fluid >
      <Register />
      <router-view/>
    </div>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Register from "./Views/Register.vue";
import * as Yup from 'yup';

export default {
  name: 'App',
  components: {
    Register,
    Navbar
  },
  data: () => ({
    email: '',
    firstName: '',
    lastName: ''
  }),
  methods: {
    onSubmit () {
      alert('Form has been submitted!');
    }
  }
};
</script>

<style>


</style>
