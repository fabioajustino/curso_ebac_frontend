$(document).ready(function () { 
    $('form').on('submit', function (e) { 
        e.preventDefault(); // Impede o recarregamento da página
    
        const nomeDaTarefa = $('#nome-tarefa').val().trim(); // Evita espaços vazios

        if (nomeDaTarefa !== '') { // Verifica se o campo não está vazio
            const novoItem = $('<li></li>').text(nomeDaTarefa);
            
            // Adiciona o evento de clique para riscar/desriscar a tarefa
            novoItem.click(function() {
                $(this).toggleClass('completed');
            });

            $('ul').append(novoItem); // Adiciona a tarefa na lista
            $('#nome-tarefa').val(''); // Limpa o campo após adicionar
        }
    });
});
