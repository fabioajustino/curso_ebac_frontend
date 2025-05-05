const alunos = [
    { nome: "João Silva", nota: 7.5 },
    { nome: "Maria Souza", nota: 5.8 },
    { nome: "Pedro Santos", nota: 6.0 },
    { nome: "Ana Oliveira", nota: 8.2 },
    { nome: "Carlos Pereira", nota: 4.7 },
    { nome: "Mariana Costa", nota: 6.5 },
    { nome: "Lucas Rodrigues", nota: 9.0 },
    { nome: "Juliana Almeida", nota: 5.5 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);

console.log(aprovados)