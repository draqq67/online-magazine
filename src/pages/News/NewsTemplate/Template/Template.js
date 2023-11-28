
import "./Template.css"

export default function Template({data}){
    
    console.log(data)
    const article = data[0]
    console.log(article)
    return(
        <div className = "template">
            
            <div className="tp_topdiv">
                <div className="tp_calendar">
                    {article.calendar}
                </div>
                <br />
                <img className="topimg" src={article.main_photo_src} alt={article.alt} />
                <div className = "tp_title">
                    {article.title}
                </div>
            <div className="tp_subtitle">
                {article.subtitle}
            </div>
            
                
            </div>

            <div className="tp_body">
                <div className="tp_type">
                    <div className="tp_text">
                        {article.text1}
                    </div>
                    <img src={article.photo1} alt={article.alt} className="tp_photo" />
                </div>

                <div className="tp_type">
                    <div className="tp_text">
                        {article.text2}
                    </div>
                    <img src={article.photo2} alt={article.alt} className="tp_photo" />
                </div>

                <div className="tp_type">
                <div className="tp_text">
                    {article.text3}
                </div>
                <img src={article.photo3} alt={article.alt} className="tp_photo" />
                </div> 
               <div className="tp_subtet">
                <div className="type">
                    <button className="tp_button" href="#top"> Go to top </button>
                    <button className="tp_button" href="#"> Go to {article.type} page</button>
                    <p className="tp_writtenby">
                        Written by {article.written_by}. Copyrights from@DragosNews
                    </p>
                </div>
               </div>
            </div>
        </div>
    )
}