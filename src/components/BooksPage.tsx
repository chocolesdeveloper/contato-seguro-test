import { Button, Row, Col, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CreateBookModal from "@components/CreateBookModal";
import ViewBookModal from "@components/ViewBookModal";
import BooksTable from "@components/BooksTable";
import type { Book } from "@/types";
import { useBooks, useCreateBook, useDeleteBook } from "@/hooks/useQueriesBook";
import { useBookModalStore } from "@/store/store.book";

const BooksPage = () => {
  const { createOpen, viewOpen, selectedBook, openCreate, closeCreate, openView, closeView } =
    useBookModalStore();

  const { data: books, isLoading: loading } = useBooks();
  const { mutateAsync: deleteBook } = useDeleteBook();
  const { mutateAsync: addBook } = useCreateBook();

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      message.success("Livro deletado com sucesso!");
    } catch {
      message.error("Erro ao deletar livro");
    }
  };

  const handleCreate = async (data: Omit<Book, "id" | "created_at">) => {
    await addBook(data);
    closeCreate();
  };

  const handleView = (book: Book) => {
    openView(book);
  };

  return (
    <>
      <div style={{ marginTop: 16 }}>
        <Row justify="end" style={{ marginBottom: 16 }}>
          <Col>
            <Button type="primary" icon={<PlusOutlined />} onClick={openCreate}>
              Criar Livro
            </Button>
          </Col>
        </Row>

        <BooksTable books={books} loading={loading} onDelete={handleDelete} onView={handleView} />
      </div>

      <CreateBookModal open={createOpen} onClose={() => closeCreate()} onSubmit={handleCreate} />

      <ViewBookModal
        open={viewOpen}
        book={selectedBook}
        onClose={() => {
          closeView();
        }}
      />
    </>
  );
};

export default BooksPage;
