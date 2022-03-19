export const sum = (n1: number, n2: number): number => {
    if(n1 === undefined || n2 === undefined) {
        throw new Error('Missing one or more parameters')
    }

    return n1+n2;
}
