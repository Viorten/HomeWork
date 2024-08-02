// 1. код, який виводить піраміду, починаючи від 1 * і збільшуїчи її поступово на 1*

let k = 5;
for (i = 1; i <= k; i++) {
    let line = '';
    for (j = 1; j <= i; j++){
        line += '/'
    } console.log (line)
}

// 2. код, який виводить зворотню піраміду

let pyramid = 5
for (i = pyramid; i >= 1; i--) {
    let row = '';
    for (j = 1; j <= i; j++) {
        row += '*';
    } console.log (row);
}

// 3. код, який виводить квадрат, але більше схожий на прямокутник ;)

let quadrate = 5
for (a = 0; a < quadrate; a++){
    let string ='';
    for (j = 0; j < quadrate; j++) {
        string += '|'
    }
    console.log (string)
} 

