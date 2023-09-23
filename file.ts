const data ='i love js🥰'


await Bun.write('sample-output.txt',data)

const file = await Bun.file('sample-output.txt')

console.log(await file.text())
console.log( file.size)
console.log(await file.stream())