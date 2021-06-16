Te abstrae del orden de imports the archivos en html por ejemplo, lo que te permite modularizar mucho mas facil. No es solo para js, tmb se puede usar para css y etc etc.

Beneficios:

1. Te permite modularizar que esto siempre esta bueno para escalar

2. HAce mas rapido el desarrollo por un feature llamado hot module replacement que te ahorra de relodear la full page para aplicar cambios. Ademas, en caso de tener que cargar, esto lo hace mucho mas rapido.

3. Hace mas facil el uso de SPAs.

4. Dead asset elimination. This is killer, especially for CSS rules. You only build the images and CSS into your dist/ folder that your application actually needs.

5. Easier code splitting. For example, because you know that your file Homepage.js only requires specific CSS files, Webpack could easily build a homepage.css file to greatly reduce initial file size.

6. You control how assets are processed. If an image is below a certain size, you could base64 encode it directly into your Javascript for fewer HTTP requests. If a JSON file is too big, you can load it from a URL. You can require('./style.less') and it's automaticaly parsed by Less into vanilla CSS.
7. Stable production deploys. You can't accidentally deploy code with images missing, or outdated styles.

8. Webpack will slow you down at the start, but give you great speed benefits when used correctly. You get hot page reloading. True CSS management. CDN cache busting because Webpack automatically changes file names to hashes of the file contents, etc.


