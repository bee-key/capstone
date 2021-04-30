/* javascript for play coding */
function setDate(){
  document.getElementById('date').innerHTML=Date();
}

function check() {
      var email1 = document.getElementById('email_addr');
      var email2 = document.getElementById('email_repeat');
      var str1=email1.value;
      var str2=email2.value;
      var s1=str1.toLowerCase();
      var s2=str2.toLowerCase();
      console.log(s1);
      console.log(s2);
       	if ( s1 != s2 ) {
 	 		 alert("The two emails must match!!");
            return false;
  		}
}
function contact_me(){
    /* do document write with fname and date */
    check();
    alert("Sorry...This page is still under construction. Please visit at a later date");
    /* alert("This page is still under construction. Please visit at a later date"); */
}

