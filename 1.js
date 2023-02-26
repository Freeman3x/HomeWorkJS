const c = Number.parseFloat(prompt("Сколько градусов по Цельсию?"));
alert(`По Фаренгейту будет ${F(c)}`);

function F(num){
    const a = (9/5) * num + 32
    return a.toFixed(1);
}