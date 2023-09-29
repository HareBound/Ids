function generateRandomId(length) {
   const characters = '0123456789';
   let id = '';
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
   }
   return id;
}

// Exemplo de uso para gerar um ID de 8 caracteres:
const randomId = generateRandomId(12);
console.log(randomId);