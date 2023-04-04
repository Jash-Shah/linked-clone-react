import React from 'react'
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info"
import { FiberManualRecord } from '@mui/icons-material';

export const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4> {heading} </h4>
        <p> {subtitle} </p>
      </div>
    </div>
    );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> LinkedIn News </h2>
        <InfoIcon />
      </div>

      {newsArticle("New Love is in the air!", "1d ago - 369 readers")}
      {newsArticle("Hiring Intent up in these sectors", "9h ago - 524 readers")}
      {newsArticle("DMI Finance raises $400M", "15h ago - 897 readers")}
      {newsArticle("Fresh IPO Funding falls sharply", "1d ago - 1,014 readers")}
      {newsArticle("More shoppers eye premium products", "9h ago")}
      {newsArticle("IPL's growing global footprint", "2d ago - 94 readers")}

    </div>
  )
}
