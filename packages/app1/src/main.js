import { createApp } from 'vue';
import App from './App.vue';
import { MyComponent } from 'common/src';

const app = createApp(App);
app.component('MyComponent', MyComponent);
app.mount('#app');