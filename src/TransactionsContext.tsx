import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transactions {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createAt: string;
}

interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}

interface TransactionsProvideProps {
    children: ReactNode;
}

interface TransactionsContextDate {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextDate>
({} as TransactionsContextDate //enganando o typescript
);

export function TransactionsProvider( { children }: TransactionsProvideProps ) {

    const [ transactions, setTransactions ] = useState<Transactions[]>([]);

    useEffect(() =>{
        api.get('transaction')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput) {    
          api.post('/transaction', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}