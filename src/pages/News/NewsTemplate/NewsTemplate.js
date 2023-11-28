import { useState } from "react";
import Nomatch from "../../../Components/Nomatch/Nomatch"
import newsTemplates from "./NewsTemplate.json"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Template from "./Template/Template";
export default function NewsTemplates()
{
    const location = useLocation()
    const title= decodeURIComponent(location.pathname.split('/').pop())

    const [isTitle,setIsTitle] = useState(false)
    const [isArticle,setIsArticle] = useState([])
    
    console.log(title)
    
    useEffect(() => {
        try {
          const filteredArticles = newsTemplates.news.filter(item => item.title === title);
          if (filteredArticles.length > 0) {
            setIsArticle(filteredArticles);
            setIsTitle(true);
          } else {
            throw new Error('No matching article found');
          }
        } catch (err) {
          setIsTitle(false);
        }
      }, [title]);
      return (
        <>
          { isTitle ? <Template data={isArticle}/> : <Nomatch /> }
        </>
      );
}