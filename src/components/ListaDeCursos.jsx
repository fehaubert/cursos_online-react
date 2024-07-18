import React from 'react';
import './Cursos.css';

const ListaDeCursos = ({ cursos, removerCurso, editarCurso }) => {
    return (
        <ul className="lista-cursos">
            {cursos.map((curso, index) => (
                <li key={index}>
                    {curso}
                    <div className="acoes">
                        <button className="editar" onClick={() => editarCurso(index)}>Editar</button>
                        <button className="remover" onClick={() => removerCurso(index)}>Remover</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ListaDeCursos;



