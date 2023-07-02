import React, { useState} from 'react';
import "react-multi-carousel/lib/styles.css";
import pub from "./data";
import './pub.scss';
import { Blurhash } from 'react-blurhash';

function Pub(){
    const [data, setData] = useState(pub);


    const handleImageLoad = (itemId) => {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === itemId ? { ...item, loading: true } : item
        )
      );
    };

    return(
     <div className='pub'>         
      <div className="ListPub">

        {data.map((item) => {
          const { id, img, blurHash, loading } = item;
          return (
            <React.Fragment key={id}>
              {!loading && <Blurhash hash={blurHash} className="listImg" />}
              <img
                src={img}
                alt=""
                className="listImg"
                onLoad={() => handleImageLoad(id)}
                style={{ display: loading ? "block" : "none" }}
              />
            </React.Fragment>
          );
        })}
        </div>
    </div>
    )
}
export default Pub;







