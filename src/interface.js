$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperture();

    $('#temp-up').click(function() {
        thermostat.up();
        updateTemperture();
    });

    $('#temp-down').click(function() {
        thermostat.down();
        updateTemperture();
    });

    $('#temp-reset').click(function() {
        thermostat.resetTemperature();
        updateTemperture();
    });

    $('#psm-on').click(function() {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').text('on');
        updateTemperture();
    });

    $('#psm-off').click(function() {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').text('off')
        updateTemperture();
    });

    function updateTemperture() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    };

});
