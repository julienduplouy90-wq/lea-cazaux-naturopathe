/* Site Lea Cazaux, naturopathe.
   Menu mobile, en-tete au defilement, apparitions discretes, annee du pied de
   page, formulaire de contact.
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

  /* --- en-tete : filet et ombre une fois la page defilee ----------------- */

  var entete = document.querySelector(".entete");
  if (entete) {
    var majEntete = function () {
      entete.classList.toggle("est-defile", window.scrollY > 8);
    };
    majEntete();
    window.addEventListener("scroll", majEntete, { passive: true });
  }

  /* --- apparitions au defilement ---------------------------------------- */
  /* La classe .anime a ete posee dans le <head>. On prend le relais ici :
     chaque bloc devient visible quand il entre dans l'ecran, avec un leger
     decalage entre voisins. Un bloc deja visible au chargement apparait tout
     de suite, sans attendre un defilement. */

  var racine = document.documentElement;

  if (racine.classList.contains("anime") && "IntersectionObserver" in window) {
    racine.dataset.anim = "ok";

    var groupes = [
      ".hero__grille > *",
      ".faits ul",
      ".grille > *",
      ".duo > *",
      ".numerotee > li",
      ".citations > .citation",
      ".rappel__grille > *",
      ".section > .wrap:not(.article) > .surtitre",
      ".section > .wrap:not(.article) > h1",
      ".section > .wrap:not(.article) > h2",
      ".section > .wrap:not(.article) > p",
      ".section > .wrap:not(.article) > .boutons",
      ".section > .wrap:not(.article) > .faq",
      ".section > .wrap:not(.article) > .citation",
      ".section > .wrap:not(.article) > .avertissement",
      ".section > .wrap:not(.article) > .tableau-enveloppe",
      ".section > .wrap:not(.article) > .liste-nue",
      ".section > .wrap:not(.article) > .coches"
    ];

    var blocs = [];
    groupes.forEach(function (selecteur) {
      Array.prototype.forEach.call(document.querySelectorAll(selecteur), function (el) {
        if (blocs.indexOf(el) === -1) { blocs.push(el); }
      });
    });

    /* decalage : au maximum trois crans, pour ne jamais faire attendre */
    blocs.forEach(function (el) {
      var voisins = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty("--retard", Math.min(voisins, 3) * 90 + "ms");
    });

    var reste = blocs.slice();

    var montrer = function (el) {
      el.classList.add("est-visible");
      var i = reste.indexOf(el);
      if (i !== -1) { reste.splice(i, 1); }
    };

    var observateur = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            montrer(entree.target);
            observateur.unobserve(entree.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    /* Filet de securite : si l'observateur ne repond pas (navigateur exotique,
       onglet en arriere-plan), un balayage au defilement fait le meme travail.
       Aucun bloc ne peut donc rester invisible. */
    var balayer = function () {
      var haut = window.innerHeight * 0.94;
      reste.slice().forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < haut && r.bottom > -50) { montrer(el); observateur.unobserve(el); }
      });
      if (!reste.length) { window.removeEventListener("scroll", balayer); }
    };

    blocs.forEach(function (el) { observateur.observe(el); });
    balayer();
    window.addEventListener("scroll", balayer, { passive: true });
    window.addEventListener("resize", balayer, { passive: true });
    setTimeout(balayer, 400);
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
