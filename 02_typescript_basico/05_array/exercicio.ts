interface Dados {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
}

async function fetchCursosV2() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}

fetchCursosV2();

function mostrarCursos(cursos: Dados[]) {
    cursos.forEach(curso => {
        let color;
        if(curso.nivel === 'iniciante') color = 'blue'
        else if(curso.nivel === 'avancado') color = 'red'

        document.body.innerHTML += `
            <div>
                <h2 style="color: ${color}">${curso.nome}</h2>
                <p>${curso.horas} horas</p>
                <p>${curso.aulas} aulas</p>
                <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
                <p>${curso.tags.join(', ')}</p>
                <p>${curso.idAulas.join(', ')}</p>
                <p>${curso.nivel}</p>
            </div>
        `
    })
}