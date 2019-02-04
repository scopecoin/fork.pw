'use strict';

exports.object = {
    c : function(strCoin) {
        try {
            return exports.object[strCoin][exports.object.coin];
        }
        catch(e) {
            return strCoin;
        }
    },
    l : function(str) {
        try {
            return this.dict['_words_'][str][this.dict.lang];
        }
        catch(e) {
            return str;
        }
    },
    setLanguage : function(lang) {
        if (lang == 'en')
            this.lang = 0;
        if (lang == 'ru')
            this.lang = 1;
    },
    'lang' : 0,
    '_words_' : {
        'Buy' : ['Buy', 'Купить'],
        'Sell' : ['Sell', 'Продать'],
        'buy' : ['buy', 'купить'],
        'Faucet' : ['Faucet', 'Кран'],
        'Forum' : ['Forum', 'Форум'],
        'sell' : ['sell', 'продать'],
        'Buying' : ['Buying', 'Покупка'],
        'Selling' : ['Selling', 'Продажа'],
        'Help' : ['Help', 'Помощь'],
        'Wallet' : ['Wallet', 'Кошелек'],
        'Exchange' : ['Exchange', 'Обменник'],
        'Trade' : ['Trade', 'Биржа'],
        'Add Coin': ['Add Coin', 'Листинг проекта'],
        'Support' : ['Support', 'Поддержка'],
        'Fees' : ['Fees', 'Комиссии'],
        'Admin Area': ['Admin Area', 'Админка'],
        'Submit': ['Submit', 'Отправить'],
        'Highest Ask': ['Highest Ask', 'Высочайший запрос'],
        'Highest Bid': ['Highest Bid', 'Лучшее предложение'],
        'Login' : ['Login', 'Вход'],
        'Your active orders' : ['Your active orders', 'Ваши активные заявки'],
        'Your history' : ['Your history', 'Ваши исполненные заявки'],
        'Trade history' : ['Trade history', 'История торгов'],
        'Forgot your password?' : ['Forgot your password?', 'Забыли пароль?'],
        'New to OpenTrade?' : ['New to OpenTrade?', 'Еще не зарегистрированы на OpenTrade?'],
        'Sign up now!' : ['Sign up now!', 'Зарегистрироваться сейчас!'],
        'OpenTrade - Open Source Cryptocurrency Exchange' : ['OpenTrade - Open Source Cryptocurrency Exchange', 'OpenTrade - Биржа криптовалют с открытым кодом'],
        'Your balance': ['Your balance', 'Ваш баланс'],
        'Buy': ['Buy', 'Купить'],
        'Sell': ['Sell', 'Продать'],
        'Amount': ['Amount', 'Количество'],
        'Price': ['Price', 'Цена'],
        'Comission': ['Comission', 'Комиссия'],
        'Total': ['Total', 'Всего'],
        "Time": ["Time", "Время"],
        "Type": ["Type", "Тип"],
        "Volume": ["Volume", "Объем"],
        "Buy orders": ["Buy orders", "Ордера покупки"],
        "Coin": ["Coin", "Монета"],
        "Change": ["Change", "Изменение"],
        "Sell orders": ["Sell orders", "Ордера продажи"],
        "Chat": ["Chat", "Чат"],
        "Online": ["Online", "Онлайн"],
        "Registered": ["Registered", "Зарегистрировано"],
        "Close": ["Close", "Закрыть"],
        "Selling": ["Selling", "Продажа"],
        "Buying": ["Buying", "Купля"],
        "Market": ["Market", "Рынок"],
        "free Crypto Market": ["free Crypto Market", "свободный Крипто Рынок"],
        "Profile": ["Profile", "Профиль"],
        "Logout": ["Logout", "Выход"]
    }
};
