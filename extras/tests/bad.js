function cool() {
    document.getElementById("demo").innerHTML = "<i>21.</i> <br> you stupid."
}
function cookie_test(cname, cvalue, exdays){
    const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  if (document.cookie == "yes") {
    cookie_test_firsttime();}
}
function cookie_test_firsttime(cname, cvalue, exdays){

}