const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = async client => {
    client.user.setPresence({ activity: { type: "WATCHING", name: `૨ashew ♥ Gökmen`}, status: 'idle' })
  };
  
  
  // Status
  // online - Çevrimiçi
  // idle - Boşta
  // dnd - Rahatsız Etmeyin
  
  // Type
  // WATCHING - İZLİYOR
  // PLAYING - OYNUYOR
  // LISTENING - DİNLİYOR
  
  
  // "૨ashew ♥ Gökmen" Yazan Kısıma İstediğiniz Durumunu Yazabilirsiniz 