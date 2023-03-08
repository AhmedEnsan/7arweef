
let y = 'a';
i = 1;
let v;
keys = [];
document.addEventListener('keydown', (events) => {
    if (events.key === "Shift" || events.key === "Alt" || events.key === "ArrowUp" || events.key === "ArrowDown" || events.key === "ArrowRight" || events.key === "ArrowLeft") {
        console.log("unValidKey")
    }
    else {
        if (events.key === "Enter" && `${keys}` === `${generatedNameArr}`) {
            for (let iiii = 1; iiii < 6; iiii++){
                idAllGreen = document.getElementById(y + iiii);
                Object.assign(idAllGreen.style,{backgroundColor:"green"});
            };
            y = 'a';
            console.log("i:" + i)
            alert('حريييييييييف حرووووووووف');
        }
        // else 
        else {
            console.log(events.type);
            console.log(events.key);
            const key = events.key;
            if (key === "Enter") {
                if (events.key === "Enter" && i !== 6) {
                    alert("لازم خمس حروف يانجم");
                    console.log("i:" + i);
                }
                else {
                    v = [];
                    for (let h = 0; h < keys.length; h++) {
                        
                        let matchLP = keys[h] === generatedNameArr[h];
                        if (matchLP == true) {
                            let ii = h + 1;
                            idGreen = document.getElementById(y + ii);
                            Object.assign(idGreen.style, { backgroundColor: "green" });
                            v.push(h);
                            console.log(v)
                        }
                        // for (let j = -1; j < 6; matchLP == true ? j+=2 : j++) {
                        //     let matchL = keys[h] === generatedNameArr[j];
                        //     if (matchL == true) {
                        //         let iii = h + 1;
                        //         idOrange = document.getElementById(y + iii);
                        //         Object.assign(idOrange.style, { backgroundColor: "orange" });
                        //     }
                        // };
                    };
                    for (let l = 0; l < 5; l++) {
                        for (let j = 0; j < 5; j++) {
                            let jInV = v.includes(j);
                            if (jInV == false) {
                                let matchL = keys[l] === generatedNameArr[j];
                                if (matchL == true) {
                                    let iii = l + 1;
                                    idOrange = document.getElementById(y + iii);
                                    Object.assign(idOrange.style, { backgroundColor: "orange" });
                                }
                            }
                        }
                    };
                    const shiftLetter = function (text) {
                        let s = text.split('');
                        for (let r = 0; r < s.length; r++) {
                            switch (s[r]) {
                                case ' ':
                                    break;
                                default:
                                    s[r] = String.fromCharCode(s[0].charCodeAt(0) + 1);
                            }
                        };
                        return s.join('');
                    };
                    console.log(shiftLetter(y));
                    switch (y) {
                        case "g":
                            break;
                        default:
                            y = `${shiftLetter(y)}`;
                    };
                    console.log(`${keys}`);
                    console.log(`${generatedNameArr}`);
                    console.log("y:" + y);
                    i = 1;
                    keys = [];
                }
            }
            else if (key === "Backspace") {
                uu = i - 1;
                document.getElementById(y + uu).innerHTML = "";
                i = i - 1;
                keys.pop()
            }
            else {
                document.getElementById(y + i).innerHTML = events.key;
                keys.push(events.key);
                i++;
                console.log(keys)
            };
            
        };
    };
});


// const fs = require('fs')
// // Reading data in utf-8 format
// // which is a type of character set.
// // Instead of 'utf-8' it can be
// // other character set also like 'ascii'
// fs.readFile('input.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


let names = ["اسبوع", "ثلاثة", "نهاية", "ميناء", "اضافة", "تغيير", "مصنوع", "عقوبة", "منخفض", "منعطف", "متوسط", "ارسال", "اثنين", "مدرسة", "مزرعة", "منشار", "صحافة", "حقيقة", "قاعدة", "تاكيد", "صندوق", "مذكرة", "قيادة", "غرامة", "مدينة", "حرارة", "طائرة", "مشترك", "جزيرة", "اقامة", "مشكلة", "منطقة", "سفينة", "ارقام", "اغنية", "مباشر", "احساس", "قائمة", "رعاية", "سيارة", "رسالة", "علامة", "سهولة", "اطفال", "سهولة", "موضوع", "بساطة", "خريطة", "اشعار", "تمثيل", "منطقة", "مسالة", "دائرة", "اسقاط", "غابات", "نافذة", "مليون", "تجارة", "تكلفة", "تناسب", "سيطرة", "بحيرة", "طريقة", "فستان", "سحابة", "تصميم", "برمجة", "معادن", "تجربة", "نتيجة", "قانون", "عبارة", "معركة", "طبيعة", "عاصمة", "عملية", "حماية", "تزويد"];
let rondomNumber = Math.random();
let namesLenght = names.length;
rondomNumber = namesLenght * rondomNumber;
rondomNumber = Math.floor(rondomNumber);
let generatedName = names[rondomNumber];
console.log(rondomNumber)
console.log(generatedName);
let generatedNameArr = [];
for (let n = 0; n < generatedName.length; n++) {
    generatedNameArr.push(generatedName[n])
    
}
// console.log(generatedNameArr)




function getKey(e) {
    var location = e.location;
    var selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]']
    } else {
        var code = e.keyCode || e.which;
        selector = [
            '[data-key="' + code + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
        ].join(',');
    }
    return document.querySelector(selector);
}

function pressKey (char) {
    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    if (!key) {
        return console.warn('No key for', char);
    }
    key.setAttribute('data-pressed', 'on');
    setTimeout(function () {
        key.removeAttribute('data-pressed');
    }, 200);
}

var h1 = document.querySelector('h1');
var originalQueue = h1.innerHTML;
var queue = h1.innerHTML;

function next () {
    var c = queue[0];
    queue = queue.slice(1);
    h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
    pressKey(c);
    if (queue.length) {
        setTimeout(next, Math.random() * 200 + 50);
    }
}

h1.innerHTML = "&nbsp;";
setTimeout(next, 500);

document.body.addEventListener('keydown', function (e) {
    var key = getKey(e);
    if (!key) {
        return console.warn('No key for', e.keyCode);
    }

    key.setAttribute('data-pressed', 'on');
});

document.body.addEventListener('keyup', function (e) {
    var key = getKey(e);
    key && key.removeAttribute('data-pressed');
});

function size () {
    var size = keyboard.parentNode.clientWidth / 70;
    keyboard.style.fontSize = size + 'px';
    // console.log(size);
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
    size();
});
size();