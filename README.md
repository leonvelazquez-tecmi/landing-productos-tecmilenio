# Landing Productos y Servicios Tecmilenio

Sitio de productos y servicios de Tecmilenio (Next.js + Tailwind CSS). Versión 1.1.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) (o el puerto que indique la terminal).

## Build

```bash
npm run build
npm run start
```

## Publicar en Vercel

### Opción 1: Desde la web de Vercel (recomendado)

1. Sube este proyecto a un repositorio en GitHub (o GitLab/Bitbucket).
2. Entra en [vercel.com](https://vercel.com) e inicia sesión.
3. **Add New** → **Project** → Importa el repositorio.
4. Vercel detecta Next.js; deja los valores por defecto (Build: `npm run build`, etc.).
5. **Deploy**. Obtendrás una URL tipo `tu-proyecto.vercel.app`.

Los siguientes `git push` a la rama principal pueden generar deploys automáticos.

### Opción 2: Con Vercel CLI

1. En la raíz del proyecto ejecuta: `npx vercel`
2. Si es la primera vez, inicia sesión en el navegador cuando lo pida.
3. Responde a las preguntas (scope, nombre del proyecto, directorio `./`).
4. Para producción: `npx vercel --prod`

La carpeta `.vercel` se crea localmente y está en `.gitignore`; no la subas al repositorio.
