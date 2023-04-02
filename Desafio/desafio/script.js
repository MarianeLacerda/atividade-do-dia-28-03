function minhaFuncao(){
    const inputEmail = document.getElementById("inputEmail").value;
    const inputSenha = document.getElementById("inputSenha").value;
    if(inputEmail===""||inputSenha===""){
    alert("Preencha todos os campos");
    }
    else{
        console.log("Email:", inputEmail);
        console.log("Senha:", inputSenha);
    }
}