import { useState } from "react";
import { Tabs } from "antd";
import MainLayout from "@/layout/MainLayout";
import BooksPage from "../components/BooksPage";
import AuthorsPage from "../components/AuthorsPage";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const tabItems = [
    {
      key: "1",
      label: "Livros",
      children: <BooksPage />,
    },
    {
      key: "2",
      label: "Autores",
      children: <AuthorsPage />,
    },
  ];

  return (
    <MainLayout>
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
    </MainLayout>
  );
};

export default HomePage;
