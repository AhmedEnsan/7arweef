
let y = 'a';
let x = y;
let NK;
i = 1;
let v;
let numberOfTimes = 0;
keys = [];
let rightWordPopup = document.querySelector('.right-word');
// automatic popUp after seconds of loading
let popUp = document.querySelector('.popup');
let containerbox = document.querySelector('.containerbox');
window.onload = function () {
    setTimeout(
        function () { popUp.style.display = "block" }, 2000
    );
    setTimeout(function () {
        containerbox.style.height = "400px"
    }, 2009
    )
};
//Closing the popup
document.getElementById('close').addEventListener('click', (ev) => {
    popUp.style.display = "none"
});

let initialBorder = document.getElementById(x + i);
if (initialBorder) {
    Object.assign(initialBorder.style, { border: "1px solid #eee" });
};
document.addEventListener('keydown', (events) => {
    noBorderAfterEnter = document.getElementById(x + 5);
    if (i == 1 && noBorderAfterEnter) {
        Object.assign(noBorderAfterEnter.style, { border: "0px solid black" });
    }
    if (events.key === "Shift" || events.key === "Alt" || events.key === "ArrowUp" || events.key === "ArrowDown" || events.key === "ArrowRight" || events.key === "ArrowLeft") {
        console.log("unValidKey")
    }
    
    else {
        if (events.key === "Enter" && `${keys}` === `${generatedNameArr}`) {
            noBorderAfterAllGreen = document.getElementById(y + 5);
            if (noBorderAfterAllGreen) {
                Object.assign(noBorderAfterAllGreen.style, { border: "0px solid black" });
            }
            for (let iiii = 1; iiii < 6; iiii++){
                idAllGreen = document.getElementById(y + iiii);
                Object.assign(idAllGreen.style,{backgroundColor:"green"});
            };
            y = 'a';
            console.log("i:" + i)
            rightWordPopup.style.display = "block";
            setTimeout(() => rightWordPopup.style.display = "none" , 1500);
        }
        else {
            console.log(events.type);
            console.log(events.key);
            const key = events.key;
            if (key === "Enter") {
                console.log(`i:${i}`)
                if (i < 6) {
                    alert("لازم خمس حروف يانجم");
                    console.log("i:" + i);
                }
                else {
                    for (let k = 0; k < 5; k++) {
                        idInitialGrey = document.getElementById(y + (k + 1));
                        if (idInitialGrey) {
                            Object.assign(idInitialGrey.style, { backgroundColor: "grey" });
                        }
                    };
                    MachedKeys = [];
                    // orange must be if (key in gname && not green && key hasnt matched) or (key in game && not green && has matched but lttrs that equal to keys more than keys)
                    // function matched
                    for (let l = 0; l < 5; l++){
                        if (keys[l] == generatedNameArr[l]) {
                            MachedKeys.push(keys[l]);
                            console.log(MachedKeys)
                        }
                    }
                    for (let j = 0; j < 5; j++) {
                    //// excluding the key from arr to see if their is another key the same value
                        //finding duplicates in GeneratedName
                        let duplicatInName = generatedNameArr.filter((ele, ind) => {
                            return generatedNameArr.indexOf(ele) === ind
                        });
                        console.log(duplicatInName);
                            //FK==felteredKeys
                        let FK = keys.filter((element, index) => {
                            return keys.indexOf(element) === index
                        });
                        console.log('fkArr'+FK);
                        let indexOfRepeatedKey = FK.indexOf(keys[j]);
                        console.log('indx ' + indexOfRepeatedKey);
                        // orange if keyinG and the key hasnt mached
                        let keyInGenN = generatedNameArr.includes(keys[j]);
                        let keyIsmached = MachedKeys.includes(keys[j]);
                        if (keyInGenN && keyIsmached == false) {
                            // if not repeated
                            if (indexOfRepeatedKey == -1) {
                                let iii = j + 1;
                                idOrange = document.getElementById(y + iii);
                                Object.assign(idOrange.style, { backgroundColor: "orange" });
                            }
                            else if (duplicatInName.length < 5) {
                                let iii = j + 1;
                                idOrange = document.getElementById(y + iii);
                                Object.assign(idOrange.style, { backgroundColor: "orange" });
                            }
                            else {
                                // if its just the first key orange it
                                console.log(`j:${j}&indx:${indexOfRepeatedKey}`)
                                if (indexOfRepeatedKey >= j) {
                                    let iii = j + 1;
                                    idOrange = document.getElementById(y + iii);
                                    Object.assign(idOrange.style, { backgroundColor: "orange" });
                                }
                            }
                        }
                    };
                    //if key == letter >> green
                    for (let h = 0; h < keys.length; h++) {
                        let matchLP = keys[h] === generatedNameArr[h];
                        if (matchLP == true) {
                            let ii = h + 1;
                            idGreen = document.getElementById(y + ii);
                            Object.assign(idGreen.style, { backgroundColor: "green" });
                            
                        }
                    };
                    x = y;
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
                    // console.log(`${keys}`);
                    // console.log(`${generatedNameArr}`);
                    console.log("y:" + y);
                    i = 1;
                    keys = [];
                    if (y == "g") { setTimeout(()=> alert('حظ اوفر المرة القادمة'),500)};
                }
            }
            else if (key === "Backspace") {
                uu = i - 1;
                document.getElementById(y + uu).innerHTML = "";
                i = i - 1;
                keys.pop();
                idNoBorder = document.getElementById(y + uu);
                if (idNoBorder) {
                    Object.assign(idNoBorder.style, { border: "0px solid #a1a4a3" });
                }
            }
            else {
                idBorder = document.getElementById(y + i);
                if (idBorder) {
                Object.assign(idBorder.style, { border: "1px solid #eee" });
                };
                u = i - 1;
                idNoBorder = document.getElementById(y + u);
                if (idNoBorder) {
                Object.assign(idNoBorder.style, { border: "0px solid #a1a4a3" });
                };
                document.getElementById(y + i).innerHTML = events.key;
                keys.push(events.key);
                
                i++;
                console.log(keys)
            };
            
        };
    };
});

