import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from "./Page/Home";
import SinglePoke from "./Page/SinglePoke";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:id" element={<SinglePoke />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
