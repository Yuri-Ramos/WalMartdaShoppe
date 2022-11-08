import React from "react";
import { useState, useEffect } from 'react';
import api from '../../data/data';
import { FormInput } from '../formsStyles'
import { Button } from 'react-bootstrap';
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

export const Categoria = () => {
    const[descricao, setDescricao] = useState('');
    const[nome, setNome] = useState('');
    const[id, setId] = useState('');
    const[categorias, setCategoria] = useState([]);
    const methods = useForm();
    const fetchCategoria = async() => {
        const { data } = await api.get(`/categoria`);
        setCategoria(data);
        }
    useEffect(() => {
        fetchCategoria();
    }, [])
    const cadastrarCategoria = (e) => {
        try {
            api.post(`/categoria`, {
                descricao: descricao,
                nome: nome
            });    
        } catch (error) {
            console.log(error);
        }

    }
    
    const atualizarCategoria = (e) => {
        try {
            api.put(`/categoria/${id}`, {
                descricao: descricao,
                nome: nome,
                id: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deletarCategoria = (e) => {
        try {
            api.delete(`/categoria/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="display-flex">
            <Typography variant="h6" gutterBottom>Categorias</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInput required name="descricao" label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        <FormInput required name="nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <FormInput name="id" label="Id do Funcionario" value={id} onChange={(e) => setId(e.target.value)}/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Lista de Categorias</InputLabel>
                            <Select value={categorias} fullWidth onClick={(e) => setId(e.target.value)}>
                                 {categorias.map((d) => {
                                     return (
                                        <MenuItem key={d.id} value={d.id}>
                                            {d.nome}
                                        </MenuItem>
                                    );
                                    })}
                            </Select>
                        </Grid>
                    </Grid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="submit" onClick={(e) => cadastrarCategoria(e)}> Cadastrar Categoria </Button>
                    <Button type="submit" onClick={(e) => atualizarCategoria(e)}> Atualizar Categoria </Button>
                    <Button type="submit" onClick={(e) => deletarCategoria(e)}> Deletar Categoria </Button> 
                </div>
                </form>
            </FormProvider>
        </div>
    )
}
