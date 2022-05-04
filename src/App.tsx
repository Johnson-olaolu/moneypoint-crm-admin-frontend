import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import IndexRoutes from "./routes/index.routes";
import { Helmet } from "react-helmet";

import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

const persistor = persistStore(store)

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Money Point CRM</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="*" element = {<IndexRoutes/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
