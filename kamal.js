function calc(ch) {
    if (ch == "=") {
        document.form1.text1.value = eval(document.form1.text1.value);
    } else {
        if (ch == "C") {
            document.form1.text1.value = "";
        } else {
            document.form1.text1.value += ch;
        }
    }
}