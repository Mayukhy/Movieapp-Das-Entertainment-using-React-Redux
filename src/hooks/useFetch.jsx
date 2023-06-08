import { useEffect, useState } from "react";
import { fetchFromApi } from "../utls/Api";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);
        
        fetchFromApi(url)
            .then((response) => {
                setLoading(false);
                setData(response);
            })
            .catch((error) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;