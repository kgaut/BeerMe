<?php
require('vendor/autoload.php');

$app = new Silex\Application();

$app->get('/beers', function () {
  $output = '';
  foreach ($blogPosts as $post) {
    $output .= $post['title'];
    $output .= '<br />';
  }
  return $output;
});