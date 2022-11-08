function display() {
    var string1 = document.getElementById("sentence").value
    var ltr = document.getElementById("letter").value
    var string2
    var flag = 0

    for (var i = 0; i <= string1.length; i++) {
        if (string1[i] == ltr) {
            string2 = string1.slice((i + 1), string1.length)
            document.getElementById("display").innerHTML = string2
            flag = 1
            break
        }
    }
    if (flag == 0) {
        document.getElementById("display").innerHTML = "The letter does not exist in the sentence"
    }
}