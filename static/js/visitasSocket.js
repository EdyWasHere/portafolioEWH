document.addEventListener('DOMContentLoaded', function () {
    const visitCounterElement = document.getElementById('visit-counter');
    
    // Establecer la conexión WebSocket
    const socket = new WebSocket('ws://' + window.location.host + '/ws/visit_counter/');

    socket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        
        // Actualizar el contador de visitas
        if (data.type === 'visit_count') {
            visitCounterElement.textContent = 'Visitas: ' + data.visits;
        }
    };

    socket.onclose = function(e) {
        console.error('WebSocket closed unexpectedly');
    };
});
