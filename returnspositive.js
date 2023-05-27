// Write a function that accepts a positive Number

// The function should console log the steps shape

// with N levels using the # Character symbol Make sure the steps has spaces on the right hand side

// steps(3)

//'#  ' HAS A # AND TWO SPACES

//'## ' HAS two # AND ONE SPACE

//'###' HAS three and no  SPACE
   
   
  //  function positive(n, j = 1) {
  //       if (j > n) return;
  //       console.log('#'.repeat(j) + ' '.repeat(n - j));
  //       positive(n, j + 1);
  //     }

  //     const x = 10
  //     if(x < 0){
  //       console.log('number shouldnt be negative')
  //    }else{
  //     const pos = positive(x)
  //     console.log(pos);
  //   }

      // function steps(n) {
      //   for (let i = 0; i < n; i++) {
      //       let z = ' ';
      
      //    for (let j = 0; j < n; j++) {
      //       if (j <= i) {
      //        z += '#'
      //      } else {
      //        z += ' ';
      //      }
      //    }
      //    console.log(z)
      //   }
      // }
      //  const x = -10
      //  if(x > 0){
      //   const positive = steps(x)
      //   console.log(positive);
             
      //      }else{
      //       console.log('number shouldnt be negative')

      //      }


      function displaySteps(n) {

            let steps = 1; // start with one step
        
         
        
            function recurse() {
        
        console.log('#'.repeat(steps) + ' '.repeat(n-steps));
        
         steps += 1
        return steps <= n ? recurse() : '';
        
         }
        
            recurse()
        
        }