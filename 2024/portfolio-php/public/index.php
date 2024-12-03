<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nazareno Tognoli Portafolio</title>
    <link rel="stylesheet" type="text/css" href="/styles/normalize.css">
    <link rel="stylesheet" type="text/css" href="/styles/main.css">
    <link rel="stylesheet" type="text/css" href="/styles/home.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
</head>
<body>
<div id="body" class="scrollbar-custom">
    <img src="assets/background.png" id="background">
    <header>
        <div class="left-div">
            <a href="/"><img src="assets/dev.png" title="Icon made by Roundicons from flaticon.com"></a>
        </div>
        <div class="right-div">
            <nav class="header-nav">
                <span><a>lang:es</a></span>
                <span><a href="/about">Sobre mi</a></span>
                <span><a href="/projects">Proyectos</a></span>
                <span id="contact-btn"><a href="/services">Servicios</a></span>
            </nav>
            <button class="header-button-mobile">
                <img src="assets/menu.png" title="Icon made by azmianshori from flaticon.com">
            </button>
            <nav class="nav-mobile"></nav>
        </div>
    </header>
    <main>
        <?php 
            include '../config/router.php';
        ?>
    </main>
    <script type="text/javascript" src="scripts/home.js"></script>
</div>
</body>
</html>