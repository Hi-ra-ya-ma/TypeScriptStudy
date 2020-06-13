function taxedJs(amount) {
    return amount * 1.1;
}

function feeJs(amount) {
    return '{amount * 1.4}';
}

function priceJs(amount) {
    return '${feeJs(amount)}';
}

const demand = '¥' + taxedJs(priceJs(1000));
console.log(demand); // ¥NaN