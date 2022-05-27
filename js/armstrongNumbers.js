// How can you make this more scalable and reusable later?

//exports.

findArmstrongNumbers = function(arr) {

let answer = [];
let sumOfArr = 0;

// let splitNum = arr.toString().split('').map(elem => (elem));

for (let i = 0; i <= arr[0]; i++ )
{
    if (i < 10)
    {
        answer.push(i);
    }else{
        let splitNum = i.toString().split('').map(elem => (elem));
        let initialSum = 0;
    for (let j = 0; j < splitNum.length; j++)
    {
        initialSum += splitNum[j] ** splitNum.length;
        
    }
    sumOfArr = initialSum;
    if (sumOfArr == parseInt(splitNum.join(""))){
        answer.push(sumOfArr);
    }
    }
}return answer

};
console.log(findArmstrongNumbers([8]))
console.log(findArmstrongNumbers([99]))
console.log(findArmstrongNumbers([999]))