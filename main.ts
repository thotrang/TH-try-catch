let num = 5;
let de_num = 0;


let tryNum = (num: number, de_num: number) => {
    try {
        if (de_num == 0) {
            throw "Divide by zero error"
        } else {
            let a = num / de_num;
        }
    } catch (e) {
        console.log('error:' + e);

    }
}
let tryReferenceError = () => {
    function ab() { };
    try {
        ab();
    } catch (e) {
        console.log("Error : " + e);
    }
}
let trySyntaxError=()=>{
    try {
        eval("alert('ES6 Exception Handling)");
    } catch(e){
        console.log("Error : " + e)
    }
}
tryReferenceError();
trySyntaxError();