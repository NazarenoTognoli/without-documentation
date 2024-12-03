<?php
// Obtener la ruta de la URL solicitada
function returnRoute() {
    $route = strtok($_SERVER['REQUEST_URI'], '?'); //DIVIDE LA URL ENTRE "?"
    $route = trim($route, '/');
    if ($route !== '') {
        return $route;
    } else {
        return '/';
    }
}    
switch (returnRoute()) {
    case '/':
        include '../src/views/home.php';
        break;
    case 'about':
        include '../src/views/about.php';
        break;
    case 'projects':
        include '../src/views/projects.php';
        break;
    case 'services':
        include '../src/views/services.php';
        break;
    default:
        include '../src/views/not-found.php';
        break;
}
?>