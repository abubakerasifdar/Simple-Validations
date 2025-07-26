
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        document.addEventListener("keypress",(e)=>{
            myFunction()
        })
        function myFunction() {
            let input = document.getElementById("input").value;
            let pureinput = input.trim()
            let array = pureinput.split(",");
            console.log(array, "this is the array");
            let result= '';
            for(let i=0; i<array.length; i++){
                console.log(array.length, 'This is the array leng');
               console.log( array[i]);
                if(array[i]<0){break;}
                   result += array[i];
                   console.log(result , "this is the result");
                
                
            }
            console.log(result, "This is the result");
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   
    