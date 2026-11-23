/*
 * Atividade Final - AED II - Rede Social
 * Ponto de partida em JavaScript (Node.js). Leia o README.md na raiz do repositório.
 *
 * Este arquivo apenas carrega os dados. Todo o resto é com você:
 * crie suas próprias estruturas (hash, AVL, heap, grafo, ordenação)
 * em quantos arquivos quiser dentro desta pasta.
 */
const aedlib = require("./aedlib"); // biblioteca base do projeto (obrigatória - não remova)

function main() {
  const [usuarios, seguidores, posts] = aedlib.socialCarregarDados();
  // usuarios:   [id, usuario, nome, data_cadastro]
  // seguidores: [seguidor, seguido]
  // posts:      [id, autor, data, curtidas, texto]

  console.log(`Usuários carregados:  ${usuarios.length}`);
  console.log(`Conexões carregadas:  ${seguidores.length}`);
  console.log(`Posts carregados:     ${posts.length}`);

  // TODO: construir as estruturas e implementar os comandos descritos no README.
}

main();
