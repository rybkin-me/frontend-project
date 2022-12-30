import {ElNotification} from "element-plus";

export const COURSE_STATUS = {
    'STUDENT': 1,
    'ADMIN': 2,
    'TEACHER': 3,
    'TUTOR': 4,
}

export const LOCALES = {
    1: 'ru',
    2: 'en'
}

export const flipObject = function (data) {
    return Object.fromEntries(
        Object
            .entries(data)
            .map(([key, value]) => [value, key])
    )
};

export const processError = function (error) {
    if (error !== null) {
        console.error(error)
        ElNotification({
            title: 'Error',
            message: "Something's wrong I can feel it",
            type: 'error',
        })
    }
}