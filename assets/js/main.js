let herr = document.getElementById('herr')
let frau = document.getElementById('frau')
let alter = document.getElementById('alter')
let kgrösse = document.getElementById('kgrösse')
let gewicht = document.getElementById('gewicht')
let activity = document.getElementById('activity')
let grund = document.getElementById('grund')
let gesamt = document.getElementById('gesamt')
let warning = document.getElementById('warning')

berechneKalorien = () => {
  warning.innerHTML = ""
  let gesamtUmsatz;
  let grundUmsatz;
  if (herr.checked) {
    grundUmsatz = (664.7 + (13.7 * gewicht.value) + (5 * kgrösse.value) - (6.8 * alter.value)).toFixed(1)
    grund.innerHTML = grundUmsatz + " kcal"

    switch (activity.value) {
      case "1":
        gesamtUmsatz = (grundUmsatz * 0.95).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "2":
        gesamtUmsatz = (grundUmsatz * 1.2).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "3":
        gesamtUmsatz = (grundUmsatz * 1.5).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "4":
        gesamtUmsatz = (grundUmsatz * 1.7).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "5":
        gesamtUmsatz = (grundUmsatz * 1.9).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "6":
        gesamtUmsatz = (grundUmsatz * 2.2).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      default:
        warning.innerHTML = "Bitte wählen Sie eine Aktivitätsklasse aus!"
    }
  } else {
    grundUmsatz = (655.1 + (9.6 * gewicht.value) + (1.8 * kgrösse.value) - (4.7 * alter.value)).toFixed(1)
    grund.innerHTML = grundUmsatz + " kcal"

    switch (activity.value) {
      case "1":
        gesamtUmsatz = (grundUmsatz * 0.95).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "2":
        gesamtUmsatz = (grundUmsatz * 1.2).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "3":
        gesamtUmsatz = (grundUmsatz * 1.5).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "4":
        gesamtUmsatz = (grundUmsatz * 1.7).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "5":
        gesamtUmsatz = (grundUmsatz * 1.9).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      case "6":
        gesamtUmsatz = (grundUmsatz * 2.2).toFixed(1)
        gesamt.innerHTML = gesamtUmsatz + " kcal"
        break;
      default:
        warning.innerHTML = "Bitte wählen Sie eine Aktivitätsklasse aus!"
    }
  }
}
