function add(...arguments) {
    if (arguments.length===0) return 0;
    return Math.round(arguments.reduce((a,b,i)=>a+b/(i+1),0));
}

add();