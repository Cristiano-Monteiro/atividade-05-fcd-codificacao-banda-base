/*
# NRZ: os bits de transmissão são representados por níveis de tensão, que é constante durante o período na qual está ativo (0 -> tensão baixa, 1 -> tensão alta)

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
    } else if(seq_bits_string[i] === '1') {
      representacaoNRZ.push(tensaoAlta);
    };
  };

  return representacaoNRZ;
};

function converterIntArr(number){
  return Array.from(String(number), Number);
};

const representacaoNRZ1 = codificacaoNRZ(sequencia1_bits);
const representacaoNRZ2 = codificacaoNRZ(sequencia2_bits);

//========================================================================
//========================================================================
const numSeqBits1 = document.getElementById('numSeqBits1');
const numNRZ1 = document.getElementById('numNRZ1');
const numSeqBits2 = document.getElementById('numSeqBits2');
const numNRZ2 = document.getElementById('numNRZ2');

numSeqBits1.innerText = sequencia1_bits;
numNRZ1.innerText = representacaoNRZ1.join('');
numSeqBits2.innerText = sequencia2_bits;
numNRZ2.innerText = representacaoNRZ2.join('');

const seqBitsArr1 = converterIntArr(sequencia1_bits);
const seqBitsArr2 = converterIntArr(sequencia2_bits);


const titleStyle = {
  fontSize: '1.6rem',
};

const titleY_style = {
  fontSize: '1.2rem',
};

const labelAxis_style = {
  fontSize: '1.2rem',
};

const plotOptions = {
  series: {
    lineWidth: 6,
    enableMouseTracking: false,
    color: '#1F1FFF',
    marker: {
      enabled: false,
    },
  },
};


var chart1 = new Highcharts.Chart({
  chart: {
    renderTo: 'chart1',
    type: 'line',
    marginTop: 50,
  },
  title: {
    text: 'Sequência de bits',
    style: titleStyle,
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    labels: {
      enabled: false,
      style: labelAxis_style,
    },
  },
  yAxis: {
    title: {
      text: 'bit',
      style: titleY_style,
    },
    labels: {
      style: labelAxis_style,
    },
    max: 1,
    min: 0,
    //plotLines: [{value: 0, width: 1, color: '#808080'}]
  },
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Sequência de bits',
    step: true,
    data: seqBitsArr1,
  }]
});

var chart2 = new Highcharts.Chart({
  chart: {
    renderTo: 'chart2',
    type: 'line',
    marginTop: 50,
  },
  title: {
    text: 'Representação NRZ',
    style: titleStyle,
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    labels: {
      enabled: false,
      style: labelAxis_style,
    },
  },
  yAxis: {
    title: {
      text: 'Tensão',
      style: titleY_style,
    },
    labels: {
      style: labelAxis_style,
    },
    max: 5,
    min: 0,
    //plotLines: [{value: 0, width: 1, color: '#808080'}]
  },
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Representação NRZ',
    step: true,
    data: representacaoNRZ1,
  }]
});

var chart3 = new Highcharts.Chart({
  chart: {
    renderTo: 'chart3',
    type: 'line',
    marginTop: 50,
  },
  title: {
    text: 'Sequência de bits',
    style: titleStyle,
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    labels: {
      enabled: false,
      style: labelAxis_style,
    },
  },
  yAxis: {
    title: {
      text: 'bit',
      style: titleY_style,
    },
    labels: {
      style: labelAxis_style,
    },
    max: 1,
    min: 0,
    //plotLines: [{value: 0, width: 1, color: '#808080'}]
  },
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Sequência de bits',
    step: true,
    data: seqBitsArr2,
  }]
});

var chart4 = new Highcharts.Chart({
  chart: {
    renderTo: 'chart4',
    type: 'line',
    marginTop: 50,
  },
  title: {
    text: 'Representação NRZ',
    style: titleStyle,
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    labels: {
      enabled: false,
      style: labelAxis_style,
    },
  },
  yAxis: {
    title: {
      text: 'Tensão',
      style: titleY_style,
    },
    labels: {
      style: labelAxis_style,
    },
    max: 5,
    min: 0,
    //plotLines: [{value: 0, width: 1, color: '#808080'}]
  },
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Representação NRZ',
    step: true,
    data: representacaoNRZ2,
  }]
});
