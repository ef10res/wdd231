document.addEventListener('DOMContentLoaded', function () {
    var timestampField = document.getElementById('timestampField');
    if (timestampField) {
        // Get the current timestamp (milliseconds since Unix epoch)
        var timestamp = Date.now().toISOString();
       
        timestampField.value = timestamp;
    }
});