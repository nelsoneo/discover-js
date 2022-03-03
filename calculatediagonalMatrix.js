let arr = [[1,2,3],
           [4,5,6],
           [9,8,9]]

// console.log(arr[1][1])


function diagonalDifference(arr) {

    let diagRigth = 0;
    let diagLeft = 0;

    for (let i = 0; i < arr.length; i++) {

        let arrLeng = arr[i].length;
        // console.log(arr[i][i])
        

        for (let j = 0; j < arrLeng-1; j++) {
            
            // console.log(arr[i][i])
            console.log(arr[i][(arrLeng-1)])
            // diagLeft += arr[i][i];
            // console.log(diagLeft)
        }
    }


}

console.log(diagonalDifference(arr))

