import React, { useState, useCallback } from 'react';
import ListaDeCursos from './ListaDeCursos';
import AdicionarCurso from './AdicionarCurso';
import './Cursos.css';

const CursosOnline = () => {
    const [cursos, setCursos] = useState([]);
    const [cursoParaEditar, setCursoParaEditar] = useState(null);

    const adicionarCurso = useCallback((curso) => {
        if (cursoParaEditar !== null) {
            setCursos((prevCursos) => prevCursos.map((c, index) => index === cursoParaEditar ? curso : c));
            setCursoParaEditar(null);
        } else {
            setCursos((prevCursos) => [...prevCursos, curso]);
        }
    }, [cursoParaEditar]);

    const removerCurso = useCallback((index) => {
        setCursos((prevCursos) => prevCursos.filter((_, i) => i !== index));
    }, []);

    const editarCurso = useCallback((index) => {
        setCursoParaEditar(index);
    }, []);

    return (
        <section className="cursos-online">
            <h1>Lista de Cursos Online</h1>
            <AdicionarCurso
                adicionarCurso={adicionarCurso}
                cursoParaEditar={cursoParaEditar !== null ? cursos[cursoParaEditar] : ''}
            />
            <ListaDeCursos
                cursos={cursos}
                removerCurso={removerCurso}
                editarCurso={editarCurso}
            />
        </section>
    );
};

export default CursosOnline


