alert("WELCOME");

        var name = prompt("please enter your name");
        alert("Hello " + name);



        var type = prompt("What Types of Birds are You Looking for?");
        alert(type);



        var age = prompt("How Old Are You?");



        if (age > 15
        ) {
          alert("Welcome , you can enter website because you are older than 15");
        } else {
          alert("Sorry, Your age is less than 15");

        }



        var languages = prompt("Please Enter Language");
        var English = "English is Activated";
        var Arabic = " Arabic is Activated";
        var booleanVariableOfTypeTrue = true;

        function language(MyLanguage) {
          if (languages == "English") {

            alert(English);

          } else if (languages == "Arabic") {
            alert(Arabic);
          }
        }
        language(languages);



        if (true) {
          alert("Welcome");

        }


        for (var i = 0; i < 10; i++) {

          console.log(i);



        }


        console.log("Hello !");

        let userinput = prompt('Do You love birds or cats?')

        while (userinput !== 'birds') {

          userinput = prompt(' Sorry This Site is for Birds Lover');
        }

        alert (' You are in the right place ');



        alert(answer);

        let howmany = function () {


          let count = prompt(' How Many Birds You Want ?');

          while (count === '')

            count = prompt(' Please Enter a Number');

          return count;
        }

        let showorder = function () {

          let item = '<img src= https://th.bing.com/th/id/OIP.Gr-4WOJw1qUFigeeCYTyrAHaH1?pid=Api&rs=1/>';
          let total = howmany();
          let result = '';

          for (let i = 0; i < total; i++) {

            result = result + i + item

          }

         
          document.write(result);


        }

        showorder () ;

        console.log