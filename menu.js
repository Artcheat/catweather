export const showMenu = (bot, chatID) => {
    bot.telegram.sendMessage(chatID, "Выберите действие",{
        reply_markup:{
            keyboard: [
                [{text:"Узнать погоду",request_location: true },],
                    ['Получить мем кота'],
                    ['Закрыть'],

                
            ],
        },
    });

};

export const closeMenu = (bot, chatID) => {
    bot.telegram.sendMessage(chatID, "Клавиатура закрыта", {
        reply_markup: {
            remove_keyboard: true 
        }
    })


}