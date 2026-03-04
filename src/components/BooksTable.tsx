import React from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import type { Book } from "../types";

import { useAuthors } from "@/hooks/useQueriesAuthor";

interface BooksTableProps {
  books: Book[] | undefined;
  loading?: boolean;
  onDelete: (id: string) => Promise<void>;
  onView: (book: Book) => void;
}

const BooksTable: React.FC<BooksTableProps> = ({ books, loading = false, onDelete, onView }) => {
  const { data: authors = [] } = useAuthors();

  const authorMap = new Map(authors.map((a) => [a.id, a.name]));

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Autor",
      dataIndex: "author_id",
      key: "author_id",
      render: (authorId: string) => authorMap.get(authorId) ?? "Desconhecido",
    },
    {
      title: "Páginas",
      dataIndex: "pages",
      key: "pages",
      width: 100,
      render: (pages?: number) => pages || "-",
    },
    {
      title: "Ações",
      key: "actions",
      width: 150,
      render: (_: any, record: Book) => (
        <Space>
          <Button type="primary" size="small" icon={<EyeOutlined />} onClick={() => onView(record)}>
            Ver
          </Button>
          <Popconfirm
            title="Deletar livro"
            description="Tem certeza que deseja deletar este livro?"
            onConfirm={() => onDelete(record.id)}
            okText="Sim"
            cancelText="Não"
          >
            <Button danger size="small" icon={<DeleteOutlined />}>
              Deletar
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={books}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 10 }}
    />
  );
};

export default BooksTable;
