let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value)

    let inputDate = birthDate.getDate();
    let inputMonth = birthDate.getMonth() + 1;
    let inputYear = birthDate.getFullYear();

    let today = new Date();

    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let d3, m3, y3 ;

    y3 = currentYear - inputYear;

    if(currentMonth >= inputMonth){
        m3 = currentMonth - inputMonth;
    }else{
        y3--;
        m3 = 12 + currentMonth - inputMonth;
    }

    if(currentDate >= inputDate){
        d3 = currentDate - inputDate;
    }else{
        m3--;
        d3 = getDayInMonth(inputYear, inputMonth) + currentDate - inputDate;
    }
    // if(m3 < 0){
    //     m3 = 11;
    //     y3--;
    // }
    console.log(y3,m3,d3)
    result.innerHTML = `you are <span>${y3}</span> years <span>${m3}</span> months and 
    <span>${d3}</span> days old.`;
}

function getDayInMonth(year, month){
    return new Date(year, month, 0).getDate();

}