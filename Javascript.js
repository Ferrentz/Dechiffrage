<script>

        function cesar(texte, decalage, dechiffrement = false) {
            let alphabetType = document.querySelector('input[name="alphabet"]:checked').value;
            let decal = dechiffrement ? -decalage : decalage;
            return texte.split('').map(char => {
                if (alphabetType === "fr" && char.match(/[a-zA-Z]/)) {
                    let base = char === char.toUpperCase() ? 65 : 97;
                    return String.fromCharCode((char.charCodeAt(0) - base + decal + 26) % 26 + base);
                } else if (alphabetType === "fr_digits" && char.match(/[a-zA-Z0-9]/)) {
                    let base = char.match(/[A-Z]/) ? 65 : char.match(/[a-z]/) ? 97 : 48;
                    let range = char.match(/[0-9]/) ? 10 : 26;
                    return String.fromCharCode((char.charCodeAt(0) - base + decal + range) % range + base);
                } else if (alphabetType === "latin" && char.match(/[A-Z]/)) {
                    let alphabet = "ABCDEFGHIKLMNOPQRSTVXYZ";
                    let index = alphabet.indexOf(char.toUpperCase());
                    if (index !== -1) {
                        return alphabet[(index + decal + 23) % 23];
                    }
                } else if (alphabetType === "ascii" && char.charCodeAt(0) >= 0 && char.charCodeAt(0) <= 127) {
                    return String.fromCharCode((char.charCodeAt(0) + decal + 128) % 128);
                }
                return char;
            }).join('');
        }

        function chiffrerCesar() {
            let texte = document.getElementById("inputText").value;
            let decalage = parseInt(document.getElementById("decalage").value);
            document.getElementById("output").innerText = cesar(texte, decalage, false);
        }

        function decodeCesar() {
            let texte = document.getElementById("inputText").value;
            let decalage = parseInt(document.getElementById("decalage").value);
            document.getElementById("output").innerText = cesar(texte, decalage, true);
        }
    </script>
