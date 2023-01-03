
// comienza tu primera prueba
// importo la funcion desde app.js
let { fromEuroToDollar } = require('./app.js');
let { fromDollarToYen } = require('./app.js');
let { fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dollar should be 102.32 Yen", function(){
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58); //1 euro son 1.2 dolares, entonces 2 dollars deberian ser = (2*1.2 * 127.9 )
});

test("One pound should be 159.875 Yen", function(){
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(127.9)).toBe(0.8); //1 euro son 1.2 dolares, entonces 2 dollars deberian ser = (2*1.2 * 127.9 )
})