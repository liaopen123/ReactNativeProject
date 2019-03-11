import {trigger} from "./event";

let count = 0;

export  const  setValue = (value)=>{
    trigger('counter-changed',value);
    count = value;
}

export  const getValue =()=>{
    return count;
}
