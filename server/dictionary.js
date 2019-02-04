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
        "Logout": ["Logout", "Выход"],
        "Balance": ["Balance", "Баланс"],
        "Currency": ["Currency", "Валюта"],
        "Awaiting deposit": ["Awaiting deposit", "Ожидаемый депозит"],
        "Reserved in orders": ["Reserved in orders", "Зазервировано в ордерах"],
        "Wallet Management": ["Wallet Management", "Управление кошельком"],
        "Deposit": ["Deposit", "Депозит"],
        "Withdraw": ["Withdraw", "Вывод"],
        "History": ["History", "Выписка"],
        "Username": ["Username", "Имя пользователя"],
        "This field is required": ["This field is required", "Это поле обязательно заполнить"],
        "Email": ["Email", "Адрес почты"],
        "Please enter valid email": ["Please enter valid email", "Пожалуйста введите правильный адрес почты"],
        "Current password": ["Current password", "Актуальный пароль"],
        "New password": ["New password", "Новый пароль"],
        "New password (again)": ["New password (again)", "Новый пароль (проверка)"],
        "Update": ["Update", "Обновить"],
        "ForkoFranko Fees": ["ForkoFranko Fees", "Комиссии ForkoFranko"],
        "Minimal balance": ["Minimal balance", "Минимальный баланс"],
        "The commission is appointed by the coin blockchain. To ensure the withdrawal, we will freeze the minimum balance": ["The commission is appointed by the coin blockchain. To ensure the withdrawal, we will freeze the minimum balance", "Комиссия определяется Блокчейном. Чтоб обеспечить вывод мы замораживаем на счету Миинмальный баланс"],
        "Withdraw Commission": ["Withdraw Commission", "Коммисия на вывод"],
        "All cryptocurrencies have a 0.0% commission": ["All cryptocurrencies have a 0.0% commission", "Все монеты имеют 0% комиссии"],
        "Deposit Commission": ["Deposit Commission", "Комиссия на ввод"],
        "All trades have a 0.1% commission": ["All trades have a 0.1% commission", "Все сделки совершаются с комиссией 0.1%"],
        "Trading Commission": ["Trading Commission", "Торговая комиссия"]
    }
};
