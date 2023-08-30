function fizzBuzz(n: number): string[] {
    const result: string[] = []
    for(let i = 1; i <= n; i++) {
        const divisibleByThree = i % 3 === 0;
        const divisibleByFive = i % 5 === 0; 

        let currentString = '';

         if (divisibleByThree) {
            currentString += 'Fizz'
        } 
        if (divisibleByFive) {
            currentString += 'Buzz'
        } 
        if(currentString === '') {
            currentString = String(i)
        }
        
        result.push(currentString)
    }

    return result;
};