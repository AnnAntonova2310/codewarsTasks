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
        <div onClick={() => handlerBookmarkSwitcher(id, !bookmark)} className={'bookmark'}>
            {
                bookmark ? <img src="https://flyclipart.com/thumb2/bookmark-icon-530414.png"/>
                    : <img
                        src="https://static.tildacdn.com/tild3430-3963-4734-a538-383464376166/Ribbon_bookmark-512.png"/>
            }
        </div>
    )
};

export default Bookmark;