const findSmallestInt = (args) => {
    debugger
    let minNumber = args[0];
    for (let i = 0; i < args.length; i++) {
        if(minNumber>args[i]){
            minNumber=args[i]
        }
    }
    return minNumber
};
findSmallestInt([78,56,232,12,8])