const addProduct = () => {
  const ul = document.querySelector("ul"); //punto al selettore <ul>

  const li = document.createElement("li"); //creo elemento <li>

  const checkbox = document.createElement("input"); //creo elemento "input"
  checkbox.type = "checkbox"; //imposto il tipo "checkbox" a "input"

  li.appendChild(checkbox); //aggiungo al tag <li> creato il checkbox creato

  const input = document.querySelector("input"); //punto al selettore creato "input"

  const inputValue = input.value; //creo costante che prende il valore inserito nel tag HTML <input>
  li.appendChild(document.createTextNode(inputValue)); //aggiungo al tag <li> il valore inserito nel campo del tag HTML <input> tramite creazione di un nodo di testo

  ul.appendChild(li); //aggiungo al tag <ul> il <li> creato

  input.value = ""; //resetto il valore originale nel placeholder (...)
};
