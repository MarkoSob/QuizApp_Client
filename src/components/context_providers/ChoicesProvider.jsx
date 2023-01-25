import {useState} from 'react';
import {ChoicesContext} from "../../context/context";

const ChoicesProvider = ({children}) => {
    const [answers, setAnswers] = useState({});

    return (
        <ChoicesContext.Provider value={{answers, setAnswers}}>
            {children}
        </ChoicesContext.Provider>
    );
};
export default ChoicesProvider;