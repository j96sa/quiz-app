const d = document;

export const Q2 = ()=>{
    RenderQ2();
};

const RenderQ2 = ()=>{
    d.getElementById("root").innerHTML = `
        <p>Cual de estos descubrtimientos fue hecho por Albetr Einstein . Charles Darwin . Stephen Hawking . Nikola Tesla . Isaac Newton . Sigmund Freud:</p>

        <ul>
            <li>La teoria de la relatividad</li>
            <li>La teoria de la evolucion de las especies</li>
            <li>La teoria del todo</li>
            <li>El Motor de induccion de corriente alterna</li>
            <li>La Ley de la Gravedad</li>
            <li>El inconsciente dinamico</li>
        </ul>
    `;
}