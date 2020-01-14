// Your code here

function mapToNegativize(src){
    let newArray = []
    for(let i = 0; i < src.length; i++ ){
        newArray.push(src[i] * -1)
    }
    return newArray
}

function mapToNoChange(src){
    let newArray = []
    for(let i= 0; i < src.length; i++){
        newArray.push(src[i])
    }
    return newArray
}

function mapToDouble(src){
    let newArray = []
    for(let i = 0; i < src.length; i++){
        newArray.push(src[i] * 2)
    }
    return newArray
}

function mapToSquare(src){
    let newArray = []
    for(let i = 0; i < src.length; i++){
        newArray.push(src[i] * src[i])
    }
    return newArray
}

function reduceToTotal(src, start=0){
    let total = start
    for(let i = 0; i < src.length; i++){
        total += src[i]
    }
    return total
}

function reduceToAllTrue(src){
    let value = true
    for(let i=0; i < src.length; i++){
        value = !!value && !!src[i]
    }
    return value
}

function reduceToAnyTrue(src){
    let value = null
    for(let i=0; i < src.length; i++){
        value = !!value || !!src[i]
    }
    return value
}