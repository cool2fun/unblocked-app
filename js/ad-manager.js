fetch('js/ad-config.json')
  .then(response => response.json())
  .then(adConfig => {
    document.querySelectorAll('.ad-container').forEach(container => {
      const slotId = container.getAttribute('data-ad-slot');
      if (adConfig[slotId]) {
        container.innerHTML = adConfig[slotId];
      }
    });
  })
  .catch(error => console.error('Error loading ad config:', error));