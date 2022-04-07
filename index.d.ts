declare module 'webrtc-internals' {
    export class TimelineDataSeries {
      constructor();
      addPoint(timestamp: number, value: number);
      setPoints(points: DataPoint[]);
      setColor(color: string);
    }
  
    export class TimelineGraphView {
      constructor(canvas: HTMLCanvasElement, devicePixelRatio?: number);
      updateEndDate();
      addDataSeries(dataSeries: TimelineDataSeries);
  
      textColor: string;
      backgroundColor: string;
      gridColor: string;
  
      timeLocales: Object;
      timeOptions: Object;
    }
  
    export interface DataPoint {
      time: number;
      value: number;
    }
  }
