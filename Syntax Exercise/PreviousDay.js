function PreviousDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day - 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDay = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDay}`);
}

PreviousDay(2016, 9, 30);
PreviousDay(2015, 5, 10);
PreviousDay(2015, 3, 1);