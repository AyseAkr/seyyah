import { PropsWithChildren } from "react";
import "../styles/DetailSection.css";

type DetailSectionProps = {
  title: string
};

export default function DetailSection(props: PropsWithChildren<DetailSectionProps>) {
  return (
    <div className="detail-section">
      <h3 className="detail-section-title">{props.title}</h3>
      {props.children}
    </div>
  );
}
