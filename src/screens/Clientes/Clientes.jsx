import { Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import api from '../../data/data';
import { FormInput } from '../formsStyles';

export const Cliente = () =>{
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
        try {
            api.delete(`/cliente/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        
        <div className="conteiner ">
            <Grid container spacing={3}>
            <Typography variant="h6" gutterBottom>Clientes</Typography>
            </Grid>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInput  name="cpf" label="Cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        <FormInput  name="nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <FormInput name="id" label="Id do Cliente" value={id} onChange={(e) => setId(e.target.value)}/>
                        <FormInput  name="user" label="Usuario" value={user} onChange={(e) => setUser(e.target.value)}/>
                        <FormInput  name="data" type="date" label="Data de Nascimento" value={data} onChange={(e) => setData(e.target.value)}/>
                        <FormInput  name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                        <FormInput  name="rua" label="Rua" value={rua} onChange={(e) => setRua(e.target.value)}/>
                        <FormInput  name="numero" label="Numero" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                        <FormInput  name="bomplemento" label="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                        <FormInput  name="bairro" label="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                        <FormInput  name="cidade" label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                        <FormInput  name="uf" label="Uf" value={uf} onChange={(e) => setUf(e.target.value)}/>
                        <FormInput  name="cep" label="Cep" value={cep} onChange={(e) => setCep(e.target.value)}/>
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