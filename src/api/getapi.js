import axios from "axios";
import { React, useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Get() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1 className="font-bold text-xl text-center">{post.title}</h1>
            <p className="text-xl text-center">{post.body}</p>
        </div>
    );
}