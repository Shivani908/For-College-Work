let n = 10;
let str = "";
for (let i = n/2; i<n; i += 2){
    for(let j=1; j<n -i; j+=2){
        str += " ";
    }
    for(let j=1; j<i +1; j++){
        str += "*";
    }
    for(let j=1; j<n-i +1; j++){
        str += " ";
    }

    
}