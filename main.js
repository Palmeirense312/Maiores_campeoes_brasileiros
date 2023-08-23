var Times=[
"Campeonato_Brasileiro_de_Futebol_de_2022_-_Série_A.png","Palmeiras_logo.svg.png","Santos_Logo.png","i.png","Flamengo_braz_logo.svg.png","Brasao_do_Sao_Paulo_Futebol_Clube.svg.png"

];
var nome=[
    "Maiores campeões do brasileirão", "Palmeiras (11 titulos)", "Santos (8 titulos)", "Corinthians (7 titulos)", "Flamengo (7 titulos)","São Paulo (6 titulos)"
];
var i= 0
function update()
{
i++;
var paulinholoko = 5
if(i > paulinholoko)
{
    i = 0
}
var atualizarImagem = Times[i]
var atualizarNome = nome[i]
document.getElementById("imagens").src = atualizarImagem;
document.getElementById("nomes").innerHTML = atualizarNome;

}