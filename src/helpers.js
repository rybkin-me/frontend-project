export const GROUP_STATUS = {
    'STUDENT': 1,
    'ADMIN': 2,
    'TEACHER': 3,
    'TUTOR': 4,
}

export const LOCALES = {
    1: 'ru',
    2: 'en'
}

export const flipObject = (data) => Object.fromEntries(
    Object
        .entries(data)
        .map(([key, value]) => [value, key])
);