import React from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import type { Author } from "../types";

interface AuthorsTableProps {
  authors: Author[] | undefined;
  loading?: boolean;
  onDelete: (id: string) => Promise<void>;
  onView: (author: Author) => void;
}

const AuthorsTable: React.FC<AuthorsTableProps> = ({
  authors,
  loading = false,
  onDelete,
  onView,
}) => {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email?: string) => email || "-",
    },
    {
      title: "Ações",
      key: "actions",
      width: 150,
      render: (_: any, record: Author) => (
        <Space>
          <Button type="primary" size="small" icon={<EyeOutlined />} onClick={() => onView(record)}>
            Ver
          </Button>
          <Popconfirm
            title="Deletar autor"
            description="Tem certeza que deseja deletar este autor? Todos os seus livros também serão deletados."
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
      dataSource={authors}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 10 }}
    />
  );
};

export default AuthorsTable;
