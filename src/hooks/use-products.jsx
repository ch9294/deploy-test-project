import React, {useState,useEffect} from "react";

export default function useProducts({checked}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(undefined);

    useEffect(() => {
        setLoading(true);
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => {
                // throw new Error("에러 발생!!")
                return res.json();
            })
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
                setLoading(false)
                setError(false)
            })
            .catch((err) => {
                console.log("에러 발생" + err);
                setError(true);
            })
            .finally(() => {
                setLoading(false)
            })
        return () => {
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
    }, [checked]);

    return [loading,error,products];
}
