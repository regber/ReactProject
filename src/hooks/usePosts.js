import react, {useMemo } from "react";



export const useSortedPosts=(posts,sort)=>{

    

    const getSortedPosts=()=>{

        if(sort)
        {
            return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]));
        }

        return posts;
    }

    const sortedPosts= useMemo(() => getSortedPosts(), [sort,posts]);

    return sortedPosts;

}

export const usePosts=(posts,sort,filter)=>{

    const sortedPosts=useSortedPosts(posts,sort);
    
    const getFilterPosts=()=>{
        if(filter)
        {
            return [...sortedPosts].filter(post=>post.title.toLowerCase().includes(filter.toLowerCase()));
        }

        return sortedPosts;
    }

    const sortedAndFilterPosts= useMemo(() => getFilterPosts(), [filter,sortedPosts]);

    return sortedAndFilterPosts;
}