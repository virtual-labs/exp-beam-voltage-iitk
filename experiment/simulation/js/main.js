document.getElementById("container").style.display = "none";
document.getElementById("container_task").style.display = "none";
// document.getElementById("task").disabled = true;
// document.getElementById("machine_image").src = "./images/001.png";
// document.getElementById("magSection").style.display = "none";
// document.getElementById("spotSection").style.display = "none";
// document.getElementById("voltage").style.display = "none";

// function start() {
//     document.getElementById("container").style.display = "block";
//     document.getElementById("start").style.display = "none";
//     textToSpeech("select the material");
//     document.getElementById("execute_button").disabled = true;
//     var i = 0;
//     var txt = '1. Select the Material.';
//     var speed = 50;
//     typeWriter();

//     function typeWriter() {
//         if (i < txt.length) {
//             document.getElementById("demo1").innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(typeWriter, speed);
//         }
//     }
// }

// function display(val) {
//     if (val == 1) {
//         document.getElementById("voltage").style.display = "block";
//         document.getElementById("voltage_btn"), disabled = true;
//         document.getElementById("magnification_btn").disabled = true;
//         document.getElementById("spotsize_btn").disabled = true;
//         document.getElementById("execute_button").disabled = false;
//         document.getElementById("voltage_btn").style.backgroundColor = "#2EBDC1";
//     } else if (val == 2) {
//         document.getElementById("voltage_btn"), disabled = true;
//         document.getElementById("magnification_btn").disabled = true;
//         document.getElementById("spotsize_btn").disabled = true;
//         document.getElementById("magSection").style.display = "block";
//         document.getElementById("execute_button").disabled = false;
//         document.getElementById("magnification_btn").style.backgroundColor = "#2EBDC1";
//     } else if (val == 3) {
//         document.getElementById("spotSection").style.display = "block";
//         document.getElementById("voltage_btn"), disabled = true;
//         document.getElementById("magnification_btn").disabled = true;
//         document.getElementById("spotsize_btn").disabled = true;
//         document.getElementById("execute_button").disabled = false;
//         document.getElementById("spotsize_btn").style.backgroundColor = "#2EBDC1";
//     }
//     c = val;
// }
// var img;
// var c;
// document.getElementById("select2").style.display = "none";

// function clickbtn(val) {
//     document.getElementById("machine_image").src = "./gif/material1.gif";
//     document.getElementById("demo").innerHTML = "0 kilo Volts";
//     document.getElementById("btn1").disabled = true;
//     document.getElementById("btn2").disabled = true;
//     document.getElementById("btn3").disabled = true;
//     document.getElementById("select2").style.display = "block";

//     var i = 0;
//     var txt = '2. Select the type of experiment to be performed.';
//     var speed = 50;
//     typeWriter();

//     function typeWriter() {
//         if (i < txt.length) {
//             document.getElementById("demo2").innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(typeWriter, speed);
//         }
//     }

//     console.log(c);
//     var d = document.getElementById("myRange");
//     img = document.createElement('img');
//     // Update the current d value (each time you drag the d handle)
//     d.onchange = function() {
//         var i = 0;
//         var txt = '3. Click on the "Execute" button';
//         var speed = 50;
//         typeWriter();
//         textToSpeech("click on the execute button");

//         function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("demo3").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//             }
//         }
//     }
//     document.getElementById("myMagnification").onchange = function() {
//             var i = 0;
//             var txt = '3. Click on the "Execute" button';
//             var speed = 50;
//             typeWriter();
//             textToSpeech("click on the execute button");

