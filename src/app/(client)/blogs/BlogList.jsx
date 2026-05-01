"use client"

import React, { useState } from 'react';
import styles from '../_lib/styles/blog.module.css';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function BlogList({ initialBlogs, total, currentPage, totalPages, categories, authors }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
    const [selectedAuthor, setSelectedAuthor] = useState(searchParams.get('author') || '');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchTerm) params.set('search', searchTerm);
        if (selectedCategory) params.set('category', selectedCategory);
        if (selectedAuthor) params.set('author', selectedAuthor);
        params.set('page', '1');
        router.push(`/blogs?${params.toString()}`);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const params = new URLSearchParams();
        if (searchTerm) params.set('search', searchTerm);
        if (category) params.set('category', category);
        if (selectedAuthor) params.set('author', selectedAuthor);
        params.set('page', '1');
        router.push(`/blogs?${params.toString()}`);
    };

    const handleAuthorChange = (author) => {
        setSelectedAuthor(author);
        const params = new URLSearchParams();
        if (searchTerm) params.set('search', searchTerm);
        if (selectedCategory) params.set('category', selectedCategory);
        if (author) params.set('author', author);
        params.set('page', '1');
        router.push(`/blogs?${params.toString()}`);
    };

    const handlePageChange = (newPage) => {
        const params = new URLSearchParams();
        if (searchTerm) params.set('search', searchTerm);
        if (selectedCategory) params.set('category', selectedCategory);
        if (selectedAuthor) params.set('author', selectedAuthor);
        params.set('page', newPage.toString());
        router.push(`/blogs?${params.toString()}`);
        scrollToTop();
    };

    // Extract text from content blocks
    const getExcerpt = (content) => {
        if (!content || !Array.isArray(content)) return '';
        
        const paragraphs = content
            .filter(block => block.type === 'paragraph' && block.data?.text)
            .map(block => block.data.text);
        
        const fullText = paragraphs.join(' ');
        return fullText.length > 200 ? fullText.substring(0, 200) + '...' : fullText;
    };

    return (
        <div className={styles.blogContainer}>
            {/* Search and Filter Section */}
            <div className={styles.filterSection}>
                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>Search</button>
                </form>
                
                {categories.length > 0 && (
                    <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className={styles.categorySelect}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                )}

                {authors && authors.length > 0 && (
                    <select
                        value={selectedAuthor}
                        onChange={(e) => handleAuthorChange(e.target.value)}
                        className={styles.categorySelect}
                    >
                        <option value="">All Authors</option>
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                )}
            </div>

            {/* Blog Posts */}
            {initialBlogs.length === 0 ? (
                <p className={styles.noBlogsFound}>No blogs found</p>
            ) : (
                <>
                    {initialBlogs.map((blog) => (
                        <div className={styles.blogPost} key={blog._id}>
                            {blog.featuredImage && (
                                <div className={styles.blogImage}>
                                    <img src={blog.featuredImage} alt={blog.title} />
                                </div>
                            )}
                            <article className={styles.blogArticle}>
                                <h2>{blog.title}</h2>
                                
                                {blog.excerpt && (
                                    <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                                )}
                                
                                {!blog.excerpt && blog.content && (
                                    <p className={styles.blogContent}>{getExcerpt(blog.content)}</p>
                                )}

                                <div className={styles.blogMeta}>
                                    {blog.category && (
                                        <span className={styles.category}>
                                            {typeof blog.category === 'string' ? blog.category : blog.category.name}
                                        </span>
                                    )}
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className={styles.tags}>
                                            {blog.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className={styles.tag}>#{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.blogStats}>
                                    <span>👁 {blog.views || 0} views</span>
                                    <span>❤️ {blog.likes || 0} likes</span>
                                    {blog.readingTime && <span>📖 {blog.readingTime} min read</span>}
                                </div>
                            </article>
                            
                            <Link href={`/blogs/${blog.slug || blog._id}`}>
                                <button className={styles.blogButton}>Read More</button>
                            </Link>
                            
                            <span className={styles.postDate}>
                                Posted on: {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}
                                {blog.author?.name && ` by ${blog.author.name}`}
                            </span>
                        </div>
                    ))}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={styles.paginationButton}
                            >
                                Previous
                            </button>
                            
                            <span className={styles.pageInfo}>
                                Page {currentPage} of {totalPages} ({total} total blogs)
                            </span>
                            
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={styles.paginationButton}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}

            <div onClick={scrollToTop} className={styles.backTop}>
                <img src="/assets/icons/backtotop.png" alt="Back to Top" />
            </div>
        </div>
    );
}

export default BlogList;
