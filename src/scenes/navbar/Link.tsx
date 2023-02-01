import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types';


// @this is the props
type Props = {
    page:string;
    SelectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}


const Link = ({ page,SelectedPage,setSelectedPage }:Props) =>{
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage

    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
        {page}
        </AnchorLink>
  )
}

export default Link
