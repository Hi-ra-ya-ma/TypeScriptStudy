function exampleJs(hoge) {
    return hoge ** 2;
}

const fuga = exampleJs('1,000');
const tax = fuga * 1.1;
console.log(tax); // NaN
