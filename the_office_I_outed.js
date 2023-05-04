function outed(meet, boss){
    let sum = 0;
    let count = 0;
    let score = 0;

    for (let prop in meet) {
        sum += meet[prop];
        if (meet.hasOwnProperty(prop)) count++;
        if (prop === boss) score += meet[prop];
    }

    let rating = (sum + score) / count;
    return rating <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

outed();