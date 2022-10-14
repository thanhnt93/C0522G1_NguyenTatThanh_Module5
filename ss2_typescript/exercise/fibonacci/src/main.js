function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var sum = 0;
for (var i = 0; i <= 20; i++) {
    console.log(fibonacci(i));
    sum = sum + fibonacci(i);
}
console.log("Tổng 20 số fibonacci đầu tiên là: " + sum);
