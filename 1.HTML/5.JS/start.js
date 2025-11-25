for(let i=0;i<5; i++){
    let line="";
    for(let j=0; j<=i; j++){
        line += "*";
        
    }
    console.log(line);
}

for(let i=5;i>0; i--){
    let line="";
    for(let j=0; j<=i;){
        line += "*";
        
    }
    console.log(line);
}


    for(let i=5; i>0; i--){
        let line="";
        for(let k=5;k>i;k--)
        {
            line += " ";
        }
        for(let j=0; j<i; j++){
            line += "*";
        }

        console.log(line);
    }

