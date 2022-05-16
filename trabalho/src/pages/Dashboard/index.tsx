import { useState, FormEvent } from 'react';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Table, ButtonIcon } from './style'

import api from '../../services/api';

interface IDashboard{
    id: string;
    cpf: string;
    name: string;
    sector: string;
    company: string;
}

export function Funcionario(){
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [sector, setSector] = useState('');
    const [company, setCompany] = useState('');
    const [users, setUsers] = useState<IDashboard[]>([])
    const [status, setStatus] = useState('addClient')


    async function handleAddUser(e: FormEvent){
        e.preventDefault()

        const user = {
            cpf,
            name,
            sector,
            company
        }

        if(status === 'addClient'){

            const { id } = await api.post('/users', user)
                                    .then(dados => dados.data)
            
            setUsers([...users, {id, cpf, name, sector, company}])
        }else{
            await api.put(`/users/${status}`, user)
        }

        setCpf('')
        setName('')
        setSector('')
        setCompany('')
        setStatus('addClient')
    }




    async function handleUpdateUser(id: string){
        const dados = await api.get(`/users/${id}`).then
        (dados => dados.data)//Buscar somente o data

        setCpf(dados.cpf)
        setName(dados.name)
        setSector(dados.sector)
        setCompany(dados.company)
        setStatus(id)
    }

    async function handleDeleteUser(id: string){
        setUsers(users.filter(user => user.id !== id))
        await api.delete(`/users/${id}`)   
    }

    return (
        <Container>
            <Header title='Cadastro de Usuários'/>

            <Form onSubmit={handleAddUser}>
                <Input 
                    placeholder='CPF'
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                />
                <Input 
                    placeholder='Nome'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    placeholder='Setor'
                    value={sector}
                    onChange={e => setSector(e.target.value)}
                />
                <Input 
                    placeholder='Empresa'
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />
                
                <Button title="Enviar" />
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Setor</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.cpf}</td>
                            <td>{user.name}</td>
                            <td>{user.sector}</td>
                            <td>{user.company}</td>

                            <td>
                                <ButtonIcon
                                type="button"
                                onClick={() => handleUpdateUser(user.id)}>
                                    Alterar
                                </ButtonIcon>
                                <ButtonIcon
                                type="button"
                                onClick={() => handleDeleteUser(user.id)}>
                                    Deletar
                                </ButtonIcon>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}