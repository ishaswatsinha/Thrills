<?php require_once __DIR__ . '/../config/config.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<?php include 'meta.php'; ?>
<?php include 'schema.php'; ?>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?= BASE_URL ?>assets/css/style.css">
<link rel="stylesheet" href="<?= BASE_URL ?>assets/css/responsive.css">

<!-- GSAP -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script> -->
<!-- Font Awesome  -->
 <script src="https://kit.fontawesome.com/743643a49a.js" crossorigin="anonymous"></script>
</head>

<body>
<div class="cursor"></div>
<div class="cursor-follower"></div>

<header class="navbar">
<div class="container nav-wrapper">

<div class="logo">
<!-- <a href="<?= BASE_URL ?>">Thrills<span>Tech</span></a> -->
 <img src="https://thrillstechnologies.in/assets/img/thrills-logo.png" alt="logo" width="80px"">
</div>

<div class="menu-toggle">
  <span></span>
  <span></span>
  <span></span>
</div>

<nav class="nav-menu">
  <ul>
    <li><a href="<?= BASE_URL ?>">Home</a></li>
    <li><a href="<?= BASE_URL ?>about.php">About</a></li>
    <li><a href="<?= BASE_URL ?>services.php">Services</a></li>
    <li><a href="<?= BASE_URL ?>case-studies.php">Work</a></li>
    <li><a href="<?= BASE_URL ?>contact.php" class="btn-nav">Contact</a></li>
  </ul>
</nav>

<div class="menu-overlay"></div>

</div>
</header>