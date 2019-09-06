const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Malina", "Marysia", "Zosia", "Ewelinka", "Daria", "Urszula"];
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

// Math.floor - wyrzuca cyfry po przecinku
// Math floor - losuje randomową cyfrę

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, ze najlepsze będzie imię ${names[indexName]}`  
}
btn.addEventListener('click', nameGenerator)