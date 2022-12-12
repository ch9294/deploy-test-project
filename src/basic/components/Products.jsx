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
    //             throw new Error("에러 발생!!")
    //             // return res.json();
    //         })
    //         .then((data) => {
    //             console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
    //             setProducts(data);
    //             setIsLoading(prev => {
    //                  return false;
    //             });
    //             setIsError(prev => {
    //                 return false;
    //             });
    //         })
    //         .catch((err) => {
    //             console.log("에러 발생" + err);
    //             setIsError(true);
    //         })
    //         .finally(() => {
    //             setIsLoading(false)
    //         })
    //     return () => {
    //         console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
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
                    <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
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
            {error && "에러가 발생하였습니다."}
        </>
    );
}
