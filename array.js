function Calculator(){
    this.methods = {
        "+": (a, b) => a+b,
        "-": (a, b) => a-b,
    };
    this.calculate  = function(str){
        let arr = str.split(" ");
        op = arr[1];
        a  = +arr[0];
        b  = +arr[2];
        if (! this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }
        return this.methods[op](a,b);
    };
    this.addMethod  = function(name, func) {
        this.methods[name] = func;
    }
}
let calc = new Calculator;
calc.addMethod("**", (a,b) => a ** b);
alert(calc.calculate("2 ** 10"));
