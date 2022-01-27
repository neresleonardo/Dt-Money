import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from  'miragejs'
import {App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freelance de website',
          type:'deposit',
          category: 'Dev',
          amount:6000,
          createAt: new Date('2020-23-23 09:08:02'),
        },
        {
          id:2,
          title: 'Comida',
          type:'withdraw',
          category: 'Dev',
          amount:400,
          createAt: new Date('2020-23-23 09:08:02'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transaction', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);