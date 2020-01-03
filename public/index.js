const graphView = new TimelineGraphView('graph-div', 'graph-canvas');

const dataSeries = new TimelineDataSeries();
graphView.addDataSeries(dataSeries);

setInterval(() => {
  const timestamp = Date.now();
  dataSeries.addPoint(timestamp, Math.random());
  const date = new Date(timestamp);
  graphView.updateEndDate();
  }, 1000);