//             function typeWriter() {
//                 if (i < txt.length) {
//                     document.getElementById("demo3").innerHTML += txt.charAt(i);
//                     i++;
//                     setTimeout(typeWriter, speed);
//                 }
//             }
//             var msg = document.getElementById("myMagnification").value;
//             var demo2 = document.getElementById("demo2");
//             if (mag == 1)
//                 demo2.innerHTML = "5 micrometer";
//             else if (mag == 2)
//                 demo2.innerHTML = "10 micrometer";
//             else if (mag == 3)
//                 demo2.innerHTML = "50 micrometer";
//             else(mag == 4)
//             demo2.innerHTML = "100 micrometer";
//         }
// document.getElementById("mySpotSize").onchange = function () {
//     var i = 0;
//     var txt = '3. Click on the "Execute" button';
//     var speed = 50;
//     typeWriter();
//     textToSpeech("click on the execute button");
//     function typeWriter() {
//         if (i < txt.length) {
//             document.getElementById("demo3").innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(typeWriter, speed);
//         }
//     }
//     var sa = document.getElementById("mySpotSize");
//     var ss = document.getElementById("demo3");
//     if (sa == 1)
//         ss.innerHTML = "29"
//     else if (sa == 2)
//         ss.innerHTML = "31";
//     else if (sa == 3)
//         ss.innerHTML = "35";
// }
// textToSpeech("select the type of experiment to be performed")
// if (c == 1) {
//     document.getElementById("btn1").style.background = '#A93226';
//     document.getElementById("btn2").disabled = true;
//     document.getElementById("btn3").disabled = true;
//     document.getElementById("img1").src = "./images/im1.png";
//     document.getElementById("img2").src = "./images/im2.png";
//     document.getElementById("img3").src = "./images/im3.png";
// }
// if (c == 2) {
//     document.getElementById("btn2").style.background = '#A93226';
//     document.getElementById("btn1").disabled = true;
//     document.getElementById("btn3").disabled = true;
//     document.getElementById("img1").src = "./images/im1.png";
//     document.getElementById("img2").src = "./images/im2.png";
//     document.getElementById("img3").src = "./images/im3.png";
// }
// if (c == 3) {
//     document.getElementById("btn3").style.background = '#A93226';
//     document.getElementById("btn2").disabled = true;
//     document.getElementById("btn1").disabled = true;
//     document.getElementById("img1").src = "./images/im1.png";
//     document.getElementById("img2").src = "./images/im2.png";
//     document.getElementById("img3").src = "./images/im3.png";
// }
// }


// function voltagefunction() {
//     var img = document.createElement('img');
//     document.getElementById("machine_image").src = "./gif/sem.gif";
//     console.log(c);
//     document.getElementById("task").disabled = false;
//     var d = document.getElementById("myRange");
//     var mag = document.getElementById("myMagnification");
//     var ss = document.getElementById("mySpotSize");
//     console.log(d.value);
//     if ((c == 1)) {
//         if (d.value == 1) {
//             img.src = './images/v1.5.jpg';
//             var e = document.getElementById("demo");
//         } else if (d.value == 2) {
//             img.src = './images/v1.10.jpg';
//             var e = document.getElementById("demo");
//         } else if (d.value == 3) {
//             img.src = './images/v1.20.jpg';
//             var e = document.getElementById("demo");
//         }
//     }
//     if ((c == 2)) {
//         if (mag.value == 0) {
//             img.src = "./images/m1.1.jpg";
//         } else if (mag.value == 1) {
//             img.src = "./images/m1.1.jpg";
//         } else if (mag.value == 2) {
//             img.src = "./images/m1.1.jpg";
//         } else if (mag.value == 3) {
//             img.src = "./images/m1.1.jpg";
//         } else if (mag.value == 4) {
//             img.src = "./images/m1.1.jpg";
//         }
//     }
//     if (c == 3) {
//         console.log("c", c, ss.value);
//         if (ss.value == 0) {
//             img.src = "./images/s1.1.jpg";
//         } else if (ss.value == 1) {
//             img.src = "./images/s1.2.jpg";
//         } else if (ss.value == 2) {
//             img.src = "./images/s1.3.jpg";
//         }
//     }
//     // function modal() {
//     //     textToSpeech("the first image is material image at 5 kilo volts.");
//     //     textToSpeech("the second image is at 10 kilo volts.");
//     //     textToSpeech("the third image is at 20 kilo volts.")
//     // }
//     document.getElementById('image_display').innerHTML = "";
//     document.getElementById('image_display').appendChild(img);
// }
// //text to speech

