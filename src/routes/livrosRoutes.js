import express from "express";
import LivroController from "../controllers/livroController.js";


const routes = express.Router();

routes.get("/livros", LivroController.listaLivros)
routes.get("/livros/busca", LivroController.listarLivrosPorEditora)
routes.get("/livros/:id", LivroController.listaLivroPorId);
routes.post('/livros', LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro)
routes.delete("/livros/:id", LivroController.excluirLivroPorId);



export default routes;