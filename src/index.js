module.exports = function toReadable (number) {
      let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      let arr3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      if (number >= 0 && number < 10) return (arr1[number]);
      if (number > 9 && number < 20) return (arr2[number % 10]);
      if (number > 19 && number < 100) {
         let secondNumber=number%10;
         let firstNumber = Math.floor(number / 10);
         if(secondNumber!==0) return (arr3[firstNumber]+' '+arr1[secondNumber])
         else return arr3[firstNumber];
      }
      if (number > 99 && number < 1000) {
         let firstNumber=Math.floor(number/100);
         let remainderDivisionHundreds = number % 100;
         let secondNumber = Math.floor(remainderDivisionHundreds / 10);
         let thirdNumber = remainderDivisionHundreds % 10;

         if (remainderDivisionHundreds===0) return (arr1[firstNumber]+' hundred')
         if(0<remainderDivisionHundreds&&remainderDivisionHundreds<10) 
         return (arr1[firstNumber]+ ' hundred '+ arr1[remainderDivisionHundreds])
         if(9<remainderDivisionHundreds&&remainderDivisionHundreds<20) 
         return (arr1[firstNumber]+ ' hundred '+ arr2[remainderDivisionHundreds%10])
         if(19<remainderDivisionHundreds&&remainderDivisionHundreds<100) {
            if(thirdNumber===0) return (arr1[firstNumber]+ ' hundred ' + arr3[secondNumber])
            if(thirdNumber>0) return (arr1[firstNumber]+ ' hundred ' + arr3[secondNumber] +' '+arr1[thirdNumber])
      }
      }
   }
