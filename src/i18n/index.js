import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: require('./en.json'),
  ru: require('./ru.json'),
  cn: require('./cn.json')
}

export default new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages
})
