function myFunction(array) {
   var table = document.getElementById("table");
   const today = new Date();
   let Day = String(today.getDate()).padStart(2, '');
   let Month = String(today.getMonth() + 1).padStart(2, ''); 
   let Year = today.getFullYear();
   let todayDate = Day + '/' + Month + '/' + Year;

   array.sort( function(a, b) {
       var spt1 = a.date.split("/");
       var spt2 = b.date.split("/");

    if ( parseInt(spt1[2]) < parseInt(spt2[2])){
        return -1;
    }
    else if (parseInt(spt1[2]) > parseInt(spt2[2])){
        return 1;
    }
    else if (parseInt(spt1[1]) < parseInt(spt2[1])){
        return -1;
    }
    else if (parseInt(spt1[1]) > parseInt(spt2[1])){
        return 1;
    }
    else if (parseInt(spt1[0]) < parseInt(spt2[0])){
        return -1;
    }
    else if (parseInt(spt1[0]) > parseInt(spt2[0])){
        console.log(spt1[0] , spt2[0]);
        return 1;
    }
    else if (parseInt(a.time) < parseInt(b.time)) {
        return -1;
    } 
     return 1;
   } );

    var i = 0;
    table.innerHTML = "<tr>";
    array.forEach(element => {
            table.innerHTML += "<td><div class=fbox><div class=boxed id=box"+i+"></div><div class=des id=jen"+i+"></div><div id=button"+i+"><button type=button onclick=Add>+ Add to Calender</button></div></div> </td>";
    if (todayDate == element.date) {
        document.getElementById("box"+i).innerHTML= "<p class = date> Today </p>" +"<p class = time>"+ element.time + "</p>";
    }
    else {
            document.getElementById("box"+i).innerHTML= "<p class = date>" + element.date + "</p>" +"<p class = time>"+ element.time+"</p>";

    }
            document.getElementById("jen"+i).innerHTML="<pre>"+"<p class = tittle>"+"<h2>"+element.title+"</h2>"+"</p>"+"<p class = descripton>"+element.description+"</p>"+"</pre>";
        i++;
    });
    
    table.innerHTML += "</tr>";

}
        function Add(){
        var fieldValue = document.getElementById("table").value;
        localStorage.setItem("text", fieldValue)
        var buttonStorage = document.getElementsByClass("jen").value;
        localStorage.setItem("button", buttonStorage)
    
   }

    
myFunction(data);

