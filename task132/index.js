let describeAge=(age)=>age<=12?"You're a(n) kid":(age>=13&&age<=17)?"You're a(n) teenager":(age>=18&&age<=64)?"You're a(n) adult":"You're a(n) elderly"
function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}