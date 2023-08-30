function numberOfSteps(num: number): number {
    if (num <= 0) {
        return num;
    }

    if(num % 2 === 0) {
        return 1 + numberOfSteps(num / 2);
    } 
    
    return 1 + numberOfSteps(num - 1)

};