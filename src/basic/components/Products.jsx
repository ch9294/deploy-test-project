import React, {useEffect, useState} from 'react';
import useProducts from "../../hooks/use-products";

export default function Products() {
    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    const [checked, setChecked] = useState(false);
    const [loading,error,products] = useProducts(checked);
    const handleChange = () => setChecked((prev) => !prev);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`data/${checked ? 'sale_' : ''}products.json`)
    //         .then((res) => {
    //             throw new Error("μλ¬ λ°μ!!")
    //             // return res.json();
    //         })
    //         .then((data) => {
    //             console.log('π₯λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄');
    //             setProducts(data);
    //             setIsLoading(prev => {
    //                  return false;
    //             });
    //             setIsError(prev => {
    //                 return false;
    //             });
    //         })
    //         .catch((err) => {
    //             console.log("μλ¬ λ°μ" + err);
    //             setIsError(true);
    //         })
    //         .finally(() => {
    //             setIsLoading(false)
    //         })
    //     return () => {
    //         console.log('π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.');
    //     };
    // }, [checked]);

    return (
        loading ? "Loading..." : <>
            {
                !error && <>
                    <input
                    id='checkbox'
                    type='checkbox'
                    value={checked}
                    onChange={handleChange}/>
                    <label htmlFor='checkbox'>Show Only π₯ Sale</label>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <article>
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </>
            }
            {error && "μλ¬κ° λ°μνμμ΅λλ€."}
        </>
    );
}
