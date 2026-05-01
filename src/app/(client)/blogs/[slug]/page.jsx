import React from 'react';
import styles from '../../_lib/styles/blog.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function getBlog(slug) {
    try {
        console.log('Fetching blog:', slug);
        console.log('API URL:', `${API_URL}/blogs/${slug}`);
        
        // Fetch blog from backend API
        const response = await fetch(`${API_URL}/blogs/${slug}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 0 }
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            if (response.status === 404) {
                console.log('Blog not found');
                return null;
            }
            const errorText = await response.text();
            console.error('API Error:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Blog data received:', data.blog ? 'Yes' : 'No');
        return data.blog || null;
    } catch (error) {
        console.error('Error fetching blog from backend:', error);
        console.error('Error details:', error.message);
        console.error('Make sure backend is running on http://localhost:5000');
        return null;
    }
}

async function BlogDetail({ params }) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        notFound();
    }

    const renderContentBlock = (block, index) => {
        if (!block || !block.type || !block.data) return null;

        switch (block.type) {
            case 'paragraph':
                return (
                    <p key={index} className={styles.paragraph}>
                        {block.data.text}
                    </p>
                );
            
            case 'heading':
                const level = block.data.level || 2;
                const HeadingTag = `h${level}`;
                return (
                    <HeadingTag key={index} className={styles.heading} data-level={level}>
                        {block.data.text}
                    </HeadingTag>
                );
            
            case 'image':
                return (
                    <figure key={index} className={styles.imageBlock}>
                        <img 
                            src={block.data.src} 
                            alt={block.data.alt || block.data.caption || 'Blog image'} 
                            loading="lazy"
                        />
                        {block.data.caption && (
                            <figcaption className={styles.imageCaption}>
                                {block.data.caption}
                            </figcaption>
                        )}
                    </figure>
                );
            
            case 'quote':
                return (
                    <blockquote key={index} className={styles.quote}>
                        <p>{block.data.text}</p>
                    </blockquote>
                );
            
            case 'list':
                const ListTag = block.data.ordered ? 'ol' : 'ul';
                return (
                    <ListTag key={index} className={styles.list}>
                        {block.data.items?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ListTag>
                );
            
            case 'code':
                return (
                    <div key={index} className={styles.codeBlockWrapper}>
                        {block.data.language && (
                            <div className={styles.codeLanguage}>
                                {block.data.language}
                            </div>
                        )}
                        <pre className={styles.codeBlock}>
                            <code className={`language-${block.data.language || 'text'}`}>
                                {block.data.code}
                            </code>
                        </pre>
                    </div>
                );
            
            default:
                console.warn('Unknown block type:', block.type);
                return null;
        }
    };

    return (
        <div className={styles.blogDetailContainer}>
            <Link href="/blogs">
                <button className={styles.backButton}>← Back to Blogs</button>
            </Link>

            <article className={styles.blogDetailArticle}>
                {blog.featuredImage && (
                    <div className={styles.featuredImage}>
                        <img src={blog.featuredImage} alt={blog.title} />
                    </div>
                )}

                <header className={styles.blogHeader}>
                    <h1>{blog.title}</h1>
                    
                    {blog.excerpt && (
                        <p className={styles.excerpt}>{blog.excerpt}</p>
                    )}

                    <div className={styles.blogMetaInfo}>
                        <div className={styles.authorInfo}>
                            {blog.author?.name && (
                                <span className={styles.author}>By {blog.author.name}</span>
                            )}
                            <span className={styles.date}>
                                {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>

                        <div className={styles.blogMetaStats}>
                            <span>👁 {blog.views || 0} views</span>
                            <span>❤️ {blog.likes || 0} likes</span>
                            {blog.readingTime && (
                                <span>📖 {blog.readingTime} min read</span>
                            )}
                        </div>
                    </div>

                    {blog.category && (
                        <div className={styles.categoryBadge}>
                            {typeof blog.category === 'string' 
                                ? blog.category 
                                : blog.category.name}
                        </div>
                    )}

                    {blog.tags && blog.tags.length > 0 && (
                        <div className={styles.tagsContainer}>
                            {blog.tags.map((tag, idx) => (
                                <span key={idx} className={styles.tag}>#{tag}</span>
                            ))}
                        </div>
                    )}
                </header>

                <div className={styles.blogDetailContent}>
                    {blog.content && blog.content.length > 0 ? (
                        blog.content.map((block, index) => renderContentBlock(block, index))
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            </article>

            <div className={styles.blogFooter}>
                <Link href="/blogs">
                    <button className={styles.backButton}>← Back to Blogs</button>
                </Link>
            </div>
        </div>
    );
}

export default BlogDetail;
