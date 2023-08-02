import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { Provider } from 'react-redux';


import { store } from '@/stores/store';

const ErrorFallback = () => {
   return (
      <div
         className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
         role="alert"
      >
         <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      </div>
   );
};

type AppProviderProps = {
   children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
   return (
      <React.Suspense
         fallback={
            <div className="flex items-center justify-center w-screen h-screen">
               <Spinner size="xl" />
            </div>
         }
      >
         <Provider store={store}>
            <ChakraProvider>
               <ErrorBoundary FallbackComponent={ErrorFallback}>
                  {/* <HelmetProvider> */}
                  {/* <QueryClientProvider client={queryClient}> */}
                  {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
            <Notifications />
            <AuthProvider> */}
                  <Router basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}>{children}</Router>
                  {/* </AuthProvider> */}
                  {/* </QueryClientProvider> */}
                  {/* </HelmetProvider> */}
               </ErrorBoundary>
            </ChakraProvider>
         </Provider>
      </React.Suspense>
   );
};
