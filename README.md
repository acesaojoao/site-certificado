# Certificado Digital ACE São João

Site estático (HTML, CSS e JavaScript puros, sem build) para venda de certificados digitais e-CPF, e-CNPJ e OAB, emitidos pela Certisign e comercializados pela ACE São João da Boa Vista.

## Estrutura

```
index.html          página principal
css/style.css        estilos (responsivo, paleta com contraste WCAG AA)
js/main.js            menu mobile e ano do rodapé
imagens/               logotipo e imagens dos certificados
produtos.json          dados dos certificados (preço, imagem, link de compra)
ficha_negocio.md       ficha de atendimento (tom de voz, serviços, FAQ, contatos)
```

## Como visualizar localmente

Abra o arquivo `index.html` diretamente no navegador, ou sirva a pasta com um servidor estático simples (ex.: extensão "Live Server" do VS Code).

## Publicar no GitHub Pages

1. Suba o conteúdo desta pasta para o repositório.
2. Em **Settings > Pages**, selecione a branch e a pasta raiz (`/`).
3. O site ficará disponível em `https://<usuario>.github.io/<repositorio>/`.

Todos os caminhos usados são relativos (`css/style.css`, `imagens/...`), então o site funciona tanto localmente quanto no GitHub Pages sem ajustes.

## Pendências

- Seção "O que nossos clientes dizem" está com `[PREENCHER]` — não há depoimentos reais coletados ainda.
- O assistente de vendas (`chat.js`) ainda será adicionado antes do fechamento de `</body>` em `index.html`.
