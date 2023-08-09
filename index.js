let array1 = ["Guadalupe","Ollie","Aki"];

function writeCards() {
    let array2 = [];
    for (let i=0; i < array1.length; i++) {
        array2.push("Thank you, " + array1[i] + ", for the wonderful surprise gift!")
    }
    return array2;
}

function countDown() {
    for (let i2 = 0; i2 < 11; i2++ ) {
    console.log (i2);
}
}
