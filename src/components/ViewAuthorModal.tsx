import React from "react";
import { Modal, Descriptions } from "antd";
import dayjs from "dayjs";
import { useAuthorModalStore } from "@/store/store.author";

interface ViewAuthorModalProps {
  open: boolean;
  onClose: () => void;
}

const ViewAuthorModal: React.FC<ViewAuthorModalProps> = ({ open, onClose }) => {
  const { selectedAuthor: author } = useAuthorModalStore();

  return (
    <Modal title="Detalhes do Autor" open={open} onCancel={onClose} footer={null}>
      <Descriptions column={1}>
        <Descriptions.Item label="ID">{author?.id}</Descriptions.Item>
        <Descriptions.Item label="Nome">{author?.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{author?.email || "-"}</Descriptions.Item>
        <Descriptions.Item label="Criado em">
          {author?.created_at ? dayjs(author?.created_at).format("DD/MM/YYYY HH:mm") : "-"}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ViewAuthorModal;
