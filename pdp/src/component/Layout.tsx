import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query'
import React, { Suspense, useEffect } from 'react'
import { QUERY_KEYS } from '../query/queryKey'
import { QUERY_FUNCTIONS } from '../query/queryFunctions'
import Card from 'product_card/Card'
import Spinner from './Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../index.scss"

const queryClient = new QueryClient();
const ProductList = ()=>{
    const {data,isError,isSuccess,isFetching} = useSuspenseQuery({
        queryKey: QUERY_KEYS.product.getAll,
        queryFn: QUERY_FUNCTIONS.getAll,
    })
    useEffect(()=>{
      if(isFetching){
        toast.loading("Request Pending! 😄")
      }
      if(isError){
        toast.error('Oh NO! Something went wrong 🥴')
      }
      if(isSuccess){
        toast.success("Done loading data! 🥳")
      }
    },[isSuccess,isError])
    return <>
  <div className="grid grid-cols-3 gap-4 ">
    {Object.values(data).flatMap(el=>el).map(el => {
        return <Card {...el} />
    })}
    </div>
    </>
}

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" autoClose={3000} />
           <Suspense fallback={<Spinner/>}>
    <ProductList/>
   </Suspense>
    </QueryClientProvider>
  )
}
