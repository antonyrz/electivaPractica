/**
 * Proyecto: TecnoIsekai - Blog Académico
 * Desarrollador: Antony Hernandez
 * Descripción: Manejo del cambio de tema (claro/oscuro) y control de la interfaz.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONFIGURACIÓN DEL MODO OSCURO ---
    // Buscamos el botón por su ID en español
    const botonTema = document.getElementById('theme-toggle');
    
    // Revisamos si el usuario ya había elegido el modo oscuro antes
    const temaGuardado = localStorage.getItem('tema-preferido');
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('dark-theme');
        cambiarIcono(true);
    }

    // Escuchamos el clic en el botón de la barra superior
    botonTema.addEventListener('click', () => {
        // Con toggle añadimos o quitamos la clase según corresponda
        document.body.classList.toggle('dark-theme');
        
        const esOscuro = document.body.classList.contains('dark-theme');
        
        // Guardamos la elección en el navegador para que no se borre al recargar
        localStorage.setItem('tema-preferido', esOscuro ? 'oscuro' : 'claro');
        
        // Cambiamos el emoji del botón
        cambiarIcono(esOscuro);
    });

    // Función auxiliar para cambiar el aspecto del botón
    function cambiarIcono(esOscuro) {
        if (esOscuro) {
            botonTema.textContent = '☀️';
            botonTema.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            botonTema.textContent = '🌓';
            botonTema.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    }

    // --- 2. EFECTO VISUAL PARA EL MENÚ (OPCIONAL) ---
    // Esto hace que si estás parado en una sección, se note en el menú superior
    const enlacesMenu = document.querySelectorAll('.opcion-menu');
    
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            // Quitamos la selección de todos los enlaces primero
            enlacesMenu.forEach(el => el.style.color = '');
            // Le damos el color de la marca solo al que se le hizo clic
            enlace.style.color = 'var(--color-marca)';
        });
    });
});