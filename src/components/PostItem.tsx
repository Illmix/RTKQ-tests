import React, {FC, MouseEvent} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        remove(post);
    }

    const handleUpdate = () => {
        const title = prompt('New name') || ""
        update({...post, title})
    }

    return (
        <div className="post">
            {post.id}. {post.title}
            <div>
                <button style={{marginRight: 10}} onClick={handleDelete}>Delete</button>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default PostItem;