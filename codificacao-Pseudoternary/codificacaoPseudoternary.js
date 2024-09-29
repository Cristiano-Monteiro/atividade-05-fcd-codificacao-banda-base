/*
# Codificação Pseudoternary
- bit 0: representa mudança de pulso (positivo (+5) ou negativa (-5)) 
- bit 1: representa pulso constante ou "ausência de sinal" (sem alteração)
*/

const sequencia1_bits = '1000000001010011';
const sequencia2_bits = '1110100101000010';

const tensaoPositiva = 5;
const tensaoNeutra = 0;
const tensaoNegativa = -5;

function codificacaoPseudoternary(sequencia){
  let codificacao = [];

  // Controla a mudança de pulso
  let pulsoPositivo = true;
  for(let i = 0; i < sequencia.length; i++){
    if(sequencia[i] === '0'){
      if(pulsoPositivo){
        codificacao.push(tensaoPositiva);
      } else {
        codificacao.push(tensaoNegativa);
      };
      pulsoPositivo = !pulsoPositivo;
    } else {
      codificacao.push(tensaoNeutra);
    };
  };

  console.log('==== Codificação Pseudoternary ====');
  console.log('-> Sequência original:', sequencia);
  console.log('-> Codificação:', codificacao.join(' '));
  console.log(' ');
};

codificacaoPseudoternary(sequencia1_bits);
codificacaoPseudoternary(sequencia2_bits);
