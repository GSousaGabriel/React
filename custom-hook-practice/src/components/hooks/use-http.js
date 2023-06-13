import { useCallback, useState } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (path, method, body, cb) => {
        if (body) {
            body = JSON.stringify(body)
        }

        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                'https://reacthttp-65347-default-rtdb.firebaseio.com/' + path + '.json',
                {
                    method: method,
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            cb(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp