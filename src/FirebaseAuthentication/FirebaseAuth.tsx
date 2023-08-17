import React from "react";
import { Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const FirebaseAuth = () => {

  // Create a client
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

export default FirebaseAuth;