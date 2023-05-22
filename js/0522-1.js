
var h2 = document.getElementsByTagName('h2');
// 배열

h2[0].style.backgroundColor = 'red';
h2[0].style.color = 'blue';
h2[0].style.fontStyle = 'italic';

// background-color -> backgroundColor

h2[1].style.cssText = " color:red; border: 2px solid blue; "
h2[2].style.cssText = " background-color:gray; border: 2px solid blue; "

var add = document.querySelector('.add');
var del = document.querySelector('.del');
var h2 = document.querySelector('h2');
var h2a = document.querySelectorAll('h2');
//var toggle = document.querySelector('togadd');
var tog = document.getElementsByClassName('tog')[0];

// 고전이벤트 add.onclick=function(){     h2a[4].classList.add('active'); }
add.onclick = function () {
    for (var i = 0; i < h2a.length; i++) {
        h2a[i]
            .classList
            .add('active');
    }
}

// 표준이벤트
del.addEventListener('click', function () {
    for (var i = 0; i < h2a.length; i++) {
        h2a[i]
            .classList
            .remove('active');
    }
})

//토글이벤트
var tog = document.getElementsByClassName('tog')[0];
tog.addEventListener('click', toggle);
var k = 0;

// function aaa(){     console.log("werwe"); }
function toggle() {
    // alert('www');
    var h2a = document.querySelectorAll('h2');

    if (k % 2 == 0) {
        for (var i = 0; i < h2a.length; i++) {
            h2a[i]
                .classList
                .add('active');
        }
    } else {
        for (var i = 0; i < h2a.length; i++) {
            h2a[i]
                .classList
                .remove('active');
        }
    }
    k++;
};

// tog.addEventListener('click', function(){     var h2a =
// document.querySelectorAll('h2');     if (k % 2 == 0) {         for (var i =
// 0; i < h2a.length; i++) {             h2a[i].classList.add('active'); }     }
// else {         for (var i = 0; i < h2a.length; i++) {
// h2a[i].classList.remove('active');         }     }     k++; });

var h3 = document.querySelectorAll('h3');
console.log(h3);
for (var i = 0; i < h3.length; i++) {
    h3[i].onclick = function () {
        this.style.border = "5px solid blue";
    }
}

var h2 = document.querySelectorAll('h2');
console.log(h2);
for (var i = 0; i < h2.length; i++) {
    h2[i].onclick = function () {
        this.style.border = "5px solid blue";
    }
}

//중첩반복문으로 이벤트 주기
var h4 = document.querySelectorAll('h4');
console.log(h4);
for (var j = 0; j < h4.length; j++) {
    h4[j].onclick = function () {
        for (var i = 0; i < h4.length; i++) {
            h4[i].style.border = "5px solid blue";
        }
    }
}