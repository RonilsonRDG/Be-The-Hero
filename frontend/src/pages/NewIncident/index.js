import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from  'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function NewIncident () {
    const [titulo, setTitulo] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            titulo,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers : {
                    Authorization: ongId 
                }
            })
            
            history.push('/profile');
        } catch (err) {
            alert('Ero ao cadastrar o caso, tente novamente.')
        }
    }

    return (
        <div className="new-incident-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>           
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Tipo do Caso" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />  

                    <button className="button" type="submit">Cadastrar</button>


                </form>
            </div>

        </div>
    );
}