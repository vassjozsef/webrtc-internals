WebRTC Internals
================

Goal is to replace react-sparklines in Discord with chrome://webrtc-internals style graphs. [timeline_data_series.js](https://github.com/fippo/webrtc-externals/blob/master/webrtc-internals.js#L207-L341) and [timeline_graph_view.js](https://github.com/fippo/webrtc-externals/blob/master/webrtc-internals.js#L510-#L1063) are taken from [https://github.com/fippo/webrtc-externals](https://github.com/fippo/webrtc-externals).


Install
-------

    npm install webrtc-internals

Use
---

    const {TimelineDataSeries, TimelineGraphView} = require('webrtc-internals');
  
    const graphView = new TimelineGraphView('graph-div', 'graph-canvas');

    const dataSeries = new TimelineDataSeries();
    graphView.addDataSeries(dataSeries);

    const timestamp = Date.now();
    dataSeries.addPoint(timestamp, Math.random());
