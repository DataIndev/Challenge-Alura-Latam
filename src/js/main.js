'strict mode'

window.addEventListener("load", () => {

    document.querySelector("body").style.backgroundColor = "#07010c"

    //Declarations

    const btnEncrypt = document.querySelector("#encrypt")
    const btnDecrypt = document.querySelector("#decrypt")
    const btnCopy = document.querySelector("#copy")
    const textOut = document.querySelector("#messageOut")
    const message = document.querySelector("#messageToEncrypt")
    const textCopied = document.querySelector("#textCopied")
    textCopied.style.display = "none"
    btnEncrypt.disabled = true
    //btnDecrypt.disabled = true

    //Patron para Encriptar
    const code = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }

    //Patron para Descriptar
    const decode = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    }

    //Encriptado del Mensaje
    function encrypt(param) {
        return param.replace(/a|e|i|o|u/g, char => code[char])
    }

    //Desencritado del Mensaje
    function decrypt(param) {
        return param.replace(/ai|enter|imes|ober|ufat/g, char => decode[char])
    }

    //Validación del texto
    function validation(param) {
        let reg = /^[a-zñ]*[a-zñ \s]*[a-zñ]$/g
        return reg.test(param)
    }

    //Evento boton encriptar
    btnEncrypt.addEventListener("click", e => {
        e.preventDefault()
        textOut.value = encrypt(message.value)

    })

    //Evento boton desencriptar
    btnDecrypt.addEventListener("click", e => {
        e.preventDefault()
        textOut.value = decrypt(message.value)
    })

    //Evento copiado del texto
    btnCopy.addEventListener("click", e => {
        e.preventDefault()
        textOut.value.length <= 0 ? textCopied.style.display = "none" : textCopied.style.display = "inline"
        setTimeout(() => textCopied.style.display = "none", 2000)
        navigator.clipboard.writeText(textOut.value)

    })

    //Evento input
    message.addEventListener("input", (e) => {
        validation(message.value) == true ? btnEncrypt.disabled = false : btnEncrypt.disabled = true
        //validation(message.value) == true ? btnDecrypt.disabled = false : btnDecrypt.disabled = true
        
        
        
    })

})