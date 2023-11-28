

import NewsTemplate from "../News/NewsTemplate/NewsTemplate.json"
import React, { useState } from 'react';
import Post from './Post';

export default function UpdateNews() {

    const [externalData, setExternalData] = useState(NewsTemplate.news);
    
    const handleUpdateData = (responseData) => {
        // Assuming responseData has the necessary properties
       console.log(responseData)
    };

    return (
        <div>
            {/* Other components or content */}
            <Post handleUpdateData={handleUpdateData} />
        </div>
    );
}

