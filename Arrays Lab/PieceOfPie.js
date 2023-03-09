function PieceOfPie(pies, start, end) {
    let startIndex = pies.indexOf(start);
    let endIndex = pies.indexOf(end);
    return pies.slice(startIndex, endIndex + 1);
}

console.log(PieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
console.log(PieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));