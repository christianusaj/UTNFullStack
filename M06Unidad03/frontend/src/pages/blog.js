
const Blog=(props)=>{
    return(
        <div>
            <div class="tituloPagina">Blog</div>
            <div class="contenido">
                <main class="central">
                    <div class="contenedorTarjetasBlog">
                        <div class="tarjetaBlog">
                            <section>
                                <h1>¿Superaron los celulares a las camaras compactas?</h1>
                                <div class="imagenTarjetaBlog">
                                    <img src="img/blog_camara_celular.jpg" alt=""></img>
                                </div>
                                    <article>Hubo (¿hay?) un segmento de cámaras compactas que renunia las ventajas de la portabilidad, por caber en un bolsillo y de calidad, por tener sensores de imagen grande...
                                    </article>
                                    <a href="#">Leer más</a>
                            </section>
                            
                        </div>

                        <div class="tarjetaBlog">
                            <section>
                                <h1>
                                    Cómo geo etiquetar nuestras fotos. 
                                </h1>
                                <div class="imagenTarjetaBlog">
                                    <img src="img/blog_georeferencia.jpg" alt=""></img>
                                </div>
                                    <article>
                                        ¿A quién no le sucedió que luego de cierto tiempo de tomar una foto ya no recuerda dónde fue sacada....
                                    </article>
                                    <a href="#">Leer más</a>
                            </section>
                            
                        </div>

                        <div class="tarjetaBlog">
                            <section>
                                <h1>
                                    Tips básicos para mejorar las fotos con el celular
                                </h1>
                                <div class="imagenTarjetaBlog">
                                    <img src="img/blog_fotocelular.jpg" alt=""></img>
                                </div>
                                    <article>Que las cámaras de los telefonos sean cada vez de mejor calidad no significa directamente que las fotos que tomemos sean mejores.
                                    </article>
                                    <a href="#">Leer más</a>
                            </section>
                            
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
export default Blog;