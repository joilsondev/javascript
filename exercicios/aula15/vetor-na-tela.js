let valores = [5, 0, 9, 6, 2]

valores.sort()

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o vetor ${valores[pos]}`)
}