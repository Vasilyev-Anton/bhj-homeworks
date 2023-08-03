'use strict';

const loader = document.getElementById("loader");
const items = document.getElementById("items");
let xml = new XMLHttpRequest();
xml.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xml.send();
xml.onreadystatechange = function () {
   if (xml.readyState === 4 && xml.status === 200) {
      loader.classList.remove("loader_active");

      const answer = JSON.parse(xml.responseText);
      const valutes = answer.response.Valute;

      for (let key in valutes) {
         let item = document.createElement("div");
         item.className = "item";
         let itemCode = document.createElement("div");
         itemCode.className = "item__code";
         itemCode.append(`${valutes[key].CharCode}`);
         let itemValue = document.createElement("div");
         itemValue.className = "item__value";
         itemValue.append(`${valutes[key].Value}`);
         let itemCurrency = document.createElement("div");
         itemCurrency.className = "item__currency";
         itemCurrency.append("руб.");

         item.appendChild(itemCode);
         item.appendChild(itemValue);
         item.appendChild(itemCurrency);

         items.appendChild(item);
      }
   }
}