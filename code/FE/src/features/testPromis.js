import Promise from '../utils/myPromise.js'

// 同步：
/* test1: 测试promise内容为同步，状态为成功的Promise */
const p1 = new Promise((resolve, reject) => { resolve('sync OK') })
console.log('p1', p1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "sync OK"
// self: ✅
const p1_then_res1 = p1.then(res => { console.log('p1_res1', res) })
// ES6:  p1_res1 sync OK
// self: ✅
const p1_then_res2 = p1.then(() => 'p1 then resolve ok')
const p1_then_res3 = p1.then(() => { throw "p1 then throw error" })
const p1_then_res4 = p1.then(() => new Promise((resolve) => resolve('p1 then promise resolve')))
const p1_then_res5 = p1.then(() => new Promise((resolve, reject) => reject('p1 then promise reject')))

console.log('p1_then_res1', p1_then_res1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
console.log('p1_then_res2', p1_then_res2)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p1 then resolve ok"
// self: ✅
console.log('p1_then_res3', p1_then_res3)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p1 then throw error"
// self: ✅
console.log('p1_then_res4', p1_then_res4)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p1 then promise resolve"
// self: ✅
console.log('p1_then_res5', p1_then_res5)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p1 then promise reject"
// self: ✅



/* test2: 测试promise内容为同步，状态为失败的Promise */
const p2 = new Promise((resolve, reject) => { reject('sync ERROR') })
console.log('p2', p2)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "sync ERROR"
// self: ✅
const p2_catch_err = p2.catch(err => { console.log('p2_err', err) })
// ES6:  p2_err sync ERROR
// self: ✅
console.log('p2_catch_err', p2_catch_err)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
const p2_then_res1 = p2.catch(res => { console.log('p2_res1', res) })
// ES6:  p2_res1 sync ERROR
// self: ✅
const p2_then_res2 = p2.catch(() => 'p2 then resolve ok')
const p2_then_res3 = p2.catch(() => { throw "p2 then throw error" })
const p2_then_res4 = p2.catch(() => new Promise((resolve) => resolve('p2 then promise resolve')))
const p2_then_res5 = p2.catch(() => new Promise((resolve, reject) => reject('p2 then promise reject')))
console.log('p2_then_res1', p2_then_res1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
console.log('p2_then_res2', p2_then_res2)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p2 then resolve ok"
// self: ✅
console.log('p2_then_res3', p2_then_res3)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p2 then throw error"
// self: ✅
console.log('p2_then_res4', p2_then_res4)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p2 then promise resolve"
// self: ✅
console.log('p2_then_res5', p2_then_res5)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p2 then promise reject"
// self: ✅



/* test3: 测试promise内容为同步，抛出错误 */
const p3 = new Promise(() => { throw 'sync throw error' })
console.log('p3', p3)
// ES6: [[PromiseState]]: "rejected", [[PromiseResult]]: "sync throw error"
// self: ✅
const p3_catch_err = p3.catch(err => { console.log('p3_err', err) })
// ES6:  p3_err sync throw error
// self: ✅
console.log('p3_catch_err', p3_catch_err)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
const p3_then_res1 = p3.catch(res => { console.log('p3_res1', res) })
// ES6:  p3_res1 sync ERROR
// self: ✅
const p3_then_res2 = p3.catch(() => 'p3 then resolve ok')
const p3_then_res3 = p3.catch(() => { throw "p3 then throw error" })
const p3_then_res4 = p3.catch(() => new Promise((resolve) => resolve('p3 then promise resolve')))
const p3_then_res5 = p3.catch(() => new Promise((resolve, reject) => reject('p3 then promise reject')))
console.log('p3_then_res1', p3_then_res1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
console.log('p3_then_res2', p3_then_res2)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p3 then resolve ok"
// self: ✅:
console.log('p3_then_res3', p3_then_res3)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p3 then throw error"
// self: ✅:
console.log('p3_then_res4', p3_then_res4)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p3 then promise resolve"
// self: ✅:
console.log('p3_then_res5', p3_then_res5)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p3 then promise reject"
// self: ✅:



// 异步：
/* test4: 测试promise内容为异步，状态为成功的Promise */
const p4 = new Promise((resolve) => {
    setTimeout(() => { resolve('async OK') }, 500)
})
console.log('p4', p4)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: "async OK"
// self: ✅
const p4_then_res = p4.then(res => { console.log('p4_res', res) })
// ES6:  p4_res async OK
// self: ✅
console.log('p4_then_res', p4_then_res)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
const p4_then_res1 = p4.then(res => { console.log('p4_res1', res) })
// ES6:  p4_res1 sync OK
// self: ✅
const p4_then_res2 = p4.then(() => 'p4 then resolve ok')
const p4_then_res3 = p4.then(() => { throw "p4 then throw error" })
const p4_then_res4 = p4.then(() => new Promise((resolve) => resolve('p4 then promise resolve')))
const p4_then_res5 = p4.then(() => new Promise((resolve, reject) => reject('p4 then promise reject')))

console.log('p4_then_res1', p4_then_res1)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
console.log('p4_then_res2', p4_then_res2)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p4 then resolve ok"
// self: ✅
console.log('p4_then_res3', p4_then_res3)
// ES6: pending -> [[PromiseState]]: "rejected", [[PromiseResult]]: "p4 then throw error"
// self: ✅
console.log('p4_then_res4', p4_then_res4)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p4 then promise resolve"
// self: ✅
console.log('p4_then_res5', p4_then_res5)
// ES6: pending -> [[PromiseState]]: "rejected", [[PromiseResult]]: "p4 then promise reject"
// self: ✅



/* test5: 测试promise内容为异步，状态为失败的Promise */
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => { reject('async ERROR') }, 500)
})
console.log('p5', p5) 
// ES6: pending -> [[PromiseState]]: "rejected", [[PromiseResult]]: "async ERROR"
// self: ✅
const p5_catch_err = p5.catch(err => { console.log('p5_err', err) })
// ES6: p5_catch_err async ERROR
// self: ✅
console.log('p5_catch_err', p5_catch_err)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
const p5_then_res1 = p5.catch(res => { console.log('p5_res1', res) })
// ES6:  p5_res1 sync ERROR
// self: ✅
const p5_then_res2 = p5.catch(() => 'p5 then resolve ok')
const p5_then_res3 = p5.catch(() => { throw "p5 then throw error" })
const p5_then_res4 = p5.catch(() => new Promise((resolve) => resolve('p5 then promise resolve')))
const p5_then_res5 = p5.catch(() => new Promise((resolve, reject) => reject('p5 then promise reject')))
console.log('p5_then_res1', p5_then_res1)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: undefined
// self: ✅
console.log('p5_then_res2', p5_then_res2)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p5 then resolve ok"
// self: ✅
console.log('p5_then_res3', p5_then_res3)
// ES6: pending -> [[PromiseState]]: "rejected", [[PromiseResult]]: "p5 then throw error"
// self: ✅
console.log('p5_then_res4', p5_then_res4)
// ES6: pending -> [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p5 then promise resolve"
// self: ✅
console.log('p5_then_res5', p5_then_res5)
// ES6: pending -> [[PromiseState]]: "rejected", [[PromiseResult]]: "p5 then promise reject"
// self: ✅



/* test6: 测试promise内容为异步，抛出错误 */
// try..catch.. 虽然能捕获错误，但是不能捕获异步的异常
const p6 = new Promise(() => {
    setTimeout(() => { throw 'throw error' }, 500)
})
console.log('p6', p6)
// ES6: [[PromiseState]]: "pending", [[PromiseResult]]: undefined
// self: ✅ 
// 状态为pendding, then方法无法执行



/* test7: 测试异常穿透 */
const p7 = new Promise((resolve, reject) => {
    throw '异常穿透Error'
})
p7.then(() => 'step1').then(() => 'step2').then(() => 'step3').catch(e => { console.log('p7', e) })
// ES6: '异常穿透Error'
// self: ✅ 



/* test8: 测试then方法链式调用 */
const p8 = new Promise((resolve, reject) => {
    resolve(1)
})
p8.then((res) => {
    console.log('p8 ', res)
    return ++res
}).then((res) => {
    console.log('p8 ', res)
    return ++res
}).then((res) => {
    console.log('p8 ', res)
    return ++res
}).catch(e => { console.log('p8', e) })
// ES6:  1 2 3
// self: ✅ 



/* test9: 测试Promise.resolve() */
const p9_1 = Promise.resolve('p9_1')
const p9_2 = Promise.resolve(new Promise((resolve) => {resolve('p9_2')}))
const p9_3 = Promise.resolve(new Promise((resolve, reject) => {reject('p9_3')}))
console.log('p9_1', p9_1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p9_1"
// self: ✅ 
console.log('p9_2', p9_2)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "p9_2"
// self: ✅ 
console.log('p9_3', p9_3)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p9_3"
// self: ✅ 



/* test10: 测试Promise.reject() */
const p10_1 = Promise.reject('p10_1')
const p10_2 = Promise.reject(new Promise((resolve) => {resolve('p10_2')}))
const p10_3 = Promise.reject(new Promise((resolve, reject) => {reject('p10_3')}))
console.log('p10_1', p10_1)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "p10_1"
// self: ✅ 
console.log('p10_2', p10_2)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: Promise
// self: ✅ 
console.log('p10_3', p10_3)
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: Promise
// self: ✅ 



/* test11: 测试Promise.all() */
const p11_1 = Promise.all([p1, p4, p8])
const p11_2 = Promise.all([p1, p2, p4])
console.log('p11_1', p11_1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: ['sync OK', 'async OK', 1]
// self: ✅
p11_2.catch(e => console.log('p11_2', p11_2))
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "sync ERROR"
// self: ✅

/* test12: 测试Promise.race() */
const p12_1 = Promise.race([p1, p2])
const p12_2 = Promise.race([p2, p1])
console.log('p12_1', p12_1)
// ES6:  [[PromiseState]]: "fulfilled", [[PromiseResult]]: "sync OK"
// self: ✅
p12_2.catch(e => console.log('p12_2', p11_2))
// ES6:  [[PromiseState]]: "rejected", [[PromiseResult]]: "sync ERROR"
// self: ✅












