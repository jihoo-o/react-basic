import React from 'react';
import useAxios from './hooks/useEffect/useAxios.js';

function App() {
    const { loading, error, data, refetch } = useAxios({
        url: 'https://yts.mx/api/v2/list_movies.json',
    });

    /**
     * 최초 App 렌더링 시 로그 출력
     * +
     * useAxios 내부에서 관리 중인 state가 변했을 때 로그 출력
     */
    console.log(loading, error, data);

    return (
        <div className="App">
            <button onClick={refetch}>refetch</button>
            <h1>{loading ? 'loading' : data.status}</h1>
        </div>
    );
}

export default App;
