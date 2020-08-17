
        const solution=()=>{
           let java=document.getElementById("java").value;
           let english=document.getElementById("english").value;
           let cn=document.getElementById("cn").value;
           let os=document.getElementById("os").value;
           let oops=document.getElementById("oops").value;

           if(java<0 || cn<0 || english<0 || os<0 ||oops<0){
            alert("Enter the required values!!");

           }
           if(java=='' || cn=='' || english=='' || os=='' || oops==''){
               alert("Enter the required values!!");
           }
           
           let total=parseInt(java)+parseInt(english)+parseInt(cn)+parseInt(os)+parseInt(oops);
           
           let percentage;
           percentage=(total/500)*100;
           debugger;
           
           let grade;
           if(percentage>90 && percentage<=100){
            grade='A1';}
        else if(percentage>=81 && percentage<=90){
            grade='A2';
        }
        else if(percentage>71 && percentage<=80)
        {
            grade='B1';
        }
        else if(percentage>=61 && percentage<=70)
        {
            grade='B2';
        }
        else if(percentage>=51 && percentage<=60)
        {
            grade='C1';
        }
        else if(percentage>=41 && percentage<=50)
        {
            grade='C2';
        }
        else if(percentage>=33 && percentage<=40)
        {
            grade='D';
        }
        else{
            grade='F';
        }
    

        if(percentage>33)
        {
            document.getElementById('marksobtainedID').innerHTML=`Total Marks : 500 <br> Marks Obtained : ${total}`
            document.getElementById('percentageID').innerHTML=`Total Percentage : ${percentage}%`
            document.getElementById('dID').innerHTML=`Result :`
            document.getElementById('gradeID').innerHTML=`PASS  [${grade}]`
        }
        else{
            document.getElementById('marksobtainedID').innerHTML=`Total Marks : 500 <br> Marks Obtained : ${total}`
            document.getElementById('percentageID').innerHTML=`Total Percentage : ${percentage}%`
            document.getElementById('d2ID').innerHTML=`Result :  `
            document.getElementById('gradefailID').innerHTML=`FAIL  [${grade}]`
        }



       }

   
