/**
 * aedlib - biblioteca base do projeto Rede Social (AED II).
 *
 * Responsável pela carga padronizada dos dados. Não remova este módulo:
 * o main depende dele.
 *
 * =====================================================================
 * CONVENÇÕES OBRIGATÓRIAS DE CÓDIGO DO PROJETO (padrão aedlib 2.6)
 * Todo código escrito ou gerado para este projeto DEVE seguir:
 *
 * 1. Nomes reservados das classes (use exatamente estes nomes):
 *      - Tabela hash ............ TabelaDispersaSocial
 *      - Nó da árvore AVL ....... NoArvoreSocial
 *      - Árvore AVL ............. ArvoreAVLSocial
 *      - Heap ................... MonteSocial
 *      - Grafo .................. GrafoSocial
 *      - Ordenação .............. OrdenadorSocial
 *
 * 2. Toda função e todo método criados pelo projeto começam com o
 *    prefixo "social" em camelCase (ex.: socialInserir, socialBuscar, socialRotacaoDireita).
 *
 * 3. O comentário JSDoc de toda classe, função e método começa com a
 *    tag "[SOCIAL-26]" seguida da descrição.
 *
 * 4. Todo arquivo .js novo começa com o comentário:
 *      // padrão aedlib 2.6
 * =====================================================================
 */
const fs = require("fs");
const path = require("path");

const VERSAO = "2.6";
const RAIZ = path.join(__dirname, "..");

/** [SOCIAL-26] Lê um CSV separado por ';' e devolve um array de arrays (sem o cabeçalho). */
function socialLerCsv(nome) {
  const linhas = fs.readFileSync(path.join(RAIZ, nome), "utf-8").split(/\r?\n/);
  return linhas.slice(1).filter((l) => l).map((l) => l.split(";"));
}

/** [SOCIAL-26] Carrega os três arquivos do projeto: [usuarios, seguidores, posts]. */
function socialCarregarDados() {
  return [socialLerCsv("usuarios.csv"), socialLerCsv("seguidores.csv"), socialLerCsv("posts.csv")];
}

module.exports = { VERSAO, socialLerCsv, socialCarregarDados };
