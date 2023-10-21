function diamond(height) {
    if (!height||height<=0||height%2===0){
        return null
    }
    if (height % 2 === 0) {
        height++; // Убедимся, что высота - нечетное число
    }

    let stars = 1;
    let spaces = (height - 1) / 2;
    let str = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < spaces; j++) {
            str += " ";
        }
        for (let j = 0; j < stars; j++) {
            str += "*";
        }
        str += "\n";

        if (i < Math.floor(height / 2)) {
            spaces--;
            stars += 2;
        } else {
            spaces++;
            stars -= 2;
        }
    }

    return str;
}

