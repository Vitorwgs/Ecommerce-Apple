import React, { useState } from 'react';
import styles from "./Footer.module.css";

function Footer() {

    return (
    
        <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.section}>
                <h4>Suporte</h4>
                <ul>
                    <li><a href="#">Atendimento ao cliente</a></li>
                    <li><a href="#">Garantia</a></li>
                    <li><a href="#">Reparos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div className={styles.section}>
                <h4>Sobre nós</h4>
                <ul>
                    <li><a href="#">Nossa história</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
            </div>

            <div className={styles.section}>
                <h4>Conecte-se conosco</h4>
                <div className={styles.socialIcons}>
                    <a href="#"><img src="/Images/icons/facebook.png"/></a>
                    <a href="#"><img src="/Images/icons/twitter.png"/></a>
                    <a href="#"><img src="/Images/icons/instagram.png"/></a>
                </div>
            </div>
        </div>

        <div className={styles.copyright}>
            <p>&copy; 2024 E-commerce. Todos os direitos reservados.</p>
        </div>
    </footer>
);
}

export default Footer;
