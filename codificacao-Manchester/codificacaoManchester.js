/*
# Codificação Manchester
bit 0 -> Transição de alta para baixa no meio do intervalo do bit (1 -> 0)
bit 1 -> Transição de baixa para alta no meio do intervalo do bit (0 -> 1)
*/

const sequencia1_bits = '1000000001010011';
const sequencia2_bits = '1110100101000010';

function codificacaoManchester(sequencia){
  let representacaoManchester = [];

  for(let i = 0; i < sequencia.length; i++){
    if(sequencia[i] === '0'){
      representacaoManchester.push(1);
      representacaoManchester.push(0);
    } else if(sequencia[i] === '1') {
      representacaoManchester.push(0);
      representacaoManchester.push(1);
    };
  };

  console.log(`# Seq. bits: ${sequencia}`);
  console.log('# Representação Manchester:', representacaoManchester);

  return representacaoManchester;
};

const teste = '1010';

const representacaoManchester = codificacaoManchester(teste);