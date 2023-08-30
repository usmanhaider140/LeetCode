function maximumWealth(accounts: number[][]): number {
    const wealths = accounts.map(customer => {
        return customer.reduce((total, wealth)=> {
            return total + wealth
        })
    })

    return wealths.sort((a,b) => b-a)[0]
};