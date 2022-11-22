import { createContext, useState } from "react";

 const CustomContext = createContext();



const Context = (props) => {
    const [count1, setCount1] = useState(0)

    const plusCount = () => {
        setCount1(count1 + 1)
    }

    const value = {
        count1,
        setCount1, plusCount
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context