function Main(){
    
    const form = document.querySelector('.form');
    let IMC;
    
    const funcoes = {

        recebeEvento(evento)
        {
            evento.preventDefault();
            const peso = parseFloat(form.querySelector('#peso').value);
            const altura = parseFloat(form.querySelector('#altura').value);
            
            IMC = funcoes.calculaIMC(peso,altura);
            
            funcoes.setResultado(IMC);
            
            console.log(IMC);
        },

        calculaIMC(peso, altura)
        {
            return Number(peso/(altura ** 2));
        },

        setResultado (IMC)
        {
            let resultado;

            if(IMC < 18.5)          resultado = 'Abaixo do peso'; 
            else if(IMC <= 24.9)    resultado = 'Peso Normal';            
            else if(IMC <= 29.9)    resultado = 'Sobrepeso';
            else if(IMC <= 34.9)    resultado = 'Obesidade grau 1';        
            else if(IMC <= 39.9)    resultado = 'Obesidade grau 2';            
            else                    resultado = 'Obesidade grau 3';
            
            funcoes.criaElementoResultado(resultado);
        },

        criaElementoResultado(resultado)
        {
            const resultadoHtml = document.querySelector('#resultado');
            const p = document.createElement('p');
            resultadoHtml.innerHTML = ``;

            if(resultado === 'Abaixo do peso' || resultado === 'Sobrepeso')
            {
                p.classList.add('paragrafo-resultado-nok');                
            }
            else if(resultado === 'Peso Normal')
            {
                p.classList.add('paragrafo-resultado-ok');
            }
            else if(resultado === 'Obesidade grau 1' || resultado === 'Obesidade grau 2')
            {
                p.classList.add('paragrafo-resultado-obes');
            }
            else
            {
                p.classList.add('paragrafo-resultado-obes3');
            }

            p.innerHTML = resultado;
            resultadoHtml.appendChild(p);
        }
    }

    form.addEventListener('submit', funcoes.recebeEvento);
}
Main();