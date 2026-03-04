import { useEffect } from "react";
import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { initStore } from "@/services/storage.service";
import HomePage from "@pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

dayjs.locale("pt-br");

function App() {
  useEffect(() => {
    initStore().catch(console.error);
  }, []);

  const queryClient = new QueryClient();

  return (
    <ConfigProvider locale={ptBR}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
