function DNAtoRNA(dna) {
    let rnk = "";
    for (let i = 0; i < dna.length; i++) {
        rnk += dna[i] === 'T' ? 'U' : dna[i];
    }
    return rnk;
}