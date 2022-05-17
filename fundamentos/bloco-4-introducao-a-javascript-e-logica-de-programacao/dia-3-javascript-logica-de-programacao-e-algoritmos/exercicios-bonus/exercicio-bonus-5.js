let base = 7;

let size = base - 2;

for (let index = 0; index < size; index++) {
    let line = '';
    for (let index2 = 0; index2 < base; index2++) {
        (index == size - 1 || Math.abs(index2 - Math.floor(base / 2)) == index) ? line += '*' : line += ' ';
    }
    console.log(line);
}