// import * as Vue from 'vue'
import { createApp } from "vue";
import App from './App.vue';
import router from './router/index'
import store from './store/index'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { defineRule } from 'vee-validate';
// import { AllRules } from '@vee-validate/rules/dist/vee-validate-rules';

// Object.keys(AllRules).forEach(rule => {
//     defineRule(rule, AllRules[rule]);
// });

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});
defineRule('email', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    // Check if email
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
        return 'This field must be a valid email';
    }
    return true;
});

defineRule('minLength', (value, [limit]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    if (value.length < limit) {
        return `This field must be at least ${limit} characters`;
    }
    return true;
});
defineRule('minMax', (value, [min, max]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
        return `This field must be greater than ${min}`;
    }
    if (numericValue > max) {
        return `This field must be less than ${max}`;
    }
    return true;
});
defineRule('confirmed', (value, [target], ctx) => {
    if (value === ctx.form[target]) {
        return true;
    }
    return 'Passwords must match';
});


createApp(App).use(router).use(store).mount('#app')
// import router from './router/index'
// new Vue({
//     el:"#app",
//     router,
//     render: h => h(App)
// });
