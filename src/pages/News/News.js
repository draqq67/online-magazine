
import NewsCards from "../../Components/NewsCards/NewsCards"
import NewsCardsData from "../News/NewsTemplate/NewsTemplate.json"
export default function News ()
{
    return (
        <NewsCards data = {NewsCardsData.news} />
    )
}