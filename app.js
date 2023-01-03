// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

function fromDollarToYen(dollar)
    {return(((dollar/oneEuroIs.USD)*oneEuroIs.JPY).toFixed(2))};
const fromEuroToDollar = function(euro){
    let valor = euro * oneEuroIs.USD;
    
    return(valor);
};
function fromYenToPound(yen)
    {return((yen/oneEuroIs.JPY)*oneEuroIs.GBP)};

//const sum = (a,b) => {
//    return a + b
//}
// solo un registro en consola para nosotros.

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
