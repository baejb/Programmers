function solution(n, m) {
    var answer = [];
    let gcd = 0;
    let lcm = 0;
    if(n<m){
        for(let i =1;i<=m ; i++){
            if(i<=n&& n%i=== 0 && m%i === 0){
                gcd = i ;
                
            }
        }
        
    }
    else{
        for(let i =1;i<=n ; i++){
            if(i<=m&& n%i=== 0 && m%i === 0){
                gcd = i ;
            }
        }
    }
    lcm = gcd *(n/gcd) * (m/gcd);
    answer=[gcd,lcm];
    return answer;
}