"use strict";

$('label').click(function () {
  $(this).toggleClass('blueColor');
});
$('.btn--1').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  $('.screen--1').fadeOut(100);
  $('body').addClass('page--inner');
  setTimeout(function () {
    $('.screen--2').fadeIn(1000);
  }, 100);
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    $('.screen--2 .spinner').fadeOut(180);
    $('.screen--2').addClass('checked');
  }, 3000);
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    $('.screen--2').fadeOut(100);
    $('.screen--3').fadeIn(1000);
  }, 4000);
});
$('.btn--2').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  $('.screen--3').fadeOut(200);
  setTimeout(function () {
    $('.screen--4').fadeIn(1000);
  }, 200);
}); //Questions

$('.question--1 label:not([data-error]), .question--2 label').click(function () {
  var currentQ = $(this).parents('.question'),
      nextQ = $(this).parents('.question').next();
  setTimeout(function () {
    currentQ.fadeOut(300);
  }, 1000);
  setTimeout(function () {
    nextQ.fadeIn(500);
  }, 1000);
});
$('[data-error]').click(function () {
  $(".question__error").toggleClass('hidden');
});
$('.question--3 label').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  setTimeout(function () {
    $('.screen--4').fadeOut(200);
  }, 300);
  setTimeout(function () {
    $('.screen--5').fadeIn(1000);
  }, 500);
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    $('.screen--5 .spinner').fadeOut(180);
    $('.screen--5').addClass('checked');
  }, 3300);
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    $('.screen--5').fadeOut(100);
    $('.screen--6').fadeIn(1000);
  }, 4300);
});