let shopModul = (function () {
    let balance = 1000
    let beerCount = 100;
    let beerPrice = 30
    let winePrice = 50
    let pepsiPrice = 20
    let wineCount = 50;
    let pepsiCount = 80;
    return {
        buyBeer: function (countbeer) {
            if (countbeer > beerCount) {
                beerCount = beerCount
                console.log('We dont have a beer')

            }
            else {

                beerCount -= countbeer
                balance += beerPrice * countbeer
            }
        },
        buyWine: function (countwine) {
            if (countwine > wineCount) {
                wineCount = wineCount
                console.log('We dont have a Wine')

            }
            else {
                wineCount -= countwine
                balance += winePrice * countwine
            }

        },
        buyPepsi: function (countpepsi) {
            if (countpepsi > pepsiCount) {
                pepsiCount = pepsiCount
                console.log('We dont have a Pepsi')
            }
            else {
                pepsiCount -= countpepsi
                balance += pepsiPrice * countpepsi
            }

        },
        getBeer: function () {
            return beerCount;
        },
        getWine: function () {
            return wineCount;
        },
        getPepsi: function () {
            return pepsiCount;
        },
        getBalance: function () {
            return balance
        },
        beerPrice: function () {
            return beerPrice
        },
        winePrice: function () {
            return winePrice
        },
        pepsiPrice: function () {
            return pepsiPrice
        },

    }
}());










(function () {
    let getId = x => document.getElementById(x)
    function Tovar(value, price, count) {
        this.value = value
        this.price = price;
        this.count = count;
        return {
            value: value,
            price: price,
            count: count
        }
    }
    function totalCost(num1, num2, num3) {
        num1 *= shopModul.beerPrice()
        num2 *= shopModul.winePrice()
        num3 *= shopModul.pepsiPrice()
        total = num1 + num2 + num3
        return total
    }
    let beer = [0]
    let wine = [0]
    let pepsi = [0]
    getId('dodat').onclick = function () {
        let name = document.getElementsByName('name')
        let countValue = document.getElementById('number').value;

        let b = shopModul.getBeer()
        let w = shopModul.getWine()
        let p = shopModul.getPepsi()
        for (let i = 0; i <= name.length; i++) {
            if (name[i].checked){
                let obj = Tovar(name[i].value, Number(countValue), ' шт')
                if (name[i].value === 'Пиво:'&& countValue!=0 && countValue <= Number(b)) {
                    beer.push(Number(countValue))
                    let arrBeer = beer.reduce((sum, val) => sum + val)
                    document.querySelector('.beer1').innerHTML = name[i].value + arrBeer + obj.count;
                    break;
                }
                else if (name[i].value === 'Пиво:' && countValue > Number(b)) {
                    alert(`На складі залишилось ${b} Beer`)
                    break;
                }
                else if (name[i].value === 'Вино:' && countValue < Number(w)) {
                    wine.push(Number(countValue))
                    let arrWine = wine.reduce((sum, val) => sum + val)
                    document.querySelector('.wine1').innerHTML = name[i].value + arrWine + obj.count;
                    break;
                }
                else if (name[i].value === 'Вино:' && countValue > Number(w)) {
                    alert(`На складі залишилось ${w} Wine`)
                    break;
                }
                else if (name[i].value === 'Пепсі:' && countValue < Number(p)) {
                    pepsi.push(Number(countValue))
                    let arrPepsi = pepsi.reduce((sum, val) => sum + val)
                    document.querySelector('.pepsi1').innerHTML = name[i].value + arrPepsi + obj.count;
                    break;
                }
                else if ((name[i].value === 'Пепсі:' && countValue > Number(p))) {
                    alert(`На складі залишилось ${p} Pepsi`)
                    break;
                }
            }
        }
        getId('form').reset()
    }
    getId('buy').addEventListener('click', function () {
        let sumBeer = beer.reduce((sum, val) => sum + val)
        let sumWine = wine.reduce((sum, val) => sum + val)
        let sumPepsi = pepsi.reduce((sum, val) => sum + val)
        getId('pivo').innerHTML = ''
        getId('wine').innerHTML = ''
        getId('pepsi').innerHTML = ''
        if (sumBeer > 0) {
            getId('pivo').innerHTML = `Пиво:${sumBeer} шт`
            shopModul.buyBeer(sumBeer)
            getId('P-eshkaBeer').innerHTML = shopModul.getBeer()
        }
        if (sumWine != 0) {
            getId('wine').innerHTML = `Вино:${sumWine} шт`
            shopModul.buyWine(sumWine)
            getId('P-eshkaWine').innerHTML = shopModul.getWine()
        }
        if (sumPepsi != 0) {
            getId('pepsi').innerHTML = `Пепсі:${sumPepsi} шт`
            shopModul.buyPepsi(sumWine)
            getId('P-eshkaPepsi').innerHTML = shopModul.getPepsi()
        }
        document.getElementById('totalCost').innerHTML = `Всього: ${totalCost(sumBeer, sumWine, sumPepsi)} гривень`
        getId('balance').innerHTML = shopModul.getBalance()
        beer = [0]
        wine = [0]
        pepsi = [0]
        document.querySelector('.beer1').innerHTML = ''
        document.querySelector('.wine1').innerHTML = ''
        document.querySelector('.pepsi1').innerHTML = ''
    })
}())
