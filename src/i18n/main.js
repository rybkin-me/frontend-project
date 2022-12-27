import {createI18n} from 'vue-i18n'

export const i18n = createI18n({
    locale: 'ru',
    allowComposition: true,
    legacy: false,
    messages: {
        en: {
            menu: {
                groups: 'Groups',
                subjects: 'Subjects',
                tasks: 'Tasks',
                account: 'Account',
                home: 'Home'
            },
            auth: {
                signin: 'Sign In',
                signup: 'Sign Up',
                signout: 'Log out'
            }
        },
        ru: {
            menu: {
                groups: 'Группы',
                subjects: 'Предметы',
                tasks: 'Задания',
                account: 'Аккаунт',
                home: 'Главная'
            },
            auth: {
                signin: 'Войти',
                signup: 'Зарегистрироваться',
                signout: 'Выйти'
            }
        }
    }
})

console.log(i18n.allowComposition) // output is true
