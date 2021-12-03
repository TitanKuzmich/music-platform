import { useState } from "react"

export const useInput = (initialvalue) => {
    const [value, setValue] = useState(initialvalue)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange
    }
}