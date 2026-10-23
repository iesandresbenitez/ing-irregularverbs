# Irregular Verbs Challenge · IES Andrés Benítez

Aplicación educativa para practicar verbos irregulares en inglés.

> Aplicación desarrollada en el marco del Proyecto STEAM 4.0 / Programa de Cooperación Territorial Código Escuela 4.0.

## Desarrollo local

Requiere Node.js 20 o superior y npm.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Publicación en GitHub Pages

La aplicación se publica en:

https://iesandresbenitez.github.io/ing-irregularverbs/

Vite está configurado con la base `/ing-irregularverbs/`. El flujo de GitHub Actions situado en `.github/workflows/deploy.yml` construye el proyecto y publica la carpeta `dist` cada vez que se actualiza la rama `main`.

En GitHub, abre **Settings → Pages → Build and deployment** y selecciona **GitHub Actions** como origen de publicación.

## Funcionalidades

- Ejercicios de pasado simple, participio y traducción.
- Modos de respuesta escrita, opción múltiple, contrarreloj y escucha.
- Diccionario con búsqueda y síntesis de voz del navegador.
- Progreso guardado localmente en el dispositivo.

El diccionario es una selección educativa y puede ampliarse o revisarse en futuras iteraciones.
