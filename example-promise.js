// function getTempCallback(location, callback){
//     callback(undefined, 78);
//     callback('City Not Found');
// }

// getTempCallback('Islamabad', function(err, temp){
//     if(err)
//         console.log('error', err);
//     else
//         console.log('success', temp);
// });

// function getTempPromise(location){
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         }, 1000); 
//     });
// }

// getTempPromise('Islamabad').then(function(temp){
//     console.log('promise success', temp);
// }, function(err){
//     console.log('promise error', err);
// });

//Chalenge Area

function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number')
            resolve(a + b);
        else
            reject('A & b need to be number');
    });
}

addPromise(2, 8).then(function(ans){
    console.log('sum is', ans);
}, function(err){
    console.log('promise error', err);
});

addPromise('some string', 8).then(function(ans){
    console.log('this should not appear');
}, function(err){
    console.log('error is', err);
});