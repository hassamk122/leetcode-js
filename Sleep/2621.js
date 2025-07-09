/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let time =millis;
    return new Promise((resolve,reject)=>[
     setTimeout(() => {
        resolve();
     },time)   
    ])
}


let t = Date.now()
sleep(200).then(() => console.log(Date.now() - t)) // 100
