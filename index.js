const first = prompt('Твій рік народження?');

function age(first) {
    if (first) {
        result = first;
    } else {
        result = 'Шкода, що Ви не захотіли ввести свій вік...';
    }
    return result
}

const second = prompt('В якому місті ти живеш?');

const third = prompt('Твій олюблений вид спорту?');

function city(second) {
    if (second === 'Київ') {
        result = 'Ти живеш у столиці України';
    } else if (second === 'Лондон') {
        result = 'Ти живеш у столиці Великої Британії';
    } else if (second === 'Вашингтон') {
        result = 'Ти живеш у столиці Америки';
    } else if (second === null) {
        result = 'Шкода, що Ви не захотіли ввести своє місто...';
    } else if (second === '') {
        result = 'Шкода, що Ви не захотіли ввести своє місто...';
    }
    else (result = (`${'Ти живеш  місті'} ${second}`));
    return result;
}

function sport(third) {
    if (third === 'Формула 1') {
        result = 'Круто! Хочеш стати як Макс Ферстаппен ?';
    } else if (third === 'Теніс') {
        result = 'Круто! Хочеш стати як Карлос Алькарас?';
    } else if (third === 'Гольф') {
        result = 'Круто! Хочеш стати як Скотти Шеффлер?';
    } else if (second === null || second === '') {
        result = 'Шкода, що Ви не захотіли ввести свій улюблений спорт...';
    }
    else (result = (`${'Хочеш стати чемпіоном?'} ${third}`));
    return result
}
    
    
const show = alert(`
${age (first)}
${city(second)}
${sport(third)}
`
);
    
    




    

    








