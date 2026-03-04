import React from "react";
import { Modal, Descriptions } from "antd";
import type { Book } from "../types";
import dayjs from "dayjs";
import { useAuthor } from "@/hooks/useQueriesAuthor";

interface ViewBookModalProps {
  open: boolean;
  book: Book | null;
  onClose: () => void;
}

const ViewBookModal: React.FC<ViewBookModalProps> = ({ open, book, onClose }) => {
  const { data } = useAuthor(book?.author_id || "");

  if (!book) return null;

  return (
    <Modal title="Detalhes do Livro" open={open} onCancel={onClose} footer={null}>
      <Descriptions column={1}>
        <Descriptions.Item label="ID">{book.id}</Descriptions.Item>
        <Descriptions.Item label="Nome">{book.name}</Descriptions.Item>
        <Descriptions.Item label="Autor">{data?.name || ""}</Descriptions.Item>
        <Descriptions.Item label="Páginas">{book.pages || "-"}</Descriptions.Item>
        <Descriptions.Item label="Criado em">
          {book.created_at ? dayjs(book.created_at).format("DD/MM/YYYY HH:mm") : "-"}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ViewBookModal;
