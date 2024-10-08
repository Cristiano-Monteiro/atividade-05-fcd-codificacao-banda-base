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

  // bit adicional APENAS para melhorar a visualização no gráfico
  if(representacaoManchester[representacaoManchester.length-1] === 0){
    representacaoManchester.push(0);
  } else {
    representacaoManchester.push(1);
  };

  return representacaoManchester;
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


const representacaoManchester1 = codificacaoManchester(sequencia1_bits);
const representacaoManchester2 = codificacaoManchester(sequencia2_bits);

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

const yAxis = {
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
  yAxis: yAxis,
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
    text: 'Representação Manchester',
    style: titleStyle,
  },
  xAxis: xAxis,
  yAxis: yAxis,
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Representação Manchester',
    step: true,
    data: representacaoManchester1,
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
  yAxis: yAxis,
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
    text: 'Representação Manchester',
    style: titleStyle,
  },
  xAxis: xAxis,
  yAxis: yAxis,
  tooltip: {enabled: false},
  legend: {enabled: false,},
  plotOptions: plotOptions,
  series: [{
    name: 'Representação Manchester',
    step: true,
    data: representacaoManchester2,
  }]
});
