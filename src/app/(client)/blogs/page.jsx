import React from 'react';
import BlogList from './BlogList';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function getBlogs(searchParams) {
    const page = parseInt(searchParams.page) || 1;
    const limit = 10;
    const search = searchParams.search || '';
    const category = searchParams.category || '';
    const author = searchParams.author || '';

    try {
        // Build query params
        const queryParams = new URLSearchParams();
        queryParams.append('status', 'published');
        queryParams.append('page', page.toString());
        queryParams.append('limit', limit.toString());
        if (search) queryParams.append('search', search);
        if (category) queryParams.append('category', category);
        if (author) queryParams.append('author', author);

        // Fetch blogs from backend API
        const response = await fetch(`${API_URL}/blogs?${queryParams.toString()}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extract unique categories from blogs
        const categories = [...new Set(
            (data.blogs || []).map(blog => 
                typeof blog.category === 'string' ? blog.category : blog.category?.name
            ).filter(Boolean)
        )];

        // Extract unique authors from blogs
        const authors = [...new Map(
            (data.blogs || [])
                .filter(blog => blog.author && blog.author._id)
                .map(blog => [blog.author._id, { 
                    id: blog.author._id, 
                    name: blog.author.name || 'Unknown Author'
                }])
        ).values()];

        return {
            blogs: data.blogs || [],
            total: data.total || 0,
            page: data.page || 1,
            pages: data.pages || 1,
            categories,
            authors
        };
    } catch (error) {
        console.error('Error fetching blogs from backend:', error);
        console.error('Error details:', error.message);
        return {
            blogs: [],
            total: 0,
            page: 1,
            pages: 1,
            categories: [],
            authors: []
        };
    }
}

async function Blogs({ searchParams }) {
    const { blogs, total, page, pages, categories, authors } = await getBlogs(searchParams);

    return <BlogList 
        initialBlogs={blogs} 
        total={total} 
        currentPage={page} 
        totalPages={pages}
        categories={categories}
        authors={authors}
    />;
}

export default Blogs;
