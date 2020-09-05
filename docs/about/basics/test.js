let a =  0;
function fn1() {
    let a1 = 10;
    function fn2(){
        let a1 = 9;
        let a2  =200;
        console.log(a2 + a1 + a)
    }
    fn2()
}
fn1();


