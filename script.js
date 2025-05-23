function gerar(pdf = false, print = false) {
    for (let i = 1; i <= 8; i++)
        document.getElementById(`relatorio${i}`).textContent = document.getElementById(`input${i}`).value;

    const relatorio = document.getElementById('relatorio');
    relatorio.style.visibility = 'visible';
    relatorio.style.position = 'static';


    if (pdf) html2pdf().from(relatorio).save();
    else if (print) window.print();
}