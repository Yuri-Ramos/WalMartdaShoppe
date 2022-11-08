import React from "react";
import { useState, useEffect } from 'react';
import api from '../../data/data';
import { FormInput } from '../formsStyles'
import { Button } from 'react-bootstrap';
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

const Cliente = () =>{
    const[id, setId] = useState('');
    const[cpf, setCpf] = useState('');
    const[nome, setNome] = useState('');
    const[user, setUser] = useState('');
    const[email, setEmail] = useState('');
    const[data, setData] = useState('');
    const[rua, setRua] = useState('');
    const[bairro, setBairro] = useState('');
    const[numero, setNumero] = useState('');
    const[complemento, setComplemento] = useState('');
    const[cep, setCep] = useState('');
    const[uf, setUf] = useState('');
    const[cidade, setCidade] = useState('');
    const methods = useForm();

    const[clientes, setClientes] = useState([]);

    const fetchClientes = async() => {
        const { data } = await api.get(`/cliente/`);
        setClientes(data);
        console.log(clientes);
        }
    useEffect(() => {
        fetchClientes();
    }, [])

    const cadastrarCliente = (e) => {
        e.preventDefault();
        try {
            api.post(`/cliente`, {
                cpf: cpf,
                nome: nome,
                usuario: user,
                email: email,
                dataNascimento: '1992-02-01T00:00:00Z',
                endereco: {
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                    cep: cep,
                    cidade: cidade,
                    estado: uf
                }
            });    
        } catch (error) {
            console.log(error);
        }

    }
    
    const atualizarCliente = (e) => {
        e.preventDefault();
        try {
            api.put(`/cliente/${id}`, {
                cpf: cpf,
                nome: nome,
                usuario: user,
                email: email,
                dataNascimento: '1992-02-01T00:00:00Z',
                endereco: {
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                    cep: cep,
                    cidade: cidade,
                    estado: uf
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deletarCliente = (e) => {
        e.preventDefault();
        try {
            api.delete(`/cliente/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <Grid container spacing={3}>
            <Typography variant="h6" gutterBottom>Clientes</Typography>
            </Grid>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInput required name="cpf" label="Cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        <FormInput required name="nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <FormInput name="id" label="Id do Cliente" value={id} onChange={(e) => setId(e.target.value)}/>
                        <FormInput required name="user" label="Usuario" value={user} onChange={(e) => setUser(e.target.value)}/>
                        <FormInput required name="data" type="date" label="Data de Nascimento" value={data} onChange={(e) => setData(e.target.value)}/>
                        <FormInput required name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Lista de Clientes</InputLabel>
                            <Select value={clientes} fullWidth onClick={(e) => setId(e.target.value)}>
                                 {clientes.map((d) => {
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
                    <Grid container spacing={3}>
                        <Typography variant="h6" gutterBottom textalign='center'>Endereço</Typography>
                    </Grid>
                    <Grid container spacing={3}>
                        <FormInput required name="rua" label="Rua" value={rua} onChange={(e) => setRua(e.target.value)}/>
                        <FormInput required name="numero" label="Numero" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                        <FormInput name="bomplemento" label="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                        <FormInput required name="bairro" label="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                        <FormInput required name="cidade" label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                        <FormInput required name="uf" label="Uf" value={uf} onChange={(e) => setUf(e.target.value)}/>
                        <FormInput required name="cep" label="Cep" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </Grid>    
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="submit" onClick={(e) => cadastrarCliente(e)}> Cadastrar Cliente </Button>   
                    <Button type="submit" onClick={(e) => atualizarCliente(e)}> Atualizar Cliente</Button>
                    <Button type="submit" onClick={(e) => deletarCliente(e)}> Deletar Cliente </Button> 
                </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default Cliente;