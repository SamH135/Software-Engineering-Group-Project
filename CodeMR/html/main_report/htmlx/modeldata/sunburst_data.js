function EQ_GET_DATA(){ 
	  var ret = {
"name": " group project", "value":291, 
"prmetrics":{"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1},
"prmetricvalues":{"5":0,"6":7,"7":0,"8":291,"9":10,"10":1,"11":37},
"children": [ {
"name": "", "key": "j", "value":291, 
"pmetrics":{"4":2,"12":1,"13":1,"14":2,"3":1,"1":1,"0":1,"6":2,"8":2,"2":1,"15":1,"16":1},
"pmetricvalues":{"4":2,"12":0,"13":0,"14":7,"3":1,"1":1,"0":1,"17":0.143,"6":7,"18":0.143,"8":291,"19":1.0,"2":1,"15":0,"16":70},
"children":[
{
"name": "Cat","key": "k","value":44, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":2,"0":2,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":2},
"metricvalues":{"20":1,"21":0,"22":1,"23":0.0,"24":42,"25":0,"26":2,"0":2,"27":2,"28":8,"29":0.0,"30":0.0,"31":0,"32":0.375,"33":1,"34":3,"35":0,"36":0,"16":19,"37":0,"4":1,"8":44,"2":1,"3":1,"1":2}
},
{
"name": "GameObject","key": "o","value":15, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":2,"26":1,"0":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":1},
"metricvalues":{"20":0,"21":0,"22":2,"23":0.0,"24":12,"25":3,"26":1,"0":1,"27":6,"28":6,"29":0.6,"30":0.5,"31":0,"32":0.444,"33":0,"34":0,"35":0,"36":0,"16":6,"37":0,"4":1,"8":15,"2":1,"3":1,"1":1}
},
{
"name": "Cheese","key": "l","value":5, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":2,"0":2,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":2},
"metricvalues":{"20":0,"21":0,"22":0,"23":0.0,"24":4,"25":0,"26":2,"0":2,"27":2,"28":2,"29":0.0,"30":0.0,"31":0,"32":0.333,"33":0,"34":0,"35":0,"36":0,"16":2,"37":0,"4":1,"8":5,"2":1,"3":1,"1":2}
},
{
"name": "GameManager","key": "n","value":50, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"0":1,"27":1,"28":1,"29":1,"30":2,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":1},
"metricvalues":{"20":4,"21":1,"22":7,"23":0.0,"24":42,"25":0,"26":1,"0":1,"27":7,"28":18,"29":0.4,"30":0.69,"31":0,"32":0.357,"33":4,"34":10,"35":0,"36":0,"16":19,"37":0,"4":1,"8":50,"2":1,"3":1,"1":1}
},
{
"name": "Mouse","key": "q","value":24, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":2,"0":2,"27":1,"28":1,"29":5,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":2},
"metricvalues":{"20":1,"21":0,"22":1,"23":0.0,"24":22,"25":0,"26":2,"0":2,"27":4,"28":4,"29":1.0,"30":0.0,"31":0,"32":0.437,"33":1,"34":0,"35":0,"36":0,"16":10,"37":0,"4":1,"8":24,"2":1,"3":1,"1":2}
},
{
"name": "GameBoard","key": "m","value":10, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"0":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":1,"8":1,"2":1,"3":1,"1":1},
"metricvalues":{"20":1,"21":1,"22":1,"23":0.0,"24":8,"25":0,"26":1,"0":1,"27":4,"28":6,"29":0.0,"30":0.0,"31":0,"32":0.417,"33":1,"34":2,"35":0,"36":0,"16":4,"37":0,"4":1,"8":10,"2":1,"3":1,"1":1}
},
{
"name": "GameUI","key": "p","value":143, 
"metrics":{"20":1,"21":1,"22":1,"23":1,"24":2,"25":1,"26":1,"0":1,"27":1,"28":1,"29":5,"30":2,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"16":1,"37":1,"4":2,"8":2,"2":1,"3":1,"1":1},
"metricvalues":{"20":3,"21":1,"22":13,"23":0.0,"24":127,"25":0,"26":1,"0":1,"27":3,"28":26,"29":1.0,"30":0.633,"31":2,"32":0.375,"33":3,"34":23,"35":1,"36":0,"16":10,"37":0,"4":2,"8":143,"2":1,"3":1,"1":1}
}
]
}]
 }
