# Almacén Sin TACC

Sitio web para almacén especializado en productos libres de gluten.

## Descripción

Proyecto de 5 páginas web para un almacén de productos sin TACC (sin gluten) certificados. Incluye catálogo de productos, recetas, información de la empresa y formulario de contacto.

## Páginas

1. **index.html** - Página principal con productos destacados
2. **productos.html** - Catálogo completo con filtros
3. **recetas.html** - Recetas sin TACC
4. **nosotros.html** - Historia y valores de la empresa
5. **contacto.html** - Formulario de contacto y ubicación

## Tecnologías

- HTML5
- CSS3 / SASS
- Bootstrap 5.3
- JavaScript
- AOS (animaciones)

## Estructura SASS

```
scss/
├── _variables.scss
├── _mixins.scss
├── _base.scss
├── _components.scss
└── main.scss
```

## Instalación

```bash
npm install
npm run sass:build
```

## Desarrollo

Para compilar SASS en modo desarrollo:
```bash
npm run sass:dev
```

Para compilar SASS para producción:
```bash
npm run sass:build
```

## Deploy

El sitio está listo para subir a cualquier servidor web. El archivo principal es `index.html`.

---
Copyright 2024 Almacén Sin TACC