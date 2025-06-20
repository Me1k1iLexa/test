import { useState } from 'react';

export  function useLocal<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(()=>{
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error){
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((prevValue: T)=>T)) => {
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch(error){
            console.log(error);
        }
    };

    return [storedValue, setValue] as const;
}