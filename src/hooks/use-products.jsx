import React, {useState,useEffect} from "react";

export default function useProducts({checked}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(undefined);

    useEffect(() => {
        setLoading(true);
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => {
                // throw new Error("μλ¬ λ°μ!!")
                return res.json();
            })
            .then((data) => {
                console.log('π₯λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄');
                setProducts(data);
                setLoading(false)
                setError(false)
            })
            .catch((err) => {
                console.log("μλ¬ λ°μ" + err);
                setError(true);
            })
            .finally(() => {
                setLoading(false)
            })
        return () => {
            console.log('π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.');
        };
    }, [checked]);

    return [loading,error,products];
}
