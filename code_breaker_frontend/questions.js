let questionBox = document.getElementById("question");
let answerBox = document.getElementById("answer");
let answer;

const questionGen = ()=>{
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3 = Math.floor(Math.random() * 10);
    let num4 = Math.floor(Math.random() * 10);
    
    let random = Math.floor(Math.random() * 6) + 1 
    switch(random){
        case 1 :
            questionBox.innerText = `${num1} + ${num2} = X`
            answer = Number(`${num1}${num2}`) + Number(`${num3}${num4}`)
            break;
        case 2 :
            questionBox.innerText = `${num1} - ${num2} = X`
            answer = Number(`${num1}${num2}`) + Number(`${num3}${num4}`)
            break; 
        case 3 :
            questionBox.innerText = `${num1}${num2} + ${num3}${num4} = X`
            answer = Number(`${num1}${num2}`) + Number(`${num3}${num4}`)
            break;
        case 4 :
            questionBox.innerText = `${num1}${num2} - ${num3}${num4} = X`
            answer = Number(`${num1}${num2}`) + Number(`${num3}${num4}`)
            break;    
        case 5 : 
            questionBox.innerText = `${num1} x ${num2} = X`
            answer = Number(`${num1}`) * Number(`${num2}`)
            break;
        case 6 :
            questionBox.innerText = `${num1}${num2} + X = ${num3}${num4}`
            answer = Number(`${num3}${num4}`) - Number(`${num1}${num2}`) 
    }
    ansReset();
}

const ansReset = ()=>{
    answerBox.innerHTML = "X = "
}

const checkAns = ()=>{
    let submit = Number(answerBox.innerText.split('=')[1]);
    if(submit === answer){
        //increase score
        progress(getSeconds()+10, 120, $('#progressBar'));
        console.log('CONGRATS')
        questionGen();
    }else if(submit == ''){
        return
    }else{
        progress(getSeconds()-10, 120, $('#progressBar'));
        console.log("Wrong Answer")
        ansReset();
    }

}