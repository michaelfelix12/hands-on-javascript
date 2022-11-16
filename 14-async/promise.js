//3 kondisi utama dalam Promise
//fulfilled
//rejected
//pending => fulfilled/rejected

//cara membuat promise
const username = 'admin'
const password = '12345'
const janji = new Promise((resolve, reject) => {
    let id = '1234'
        setTimeout(() => {
        if (username === 'admin' && password === '12345') {
            resolve(id)
        } else {
            reject('username atau Password incorrect')
        }
    }, 3000)
})

function onfulfilled(resolveValue) {
    console.log(resolveValue)
}

function onrejected(rejectValue) {
    console.log(rejectValue)
}

// janji.then(onfulfilled, onrejected)

// janji.then(onfulfilled)
//      .then(null, onrejected)

// janji.then(onfulfilled)
//      .catch(onrejected)

//then //catch //finally
janji.then(onfulfilled)
     .catch(onrejected)
     .finally(() =>{
         console.log('selesai')
      })