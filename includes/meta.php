<?php

$pageTitle = $pageTitle ?? SITE_NAME . " | Digital Growth Engine";
$pageDescription = $pageDescription ?? "AI-powered marketing & web solutions that scale brands.";
$pageKeywords = $pageKeywords ?? "Digital Marketing, Web Development, AI Automation";

?>

<title><?= htmlspecialchars($pageTitle) ?></title>
<meta name="description" content="<?= htmlspecialchars($pageDescription) ?>">
<meta name="keywords" content="<?= htmlspecialchars($pageKeywords) ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">