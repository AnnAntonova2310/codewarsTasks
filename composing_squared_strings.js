function compose(s1, s2) {
    s1 = s1.split`\n`
    s2 = s2.split`\n`
    let a1=[];
    let a2=[]
    for (let i=0;i<s1[0].length;i++){
        a1.push(s1[i].slice(0,i+1))
        a2.unshift(s2[i].slice(0,i+1))
    }
    return a1.map((v,i)=>v+a2[i]).join`\n`
};