document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const confirmationMessage = document.createElement('div');
    confirmationMessage.style.color = 'green';
    confirmationMessage.style.fontWeight = 'bold';
    confirmationMessage.style.marginTop = '10px';
    confirmationMessage.style.display = 'none';
    form.appendChild(confirmationMessage);
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío tradicional
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Puedes hacer algo con los datos, como validarlos o enviarlos
      console.log("Nombre:", name);
      console.log("Email:", email);
      console.log("Mensaje:", message);
  
      // Mostrar el mensaje de confirmación
      confirmationMessage.textContent = '¡Gracias por tu aporte, ' + name + '! Me comunicare pronto.';
      confirmationMessage.style.display = 'block';
  
      // Limpiar el formulario
      form.reset();
    });
  });
  

