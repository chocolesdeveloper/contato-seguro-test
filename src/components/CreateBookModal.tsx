import React from "react";
import { Form, Input, InputNumber, Select, Modal, message } from "antd";
import type { Book } from "../types";
import { useAuthors } from "@/hooks/useQueriesAuthor";

interface CreateBookModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Book, "id" | "created_at">) => Promise<void>;
  loading?: boolean;
}

const CreateBookModal: React.FC<CreateBookModalProps> = ({
  open,
  onClose,
  onSubmit,
  loading = false,
}) => {
  const [form] = Form.useForm();

  const { data: authors } = useAuthors();

  const handleSubmit = async (values: any) => {
    try {
      await onSubmit({
        name: values.name,
        author_id: values.author_id,
        pages: values.pages,
      });
      form.resetFields();
      onClose();
      message.success("Livro criado com sucesso!");
    } catch (error) {
      message.error("Erro ao criar livro");
    }
  };

  return (
    <Modal
      title="Criar Novo Livro"
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Nome do Livro"
          name="name"
          rules={[{ required: true, message: "Nome do livro é obrigatório" }]}
        >
          <Input placeholder="Digite o nome do livro" />
        </Form.Item>

        <Form.Item
          label="Autor"
          name="author_id"
          rules={[{ required: true, message: "Selecione um autor" }]}
        >
          <Select placeholder="Selecione um autor">
            {authors?.map((author) => (
              <Select.Option key={author.id} value={author.id}>
                {author.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Número de Páginas" name="pages">
          <InputNumber min={1} placeholder="Digite o número de páginas" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBookModal;
