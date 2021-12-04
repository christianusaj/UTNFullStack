const Galeria=(props)=>{
    return(
        <div>
            <div class="tituloPagina">
                Galeria
            </div>
            <div class="contenido">
                <main class="central">
                    <div class="contenedorGaleria">
                        <div class="columnaGaleria">
                            <img src="img/P1000642.jpg" alt=""></img>
                            <img src="img/P1000643.jpg" alt=""></img>
                            <img src="img/P1000805.jpg" alt=""></img>
                            <img src="img/P1000857.jpg" alt=""></img>
                        </div>

                        <div class="columnaGaleria">
                            <img src="img/P1000897.jpg" alt=""></img>
                            <img src="img/P1000941.jpg" alt=""></img>
                            <img src="img/P1000974.jpg" alt=""></img>         
                            <img src="img/P1010037.jpg" alt=""></img>
                        </div>
                    </div>
                </main>
                <aside class="lateral">
                    <section>
                        <h2 class="cajaTituloLateral">Acerca de mi</h2>
                        <h3 class="cajaTituloLateralAcercaDe">Nací en Buenos Aires y aquí es donde vivo. Buscaba ideas para hacer una web y decidí hacerla sobre
                            fotografía. <br></br> ¿Soy buen fotografo? en absoluto, solo saco muchas fotos y por lo tanto siempre alguna
                            queda bien.</h3>
                    </section>
                    <section>
                        <h2 class="cajaTituloLateral">Newsletter</h2>
                        <div class="contenedorNews">
                            <span class="material-icons-outlined">
                                mail_outline
                            </span>
                            <h3 class="cajaTituloLateralNewsletter">Suscribite a nuestro newsletter para estar al día con las novedades del blog.</h3>
                            <form action="" class="formNews">
                                <input type="text" name="nombre" placeholder="Tu nombre" id="nombreNews"></input>
                                <input type="text" name="email" placeholder="Tu email" id="emailNews"></input>
                                <br></br>
                                <input type="submit" value="Suscribir" id="enviarNews"></input>
                            </form>
                        </div>
                    </section>
                    <section>
                        <h2 class="cajaTituloLateral">Redes sociales</h2>
                        <div class="iconosSociales">
                            <a href="www.facebook.com"><img src="./icons/fb.svg" width="30" height="30" alt="Facebook"></img></a>
                            <a href=""><img src="./icons/ig.svg" width="30" height="30"  alt="Instagram"></img></a>
                            <a href=""><img src="./icons/tw.svg" width="30" height="30"  alt="Twitter"></img></a>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    )
}
export default Galeria;