// // list of languages is probably not loaded, wait for it
// if (window.speechSynthesis.getVoices().length == 0) {
//     window.speechSynthesis.addEventListener('voiceschanged', function() {
//         textToSpeech(text);
//     });
// }

// function textToSpeech(text) {
//     // get all voices that browser offers
//     var available_voices = window.speechSynthesis.getVoices();

//     // this will hold an english voice
//     var english_voice = '';

//     // find voice by language locale "en-US"
//     // if not then select the first voice
//     for (var i = 0; i < available_voices.length; i++) {
//         if (available_voices[i].lang === 'en-US') {
//             english_voice = available_voices[i];
//             break;
//         }
//     }
//     if (english_voice === '')
//         english_voice = available_voices[0];

//     // new SpeechSynthesisUtterance object
//     var utter = new SpeechSynthesisUtterance();
//     utter.rate = 1;
//     utter.pitch = 0.5;
//     utter.text = text;
//     utter.voice = english_voice;


//     // speak
//     window.speechSynthesis.speak(utter);
// }

// function task() {
//     document.getElementById("container_exp").style.display = "none";
//     document.getElementById("container_task").style.display = "block";
// }
/////////////////////////////Task JS//////////////////////////////
var tWrapper = $("#toast-wrapper"),
    ti = 0;
var clickedImg = -1;
var materials = [

];
document.getElementById("image_display").style.display = "none";
document.getElementById("exebtn").disabled = true;
document.getElementById("demo1").innerHTML = "1. Select the type of expermient to be performed."
function showToast(msg, type = 0) {
    tWrapper.append(`<div id="t${ti++}" class="toast${type == 1 ? ' danger' : (type == 2 ? ' success' : '')}" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${type == 1 ? '#ff0000' : (type == 2 ? '#31a66a' : '#007aff')}" /></svg>
                    <strong class="mr-auto">Notification</strong>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    ${msg}
            </div>
            </div>`);
    $(`#t${ti - 1}`).toast({
        delay: 5500
    });
    $(`#t${ti - 1}`).toast('show');
}
document.getElementById("container2").style.display = "none";
document.getElementById("container3").style.display = "none";
document.getElementById("next_experiment1").disabled = true;
document.getElementById("next_experiment2").disabled = true;
// document.getElementById("next_experiment3").disabled = true;

// function imgClick(x) {
//     clickedImg = x;
// }

function validate() {
    if (clickedImg == -1)
        showToast("Select a image first", 2)
    else if (clickedImg == 1) {
        showToast("Correct", 2)
        document.getElementById("next_experiment1").disabled = false;
    } else if (clickedImg == 2)
        showToast("Wrong, try again", 1);
    else if (clickedImg == 3)
        showToast("Wrong, try again", 1);
    else if (clickedImg == 4)
        showToast("Wrong, try again", 1);
    else if (clickedImg == 5) {
        showToast("Correct", 2)
        document.getElementById("next_experiment2").disabled = false;
    } else if (clickedImg == 6)
        showToast("Wrong, try again", 1);
    else if (clickedImg == 7)
        showToast("Wrong, try again", 1);
    else if (clickedImg == 8)
        showToast("Wrong, try again", 1);
    else
        showToast("Correct", 2)
}

