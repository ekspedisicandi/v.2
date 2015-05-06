(function(){
    //por defecto cargar un punto x en el mapa
    showmap(31.869784,-116.626854);  
    //si es posible usar 'geolocation', obtener las coordenadas
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(
        function(x){
          showmap(x.coords.latitude,x.coords.longitude);
        },
        function(error){
          // :( mostrar mensaje de error
          alert(error.message);
       })
    }
})();

   
//mostrar el mapa
function showmap(lt,lg){
  //centrarlo
  var centrado=new google.maps.LatLng(lt,lg);
  //opciones del mapa
  var config={
    zoom:15,
    center:centrado,
    mapTypeId:google.maps.MapTypeId.ROADMAP   //HYBRID|SATELLITE|TERRAIN|ROADMAP
  };
  //crear el mapa
  var mapa=new google.maps.Map(document.getElementById("mapa"),config);
  //y agregar un marcador
  var marker=new google.maps.Marker({
      position:centrado,
      map:mapa,
      title:'Mi posicion'
  })
}