// const fs = require('./fs');
// console.log(fs);



let names = ["مسرور","مشهور","محبوب","مثقوب","اسبوع", "ثلاثة", "نهاية", "ميناء", "اضافة", "تغيير", "مصنوع", "عقوبة", "منخفض", "منعطف", "متوسط", "ارسال", "اثنين", "مدرسة", "مزرعة", "منشار", "صحافة", "حقيقة", "قاعدة", "تاكيد", "صندوق", "مذكرة", "قيادة", "غرامة", "مدينة", "حرارة", "طائرة", "مشترك", "جزيرة", "اقامة", "مشكلة", "منطقة", "سفينة", "ارقام", "اغنية", "مباشر", "احساس", "قائمة", "رعاية", "سيارة", "رسالة", "علامة", "سهولة", "اطفال", "سهولة", "موضوع", "بساطة", "خريطة", "اشعار", "تمثيل", "منطقة", "مسالة", "دائرة", "اسقاط", "غابات", "نافذة", "مليون", "تجارة", "تكلفة", "تناسب", "سيطرة", "بحيرة", "طريقة", "فستان", "سحابة", "تصميم", "برمجة", "معادن", "تجربة", "نتيجة", "قانون", "عبارة", "معركة", "طبيعة", "عاصمة", "عملية", "حماية", "تزويد"];
let rondomNumber = Math.random();
let namesLenght = names.length;
rondomNumber = namesLenght * rondomNumber;
rondomNumber = Math.floor(rondomNumber);
let generatedName = names[rondomNumber];
console.log(rondomNumber)
// console.log(generatedName);
let generatedNameArr = [];
for (let n = 0; n < generatedName.length; n++) {
    generatedNameArr.push(generatedName[n])
    
}
console.log(generatedNameArr)




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

var Titl = document.getElementById('TITLE');
var originalQueue = Titl.innerHTML;
var queue = Titl.innerHTML;

function next () {
    var c = queue[0];
    queue = queue.slice(1);
    Titl.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
    pressKey(c);
    if (queue.length) {
        setTimeout(next, Math.random() * 200 + 50);
    }
}

Titl.innerHTML = "&nbsp;";
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
ض2    