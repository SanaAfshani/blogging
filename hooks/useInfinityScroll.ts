import { useRef, useState, useEffect } from "react";

type ApiCallFunction<T> = (page: number) => Promise<T[]>;

interface InfiniteScrollData<T> {
    allItems: T[];
    page: number;
    ref: React.RefObject<HTMLDivElement | null>;
}

function useInfiniteScroll<T>(
    apiCall: ApiCallFunction<T>,
    initialPage: number = 1
): InfiniteScrollData<T> {
    const [page, setPage] = useState(initialPage);
    const [allItems, setAllItems] = useState<T[]>([]);
    const { data, isFetching } = apiCall({
        variables: { page: postCount },
    });
    const ref = useRef<HTMLDivElement | null>(null);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isFetching) {
            setPage((prevPage) => prevPage + 1);
        }
    };


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };
        const observer = new IntersectionObserver(handleIntersection, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isFetching]);

    return { allItems, page, ref };
}

export default useInfiniteScroll;
