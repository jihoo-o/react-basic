import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState((state) => ({
            ...state,
            loading: true,
        }));
        setTrigger(new Date());
    };

    useEffect(() => {
        if (!options.url) return;
        axiosInstance(options) //
            .then((data) => {
                setState((state) => ({
                    ...state,
                    loading: false,
                    data,
                }));
            }) //
            .catch((error) => {
                setState((state) => ({
                    ...state,
                    loading: false,
                    error,
                }));
            });
    }, [trigger]);

    return { ...state, refetch };
};

export default useAxios;
