
import "./Post.css"

import { useEffect } from "react";
import NewsTemplate from "../News/NewsTemplate/NewsTemplate.json"


export default function Post({ handleUpdateData }) { // Update prop name
        useEffect(() => {
            const postEl = document.querySelector('.postNews_form');
    
            const handleSubmit = async (event) => {
                event.preventDefault();
    
                const formData = new FormData(postEl);
                const data = Object.fromEntries(formData);
    
                try {
                    const response = await fetch("https://reqres.in/api/users", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
    
                    const responseData = await response.json();
                    console.log(responseData);
    
                    if (typeof handleUpdateData === 'function') { // Update prop name
                        handleUpdateData(responseData); // Update prop name
                    } else {
                        console.error(typeof handleUpdateData);
                    }
                } catch (error) {
                    console.error('Error submitting data:', error);
                }
            };
    
            postEl.addEventListener('submit', handleSubmit);
    
            return () => {
                postEl.removeEventListener('submit', handleSubmit);
            };
        }, [handleUpdateData]); // Update prop name
    return (
        <div class="formpage">
            <div className class="container_post">
                <div className= "post_title">
                    Share with us your awesome news
                </div>
        <form className="postNews_form">
            <div class="post-row">
                 <div className="post-input">
                    <input name="written_by" type="text" required></input>
                        <div className="underline"></div>
                            <label for=""> Your Name : </label>
                </div>
                <div className="post-input">
                    <input name="title" type ="text" required></input>
                        <div class="underline"></div>
                     <label for=""> Title : </label>
                </div>
            </div>
            <div className="post-row">
                <div className="post-input">
                    <input type="url" name="main_photo_src"  required></input>
                        <div class="underline"></div>
                            <label for=""> Main Photo url: </label>
                </div>
                <div className="post-input">
                    <input type="url" name="photo1" required></input>
                        <div class="underline"></div>
                            <label for=""> Photo 1 url: </label>
                </div>
            </div>
            <div className="post-row">
                <div className="post-input">
                    <input type="url" name="photo2" required></input>
                        <div class="underline"></div>
                            <label for=""> Photo 2 url: </label>
                </div>
                <div className="post-input">
                    <input type="url" name="photo3" required></input>
                        <div class="underline"></div>
                            <label for=""> Photo 3 url: </label>
                </div>
            </div>
            
            <div className="post-row">
                <div className="post-input textarea">
                 <textarea name="subtitle" type="text" required></textarea>
                 <br />
                 <div class="underline"></div>
                 <label for="">Write your main Paragraph:</label>
            </div>
            </div>
            <div className="post-row">
                <div className="post-input textarea">
                    <textarea name="subtitle" type="text1"  required></textarea>
                        <div class="underline"></div>
                            <label for="">Write your First Paragraph :</label>
                </div>
            </div>
            <div className="post-row">
                <div className="post-input textarea">
                    <textarea name="subtitle" type="text2" required></textarea>
                        <div class="underline"></div>
                            <label for="">Write your Second Paragraph :</label>
                </div>
            </div>
            <div className="post-row">
                <div className="post-input textarea">
                    <textarea name="subtitle" type="text3"  required></textarea>
                        <div class="underline"></div>
                            <label for="">Write your Third Paragraph :</label>
                </div>
            </div>
            <div class="post-row submit-btn">
               <div class="post-input">
                  <div class="inner"></div>
                  <input type="submit" value="submit"/>
               </div>
            </div>
            
        </form>
        </div>
        </div>
    )
   

}