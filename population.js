//1st step : create a XHR object
var request1 = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request1.open("GET","https://restcountries.com/v3.1/all");
//3rd step : establishing the bridge
request1.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}