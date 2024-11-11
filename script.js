// التحقق من صحة نموذج حجز المواعيد
function validateForm() {
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (name === "" || service === "" || date === "" || time === "") {
        alert("يرجى ملء جميع الحقول.");
        return false;
    }

    alert("تم حجز الموعد بنجاح!");
    return true;
}
