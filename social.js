// Copyright© by Fajar Firdaus

var req = require("request");
var r = require("readline");
var warna = require("colors");
var box = require("boxen");

const a = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(warna.blue(box("[=================]" + "\nCoder : Fajar Firdaus" + "\nFB : Fajar Firdaus" + "\nIG : fajar_firdaus_7" + "\nYT : iTech7732\n" + "Github : FajarTheGGman\n" + "[=================]", {padding:1})))
console.log(warna.rainbow("[-=- SocialMedia By Fajar Firdaus -=-]\n"))
console.log(warna.blue("Version 1.0\n"))

a.question("[Input User Profile] : ", (user) => {
    console.log(warna.red("\n[!] Type Ctrl + c to exit \n"))
    req("https://www.facebook.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://www.facebook.com/" + `${user}` + " => " + " Not avaible"));
        }else{
            console.log(warna.green("https://www.facebook.com/" + `${user}` + " => " + " Avaible"));
        }
    })
    req("https://www.instagram.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://www.instagram.com/"+ `${user}` + " => " + "Not avaible"));
        }else{
            console.log(warna.green("https://www.instagram.com/"+ `${user}` + " => " + "Avaible"));
        }
    })
    req("https://github.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://github.com/"+ `${user}` + " => " + "Not avaible"));
        }else{
            console.log(warna.green("https://github.com/"+ `${user}` + " => " + "Avaible"))
        }
    })
    req("https://twiter.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://twiter.com/"+ `${user}` + " => " + "Not avaible"));
        }else{
            console.log(warna.green("https://twiter.com/"+ `${user}` + " => " + "Avaible"))
        }
    })
    req("https://youtube.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://youtube.com/"+ `${user}` + " => " + "Not avaible"));
        }else{
            console.log(warna.green("https://youtube.com/"+ `${user}` + " => " + "Avaible"))
        }
    })
    req("https://soundcloud.com/" + `${user}`, function(error, response, body){
        if(response.statusCode == 404){
            console.log(warna.red("https://soundcloud.com/"+ `${user}` + " => " + "Not avaible"));
        }else{
            console.log(warna.green("https://soundcloud.com/"+ `${user}` + " => " + "Avaible"))
        }
    });
    
})
