function getPlanetName() {
    let num1 = Number(document.getElementById("planet1").value);
    let result = "";
         
    switch (true) {
        case (num1 >= 0 && num1 <= 100):
            result = "Lifeline Consumer - Discounted electricity rates";
            break;
            case (num1 >= 101 && num1 <= 200):
            result = "Low Consumption - Normal residential rate";
            break;
            case (num1 >= 201 && num1 <= 300):
            result = "Average Consumption - Typical electricity usage";
            break;
            case (num1 >= 301 && num1 <= 500):
            result = "High Consumption - Higher electricity usage";
            break;
            case (num1 > 500):
            result = "Very High Consumption - Heavy electricity user";
            break;
            default:
            result = "Please enter a valid number";
    }

    document.getElementById("display1").innerHTML = result;
}
