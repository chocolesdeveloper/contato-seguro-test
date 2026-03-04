import { Layout } from "antd";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header style={{ background: "#001529", padding: "0 24px" }}>
        <h1 style={{ color: "white", margin: 0, lineHeight: "64px", fontSize: 20 }}>
          📚 Contato Seguro - CRUD de Livros e Autores
        </h1>
      </Layout.Header>
      <Layout.Content style={{ padding: "24px" }}>
        <div style={{ background: "white", padding: 24, borderRadius: 8 }}>{children}</div>
      </Layout.Content>
    </Layout>
  );
}

export default MainLayout;
