import React from "react";
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../data/data';
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { FormInput } from '../formsStyles'

const ProdutoGerencia = () => {
    const[id, setId] = useState('');
    const[descricao, setDescricao] = useState('');
    const[nome, setNome] = useState('');
    const[fotoLink, setFoto] = useState('');
    const[idCategoria, setIdCategoria] = useState('');
    const[idFuncionario, setIdFuncionario] = useState('');
    const[nomeCategoria, setNomeCategoria] = useState('');
    const[nomeFuncionario, setNomeFuncionario] = useState('');
    const[qtdEstoque, setQtdEstoque] = useState('');
    const[valor, setValor] = useState('');
    const[dataFabricacao, setData] = useState('');
    const[produtos, setProdutos] = useState([]);
    const methods = useForm();
    
    const fetchProduto = async() => {
        const { data } = await api.get(`/produto`);
        setProdutos(data);
        }
    useEffect(() => {
        fetchProduto();
    }, [])

    const cadastrarProduto = (e) => {
        e.preventDefault();
        try {
            api.post(`/produto`, {
                descricao: descricao,
                nome: nome,
                fotoLink: fotoLink,
                idCategoria: idCategoria,
                idFuncionario: idFuncionario,
                nomeCategoria: nomeCategoria,
                nomeFuncionario: nomeFuncionario,
                qtdEstoque: qtdEstoque,
                valor: valor,
                dataFabricacao: "2022-11-05T12:12:12Z"
            });    
        } catch (error) {
            console.log(error);
        }

    }
    
    const atualizarProduto = (e) => {
        e.preventDefault();
        try {
            api.put(`/categoria/${id}`, {
                descricao: descricao,
                nome: nome,
                id: id,
                fotoLink: fotoLink,
                idCategoria: idCategoria,
                idFuncionario: idFuncionario,
                nomeCategoria: nomeCategoria,
                nomeFuncionario: nomeFuncionario,
                qtdEstoque: qtdEstoque,
                valor: valor,
                dataFabricacao: "2022-11-05T12:12:12Z"
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deletarProduto = (e) => {
        e.preventDefault();
        try {
            api.delete(`/produto/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <Typography variant="h6" gutterBottom>Produtos</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInput required name="descricao" label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        <FormInput required name="nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <FormInput name="id" label="Id do Produto" value={id} onChange={(e) => setId(e.target.value)}/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Lista de Produtos</InputLabel>
                            <Select value={produtos} fullWidth onClick={(e) => setId(e.target.value)}>
                                 {produtos.map((d) => {
                                     return (
                                        <MenuItem key={d.id} value={d.id}>
                                            {d.nome}
                                        </MenuItem>
                                    );
                                    })}
                            </Select>
                        </Grid>
                        <FormInput required name="fotoLink" label="Link da foto" value={fotoLink} onChange={(e) => setFoto(e.target.value)}/>
                        <FormInput required name="idCategoria" label="Id da Categoria" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}/>
                        <FormInput required name="nomeCategoria" label="Nome da Categoria" value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)}/>
                        <FormInput required name="idFuncionario" label="Id do Funcionario" value={idFuncionario} onChange={(e) => setIdFuncionario(e.target.value)}/>
                        <FormInput required name="nomeFuncionario" label="Nome do Funcionario" value={nomeFuncionario} onChange={(e) => setNomeFuncionario(e.target.value)}/>
                        <FormInput required name="qtdEstoque" label="Quantidade em Estoque" value={qtdEstoque} onChange={(e) => setQtdEstoque(e.target.value)}/>
                        <FormInput required name="valor" label="Valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
                        <FormInput required type="date" name="dataFabricacao" label="Data de Fabricacao" value={dataFabricacao} onChange={(e) => setData(e.target.value)}/>
                    </Grid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="submit" onClick={(e) => cadastrarProduto(e)}> Cadastrar Produto </Button>
                    <Button type="submit" onClick={(e) => atualizarProduto(e)}> Atualizar Produto </Button>
                    <Button type="submit" onClick={(e) => deletarProduto(e)}> Deletar Produto </Button>   
                </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default ProdutoGerencia;