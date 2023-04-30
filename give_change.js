function giveChange(amount) {
    let change=[0,0,0,0,0,0];
    while(amount>=100){
        change[5]++;
        amount-=100;
    }
    while(amount>=50){
        change[4]++;
        amount-=50;
    }
    while(amount>=20){
        change[3]++;
        amount-=20;
    }
    while(amount>=10){
        change[2]++;
        amount-=10;
    }
    while(amount>=5){
        change[1]++;
        amount-=5;
    }
    while(amount>=1){
        change[0]++;
        amount-=1;
    }
    return change;
}
giveChange();