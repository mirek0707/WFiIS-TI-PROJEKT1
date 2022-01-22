/* Funkcja służąca do aktualizacji strony po kliknięciu danego przycisku */
function update(index) {
    switch (index) {
        case 1:
            document.getElementById("art").innerHTML = 
            `<article class="main_article">
                <h2>RUCH JEDNOSTAJNY PO OKRĘGU</h2>
                <div id="bar">Jeśli klikniesz przycisk 'Strona główna', kółko zwiększy swoją prędkość</div>
                <canvas class="rys1" id="rys1" height="300" width="300" onmouseover="show()" onmouseleave="hide()"></canvas>
                <script src="skrypty/rysowanie_glowna.js"></script>
                <p>Mirosław Kołodziej</p>
            </article>`;
            window.cancelAnimationFrame(draw);
            window.requestAnimationFrame(draw);
            break;
        case 2:
            document.getElementById("art").innerHTML = 
            `<article class="article1">
                <h2>Ruch jednostajny po okręgu</h2>
                <p>Ruch po torze o kształcie okręgu z prędkością o stałej wartości. Przykładami takiego ruchu mogą być: 
                ruch księżyca wokół Ziemi, ruch dziecka na karuzeli, ruch wentyla na wirującym kole roweru, ruch 
                płyty&nbsp;CD czy też śmigła samolotu.</p>
                <p>Wartość prędkości w ruchu jednostajnym po okręgu jest stała. Może być ona określona jako stosunek długości łuku Δs, jaki
                zakreśli poruszający się punkt, do&nbsp;czasu Δt, w którym ten łuk został zakreślony:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="v=\frac{\Delta s}{\Delta t}" display="block"
                    overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>v</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>s</mi>
                                </mrow>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>t</mi>
                                </mrow>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math></p>
                <p>Wektor chwilowej prędkości jest styczny do okręgu, ponieważ chwilowa prędkość jest styczna do toru w każdym
                ruchu krzywoliniowym. Prędkość, której wartość określamy powyższym wzorem, nazywamy prędkością liniową.
                Prędkość kątową ciała w ruchu jednostajnym po okręgu definiujemy zaś jako stosunek kąta Δα&nbsp;zakreślonego przez promień
                wodzący tego ciała do czasu Δt, w którym kąt ten został zakreślony:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\omega=\frac{\Delta\alpha}{\Delta t}" display="block"
                    overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>&#x3C9;</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>&#x3B1;</mi>
                                </mrow>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>t</mi>
                                </mrow>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math></p>
                <img class="obrazki" id="o1" src="img/1.svg" alt="Wektor prędkości ciała poruszającego się po okręgu">
                <p class="opis">Rys. 1. Wektor prędkości ciała poruszającego się po okręgu</p>
                <p>Jednostką prędkości kątowej jest radian na sekundę (rad/s) albo po prostu odwrotność sekundy (1/s). Miarą kąta
                (w radianach) jest stosunek łuku s, na którym jest oparty kąt, do promienia r:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\Delta\alpha=\frac{\Delta s}{r}" display="block"
                    overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mo>&#x394;</mo>
                            <mi>&#x3B1;</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>s</mi>
                                </mrow>
                                <mi>r</mi>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math>
                Jest on zatem bezwymiarowy. Po podstawieniu wzoru dwóch poprzednich wzorów otrzymamy:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\omega=\frac{\Delta s}{\Delta t}\cdot\frac{1}{r}"
                    display="block" overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>&#x3C9;</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>s</mi>
                                </mrow>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>t</mi>
                                </mrow>
                            </mfrac>
                            <mo>&#x22C5;</mo>
                            <mfrac>
                                <mn>1</mn>
                                <mi>r</mi>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math>
                Uwzględniając, że <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="v=\frac{\Delta s}{\Delta t}" display="inline"
                    overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>v</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>s</mi>
                                </mrow>
                                <mrow>
                                    <mo>&#x394;</mo>
                                    <mi>t</mi>
                                </mrow>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math>, uzyskujemy związek między prędkością kątową a prędkością liniową:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\omega=\frac{v}{r}\qquad" display="block"
                    overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>&#x3C9;</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mi>v</mi>
                                <mi>r</mi>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math></p>
                <p>Inną wielkością charakteryzującą ruch po okręgu jest okres obiegu T. Definiujemy go jako czas, w którym punkt
                materialny wykona pełny obieg. Zarówno prędkość liniowa, jak i prędkość kątowa mogą być wyrażone za pomocą okresu
                obiegu. Prędkość liniową można przedstawić jako stosunek obwodu koła 2πr do okresu T:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="v=\frac{2\pi r}{T}" display="block" overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>v</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mn>2</mn>
                                    <mi>&#x3C0;</mi>
                                    <mi>r</mi>
                                </mrow>
                                <mi>T</mi>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math>
                Prędkość kątową można zaś przedstawić jako stosunek pełnego kąta 2π do okresu T:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\omega=\frac{2\pi}{T}" display="block" overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>&#x3C9;</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow>
                                    <mn>2</mn>
                                    <mi>&#x3C0;</mi>
                                </mrow>
                                <mi>T</mi>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math>
                </p>
                <p>Następna wielkość to częstotliwość f, definiowana jako liczba obiegów,
                którą punkt materialny wykonuje w ciągu jednostki czasu. Częstotliwość jest odwrotnością okresu obiegu. Łatwo można to
                zrozumieć na przykładzie: jeśli <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\nu=3\, s^{-1}" display="inline" overflow="scroll">
                    <mi>f</mi>
                    <mo>=</mo>
                    <mn>3</mn>
                    <mspace width="0.5ex" />
                    <msup>
                        <mtext>s</mtext>
                        <mn>-1</mn>
                    </msup>
                </math>, to ciało wykonuje 3 pełne obiegi w ciągu jednej sekundy. Wobec tego jeden obieg
                trwa 1/3&nbsp;sekundy i to jest właśnie okres obiegu. Uogólniając, otrzymujemy związek:
                <math xmlns="http://www.w3.org/1998/Math/MathML" alttext="\nu=\frac{1}{T}" display="block" overflow="scroll">
                    <semantics definitionurl="" encoding="">
                        <mrow>
                            <mi>f</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mn>1</mn>
                                <mi>T</mi>
                            </mfrac>
                        </mrow>
                    </semantics>
                </math></p>
            </article>`;
            break;
        case 3:
            document.getElementById("art").innerHTML = 
            `<article class="article2">
                <h2>Animacje</h2>
                <div id="canv">
                    <input type="button" class="przycisk1" id="przycisk1" value="Kliknij, aby narysować" onclick="pokaz_canvas()">
                </div>
            </article>`;
            break;
            
        case 4:
            document.getElementById("art").innerHTML = 
            `<article class="article3">
                <h2>Informacje o stronie</h2>
                <p>Strona została wykonana w ramach projektu 1. (Strona WWW w języku HTML5 z wykorzystaniem skryptów JavaScript) na zajęcia 
                z Technik internetowych. Była testowana w przeglądarce Mozilla Firefox w wersji 95.0.2 na systemie operacyjnym Windows 10.</p>
                <p>Źródła wykorzystane w części teoretycznej:</p>
                <ul>
                    <li><a href="https://pl.wikipedia.org/wiki/Ruch_jednostajny_po_okr%C4%99gu">Wikipedia - Ruch jednostajny po okręgu</a></li>
                    <li><a href="http://ilf.fizyka.pw.edu.pl/podrecznik/2/1/15">Fizyka PW - Ruch jednostajny po okręgu</a></li>
                    <li><a href="https://home.agh.edu.pl/~kakol/efizyka/w03/main03c.html#">E-fizyka - Ruch jednostajny po okręgu</a></li>
                </ul> 
            </article>`;
            break;
    }
}
/* zmienna zliczająca ilość wykonania funkcji draw3 */
var licznik;
/* funkcja pokazujaca animacje po kliknięciu w przycisk */
function pokaz_canvas() {
    document.getElementById("canv").innerHTML = 
    `<table>
        <tr>
            <td><canvas class="rys2" id="rys2" height="300" width="300"></canvas></td>
            <td><canvas class="rys3" id="rys3" height="300" width="300"></canvas></td>
        </tr>
        <tr>
            <td rowspan="2">czerwony - wektor prędkości liniowej</td>
            <td>zielony - odległość obiektu od osi x</td>
        </tr>
        <tr>
            <td>niebieski - odległość obiektu od osi y</td>
        </tr>
    </table>`;
    draw3();
    draw2();
    
    licznik=0;
}
/* funkcja pokazująca komunikat na stronie startowej */
function show()
{
    var x = document.getElementById("bar");
    x.className = "show";
}
/* funkcja ukrywająca komunikat na stronie startowej */
function hide() {
    var x = document.getElementById("bar");
    x.className = "";
}
/* funkcja wyrysowująca pierwszą animację w zakładce animacje */
function draw2() {
    var canv = document.getElementById('rys2');
    if (canv != null) {
        var ctx = canv.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 300, 300);

        ctx.save();
        ctx.translate(150, 150);

        ctx.rotate((2 * Math.PI) / 500);

        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.fillStyle = "#000000";
        ctx.fill();

        ctx.strokeStyle = '#000000';

        ctx.beginPath();
        ctx.arc(125, 0, 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.fillStyle = "#000000";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(125, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(125, 20);
        ctx.lineTo(125, 60);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(125, 60);
        ctx.lineTo(135, 50);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(125, 60);
        ctx.lineTo(115, 50);
        ctx.stroke();

        ctx.strokeStyle = '#000000';
        ctx.moveTo(145, 0);
        ctx.beginPath();
        ctx.arc(125, 0, 20, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.stroke()

        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke()

        ctx.moveTo(125, 0);
        ctx.beginPath();
        ctx.arc(0, 0, 125, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        ctx.translate(-150, -150);

        window.requestAnimationFrame(draw2);
    }
    else {
        window.cancelAnimationFrame(draw2);
    }

}
/* funkcja wyrysowująca drugą animację w zakładce animacje */
function draw3() {
    var canv = document.getElementById('rys3');
    if (canv != null) {
        var ctx = canv.getContext('2d');
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 300, 300);

        ctx.save();
        ctx.translate(150, 150);

        ctx.moveTo(125, 0);
        ctx.beginPath();
        ctx.arc(0, 0, 125, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        licznik++;

        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(0, 0);
        if (licznik % 500 < 500 / 4)
            ctx.lineTo(0, 0 + 125 * (licznik % 500) * 4 / 500);
        else if (licznik % 500 >= 500 / 4 && licznik % 500 < 500 / 2)
            ctx.lineTo(0, 125 - 125 * (licznik % 500 - 125) * 4 / 500);
        else if (licznik % 500 >= 500 / 2 && licznik % 500 < 500 * 3 / 4)
            ctx.lineTo(0, 0 - 125 * (licznik % 500 - 250) * 4 / 500);
        else
            ctx.lineTo(0, -125 + 125 * (licznik % 500 - 375) * 4 / 500);
        ctx.stroke();

        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.moveTo(0, 0);
        if (licznik % 500 < 500 / 4)
            ctx.lineTo(125 - 125 * (licznik % 500) * 4 / 500, 0);
        else if (licznik % 500 >= 500 / 4 && licznik % 500 < 500 / 2)
            ctx.lineTo(0 - 125 * (licznik % 500 - 125) * 4 / 500, 0);
        else if (licznik % 500 >= 500 / 2 && licznik % 500 < 500 * 3 / 4)
            ctx.lineTo(-125 + 125 * (licznik % 500 - 250) * 4 / 500, 0);
        else
            ctx.lineTo(0 + 125 * (licznik % 500 - 375) * 4 / 500, 0);
        ctx.stroke();

        ctx.save();

        ctx.translate(-150, -150);
        window.requestAnimationFrame(draw3);
    }
    else {
        window.cancelAnimationFrame(draw3);
    }
}