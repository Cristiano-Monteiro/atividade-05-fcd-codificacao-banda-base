/*
# Codificação B8ZS
Se uma sequência de 8 bits de valor 0 aparecer:

1. Último pulso de tensão +: 000+-0-+
2. Último pulso de tensão -: 000-+0+-
*/

const sequencia1_bits = '1000000001010011';
const sequencia2_bits = '1110100101000010';

const tensaoPositiva = 5;
const tensaoNeutra = 0;
const tensaoNegativa = -5;

function codificacaoB8ZS(sequencia){
  let codificacao = [];

  // Controla a mudança de pulso
  let pulsoPositivo = true;

  // Guarda o número de bits zero que aparecem na sequência 
  let contadorBitZero = 0;

  for(let i = 0; i < sequencia.length; i++){
    if(sequencia[i] === '1'){

      // Se uma sequência de zeros for menor que 8 e o próximo bit seja 1:
      if(contadorBitZero > 0){
        for(let j = 0; j < contadorBitZero; j++){
          codificacao.push(tensaoNeutra);
        };
        contadorBitZero = 0;
      };

      if(pulsoPositivo){
        codificacao.push(tensaoPositiva);
      } else {
        codificacao.push(tensaoNegativa);
      };
      pulsoPositivo = !pulsoPositivo;
    } else {
      contadorBitZero++;

      if(contadorBitZero === 8){
        // Se pulsoPositivo === FALSE, significa que o último pulso foi POSITIVO
        // Se pulsoPositivo === TRUE, significa que o último pulso foi NEGATIVO
        if(!pulsoPositivo){
          // 1. Último pulso de tensão +: 000+-0-+
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoPositiva);
          codificacao.push(tensaoNegativa);
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoNegativa);
          codificacao.push(tensaoPositiva);
        } else {
          // 2. Último pulso de tensão -: 000-+0+-
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoNegativa);
          codificacao.push(tensaoPositiva);
          codificacao.push(tensaoNeutra);
          codificacao.push(tensaoPositiva);
          codificacao.push(tensaoNegativa);
        };
        contadorBitZero = 0;
      };
    };
  };

  console.log('==== Codificação B8ZS ====');
  console.log('-> Sequência original: ', sequencia);
  console.log('-> Codificação: ', codificacao.join(' '));
  console.log(' ');
};

codificacaoB8ZS(sequencia1_bits);
codificacaoB8ZS(sequencia2_bits);
