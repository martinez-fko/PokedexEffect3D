import React from 'react';
import '../assets/css/inputControl.css'

const InputControl = ({placeholder , btnName , submit, size}) => {
    return (
       <form onSubmit={submit} className="input-control" style={{width:size}}>
        <input type="text" required name="search"/>
        <span>{placeholder}</span>
        <button>
            {btnName}
            
        </button>
       </form>
    );
};

export default InputControl;