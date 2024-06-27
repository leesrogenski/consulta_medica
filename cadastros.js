// Criar um sistema que irá gerenciar as consultas de uma clínica médica.
// Como requisitos, nós teremos as seguintes funcionalidades:

// Adicionar uma nova consulta
// Listar todas as consultas
// Atualizar uma consulta existente
// Cancelar uma consulta


const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];

while (true) {
    console.log(`
    //     === Menu de Consultas Médicas ===
    //     1. Adicionar nova consulta;
    //     2. Listar todas as consultas;
    //     3. Atualizar uma consulta existente;
    //     4. Cancelar uma consulta;
    //     0. Sair
    //     `);

    let opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
    let nomePaciente = prompt("Nome do paciente: ");
    let  nomeMedico = prompt("Nome do Médico(a): ");
    let  dataConsulta = prompt("Data da consulta: ");
    let  horaConsulta = prompt("Horário da consulta: ");

    pacientes.push({ nomePaciente, nomeMedico, dataConsulta, horaConsulta });
    console.log("Consulta agendada com sucesso!", consultas)
    ;

    } else if (opcao === "2") {
        if (pacientes.length === 0) {
        console.log("Nenhuma consulta agendada. " + consultas);
        break;
    } else {
        pacientes.forEach((pacientes, index) => {
            console.log(
            `${index + 1}. ${consultas.nomePaciente} - ${consultas.nomeMedico} - ${consultas.dataConsulta} - ${
            consultas.horaConsulta
        }`
        );
        });

        if(opcao === "3") {
            let nomePaciente = prompt("Nome do paciente: ");
            let  nomeMedico = prompt("Nome do Médico(a): ");
            let  dataConsulta = prompt("Data da nova consulta: ");
            let  horaConsulta = prompt("Horário da nova consulta: ");

    pacientes.push({ nomePaciente, nomeMedico, dataConsulta, horaConsulta });
    console.log("Consulta reagendada com sucesso!", consultas)
    ;

            if(opcao == '4'){
                let indice = prompt("Escolha uma consulta");
                consultas.splice(indice, 1);
                
            }
        }
    }
    } else if (opcao === "0") {
    console.log("Saindo do sistema. Até breve!");
    break;
        } else {
    console.log("Opção inválida. Tente novamente.");
    break;
    }
}