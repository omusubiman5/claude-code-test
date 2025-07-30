// ヘルパー関数
function formatDate(date) {
    return date.toLocaleDateString('ja-JP');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 意図的なバグ（Claude にテストしてもらう用）
function processArray(arr) {
    // バグ: arr が undefined の場合を処理していない
    return arr.length > 0 ? arr.map(x => x * 2) : [];
}

function calculateSum(numbers) {
    // 配列の要素を合計する関数
    if (!Array.isArray(numbers)) {
        throw new Error('引数は配列である必要があります');
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}

function sanitizeString(str) {
    // 文字列をサニタイズする関数
    if (typeof str !== 'string') {
        return '';
    }
    return str.trim().replace(/[<>]/g, '');
}

module.exports = { 
    formatDate, 
    validateEmail, 
    processArray, 
    calculateSum, 
    sanitizeString 
};
