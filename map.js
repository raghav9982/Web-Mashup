<pre>
 // Put your zillow.com API key here
var zwsid = &quot;X1-ZWz1b3e2v448p7_64j9s&quot;;
var arr1 = [];
var address1;
var value;
var value1;
var value3;
var value4;
var value5;
var xml;
var request = new XMLHttpRequest();
var infowindow;
var map;
/* infowindow = new google.maps.InfoWindow({
      content: addr

}); */

var marker;
/* var  geocode = new google.maps.Geocoder();

 var mapProp = {
 center:new google.maps.LatLng(32.75, -97.13),
  zoom:16,

  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById(&quot;googleMap&quot;)
  ,mapProp);
*/


function xml_to_string ( xml_node ) {
   if (xml_node.xml)
      return xml_node.xml;
   var xml_serializer = new XMLSerializer();
   return xml_serializer.serializeToString(xml_node);
}

/*
 function initialize () {
 geocoder = new google.maps.Geocoder();
  var mapProp = {
  center:new google.maps.LatLng(32.75, -97.13),
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
   map=new google.maps.Map(document.getElementById(&quot;googleMap&quot;),mapProp);

google.maps.event.addListener(map, 'click', function(event) {
  latlng =  event.latLng;
 RGC(latlng);
});

}
// google.maps.event.addDomListener(window, 'load', initialize);

*/


function cmn1 (addr,value)
{

/*
var contentString = '&lt;div id=&quot;content&quot;&gt;'+
'&lt;b&gt;z Estimate&lt;/b&gt;'+value+&quot;&lt;br&gt;&quot;+
'&lt;b&gt;Address&lt;/b&gt;'+addr+&quot;&lt;br&gt;&quot;;



 infowindow = new google.maps.InfoWindow({
      content: contentString
 });

*/
/*
var mapProp = {
 center:new google.maps.LatLng(32.75, -97.13),
 zoom:16,
 mapTypeId:google.maps.MapTypeId.ROADMAP
  };
 map=new google.maps.Map(document.getElementById(&quot;googleMap&quot;) ,mapProp);
 */
geocoder.geocode( { 'address': addr}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
// alert(results[0].geometry.location);
// for(var i = 0; i &lt; 5; i++)
// {
       marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
          });

arr1.push(marker);

var contentString = '&lt;div id=&quot;content&quot;&gt;'+
'&lt;b&gt;z Estimate&lt;/b&gt;'+value+&quot;&lt;br&gt;&quot;+
'&lt;b&gt;Address&lt;/b&gt;'+addr+&quot;&lt;br&gt;&quot;;
 infowindow = new google.maps.InfoWindow({
      content: contentString
 });


// arr1.push(marker);
// }
 infowindow.open(map,marker);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });




// RGCdng(value1+&quot;,&quot;+&quot;value3&quot;+&quot;,&quot;+value4+&quot; &quot;+value5)
}



function displayResult () {


    if (request.readyState == 4){


xml = request.responseXML.documentElement;
// var address1 = document.getElementById('address').value;
// alert(address1);
        value = xml.getElementsByTagName(&quot;zestimate&quot;)[0].getElementsByTagName(&quot;amount&quot;)[0].innerHTML;
        value1 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;street&quot;)[0].innerHTML;
value3 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;zipcode&quot;)[0].innerHTML;
value4 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;city&quot;)[0].innerHTML;
value5 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;state&quot;)[0].innerHTML;
cmn1(value1+&quot;,&quot;+value4+&quot;,&quot;+value5+&quot; &quot;+value3,value);

document.getElementById(&quot;output1&quot;).appendChild(document.createTextNode(&quot;Address :&quot;+value1+&quot;,&quot;+value4+&quot;,&quot;+value5+&quot; &quot;+value3+&quot;\n&quot;+&quot;zestimatevalue:&quot;+value+&quot;\n&quot;));

// GC(value,value1,value3,value4,value5);

}
}

function displayResult1 ()
{
  // alert(addr);


  if (request.readyState == 4)
{


  xml = request.responseXML.documentElement;
 value = xml.getElementsByTagName(&quot;zestimate&quot;)[0].getElementsByTagName(&quot;amount&quot;)[0].innerHTML;
// alert(value);

 value1 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;street&quot;)[0].innerHTML;
 value3 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;zipcode&quot;)[0].innerHTML;
 value4 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;city&quot;)[0].innerHTML;
 value5 = xml.getElementsByTagName(&quot;address&quot;)[1].getElementsByTagName(&quot;state&quot;)[0].innerHTML;

cmn1(value1+&quot;,&quot;+value4+&quot;,&quot;+value5+&quot; &quot;+value3,value);
document.getElementById(&quot;output1&quot;).appendChild(document.createTextNode(&quot;Address :&quot;+value1+&quot;,&quot;+value4+&quot;,&quot;+value5+&quot; &quot;+value3+&quot;\n&quot;+&quot;zestimatevalue:&quot;+value+&quot;/n&quot;));

}
}


function send (addr)
{
//  alert(addr);
     var ltlg = addr.split(&quot;,&quot;);
// alert(ltlg[0]+&quot; &quot;+ltlg[1]+&quot; &quot;+ltlg[2]);
request.onreadystatechange = displayResult1;
        request.open(&quot;GET&quot;,&quot;proxy.php?zws-id=&quot;+zwsid+&quot;&amp;address=&quot;+ltlg[0]+&quot;&amp;citystatezip=&quot;+ltlg[1]+ltlg[2]);
        request.withCredentials = &quot;true&quot;;
        request.send(null);
        }



function RGC(latlng)
{

geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK)
 {
      if (results[0])
        {
                send(results[0].formatted_address);
                 // alert(results[0].formatted_address);
        }
        else
        {
        alert('No results found');
        }
}
});
}



 function initialize () {
 geocoder = new google.maps.Geocoder();
  var mapProp = {
  center:new google.maps.LatLng(32.75, -97.13),
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
   map=new google.maps.Map(document.getElementById(&quot;googleMap&quot;),mapProp);

google.maps.event.addListener(map, 'click', function(event) {
  latlng =  event.latLng;
 RGC(latlng);
});
document.getElementById(&quot;output1&quot;).innerHTML = &quot;&quot;;
}



function sendRequest () {
request.onreadystatechange = displayResult;
 address1 = document.getElementById(&quot;address&quot;).value;
// alert(address1);
var res = address1.split(&quot;,&quot;);
    request.open(&quot;GET&quot;,&quot;proxy.php?zws-id=&quot;+zwsid+&quot;&amp;address=&quot;+res[0]+&quot;&amp;citystatezip=&quot;+res[1]+res[2]);
    request.withCredentials = &quot;true&quot;;
    request.send(null);
}
    </pre>