function next(val) {
    var value = val;
    console.log(val);
    if (value == 2) {
        document.getElementById("container1").style.display = "none";
        document.getElementById("container3").style.display = "none";
        document.getElementById("container2").style.display = "block";
    } else if (value == 3) {
        document.getElementById("container1").style.display = "none";
        document.getElementById("container2").style.display = "none";
        document.getElementById("container3").style.display = "block";
    }
}
document.getElementById("container_task").style.display = "none";
document.getElementById("voltage_show").style.display = "none";
document.getElementById("magnification_show").style.display = "none";
document.getElementById("workingdistance_show").style.display = "none";
document.getElementById("spotsize_show").style.display = "none";
var value
function fun1(val) {
    document.getElementById("volbtn").disabled = true;
    document.getElementById("magbtn").disabled = true;
    document.getElementById("exebtn").disabled = false;
    document.getElementById("ssbtn").disabled = true;
    document.getElementById("wdbtn").disabled = true;
    // document.getElementById("demo2").innerHTML = "2. Select the range accordingly."
    document.getElementsByClassName("disablebtns").disabled = true;
    if (val == 1) {
        value = 1
        document.getElementById("demo3").innerHTML = "2. Slide the voltage and magnification bar to see effect of voltage on different magnifications and then click on Execute Button."
        document.getElementById("voltage_show").style.display = "block";

    }
    if (val == 2) {
        value = 2
        document.getElementById("demo3").innerHTML = "2. Slide the magnification and voltage bar to see effect of magnification at different voltages and then click on Execute Button."
        document.getElementById("magnification_show").style.display = "block";
    }
    if (val == 3) {
        value = 3
        document.getElementById("demo3").innerHTML = "2. Slide the Spot Size bar to see different images at different Spot Sizes and then click on the Execute Button."
        document.getElementById("spotsize_show").style.display = "block";
    }
    if (val == 4) {
        value = 4
        document.getElementById("demo3").innerHTML = "2. Slide the Working Distance bar to see different images at different working distances and then click on the Execute Button."
        document.getElementById("workingdistance_show").style.display = "block";
    }
}
function execute() {
    document.getElementById("machine_image").src = "./images/se-gif.gif"
    setTimeout(function () { document.getElementById("image_display").style.display = "block" }, 12000);
    setTimeout(function(){ document.getElementById("demo5").innerHTML = "Image is displayed !!"}, 12000);
    setTimeout(function () { document.getElementById("demo6").innerHTML = "Press the Reset Button to restart the simulator" }, 13000);
    voltage_range1 = document.getElementById("voltage_range1").value;
    magnification_range1 = document.getElementById("magnification_range1").value;
    magnification_range2 = document.getElementById("magnification_range2").value;
    voltage_range2 = document.getElementById("voltage_range2").value;
    spotsize_range = document.getElementById("spotsize_range").value;
    workingdistance_range = document.getElementById("workingdistance_range").value;
    ///////////////////// Effect of Voltage ///////////////////
    if (value == 1) {
        if (voltage_range1 == 0) {
            
            if (magnification_range1 == 0) {
                document.getElementById("image_display").src = "./images/5_250x.PNG"
                // document.getElementById("voltagetext1").innerHTML = "5 kilo Volts";
                // document.getElementById("magnificationtext1").innerHTML = "250x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 250x Magnification"
            }
            if (magnification_range1 == 1) {
                document.getElementById("image_display").src = "./images/5_1000x.PNG"
                // document.getElementById("voltagetext1").innerHTML = "5 kilo Volts";
                // document.getElementById("magnificationtext1").innerHTML = "1000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 1000x Magnification"
            }
            if (magnification_range1 == 2) {
                console.log(voltage_range1)
                console.log(magnification_range1)
                document.getElementById("image_display").src = "./images/5_2.5x.PNG"
                // document.getElementById("voltagetext1").innerHTML = "5 kilo Volts";
                // document.getElementById("magnificationtext1").innerHTML = "2.5x";
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 2.5kx Magnification"
            }
            if (magnification_range1 == 3) {
                document.getElementById("image_display").src = "./images/5_5000x.PNG"
                // document.getElementById("voltagetext1").innerHTML = "5 kilo Volts";
                // document.getElementById("magnificationtext1").innerHTML = "5000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 5000x Magnification"
            }
            if (magnification_range1 == 4) {
                document.getElementById("image_display").src = "./images/5_10000x.PNG"
                // document.getElementById("voltagetext1").innerHTML = "5 kilo Volts";
                // document.getElementById("magnificationtext1").innerHTML = "10000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 10,000x Magnification"
            }
        }
        if (voltage_range1 == 1) {
            if (magnification_range1 == 0) {
                document.getElementById("image_display").src = "./images/10_250x.PNG"
                document.getElementById("voltagetext1").innerHTML = "10 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "250x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 250x Magnification"
            }
            if (magnification_range1 == 1) {
                document.getElementById("image_display").src = "./images/10_1000x.PNG"
                document.getElementById("voltagetext1").innerHTML = "10 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "1000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 1000x Magnification"
            }
            if (magnification_range1 == 2) {
                document.getElementById("image_display").src = "./images/10_2.5x.PNG"
                document.getElementById("voltagetext1").innerHTML = "10 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "2.5kx"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 2.5kx Magnification"
            }
            if (magnification_range1 == 3) {
                document.getElementById("image_display").src = "./images/10_5000x.PNG"
                document.getElementById("voltagetext1").innerHTML = "10 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "5000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 5000x Magnification"
            }
            if (magnification_range1 == 4) {
                document.getElementById("image_display").src = "./images/10_10000x.PNG"
                document.getElementById("voltagetext1").innerHTML = "10 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "10000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 10,000x Magnification"
            }
        }
        if (voltage_range1 == 2) {
            if (magnification_range1 == 0) {
                document.getElementById("image_display").src = "./images/20_250x.PNG"
                document.getElementById("voltagetext1").innerHTML = "20 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "250x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 250x Magnification"
            }
            if (magnification_range1 == 1) {
                document.getElementById("image_display").src = "./images/20_1000x.PNG"
                document.getElementById("voltagetext1").innerHTML = "20 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "1000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 1000x Magnification"
            }
            if (magnification_range1 == 2) {
                document.getElementById("image_display").src = "./images/20_2.5x.PNG"
                document.getElementById("voltagetext1").innerHTML = "20 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "2.5kx"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 2.5kx Magnification"
            }
            if (magnification_range1 == 3) {
                document.getElementById("image_display").src = "./images/20_5000x.PNG"
                document.getElementById("voltagetext1").innerHTML = "20 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "5000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 5000x Magnification"
            }
            if (magnification_range1 == 4) {
                document.getElementById("image_display").src = "./images/20_10000x.PNG"
                document.getElementById("voltagetext1").innerHTML = "20 kilo Volts";
                document.getElementById("magnificationtext1").innerHTML = "10000x"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 10,000x Magnification"
            }
        }
    }
    ///////////////////////////////////////////////////////////////////
    /////////////////////////// Effect of magnification ////////////////////
    if (value == 2) {
        if (magnification_range2 == 0) {
            if (voltage_range2 == 0) {
                document.getElementById("magnificationtext2").innerHTML = "250x";
                document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts";
                document.getElementById("image_display").src = "./images/100x_5.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 250x Magnification"
            }
            if (voltage_range2 == 1) {
                document.getElementById("magnificationtext2").innerHTML = "250x";
                document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts";
                document.getElementById("image_display").src = "./images/100x_10.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 250x Magnification"
            }
            if (voltage_range2 == 2) {
                document.getElementById("magnificationtext2").innerHTML = "250x";
                document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts";
                document.getElementById("image_display").src = "./images/100x_20.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 250x Magnification"
            }
        }
        if (magnification_range2 == 1) {
            if (voltage_range2 == 0) {
                document.getElementById("magnificationtext2").innerHTML = "500x";
                document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts";
                document.getElementById("image_display").src = "./images/40x_5.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 500x Magnification"
            }
            if (voltage_range2 == 1) {
                document.getElementById("magnificationtext2").innerHTML = "500x";
                document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts";
                document.getElementById("image_display").src = "./images/40x_10.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 500x Magnification"
            }
            if (voltage_range2 == 2) {
                document.getElementById("magnificationtext2").innerHTML = "500x";
                document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts";
                document.getElementById("image_display").src = "./images/40x_20.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 500x Magnification"
            }
        }
        if (magnification_range2 == 2) {
            if (voltage_range2 == 0) {
                document.getElementById("magnificationtext2").innerHTML = "1kx";
                document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts";
                document.getElementById("image_display").src = "./images/20x_5.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 1kx Magnification"
            }
            if (voltage_range2 == 1) {
                document.getElementById("magnificationtext2").innerHTML = "1kx";
                document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts";
                document.getElementById("image_display").src = "./images/20x_10.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 1kx Magnification"
            }
            if (voltage_range2 == 2) {
                document.getElementById("magnificationtext2").innerHTML = "1kx";
                document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts";
                document.getElementById("image_display").src = "./images/20x_20.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 1kx Magnification"
            }
        }
        if (magnification_range2 == 3) {
            if (voltage_range2 == 0) {
                document.getElementById("magnificationtext2").innerHTML = "2.5kx";
                document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts";
                document.getElementById("image_display").src = "./images/10x_5.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 2.5kx Magnification"
            }
            if (voltage_range2 == 1) {
                document.getElementById("magnificationtext2").innerHTML = "2.5kx";
                document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts";
                document.getElementById("image_display").src = "./images/10x_10.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 2.5kx Magnification"
            }
            if (voltage_range2 == 2) {
                document.getElementById("magnificationtext2").innerHTML = "2.5kx";
                document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts";
                document.getElementById("image_display").src = "./images/10x_20.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 2.5kx Magnification"
            }
        }
        if (magnification_range2 == 4) {
            if (voltage_range2 == 0) {
                document.getElementById("magnificationtext2").innerHTML = "5kx";
                document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts";
                document.getElementById("image_display").src = "./images/4x_5.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 5kx Magnification"
            }
            if (voltage_range2 == 1) {
                document.getElementById("magnificationtext2").innerHTML = "5kx";
                document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts";
                document.getElementById("image_display").src = "./images/4x_10.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 5kx Magnification"
            }
            if (voltage_range2 == 2) {
                document.getElementById("magnificationtext2").innerHTML = "5kx";
                document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts";
                document.getElementById("image_display").src = "./images/4x_20.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 5kx Magnification"
            }
        }
        if (magnification_range2 == 5) {
            if (voltage_range2 == 0) {
                document.getElementById("magnificationtext2").innerHTML = "10kx";
                document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts";
                document.getElementById("image_display").src = "./images/2x_5.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 5kV and 10kx Magnification"
            }
            if (voltage_range2 == 1) {
                document.getElementById("magnificationtext2").innerHTML = "10kx";
                document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts";
                document.getElementById("image_display").src = "./images/2x_10.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 10kV and 10kx Magnification"
            }
            if (voltage_range2 == 2) {
                document.getElementById("magnificationtext2").innerHTML = "10kx";
                document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts";
                document.getElementById("image_display").src = "./images/2x_20.PNG"
                document.getElementById("demo4").innerHTML = "3. Now you see Image at 20kV and 10kx Magnification"
            }
        }
    }
    ////////////////////////////////////////////////////////////
    ///////////////////// Spot Size//////////////////////////
    if (value == 3) {
        if (spotsize_range == 0) {
            document.getElementById("image_display").src = "./images/ss4.PNG"
        }
        if (spotsize_range == 1) {
            document.getElementById("image_display").src = "./images/ss3.PNG"
        }
        if (spotsize_range == 2) {
            document.getElementById("image_display").src = "./images/ss2.PNG"
        }
        if (spotsize_range == 3) {
            document.getElementById("image_display").src = "./images/ss1.PNG"
        }
    }
    /////////////////////////////////////////////////////////////
    //////////////////////// Working distance ///////////////////
    if (value == 4) {
        if (workingdistance_range == 0) {
            document.getElementById("workingdistancetext").innerHTML = "12.00mm"
            document.getElementById("image_display").src = "./images/wd4.PNG"
        }
        if (workingdistance_range == 1) {
            document.getElementById("workingdistancetext").innerHTML = "10.00mm"
            document.getElementById("image_display").src = "./images/wd3.PNG"
        }
        if (workingdistance_range == 2) {
            document.getElementById("workingdistancetext").innerHTML = "8.00mm"
            document.getElementById("image_display").src = "./images/wd2.PNG"
        }
        if (workingdistance_range == 3) {
            document.getElementById("workingdistancetext").innerHTML = "7.00mm"
            document.getElementById("image_display").src = "./images/wd1.PNG"
        }
    }
}
// function task(){
//     document.getElementById("container_task").style.display = "block";
//     document.getElementById("container_exp").style.display = "none";
// }
function voltagetext(voltagevalue) {
    console.log(voltagevalue)
    if (voltagevalue == 0)
        document.getElementById("voltagetext1").innerHTML = "5 Kilo Volts"
    if (voltagevalue == 1)
        document.getElementById("voltagetext1").innerHTML = "10 Kilo Volts"
    if (voltagevalue == 2)
        document.getElementById("voltagetext1").innerHTML = "20 Kilo Volts"
}
function magnificationtext(magnficationvalue2) {
    console.log(magnficationvalue2)
    
    if (magnficationvalue2 == 0) {
        document.getElementById("magnificationtext1").innerHTML = "250x"
    }
    if (magnficationvalue2 == 1) {
        document.getElementById("magnificationtext1").innerHTML = "1000x"
    }
    if (magnficationvalue2 == 2) {
        document.getElementById("magnificationtext1").innerHTML = "2.5kx"
    }
    if (magnficationvalue2 == 3) {
        document.getElementById("magnificationtext1").innerHTML = "5000x"
    }
    if (magnficationvalue2 == 4) {
        document.getElementById("magnificationtext1").innerHTML = "10,000x"
    }
}
function magnificationrange(magnficationvalue1) {
    console.log(magnficationvalue1)
    if (magnficationvalue1 == 0) {
        document.getElementById("magnificationtext2").innerHTML = "250x"
    }
    if (magnficationvalue1 == 1) {
        document.getElementById("magnificationtext2").innerHTML = "500x"
    }
    if (magnficationvalue1 == 2) {
        document.getElementById("magnificationtext2").innerHTML = "1kx"
    }
    if (magnficationvalue1 == 3) {
        document.getElementById("magnificationtext2").innerHTML = "2.5kx"
    }
    if (magnficationvalue1 == 4) {
        document.getElementById("magnificationtext2").innerHTML = "5kx"
    }
    if (magnficationvalue1 == 5) {
        document.getElementById("magnificationtext2").innerHTML = "10kx"
    }
}
function voltagerange(voltagevalue2) {
    console.log(voltagevalue2)
    if (voltagevalue2 == 0)
        document.getElementById("voltagetext2").innerHTML = "5 Kilo Volts"
    if (voltagevalue2 == 1)
        document.getElementById("voltagetext2").innerHTML = "10 Kilo Volts"
    if (voltagevalue2 == 2)
        document.getElementById("voltagetext2").innerHTML = "20 Kilo Volts"
}
function workingdistancerange(workingdistancevalue){
    if (workingdistancevalue == 0){
        document.getElementById("workingdistancetext").innerHTML = "12.00mm" 
    }
    if (workingdistancevalue == 1){
        document.getElementById("workingdistancetext").innerHTML = "10.00mm" 
    }
    if (workingdistancevalue == 2){
        document.getElementById("workingdistancetext").innerHTML = "8.00mm" 
    }
    if (workingdistancevalue == 3){
        document.getElementById("workingdistancetext").innerHTML = "7.00mm" 
    }
}
// function spotsizerange(ssvalue){
//     if(ssvalue == 0){
//         document.getElementById("spotsizetext").innerHTML = "7.00mm"
//     }
// }

