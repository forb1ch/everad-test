(function() {
    'use strict';
    window.countryList = {
        ru: {
            name: 'Россия',
            code: 'ru',
            price: 990,
            oldPrice: 1980,
            labelPrice: ' руб.',
            phoneHelper: 'Например +7 9031234567',
            nameHelper: 'Екатерина Самойлова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения',
            isDefault: true
        },
        at: {
            name: 'Австрия',
            code: 'at',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +43 123456789',
            nameHelper: 'Мари Штайн',
            nameError: 'Der name erforderlich',
            phoneError: 'Numéro incorrectement spécifié',
            countryError: 'Nummer falsch angegeben'
        },
        al: {
            name: 'Албания',
            code: 'al',
            price: 3990,
            oldPrice: 7980,
            labelPrice: ' лек',
            phoneHelper: 'Например +355 123456789"',
            nameHelper: 'Мария Цони',
            nameError: 'Име је обавезно',
            phoneError: 'Број телефона је обавезан',
            countryError: 'Држава је обавезна'
        },
        by: {
            name: 'Беларусь',
            code: 'by',
            price: 290,
            oldPrice: 580,
            labelPrice: ' т.р.',
            phoneHelper: 'Например +375 123456789',
            nameHelper: 'Маргарыта Концява',
            nameError: 'Імя абавязковы для запаўнення',
            phoneError: 'Тэлефон абавязковы для запаўнення',
            countryError: 'Краіна абавязковы для запаўнення'
        },
        bg: {
            name: 'Болгария',
            code: 'bg',
            price: 59,
            oldPrice: 118,
            labelPrice: ' лева',
            phoneHelper: 'Например +359 12345678',
            nameHelper: 'Маргарыта Концява',
            nameError: 'Името е задължително',
            phoneError: 'Телефонният номер е задължителен',
            countryError: 'Страната е задължителна'
        },
        ba: {
            name: 'Босния и Герцеговина',
            code: 'ba',
            price: 49,
            oldPrice: 98,
            labelPrice: ' KM',
            phoneHelper: 'Например +387 12345678',
            nameHelper: 'Маргарыта Концява',
            nameError: 'Име је обавезно',
            phoneError: 'Број телефона је обавезан',
            countryError: 'Држава је обавезна'
        },
        hu: {
            name: 'Венгрия',
            code: 'hu',
            price: 8900,
            oldPrice: 17800,
            labelPrice: ' Ft',
            phoneHelper: 'Например +36 12345678',
            nameHelper: 'Анна Гизелла',
            nameError: 'A név kötelezően kitöltendő',
            phoneError: 'A telefonszám kötelezően kitöltendő',
            countryError: 'Az ország kötelezően kitöltendő'
        },
        de: {
            name: 'Германия',
            code: 'de',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +490 123456789',
            nameHelper: 'Анна Штайн',
            nameError: "Der name erforderlich",
            phoneError: "Numéro incorrectement spécifié",
            countryError: "Nummer falsch angegeben",
        },
        gr: {
            name: 'Греция',
            code: 'gr',
            price: 29,
            oldPrice: 58,
            labelPrice: ' евро',
            phoneHelper: 'Например +30 1234567890',
            nameHelper: 'Анна Бенаки',
            nameError: 'Απαιτείται όνομα',
            phoneError: 'Εσφαλμένα καθορισμένο αριθμό',
            countryError: 'Απαιτείται χώρα'
        },
        es: {
            name: 'Испания',
            code: 'es',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +34 123456789',
            nameHelper: 'Кассандра Мерино',
            nameError: 'Nombre (campo obligatorio)',
            phoneError: 'Número incorrectamente especificado',
            countryError: 'Debe introducir un país',
        },
        it: {
            name: 'Италия',
            code: 'it',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +390 123456789',
            nameHelper: 'Франческа Росси',
            nameError:'Le nom obligatoire',
            phoneError:'Il nome obbligatoria',
            countryError:'Il nome del paese obbligatoria'
        },
        kz: {
            name: 'Казахстан',
            code: 'kz',
            price: 5390,
            oldPrice: 11000,
            labelPrice: ' тг.',
            phoneHelper: 'Например +77 123456789',
            nameHelper: 'Айжаксым Омарова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения'
        },
        cy: {
            name: 'Кипр',
            code: 'cy',
            price: 29,
            oldPrice: 58,
            labelPrice: ' евро',
            phoneHelper: 'Например +357 12345678',
            nameHelper: 'Анна Бенаки',
            nameError: 'Απαιτείται όνομα',
            phoneError: 'Εσφαλμένα καθορισμένο αριθμό',
            countryError: 'Απαιτείται χώρα'
        },
        kg: {
            name: 'Киргизия',
            code: 'kg',
            price: 1399,
            oldPrice: 2799,
            labelPrice: 'сом',
            phoneHelper: 'Например +996 123456789',
            nameHelper: 'Жазгуль Кирдякова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения'
        },
        lv: {
            name: 'Латвия',
            code: 'lv',
            price: 24,
            oldPrice: 48,
            labelPrice: ' евро',
            phoneHelper: 'Например +371 12345678',
            nameHelper: 'Санита Берзиньш',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения'
        },
        lt: {
            name: 'Литва',
            code: 'lt',
            price: 24,
            oldPrice: 48,
            labelPrice: ' евро',
            phoneHelper: 'Например +370 12345678',
            nameHelper: 'Лайма Дауканте',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения'
        },
        li: {
            name: 'Лихтенштейн',
            code: 'li',
            price: 60,
            oldPrice: 120,
            labelPrice: ' CHF',
            phoneHelper: 'Например +423 1234567',
            nameHelper: 'Анна Штайн',
            nameError: 'Die Angabe des Namens ist erforderlich',
            phoneError: 'Falsch angegebene Anzahl',
            countryError: 'Das Land ist eine Pflichtangabe'
        },
        mk: {
            name: 'Македония',
            code: 'mk',
            price: 1990,
            oldPrice: 3980,
            labelPrice: ' ден.',
            phoneHelper: 'Например +389 12345678',
            nameHelper: 'Маргарыта Концява',
            nameError: 'Име је обавезно',
            phoneError: 'Број телефона је обавезан',
            countryError: 'Држава је обавезна'
        },
        md: {
            name: 'Молдавия',
            code: 'md',
            price: 399,
            oldPrice: 798,
            labelPrice: ' лей',
            phoneHelper: 'Например +373 12345678',
            nameHelper: 'Elena Ionescu',
            nameError: 'Numele dorit pentru a umple',
            phoneError: 'Telefon necesare pentru a umple',
            countryError: 'Țara este necesară pentru a umple'
        },
        pl: {
            name: 'Польша',
            code: 'pl',
            price: 139,
            oldPrice: 278,
            labelPrice: ' zł',
            phoneHelper: 'Например +373 12345678',
            nameHelper: 'Тома Черняк',
            nameError: 'Imię (wymagane)',
            phoneError: 'Błędnie podany numer',
            countryError: 'Kraj (wymagany)'
        },
        pt: {
            name: 'Португалия',
            code: 'pt',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +351 123456789',
            nameHelper: 'Рейчел Диаз',
            nameError: 'Nome obrigatório',
            phoneError: 'Número especificado incorretamente',
            countryError: 'País obrigatório'
        },
        ro: {
            name: 'Румыния',
            code: 'ro',
            price: 139,
            oldPrice: 278,
            labelPrice: ' RON',
            phoneHelper: 'Например +40 123456789',
            nameHelper: 'Карла Бонотто',
            nameError: 'Este necesar să indicaţi numele',
            phoneError: 'Este necesar să indicaţi numărul de telefon',
            countryError: 'Este necesar să indicaţi ţara'
        },
        rs: {
            name: 'Сербия',
            code: 'rs',
            price: 2190,
            oldPrice: 4380,
            labelPrice: ' din.',
            phoneHelper: 'Например +381 123456789',
            nameHelper: 'Майя Войнович',
            nameError: 'Име је обавезно',
            phoneError: 'Број телефона је обавезан',
            countryError: 'Држава је обавезна'
        },
        sk: {
            name: 'Словакия',
            code: 'sk',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +421 123456789',
            nameHelper: 'Майя Войнович',
            nameError: 'Meno je povinné',
            phoneError: 'Nesprávne zadaný počet',
            countryError: 'Krajina je povinná'
        },
        si: {
            name: 'Словения',
            code: 'si',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +386 12345678',
            nameHelper: 'Майя Войнович',
            nameError: 'Ime zahtevano',
            phoneError: 'Nepravilno določeno število',
            countryError: 'Država zahtevano'
        },
        uz: {
            name: 'Узбекистан',
            code: 'uz',
            price: 59,
            oldPrice: 119,
            labelPrice: ' т.сум',
            phoneHelper: 'Например +998 123456789',
            nameHelper: 'Гультапчан Наркисова',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения'
        },
        ua: {
            name: 'Украина',
            code: 'ua',
            price: 399,
            oldPrice: 798,
            labelPrice: ' грн.',
            phoneHelper: 'Например +380 123456789',
            nameHelper: 'Анастасія Кравчук',
            nameError: 'Імя обовязково для заповнення',
            phoneError: 'Телефон обовязковий для заповнення',
            countryError: 'Країна обовязковий для заповнення'
        },
        ee: {
            name: 'Эстония',
            code: 'ee',
            price: 24,
            oldPrice: 48,
            labelPrice: ' евро',
            phoneHelper: 'Например +372 12345678',
            nameHelper: 'София Йуримаа',
            nameError: 'Имя обязательно для заполнения',
            phoneError: 'Телефон обязателен для заполнения',
            countryError: 'Страна обязательна для заполнения'
        },
        fr: {
            name: 'Франция',
            code: 'fr',
            price: 39,
            oldPrice: 78,
            labelPrice: ' евро',
            phoneHelper: 'Например +33 123456789',
            nameHelper: 'Мари Бриард',
            nameError: 'Le nom obligatoire',
            phoneError: 'Numéro incorrectement spécifié',
            countryError: 'Nom du pays obligatoire'
        },
        hr: {
            name: 'Хорватия',
            code: 'hr',
            price: 299,
            oldPrice: 598,
            labelPrice: ' HRK',
            phoneHelper: 'Например +385 12345678',
            nameHelper: 'Мария Новак',
            nameError: 'Potrebno ime',
            phoneError: 'Potreban broj telefona',
            countryError: 'Potrebna država'
        },
        me: {
            name: 'Черногория',
            code: 'me',
            price: 29,
            oldPrice: 58,
            labelPrice: ' евро',
            phoneHelper: 'Например +382 12345678',
            nameHelper: 'Майя Войнович',
            nameError: 'Име је обавезно',
            phoneError: 'Број телефона је обавезан',
            countryError: 'Држава је обавезна'
        },
        cz: {
            name: 'Чехия',
            code: 'cz',
            price: 790,
            oldPrice: 1580,
            labelPrice: ' CZK',
            phoneHelper: 'Например +420 123456789',
            nameHelper: 'Мария Хладкова',
            nameError: 'Povinné jméno',
            phoneError: 'Nesprávně zadaný počet',
            countryError: 'Povinná země'
        },
        ch: {
            name: 'Швейцария',
            code: 'ch',
            price: 60,
            oldPrice: 120,
            labelPrice: ' CHF',
            phoneHelper: 'Например +41 123456789',
            nameHelper: 'Анна Штайн',
            nameError: 'Le nom obligatoire',
            phoneError: 'Numéro incorrectement spécifié',
            countryError: 'Nom du pays obligatoire'
        }
    };
})();