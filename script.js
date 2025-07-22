 const formEncontro = document.getElementById('formEncontro');
        const listaEncontros = document.getElementById('listaEncontros');

        function adicionarEncontro(data, hora, local) {
            const novoEncontroLi = document.createElement('li');
            novoEncontroLi.innerHTML = `
                <strong>Data:</strong> ${data}<br>
                <strong>Hora:</strong> ${hora}<br>
                <strong>Local:</strong> ${local}
                <button class="delete-btn">Excluir</button>
            `;
            listaEncontros.prepend(novoEncontroLi); 

            
            novoEncontroLi.querySelector('.delete-btn').addEventListener('click', function() {
                novoEncontroLi.remove();
            });
        }

        formEncontro.addEventListener('submit', function(event) {
            event.preventDefault();

            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            const local = document.getElementById('local').value;

            adicionarEncontro(data, hora, local);

            formEncontro.reset();
        });

        const formRecado = document.getElementById('formRecado');
        const listaRecados = document.getElementById('listaRecados');

       
        function adicionarRecado(nome, mensagem, fotoSrc) {
            const novoRecadoLi = document.createElement('li');
            let imagemHtml = '';
            if (fotoSrc) {
                imagemHtml = `<img class="imagem" src="${fotoSrc}" alt="Foto de ${nome}">`;
            }

            novoRecadoLi.innerHTML = `
                <strong>${nome}:</strong> ${mensagem}<br>
                ${imagemHtml}
                <button class="delete-btn">Excluir</button>
            `;
            listaRecados.prepend(novoRecadoLi);

            novoRecadoLi.querySelector('.delete-btn').addEventListener('click', function() {
                novoRecadoLi.remove(); 
            });
        }

        formRecado.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const fotoInput = document.getElementById('foto');
            const fotoArquivo = fotoInput.files[0];

            if (fotoArquivo) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    adicionarRecado(nome, mensagem, e.target.result);
                };
                reader.readAsDataURL(fotoArquivo);
            } else {
                adicionarRecado(nome, mensagem, null); 
            }

            formRecado.reset();
        });

        document.querySelectorAll('#listaRecados .delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                button.closest('li').remove(); 
            });
        });

        document.querySelectorAll('#listaEncontros .delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                button.closest('li').remove(); 
            });
        });