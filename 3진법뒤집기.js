function solution(n) {
    var answer = 0;
    let i = 0;
    let arr= [];
    while(n>=3){
        arr[i] = n%3;
        console.log(arr);
        n = Math.floor(n/3);
        i++;
    }
    arr.push(n);
    
    for( let j =arr.length-1,i=0; j>=0, i<arr.length ;j--, i++){
        if(arr[j]!==0){
            answer += arr[j]*(3**i);
        }
    }
    return answer;
}

//1. n을 3진법으로 나타내기 -> 3으로 나누었을때 몫을 다시 n으로 저장하고 나머지는 따로 변수에 저장 
//2. 3진법으로 나타낸 n 뒤집기 -> 따로 변수에 저장한 수가 뒤집어진 3진법 n 
//3. 뒤집은 n을 10진법으로 표현하기 -> 길이에 따라 각 곱해서 100진법으로 나타내기 ! 

console.log(solution(45));
