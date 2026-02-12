import { useState } from "react";

export default function useInput(initialVaule=""){
    const [valor, setValor] = useState(initialVaule);

    const onChange = e => {
        setValor(e.target.value);
    };

    const reset = () => setValor("");

    return{
        valor,
        onChange,
        reset
    }
}