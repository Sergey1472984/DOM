function logSquares(a = 0, b = 100){
    console.log(a*a)
    if (a === b) return
    logSquares(a + 1, b)
}

function getMaxVal(arr, i = -Infinity){
    if (arr.length > 0){
        if (arr[0] > i) i = arr[0]
        return getMaxVal(arr.slice(1), i)
    }
    return i   
}

function getText(elem, splitS){
    let arrOfW = elem.split(splitS)
    for (let i in arrOfW){
        arrOfW[i] = arrOfW[i].trim()    
    }
    return arrOfW
}

arrOfW = getText(thousandWords.innerText, '\n')

function arrToArrObj(arr){
    let newArr = []
    for (val of arr){
        newArr.push({"word":val, "length":val.length})
    }
    return newArr
}

arrOfObj = arrToArrObj(arrOfW)

function iFMoreThanN(arrObj, N){
    for (let obj of arrObj){
        for (let key1 in obj){
            if (Number(obj[key1]) > N){
                for (let key2 in obj){
                    if (obj[key1] !== obj[key2]) console.log(obj[key2])
                }
            }
        }
    }
}

iFMoreThanN(arrOfObj, 10)

function personFromTable(personTable){
    let arrP = getText(personTable, '\n')
    for (key in arrP){
        arrP[key] = {'name':getText(arrP[key], '\t')[0], 'age':getText(arrP[key], '\t')[1]}
    }
    return arrP
}

objP = personFromTable(personTable.innerText)

function iFMoreThanN2(arrObj, N, func){
    for (let obj of arrObj){
        for (let key1 in obj){
            if (Number(obj[key1]) > N){
                for (let key2 in obj){
                    if (obj[key1] !== obj[key2]) obj[key1] = func(obj[key1])
                }
            }else if(Number(obj[key1]) <= N) obj[key1] = func(obj[key1])
        }
    }
    return arrObj
}

function personIsAdult(arrP){
    let arrAdultP = iFMoreThanN2(arrP, 18, function(key){
        if (key > 18){
            key = 'adult'
        }else {
            key = 'underage'
        }
        return key
    })
    return arrAdultP
}

objPAdult = personIsAdult(objP)

console.log(objPAdult)