function DNAtoRNA(dna) {
    debugger
    let rnk=""
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            rnk[i] = 'U';
        } else {
            rnk[i]=dna[i]
        }
    }
    return rnk;
}