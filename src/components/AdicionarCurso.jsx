import React, { useState, useEffect } from 'react';
import './Cursos.css';

const AdicionarCurso = ({ adicionarCurso, cursoParaEditar }) => {
    const [curso, setCurso] = useState('');

    useEffect(() => {
        if (cursoParaEditar !== '') {
            setCurso(cursoParaEditar);
        }
    }, [cursoParaEditar]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (curso.trim() !== '') {
            adicionarCurso(curso);
            setCurso('');
        }
    };

    return (
        <form className="formulario-curso" onSubmit={handleSubmit}>
            <input
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                placeholder="Adicionar ou editar curso"
            />
            <button type="submit">{cursoParaEditar !== '' ? 'Editar' : 'Adicionar'}</button>
        </form>
    );
};

export default AdicionarCurso;