;
return ret;
}
var EQ_METRIC_MAP = {};
EQ_METRIC_MAP["C3"] =0;
EQ_METRIC_MAP["Complexity"] =1;
EQ_METRIC_MAP["Coupling"] =2;
EQ_METRIC_MAP["Lack of Cohesion"] =3;
EQ_METRIC_MAP["Size"] =4;
EQ_METRIC_MAP["Number of Highly Problematic Classes"] =5;
EQ_METRIC_MAP["Number of Entities"] =6;
EQ_METRIC_MAP["Number of Problematic Classes"] =7;
EQ_METRIC_MAP["Class Lines of Code"] =8;
EQ_METRIC_MAP["Number of External Packages"] =9;
EQ_METRIC_MAP["Number of Packages"] =10;
EQ_METRIC_MAP["Number of External Entities"] =11;
EQ_METRIC_MAP["Efferent Coupling"] =12;
EQ_METRIC_MAP["Number of Interfaces"] =13;
EQ_METRIC_MAP["Number of Classes"] =14;
EQ_METRIC_MAP["Afferent Coupling"] =15;
EQ_METRIC_MAP["Weighted Method Count"] =16;
EQ_METRIC_MAP["Normalized Distance"] =17;
EQ_METRIC_MAP["Abstractness"] =18;
EQ_METRIC_MAP["Instability"] =19;
EQ_METRIC_MAP["Coupling Between Object Classes"] =20;
EQ_METRIC_MAP["Access to Foreign Data"] =21;
EQ_METRIC_MAP["Number of Fields"] =22;
EQ_METRIC_MAP["Specialization Index"] =23;
EQ_METRIC_MAP["Class-Methods Lines of Code"] =24;
EQ_METRIC_MAP["Number of Children"] =25;
EQ_METRIC_MAP["Depth of Inheritance Tree"] =26;
EQ_METRIC_MAP["Number of Methods"] =27;
EQ_METRIC_MAP["Response For a Class"] =28;
EQ_METRIC_MAP["Lack of Tight Class Cohesion"] =29;
EQ_METRIC_MAP["Lack of Cohesion of Methods"] =30;
EQ_METRIC_MAP["Number of Static Fields"] =31;
EQ_METRIC_MAP["Lack of Cohesion Among Methods(1-CAM)"] =32;
EQ_METRIC_MAP["CBO App"] =33;
EQ_METRIC_MAP["Simple Response For a Class"] =34;
EQ_METRIC_MAP["Number of Static Methods"] =35;
EQ_METRIC_MAP["CBO Lib"] =36;
EQ_METRIC_MAP["Number of Overridden Methods"] =37;
var EQ_SELECTED_CLASS_METRIC 		= "Coupling";
var EQ_SELECTED_PACKAGE_METRIC 	= "Coupling";
var EQ_SELECTED_PROJECT_METRIC 	= "Class Lines of Code";
var EQ_CLASS_METRIC_INDEX 	= EQ_METRIC_MAP[EQ_SELECTED_CLASS_METRIC];
var EQ_PACKAGE_METRIC_INDEX	= EQ_METRIC_MAP[EQ_SELECTED_PACKAGE_METRIC];
var EQ_PROJECT_METRIC_INDEX 	= EQ_METRIC_MAP[EQ_SELECTED_PROJECT_METRIC];
var EQ_COLOR_OF_LEVELS = ["#1F77B4","#007F24","#62BF18","#FFC800","#FF5B13","#E50000"];
var EQ_CLASS_METRICS = ["C3","Complexity","Coupling","Lack of Cohesion","Size","Class Lines of Code","Weighted Method Count","Coupling Between Object Classes","Access to Foreign Data","Number of Fields","Specialization Index","Class-Methods Lines of Code","Number of Children","Depth of Inheritance Tree","Number of Methods","Response For a Class","Lack of Tight Class Cohesion","Lack of Cohesion of Methods","Number of Static Fields","Lack of Cohesion Among Methods(1-CAM)","CBO App","Simple Response For a Class","Number of Static Methods","CBO Lib","Number of Overridden Methods"];
var EQ_PACKAGE_METRICS = ["C3","Complexity","Coupling","Lack of Cohesion","Size","Number of Entities","Class Lines of Code","Efferent Coupling","Number of Interfaces","Number of Classes","Afferent Coupling","Weighted Method Count","Normalized Distance","Abstractness","Instability"];
var EQ_PROJECT_METRICS = ["Number of Highly Problematic Classes","Number of Entities","Number of Problematic Classes","Class Lines of Code","Number of External Packages","Number of Packages","Number of External Entities"];
function EQ_GET_COLOR(d) {
if(d.metrics)
return EQ_COLOR_OF_LEVELS[d.metrics[EQ_CLASS_METRIC_INDEX]];
if(d.pmetrics)
return EQ_COLOR_OF_LEVELS[d.pmetrics[EQ_PACKAGE_METRIC_INDEX]];
if(d.prmetrics)
return EQ_COLOR_OF_LEVELS[d.prmetrics[EQ_PROJECT_METRIC_INDEX]];
return EQ_COLOR_OF_LEVELS[0];
}
