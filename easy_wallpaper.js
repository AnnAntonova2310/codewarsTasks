function wallpaper(l, w, h) {
    const numbers = ["zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty"];

    if(l==0 || w==0 || h== 0) return numbers[0];


    const percentageToBuy = 1.15;
    const widthRolls = 0.52;
    const lengthRolls = 10;

    const sizeRoom = (2* w*h) + (2* l*h);

    const sizeRoll = widthRolls*lengthRolls;

    const rolls = Math.ceil((sizeRoom / sizeRoll) * percentageToBuy);
    if(rolls > 20) rolls = 20;

    return numbers[rolls];
}
