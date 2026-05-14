---
import { getCollection } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// 1. Puxa todos os posts da coleção 'blog' utilizando o novo sistema de carregamento
const allPosts = await getCollection('blog');

// 2. Filtra ignorando maiúsculas e acentos para garantir a exibição correta no portal
const posts = allPosts.filter((post) => {
	const categoria = post.data.category ? post.data.category.trim().toLowerCase() : '';
	return categoria === 'saúde natural' || categoria === 'saude natural';
});

const title = "Saúde Natural - Cura Natureza";
const description = "Dicas e receitas naturais selecionadas por Anderson Kochanski.";
---

<!doctype html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8" />
		<BaseHead title={title} description={description} />
		<style>
			main { width: 960px; max-width: calc(100% - 2em); margin: auto; padding: 3em 1em; }
			ul { list-style-type: none; padding: 0; }
			ul li { margin-bottom: 1rem; border-bottom: 1px solid #f0f0f0; padding-bottom: 1rem; }
			ul li a { text-decoration: none; color: #2e7d32; font-weight: bold; font-size: 1.2rem; display: block; }
			ul li a:hover { text-decoration: underline; color: #1b5e20; }
			small { color: #666; font-style: italic; }
		</style>
	</head>
	<body>
		<Header />
		<main>
			<h1>{title}</h1>
			<p>{description}</p>
			<hr />

			{posts.length > 0 ? (
				<ul>
					{posts.map((post) => (
						<li>
							{/* Uso do post.id para garantir que o link funcione com o novo loader do Astro */}
							<a href={`/blog/${post.id}/`}>{post.data.title}</a>
							<small>{post.data.pubDate.toLocaleDateString('pt-BR')}</small>
						</li>
					))}
				</ul>
			) : (
				<div style="background: #fff3e0; padding: 20px; border-left: 5px solid #ff9800; border-radius: 4px;">
					<p><strong>Nenhuma receita encontrada.</strong></p>
					<p>Certifique-se de que seus arquivos Markdown em <code>src/content/blog/</code> incluam exatamente: <code>category: "Saúde Natural"</code> no frontmatter.</p>
				</div>
			)}
		</main>
		<Footer />
	</body>
</html>
