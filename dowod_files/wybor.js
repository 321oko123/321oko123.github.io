// Funkcja do zamknięcia wszystkich sekcji
function closeAll() {
  $('#wybordokumentu').hide();
  $('#danedowodu').hide();
  $('#danemdowodu').hide();
  $('#menu').hide();
  $('body').removeClass('ovh');  // Usuwanie blokady przewijania
}

// Funkcja powrotu do sekcji wyboru dokumentu
function goBackToWybordokumentu() {
  $('#wybordokumentu').show();     // Pokazuje sekcję wyboru dokumentu
  $('#danedowodu').hide();         // Ukrywa sekcję danych dowodu
  $('#danemdowodu').hide();        // Ukrywa sekcję danych m-dowodu
  $('#menu').hide();               // Ukrywa menu
  $('body').removeClass('ovh');    // Usuwanie blokady przewijania
}

// Funkcja wywoływana w celu pokazania sekcji wybrania dokumentu
function wybordokumentumenu() {
  window.scrollTo({
      top: 0
  });
  $('body').toggleClass('ovh');
  $('#wybordokumentu').toggle();
  $('#menu').toggle();
}

// Funkcja do pokazania danych dowodu
function danedowodowe() {
$('#wybordokumentu').hide();
$('#danedowodu').show();
}

// Funkcja do pokazania danych m-dowodu
function danemdowodowe() {
$('#wybordokumentu').hide();
$('#danemdowodu').show();
}

// Nowa funkcja do wyświetlania danych m-dowodu
function showDanemdowodu() {
$('#wybordokumentu').hide();      // Ukrywa sekcję wyboru dokumentu
$('#danemdowodu').show();        // Pokazuje sekcję danych m-dowodu
}

// Funkcja do zamknięcia wszystkich sekcji
function zamknij2() {
$('#danedowodu').hide();
$('#danemdowodu').hide();
$('#menu').hide();
$('body').removeClass('ovh');
}

// Funkcja powrotu do sekcji wyboru dokumentu
function wroc() {
$('#wybordokumentu').show();
$('#danedowodu').hide();
$('#danemdowodu').hide();
}