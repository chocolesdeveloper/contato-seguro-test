import { Button, Row, Col, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CreateAuthorModal from "@components/CreateAuthorModal";
import ViewAuthorModal from "@components/ViewAuthorModal";
import AuthorsTable from "@components/AuthorsTable";
import type { Author } from "@/types";
import { useAuthors, useCreateAuthor, useDeleteAuthor } from "@/hooks/useQueriesAuthor";
import { useAuthorModalStore } from "@/store/store.author";

const AuthorsPage = () => {
  const { createOpen, viewOpen, openCreate, openView, closeView, closeCreate } =
    useAuthorModalStore();

  const { data: authors, isLoading: loading } = useAuthors();
  const { mutateAsync: deleteAuthor } = useDeleteAuthor();
  const { mutateAsync: addAuthor } = useCreateAuthor();

  const handleDelete = async (id: string) => {
    try {
      await deleteAuthor(id);
      message.success("Autor deletado com sucesso!");
    } catch {
      message.error("Erro ao deletar autor");
    }
  };

  const handleCreate = async (data: Omit<Author, "id" | "created_at">) => {
    await addAuthor(data);
    closeCreate();
  };

  const handleView = (author: Author) => {
    openView(author);
  };

  return (
    <>
      <div style={{ marginTop: 16 }}>
        <Row justify="end" style={{ marginBottom: 16 }}>
          <Col>
            <Button type="primary" icon={<PlusOutlined />} onClick={openCreate}>
              Criar Autor
            </Button>
          </Col>
        </Row>

        <AuthorsTable
          authors={authors}
          loading={loading}
          onDelete={handleDelete}
          onView={handleView}
        />
      </div>

      <CreateAuthorModal open={createOpen} onClose={() => openCreate()} onSubmit={handleCreate} />

      <ViewAuthorModal
        open={viewOpen}
        onClose={() => {
          closeView();
        }}
      />
    </>
  );
};

export default AuthorsPage;
