import { useState, FormEvent } from 'react';
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Table, ButtonIcon } from './style'

import api from '../../services/api';

interface IDashboard{
    id: string;
    line_number: string;
    chip_number: string;
    data_plan: string;
    account_number: string;
    telephone_operator: string;
}




export function Telefonia(){
    const [line_number, setLine_number] = useState('');
    const [chip_number, setChip_number] = useState('');
    const [data_plan, setData_plan] = useState('');
    const [account_number, setAccount_number] = useState('');
    const [telephone_operator, setTelephone_operator] = useState('');
    const [lines, setLines] = useState<IDashboard[]>([])
    const [status, setStatus] = useState('addLine')


    async function handleAddLine(e: FormEvent){
        e.preventDefault()

        const line = {
            line_number,
            chip_number,
            data_plan,
            account_number,
            telephone_operator
        }

        if(status === 'addLine'){

            const { id } = await api.post('/lines', line)
                                    .then(dados => dados.data)
            
            setLines([...lines, {
                id, line_number, 
                chip_number, 
                data_plan, 
                account_number,
                telephone_operator
            }])
        }else{
            await api.put(`/lines/${status}`, line)
        }

        setLine_number('')
        setChip_number('')
        setData_plan('')
        setAccount_number('')
        setTelephone_operator('')
        setStatus('addLine')
    }




    async function handleUpdateLine(id: string){
        const dados = await api.get(`/lines/${id}`).then
        (dados => dados.data)//Buscar somente o data

        setLine_number(dados.cpf)
        setChip_number(dados.name)
        setData_plan(dados.sector)
        setAccount_number(dados.company)
        setTelephone_operator(dados.company)
        setStatus(id)
    }

    async function handleDeleteLine(id: string){
        setLines(lines.filter(line => line.id !== id))
        await api.delete(`/lines/${id}`)   
    }

    return (
        <Container>
            <Header title='Cadastro de Linhas'/>

            <Form onSubmit={handleAddLine}>
                <Input 
                    placeholder='N° da Linha'
                    value={line_number}
                    onChange={e => setLine_number(e.target.value)}
                />
                <Input 
                    placeholder='N° do Chip'
                    value={chip_number}
                    onChange={e => setChip_number(e.target.value)}
                />
                <Input 
                    placeholder='Plano de Dados'
                    value={data_plan}
                    onChange={e => setData_plan(e.target.value)}
                />
                <Input 
                    placeholder='N° da Conta'
                    value={account_number}
                    onChange={e => setAccount_number(e.target.value)}
                />
                <Input 
                    placeholder='Operadora'
                    value={telephone_operator}
                    onChange={e => setTelephone_operator(e.target.value)}
                />
                
                <Button title="Enviar" />
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>N° da Linha</th>
                        <th>N° do Chip</th>
                        <th>Plano de Dados</th>
                        <th>N° da Conta</th>
                        <th>Operadora</th>
                    </tr>
                </thead>
                <tbody>
                    {lines.map(line =>(
                        <tr key={line.id}>
                            <td>{line.line_number}</td>
                            <td>{line.chip_number}</td>
                            <td>{line.data_plan}</td>
                            <td>{line.account_number}</td>
                            <td>{line.telephone_operator}</td>

                            <td>
                                <ButtonIcon
                                type="button"
                                onClick={() => handleUpdateLine(line.id)}>
                                    Alterar
                                </ButtonIcon>
                                <ButtonIcon
                                type="button"
                                onClick={() => handleDeleteLine(line.id)}>
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