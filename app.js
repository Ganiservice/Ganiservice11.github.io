// Remplace par le numéro WhatsApp de Gani Service (indicatif + numéro, sans + ni espaces)
var NUMERO_WHATSAPP = "22676998884";

document.querySelectorAll("[data-wa]").forEach(function (a) {
  a.href = "https://wa.me/" + NUMERO_WHATSAPP;
});

document.querySelectorAll("form[data-op]").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var lignes = ["Bonjour Gani Service, je veux faire un " + f.dataset.op + "."];
    f.querySelectorAll("[data-label]").forEach(function (c) {
      lignes.push(c.dataset.label + " : " + c.value);
    });
    window.open("https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(lignes.join("\n")), "_blank", "noopener");
  });
});
