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
      width: 180,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email?: string) => email || "-",
      width: 220,
    },
    {
      title: "Ações",
      key: "actions",
      width: 160,
      render: (_: any, record: Author) => (
        <Space size="middle">
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
    <div
      style={{
        width: "100%",
      }}
    >
      <Table
        columns={columns}
        dataSource={authors}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 560 }}
      />
    </div>
  );
};

export default AuthorsTable;
