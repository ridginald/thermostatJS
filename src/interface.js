$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperture();

  $('#current-city').change(function(){
      var city = $('#current-city').val();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q='
      var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
      var units = '&units=metric'

      $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      });
  });

  $('#temp-up').click(function() {
      thermostat.up();
      updateTemperture();
  })

  $('#temp-down').click(function() {
      thermostat.down();
      updateTemperture();
  })

  $('#temp-reset').click(function() {
      thermostat.resetTemperature();
      updateTemperture();
  })

  $('#psm-on').click(function() {
      thermostat.switchPowerSavingModeOn();
      $('#power-saving-status').text('on');
      updateTemperture();
  })

  $('#psm-off').click(function() {
      thermostat.switchPowerSavingModeOff();
      $('#power-saving-status').text('off')
      updateTemperture();
  })

  function updateTemperture() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.energyUsage());
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
  })

});
