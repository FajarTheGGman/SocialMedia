// please don't recode my program because i take a long time to create this program :)
// Copyright© by Fajar Firdaus

var req = require("request");
var r = require("readline");
var warna = require("colors");
var box = require("boxen");

const a = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(warna.blue(box("[=================]\n" + "\nCoder : Fajar Firdaus\n" + "\nFB : Fajar Firdaus\n" + "\nIG : fajar_firdaus_7\n" + "\nYT : iTech7732\n" + "\n[=================]\n", {padding:1}) + "\n"))
console.log(warna.rainbow("[-=- SocialMedia By Fajar Firdaus -=-]\n"))
console.log(warna.blue("Version 1.0\n"))

a.question("[Input User Profile] : ", (user) => {
    console.log(warna.red("\n[!] Type Ctrl + c to exit"));
    req("https://www.facebook.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://www.facebook.com/`${user}` =>" + " Not avaible"));
        }else{
            console.log(warna.green("https://www.facebook.com/`${user}` =>" + " Avaible"));
        }
    })
    req("https://www.instagram.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://www.instagram.com/`{$user}` =>" + " Not avaible"));
        }else{
            console.log(warna.green("https://www.instagram.com/${user} =>" + " Avaible"));
        }
    })
    req("https://github.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://github.com/`${user}` => Not avaible"));
        }else{
            console.log(warna.green("https://github.com/`${user}` => Avaible"))
        }
    })
    req("https://twiter.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://twiter.com/`${user}` => Not avaible"));
        }else{
            console.log(warna.green("https://twiter.com/`${user}` => Avaible"))
        }
    })
    req("https://youtube.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://youtube.com/`${user}` => Not avaible"));
        }else{
            console.log(warna.green("https://youtube.com/`${user}` => Avaible"))
        }
    })
    req("https://soundcloud.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://soundcloud.com/`${user}` => Not avaible"));
        }else{
            console.log(warna.green("https://soundcloud.com/`${user}` => Avaible"))
        }
    });
    
})
