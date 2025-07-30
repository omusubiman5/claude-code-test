const { formatDate, validateEmail, processArray } = require('./utils/helper.js');

// メイン機能
function greet(name) {
    if (!name) {
        throw new Error('名前が必要です');
    }
    return `こんにちは、${name}さん！`;
}

function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                throw new Error('ゼロで割ることはできません');
            }
            return a / b;
        default:
            throw new Error('無効な演算子です');
    }
}

// テスト用の実行
console.log(greet('Claude'));
console.log(calculate(10, 5, 'add'));
console.log(formatDate(new Date()));

module.exports = { greet, calculate };
