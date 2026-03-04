import React from "react";
import { Form, Input, Modal, message } from "antd";
import type { Author } from "../types";

interface CreateAuthorModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Author, "id" | "created_at">) => Promise<void>;
  loading?: boolean;
}

const CreateAuthorModal: React.FC<CreateAuthorModalProps> = ({
  open,
  onClose,
  onSubmit,
  loading = false,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      await onSubmit({
        name: values.name,
        email: values.email,
      });
      form.resetFields();
      onClose();
      message.success("Autor criado com sucesso!");
    } catch (error) {
      message.error("Erro ao criar autor");
    }
  };

  return (
    <Modal
      title="Criar Novo Autor"
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Nome do Autor"
          name="name"
          rules={[{ required: true, message: "Nome do autor é obrigatório" }]}
        >
          <Input placeholder="Digite o nome do autor" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", message: "Email inválido" }]}
        >
          <Input type="email" placeholder="Digite o email do autor" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateAuthorModal;
