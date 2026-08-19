/* Site Lea Cazaux, naturopathe.
   Trois usages seulement : menu mobile, annee du pied de page, formulaire de contact.
   Rien d'essentiel ne depend de ce fichier : la page reste lisible sans lui. */

(function () {
  "use strict";

  /* --- menu mobile ------------------------------------------------------ */

  var burger = document.querySelector("[data-burger]");
  var nav = document.querySelector("[data-nav]");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("est-ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
      burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("est-ouvert")) {
        nav.classList.remove("est-ouvert");
        burger.setAttribute("aria-expanded", "false");
        burger.focus();
      }
    });
  }

  /* --- annee courante --------------------------------------------------- */

  var annee = document.querySelector("[data-annee]");
  if (annee) { annee.textContent = String(new Date().getFullYear()); }

  /* --- formulaire de contact -------------------------------------------- */

  var form = document.querySelector("[data-formulaire]");
  if (!form) { return; }

  var retour = form.querySelector("[data-retour]");

  function erreurDe(champ) {
    return form.querySelector('[data-erreur-de="' + champ.name + '"]');
  }

  function marquer(champ, message) {
    var bloc = champ.closest(".champ");
    var zone = erreurDe(champ);
    if (bloc) { bloc.classList.toggle("champ--erreur", Boolean(message)); }
    if (zone) { zone.textContent = message || ""; }
    champ.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function valider(champ) {
    var valeur = (champ.value || "").trim();

    if (champ.hasAttribute("required") && valeur === "") {
      marquer(champ, "Ce champ est nécessaire pour vous répondre.");
      return false;
    }
    if (champ.type === "email" && valeur !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valeur)) {
      marquer(champ, "Cette adresse e-mail ne semble pas valide.");
      return false;
    }
    if (champ.name === "message" && valeur !== "" && valeur.length < 20) {
      marquer(champ, "Quelques mots de plus m'aideront à vous répondre utilement.");
      return false;
    }
    marquer(champ, "");
    return true;
  }

  var champs = Array.prototype.slice.call(
    form.querySelectorAll("input[name], textarea[name], select[name]")
  ).filter(function (c) { return c.name !== "site"; });

  champs.forEach(function (champ) {
    champ.addEventListener("blur", function () { valider(champ); });
    champ.addEventListener("input", function () {
      if (champ.getAttribute("aria-invalid") === "true") { valider(champ); }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    /* piege a robots : rempli uniquement par un script automatique */
    var piege = form.querySelector('input[name="site"]');
    if (piege && piege.value !== "") { return; }

    var valide = true;
    var premierEnErreur = null;

    champs.forEach(function (champ) {
      if (!valider(champ)) {
        valide = false;
        if (!premierEnErreur) { premierEnErreur = champ; }
      }
    });

    if (!valide) {
      if (retour) { retour.hidden = true; }
      if (premierEnErreur) { premierEnErreur.focus(); }
      return;
    }

    var donnees = {};
    champs.forEach(function (champ) { donnees[champ.name] = (champ.value || "").trim(); });

    var endpoint = form.getAttribute("data-endpoint");

    if (endpoint) {
      envoyer(endpoint, donnees);
    } else {
      ouvrirMessagerie(donnees);
    }
  });

  function ouvrirMessagerie(d) {
    var sujet = "Demande de rendez-vous : " + (d.motif || "naturopathie");
    var corps = [
      "Bonjour,",
      "",
      d.message,
      "",
      "Motif : " + (d.motif || "non précisé"),
      "Format souhaité : " + (d.format || "non précisé"),
      "",
      d.prenom + " " + (d.nom || ""),
      "Téléphone : " + (d.telephone || "non communiqué"),
      "E-mail : " + d.email
    ].join("\n");

    var lien =
      "mailto:" + form.getAttribute("data-destinataire") +
      "?subject=" + encodeURIComponent(sujet) +
      "&body=" + encodeURIComponent(corps);

    window.location.href = lien;

    if (retour) {
      retour.hidden = false;
      retour.textContent =
        "Votre logiciel de messagerie vient de s'ouvrir avec le message pré-rempli. " +
        "Il ne reste qu'à l'envoyer. Si rien ne s'est ouvert, écrivez directement à " +
        form.getAttribute("data-destinataire") + ".";
    }
  }

  function envoyer(endpoint, donnees) {
    var bouton = form.querySelector('button[type="submit"]');
    if (bouton) { bouton.disabled = true; bouton.textContent = "Envoi en cours..."; }

    fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(donnees)
    })
      .then(function (r) {
        if (!r.ok) { throw new Error("réponse " + r.status); }
        form.reset();
        if (retour) {
          retour.hidden = false;
          retour.textContent = "Message bien reçu. Je vous réponds sous 48 heures ouvrées.";
        }
      })
      .catch(function () {
        ouvrirMessagerie(donnees);
      })
      .then(function () {
        if (bouton) { bouton.disabled = false; bouton.textContent = "Envoyer ma demande"; }
      });
  }
})();
