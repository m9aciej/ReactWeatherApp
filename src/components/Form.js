import React from 'react';
const Form = props => {
    return(
        <form > {/* onSubmit={props.submit} */}
            <input type = "text" 
            value={props.value}
            onChange={props.change} //reakcaj na zmianę stanu
            placeholder="Wpisz miasto"
            />
            {/* <button>Wyszukaj miasto</button> */}
        </form>
    );
}
export default Form;