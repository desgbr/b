let height,width,depth,price,resualt, tax,res;

function calc(){
    height = Number(document.querySelector('.height').value);
    width = Number(document.querySelector('.width').value);
    depth = Number(document.querySelector('.depth').value);
    price = Number(document.querySelector('.price').value);
    resualt = document.querySelector(".resualt");
    res = (((height * width) * 2) + ((height * depth) * 2) + ((depth * width) * 2)) / 10000
    tax =  (res * price) * .15;
    resualt.innerHTML = `<table><tr>
            <td>مقاس البوكس</td>
            <td>متر ${res}</td>
        </tr>
        <tr>
            <td>سعر البوكس</td>
            <td>ريال ${res * price} </td>
        </tr>
        <tr>
            <td>قيمة الضريبة</td>
            <td>ريال ${tax.toFixed(2)}</td>
        </tr>
        <tr>
            <td>الاجمالي</td>
            <td>ريال ${Number(tax.toFixed(2)) + (res * price)}</td>
        </tr>
        </table>
        `
};