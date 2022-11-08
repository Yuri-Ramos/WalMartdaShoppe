import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { useForm, FormProvider } from 'react-hook-form';
import api from '../../data/data';
import { FormInput } from '../formsStyles'


export const Funcionarios = () => {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [id, setId] = useState('');
    const methods = useForm();

    const cadastrarFuncionario = (e) => {
        console.log(cpf, nome, id);
        try {
            api.post(`/funcionario`, {
                cpf: cpf,
                nome: nome
            });    
        } catch (error) {
            console.log(error);
        }

    }

    const atualizarFuncionario = (e) => {
        try {
            api.put(`/funcionario/${id}`, {
                cpf: cpf,
                nome: nome,
                id: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deletarFuncionario = (e) => {
        try {
            api.delete(`/funcionario/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    const [funcionarios, setFuncionarios] = useState([]);
  //DATA SERIA PROP DE UMA OBJ/VARIÁVEL CHAMADA RESPONSE, MAS DESESTRUTUREI PRA FACILITAR
    const fetchFuncionarios = async () => {
    const { data } = await api.get(`/funcionario/`);
    setFuncionarios(data);
    console.log(funcionarios);
     }

    useEffect(() => {
        fetchFuncionarios();
    }, [])

    return (
        <div className='display-flex'>
            <Typography variant="h6" gutterBottom>Funcionários</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInput name="cpf" label="Cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        <FormInput name="nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <FormInput name="id" label="Id do Funcionario" value={id} onChange={(e) => setId(e.target.value)}/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Lista de Funcionarios</InputLabel>
                            <Select value={funcionarios} fullWidth onClick={(e) => setId(e.target.value)}>
                                    {funcionarios.map((d) => {
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
                    <Button type="submit" onClick={(e) => cadastrarFuncionario(e) }> Cadastrar Funcionario </Button>   
                    <Button type="submit" onClick={(e) => atualizarFuncionario(e)}> Atualizar Funcionario </Button>
                    <Button type="submit" onClick={(e) => deletarFuncionario(e)}> Deletar Funcionario </Button> 
                </div>
                </form>
            </FormProvider>
        </div>
    )
              
}