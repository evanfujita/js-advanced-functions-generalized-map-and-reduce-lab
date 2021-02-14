// Add your functions here

const map = function(array, func){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(func(array[i]))
    }
    return newArray
}


const reduce = function(array, func, startingPoint = 0){
    let total = true
    
    for (let i = 0; i < array.length; i++){      
        if (array[i] === false){
            total = false
        }
    }
    return total
}

