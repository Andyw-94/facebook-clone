import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        className="story"
        image="https://media.overstockart.com/optimized/cache/data/VGG415_DUC-3-25-15-320x320.jpg"
        profileSrc="https://www.biography.com/.image/t_share/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg"
        title="Van Gogh"
      />
      <Story
        className="story"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTbiFoX6iTMuAURLzBKFXpOicD24NE0q7ThLhqSyMod0ByjgGhSn1exMUMfQI_6WK8rI&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/ac/Gerhard_von_K%C3%BCgelgen_portrait_of_Friedrich.jpg"
        title="David Friedrich"
      />
      <Story
        className="story"
        image="https://i.etsystatic.com/13984062/r/il/060097/1074327792/il_1588xN.1074327792_30bw.jpg"
        profileSrc="https://uploads5.wikiart.org/images/edward-hopper.jpg!Portrait.jpg"
        title="Ed Hopper"
      />
      <Story
        className="story"
        image="https://artsy-media-uploads.s3.amazonaws.com/hQHa1xDqerAuo0bivt2sng%2Fmemory.jpg"
        profileSrc="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
        title="Salvador Dali"
      />
    </div>
  );
};

export default StoryReel;
