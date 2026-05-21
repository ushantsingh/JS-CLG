function sum(a) {
    return function (b) {
        if (b) {
            return sum(a+b)
        }
        return a
    }
}
console.log(sum(6)(5)(8)(1)(4)(5)(3)(6)())
