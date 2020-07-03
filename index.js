function map(arr, fn) {
    const newArr = []
    arr.forEach(function(item){
        newArr.push(fn(item))
    })
    return newArr
}

function reduce(arr, fn, starting) {
    let total;
    let iterationStart;
    if (starting) {
        total = starting
        iterationStart = 0;
    }
    else {
        total = arr[0]
        iterationStart = 1;
    }
    
    for(let i = iterationStart; i < arr.length; i++) {
        total = fn(arr[i], total)
    }

    return total
}