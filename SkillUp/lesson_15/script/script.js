let month = prompt('Введіть місяць','');

if ((month == "грудень") || (month == "січень") ||(month == "лютий")) {
    alert('Зараз зима')
} else if ((month == "березень") || (month == "квітень") ||(month == "травень")) {
    alert('Зараз весна')
} else if ((month == "червень") || (month == "липень") ||(month == "серпень")) {
    alert('Зараз літо')
} else if ((month == "вересень") || (month == "жовтень") ||(month == "листопад")) {
    alert('Зараз осінь')
} else {alert('Ви ввели не місяць')};

            // ((month == "грудень") || (month == "січень") ||(month == "лютий")) ? alert("Зараз зима") :
            // ((month == "березень") || (month == "квітень") ||(month == "травень")) ? alert("Зараз весна") :
            // ((month == "червень") || (month == "липень") ||(month == "серпень")) ? alert("Зараз літо" ):
            // ((month == "вересень") || (month == "жовтень") ||(month == "листопад")) ? alert("Зараз осінь"):
            // alert("Ви ввели не місяць")
