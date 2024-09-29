/*
# NRZ: os bits de transmissão são representados por níveis de tensão, que é constante 
durante o período na qual está ativo (0 -> tensão baixa, 1 -> tensão alta)

# Neste trabalho, adotaremos o seguintes padrões na relação bit -> tensão:
bit 0: 0V
bit 1: +5v
*/

const sequencia1_bits = 1000000001010011;
const sequencia2_bits = 1110100101000010;

const tensaoBaixa = 0;
const tensaoAlta = 5;

function codificacaoNRZ(sequencia_bits){
  let seq_bits_string = sequencia_bits.toString();
  let representacaoNRZ = [];

  for(let i = 0; i < seq_bits_string.length; i++){
    if(seq_bits_string[i] === '0'){
      representacaoNRZ.push(tensaoBaixa);
    } else {
      representacaoNRZ.push(tensaoAlta);
    };
  };

  console.log('==== Codificação NRZ ====');
  console.log(`# Seq. bits: ${sequencia_bits}`);
  console.log(`# Representação NRZ: ${representacaoNRZ.join('')}`);
  console.log(' ');
};

codificacaoNRZ(sequencia1_bits);
codificacaoNRZ(sequencia2_bits);
