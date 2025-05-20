import { isLogged } from "./modules/login";

const signButton = document.getElementById('signInButton') as HTMLButtonElement

isLogged(false)
if (signButton) {
    signButton.addEventListener('click', (event) => {
      event.preventDefault(); // Impede o comportamento padrão do formulário
      isLogged(true);
    });
  }