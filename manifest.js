fetch('manifest.json')
  .then(response => response.json())
  .then(data => {
    // Trabaja con los datos del manifiesto (data)
    console.log(data);
  })
  .catch(error => {
    console.error('Error al cargar el archivo de manifiesto:', error);
  });
