import {autor} from "../models/Autor.js";

class AutorController {
    static async listaAutores (req,res) {
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async cadastrarAutores (req,res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor})

        }catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`})
        }
    }

       static async listaAutorPorId (req,res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
        }
    }

      static async atualizarAutor (req,res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Livro atualizado"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do autor`})
        }
    }

    static async excluirAutorPorId(req,res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id)
            res.status(200).json({ message: "Autor deletado"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão do autor`})
        }
    }
    
}

export default AutorController;