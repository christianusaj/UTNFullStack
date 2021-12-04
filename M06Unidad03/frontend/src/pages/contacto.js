const Contacto=(props)=>{
    return(
        <div class="contenido">
        <main class="central">
            <div class="contactoRedes">
                <h1>¿Dudas, sugerencias, consultas? Enviame un mensaje y te respondo a la brevedad.</h1>
                <form action="" class="formContacto">
                    <label for="nombre">Tu nombre</label>
                    <br/>
                    <input type="text" id="nombre"/>
                    <br/>
                    <label for="email">Tu email</label>
                    <br/>
                    <input type="text" id="email"/>
                    <br/>
                    <label for="mensaje">Mensaje</label>
                    <br/>
                    <textarea name="area" id="mensaje" cols="30" rows="10" maxlength="300"></textarea>
                    <br/>
                    <input type="reset" name="borrar" id="botonesContacto" value="Borrar"/>
                    <input type="submit" id="botonesContacto" value="Enviar"/>
                </form>

            </div>


        </main>
        <aside class="lateral">
            <section>
                <h2 class="cajaTituloLateral">Acerca de mi</h2>
                <h3 class="cajaTituloLateralAcercaDe">Nací en Buenos Aires y aquí es donde vivo. Buscaba ideas para hacer una web y decidí hacerla sobre
                    fotografía. <br/> ¿Soy buen fotografo? en absoluto, solo saco muchas fotos y por lo tanto siempre alguna
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
                        <input type="text" name="nombre" placeholder="Tu nombre" id="nombreNews"/>
                        <input type="text" name="email" placeholder="Tu email" id="emailNews"/>
                        <br/>
                        <input type="submit" value="Suscribir" id="enviarNews"/>
                    </form>
                </div>
            </section>
            <section>
                <h2 class="cajaTituloLateral">Redes sociales</h2>
                <div class="iconosSociales">
                    <a href="www.facebook.com"><img src="icons/fb.svg" width="30" height="30" alt="Facebook"/></a>
                    <a href="www.instagram.com"><img src="icons/ig.svg" width="30" height="30"  alt="Instagram"/></a>
                    <a href="www.twitter.com"><img src="icons/tw.svg" width="30" height="30"  alt="Twitter"/></a>
                </div>
            </section>
        </aside>
    </div>
    )
}
export default Contacto;