import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from './styles'

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>R$1000,08</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outComeImg} alt="outComeImg" />
                </header>
                <strong> - R$1000,08</strong>
            </div>

            <div className='hightlight-backgroud'>
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$1000,08</strong>
            </div>
        </Container>
    )
}