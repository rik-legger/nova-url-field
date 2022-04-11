Nova.booting((Vue, router) => {
    Vue.component('index-url-field', require('./components/IndexField').default);
    Vue.component('detail-url-field', require('./components/DetailField').default);
    Vue.component('form-url-field', require('./components/FormField').default);
})
