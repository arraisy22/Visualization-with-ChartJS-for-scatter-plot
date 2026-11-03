/*
  elements
*/

const cnt = document.getElementById("cnt1");
Object.assign(cnt.style, {
  border: "0px solid green",
  height: "200px",
  display: "flex",
});

const div = document.createElement("div");
Object.assign(div.style, {
  border: "0px solid blue",
  flex: 1,
  display: "flex",
  marginRight: "10px",
});

const can = document.createElement("canvas");
Object.assign(can.style, {
  flex: 2,
  border: "1px solid var(--muted-border)",
});


/*
  console
*/

import { Console as CLI } from "endap"

const consoles = CLI.create("78%");
const cli = consoles.el;
Object.assign(cli.style, {
  flex: 1,
});
consoles.setTitle("data-1");


/*
  data
*/

import { Tensor1D as T1D } from "endap"

const n = 4;
const x1 = T1D.create(n);
const x2 = T1D.create(n);

for(let i = 0; i < n; i++) {
  x1[i] = 2 * i;
  x2[i] = i * i;
}

const data1 = T1D.create(n);

for(let i = 0; i < n; i++) {
  const point = {
    x: x1[i],
    y: x2[i],
  };
  data1[i] = point;
}


/*
  output to cli
*/

consoles.log("x1\tx2");
for(let i = 0; i < n; i++) {
  const x1s = x1[i].toFixed(3);
  const x2s = x2[i].toFixed(3);

  consoles.log(x1s, "\t");
  consoles.log(x2s);
}


/*
  output to cavas with chartjs
*/

const config = {
  type: 'scatter',
  
  data: {
    datasets: [
      {
        label: "data-1",
        data: data1,
        radius: 4,
        hoverRadius: 6,
        showLine: true,
      },
    ],
  },

  options: {    
    scales: {
    
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'x1',
          font: { size: 14, },
        },
      },
      
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'x2',
          font: { size: 14, },
        },
      },
    
    },
  },

};
const chart = new Chart(can, config);


/*
  layouts
*/

cnt.append(div);
  div.append(cli);
cnt.append(can);
