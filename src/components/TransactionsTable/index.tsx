import { useEffect } from  'react'
import { api } from '../../services/api';
import { Container } from "./styles";



export function TransactionsTable() {

    useEffect(() =>{
        api.get('transaction')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th> Titulo </th>
                        <th> Valor </th>
                        <th> Categoria </th>
                        <th> Data </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">RS: 12 mil</td>
                        <td>Desenvolvimento</td>
                        <td>12/23/34</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> -RS: 1.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/23/34</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}