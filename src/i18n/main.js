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
                signIn: 'Sign in',
                signInPrompt: 'Sign in',
                signUp: 'Sign up',
                signUpPrompt: 'Sign up',
                signOutPrompt: 'Log out',
                authorization: 'Authorization',
                password: 'Password',
                fio: 'Full name',
                repeatPassword: 'Repeat password'
            },
            messages: {
                formValidation: {
                    requiredNotFilled: 'This field is required',
                    minLength: 'Minimum length is {0}',
                    wrongTypeEmail: 'Please enter email',
                }
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
                signIn: 'Вход',
                signInPrompt: 'Войти',
                signUp: 'Регистрация',
                signUpPrompt: 'Зарегистрироваться',
                signOutPrompt: 'Выйти',
                authorization: 'Авторизация',
                password: 'Пароль',
                fio: 'ФИО',
                repeatPassword: 'Повторите пароль'
            },
            messages: {
                formValidation: {
                    requiredNotFilled: 'Это обязательное поле',
                    minLength: 'Минимальная длина – {0}',
                    wrongTypeEmail: 'Нужно ввести email',
                }
            }
        }
    }
})

console.log(i18n.allowComposition) // output is true
