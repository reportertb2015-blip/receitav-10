---
const { title, description, pubDate, heroImage, category, tags } = Astro.props.frontmatter;
---

<html lang="pt-BR">
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>

  <body>
    <article>
      <h1>{title}</h1>

      <p>
        <small>
          Publicado em {new Date(pubDate).toLocaleDateString("pt-BR")}
          {category && ` • ${category}`}
        </small>
      </p>

      {heroImage && (
        <img src={heroImage} alt={title} loading="lazy" />
      )}

      <slot />

      {tags && (
        <ul>
          {tags.map(tag => <li>{tag}</li>)}
        </ul>
      )}
    </article>
  </body>
</html>
