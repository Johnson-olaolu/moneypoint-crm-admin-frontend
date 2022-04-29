import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import IndexRoutes from "./routes/index.routes";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Money Point CRM</title>
        <link rel="icon" type="image/png" href="url('/logo.png')"></link>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="*" element = {<IndexRoutes/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
