import React from 'react';
import {useQuery} from "react-query";
import {client} from "../../utils/api-client";

const Table = () => {
/*
    const { data, isError, isLoading,isFetching, refetch, status} = useQuery('people',
        // () => client().get(`people/?page=${page}`),
        () => client().get(`/`),
        { enabled: true, cacheTime: 1000, staleTime: 0})
    console.log("loading",isLoading);
    if(status.loading ){
        return "loading"
    }
*/

    return (
        <div>
          {/*  {data.data}*/}
        </div>
    );
};

export default Table;