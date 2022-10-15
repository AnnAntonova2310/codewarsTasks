import React, {FC} from 'react';

type BookmarkPropsType = {
    bookmark: boolean
    handlerBookmarkSwitcher: (id: string, newBookmark: boolean) => void
    id: string
}



const Bookmark: FC<BookmarkPropsType> = ({bookmark, handlerBookmarkSwitcher, id}) => {

    // const bookmarkHandler = () => {
    //     handlerBookmarkSwitcher(id, !bookmark)
    // }

return (
        <div onClick={() => handlerBookmarkSwitcher(id, !bookmark)}>
            {bookmark ? 'da' : 'net'}
        </div>
)
};

export default Bookmark;