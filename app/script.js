function simulateAttack() {
    document.getElementById("output").innerHTML =
        "⚠️ Suspicious login detected: Multiple failed attempts from unknown location.";
}

function applyMFA() {
    document.getElementById("output").innerHTML =
        "✅ MFA Enabled: Unauthorized access blocked.";
}
