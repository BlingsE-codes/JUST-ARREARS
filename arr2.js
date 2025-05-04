let radioYes = document.getElementById(`leaveradio1`);
let radioNo = document.getElementById(`leaveradio2`);
let basicInput = document.getElementById(`basicInput`).value;
let housingDisplay = document.getElementById(`houseDisplay`);
let upfrontDisplay = document.getElementById(`upfrontDisplay`);
basicInput = Number(basicInput);
let oldOvertimeinput;
oldOvertimeinput = Number(oldOvertimeinput);
let newtransport;
let diffIntransport;
let oldTransport;
oldTransport = Number(oldTransport);
let newLeave;
let oldLeave;
let diffInLeave;
let diffInbasic;
let oldBasic;
let newBasic;
let diffInhousing;
let oldHousing;
let newhousing;
let diffInOvertime;
let oldOvertime;
let newOvertime;
let oldMeal;
let newMeal;
let diffInMeal;
let sum;
let sum1;
let totalSum;
let percent1;
let totalSum2;
let totalSum4;
let basicInput1;






function calculate(){
   
    let months = document.getElementById(`monthlabel1`).value;
    let totalDisplay = document.getElementById(`totalDisplay`);
    let taxlabel = document.getElementById(`taxlabel`).value;
    let percent = document.getElementById(`percent`).value;
    let pensiondiff = totalSum * 0.008
    pensiondiff = Number(pensiondiff);
    let numofpension = pensiondiff * months
    numofpension = Number(numofpension);
    let z = calBasic()
    let y = calTransport()
    let v = calHousing()
    let wt = overtime1()
    let x = calmeal()
    let xx = calleave()
    let tt = upfront()
    
    

  
    
    
    function calBasic(){
            
        let percent = document.getElementById(`percent`).value;
        let basicInput = document.getElementById(`basicInput`).value;
        let basicDisplay = document.getElementById(`basicDisplay`);
        diffInbasic = basicInput * percent / 100;
        let a = basicInput;
        let b = diffInbasic
        newBasic = parseInt(a) + parseInt(b);
        oldBasic = basicInput;
        diffInbasic = newBasic - oldBasic;
        basicDisplay.textContent = `New Basic: ₦${newBasic.toFixed(2,0)}`;
    
    }
    
    
    function calTransport(){
        let transDisplay = document.getElementById(`transDisplay`);
        newtransport = newBasic * 0.7;
        oldTransport = oldBasic * 0.7;
        diffIntransport = newtransport - oldTransport;
        transDisplay.textContent = `New Transport: ₦${newtransport.toFixed(2,0)}`;
    
    
    }
    
    function calHousing(){
        let housingDisplay = document.getElementById(`houseDisplay`);
        newhousing = newBasic * 0.7;
        oldHousing = oldBasic * 0.7;
        diffInhousing = newhousing - oldHousing;
        housingDisplay.textContent = `New Housing: ₦${newhousing.toFixed(2,0)}`;
    
    }
    
    function overtime1(){
        let percent = document.getElementById(`percent`).value;
        let overtimeDisplay = document.getElementById(`overtimeDisplay`);
        let oldOvertimeinput = document.getElementById(`overTimeInput`).value;
        percent1 = percent / 100;
        diffInOvertime = oldOvertimeinput * percent1;
        let c = oldOvertimeinput;
        let d = diffInOvertime;
        newOvertime = parseInt(c) + parseInt(d);
        overtimeDisplay.textContent = `New Overtime: ₦${newOvertime}`;
    } 
    
       
    function calmeal(){
        let mealDisplay = document.getElementById(`mealDisplay`);
        newMeal = newBasic * 0.25;
        oldMeal = oldBasic * 0.25;
        diffInMeal = newMeal - oldMeal;
        mealDisplay.textContent = `New Meal: ₦${newMeal.toFixed(2,0)}`;
    
    }
    
    
    function calleave(){
        let leaveDisplay = document.getElementById(`leaveDisplay`);
        newLeave = (newBasic * 12) * 0.21;
        oldLeave = (oldBasic * 12) * 0.21;
        diffInLeave = newLeave - oldLeave;
        leaveDisplay.textContent = `New Leave allowance: ₦${newLeave.toFixed(2,0)}`;
    }

    function upfront(){
        totalup = (newhousing * 12) + 240000;
        totalup = parseInt(totalup);
        upfrontDisplay.textContent =  (`Your next Up-front: ₦${((totalup).toFixed(2,0))}`) ;
         
    }
       

   
     
     if (radioYes.checked == true && radioNo.checked == false){
        sum = (diffInbasic * months) + (diffIntransport * months) + (diffInhousing * 11) + 
        (diffInMeal * months) + diffInLeave + diffInOvertime;
        taxcal = (taxlabel * 0.01) * sum;
        totalSum = sum - taxcal;
        pfadiff = newBasic * 0.008;
        curpfa = pfadiff * months;
        totalSum = totalSum - curpfa
        

        totalDisplay.textContent = (`Total Arrears: ₦${((totalSum).toFixed(2,0))}`);    
     }
     else if(radioNo.checked == true && radioYes.checked == false){
        sum1 = (diffInbasic * months) + (diffIntransport * months) + (diffInhousing * 11) +
        (diffInOvertime) + (diffInMeal * months);
        taxcal = (taxlabel * 0.01) * sum1;
        totalSum = sum1 - taxcal;
        pfadiff = newBasic * 0.008;
        curpfa = pfadiff * months;
        totalSum = totalSum - curpfa

        totalDisplay.textContent = (`Total Arrears: ₦${((totalSum).toFixed(2,0))}`);    
        
     }

     else if(radioNo.checked == false && radioYes == false){
        totalDisplay.textContent = `select your Leave status`
     }

     else{
        totalDisplay.textContent = `Fill boxes & tick your Leave status`;
        basicDisplay.textContent = ``
        leaveDisplay.textContent = ""
        mealDisplay.textContent = ""
        transDisplay.textContent = ``
        overtimeDisplay.textContent = ""
        housingDisplay.textContent = ""
        upfrontDisplay.textContent = ""
       

     }
    
 
      
 }
