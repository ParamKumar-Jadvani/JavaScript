function find_Odd_Even(number){
    let result;

    if(number%2==0)
        result = "It's an even number";
    else
        result = "It's a odd number";

        return result;
}

const number = process.argv[2];

console.log(find_Odd_Even(number));