import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: require('./en.json'),
  zh: require('./zh.json')
}

export default new VueI18n({
  locale: 'en', // set locale
  messages
})
