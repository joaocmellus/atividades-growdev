DROP TABLE IF EXISTS emprestimos;
DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS autores;
DROP TABLE IF EXISTS leitores;

CREATE TABLE autores(
    id VARCHAR(36) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE livros(
    id VARCHAR(36) PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor_id VARCHAR(36) NOT NULL,
    quantidade_disponivel INT NOT NULL,

    FOREIGN KEY(autor_id) REFERENCES autores(id)
);

CREATE TABLE leitores(
    id VARCHAR(36) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

CREATE TABLE emprestimos(
    id VARCHAR(36) PRIMARY KEY,
    livro_id VARCHAR(36) NOT NULL,
    leitor_id VARCHAR(36) NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,

    FOREIGN KEY(livro_id) REFERENCES livros(id),
    FOREIGN KEY(leitor_id) REFERENCES leitores(id)
);
