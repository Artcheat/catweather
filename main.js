import {Telegraf} from "telegraf";
import {config} from "./config.js";
import {getWeather} from "./weather.js"
import {getCat} from "./cats.js"
import {showMenu, closeMenu} from "./menu.js"


const bot = new Telegraf(config.token, {});

bot.start((ctx) => ctx.reply('Добро пожаловать в бот. Для начала напишите "меню"'));
bot.launch()

bot.on("message", async ctx => {
    const chatID = ctx.chat.id;
    if (ctx.message.text == "меню") {
        showMenu(bot, chatID);
    }else if(ctx.message.location) {
       let weather = await getWeather(ctx);
       ctx.reply(weather);
    }
    else if(ctx.message.text == "Закрыть"){
        closeMenu(bot, chatID);
    }    
    else if(ctx.message.text = "Получить мем кота"){
        let cat = await getCat();
        ctx.reply(cat);       
    };
    
    
})

