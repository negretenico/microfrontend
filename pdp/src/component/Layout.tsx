import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import { QUERY_KEYS } from '../query/queryKey'
import { QUERY_FUNCTIONS } from '../query/queryFunctions'
import Card from 'product_card/Card'
import Spinner from './Spinner'
const queryClient = new QueryClient();
const ProductList = ()=>{
    const {data} = useSuspenseQuery({
        queryKey: QUERY_KEYS.product.getAll,
        queryFn: QUERY_FUNCTIONS.getAll
    })
    
    return <>
    {Object.values(data).flatMap(el=>el).map(el => {
        return <Card {...el} />
    })}
    </>
}

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
           <Suspense fallback={<Spinner/>}>
    <ProductList/>
   </Suspense>
    </QueryClientProvider>
  )
}
