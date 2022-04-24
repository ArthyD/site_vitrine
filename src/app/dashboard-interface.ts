export interface IDashboardJson{
    sideContents:IDashBoardWidget[];
    mainContents:IDashBoardWidget[];
    careerContents:IDashBoardWidget[];
    cvContents:IDashBoardWidget[];
    courseSubjectContent:IDashBoardWidget[];
    projectContent:IDashBoardWidget[];
    mapContent:IDashBoardWidget[];
    recetteContent:IDashBoardWidget[];
}

export interface IStyleWidget{
    colorTitle:string;
    border: boolean;
    size:string;

}

export interface IChartStyle{
    chartColor:string;
}
export interface IDashBoardWidget{
    name:string;
    desc:string;
    type:string;
    style:IStyleWidget;
    listToDoName?:string;
    imagePath?:string;
    link?:string;
    chartStyle?:IChartStyle;
    chartData?:any;
    chartxAxisType?:string;
    chartType?:string;
    sideImagePath?:string;
    recruitingLink?:string;
    imageList?:any[];
    timelineEvent?:any[];
    videoId?:string;
    startSeconds?:number;
    cityLong?:number;
    cityLat?:number;
    mapContent?:string;
    startLocation?:number[];
    startZoom?:number;


}

export interface ToDoTask{
    name:string;
    done:boolean;
}

