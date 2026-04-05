import { NextResponse } from "next/server";
import Blog from "../../models/Blog";
import DBConnect from "../../config/db";

let cache = null;
let cacheTime = null;

export async function GET() {
    try {
        const now = Date.now();
        const cacheDuration = 3 * 60 * 1000; 

        // Check if cache is still valid
        if (cache && cacheTime && (now - cacheTime < cacheDuration)) {
            return NextResponse.json(cache, {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                },
                next: {
                    revalidate: 180,
                    tags: ["blog"]
                }
            });
        }

        // Connect to the database and fetch blogs
        await DBConnect(); 
        const blogs = await Blog.find();

        // Update cache and cacheTime
        cache = blogs;
        cacheTime = Date.now();

        return NextResponse.json(blogs, {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                revalidate: 180,
                tags: ["blog"]
            }
        });

    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json([], {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
