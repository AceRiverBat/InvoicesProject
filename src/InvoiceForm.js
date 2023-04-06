import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


function InvoiceForm() {
    const [invoiceDate, setInvoiceDate] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientMail, setClientMail] = useState('');
    const [clientAdress, setClientAdress] = useState('');
    const [compagnyName, setCompagnyName] = useState('');
    const [compagnyMail, setCompagnyMail] = useState('');
    const [compagnyAdress, setCompagnyAdress] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [InvoiceItemName, setInvoiceItemName] = useState('');
    const [InvoiceItemDescription, setInvoiceItemDescription] = useState('');
    const [qteInvoiceItem, setqteInvoiceItem] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const invoiceData = { clientName, invoiceDate, totalAmount, InvoiceItemName, InvoiceItemDescription, qteInvoiceItem };
        // Traitement des données de facturation ici
        console.log(invoiceData);
    }

    return (
        <form onSubmit={handleSubmit}>

            <label >
                Date:
                <input type="date" value={invoiceDate} onChange={(event) => setInvoiceDate(event.target.value)} />
            </label>

            <label>
                Facturé à :
                <input type="text" placeholder='Entrer le nom du client' value={clientName} onChange={(event) => setClientName(event.target.value)} />
                <input type="text" placeholder="Entrer l'adresse mail du client" value={clientMail} onChange={(event) => setClientMail(event.target.value)} />
                <input type="text" placeholder="Entrer l'adresse du client" value={clientAdress} onChange={(event) => setClientAdress(event.target.value)} />
                De :
                <input type="text" placeholder="Entrer le nom de l'entreprise" value={compagnyName} onChange={(event) => setCompagnyName(event.target.value)} />
                <input type="text" placeholder="Entrer l'adresse mail de l'entreprise" value={compagnyMail} onChange={(event) => setCompagnyMail(event.target.value)} />
                <input type="text" placeholder="Entrer l'adresse de l'entreprise" value={compagnyAdress} onChange={(event) => setCompagnyAdress(event.target.value)} />
            </label>

            <label>
                Ajouter un Produit :
                <input type="text" placeholder='Choisir un produit' value={InvoiceItemName} onChange={(event) => setInvoiceItemName(event.target.value)} />

                <text values={InvoiceItemDescription} />
            </label>
            <label>
                Qte :
                <input type="number" placeholder='Choisir la quantité' value={qteInvoiceItem} onChange={(event) => setqteInvoiceItem(event.target.value)} />
            </label>


            <label>
                Total Amount :
                <input type="text" value={totalAmount} onChange={(event) => setTotalAmount(event.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default InvoiceForm;
