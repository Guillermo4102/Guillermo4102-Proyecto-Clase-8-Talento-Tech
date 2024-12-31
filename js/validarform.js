
  const formulario = document.getElementById('form');


  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const centroqueja = document.getElementById('centroqueja').value.trim();


    if (nombre === '') {
      alert('El nombre es obligatorio.');
      return;
    }
    if (nombre <2) {
        alert('El nombre es demasiado corto.');
        return;
      }
    
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      alert('El nombre solo debe contener letras.');
      return;
    }
    
    if (email === '') {
      alert('El correo electrónico es obligatorio.');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    
    if (centroqueja === '') {
      alert('Este campo no puede estar vacio.');
      return;
    }
    
    if (centroqueja.length <30) {
      alert('Este campo debe tener al menos 30 caracteres.');
      return;
    }
    

    alert('Formulario enviado con éxito.');
    formulario.submit();
  });