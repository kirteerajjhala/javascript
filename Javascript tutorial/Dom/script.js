/*

document.getElementById("k1") // or ye k1 sabhi class or id ke name "" ke under likhna hai 
<h1 id=​"k1" class=​"k2">​kirteeraj jhala ​</h1>​ //essse id select hoti hai

document.getElementById("k1").id   // esse id ka name pta lagta hai 
'k1'

document.getElementById("k1").className // esse class ka name pta lagta hai or className same yesa hi likhna padega
'k2'

document.getElementById("k1").getAttribute("id") //getAttribute se bhi pta kr skte hai id ya classs ka name
'k1'

document.getElementById("k1").getAttribute("class")
'k2'
 document.getElementById("k1").setAttribute("class","k3 k2") //setAttributes se kisi bhi class ya id me ek oe class ya id bada skte hai par vo purani vali bhi likhni padegi 

*/

/*
const tital =document.getElementById('k1') // yaha par pahle select kiya fir usko tital me store kiya 
tital.style.backgroundColor="black" 
tital.style.color='white'
*/


/*
tital.textContent
'kirteeraj jhala '

tital.innerHTML
'kirteeraj jhala '

tital.innerText
'kirteeraj jhala'

ye tino se text dekh skte hai par enme diff kya hai 

//////////textContent vo bhi batata hai jo text display none hai 
tital.textContent
'kirteeraj jhala   jii jhala ji '


///////// innertext  nhi batatat hai ye sirf utna batatat hai vo screen par hai 
tital.innertext
'kirteeraj jhala'


//////// innerHTML pura html tag ke sath text batata hai 
for exmaple tital.innerHTML
'kirteeraj jhala  <span style="display: none ;"> jii jhala ji </span>'
ye vo html deta hai vo us tag ke under or tag se likha ho 

*/


/*
document.querySelector("#k1") // esme "#k1" id ya class ka symbol likhna padega
document.querySelector(".k2")
const life = document.querySelector("h1") // esme 5 h1 hai to ye sab se pahle vale ko selct kre ga 
life.innerText="fbfgiureguhghighhfiegrdf"
*/
