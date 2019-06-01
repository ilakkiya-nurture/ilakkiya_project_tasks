var roomcount;
var adultcount;
var childrencount;


var rooms;
var adults;
var children;

function room_increment()
{
 // alert("hi")
 rooms=document.getElementById("roomcount").innerText;
 //alert(rooms)
 adults=document.getElementById("adultcount").innerText;
 children=document.getElementById("childrencount").innerText;

if(rooms<5)roomcount=parseInt(rooms)+1;
document.getElementById("roomcount").innerText=roomcount;
rooms=document.getElementById("roomcount").innerText;

//alert(parseInt(rooms)>1 && parseInt(children)==0)
if(rooms>1 && children==0){
 adults=rooms;
 document.getElementById("adultcount").innerText=adults;
}

}

function room_decrement()
{
 rooms=document.getElementById("roomcount").innerText;
 roomcount=parseInt(rooms)
adults=document.getElementById("adultcount").innerText;
children=document.getElementById("childrencount").innerText;


adultcount=parseInt(adults)
childrencount=parseInt(children)

 
  if((roomcount)>1)
  {
 
   rooms = roomcount-1;
   roomcount=parseInt(rooms)
    document.getElementById("roomcount").innerText=rooms;
	
 
     if((adultcount+childrencount)>roomcount*4)
     {
	
       while((adultcount+childrencount)!=roomcount*4)
       {
         if(childrencount>0){
         childrencount = childrencount-1;
	
		  document.getElementById("childrencount").innerText=childrencount;
}
        if(childrencount==0){
          adultcount = adultcount-1;
		   console.log(adultcount)
		  document.getElementById("adultcount").innerText=adultcount;
}
       }
       
     }
  }
 rooms=document.getElementById("roomcount").innerText;
 if(rooms==1 && children==0){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
 }
if(rooms==2 && children==0){
 adults=rooms;
 document.getElementById("adultcount").innerText=adults;
}
if(rooms==3 && children==0){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
 }
 if(rooms==4 && children==0){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
 }
//when room is 1 and children is upto 3
 if(rooms==1 && children==1){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
  if((adultcount+childrencount)>roomcount*4)
  {

    while((adultcount+childrencount)!=roomcount*4)
    {
      if(childrencount>0){
      childrencount = childrencount-1;

   document.getElementById("childrencount").innerText=childrencount;
}
     if(childrencount==0){
       adultcount = adultcount-1;
    console.log(adultcount)
   document.getElementById("adultcount").innerText=adultcount;
}
    }
    
  }
 }

 if(rooms==1 && children==2){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
  if((adultcount+childrencount)>roomcount*4)
  {

    while((adultcount+childrencount)!=roomcount*4)
    {
      if(childrencount>0){
      childrencount = childrencount-1;

   document.getElementById("childrencount").innerText=childrencount;
}
     if(childrencount==0){
       adultcount = adultcount-1;
    console.log(adultcount)
   document.getElementById("adultcount").innerText=adultcount;
}
    }
    
  }
 }

 if(rooms==1 && children==3){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
  if((adultcount+childrencount)>roomcount*4)
  {

    while((adultcount+childrencount)!=roomcount*4)
    {
      if(childrencount>0){
      childrencount = childrencount-1;

   document.getElementById("childrencount").innerText=childrencount;
}
     if(childrencount==0){
       adultcount = adultcount-1;
    console.log(adultcount)
   document.getElementById("adultcount").innerText=adultcount;
}
    }
    
  }
 }
//when room is 1 and children is upto 3

//when room is 2 and children is upto 3
if(rooms==2 && children==1){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
  if((adultcount+childrencount)>roomcount*4)
  {

    while((adultcount+childrencount)!=roomcount*4)
    {
      if(childrencount>0){
      childrencount = childrencount-1;

   document.getElementById("childrencount").innerText=childrencount;
}
     if(childrencount==0){
       adultcount = adultcount-1;
    console.log(adultcount)
   document.getElementById("adultcount").innerText=adultcount;
}
    }
    
  }
 }

 if(rooms==2 && children==2){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
  if((adultcount+childrencount)>roomcount*4)
  {

    while((adultcount+childrencount)!=roomcount*4)
    {
      if(childrencount>0){
      childrencount = childrencount-1;

   document.getElementById("childrencount").innerText=childrencount;
}
     if(childrencount==0){
       adultcount = adultcount-1;
    console.log(adultcount)
   document.getElementById("adultcount").innerText=adultcount;
}
    }
    
  }
 }

//when room is 2 and children is upto 3

//when room is 3 and children is upto 3
if(rooms==3 && children==1){
  adults=rooms;
  document.getElementById("adultcount").innerText=adults;
  if((adultcount+childrencount)>roomcount*4)
  {

    while((adultcount+childrencount)!=roomcount*4)
    {
      if(childrencount>0){
      childrencount = childrencount-1;

   document.getElementById("childrencount").innerText=childrencount;
}
     if(childrencount==0){
       adultcount = adultcount-1;
    console.log(adultcount)
   document.getElementById("adultcount").innerText=adultcount;
}
    }
    
  }
 }
 //when room is 3 and children is upto 3

 
 
}


function adults_increment()
{
 rooms=document.getElementById("roomcount").innerText;
 adults=document.getElementById("adultcount").innerText;
 children=document.getElementById("childrencount").innerText;

 roomcount=parseInt(rooms);
 adultcount=parseInt(adults);
 childrencount=parseInt(children);

  if((adultcount+childrencount)<roomcount*4)
  adultcount = adultcount+1;
  document.getElementById("adultcount").innerText=adultcount;

}

function adults_decrement()
{
rooms=document.getElementById("roomcount").innerText;
adults=document.getElementById("adultcount").innerText;
children=document.getElementById("childrencount").innerText;

 roomcount=parseInt(rooms);
 adultcount=parseInt(adults);
 childrencount=parseInt(children);

  
  if(adultcount>1)
  {
      adultcount = adultcount-1;
     // alert(adultcount)
      if(adultcount<roomcount){
        //alert("enttered")
        //alert(document.getElementById("roomcount").innerText)
        document.getElementById("adultcount").innerText=document.getElementById("roomcount").innerText;

      }
      else{
        document.getElementById("adultcount").innerText=adultcount;
      }
  
  }

  
}

function children_increment()
{
rooms=document.getElementById("roomcount").innerText;
adults=document.getElementById("adultcount").innerText;
children=document.getElementById("childrencount").innerText;
 roomcount=parseInt(rooms);
 adultcount=parseInt(adults);
 childrencount=parseInt(children);


  if((adultcount+childrencount)<roomcount*4)
  childrencount = childrencount+1;
  children=document.getElementById("childrencount").innerText=childrencount;
  
}

function children_decrement()
{
adults=document.getElementById("adultcount").innerText;
children=document.getElementById("childrencount").innerText;

 roomcount=parseInt(rooms);
 adultcount=parseInt(adults);
 childrencount=parseInt(children);

  
  if(childrencount>0)
  childrencount = childrencount-1;
  children=document.getElementById("childrencount").innerText=childrencount;

  
}