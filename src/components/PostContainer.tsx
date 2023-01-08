import React from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(20);
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [deletePost, {}] = postApi.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt("Post's title: ")
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new button</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Something went wrong. Try again later.</h1>}
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;