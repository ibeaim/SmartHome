// api url
const api_url = "https://api.thingspeak.com/channels/2058472/feeds.json?api_key=5C0G163JZ7R9J2C4&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1;
      document.getElementById("field-2").innerHTML = obj.field2;
      document.getElementById("field-3").innerHTML = obj.field3;
    });
}, 1000);
