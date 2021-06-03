import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";
import {client} from "../../utils/api-client";
import {useQuery, useQueryClient } from "react-query";


const Home = props => {
    const queryClient = useQueryClient()

    const [page, setPage] = useState(1);

    const { data, isError, isLoading,isFetching, refetch, status} = useQuery('people',
       // () => client().get(`people/?page=${page}`),
        () => client().get(`/`),
        { enabled: true, cacheTime: 10000, staleTime: 5000})


    useEffect(()=> {
        return () => {
            queryClient.removeQueries('people');
            queryClient.prefetchQuery('people',() => client().get(`/`))
            console.log(1)
        }
    }, [])

/*    useEffect(()=> {
        if(page > 1){
            refetch();
        }
    }, [page])*/

    const onClick = () => {
        //client().get(`people/`)
        //setPage(page+1)
        queryClient.clear();
        //refetch();
    }

 if(isLoading){
     return "loading"
 }
   //console.log("ffetching",isFetching);


    return (
        <div>
            {data.data}
            <Button variant="contained" color="primary" onClick={onClick}>asdasd</Button>
        </div>
    );
};

Home.propTypes = {

};

export default Home;