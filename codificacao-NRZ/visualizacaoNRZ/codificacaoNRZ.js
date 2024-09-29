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

  console.log(`# Seq. bits: ${sequencia_bits}`);
  console.log('# Representação NRZ:', representacaoNRZ);

  // bit adicional APENAS para melhorar a visualização no gráfico
  if(representacaoNRZ[representacaoNRZ.length-1] === tensaoAlta){
    representacaoNRZ.push(tensaoAlta);
  } else {
    representacaoNRZ.push(tensaoBaixa);
  };

  return representacaoNRZ;
};

function converterIntArr(number){
  let intArr = Array.from(String(number), Number);

  // bit adicional APENAS para melhorar a visualização no gráfico
  if(intArr[intArr.length-1] === 1){
    intArr.push(1);
  } else {
    intArr.push(0);
  };
  
  return intArr;
};

const representacaoNRZ1 = codificacaoNRZ(sequencia1_bits);
const representacaoNRZ2 = codificacaoNRZ(sequencia2_bits);

//========================================================================

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

const xAxis = {
  //categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  labels: {
    enabled: false,
    style: labelAxis_style,
  },
  gridLineWidth: 2,
};

const yAxis1 = {
  title: {
    text: 'bit',
    style: titleY_style,
    enabled: false,
  },
  labels: {
    style: labelAxis_style,
  },
  max: 1,
  min: 0,
};

const yAxis2 = {
  title: {
    text: 'bit',
    style: titleY_style,
    enabled: false,
  },
  labels: {
    style: labelAxis_style,
  },
  max: tensaoAlta,
  min: tensaoBaixa,
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
  xAxis: xAxis,
  yAxis: yAxis1,
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
  xAxis: xAxis,
  yAxis: yAxis2,
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
  xAxis: xAxis,
  yAxis: yAxis1,
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
  xAxis: xAxis,
  yAxis: yAxis2,
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Representação NRZ',
    step: true,
    data: representacaoNRZ2,
  }]
});
