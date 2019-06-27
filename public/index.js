const graphViewId = 'test';
const divId = graphViewId + '-div';
const canvasId = graphViewId + '-canvas';
const container = document.createElement("div");
const topContainer = $('content-root');
topContainer.appendChild(container);
const statsName = 'Test Graph';
container.innerHTML = '<div>' + statsName + '</div>' + '<div id=' + divId + '><canvas id=' + canvasId + '></canvas></div>';
const graphView = new TimelineGraphView(divId, canvasId);

const dataSeries = new TimelineDataSeries();
graphView.addDataSeries(dataSeries);

setInterval(() => {
  const timestamp = Date.now();
  dataSeries.addPoint(timestamp, Math.random());
  const date = new Date(timestamp);
  graphView.updateEndDate();
  }, 1000);
