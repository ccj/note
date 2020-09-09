async function fn2(){
    const data = await 3000 //相当于Promise.resolve(3000)
    console.log(data) // 可以打印出300，await相当于 Promise.then的回调
}
fn2()
console.log('end')

script start
async1 start

async2
script end
async1 end
async3
async1 end 2
